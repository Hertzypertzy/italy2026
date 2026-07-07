import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import Replicate from "replicate";
import { getDay } from "@/data/days";
import { SheetTemplate, SHEET_HEIGHT, SHEET_WIDTH } from "@/lib/sheetTemplate";
import { loadFonts } from "@/lib/fonts";

export const runtime = "nodejs";
export const maxDuration = 60;

const REPLICATE_MODEL = "black-forest-labs/flux-schnell";

async function generateHero(prompt: string): Promise<string | null> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return null;
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
    if (typeof output === "string") return output;
    if (Array.isArray(output)) {
      const first = output[0];
      if (typeof first === "string") return first;
      if (first && typeof first === "object" && "url" in first) {
        const u = (first as { url: () => URL | string }).url();
        return typeof u === "string" ? u : u.toString();
      }
    }
    if (output && typeof output === "object" && "url" in output) {
      const u = (output as { url: () => URL | string }).url();
      return typeof u === "string" ? u : u.toString();
    }
    return null;
  } catch (err) {
    console.error("Replicate error:", err);
    return null;
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
  const body = await req.json().catch(() => ({}));
  const dayId = typeof body?.dayId === "string" ? body.dayId : "";
  const day = getDay(dayId);
  if (!day) {
    return new Response(JSON.stringify({ error: "unknown_day" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const [fonts, heroUrl] = await Promise.all([loadFonts(), generateHero(day.heroPrompt)]);
  const heroDataUrl = heroUrl ? await fetchImageAsDataUrl(heroUrl) : null;

  return new ImageResponse(<SheetTemplate day={day} heroImageUrl={heroDataUrl} />, {
    width: SHEET_WIDTH,
    height: SHEET_HEIGHT,
    fonts: [
      { name: "Inter", data: fonts.inter, weight: 500, style: "normal" },
      { name: "Inter", data: fonts.interBold, weight: 700, style: "normal" },
      { name: "Fraunces", data: fonts.fraunces, weight: 700, style: "normal" },
    ],
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=3600, s-maxage=3600",
      "content-disposition": `inline; filename="${day.id}.png"`,
    },
  });
}
