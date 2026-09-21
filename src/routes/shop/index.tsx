import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/catalog";

type ShopSearch = { q?: string };

export const Route = createFileRoute("/shop/")({
  validateSearch: (s: Record<string, unknown>): ShopSearch => ({
    q: typeof s.q === "string" ? s.q : undefined,
  }),
  component: Shop,
});

function Shop() {
  const { q } = Route.useSearch();
  const list = useMemo(() => {
    const needle = q?.trim().toLowerCase();
    if (!needle) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.blurb.toLowerCase().includes(needle) ||
        p.category.includes(needle),
    );
  }, [q]);

  return (
    <main className="mx-auto max-w-site px-4 py-12">
      <h1 className="text-5xl font-bold tracking-tight">{q ? `“${q}”` : "Shop"}</h1>
      <p className="mt-3 max-w-xl text-muted">
        Enamel NFC charms, packs, bracelets, and the occasional hat. Battery-free. Built to be
        traded.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {list.length === 0 ? <p className="mt-16 text-muted">Nothing matches.</p> : null}

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
          <h2 className="text-xl font-bold">Bulk orders</h2>
          <p className="mt-2 text-sm text-muted">
            100+ charms at a discounted rate for houses, labels, and commemorative nights.
          </p>
        </div>
        <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
          <h2 className="text-xl font-bold">Custom charms</h2>
          <p className="mt-2 text-sm text-muted">Want a TapThat-enabled custom shape? We’ll make the disc.</p>
        </div>
        <div className="rounded-base border-2 border-border bg-main p-6 shadow-shadow">
          <h2 className="text-xl font-bold">Let’s partner</h2>
          <p className="mt-2 text-sm">Events, brands, artists. Drop a line and we’ll find the form factor.</p>
          <Link to="/partners" className="mt-3 inline-block text-sm font-bold underline">
            Partners in Pineapples

          </Link>
        </div>
      </section>
    </main>
  );
}
