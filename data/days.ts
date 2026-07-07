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
  hotel?: string;
  heroPrompt: string;
};

export const CITY_ACCENTS: Record<CityKey, { color: string; label: string }> = {
  verona: { color: "#2c6bed", label: "Verona" },
  garda: { color: "#17b3a3", label: "Lake Garda" },
  florence: { color: "#e07a5f", label: "Florence" },
  rome: { color: "#f5a623", label: "Rome" },
  prep: { color: "#6d3bd4", label: "To Italy" },
};

export const DAYS: Day[] = [
  // ==================== COUNTDOWN SHEETS (7 → 1) ====================

  {
    id: "countdown7",
    dayNumber: 0,
    totalDays: 15,
    date: "Monday · July 6, 2026",
    city: "prep",
    title: "7 Days to Go!",
    subtitle: "One week until Italy! 🇮🇹",
    keyTimes: [
      { label: "Days to go", value: "7" },
      { label: "Days away", value: "15" },
      { label: "Cities", value: "4" },
      { label: "Gelato", value: "∞" },
    ],
    schedule: [
      { time: "", emoji: "🛂", title: "Find your passport", note: "Must be valid past Jan 2027 — tell Dad if it's missing!" },
      { time: "", emoji: "📅", title: "Picture the trip", note: "4 cities, theme parks, Venice, Rome… get excited!" },
      { time: "", emoji: "🧺", title: "Clear a packing corner", note: "Somewhere to pile things as you think of them" },
    ],
    challenge: { emoji: "🤩", text: "Everyone name the ONE thing they're most excited about" },
    heroPrompt:
      "A warm playful flat-illustration banner: a big cheerful calendar with a circled date and a small airplane and Italian flag flying off it, confetti in the air. Purple palette, rounded shapes, children's-picture-book style, lots of negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown6",
    dayNumber: 0,
    totalDays: 15,
    date: "Tuesday · July 7, 2026",
    city: "prep",
    title: "6 Days to Go!",
    subtitle: "Almost time to fly ✈️🇮🇹",
    keyTimes: [
      { label: "Days to go", value: "6" },
      { label: "Days away", value: "15" },
      { label: "Cities", value: "4" },
      { label: "Parks", value: "4" },
    ],
    schedule: [
      { time: "", emoji: "🛂", title: "Find your passport", note: "Everyone locate it this week" },
      { time: "", emoji: "🎒", title: "Start packing", note: "Add to the pile as ideas pop up" },
      { time: "", emoji: "🔋", title: "Charge devices", note: "Tablets, headphones, power bank" },
    ],
    challenge: { emoji: "🎮", text: "Kids: start downloading movies & games for the plane" },
    heroPrompt:
      "A warm playful flat-illustration banner: a happy family of four excitedly packing colorful suitcases with a small cartoon airplane in a soft sky. Purple palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown5",
    dayNumber: 0,
    totalDays: 15,
    date: "Wednesday · July 8, 2026",
    city: "prep",
    title: "5 Days to Go!",
    subtitle: "Getting closer! 🎉",
    keyTimes: [
      { label: "Days to go", value: "5" },
      { label: "Sleeps", value: "5" },
      { label: "Cities", value: "4" },
      { label: "Adventures", value: "∞" },
    ],
    schedule: [
      { time: "", emoji: "👕", title: "Lay out clothes", note: "Light summer stuff, 2 swimsuits, comfy shoes" },
      { time: "", emoji: "🧴", title: "Toiletries bag", note: "Toothbrush, toothpaste, sunscreen, deodorant" },
      { time: "", emoji: "🎧", title: "Test headphones", note: "Make sure everyone's plane audio works" },
    ],
    challenge: { emoji: "🍕", text: "Family vote: most excited for pizza, gelato, or the rides?" },
    heroPrompt:
      "A warm playful flat-illustration banner: a cheerful open suitcase with folded summer clothes, a sun hat, sunglasses and a swim ring spilling out in the sunshine. Purple-and-cream palette, rounded shapes, children's-book style. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown4",
    dayNumber: 0,
    totalDays: 15,
    date: "Thursday · July 9, 2026",
    city: "prep",
    title: "4 Days to Go!",
    subtitle: "The excitement is real 🤗",
    keyTimes: [
      { label: "Days to go", value: "4" },
      { label: "Cities", value: "4" },
      { label: "Parks", value: "4" },
      { label: "Gelato", value: "∞" },
    ],
    schedule: [
      { time: "", emoji: "🩳", title: "Kids pack your carry-on", note: "You each get ONE trolley for the plane" },
      { time: "", emoji: "📖", title: "Pick a book to bring", note: "Something good for the flight" },
      { time: "", emoji: "🎮", title: "Load plane entertainment", note: "Games, movies, all downloaded" },
    ],
    challenge: { emoji: "🗣️", text: "Learn to say 'Ciao!' and 'Grazie!' — practice on the family" },
    heroPrompt:
      "A warm playful flat-illustration banner: a kid happily zipping up a small rolling carry-on bag packed with a book, headphones and a game controller. Purple palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown3",
    dayNumber: 0,
    totalDays: 15,
    date: "Friday · July 10, 2026",
    city: "prep",
    title: "3 Days to Go!",
    subtitle: "This is really happening! 🙌",
    keyTimes: [
      { label: "Days to go", value: "3" },
      { label: "Cities", value: "4" },
      { label: "Parks", value: "4" },
      { label: "Gelato", value: "∞" },
    ],
    schedule: [
      { time: "", emoji: "🧳", title: "Nearly-final pack", note: "Almost everything in the bags now" },
      { time: "", emoji: "📱", title: "Download offline maps", note: "Verona, Garda, Florence, Rome" },
      { time: "", emoji: "🔌", title: "Pack chargers + adapter", note: "Italy uses type F/L plugs" },
    ],
    challenge: { emoji: "🍦", text: "Master 'un gelato, per favore!' for real gelato-ordering glory" },
    heroPrompt:
      "A warm playful flat-illustration banner: a cartoon map of Italy with little icons — a leaning tower, a colosseum, a gondola, a roller coaster — dotted along it. Purple accents, rounded shapes, children's-book style. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown2",
    dayNumber: 0,
    totalDays: 15,
    date: "Saturday · July 11, 2026",
    city: "prep",
    title: "2 Days to Go!",
    subtitle: "So close now! ✨",
    keyTimes: [
      { label: "Sleeps left", value: "2" },
      { label: "Cities", value: "4" },
      { label: "Mood", value: "🤩" },
    ],
    schedule: [
      { time: "", emoji: "🧳", title: "Weigh the bags", note: "Make sure they're not too heavy" },
      { time: "", emoji: "🪥", title: "Toiletries check", note: "Toothbrush, toothpaste, deodorant, sunscreen" },
      { time: "", emoji: "🔋", title: "Charge everything overnight", note: "Full batteries for travel day" },
    ],
    challenge: { emoji: "📸", text: "Decide who's the family photographer for the trip!" },
    heroPrompt:
      "A warm playful flat-illustration banner: two packed suitcases side by side with a camera, sunglasses and a passport on top, ready to go. Purple palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "countdown1",
    dayNumber: 0,
    totalDays: 15,
    date: "Sunday · July 12, 2026",
    city: "prep",
    title: "1 Day to Go!",
    subtitle: "Tomorrow we fly! 🛫",
    keyTimes: [
      { label: "Sleeps left", value: "1" },
      { label: "Wake-up", value: "early!" },
      { label: "Mood", value: "🤩" },
    ],
    schedule: [
      { time: "", emoji: "🧳", title: "Final zip-up", note: "Everything in, bags by the door" },
      { time: "", emoji: "📄", title: "Passports + tickets ready", note: "Stacked by the door tonight" },
      { time: "", emoji: "🛏️", title: "Early night", note: "Big travel day tomorrow — sleep well!" },
    ],
    challenge: { emoji: "😴", text: "Get a great sleep — the adventure begins tomorrow!" },
    heroPrompt:
      "A warm cozy flat-illustration banner: packed suitcases lined up by a front door at night with a passport and airplane ticket on top and a crescent moon in the window. Calm purple night palette, rounded shapes, children's-book style. NO text, no words, no letters in the image.",
  },

  // ==================== 15 TRIP DAYS ====================

  {
    id: "day01",
    dayNumber: 1,
    totalDays: 15,
    date: "Monday · July 13, 2026",
    city: "verona",
    title: "Ciao, Italia!",
    subtitle: "Tel Aviv → Verona ✈️",
    keyTimes: [
      { label: "At Airport", value: "11:15" },
      { label: "Take Off", value: "14:15" },
      { label: "Land Verona", value: "17:10" },
    ],
    schedule: [
      { time: "11:15", emoji: "🛫", title: "Be at Ben Gurion", note: "3 hrs early — charter flight, we sit together" },
      { time: "14:15", emoji: "✈️", title: "Fly to Verona", note: "Israir IS357, ~5 hrs. Snacks, screens, nap!" },
      { time: "~17:30", emoji: "🚕", title: "Taxi to hotel", note: "15 min into Verona. No rental car yet" },
      { time: "Evening", emoji: "🍕", title: "Dinner near the Arena", note: "Piazza Bra, first Italian dinner" },
    ],
    trivia: [
      { emoji: "🏛️", text: "The Verona Arena is a Roman amphitheater almost 2,000 years old — it once held 30,000 people!" },
      { emoji: "💘", text: "Verona is the setting of Romeo & Juliet. You can visit 'Juliet's balcony' here!" },
    ],
    wordOfDay: { word: "Ciao!", pron: "chow", meaning: "hello AND goodbye" },
    challenge: { emoji: "🇮🇹", text: "First to spot an Italian flag and shout 'bandiera!' wins first gelato" },
    hotel: "Hotel Verona, Corso Porta Nuova 47",
    heroPrompt:
      "A warm playful flat-illustration banner: the ancient Verona Arena amphitheater glowing at golden hour with a small cartoon airplane in a soft blue sky. Blue palette, rounded shapes, children's-picture-book style, airy negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day02",
    dayNumber: 2,
    totalDays: 15,
    date: "Tuesday · July 14, 2026",
    city: "verona",
    title: "Venice Day!",
    subtitle: "A city floating on water 🚤",
    keyTimes: [
      { label: "Train out", value: "09:00" },
      { label: "Reach Venice", value: "~10:15" },
      { label: "Train back", value: "18:00" },
    ],
    schedule: [
      { time: "09:00", emoji: "🚄", title: "Fast train to Venice", note: "Frecciarossa from Verona (seats booked!)" },
      { time: "~10:15", emoji: "🚉", title: "Hop to the island", note: "Local train Mestre → Santa Lucia" },
      { time: "Midday", emoji: "🛶", title: "Explore Venice", note: "Grand Canal boat, St Mark's, Rialto Bridge" },
      { time: "Afternoon", emoji: "🍦", title: "Gondola + gelato", note: "Get gloriously lost in the little canals" },
      { time: "18:00", emoji: "🚄", title: "Train back to Verona", note: "Be at Mestre by 17:45! Dinner in Verona" },
    ],
    trivia: [
      { emoji: "🚗", text: "Venice has NO cars or roads — just canals and boats. Even ambulances are boats!" },
      { emoji: "🌉", text: "Venice is built on 118 small islands connected by over 400 bridges." },
    ],
    wordOfDay: { word: "Grazie", pron: "GRAH-tsee-eh", meaning: "thank you" },
    challenge: { emoji: "🦁", text: "Spot the winged lion (Venice's symbol) — it's hidden all over the city!" },
    hotel: "Hotel Verona (2nd night)",
    heroPrompt:
      "A warm playful flat-illustration banner: a cheerful Venice canal with a gondola, colorful buildings, a little arched bridge and calm blue water. Blue palette, rounded shapes, children's-picture-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day03",
    dayNumber: 3,
    totalDays: 15,
    date: "Wednesday · July 15, 2026",
    city: "garda",
    title: "Hello, Lake Garda!",
    subtitle: "Our home for 5 nights 🏞️",
    keyTimes: [
      { label: "Car pickup", value: "10:00" },
      { label: "Drive", value: "~30 min" },
      { label: "Check-in", value: "midday" },
    ],
    schedule: [
      { time: "10:00", emoji: "🚗", title: "Pick up the car", note: "Skoda at Verona Porta Nuova station" },
      { time: "~11:00", emoji: "🏞️", title: "Drive to Peschiera", note: "Casa dei Quadri, lakeside apartment" },
      { time: "Afternoon", emoji: "🏊", title: "Lake time", note: "Settle in, dip in the lake, explore the town" },
      { time: "Evening", emoji: "🍝", title: "Welcome dinner", note: "Relaxed first night by the lake" },
    ],
    trivia: [
      { emoji: "🌊", text: "Lake Garda is Italy's BIGGEST lake — so big it has beaches and even small waves!" },
      { emoji: "🏰", text: "The lake is dotted with medieval castles you can actually visit." },
    ],
    wordOfDay: { word: "Lago", pron: "LAH-go", meaning: "lake" },
    challenge: { emoji: "🦢", text: "Count how many boats you can see on the lake at sunset" },
    hotel: "Casa dei Quadri, Peschiera del Garda (3rd floor, 48 stairs!)",
    heroPrompt:
      "A warm playful flat-illustration banner: a sunny Lake Garda scene with sparkling blue-teal water, a small sailboat, palm trees and a colorful lakeside town with a little castle. Teal palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day04",
    dayNumber: 4,
    totalDays: 15,
    date: "Thursday · July 16, 2026",
    city: "garda",
    title: "GARDALAND!",
    subtitle: "Italy's #1 theme park 🎢",
    keyTimes: [
      { label: "Park opens", value: "10:00" },
      { label: "Our plan", value: "all day" },
      { label: "Closes", value: "23:00" },
    ],
    schedule: [
      { time: "10:00", emoji: "🎢", title: "Arrive at opening", note: "Hit Raptor, Oblivion & Blue Tornado FIRST" },
      { time: "⚡", emoji: "🎟️", title: "Fast passes ready", note: "Ilan + kids have skip-the-line (in the app!)" },
      { time: "Midday", emoji: "🧴", title: "Hats + sunscreen", note: "Water rides to cool off in the heat" },
      { time: "Evening", emoji: "🌆", title: "Stay late", note: "Open till 11pm — magical at night, shorter queues" },
    ],
    trivia: [
      { emoji: "🎉", text: "Gardaland is celebrating its 50th birthday — it opened in 1975!" },
      { emoji: "🎢", text: "Its coaster 'Oblivion' drops you straight down a 42-metre vertical dive." },
    ],
    wordOfDay: { word: "Andiamo!", pron: "an-DYAH-mo", meaning: "let's go!" },
    challenge: { emoji: "🎢", text: "Who's brave enough to ride Oblivion? Count the loops on Blue Tornado!" },
    hotel: "Casa dei Quadri",
    heroPrompt:
      "A warm playful flat-illustration banner: a colorful amusement park with a looping roller coaster, a ferris wheel and happy cartoon carts on a sunny day. Teal-and-bright palette, rounded shapes, children's-picture-book style, energetic but uncluttered. NO text, no words, no letters in the image.",
  },

  {
    id: "day05",
    dayNumber: 5,
    totalDays: 15,
    date: "Friday · July 17, 2026",
    city: "garda",
    title: "Splash Day!",
    subtitle: "Caneva Aquapark 🌊",
    keyTimes: [
      { label: "Opens", value: "10:00" },
      { label: "Plan", value: "all day" },
      { label: "Closes", value: "19:00" },
    ],
    schedule: [
      { time: "10:00", emoji: "🏝️", title: "Arrive early", note: "Caribbean-themed water park, beat the crowds" },
      { time: "Midday", emoji: "🌊", title: "Slides & wave pool", note: "13 slides + a big wave pool" },
      { time: "Afternoon", emoji: "🥤", title: "Chill by the lagoon", note: "Perfect way to beat the July heat" },
      { time: "Note", emoji: "🚫", title: "No glasses/phones on slides", note: "Leave them with a towel-guardian" },
    ],
    trivia: [
      { emoji: "🌴", text: "Caneva is themed like a tropical Caribbean island — palm trees and white sand!" },
      { emoji: "🌊", text: "The wave pool makes real rolling waves you can bodysurf." },
    ],
    wordOfDay: { word: "Acqua", pron: "AH-kwa", meaning: "water" },
    challenge: { emoji: "🏄", text: "Who can ride the biggest wave in the wave pool?" },
    hotel: "Casa dei Quadri",
    heroPrompt:
      "A warm playful flat-illustration banner: a tropical water park with curvy blue water slides, palm trees, a splashing wave pool and sunshine. Teal-and-turquoise palette, rounded shapes, children's-book style, fun and airy. NO text, no words, no letters in the image.",
  },

  {
    id: "day06",
    dayNumber: 6,
    totalDays: 15,
    date: "Saturday · July 18, 2026",
    city: "garda",
    title: "Treetops & Castles",
    subtitle: "Rope park + Sirmione 🌲",
    keyTimes: [
      { label: "Rope park", value: "10:00" },
      { label: "Sirmione", value: "PM" },
    ],
    schedule: [
      { time: "Morning", emoji: "🌲", title: "Jungle Adventure", note: "Rope courses & ziplines in a shady forest" },
      { time: "Note", emoji: "⚠️", title: "Check your height", note: "Blue route needs a good reach — easier ones too!" },
      { time: "Afternoon", emoji: "🏰", title: "Sirmione", note: "Fairytale lakeside town + a castle in the water" },
      { time: "Late PM", emoji: "🏊", title: "Swim + gelato", note: "Roman ruins by the lake, then a cool swim" },
    ],
    trivia: [
      { emoji: "🏰", text: "Sirmione's Scaligero Castle is one of the few castles with its own harbor — surrounded by water!" },
      { emoji: "🌿", text: "The Roman ruins at Sirmione are almost 2,000 years old." },
    ],
    wordOfDay: { word: "Castello", pron: "kas-TEL-lo", meaning: "castle" },
    challenge: { emoji: "🧗", text: "Complete a full rope course without asking for help!" },
    hotel: "Casa dei Quadri",
    heroPrompt:
      "A warm playful flat-illustration banner: a leafy green forest adventure park with rope bridges and ziplines between trees, and a small lakeside castle in the distance. Teal-and-green palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day07",
    dayNumber: 7,
    totalDays: 15,
    date: "Sunday · July 19, 2026",
    city: "garda",
    title: "Movies & Knights!",
    subtitle: "Movieland + a medieval feast ⚔️",
    keyTimes: [
      { label: "Movieland", value: "daytime" },
      { label: "Knights dinner", value: "19:30" },
      { label: "Arrive by", value: "19:45" },
    ],
    schedule: [
      { time: "Daytime", emoji: "🎬", title: "Movieland", note: "Hollywood-style stunt shows & movie rides" },
      { time: "Note", emoji: "✅", title: "Same combo ticket", note: "Covered by our 2-parks pass" },
      { time: "~18:45", emoji: "🏰", title: "Head to the castle", note: "Wrap up Movieland, walk over" },
      { time: "19:30", emoji: "⚔️", title: "Medieval Times feast", note: "Eat with your HANDS while knights joust!" },
    ],
    trivia: [
      { emoji: "🐴", text: "At the medieval show, real knights joust on horseback while you cheer for your team's color." },
      { emoji: "🍗", text: "You eat the whole medieval feast without any cutlery — just like in the old days!" },
    ],
    wordOfDay: { word: "Cavaliere", pron: "ka-va-LYEH-reh", meaning: "knight" },
    challenge: { emoji: "⚔️", text: "Cheer LOUDEST for your knight — winning team gets bragging rights!" },
    hotel: "Casa dei Quadri (last Garda night)",
    heroPrompt:
      "A warm playful flat-illustration banner: a medieval castle arena with a cartoon knight on horseback holding a colorful flag, and a film clapperboard and movie camera nearby. Teal-and-warm palette, rounded shapes, children's-book style, fun and uncluttered. NO text, no words, no letters in the image.",
  },

  {
    id: "day08",
    dayNumber: 8,
    totalDays: 15,
    date: "Monday · July 20, 2026",
    city: "florence",
    title: "Hello, Florence!",
    subtitle: "Birthplace of the Renaissance 🎨",
    keyTimes: [
      { label: "Drive", value: "morning" },
      { label: "Car back", value: "18:00" },
      { label: "Explore", value: "evening" },
    ],
    schedule: [
      { time: "Midday", emoji: "🚗", title: "Drive to Florence", note: "~2.5 hrs from the lake" },
      { time: "18:00", emoji: "🛬", title: "Drop car at airport", note: "Then taxi to B&B (avoids city ZTL zone)" },
      { time: "Afternoon", emoji: "⛪", title: "Duomo from outside", note: "The giant striped cathedral — jaw-dropping" },
      { time: "Evening", emoji: "🍦", title: "Wander + gelato", note: "Ponte Vecchio bridge, old streets, relax" },
    ],
    trivia: [
      { emoji: "🏛️", text: "Florence's Duomo has the largest brick dome in the world — built 600 years ago with no cranes!" },
      { emoji: "🎨", text: "Florence is where the Renaissance began — the biggest art explosion in history." },
    ],
    wordOfDay: { word: "Bello!", pron: "BEL-lo", meaning: "beautiful!" },
    challenge: { emoji: "🌉", text: "Find the shops built right onto the Ponte Vecchio bridge — what do they sell?" },
    hotel: "B&B Magnolia, Via Giordano Bruno 4",
    heroPrompt:
      "A warm playful flat-illustration banner: the Florence Duomo cathedral with its famous red dome, terracotta rooftops and a river bridge at warm golden sunset. Terracotta-orange palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day09",
    dayNumber: 9,
    totalDays: 15,
    date: "Tuesday · July 21, 2026",
    city: "florence",
    title: "Meeting David",
    subtitle: "A calm day of art & wandering 🗿",
    keyTimes: [
      { label: "Arrive", value: "9:40" },
      { label: "Accademia", value: "10:00" },
    ],
    schedule: [
      { time: "9:40", emoji: "🎟️", title: "Arrive at the Accademia", note: "Swap voucher for ticket, Via Ricasoli 58" },
      { time: "10:00", emoji: "🗿", title: "Meet Michelangelo's David", note: "The world's most famous statue — 5m tall!" },
      { time: "Lunch", emoji: "🍕", title: "San Lorenzo Market", note: "Food stalls, local snacks" },
      { time: "Afternoon", emoji: "🌅", title: "Piazzale Michelangelo", note: "Best view over Florence — great at sunset" },
    ],
    trivia: [
      { emoji: "🗿", text: "The David statue is over 5 metres tall and carved from a SINGLE block of marble." },
      { emoji: "🎨", text: "Michelangelo finished David when he was just 29 years old." },
    ],
    wordOfDay: { word: "Arte", pron: "AR-teh", meaning: "art" },
    challenge: { emoji: "🗿", text: "Strike your best 'David' pose for a photo!" },
    hotel: "B&B Magnolia",
    heroPrompt:
      "A warm playful flat-illustration banner: a friendly cartoon classical marble statue on a pedestal inside a bright gallery arch, with a painter's palette nearby. Terracotta palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day10",
    dayNumber: 10,
    totalDays: 15,
    date: "Wednesday · July 22, 2026",
    city: "rome",
    title: "Roma!",
    subtitle: "The Eternal City 🏛️",
    keyTimes: [
      { label: "Train", value: "11:59" },
      { label: "Reach Rome", value: "13:35" },
      { label: "Check-in", value: "~14:00" },
    ],
    schedule: [
      { time: "11:59", emoji: "🚄", title: "Fast train to Rome", note: "Frecciarossa, Florence → Roma Termini" },
      { time: "~14:00", emoji: "🏠", title: "Check into guesthouse", note: "Near Re di Roma metro" },
      { time: "Afternoon", emoji: "⛲", title: "First taste of Rome", note: "Piazza Navona, Pantheon, Trevi Fountain" },
      { time: "Evening", emoji: "🍝", title: "Trastevere dinner", note: "Rome's prettiest, liveliest old neighborhood" },
    ],
    trivia: [
      { emoji: "🪙", text: "Throw a coin in the Trevi Fountain and legend says you'll return to Rome one day!" },
      { emoji: "🏛️", text: "The Pantheon is nearly 2,000 years old and still has the world's biggest un-reinforced concrete dome." },
    ],
    wordOfDay: { word: "Roma", pron: "ROH-ma", meaning: "Rome (say it proudly!)" },
    challenge: { emoji: "🪙", text: "Everyone throw a coin in the Trevi Fountain — make a wish!" },
    hotel: "Borghetto Guest House, Via Appia Nuova 165",
    heroPrompt:
      "A warm playful flat-illustration banner: a sunny Rome scene with the Colosseum, a baroque fountain and a Vespa scooter on cobbled streets. Golden-amber palette, rounded shapes, children's-picture-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day11",
    dayNumber: 11,
    totalDays: 15,
    date: "Thursday · July 23, 2026",
    city: "rome",
    title: "Gladiators & Ruins",
    subtitle: "The mighty Colosseum ⚔️",
    keyTimes: [
      { label: "Morning", value: "free" },
      { label: "Meet guide", value: "16:45" },
      { label: "Tour", value: "17:00" },
    ],
    schedule: [
      { time: "Morning", emoji: "🛍️", title: "Free time / shopping", note: "Via del Corso, relaxed start" },
      { time: "16:45", emoji: "📍", title: "Meet at Arch of Constantine", note: "Bring photo ID + headphones!" },
      { time: "17:00", emoji: "🏟️", title: "Colosseum + Forum + Palatine", note: "Where gladiators once fought" },
      { time: "Evening", emoji: "🍽️", title: "Dinner at Campo de' Fiori", note: "Golden-hour ruins, then dinner" },
    ],
    trivia: [
      { emoji: "🏟️", text: "The Colosseum could hold 50,000–80,000 spectators — and they had a giant sun-awning roof!" },
      { emoji: "🦁", text: "They once flooded the arena to stage pretend sea battles with real ships." },
    ],
    wordOfDay: { word: "Antico", pron: "an-TEE-ko", meaning: "ancient" },
    challenge: { emoji: "🏟️", text: "Imagine you're a gladiator — how loud would 80,000 people cheering be?" },
    hotel: "Borghetto Guest House",
    heroPrompt:
      "A warm playful flat-illustration banner: the Colosseum in warm golden evening light with a friendly cartoon gladiator helmet and ancient columns nearby. Golden palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day12",
    dayNumber: 12,
    totalDays: 15,
    date: "Friday · July 24, 2026",
    city: "rome",
    title: "The Vatican",
    subtitle: "World's smallest country 🏛️",
    keyTimes: [
      { label: "Morning", value: "free" },
      { label: "Meet", value: "17:15" },
      { label: "Entry", value: "17:30" },
    ],
    schedule: [
      { time: "Morning", emoji: "🏰", title: "Castel Sant'Angelo", note: "Castle + bridge of angels, near the Vatican" },
      { time: "Note", emoji: "👕", title: "Dress code!", note: "Knees AND shoulders covered — everyone" },
      { time: "17:15", emoji: "📍", title: "Meet near the Vatican", note: "Via Sebastiano Veniero 74, photo ID" },
      { time: "17:30", emoji: "🎨", title: "Vatican + Sistine Chapel", note: "Michelangelo's incredible ceiling" },
    ],
    trivia: [
      { emoji: "🌍", text: "Vatican City is the smallest country in the world — you can walk across it in minutes!" },
      { emoji: "🎨", text: "Michelangelo painted the Sistine Chapel ceiling lying on his back for 4 years." },
    ],
    wordOfDay: { word: "Cielo", pron: "CHEH-lo", meaning: "sky / ceiling" },
    challenge: { emoji: "🎨", text: "Look up at the Sistine ceiling — can you find the two hands almost touching?" },
    hotel: "Borghetto Guest House",
    heroPrompt:
      "A warm playful flat-illustration banner: St Peter's Basilica dome and Vatican rooftops with a soft painted ceiling motif and a castle-bridge with statues. Golden palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day13",
    dayNumber: 13,
    totalDays: 15,
    date: "Saturday · July 25, 2026",
    city: "rome",
    title: "Wander & Gelato",
    subtitle: "A relaxed Roman day 🍦",
    keyTimes: [
      { label: "Plan", value: "easy & free" },
    ],
    schedule: [
      { time: "Morning", emoji: "🚶", title: "Explore Trastevere", note: "Ivy-covered lanes, little shops" },
      { time: "Midday", emoji: "🏰", title: "Castel Sant'Angelo", note: "Or a riverside walk along the Tiber" },
      { time: "Afternoon", emoji: "🍦", title: "Gelato hunt", note: "Rome has some of the best in Italy" },
      { time: "Anytime", emoji: "⛲", title: "Catch missed sights", note: "Pantheon, Trevi, Spanish Steps" },
    ],
    trivia: [
      { emoji: "🐈", text: "Rome has thousands of street cats — some live right in the ancient ruins!" },
      { emoji: "🍦", text: "Italians eat gelato year-round — there are over 2,500 gelato shops in Rome alone." },
    ],
    wordOfDay: { word: "Gelato", pron: "jeh-LAH-to", meaning: "ice cream" },
    challenge: { emoji: "🍦", text: "Try a flavour you've NEVER had before — who's the bravest taster?" },
    hotel: "Borghetto Guest House",
    heroPrompt:
      "A warm playful flat-illustration banner: a charming Roman cobbled lane with ivy, a gelato cart with colorful scoops, and a sleepy cat in the sun. Golden palette, rounded shapes, children's-book style, cozy and airy. NO text, no words, no letters in the image.",
  },

  {
    id: "day14",
    dayNumber: 14,
    totalDays: 15,
    date: "Sunday · July 26, 2026",
    city: "rome",
    title: "Last Day in Rome",
    subtitle: "Parks, shopping & farewell 🌳",
    keyTimes: [
      { label: "Plan", value: "spontaneous" },
    ],
    schedule: [
      { time: "Morning", emoji: "🌳", title: "Villa Borghese park", note: "Rome's big garden — rent a family bike-cart!" },
      { time: "Midday", emoji: "🛍️", title: "Final shopping", note: "Last souvenirs, treats" },
      { time: "Afternoon", emoji: "⛲", title: "Campo de' Fiori", note: "Lively square + market" },
      { time: "Evening", emoji: "🍕", title: "Farewell family dinner", note: "Our last Italian feast + gelato" },
    ],
    trivia: [
      { emoji: "🌳", text: "Villa Borghese park is so big it has a lake, a zoo AND a mini cinema inside it." },
      { emoji: "🎡", text: "You can rent funny four-person bike-carts to pedal around the park." },
    ],
    wordOfDay: { word: "Arrivederci", pron: "a-ree-veh-DER-chee", meaning: "goodbye (until we meet again)" },
    challenge: { emoji: "🌳", text: "Pedal the family bike-cart together without crashing — teamwork!" },
    hotel: "Borghetto Guest House (last night)",
    heroPrompt:
      "A warm playful flat-illustration banner: a sunny Rome park with tall umbrella pine trees, a small lake with a rowboat and a funny four-person pedal cart. Golden-green palette, rounded shapes, children's-book style, negative space. NO text, no words, no letters in the image.",
  },

  {
    id: "day15",
    dayNumber: 15,
    totalDays: 15,
    date: "Monday · July 27, 2026",
    city: "rome",
    title: "Arrivederci, Italia!",
    subtitle: "Homeward bound ✈️",
    keyTimes: [
      { label: "Leave hotel", value: "6:30" },
      { label: "At airport", value: "7:55" },
      { label: "Take off", value: "10:55" },
      { label: "Home TLV", value: "15:15" },
    ],
    schedule: [
      { time: "6:30", emoji: "🚕", title: "Taxi to the airport", note: "Early start — booked the night before" },
      { time: "7:55", emoji: "🛄", title: "Check in at Fiumicino", note: "Arkia IZ336, be there 3 hrs early" },
      { time: "10:55", emoji: "✈️", title: "Fly home", note: "Rome → Tel Aviv, ~3.5 hrs" },
      { time: "15:15", emoji: "🏠", title: "Land in Tel Aviv", note: "Home by dinner — with a million memories" },
    ],
    trivia: [
      { emoji: "💭", text: "Ask everyone: what was your #1 favourite moment of the whole trip?" },
      { emoji: "🇮🇹", text: "You visited 4 amazing cities in 15 days — that's a LOT of gelato!" },
    ],
    wordOfDay: { word: "Grazie, Italia!", pron: "GRAH-tsee-eh ee-TAH-lya", meaning: "thank you, Italy!" },
    challenge: { emoji: "💭", text: "Everyone shares their single best memory before we land" },
    heroPrompt:
      "A warm playful flat-illustration banner: a cartoon airplane flying home over the sea at sunset, with tiny Italian landmarks waving goodbye on the shore below. Golden sunset palette, rounded shapes, children's-book style, warm and sentimental, negative space. NO text, no words, no letters in the image.",
  },
];

export function getDay(id: string): Day | undefined {
  return DAYS.find((d) => d.id === id);
}
