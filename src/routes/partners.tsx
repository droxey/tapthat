import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { pineapplePartners } from "@/lib/catalog";

export const Route = createFileRoute("/partners")({ component: Partners });

const partnerFaqs = [
  {
    q: "What custom app features do you offer?",
    a: "We can brand the entire user flow: theme colors, premier logo placements, targeted notifications, branded activation, user badges, and ad placements.",
  },
  {
    q: "How does wristband activation work?",
    a: "The app turns existing event wristbands into engagement hubs. It can scan NFC/RFID already in the band and layer a branded experience, incentives, and moments — no hardware swap required.",
  },
  {
    q: "What are TapThat Quests?",
    a: "Fan experiences before, during, and after a night: in-app incentives plus custom NFC form factors that create moments your crowd will actually remember.",
  },
  {
    q: "How much do custom charms cost?",
    a: "Custom units run $3–$7 depending on size, colors, design, and order volume. Email hello@tapthat.fans for a quote.",
  },
  {
    q: "What’s the MOQ?",
    a: "Minimum order starts at 200 units.",
  },
];

function Partners() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="inline-flex rounded-base border-2 border-border bg-accent px-3 py-1 text-xs font-bold shadow-shadow">
        External links
      </p>
      <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">Partners in Pineapples</h1>
      <p className="mt-4 max-w-2xl text-lg">
        Cruises, resorts, and the rest of the room. Tap a name to leave TapThat and open their
        site.
      </p>

      <div className="mt-12 grid gap-10">
        {pineapplePartners.map((group) => (
          <section key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-widest">{group.title}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-3 rounded-base border-2 border-border bg-secondary-background px-4 py-3 font-bold shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-main hover:shadow-none"
                  >
                    <span className="min-w-0 flex-1 truncate">{link.name}</span>
                    {link.note ? (
                      <span className="shrink-0 rounded-base border-2 border-border bg-accent px-2 py-0.5 text-[10px] uppercase tracking-wide">
                        {link.note}
                      </span>
                    ) : null}
                    <span aria-hidden className="shrink-0 text-sm">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Brand the night with us</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Custom scannable charms, a branded app layer, and wristband quests for events, labels, and
          artists. MOQ 200.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "Custom scannable charms",
              "Showcase a brand on enamel that can be scanned for an experience — events, products, or fans.",
            ],
            [
              "App branding",
              "Theme colors, logo placements, notifications, activation flow, badges, and more.",
            ],
            [
              "Wristbands & quests",
              "Hosting a night? Use the chips already in the bands. No hardware change required.",
            ],
          ].map(([t, d]) => (
            <article
              key={t}
              className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
            >
              <h3 className="text-2xl font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold">Partner FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          {partnerFaqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mt-16 grid gap-10 rounded-base border-2 border-border bg-secondary-background p-8 shadow-shadow md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">List your pineapple</h2>
          <p className="mt-3 text-muted">
            Inbox:{" "}
            <a className="font-bold underline" href="mailto:hello@tapthat.fans">
              hello@tapthat.fans
            </a>
          </p>
        </div>
        {sent ? (
          <p className="self-center font-bold">Got it. We’ll write back.</p>
        ) : (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="comment">Comment</Label>
              <Textarea id="comment" name="comment" required />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        )}
      </section>
    </main>
  );
}
