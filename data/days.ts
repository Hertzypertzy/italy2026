export type CityKey = "verona" | "garda" | "florence" | "rome" | "prep";

export type Day = {
  id: string;
  dayNumber: number;
  totalDays: number;
  date: string;
  city: CityKey;
  title: string;
  subtitle: string;
  keyTimes?: { label: string; value: string }[];
  schedule: { time: string; emoji: string; title: string; note: string }[];
  trivia?: { emoji: string; text: string }[];
  wordOfDay?: { word: string; pron: string; meaning: string };
  challenge?: { emoji: string; text: string };
  heroPrompt: string;
};

export const CITY_ACCENTS: Record<CityKey, { color: string; label: string }> = {
  verona: { color: "#2c6bed", label: "Verona" },
  garda: { color: "#17b3a3", label: "Lake Garda" },
  florence: { color: "#e07a5f", label: "Florence" },
  rome: { color: "#f5a623", label: "Rome" },
  prep: { color: "#6d3bd4", label: "Countdown" },
};

const HERO_PROMPT_BASE =
  "A warm, playful, modern flat-illustration travel banner. {SCENE}. Soft rounded shapes, cheerful colors, friendly hand-drawn children's-picture-book feel. Dominant color {ACCENT}. NO text, NO words, NO letters in the image. Clean, uncluttered, lots of negative space. Wide banner composition, subjects in the lower two-thirds. Family-friendly, bright, inviting.";

function heroPrompt(scene: string, accent: string) {
  return HERO_PROMPT_BASE.replace("{SCENE}", scene).replace("{ACCENT}", accent);
}

export const DAYS: Day[] = [
  {
    id: "countdown",
    dayNumber: 0,
    totalDays: 15,
    date: "One week to go!",
    city: "prep",
    title: "7 sleeps until Italy",
    subtitle: "Passports · Packing · Practice a phrase",
    schedule: [
      { time: "Now", emoji: "🎒", title: "Pull out the suitcases", note: "Pick one carry-on each" },
      { time: "This week", emoji: "🗣️", title: "Learn 'Ciao!' and 'Grazie!'", note: "One new word each day" },
      { time: "Sun", emoji: "📱", title: "Download offline maps", note: "Google Maps for Verona + Rome" },
      { time: "Departure eve", emoji: "🛌", title: "Early bedtime", note: "Long day tomorrow!" },
    ],
    trivia: [
      { emoji: "🍕", text: "Pizza was invented in Naples ~250 years ago" },
      { emoji: "🐺", text: "Rome was legendarily founded by twins raised by a wolf" },
    ],
    wordOfDay: { word: "Ciao", pron: "chow", meaning: "hi / bye" },
    challenge: { emoji: "🎯", text: "Guess how many gelato flavors we'll try" },
    heroPrompt: heroPrompt(
      "a cheerful travel suitcase with a small airplane and Italian landmarks (Colosseum, leaning tower, gondola) floating around it like fun stickers",
      "#6d3bd4"
    ),
  },
  {
    id: "day01",
    dayNumber: 1,
    totalDays: 15,
    date: "Monday · July 13, 2026",
    city: "verona",
    title: "Ciao, Italia!",
    subtitle: "Tel Aviv → Verona",
    keyTimes: [
      { label: "Take off", value: "12:40" },
      { label: "Land VRN", value: "17:10" },
    ],
    schedule: [
      { time: "09:30", emoji: "🚕", title: "Leave for TLV", note: "Passports + snacks" },
      { time: "12:40", emoji: "✈️", title: "Fly to Verona", note: "~4h flight, movie time" },
      { time: "17:10", emoji: "🛬", title: "Land in Verona", note: "Grab bags, meet driver" },
      { time: "19:00", emoji: "🍝", title: "Dinner in old town", note: "First pasta of the trip!" },
    ],
    trivia: [
      { emoji: "🏟️", text: "Verona's arena is 2000 years old — older than the Colosseum" },
      { emoji: "💌", text: "Romeo & Juliet was set here — there's a balcony you can visit" },
    ],
    wordOfDay: { word: "Buonasera", pron: "bwoh-na-SEH-ra", meaning: "good evening" },
    challenge: { emoji: "📸", text: "Spot the arena from the car window" },
    heroPrompt: heroPrompt(
      "the ancient Verona Arena amphitheater at golden hour with a small cartoon airplane in the sky above and cypress trees nearby",
      "#2c6bed"
    ),
  },
  {
    id: "day03",
    dayNumber: 3,
    totalDays: 15,
    date: "Wednesday · July 15, 2026",
    city: "garda",
    title: "Splash day",
    subtitle: "Lake Garda · Water park",
    keyTimes: [
      { label: "Park open", value: "10:00" },
      { label: "Back at hotel", value: "18:30" },
    ],
    schedule: [
      { time: "08:30", emoji: "🥐", title: "Big breakfast", note: "Fuel up for slides" },
      { time: "10:00", emoji: "🎢", title: "Enter Caneva Aquapark", note: "Lockers by the entrance" },
      { time: "13:00", emoji: "🍕", title: "Pizza lunch in the park", note: "Sit in the shade" },
      { time: "17:30", emoji: "🚗", title: "Drive back", note: "Ice cream stop on the way" },
    ],
    trivia: [
      { emoji: "🏞️", text: "Lake Garda is Italy's biggest lake — 370 km² of water" },
      { emoji: "🍋", text: "The north shore grows lemons even though it's in the Alps" },
    ],
    wordOfDay: { word: "Acqua", pron: "AH-kwah", meaning: "water" },
    challenge: { emoji: "🏆", text: "Ride the tallest slide at least once" },
    heroPrompt: heroPrompt(
      "a sunny Lake Garda scene with a cheerful cartoon water slide, palm trees, an inflatable float, and mountains in the background reflecting in the lake",
      "#17b3a3"
    ),
  },
];

export function getDay(id: string): Day | undefined {
  return DAYS.find((d) => d.id === id);
}
