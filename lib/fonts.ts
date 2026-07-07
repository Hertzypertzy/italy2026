// Superset of characters used across the app (Latin ASCII + Italian accents +
// common punctuation + arrows). Passing this as the CSS API `text=` param
// forces Google Fonts to return a small TTF subset that satori can parse.
const FONT_SUBSET =
  "abcdefghijklmnopqrstuvwxyz" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "0123456789" +
  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
  "àáâãäåæçèéêëìíîïñòóôõöøùúûüýÿœš" +
  "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝŸŒŠ" +
  "·→←↑↓—–…•’‘“”";

type FontKey = `${string}@${number}`;
const cache = new Map<FontKey, ArrayBuffer>();

export async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const key: FontKey = `${family}@${weight}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const familyParam = family.replace(/ /g, "+");
  const url = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@${weight}&text=${encodeURIComponent(FONT_SUBSET)}`;
  const cssRes = await fetch(url);
  if (!cssRes.ok) throw new Error(`google-fonts css ${family} ${weight}: ${cssRes.status}`);
  const css = await cssRes.text();
  const match = css.match(/src:\s*url\((https?:[^)]+)\)\s*format\(['"](opentype|truetype)['"]\)/);
  if (!match) throw new Error(`no truetype/opentype src for ${family} ${weight}`);
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) throw new Error(`font fetch ${family} ${weight}: ${fontRes.status}`);
  const buf = await fontRes.arrayBuffer();
  cache.set(key, buf);
  return buf;
}

export async function loadSheetFonts() {
  const [interReg, interBold, fraunces] = await Promise.all([
    loadGoogleFont("Inter", 500),
    loadGoogleFont("Inter", 700),
    loadGoogleFont("Fraunces", 700),
  ]);
  return [
    { name: "Inter", data: interReg, weight: 500 as const, style: "normal" as const },
    { name: "Inter", data: interBold, weight: 700 as const, style: "normal" as const },
    { name: "Fraunces", data: fraunces, weight: 700 as const, style: "normal" as const },
  ];
}
