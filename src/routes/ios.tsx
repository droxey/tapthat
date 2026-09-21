import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ios")({ component: Ios });

const features = [
  {
    t: "Store memories in the charm",
    d: "Photos, notes, and the place you were — tapped from the disc on your wrist.",
  },
  {
    t: "See updates on what you traded",
    d: "Follow a charm after it leaves your hand. Watch the next rooms write back.",
  },
  {
    t: "A social card on every tap",
    d: "Add handles and a note. Anyone who taps a charm you activated can find you.",
  },
  {
    t: "The public floor",
    d: "A feed of how fans are using charms tonight — rooms, notes, journeys.",
  },
  {
    t: "Public or private",
    d: "Rename a disc. Keep a journey world-visible, or lock it to people who physically tap.",
  },
];

function Ios() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-subtle">iOS 13.4+</p>
          <h1 className="mt-2 text-5xl tracking-tight md:text-6xl">TapThat for iPhone</h1>
          <p className="mt-4 text-lg text-muted">
            Tech-powered charms in your pocket. The web app works on any phone; iOS adds camera
            memories, comments, and lock-screen scanning that actually sticks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/app">Open the web app</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Scan without an app</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-subtle">Rated 5.0 · Entertainment · English</p>
        </div>
        <img
          src="/images/scan.jpg"
          alt="Phone held to a wrist charm"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <ul className="mt-16 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <li key={f.t} className="rounded-base border-2 border-border bg-secondary-background shadow-shadow p-6">
            <h2 className="text-2xl">{f.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
