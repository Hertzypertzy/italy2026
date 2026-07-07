let cache: { inter: ArrayBuffer; interBold: ArrayBuffer; fraunces: ArrayBuffer } | null = null;

async function fetchFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font ${url}: ${res.status}`);
  return res.arrayBuffer();
}

export async function loadFonts() {
  if (cache) return cache;
  const [inter, interBold, fraunces] = await Promise.all([
    fetchFont("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf"),
    fetchFont("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf"),
    fetchFont("https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-700-normal.ttf"),
  ]);
  cache = { inter, interBold, fraunces };
  return cache;
}
