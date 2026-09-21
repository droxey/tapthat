import { useState } from "react";
import { useLocalApp } from "@/lib/local-app";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterForm({ className }: { className?: string }) {
  const subscribe = useLocalApp((s) => s.subscribe);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className={cn("flex items-center gap-2", className)}
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) return;
        subscribe(email);
        setDone(true);
      }}
    >
      {done ? (
        <p className="text-sm font-bold">You’re on the list.</p>
      ) : (
        <>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="Email"
            className="min-w-0 flex-1"
          />
          <Button type="submit" variant="accent">
            Join
          </Button>
        </>
      )}
    </form>
  );
}
