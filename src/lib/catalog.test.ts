import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  charmByCode,
  charmById,
  floorMemories,
  memoriesFor,
  productBySlug,
  relatedProducts,
} from "./catalog.ts";

describe("productBySlug", () => {
  it("returns afters-fans at 1650 cents", () => {
    const product = productBySlug("afters-fans");
    assert.equal(product?.price, 1650);
  });

  it("returns undefined for an unknown slug", () => {
    assert.equal(productBySlug("does-not-exist"), undefined);
  });
});

describe("charmById", () => {
  it("returns fans-004 as a public charm with its code", () => {
    const charm = charmById("fans-004");
    assert.equal(charm?.code, "TT-FANS-004");
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

  it("sorts fans-004 memories descending by at", () => {
    const times = memoriesFor("fans-004").map((m) => +new Date(m.at));
    assert.equal(times.length >= 2, true);
    assert.deepEqual(
      times,
      [...times].sort((a, b) => b - a),
    );
  });
});

describe("relatedProducts", () => {
  it("returns at most 3 products and never the source slug", () => {
    const related = relatedProducts("afters-fans");
    assert.equal(related.length <= 3, true);
    assert.equal(
      related.some((p) => p.slug === "afters-fans"),
      false,
    );
  });
});

describe("charmByCode", () => {
  it("matches fans-004 regardless of case", () => {
    assert.equal(charmByCode("tt-fans-004")?.id, "fans-004");
    assert.equal(charmByCode("TT-FANS-004")?.id, "fans-004");
  });

  it("returns undefined for an unknown code", () => {
    assert.equal(charmByCode("nope"), undefined);
  });
});

describe("floorMemories", () => {
  it("keeps public m1 and hides private m8", () => {
    const ids = floorMemories().map((m) => m.id);
    assert.equal(ids.includes("m1"), true);
    assert.equal(ids.includes("m8"), false);
  });
});
