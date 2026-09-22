import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BRAND, charms, floorMemories, isCharmPublic } from "@/lib/catalog";
import { useLocalApp } from "@/lib/local-app";
import { pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/app/")({
  head: () =>
    socialHead({
      title: pageTitle("The floor", "beads, journeys, social cards"),
      description: "Open beads, follow journeys, and leave the next moment on the floor.",
      path: "/app",
      image: "/images/afters.jpg",
      imageAlt: "TapThat app. The public floor.",
    }),
  component: AppHome,
});

function AppHome() {
  const { profile, setProfile, follows, memories: localMemories } = useLocalApp();
  const feed = [
    ...floorMemories(),
    ...localMemories.filter((m) => isCharmPublic(m.charmId)).map((m) => ({
      id: m.id,
      charmId: m.charmId,
      author: profile.name || "a fan",
      handle: profile.handle,
      avatar: "",
      at: m.at,
      place: m.place,
      event: "",
      note: m.note,
      photo: undefined as string | undefined,
    })),
  ].sort((a, b) => +new Date(b.at) - +new Date(a.at));

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-subtle">Web app</p>
          <h1 className="mt-2 text-5xl tracking-tight">The floor</h1>
          <p className="mt-3 max-w-xl text-muted">
            Public moments from beads in the wild. Tap a disc in real life, or open{" "}
            <a href="/t/TT-FANS-004" className="font-bold underline">
              /t/TT-FANS-004
            </a>{" "}
            to simulate one.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/ios">iOS app</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-4">
          {feed.map((m) => (
            <Link
              key={m.id}
              to="/app/$charmId"
              params={{ charmId: m.charmId }}
              className="flex min-w-0 gap-4 overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow p-4 hover:border-fg/25"
            >
              {m.photo ? (
                <img src={m.photo} alt="" className="hidden size-24 object-cover sm:block" />
              ) : null}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  {m.avatar ? <img src={m.avatar} alt="" className="size-8 object-cover" /> : null}
                  <p className="text-sm">
                    {m.author} {m.handle ? <span className="text-muted">{m.handle}</span> : null}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg">{m.note}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-subtle">
                  {m.place} · {m.event}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5">
            <h2 className="text-xl">Your social card</h2>
            <p className="mt-1 text-xs text-muted">Shown when someone taps a bead you activated.</p>
            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                setProfile({
                  name: String(fd.get("name") ?? ""),
                  handle: String(fd.get("handle") ?? ""),
                  instagram: String(fd.get("ig") ?? ""),
                  note: String(fd.get("note") ?? ""),
                });
              }}
            >
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={profile.name} />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="handle">Handle</Label>
                <Input id="handle" name="handle" defaultValue={profile.handle} placeholder="@you" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="ig">Instagram</Label>
                <Input id="ig" name="ig" defaultValue={profile.instagram} />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="note">Note on your card</Label>
                <Textarea id="note" name="note" defaultValue={profile.note} />
              </div>
              <Button type="submit" size="sm">
                Save card
              </Button>
            </form>
          </div>

          <div className="rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5">
            <h2 className="text-xl">Live beads</h2>
            <ul className="mt-3 space-y-2">
              {charms.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/app/$charmId"
                    params={{ charmId: c.id }}
                    className="flex items-center justify-between gap-2 px-1 py-2 hover:bg-elevated"
                  >
                    <span className="text-sm">{c.name}</span>
                    <span className="flex items-center gap-2">
                      {follows.includes(c.id) ? <Badge>Following</Badge> : null}
                      <Badge tone={c.visibility === "private" ? "accent" : "muted"}>
                        {c.visibility}
                      </Badge>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
