export type ProductVariant = {
  id: string;
  name: string;
  available: boolean;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  image: string;
  gallery: string[];
  category: "charms" | "packs" | "wear" | "merch";
  blurb: string;
  description: string;
  variants: ProductVariant[];
  soldOut?: boolean;
  featured?: boolean;
};

export type Charm = {
  id: string;
  name: string;
  code: string;
  visibility: "public" | "private";
  image: string;
  holders: number;
  events: number;
  origin: string;
  startedAt: string;
};

export type Memory = {
  id: string;
  charmId: string;
  author: string;
  handle: string;
  avatar: string;
  at: string;
  place: string;
  event: string;
  note: string;
  photo?: string;
};

export type EventMark = {
  name: string;
  city: string;
};

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  dek: string;
  image: string;
  body: string[];
};

export type Ambassador = {
  name: string;
  handle: string;
  city: string;
  role: string;
  bio: string;
  avatar: string;
};

export const BRAND = {
  name: "TapThat",
  domain: "tapthat.fans",
  tagline: "Tap that. Follow the rest.",
  email: "hello@tapthat.fans",
};

export const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/app", label: "App" },
  { to: "/how-it-works", label: "Wut?" },
  { to: "/faq", label: "FAQ" },
  { to: "/squad", label: "Squad" },
] as const;

