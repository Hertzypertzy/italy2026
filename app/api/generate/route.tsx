import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import Replicate from "replicate";
import { getDay } from "@/data/days";
import { loadSheetFonts } from "@/lib/fonts";
import { SheetTemplate, SHEET_HEIGHT, SHEET_WIDTH } from "@/lib/sheetTemplate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const REPLICATE_MODEL = "black-forest-labs/flux-schnell";
const REPLICATE_TIMEOUT_MS = 25_000;

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    promise.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (err) => {
        clearTimeout(t);
        reject(err);
      },
    );
  });
}

async function generateHero(prompt: string): Promise<{ url: string | null; error?: string }> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return { url: null, error: "REPLICATE_API_TOKEN not set" };
  const replicate = new Replicate({ auth: token });
  try {
    const output = (await withTimeout(
      replicate.run(REPLICATE_MODEL, {
        input: {
          prompt,
          aspect_ratio: "3:2",
          output_format: "jpg",
          output_quality: 85,
          num_outputs: 1,
          num_inference_steps: 4,
        },
      }),
      REPLICATE_TIMEOUT_MS,
      "replicate.run",
    )) as unknown;

    const pick = (v: unknown): string | null => {
      if (typeof v === "string") return v;
      if (v && typeof v === "object" && "url" in v) {
        const u = (v as { url: () => URL | string }).url();
        return typeof u === "string" ? u : u.toString();
      }
      return null;
    };
    if (Array.isArray(output)) return { url: pick(output[0]) };
    return { url: pick(output) };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Replicate error:", msg);
    return { url: null, error: `replicate: ${msg}` };
  }
}

async function fetchImageAsDataUrl(url: string): Promise<string | null> {
  try {
    const res = await withTimeout(fetch(url), 8_000, "hero fetch");
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get("content-type") || "image/jpeg";
    return `data:${contentType};base64,${buf.toString("base64")}`;
  } catch (err) {
    console.error("Failed to fetch hero:", err);
    return null;
  }
}

async function render(dayId: string, bust: string | null) {
  const t0 = performance.now();
  const day = getDay(dayId);
  if (!day) {
    return Response.json({ error: "unknown_day", dayId }, { status: 400 });
  }

  const [hero, fonts] = await Promise.all([
    generateHero(day.heroPrompt),
    withTimeout(loadSheetFonts(), 10_000, "loadSheetFonts").catch((err) => {
      console.error("font load failed:", err);
      return [] as Awaited<ReturnType<typeof loadSheetFonts>>;
    }),
  ]);
  const tHero = performance.now();
  const heroDataUrl = hero.url ? await fetchImageAsDataUrl(hero.url) : null;
  const tFetch = performance.now();

  const image = new ImageResponse(<SheetTemplate day={day} heroImageUrl={heroDataUrl} />, {
    width: SHEET_WIDTH,
    height: SHEET_HEIGHT,
    fonts: fonts.length ? fonts : undefined,
  });

  // Drain the ImageResponse so satori/resvg errors surface inside our try/catch.
  const buf = Buffer.from(await image.arrayBuffer());
  const tRender = performance.now();

  console.log(
    `[generate ${dayId}] hero+fonts=${Math.round(tHero - t0)}ms fetch=${Math.round(tFetch - tHero)}ms render=${Math.round(tRender - tFetch)}ms total=${Math.round(tRender - t0)}ms source=${hero.url ? "replicate" : hero.error || "none"}`,
  );

  // If bust is set we still return the fresh PNG but forbid caching so the next
  // no-bust request re-hits the origin and refreshes the cached copy.
  const cacheControl = bust
    ? "no-store"
    : "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800";

  return new Response(buf, {
    status: 200,
    headers: {
      "content-type": "image/png",
      "cache-control": cacheControl,
      "content-disposition": `inline; filename="${day.id}.png"`,
      "x-hero-source": hero.url ? "replicate" : hero.error || "none",
    },
  });
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const dayId = url.searchParams.get("dayId") || "";
    const bust = url.searchParams.get("bust");
    return await render(dayId, bust);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack || "" : "";
    console.error("generate route error:", msg, stack);
    return Response.json({ error: "generate_failed", message: msg, stack }, { status: 500 });
  }
}

// Keep POST working for backwards compatibility with any old client.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const dayId = typeof body?.dayId === "string" ? body.dayId : "";
    const bust = typeof body?.bust === "string" ? body.bust : null;
    return await render(dayId, bust);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack || "" : "";
    console.error("generate route error:", msg, stack);
    return Response.json({ error: "generate_failed", message: msg, stack }, { status: 500 });
  }
}
