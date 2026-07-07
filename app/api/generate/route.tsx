import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import Replicate from "replicate";
import { getDay } from "@/data/days";
import { SheetTemplate, SHEET_HEIGHT, SHEET_WIDTH } from "@/lib/sheetTemplate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const REPLICATE_MODEL = "black-forest-labs/flux-schnell";

async function generateHero(prompt: string): Promise<{ url: string | null; error?: string }> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return { url: null, error: "REPLICATE_API_TOKEN not set" };
  const replicate = new Replicate({ auth: token });
  try {
    const output = (await replicate.run(REPLICATE_MODEL, {
      input: {
        prompt,
        aspect_ratio: "3:2",
        output_format: "jpg",
        output_quality: 85,
        num_outputs: 1,
        num_inference_steps: 4,
      },
    })) as unknown;

    // flux-schnell can return: string URL, string[], or FileOutput[] (with .url())
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
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get("content-type") || "image/jpeg";
    return `data:${contentType};base64,${buf.toString("base64")}`;
  } catch (err) {
    console.error("Failed to fetch hero:", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const dayId = typeof body?.dayId === "string" ? body.dayId : "";
    const day = getDay(dayId);
    if (!day) {
      return Response.json({ error: "unknown_day", dayId }, { status: 400 });
    }

    const hero = await generateHero(day.heroPrompt);
    const heroDataUrl = hero.url ? await fetchImageAsDataUrl(hero.url) : null;

    return new ImageResponse(<SheetTemplate day={day} heroImageUrl={heroDataUrl} />, {
      width: SHEET_WIDTH,
      height: SHEET_HEIGHT,
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=3600, s-maxage=3600",
        "content-disposition": `inline; filename="${day.id}.png"`,
        "x-hero-source": hero.url ? "replicate" : hero.error || "none",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack || "" : "";
    console.error("generate route error:", msg, stack);
    return Response.json({ error: "generate_failed", message: msg, stack }, { status: 500 });
  }
}
