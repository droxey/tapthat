import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createOrder } from "./local-app.ts";

describe("createOrder", () => {
  it("prefixes the id with TT- and stores total plus contact fields", () => {
    const order = createOrder(5549, {
      email: "lex@tapthat.fans",
      name: "Lex",
      address: "1 Lido Deck",
    });
    assert.equal(order.id.startsWith("TT-"), true);
    assert.equal(order.total, 5549);
    assert.equal(order.email, "lex@tapthat.fans");
    assert.equal(order.name, "Lex");
    assert.equal(order.address, "1 Lido Deck");
    assert.equal(typeof order.at, "string");
  });
});