export const products: Product[] = [
  {
    slug: "afters-ghost",
    name: "Pool Ghost Charms",

    price: 1650,
    compareAt: 4950,
    image: "/products/ghost.jpg",
    gallery: ["/products/ghost.jpg", "/products/pack-3.jpg", "/images/tap.jpg"],
    category: "charms",
    blurb: "Milky enamel for the last lounge of the night. Built for pool afters.",

    description:
      "A single NFC charm in pearlescent white enamel with a silver tap disc inset. Trade it, leave it on a lanyard, or sew it into a jacket. Battery-free, water-resistant, and readable by any modern phone. Pack of two.",
    variants: [
      { id: "milk", name: "Milk", available: true },
      { id: "night", name: "Night", available: true },
    ],
    featured: true,
  },
  {
    slug: "heart-hands",
    name: "Heart Hands Charms",
    price: 1650,
    compareAt: 4950,
    image: "/products/heart.jpg",
    gallery: ["/products/heart.jpg", "/products/bracelet.jpg", "/images/afters.jpg"],
    category: "charms",
    blurb: "Two hands, one heart, a disc you can actually tap.",
    description:
      "Dusty-rose enamel hands meeting at a hidden NFC disc. The charm that gets passed between people who actually mean it. Pack of two.",
    variants: [
      { id: "rose", name: "Rose", available: true },
      { id: "sand", name: "Sand", available: true },
    ],
    featured: true,
  },
  {
    slug: "bucket-hat",
    name: "Limited Edition Bucket Hat",
    price: 3499,
    image: "/products/hat.jpg",
    gallery: ["/products/hat.jpg"],
    category: "merch",
    blurb: "Black cotton, pineapple pin, one sailing only.",

    description:
      "A black cotton bucket with a removable TapThat enamel pin. The drop is closed. Join the list for the next run.",
    variants: [{ id: "os", name: "One size", available: false }],
    soldOut: true,
  },
  {
    slug: "live-charms",
    name: "LIVE Charms",
    price: 1650,
    compareAt: 4950,
    image: "/products/live.jpg",
    gallery: ["/products/live.jpg", "/images/hero.jpg"],
    category: "charms",
    blurb: "Sunburst enamel for the decks that still feel live.",

    description:
      "A circular cream-and-terracotta sunburst with a silver NFC core. Named for the nights you want to keep, not the ones you post. Pack of two.",
    variants: [
      { id: "rose", name: "Rose", available: true },
      { id: "tide", name: "Tide", available: true },
    ],
    featured: true,
  },
  {
    slug: "charms-10",
    name: "Tap Charms — 10 Pack",
    price: 3899,
    compareAt: 4999,
    image: "/products/pack-10.jpg",
    gallery: ["/products/pack-10.jpg", "/products/pack-5.jpg", "/products/pack-3.jpg"],
    category: "packs",
    blurb: "Enough to trade a whole weekend and still keep one.",
    description:
      "Ten mixed enamel NFC charms. Mixed shapes, one silver tap disc each, packed for a cruise week, a resort takeover, or a friend group that actually shows up. Battery-free and water-resistant.",

    variants: [
      { id: "mixed", name: "Mixed", available: true },
      { id: "gradient", name: "Gradient", available: true },
      { id: "ink", name: "Ink", available: true },
      { id: "tide", name: "Tide", available: true },
    ],
    featured: true,
  },
  {
    slug: "charms-3",
    name: "Tap Charms — 3 Pack",
    price: 1499,
    image: "/products/pack-3.jpg",
    gallery: ["/products/pack-3.jpg", "/images/tap.jpg"],
    category: "packs",
    blurb: "You, a friend, and the one you leave behind.",
    description:
      "Three enamel NFC charms. The starter pack: keep one, trade one, follow the third. Works with any modern smartphone.",
    variants: [
      { id: "mixed", name: "Mixed", available: true },
      { id: "gradient", name: "Gradient", available: true },
      { id: "ink", name: "Ink", available: true },
      { id: "tide", name: "Tide", available: true },
    ],
    featured: true,
  },
  {
    slug: "charms-5",
    name: "Tap Charms — 5 Pack",
    price: 2299,
    image: "/products/pack-5.jpg",
    gallery: ["/products/pack-5.jpg", "/products/pack-3.jpg"],
    category: "packs",
    blurb: "The table pack. Five charms, five stories.",
    description:
      "Five mixed enamel NFC charms for a crew. Trade across a night and watch the journeys split in the app.",
    variants: [
      { id: "mixed", name: "Mixed", available: true },
      { id: "gradient", name: "Gradient", available: true },
      { id: "ink", name: "Ink", available: true },
      { id: "tide", name: "Tide", available: true },
    ],
    featured: true,
  },
  {
    slug: "bracelets",
    name: "TapThat Bracelets",
    price: 2399,
    compareAt: 5999,
    image: "/products/bracelet.jpg",
    gallery: ["/products/bracelet.jpg", "/images/hero.jpg", "/images/afters.jpg"],
    category: "wear",
    blurb: "A cord, three charms, ready to leave the house.",
    description:
      "Hand-tied black cord with three live NFC charms already on it. Wear it, tap it, trade a charm off it. One size, knots adjust.",
    variants: [
      { id: "ink", name: "Ink cord", available: true },
      { id: "sand", name: "Sand cord", available: true },
    ],
    featured: true,
  },
  {
    slug: "unicorn",
    name: "Golden Pineapple Charms",

    price: 1650,
    compareAt: 4950,
    image: "/products/unicorn.jpg",
    gallery: ["/products/unicorn.jpg", "/products/pack-5.jpg"],
    category: "charms",
    blurb: "The fruit on the table. Yellow enamel, hidden disc.",
    description:
      "Chunky pineapple NFC charms with a silver tap disc. The sign people actually look for on a cruise, a resort, or a pineapple weekend. Pack of two.",

    variants: [
      { id: "slick", name: "Slick", available: true },
      { id: "opal", name: "Opal", available: true },
    ],
  },
];

export const events: EventMark[] = [
  { name: "Pineapple Week", city: "Miami" },
  { name: "Lido Afters", city: "Caribbean" },
  { name: "Palapa Club", city: "Cancún" },
  { name: "Sail Week", city: "St. Thomas" },
  { name: "Resort Takeover", city: "Jamaica" },
  { name: "Pool Circuit", city: "Las Vegas" },
  { name: "Harbor Week", city: "Miami" },
  { name: "Golden Pineapple", city: "Palm Springs" },
];


export const press = [
  { name: "Room Notes", line: "The charm that outlives the guest list." },
  { name: "Floor Copy", line: "Friendship jewelry with a memory." },
  { name: "Fanfare", line: "Tap once. The night keeps going." },
  { name: "After Hours", line: "Built for people who still trade things." },
];

export const quotes = [
  {
    text: "I still have the note someone left on mine at Pineapple Week. That’s the whole point.",

    name: "Lex",
    handle: "@disc0lex",
  },
  {
    text: "We traded on the lido and I followed the charm to three ports. It feels like a secret that wants to be kept.",

    name: "Camila",
    handle: "@clopezcoronado",
  },
  {
    text: "Imagine the thing on your wrist holding the key to a night you actually want to remember.",
    name: "Room Notes",
    handle: "editorial",
  },
  {
    text: "Got one as a gift after Lido Afters. It already has four strangers on it.",

    name: "Morgan",
    handle: "@mclaughlin",
  },
  {
    text: "Taking this little ghost to every pineapple weekend this year.",

    name: "Hope",
    handle: "@hopefuldaydreams",
  },
];

