import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND, charmById, memoriesFor } from "@/lib/catalog";
import { useLocalApp } from "@/lib/local-app";
import { DEFAULT_DESCRIPTION, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/app/$charmId")({
  validateSearch: (s: Record<string, unknown>): { tap?: boolean } =>
    s.tap === true || s.tap === "true" || s.tap === 1 ? { tap: true } : {},
  head: ({ params }) => {
    const charm = charmById(params.charmId);
    if (!charm) {
      return socialHead({
        title: `Charm not found | ${BRAND.name}`,
        description: DEFAULT_DESCRIPTION,
        path: `/app/${params.charmId}`,
      });
    }
    return socialHead({
      title: `${charm.name} · ${charm.code} | ${BRAND.name}`,
      description: `${charm.origin}. ${charm.holders} holders, ${charm.events} events. ${charm.visibility} journey.`,
      path: `/app/${charm.id}`,
      image: charm.image,
      imageAlt: charm.name,
    });
  },
  component: CharmPage,
});

function CharmPage() {
  const { charmId } = Route.useParams();
  const charm = charmById(charmId);
  if (!charm) throw notFound();
  const seeded = memoriesFor(charm.id);
  const allLocal = useLocalApp((s) => s.memories);
  const local = allLocal.filter((m) => m.charmId === charm.id);
  const follow = useLocalApp((s) => s.follow);
  const follows = useLocalApp((s) => s.follows);
  const addMemory = useLocalApp((s) => s.addMemory);
  const profile = useLocalApp((s) => s.profile);
  const following = follows.includes(charm.id);
  const { tap } = Route.useSearch();
  const [open, setOpen] = useState(Boolean(tap));
  const [note, setNote] = useState("");
  const [place, setPlace] = useState("");

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs text-muted">
        <Link to="/app" className="hover:text-fg">
          App
        </Link>{" "}
        / {charm.code}
      </p>
      <div className="mt-6 overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow">

        <img src={charm.image} alt={charm.name} className="aspect-[16/9] w-full object-cover" />
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-4xl tracking-tight">{charm.name}</h1>
              <p className="mt-1 text-sm text-muted">
                Started {charm.origin} · {charm.holders} holders · {charm.events} rooms
              </p>
            </div>
            <Badge tone={charm.visibility === "private" ? "accent" : "muted"}>
              {charm.visibility}
            </Badge>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setOpen((v) => !v)}>Simulate tap</Button>
            <Button variant="outline" onClick={() => follow(charm.id)}>
              {following ? "Following" : "Follow journey"}
            </Button>
          </div>
          {open ? (
            <form
              className="mt-6 grid gap-3 rounded-lg rounded-base border-2 border-border bg-background shadow-shadow p-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!note.trim()) return;
                addMemory({
                  charmId: charm.id,
                  note: note.trim(),
                  place: place.trim() || "Somewhere tonight",
                });
                setNote("");
                setPlace("");
                setOpen(false);
              }}
            >
              <p className="text-sm text-muted">
                Leaving a moment as {profile.name || "a fan"}
                {profile.handle ? ` ${profile.handle}` : ""}.
              </p>
              <div className="grid gap-1">
                <Label htmlFor="place">Place</Label>
                <Input
                  id="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Roof Season, Marble Afters…"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="note">Note</Label>
                <Textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Leave something for the next holder."
                  required
                />
              </div>
              <Button type="submit">Add moment</Button>
            </form>
          ) : null}
        </div>
      </div>

      <ol className="mt-10 space-y-6">
        {local.map((m) => (
          <li key={m.id} className="border border-accent/40 bg-surface p-5">
            <p className="text-xs uppercase tracking-wider text-accent">Your tap</p>
            <p className="mt-2 leading-relaxed">{m.note}</p>
            <p className="mt-2 text-xs text-subtle">
              {m.place} · {new Date(m.at).toLocaleString()}
            </p>
          </li>
        ))}
        {seeded.map((m) => (
          <li key={m.id} className="rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5">
            <div className="flex items-center gap-3">
              <img src={m.avatar} alt="" className="size-10 object-cover" />
              <div>
                <p className="text-sm">
                  {m.author} <span className="text-muted">{m.handle}</span>
                </p>
                <p className="text-xs text-subtle">
                  {m.place} · {m.event}
                </p>
              </div>
            </div>
            <p className="mt-3 leading-relaxed">{m.note}</p>
            {m.photo ? (
              <img src={m.photo} alt="" className="mt-4 aspect-[16/9] w-full object-cover" />
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
}
