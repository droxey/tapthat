# Clone scope — tapthat.fans (lifestyle-events retheme of soulstone.io)

Live `soulstone.io` returned 503. Canonical source is Wayback snapshots (Sep–Dec 2024) plus App Store listing and press.

## Pages to ship (1:1 with archived IA)

| Soulstone | TapThat |
|---|---|
| `/` | `/` |
| `/collections/all`, `/collections/beads` | `/shop` |
| `/products/*` | `/shop/$slug` |
| `app.soulstone.io` | `/app`, `/app/$charmId` |
| `/ios-app` | `/ios` |
| `/how-it-works`, `/pages/how-soulstones-work` | `/how-it-works` (nav: Wut?) |
| `/pages/faq` | `/faq` |
| `/pages/partner` | `/partners` |
| `/pages/squad` | `/squad` |
| `/blogs/soulstones` | `/journal` |
| `/cart` | `/cart` |
| `/policies/*` | `/policies/$slug` |
| footer contact | `/contact` |

Nav clone: Shop · App · Wut? · FAQ · Partner · Squad

## Product catalog mapped

Glo Ghost → Fan Charms; Heart Hands kept; PLUR → LIVE; Unicorn → Pearlshift; 3/5/10 packs; bracelets; limited bucket hat (sold out). Prices preserved from archive.

## App slice (demo, auth off)

Activity feed, charm journeys, simulate-tap to add a local memory, follow, public/private badge, social card in localStorage. No accounts (preview visitors cannot be gated).

## Out of scope / blocked

Authenticated `app.soulstone.io` internals (login, comments v2, camera upload, RFID partner console). Squad page 404 in archive — reconstructed from blog + ambassador copy. Product PDP 404 on that snapshot — reconstructed from collection cards + Kickstarter/app copy.
