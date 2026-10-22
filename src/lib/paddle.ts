import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * R49 Paddle Billing (Merchant of Record). Pure helpers: signature check and event → plan mapping.
 * Prices are fixed at $4 (PLUS) and $7 (PREMIUM) in the Paddle dashboard; plans are cosmetic/convenience only.
 */

export type PaidTier = "PLUS" | "PREMIUM";
export type PriceMap = { plus: string; premium: string };

/** Paddle-Signature: "ts=<unix>;h1=<hex hmac-sha256 of `${ts}:${rawBody}`>". Rejects stale timestamps (replay). */
export function verifyPaddleSignature(rawBody: string, header: string | null, secret: string, nowSec = Math.floor(Date.now() / 1000), toleranceSec = 300): boolean {
  if (!header || !secret) return false;
  const parts = Object.fromEntries(header.split(";").map((kv) => { const i = kv.indexOf("="); return [kv.slice(0, i).trim(), kv.slice(i + 1).trim()]; }));
  const ts = Number(parts.ts);
  const sigs = header.split(";").filter((kv) => kv.trim().startsWith("h1=")).map((kv) => kv.trim().slice(3));
  if (!Number.isFinite(ts) || !sigs.length || Math.abs(nowSec - ts) > toleranceSec) return false;
  const expected = createHmac("sha256", secret).update(`${parts.ts}:${rawBody}`).digest();
  return sigs.some((h) => {
    if (!/^[0-9a-f]{64}$/i.test(h)) return false;
    const got = Buffer.from(h, "hex");
    return got.length === expected.length && timingSafeEqual(got, expected);
  });
}

export type PaddleEventIn = {
  event_id: string;
  event_type: string;
  occurred_at: string;
  data: {
    id?: string;
    status?: string;
    customer_id?: string | null;
    subscription_id?: string | null;
    custom_data?: Record<string, unknown> | null;
    items?: { price?: { id?: string; unit_price?: { amount?: string; currency_code?: string } } | null; price_id?: string; quantity?: number }[];
    current_billing_period?: { ends_at?: string } | null;
    billing_period?: { ends_at?: string } | null;
    scheduled_change?: { action?: string; effective_at?: string } | null;
  };
};

export type PlanChange = {
  userId: string | null;
  customerId: string | null;
  subscriptionId: string | null;
  tier: PaidTier | "FREE" | null; // null = leave the tier as it is
  status: string;
  expiresAt: Date | null;
};

export const HANDLED_EVENTS = ["subscription.created", "subscription.updated", "subscription.canceled", "subscription.past_due", "subscription.activated", "transaction.completed"] as const;

export function tierForPrices(items: PaddleEventIn["data"]["items"], prices: PriceMap): PaidTier | null {
  const ids = (items ?? []).map((i) => i.price?.id ?? i.price_id ?? "").filter(Boolean);
  if (prices.premium && ids.includes(prices.premium)) return "PREMIUM";
  if (prices.plus && ids.includes(prices.plus)) return "PLUS";
  return null;
}

/** Maps one Paddle event to the plan change to apply. Returns null for events we do not act on. */
export function planChangeFor(e: PaddleEventIn, prices: PriceMap): PlanChange | null {
  if (!(HANDLED_EVENTS as readonly string[]).includes(e.event_type)) return null;
  const d = e.data;
  const rawUser = d.custom_data?.userId;
  const userId = typeof rawUser === "string" && rawUser.length <= 64 ? rawUser : null;
  const isSub = e.event_type.startsWith("subscription.");
  const subscriptionId = isSub ? d.id ?? null : d.subscription_id ?? null;
  const ends = (isSub ? d.current_billing_period?.ends_at : d.billing_period?.ends_at) ?? null;
  const expiresAt = ends ? new Date(ends) : null;
  const paid = tierForPrices(d.items, prices);
  const base = { userId, customerId: d.customer_id ?? null, subscriptionId };
  if (e.event_type === "transaction.completed") {
    if (!subscriptionId || !paid) return null; // only subscription payments for our two prices
    return { ...base, tier: paid, status: "active", expiresAt };
  }
  const status = e.event_type === "subscription.canceled" ? "canceled" : e.event_type === "subscription.past_due" ? "past_due" : d.status ?? "";
  if (status === "canceled") return { ...base, tier: "FREE", status, expiresAt: null };
  if (status === "active" || status === "trialing") return { ...base, tier: paid, status, expiresAt };
  // past_due / paused: keep the current tier until the paid period ends (lapse handled by expiry + grace).
  if (status === "paused") return { ...base, tier: "FREE", status, expiresAt: null };
  return { ...base, tier: null, status, expiresAt };
}

/** Grace after the paid period before a Paddle plan lapses (Paddle retries failed renewals for several days). */
export const LAPSE_GRACE_MS = 3 * 24 * 3600 * 1000;

export function hasLapsed(u: { subscriptionTier: string; paddleSubscriptionId: string | null; subscriptionExpiresAt: Date | null }, now = Date.now()): boolean {
  return u.subscriptionTier !== "FREE" && !!u.paddleSubscriptionId && !!u.subscriptionExpiresAt && u.subscriptionExpiresAt.getTime() + LAPSE_GRACE_MS < now;
}

/** R49 one-time orders: the completed transaction must charge exactly the stored amount in USD (cents). */
export function orderAmountMatches(items: PaddleEventIn["data"]["items"], amountCents: number): boolean {
  const total = (items ?? []).reduce((n, i) => {
    const u = i.price?.unit_price;
    if (!u || (u.currency_code ?? "USD") !== "USD") return NaN;
    return n + Number(u.amount) * (i.quantity ?? 1);
  }, 0);
  return Number.isFinite(total) && total === amountCents;
}

