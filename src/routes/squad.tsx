import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ambassadors } from "@/lib/catalog";

export const Route = createFileRoute("/squad")({ component: Squad });

function Squad() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.28em] text-subtle">Ambassadors</p>
      <h1 className="mt-2 text-5xl tracking-tight md:text-6xl">The Squad</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Not an influencer grid. A short list of fans who trade in public, write what happened, and
        send the charm on. Early colorways, a private channel, no follower minimum.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {ambassadors.map((a) => (
          <article key={a.handle} className="overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow">
            <img src={a.avatar} alt={a.name} className="aspect-[4/5] w-full object-cover" />
            <div className="p-5">
              <p className="text-2xl">{a.name}</p>
              <p className="text-xs uppercase tracking-wider text-muted">
                {a.handle} · {a.city}
              </p>
              <p className="mt-2 text-sm text-accent">{a.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-base border-2 border-border bg-secondary-background shadow-shadow p-8 md:p-12">
        <h2 className="text-3xl">Apply</h2>
        <p className="mt-2 max-w-xl text-muted">
          Tell us the rooms you actually go to. We read every note. Read the{" "}
          <Link to="/journal/$slug" params={{ slug: "squad-update" }} className="text-fg underline-offset-4 hover:underline">
            program note
          </Link>{" "}
          first if you want the long version.
        </p>
        {sent ? (
          <p className="mt-6 text-fg">Application in. If it’s a yes, you’ll hear from us.</p>
        ) : (
          <form
            className="mt-8 grid max-w-xl gap-4"
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
              <Label htmlFor="c">City</Label>
              <Input id="c" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="r">Rooms you go to</Label>
              <Textarea id="r" required placeholder="Festivals, afters, fairs…" />
            </div>
            <Button type="submit">Send application</Button>
          </form>
        )}
      </section>
    </main>
  );
}
