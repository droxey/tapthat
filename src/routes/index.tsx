import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { events, faqs, howSteps, products } from "@/lib/catalog";
import { formatMoney } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const ticker = [...events, ...events];

  return (
    <main>
      <section className="mx-auto grid max-w-site items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="inline-flex rounded-base border-2 border-border bg-accent px-3 py-1 text-xs font-bold shadow-shadow">
            Charms for cruises, resorts, pineapple weekends
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Tap that.
            <br />
            Follow the rest.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed">
            A disc you tap. A night you keep. Trade it on the lido, at the palapa, or wherever the
            pineapple is pointing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/shop">Shop charms</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </div>
        </div>
        <div className="rotate-1">
          <img
            src="/images/hero.jpg"
            alt="Pixel cruise deck with a pineapple charm bracelet"

            className="aspect-[4/3] w-full rounded-base border-2 border-border object-cover shadow-shadow"
          />
        </div>
      </section>

      <section className="overflow-hidden border-y-4 border-border bg-main py-3">
        <div className="flex w-max animate-marquee gap-0">
          {ticker.map((e, i) => (
            <p key={`${e.name}-${i}`} className="px-8 text-sm font-bold uppercase tracking-wide">
              {e.name} · {e.city}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight">Shop</h2>
          <Button variant="outline" asChild>
            <Link to="/shop">All products</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y-4 border-border bg-secondary-background py-16">
        <div className="mx-auto max-w-site px-4">
          <h2 className="text-4xl font-bold tracking-tight">Four steps</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howSteps.map((s) => (
              <li
                key={s.n}
                className="rounded-base border-2 border-border bg-background p-5 shadow-shadow"
              >
                <p className="inline-flex size-10 items-center justify-center rounded-base border-2 border-border bg-accent font-bold">
                  {s.n}
                </p>
                <h3 className="mt-4 text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Read the guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-4xl font-bold tracking-tight">FAQ</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.slice(0, 5).map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6">
          <Link to="/faq" className="text-sm font-bold underline">
            All questions
          </Link>
        </p>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-site rounded-base border-2 border-border bg-accent p-8 shadow-shadow md:p-12">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Ready to become a fan?</h2>
          <p className="mt-3 max-w-lg text-base">
            Starter packs from {formatMoney(1499)}. The 10-pack is the weekend move.
          </p>
          <Button className="mt-6" asChild>
            <Link to="/shop">Shop now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
