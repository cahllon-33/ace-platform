import { describe, expect, it } from "vitest";
import { signPluginBody, verifyPluginSignature, webhookAuthorized } from "@/lib/ace-signature";

const SECRET = "test-secret-0123456789abcdef";

describe("DatHost webhook auth", () => {
  it("accepts the Authorization header (raw or Bearer) and the ?token= fallback", () => {
    expect(webhookAuthorized(SECRET, SECRET, null)).toBe(true);
    expect(webhookAuthorized(SECRET, `Bearer ${SECRET}`, null)).toBe(true);
    expect(webhookAuthorized(SECRET, null, SECRET)).toBe(true);
  });
  it("rejects wrong, missing or unconfigured secrets", () => {
    expect(webhookAuthorized(SECRET, "Bearer nope", null)).toBe(false);
    expect(webhookAuthorized(SECRET, null, null)).toBe(false);
    expect(webhookAuthorized(SECRET, "", "")).toBe(false);
    expect(webhookAuthorized(undefined, SECRET, SECRET)).toBe(false);
    expect(webhookAuthorized("short", "short", null)).toBe(false);
  });
});

describe("AceBridge HMAC", () => {
  const body = JSON.stringify({ eventId: "e1", type: "round_end", serverId: "s", data: { round: 3 } });
  const now = 1_800_000_000;
  const ts = String(now);
  it("verifies a correct signature", () => {
    expect(verifyPluginSignature({ secret: SECRET, timestamp: ts, signature: signPluginBody(SECRET, ts, body), body, nowSeconds: now })).toEqual({ ok: true });
  });
  it("rejects a tampered body, wrong secret, stale timestamp and missing headers", () => {
    const sig = signPluginBody(SECRET, ts, body);
    expect(verifyPluginSignature({ secret: SECRET, timestamp: ts, signature: sig, body: body.replace("3", "4"), nowSeconds: now })).toMatchObject({ ok: false, reason: "bad-signature" });
    expect(verifyPluginSignature({ secret: SECRET, timestamp: ts, signature: signPluginBody("other-secret-0123456789", ts, body), body, nowSeconds: now })).toMatchObject({ ok: false });
    expect(verifyPluginSignature({ secret: SECRET, timestamp: ts, signature: sig, body, nowSeconds: now + 301 })).toMatchObject({ ok: false, reason: "stale" });
    expect(verifyPluginSignature({ secret: SECRET, timestamp: null, signature: sig, body, nowSeconds: now })).toMatchObject({ ok: false, reason: "missing" });
    expect(verifyPluginSignature({ secret: undefined, timestamp: ts, signature: sig, body, nowSeconds: now })).toMatchObject({ ok: false, reason: "unconfigured" });
  });
  it("matches the C# plugin's format (sha256=<lowercase hex> over '<ts>.<body>')", () => {
    expect(signPluginBody("k".repeat(16), "1", "{}")).toMatch(/^sha256=[0-9a-f]{64}$/);
  });
});
