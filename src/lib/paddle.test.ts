import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { hasLapsed, orderAmountMatches, planChangeFor, tierForPrices, verifyPaddleSignature, type PaddleEventIn } from "@/lib/paddle";
import { cosmeticStyle, fmtUsd, isHexColor, validCents } from "@/lib/cosmetics";

const SECRET = "pdl_ntfset_test_only";
const sign = (body: string, ts: number) => `ts=${ts};h1=${createHmac("sha256", SECRET).update(`${ts}:${body}`).digest("hex")}`;
const prices = { plus: "pri_plus", premium: "pri_prem" };
const ev = (type: string, data: PaddleEventIn["data"], at = "2026-10-22T10:00:00Z"): PaddleEventIn => ({ event_id: "evt_1", event_type: type, occurred_at: at, data });

describe("Paddle-Signature", () => {
  it("accepts a valid signature and rejects tampering, wrong secret, stale ts", () => {
    const body = '{"a":1}'; const now = 1_800_000_000;
    expect(verifyPaddleSignature(body, sign(body, now), SECRET, now)).toBe(true);
    expect(verifyPaddleSignature(body + " ", sign(body, now), SECRET, now)).toBe(false);
    expect(verifyPaddleSignature(body, sign(body, now), "other", now)).toBe(false);
    expect(verifyPaddleSignature(body, sign(body, now - 1000), SECRET, now)).toBe(false);
    expect(verifyPaddleSignature(body, null, SECRET, now)).toBe(false);
    expect(verifyPaddleSignature(body, "ts=1;h1=zz", SECRET, now)).toBe(false);
  });
});

describe("plan mapping", () => {
  it("maps prices to tiers", () => {
    expect(tierForPrices([{ price: { id: "pri_prem" } }], prices)).toBe("PREMIUM");
    expect(tierForPrices([{ price_id: "pri_plus" }], prices)).toBe("PLUS");
    expect(tierForPrices([{ price: { id: "pri_other" } }], prices)).toBeNull();
  });
  it("subscription lifecycle", () => {
    const base = { id: "sub_1", customer_id: "ctm_1", custom_data: { userId: "u1" }, items: [{ price: { id: "pri_plus" } }], current_billing_period: { ends_at: "2026-11-22T10:00:00Z" } };
    expect(planChangeFor(ev("subscription.created", { ...base, status: "active" }), prices)).toMatchObject({ userId: "u1", tier: "PLUS", status: "active", subscriptionId: "sub_1", customerId: "ctm_1" });
    expect(planChangeFor(ev("subscription.past_due", { ...base, status: "past_due" }), prices)).toMatchObject({ tier: null, status: "past_due" });
    expect(planChangeFor(ev("subscription.canceled", { ...base, status: "canceled" }), prices)).toMatchObject({ tier: "FREE", status: "canceled", expiresAt: null });
    expect(planChangeFor(ev("transaction.completed", { id: "txn_1", subscription_id: "sub_1", items: [{ price: { id: "pri_prem" } }], billing_period: { ends_at: "2026-11-22T10:00:00Z" } }), prices)).toMatchObject({ tier: "PREMIUM", subscriptionId: "sub_1" });
    expect(planChangeFor(ev("transaction.completed", { id: "txn_2", items: [{ price: { id: "pri_prem" } }] }), prices)).toBeNull();
    expect(planChangeFor(ev("customer.updated", {}), prices)).toBeNull();
  });
  it("lapses only Paddle plans past period + grace", () => {
    const now = Date.parse("2026-11-30T00:00:00Z");
    expect(hasLapsed({ subscriptionTier: "PLUS", paddleSubscriptionId: "sub", subscriptionExpiresAt: new Date("2026-11-22T00:00:00Z") }, now)).toBe(true);
    expect(hasLapsed({ subscriptionTier: "PLUS", paddleSubscriptionId: "sub", subscriptionExpiresAt: new Date("2026-11-28T00:00:00Z") }, now)).toBe(false);
    expect(hasLapsed({ subscriptionTier: "PREMIUM", paddleSubscriptionId: null, subscriptionExpiresAt: new Date("2020-01-01") }, now)).toBe(false);
  });
});

describe("one-time orders + cosmetics", () => {
  it("amount must match exactly in USD", () => {
    expect(orderAmountMatches([{ price: { unit_price: { amount: "499", currency_code: "USD" } }, quantity: 1 }], 499)).toBe(true);
    expect(orderAmountMatches([{ price: { unit_price: { amount: "99", currency_code: "USD" } }, quantity: 1 }], 499)).toBe(false);
    expect(orderAmountMatches([{ price: { unit_price: { amount: "499", currency_code: "EUR" } }, quantity: 1 }], 499)).toBe(false);
  });
  it("validates cosmetic values", () => {
    expect(isHexColor("#ffd76a")).toBe(true);
    expect(isHexColor("red;x")).toBe(false);
    expect(cosmeticStyle("NAME_COLOR", "url(x)")).toEqual({});
    expect(cosmeticStyle("NAME_COLOR", "#112233")).toEqual({ color: "#112233" });
    expect(validCents(49)).toBe(false); expect(validCents(499)).toBe(true);
    expect(fmtUsd(400)).toBe("$4"); expect(fmtUsd(199)).toBe("$1.99");
  });
});

import { validSocialUrl } from "@/lib/socials";
describe("social links", () => {
  it("accepts only https on the network's own domain", () => {
    expect(validSocialUrl("discord", "https://discord.gg/abc")).toBe(true);
    expect(validSocialUrl("x", "https://twitter.com/ace")).toBe(true);
    expect(validSocialUrl("steam", "https://steamcommunity.com/groups/ace")).toBe(true);
    expect(validSocialUrl("discord", "http://discord.gg/abc")).toBe(false);
    expect(validSocialUrl("youtube", "https://youtube.com.evil.io/x")).toBe(false);
    expect(validSocialUrl("kick", "javascript:alert(1)")).toBe(false);
    expect(validSocialUrl("reddit", "")).toBe(true);
  });
});
