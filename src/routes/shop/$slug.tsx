import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { BRAND, productBySlug, relatedProducts } from "@/lib/catalog";
import { DEFAULT_DESCRIPTION, notFoundTitle, pageTitle, socialHead } from "@/lib/seo";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  head: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) {
      return socialHead({
        title: notFoundTitle(),
        description: DEFAULT_DESCRIPTION,
        path: `/shop/${params.slug}`,
      });
    }
    return socialHead({
      title: pageTitle(product.name, product.category === "packs" ? "bead pack" : product.category === "wear" ? "wearable" : product.category === "merch" ? "merch" : "NFC bead"),
      description: product.blurb,
      path: `/shop/${product.slug}`,
      image: product.image,
      imageAlt: product.name,
      type: "product",
    });
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = productBySlug(slug);
  if (!product) throw notFound();
  const [variant, setVariant] = useState(product.variants[0]);
  const [shot, setShot] = useState(product.gallery[0]);
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">

      <p className="text-xs text-muted">
        <Link to="/shop" className="hover:text-fg">
          Shop
        </Link>{" "}
        / {product.name}
      </p>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <img src={shot} alt={product.name} className="aspect-square w-full rounded-base border-2 border-border object-cover shadow-shadow" />

          {product.gallery.length > 1 ? (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(src)}
                  className={`overflow-hidden rounded-base border-2 ${shot === src ? "border-border shadow-shadow" : "border-border"}`}

                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          {product.soldOut ? <Badge tone="solid">Sold out</Badge> : null}
          <h1 className="mt-3 text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-3 text-2xl font-bold tabular-nums">

            {product.compareAt ? (
              <span className="mr-2 text-subtle line-through">{formatMoney(product.compareAt)}</span>
            ) : null}
            {formatMoney(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{product.description}</p>

          <fieldset className="mt-8">
            <legend className="text-sm font-bold">Options</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  disabled={!v.available}
                  onClick={() => setVariant(v)}
                  className={`h-10 rounded-base border-2 border-border px-4 text-sm font-bold ${
                    variant.id === v.id ? "bg-main shadow-shadow" : "bg-secondary-background"
                  } ${!v.available ? "opacity-40" : ""}`}
                >
                  {v.name}
                </button>
              ))}
            </div>

          </fieldset>

          <Button
            className="mt-8 w-full sm:w-auto"
            disabled={product.soldOut || !variant.available}
            onClick={() => {
              add({ slug: product.slug, variantId: variant.id, variantName: variant.name });
              setAdded(true);
            }}
          >
            {product.soldOut ? "Sold out" : added ? "Added to bag" : "Add to bag"}
          </Button>
          {added ? (
            <Link to="/cart" className="ml-4 text-sm text-muted hover:text-fg">
              View bag
            </Link>
          ) : null}

          <ul className="mt-10 space-y-2 text-sm text-muted">
            <li>Battery-free NFC disc, water-resistant enamel</li>
            <li>Works with iPhone 11+ and Android 6+</li>
            <li>Public or private once activated in the app</li>
            <li>Ships in 3–7 business days (US)</li>
          </ul>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">You might also tap</h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {relatedProducts(product.slug).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
