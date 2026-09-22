import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BRAND, howSteps } from "@/lib/catalog";
import { pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    socialHead({
      title: pageTitle("How it works", "tap, open, leave a moment"),
      description: "Tap the disc. Open the link. Leave a moment. Pass it on.",
      path: "/how-it-works",
      image: "/images/scan.jpg",
      imageAlt: "How TapThat beads work",
    }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <main className="mx-auto max-w-site px-4 py-12">
      <p className="inline-flex rounded-base border-2 border-border bg-accent px-3 py-1 text-xs font-bold shadow-shadow">
        Wut?
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">How it works</h1>
      <p className="mt-4 max-w-xl text-lg">Tap the disc. Open the link. Leave a moment. Pass it on.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/app">Open web app</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/ios">iOS app</Link>
        </Button>
      </div>

      <ol className="mt-16 space-y-10">
        {howSteps.map((s, i) => (
          <li
            key={s.n}
            className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}
          >
            <img
              src={s.image}
              alt=""
              className="aspect-[4/3] w-full rounded-base border-2 border-border object-cover shadow-shadow"
            />
            <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
              <p className="inline-flex size-10 items-center justify-center rounded-base border-2 border-border bg-accent font-bold">
                {s.n}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">{s.title}</h2>
              <p className="mt-3 leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-16 rounded-base border-2 border-border bg-main p-8 shadow-shadow">
        <h2 className="text-3xl font-bold">Hotspots</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <p>
            <span className="font-bold">iPhone.</span> The NFC bar sits across the top back. Lock
            screen scans more reliably than an open app.
          </p>
          <p>
            <span className="font-bold">Android.</span> Usually the middle of the back. Unlock to
            the home screen, then hold still.
          </p>
        </div>
      </section>
    </main>
  );
}
