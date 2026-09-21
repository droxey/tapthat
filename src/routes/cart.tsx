import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cartCount, cartSubtotal, useCart } from "@/lib/cart";
import { productBySlug } from "@/lib/catalog";
import { useLocalApp } from "@/lib/local-app";
import { formatMoney } from "@/lib/utils";

export const Route = createFileRoute("/cart")({ component: Cart });

function Cart() {
  const { lines, setQty, remove, clear } = useCart();
  const placeOrder = useLocalApp((s) => s.placeOrder);
  const [orderId, setOrderId] = useState<string | null>(null);
  const subtotal = cartSubtotal(lines);

  if (orderId) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-subtle">Order placed</p>
        <h1 className="mt-3 text-4xl">{orderId}</h1>
        <p className="mt-4 text-muted">
          This is a preview checkout — no charge. We’ll email packing notes to the address you
          left.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/shop">Keep shopping</Link>
        </Button>
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">Your bag is empty</h1>

        <p className="mt-3 text-muted">A 3-pack is the smallest way in.</p>
        <Button className="mt-8" asChild>
          <Link to="/shop">Shop charms</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-[1fr_22rem]">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Bag · {cartCount(lines)}</h1>

        <ul className="mt-8 space-y-4">
          {lines.map((l) => {
            const p = productBySlug(l.slug);
            if (!p) return null;
            return (
              <li key={`${l.slug}-${l.variantId}`} className="flex gap-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">

                <img src={p.image} alt="" className="size-24 object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm">{p.name}</p>
                  <p className="text-xs text-muted">{l.variantName}</p>
                  <p className="mt-1 text-sm tabular-nums">{formatMoney(p.price)}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <label className="text-xs text-subtle">
                      Qty
                      <input
                        type="number"
                        min={1}
                        value={l.qty}
                        onChange={(e) => setQty(l.slug, l.variantId, Number(e.target.value))}
                        className="ml-2 h-9 w-16 rounded-base border-2 border-border bg-secondary-background px-2 text-sm tabular-nums"

                      />
                    </label>
                    <button
                      type="button"
                      className="text-xs text-muted hover:text-fg"
                      onClick={() => remove(l.slug, l.variantId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <aside className="h-fit rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">

        <p className="flex justify-between text-sm">
          <span className="text-muted">Subtotal</span>
          <span className="tabular-nums">{formatMoney(subtotal)}</span>
        </p>
        <p className="mt-2 text-xs text-subtle">Shipping calculated at pack-out. US 3–7 days.</p>
        <form
          className="mt-6 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const id = placeOrder(subtotal);
            clear();
            setOrderId(id);
          }}
        >
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="addr">Address</Label>
            <Input id="addr" required />
          </div>
          <Button type="submit" className="mt-2">
            Place order
          </Button>
        </form>
      </aside>
    </main>
  );
}
