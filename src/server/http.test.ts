import { describe, expect, it } from "vitest";
import { optionalString, publicErrorMessage, readJsonObject } from "./http";

const req = (body: string) => new Request("http://x", { method: "POST", body });

describe("readJsonObject", () => {
  it("parses objects", async () => {
    expect(await readJsonObject(req('{"a":1}'))).toEqual({ a: 1 });
  });
  it("rejects malformed, arrays and oversized bodies", async () => {
    expect(await readJsonObject(req("{nope"))).toBeNull();
    expect(await readJsonObject(req("[1]"))).toBeNull();
    expect(await readJsonObject(req(JSON.stringify({ a: "x".repeat(20000) })))).toBeNull();
  });
});

describe("helpers", () => {
  it("optionalString validates type and length", () => {
    expect(optionalString(" ok ")).toBe("ok");
    expect(optionalString(42)).toBeUndefined();
    expect(optionalString("x".repeat(300))).toBeUndefined();
  });
  it("hides driver errors", () => {
    const driver = Object.assign(new Error("connect ECONNREFUSED 10.0.0.1"), { code: "P1001" });
    expect(publicErrorMessage(driver, "fallback")).toBe("fallback");
    expect(publicErrorMessage(new Error("Registration is closed."), "fallback")).toBe("Registration is closed.");
  });
});
