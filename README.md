# Trip Sheet Studio — Italy 2026

A tiny Next.js app that generates a one-page illustrated trip sheet for each day
of the trip. Pick a day, tap **Generate ✨**, and get a shareable PNG.

The image model (Replicate FLUX) only draws the decorative hero illustration.
All schedule text is rendered from clean HTML/CSS so times, names, and words
stay perfectly accurate.

## Quick start

```bash
npm install
cp .env.example .env.local
# put your Replicate token in .env.local
npm run dev
```

Open http://localhost:3000 on your phone (same network) or laptop.

## How it works

1. `data/days.ts` — the pre-defined content per day (schedule, trivia, hero prompt).
2. `POST /api/generate` — takes a `dayId`, calls Replicate (`flux-schnell`) with
   the day's `heroPrompt`, then composites the illustration into a styled
   template and returns a PNG.
3. `lib/sheetTemplate.tsx` — the visual template, rendered by `next/og` (satori).
   Satori is flexbox-only; the layout stays inside that constraint.

## Adding a new day

Add one object to `DAYS` in `data/days.ts` — that's it. The dropdown, prompt,
and template all pick it up automatically.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (Next.js is auto-detected).
3. In **Project → Settings → Environment Variables**, add:
   - `REPLICATE_API_TOKEN` = your token
4. Deploy. Open the URL on your phone.

The Replicate token is used only in the serverless route
(`app/api/generate/route.tsx`) and is never sent to the browser.

## Cost

`flux-schnell` runs ~$0.003 per image. Even regenerating all 15 sheets many
times over is only pennies. Generated PNGs are cached for an hour, so a
re-tap of the same day is free until the cache expires.

## Design tokens

Ink `#1a2238` · Paper `#fdfcf9` · Card `#ffffff` · Muted `#7a8290` · Line
`#eeebe4`. City accents: Verona `#2c6bed`, Garda `#17b3a3`, Florence `#e07a5f`,
Rome `#f5a623`, Prep `#6d3bd4`.
