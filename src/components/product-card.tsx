import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";
import { formatMoney } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/shop/$slug" params={{ slug: product.slug }} className="group block">
      <div className="overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow transition-all group-hover:translate-x-boxShadowX group-hover:translate-y-boxShadowY group-hover:shadow-none">
        <div className="relative">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          {product.soldOut ? (
            <Badge tone="solid" className="absolute left-3 top-3">
              Sold out
            </Badge>
          ) : product.compareAt ? (
            <Badge tone="accent" className="absolute left-3 top-3">
              Sale
            </Badge>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-3 border-t-2 border-border p-3">
          <p className="text-sm font-bold">{product.name}</p>
          <p className="shrink-0 text-sm font-bold tabular-nums">{formatMoney(product.price)}</p>
        </div>
      </div>
    </Link>
  );
}
