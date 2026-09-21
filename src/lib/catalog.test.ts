import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  charmById,
  memoriesFor,
  productBySlug,
  relatedProducts,
} from "./catalog.ts";

describe("productBySlug", () => {
  it("returns afters-ghost at 1650 cents", () => {
    const product = productBySlug("afters-ghost");
    assert.equal(product?.price, 1650);
  });

  it("returns undefined for an unknown slug", () => {
    assert.equal(productBySlug("does-not-exist"), undefined);
  });
});

describe("charmById", () => {
  it("returns ghost-004 as a public charm with its code", () => {
    const charm = charmById("ghost-004");
    assert.equal(charm?.code, "TT-GHOST-004");
    assert.equal(charm?.visibility, "public");
  });

  it("returns ink-102 as private", () => {
    assert.equal(charmById("ink-102")?.visibility, "private");
  });
});

describe("memoriesFor", () => {
  it("includes m8 on the private ink-102 charm", () => {
    assert.equal(
      memoriesFor("ink-102").some((m) => m.id === "m8"),
      true,
    );
  });

  it("sorts ghost-004 memories descending by at", () => {
    const times = memoriesFor("ghost-004").map((m) => +new Date(m.at));
    assert.equal(times.length >= 2, true);
    assert.deepEqual(
      times,
      [...times].sort((a, b) => b - a),
    );
  });
});

describe("relatedProducts", () => {
  it("returns at most 3 products and never the source slug", () => {
    const related = relatedProducts("afters-ghost");
    assert.equal(related.length <= 3, true);
    assert.equal(
      related.some((p) => p.slug === "afters-ghost"),
      false,
    );
  });
});
