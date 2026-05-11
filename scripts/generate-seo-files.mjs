import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";
import { loadLocalEnv } from "./utils/load-env.mjs";

loadLocalEnv();

const DOCS_DIR = join(process.cwd(), "docs");
const PUBLIC_DIR = join(DOCS_DIR, "public");
const ROBOTS_FILE = join(PUBLIC_DIR, "robots.txt");
const SITEMAP_FILE = join(PUBLIC_DIR, "sitemap.xml");
const SITE_URL = process.env.SITE_URL?.replace(/\/+$/, "") || "";

function toPosixPath(value) {
  return value.split(sep).join("/");
}

function toRoute(filePath) {
  const relativePath = toPosixPath(relative(DOCS_DIR, filePath));
  const noExtPath = relativePath.slice(0, -extname(relativePath).length);

  if (noExtPath === "index") {
    return "/";
  }

  if (noExtPath.endsWith("/index")) {
    return `/${noExtPath.slice(0, -"/index".length)}/`;
  }

  return `/${noExtPath}`;
}

function parseFrontmatterValue(rawValue) {
  const value = rawValue.trim();

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  if (/^(true|false)$/i.test(value)) {
    return value.toLowerCase() === "true";
  }

  return value;
}

function extractFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    return {};
  }

  return match[1].split(/\r?\n/).reduce((frontmatter, line) => {
    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);

    if (!keyValueMatch) {
      return frontmatter;
    }

    const [, key, value] = keyValueMatch;
    frontmatter[key] = parseFrontmatterValue(value);
    return frontmatter;
  }, {});
}

async function collectMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".vitepress" || entry.name === "public") {
      continue;
    }

    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function buildSitemapEntries() {
  const markdownFiles = await collectMarkdownFiles(DOCS_DIR);

  const entries = await Promise.all(
    markdownFiles.map(async (filePath) => {
      const [fileStat, source] = await Promise.all([
        stat(filePath),
        readFile(filePath, "utf8")
      ]);
      const frontmatter = extractFrontmatter(source);

      if (frontmatter.draft === true || frontmatter.noindex === true) {
        return null;
      }

      return {
        route: toRoute(filePath),
        lastmod: fileStat.mtime.toISOString()
      };
    })
  );

  return entries.filter(Boolean);
}

function renderRobots() {
  const lines = ["User-agent: *", "Allow: /"];

  if (SITE_URL) {
    lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
  }

  return `${lines.join("\n")}\n`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderSitemap(entries) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${entry.route}`)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderEmptySitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`;
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  await writeFile(ROBOTS_FILE, renderRobots(), "utf8");

  if (!SITE_URL) {
    await writeFile(SITEMAP_FILE, renderEmptySitemap(), "utf8");
    console.log("Generated empty sitemap because SITE_URL is missing.");
    return;
  }

  const entries = await buildSitemapEntries();
  await writeFile(SITEMAP_FILE, renderSitemap(entries), "utf8");
  console.log(`Generated sitemap with ${entries.length} routes.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
