import { mkdir, writeFile } from "node:fs/promises";
import { request } from "node:https";
import { extname } from "node:path";

const SOURCE_URL = "https://movie.douban.com/";
const OUTPUT_DIR = new URL("../docs/public/data/", import.meta.url);
const OUTPUT_FILE = new URL("douban-nowplaying.json", OUTPUT_DIR);
const IMAGE_DIR = new URL("douban-nowplaying/", OUTPUT_DIR);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = request(
      url,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Referer: "https://movie.douban.com/"
        }
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`Request failed with status ${res.statusCode}`));
          return;
        }

        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () =>
          resolve({
            body: Buffer.concat(chunks),
            contentType: res.headers["content-type"] || ""
          })
        );
      }
    );

    req.on("error", reject);
    req.end();
  });
}

async function fetchHtml(url) {
  const { body } = await fetchUrl(url);
  return body.toString("utf8");
}

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractMatch(source, pattern) {
  const match = source.match(pattern);
  return match ? decodeHtml(match[1].trim()) : "";
}

function parseNowPlaying(html) {
  const start = html.indexOf('<div id="screening"');
  if (start === -1) {
    throw new Error("Unable to locate the now playing section on Douban homepage.");
  }

  const screeningHtml = html.slice(start, start + 30000);
  const itemPattern = /<li class="ui-slide-item\b[^>]*>[\s\S]*?<\/ul>/g;
  const rawItems = screeningHtml.match(itemPattern) || [];

  return rawItems
    .slice(0, 5)
    .map((item) => {
      const fullTitle = extractMatch(item, /data-title="([^"]+)"/);
      const href = extractMatch(item, /<li class="poster">[\s\S]*?<a[^>]+href="([^"]+)"/);
      const cover = extractMatch(item, /<img[^>]+src="([^"]+)"/);

      return {
        title: fullTitle.split(" ").filter(Boolean)[0] || fullTitle,
        href,
        cover
      };
    })
    .filter((item) => item.title && item.href && item.cover);
}

async function main() {
  const html = await fetchHtml(SOURCE_URL);
  const movies = parseNowPlaying(html);

  if (movies.length === 0) {
    throw new Error("No movie items were parsed from Douban homepage.");
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(IMAGE_DIR, { recursive: true });

  const moviesWithLocalCovers = await Promise.all(
    movies.map(async (movie, index) => {
      const { body, contentType } = await fetchUrl(movie.cover);
      const pathname = new URL(movie.cover).pathname;
      const fallbackExt = contentType.includes("png") ? ".png" : ".jpg";
      const extension = extname(pathname) || fallbackExt;
      const filename = `movie-${index + 1}${extension}`;
      const target = new URL(filename, IMAGE_DIR);

      await writeFile(target, body);

      return {
        ...movie,
        cover: `/data/douban-nowplaying/${filename}`
      };
    })
  );

  await writeFile(
    OUTPUT_FILE,
    `${JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        source: SOURCE_URL,
        movies: moviesWithLocalCovers
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(`Saved ${moviesWithLocalCovers.length} movies to docs/public/data/douban-nowplaying.json`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
