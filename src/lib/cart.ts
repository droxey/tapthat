import { create } from "zustand";
import { persist } from "zustand/middleware";
import { productBySlug } from "./catalog";

export type CartLine = {
  slug: string;
  variantId: string;
  variantName: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (slug: string, variantId: string, qty: number) => void;
  remove: (slug: string, variantId: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (line, qty = 1) => {
        const existing = get().lines.find(
          (l) => l.slug === line.slug && l.variantId === line.variantId,
        );
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l.slug === line.slug && l.variantId === line.variantId
                ? { ...l, qty: l.qty + qty }
                : l,
            ),
          });
          return;
        }
        set({ lines: [...get().lines, { ...line, qty }] });
      },
      setQty: (slug, variantId, qty) => {
        if (qty <= 0) {
          set({
            lines: get().lines.filter((l) => !(l.slug === slug && l.variantId === variantId)),
          });
          return;
        }
        set({
          lines: get().lines.map((l) =>
            l.slug === slug && l.variantId === variantId ? { ...l, qty } : l,
          ),
        });
      },
      remove: (slug, variantId) =>
        set({
          lines: get().lines.filter((l) => !(l.slug === slug && l.variantId === variantId)),
        }),
      clear: () => set({ lines: [] }),
    }),
    { name: "tapthat-cart" },
  ),
);

export function cartCount(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.qty, 0);
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((n, l) => {
    const p = productBySlug(l.slug);
    return n + (p ? p.price * l.qty : 0);
  }, 0);
}
