import { createFileRoute, Link } from "@tanstack/react-router";
import { BRAND, posts } from "@/lib/catalog";
import { pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/journal/")({
  head: () =>
    socialHead({
      title: pageTitle("Journal", "notes from the floor"),
      description: "Notes from the floor, the squad, and the shop.",
      path: "/journal",
      image: posts[0]?.image ?? "/images/hero.jpg",
      imageAlt: "TapThat journal",
    }),
  component: Journal,
});

function Journal() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-5xl tracking-tight">Journal</h1>
      <p className="mt-3 max-w-xl text-muted">Notes from the floor, the squad, and the shop.</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} to="/journal/$slug" params={{ slug: p.slug }} className="group block">
            <img
              src={p.image}
              alt=""
              className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <p className="mt-3 text-xs uppercase tracking-wider text-subtle">
              {p.date} · {p.author}
            </p>
            <h2 className="mt-1 text-2xl group-hover:opacity-80">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.dek}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