export const faqs: Faq[] = [
  {
    q: "How do Tap charms work?",
    a: "Tap charms turn a bracelet, pin, or lanyard into a memory card you can pass. Tap the enamel disc with any phone to open the TapThat app, then see what’s inside or add to the story. Each scan is another chapter — even after you trade it.",
  },
  {
    q: "Do they track my location?",
    a: "No. Charms cannot track you. You (or whoever holds them) type a place, a note, or a photo when you choose to leave a memory. The path is a history you write, not a GPS trail.",
  },
  {
    q: "My charm won’t scan. Help?",
    a: `First-time NFC is fussy. On iPhone the hotspot is the bar across the top back; on Android it’s usually the middle of the back. iPhones scan better on the lock screen. Androids scan better unlocked on the home screen. Rub in a slow circle for a few seconds. Thick cases block the field — take them off. Still stuck? Write ${BRAND.email} and we’ll replace a defective disc.`,
  },
  {
    q: "Where are they used?",
    a: "Anywhere you’d like to commemorate a night or stay in touch with someone you just met: lifestyle cruises, resort takeovers, pineapple weekends, pool afters, and any commemorative event.",

  },
  {
    q: "Which phones are compatible?",
    a: `Most modern phones speak NFC. Best experience: iPhone 11 with iOS 13 or later, or Android 6.0 and later. iPhone 7, 8, and X still scan with a dedicated reader app. Check your spec sheet if you’re unsure, or ask ${BRAND.email}.`,
  },
  {
    q: "Do they need batteries?",
    a: "No. Tap charms are battery-free, water-resistant, and built to be traded again. No charging, no pairing.",
  },
  {
    q: "How long does shipping take?",
    a: "Continental USA averages 3–7 business days. Priority lands in 2–4.",
  },
  {
    q: "How secure is my data?",
    a: "We do not sell data to third parties, and we do not read anything you didn’t put in the app. Activate a charm in public mode to share with the world, or private mode so only people who physically tap it can see and add memories.",
  },
  {
    q: "Can I return a charm?",
    a: `Happiness guarantee. If you’re not satisfied, contact ${BRAND.email} within 14 days for a return or exchange.`,
  },
  {
    q: "How do I reach support?",
    a: `${BRAND.email} — we answer. Or DM the socials in the footer.`,
  },
];

export const howSteps = [
  {
    n: "01",
    title: "Tap the charm with your phone",
    body: "Hold the top back of an iPhone, or the middle back of an Android, against the silver disc. A few seconds of contact is enough.",
    image: "/images/scan.jpg",
  },
  {
    n: "02",
    title: "Open the link that appears",
    body: "Your phone offers a magic link. Open it. You’ll land in the TapThat app — some phones open it on their own. No disc yet? Try /t/TT-GHOST-004.",
    image: "/images/tap.jpg",
  },
  {
    n: "03",
    title: "Activate and leave a moment",
    body: "Tie the charm to your profile, name it, pick public or private, and leave a note or photo for the next person. If it’s already live, you just add the next chapter.",
    image: "/products/heart.jpg",
  },
  {
    n: "04",
    title: "Trade, connect, follow",
    body: "Pass the charm. Watch future moments land in the app. Open anyone’s profile from a tap and keep the night going after the pool closes.",
    image: "/images/afters.jpg",
  },
];

