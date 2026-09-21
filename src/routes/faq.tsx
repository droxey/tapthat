import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, BRAND } from "@/lib/catalog";
import { pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    socialHead({
      title: pageTitle("FAQ", "charms, scanning, shipping"),
      description: "Answers about charms, scanning, shipping, and privacy.",
      path: "/faq",
      image: "/images/tap.jpg",
      imageAlt: "Tapping a TapThat charm",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-5xl font-bold tracking-tight">FAQ</h1>
      <p className="mt-3 text-muted">Answers about charms, scanning, shipping, and privacy.</p>
      <div className="mt-6 rounded-base border-2 border-border bg-accent p-5 shadow-shadow">
        <p className="text-lg font-bold">Looking for a step-by-step?</p>
        <Button className="mt-3" asChild>
          <Link to="/how-it-works">How it works</Link>
        </Button>
      </div>
      <h2 className="mt-12 text-2xl font-bold">Questions</h2>
      <Accordion type="single" collapsible className="mt-4">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Can’t find it?</h2>
        <p className="mt-2">
          We answer questions at{" "}
          <a className="font-bold underline" href={`mailto:${BRAND.email}`}>
            {BRAND.email}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
