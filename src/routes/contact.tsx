import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/catalog";
import { socialHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    socialHead({
      title: `Contact | ${BRAND.name}`,
      description: `Support, press, and everything else: ${BRAND.email}`,
      path: "/contact",
      image: "/images/hero.jpg",
      imageAlt: "Contact TapThat",
    }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-5xl tracking-tight">Contact</h1>
      <p className="mt-3 text-muted">
        Support, press, and everything else:{" "}
        <a className="text-fg" href={`mailto:${BRAND.email}`}>
          {BRAND.email}
        </a>
        . Or send a note here.
      </p>
      {sent ? (
        <p className="mt-10 text-fg">
          Noted here. For a real reply, email {BRAND.email}.
        </p>
      ) : (
        <form
          className="mt-10 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-1.5">
            <Label htmlFor="n">Name</Label>
            <Input id="n" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="e">Email</Label>
            <Input id="e" type="email" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="m">Message</Label>
            <Textarea id="m" required />
          </div>
          <Button type="submit">Send</Button>
          <p className="text-xs text-muted">
            Saved in this browser only — for a real note, email {BRAND.email}.
          </p>
        </form>
      )}
    </main>
  );
}
