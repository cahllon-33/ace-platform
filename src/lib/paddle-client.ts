/** R49e client-safe Paddle helpers (no node:crypto). */
/** R49e: what a plan card offers a signed-in user. Never a dead button. */
export type CheckoutAction = "current" | "change" | "subscribe" | "subscribe-manual";
const LIVE_SUB = new Set(["active", "trialing", "past_due"]);
export function checkoutActionFor(me: { tier: string; subStatus?: string | null; hasSub?: boolean }, plan: "plus" | "premium"): CheckoutAction {
  const tier = me.tier.toUpperCase();
  if (tier === plan.toUpperCase()) return "current";
  const paid = tier === "PLUS" || tier === "PREMIUM";
  if (paid && me.hasSub && LIVE_SUB.has(me.subStatus ?? "")) return "change";
  return paid ? "subscribe-manual" : "subscribe";
}

/** Paddle checkout locales (v2). Anything else falls back to English rather than failing the checkout. */
const PADDLE_LOCALES = new Set(["ar", "zh-Hans", "cs", "da", "nl", "en", "fr", "de", "hu", "it", "ja", "ko", "no", "pl", "pt", "ru", "es", "sv", "tr", "uk", "hr", "ro", "th", "id", "fi"]);
export function paddleLocale(lang: string | null | undefined): string {
  const l = (lang ?? "").trim();
  if (/^zh/i.test(l)) return "zh-Hans";
  const base = l.toLowerCase().split("-")[0];
  return PADDLE_LOCALES.has(base) ? base : "en";
}