export const charms: Charm[] = [
  {
    id: "ghost-004",
    name: "Little Ghost",
    code: "TT-GHOST-004",
    visibility: "public",
    image: "/products/ghost.jpg",
    holders: 11,
    events: 6,
    origin: "Lido Afters, Caribbean",

    startedAt: "2026-03-12",
  },
  {
    id: "heart-018",
    name: "Hands",
    code: "TT-HEART-018",
    visibility: "public",
    image: "/products/heart.jpg",
    holders: 7,
    events: 4,
    origin: "Palapa Club, Cancún",

    startedAt: "2026-02-28",
  },
  {
    id: "live-221",
    name: "Sunburst",
    code: "TT-LIVE-221",
    visibility: "public",
    image: "/products/live.jpg",
    holders: 19,
    events: 8,
    origin: "Pineapple Week, Miami",

    startedAt: "2025-12-04",
  },
  {
    id: "pearl-009",
    name: "Pineapple",
    code: "TT-PEARL-009",
    visibility: "public",
    image: "/products/unicorn.jpg",
    holders: 5,
    events: 3,
    origin: "Golden Pineapple, Palm Springs",

    startedAt: "2026-04-18",
  },
  {
    id: "ink-102",
    name: "Deck Cord",
    code: "TT-INK-102",
    visibility: "private",
    image: "/products/bracelet.jpg",
    holders: 3,
    events: 2,
    origin: "Sail Week, St. Thomas",

    startedAt: "2026-06-01",
  },
];

export const memories: Memory[] = [
  {
    id: "m1",
    charmId: "live-221",
    author: "Mina Park",
    handle: "@mina",
    avatar: "/people/mina.jpg",
    at: "2026-09-02T02:14:00",
    place: "Pineapple Week",
    event: "Miami",
    note: "Left this on a stranger who knew every song. If you’re reading this, the cabana is still yours.",

    photo: "/images/hero.jpg",
  },
  {
    id: "m2",
    charmId: "heart-018",
    author: "Sofia Reyes",
    handle: "@sofia",
    avatar: "/people/sofia.jpg",
    at: "2026-08-21T23:40:00",
    place: "Lido Afters",
    event: "Caribbean",
    note: "Traded on the pool deck after the show. The tiles were colder than the champagne.",

    photo: "/images/afters.jpg",
  },
  {
    id: "m3",
    charmId: "ghost-004",
    author: "Julian Adeyemi",
    handle: "@julian",
    avatar: "/people/julian.jpg",
    at: "2026-07-11T16:05:00",
    place: "Resort Takeover",
    event: "Jamaica",
    note: "Pinned to a tote between two palapas. The ghost wanted daylight for once.",

    photo: "/people/julian.jpg",
  },
  {
    id: "m4",
    charmId: "pearl-009",
    author: "Mina Park",
    handle: "@mina",
    avatar: "/people/mina.jpg",
    at: "2026-04-19T01:22:00",
    place: "Golden Pineapple",
    event: "Palm Springs",
    note: "Sand in the enamel. Worth it. Next holder: don’t wash it.",

    photo: "/images/desert.jpg",
  },
  {
    id: "m5",
    charmId: "live-221",
    author: "Sofia Reyes",
    handle: "@sofia",
    avatar: "/people/sofia.jpg",
    at: "2026-05-30T21:08:00",
    place: "Sail Week",
    event: "St. Thomas",
    note: "Hospitality tent, last light. This one has seen more decks than I have.",

    photo: "/images/paddock.jpg",
  },
  {
    id: "m6",
    charmId: "heart-018",
    author: "Julian Adeyemi",
    handle: "@julian",
    avatar: "/people/julian.jpg",
    at: "2026-02-28T20:00:00",
    place: "Palapa Club",
    event: "Cancún",

    note: "Started here. If it comes home, I’ll know.",
    photo: "/products/heart.jpg",
  },
  {
    id: "m7",
    charmId: "ghost-004",
    author: "Sofia Reyes",
    handle: "@sofia",
    avatar: "/people/sofia.jpg",
    at: "2026-03-12T01:11:00",
    place: "Lido Afters",
    event: "Caribbean",

    note: "Named it Little Ghost. Don’t make it famous.",
    photo: "/products/ghost.jpg",
  },
  {
    id: "m8",
    charmId: "ink-102",
    author: "Mina Park",
    handle: "@mina",
    avatar: "/people/mina.jpg",
    at: "2026-06-01T22:30:00",
    place: "Sail Week",
    event: "St. Thomas",
    note: "Private cord. If you tapped it, you’re already on the boat.",

    photo: "/products/bracelet.jpg",
  },
];

