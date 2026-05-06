import { mkdir, writeFile } from "node:fs/promises";
import { loadLocalEnv } from "./utils/load-env.mjs";

loadLocalEnv();

const OUTPUT_DIR = new URL("../docs/public/data/", import.meta.url);
const OUTPUT_FILE = new URL("site-stats.json", OUTPUT_DIR);

const UMAMI_API_URL =
  process.env.UMAMI_API_URL?.replace(/\/+$/, "") || "https://api.umami.is/v1";
const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID || "";
const UMAMI_API_KEY = process.env.UMAMI_API_KEY || "";

function createPayload({
  enabled,
  message = "",
  pageviews = 0,
  visitors = 0,
  visits = 0
}) {
  return {
    enabled,
    source: "umami",
    message,
    fetchedAt: new Date().toISOString(),
    stats: {
      pageviews,
      visitors,
      visits
    }
  };
}

async function writePayload(payload) {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "x-umami-api-key": UMAMI_API_KEY
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed with status ${response.status}: ${text}`);
  }

  return response.json();
}

async function main() {
  if (!UMAMI_WEBSITE_ID || !UMAMI_API_KEY) {
    await writePayload(
      createPayload({
        enabled: false,
        message: "Missing UMAMI_WEBSITE_ID or UMAMI_API_KEY."
      })
    );
    console.log("Skipped Umami stats sync because required environment variables are missing.");
    return;
  }

  const endpoint = `${UMAMI_API_URL}/websites/${UMAMI_WEBSITE_ID}/stats?startAt=0&endAt=${Date.now()}`;
  const stats = await requestJson(endpoint);

  await writePayload(
    createPayload({
      enabled: true,
      pageviews: stats.pageviews ?? 0,
      visitors: stats.visitors ?? 0,
      visits: stats.visits ?? 0
    })
  );

  console.log("Saved Umami site stats to docs/public/data/site-stats.json");
}

main().catch(async (error) => {
  await writePayload(
    createPayload({
      enabled: false,
      message: error instanceof Error ? error.message : String(error)
    })
  );
  console.warn(error instanceof Error ? error.message : String(error));
});
