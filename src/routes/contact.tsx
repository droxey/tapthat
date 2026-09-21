import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-5xl tracking-tight">Contact</h1>
      <p className="mt-3 text-muted">
        Support, press, and everything else:{" "}
        <a className="text-fg" href="mailto:hello@tapthat.fans">
          hello@tapthat.fans
        </a>
        . Or send a note here.
      </p>
      {sent ? (
        <p className="mt-10 text-fg">
          Noted here. For a real reply, email hello@tapthat.fans.
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
            Saved in this browser only — for a real note, email hello@tapthat.fans.
          </p>
        </form>
      )}
    </main>
  );
}
