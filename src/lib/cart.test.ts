import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";

// cart.ts imports "./catalog" without an extension (Vite). Node's test runner
// does not resolve that; rewrite it here so we don't touch production code.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "./catalog") {
      return nextResolve("./catalog.ts", context);
    }
    return nextResolve(specifier, context);
  },
});

const { cartCount, cartSubtotal } = await import("./cart.ts");

type CartLine = {
  slug: string;
  variantId: string;
  variantName: string;
  qty: number;
};

function line(slug: string, qty: number, variantId = "default"): CartLine {
  return { slug, variantId, variantName: variantId, qty };
}

describe("cartCount", () => {
  it("is 0 for an empty cart", () => {
    assert.equal(cartCount([]), 0);
  });

  it("sums quantities across lines", () => {
    assert.equal(cartCount([line("afters-ghost", 2)]), 2);
    assert.equal(cartCount([line("afters-ghost", 1), line("charms-10", 1)]), 2);
  });
});

describe("cartSubtotal", () => {
  it("is 0 for an empty cart", () => {
    assert.equal(cartSubtotal([]), 0);
  });

  it("multiplies afters-ghost price by qty", () => {
    assert.equal(cartSubtotal([line("afters-ghost", 2)]), 1650 * 2);
  });

  it("sums two known products", () => {
    assert.equal(
      cartSubtotal([line("afters-ghost", 1), line("charms-10", 1)]),
      1650 + 3899,
    );
  });

  it("treats an unknown slug as 0", () => {
    assert.equal(
      cartSubtotal([line("afters-ghost", 1), line("does-not-exist", 4)]),
      1650,
    );
  });
});