export const posts: Post[] = [
  {
    slug: "flash-drop-harbor",
    title: "Pineapple Week flash drop, bulk orders, and a note from the deck",

    date: "2026-04-20",
    author: "TapThat",
    dek: "A short run of LIVE charms, 100+ unit pricing, and why we still answer email.",
    image: "/images/hero.jpg",
    body: [
      "Pineapple Week always empties the drawer. This year we held a two-day flash on the 10-pack and opened bulk quotes for rooms that want a charm on every wristband.",

      "If you’re ordering for a house, a label, or a commemorative night, the Partner desk still starts at 200 units. The rest of us can just tap what’s already in the shop.",
    ],
  },
  {
    slug: "squad-update",
    title: "Squad: the ambassador program, rewritten for people who actually go out",
    date: "2026-03-29",
    author: "TapThat",
    dek: "Not an influencer grid. A small list of fans who trade in public and report back.",
    image: "/people/mina.jpg",
    body: [
      "Squad is how we stay honest. Ambassadors get early colorways, a private channel, and a job: tap in rooms we can’t be in, write what happened, and send the charm on.",
      "Applications stay open. We read every note. We do not ask for follower counts.",
    ],
  },
  {
    slug: "never-lose-the-night",
    title: "Three ways to never lose the person you just met",
    date: "2026-01-24",
    author: "TapThat",
    dek: "A tap, a private charm, and a profile that works as a social card.",
    image: "/images/tap.jpg",
    body: [
      "Phone numbers die in notes apps. A charm you both tapped does not. Leave a memory, keep it private, and the next time that disc is scanned you’re both still in the thread.",
      "Public charms are for journeys. Private charms are for the table. Use both.",
    ],
  },
  {
    slug: "trading-after-the-show",
    title: "On trading after the show — a small history of things we pass",
    date: "2026-01-23",
    author: "Editorial",
    dek: "Friendship bracelets, pins, lanyards, and why a disc you can tap belongs in that line.",
    image: "/images/afters.jpg",
    body: [
      "People have always left proof they were in the same room. A setlist, a pin, a braided cord. TapThat is that instinct with a memory attached.",
      "The disc does not replace the object. It lets the object keep talking after you go home.",
    ],
  },
  {
    slug: "how-to-wear-a-charm",
    title: "How to wear a charm without looking like merch",
    date: "2026-01-12",
    author: "Squad",
    dek: "Cord, pin, zipper pull. Pick one and leave the rest at home.",
    image: "/products/bracelet.jpg",
    body: [
      "One charm on a black cord is enough. Two if they’re a pair. A full stack reads as a stall, not a night.",
      "Pin the ghost to a jacket lining if you want it found. Put LIVE on the outside if you want it tapped.",
    ],
  },
];

export const ambassadors: Ambassador[] = [
  {
    name: "Mina Park",
    handle: "@mina",
    city: "Miami",
    role: "Pineapple Week",
    bio: "Books the cabanas, then leaves the first memory on whatever charm is on the guest list.",

    avatar: "/people/mina.jpg",
  },
  {
    name: "Sofia Reyes",
    handle: "@sofia",
    city: "Caribbean",
    role: "Lido Afters",
    bio: "Trades on pool decks. Writes like a door person who actually likes the crowd.",

    avatar: "/people/sofia.jpg",
  },
  {
    name: "Julian Adeyemi",
    handle: "@julian",
    city: "Jamaica",
    role: "Resort Takeover",
    bio: "Takes charms into daylight — palapas, the walk between boats, the buffet line.",

    avatar: "/people/julian.jpg",
  },
];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function charmById(id: string) {
  return charms.find((c) => c.id === id);
}

export function memoriesFor(charmId: string) {
  return memories
    .filter((m) => m.charmId === charmId)
    .sort((a, b) => +new Date(b.at) - +new Date(a.at));
}

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, n = 3) {
  const current = productBySlug(slug);
  return products
    .filter((p) => p.slug !== slug && (!current || p.category === current.category || p.featured))
    .slice(0, n);
}

export function charmByCode(code: string) {
  const needle = code.trim().toUpperCase();
  return charms.find((c) => c.code.toUpperCase() === needle);
}

export function isCharmPublic(charmId: string) {
  const c = charmById(charmId);
  return c?.visibility === "public";
}

export function floorMemories(seed: Memory[] = memories) {
  return seed
    .filter((m) => isCharmPublic(m.charmId))
    .sort((a, b) => +new Date(b.at) - +new Date(a.at));
}
