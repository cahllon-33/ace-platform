import { getPrisma } from "@/server/db";
import { hasLapsed, planChangeFor, type PaddleEventIn, type PriceMap } from "@/lib/paddle";

/** R49 Paddle config. The checkout is enabled only when every value is present; otherwise the UI says "coming soon". */
export type PaddleConfig = { env: "sandbox" | "production"; apiKey: string; clientToken: string; prices: PriceMap; webhookSecret: string };

export function readPaddleConfig(env: NodeJS.ProcessEnv = process.env): PaddleConfig | null {
  const mode = env.PADDLE_ENV?.trim();
  const v = (k: string) => env[k]?.trim() ?? "";
  const cfg = { apiKey: v("PADDLE_API_KEY"), clientToken: v("PADDLE_CLIENT_TOKEN"), plus: v("PADDLE_PRICE_PLUS"), premium: v("PADDLE_PRICE_PREMIUM"), secret: v("PADDLE_WEBHOOK_SECRET") };
  if ((mode !== "sandbox" && mode !== "production") || Object.values(cfg).some((x) => !x)) return null;
  if (!/^pri_/.test(cfg.plus) || !/^pri_/.test(cfg.premium)) return null;
  return { env: mode, apiKey: cfg.apiKey, clientToken: cfg.clientToken, prices: { plus: cfg.plus, premium: cfg.premium }, webhookSecret: cfg.secret };
}

export const paddleApiBase = (c: PaddleConfig) => (c.env === "sandbox" ? "https://sandbox-api.paddle.com" : "https://api.paddle.com");

/** Applies one verified webhook event once (PaddleEvent id = idempotency key). Returns the outcome string. */
export async function applyPaddleEvent(e: PaddleEventIn, cfg: PaddleConfig): Promise<string> {
  const prisma = getPrisma();
  const occurredAt = new Date(e.occurred_at);
  if (Number.isNaN(occurredAt.getTime())) return "bad-date";
  const seen = await prisma.paddleEvent.findUnique({ where: { id: e.event_id } });
  if (seen) return "duplicate";
  const { fulfilOrder } = await import("@/server/commerce");
  const { revokeForAdjustment } = await import("@/server/commerce");
  const order = (await revokeForAdjustment(e)) ?? (await fulfilOrder(e));
  if (order) {
    const o = await prisma.paddleOrder.findUnique({ where: { id: (e.data.transaction_id ?? e.data.id)! }, select: { userId: true } });
    await prisma.paddleEvent.create({ data: { id: e.event_id, type: e.event_type, userId: o?.userId ?? null, occurredAt, outcome: order } }).catch(() => undefined);
    return order;
  }
  const change = planChangeFor(e, cfg.prices);
  let outcome = "ignored";
  let userId: string | null = null;
  if (change) {
    const user =
      (change.userId ? await prisma.user.findUnique({ where: { id: change.userId } }) : null) ??
      (change.subscriptionId ? await prisma.user.findUnique({ where: { paddleSubscriptionId: change.subscriptionId } }) : null) ??
      (change.customerId ? await prisma.user.findUnique({ where: { paddleCustomerId: change.customerId } }) : null);
    if (!user) outcome = "no-user";
    else if (user.subscriptionEventAt && user.subscriptionEventAt > occurredAt) { outcome = "stale"; userId = user.id; }
    else {
      userId = user.id;
      // A different, older subscription must not overwrite the current one (e.g. cancel of a replaced sub).
      const otherSub = !!user.paddleSubscriptionId && !!change.subscriptionId && user.paddleSubscriptionId !== change.subscriptionId && user.subscriptionStatus === "active" && change.status === "canceled";
      if (otherSub) outcome = "other-subscription";
      else {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            ...(change.tier ? { subscriptionTier: change.tier } : {}),
            subscriptionStatus: change.status,
            ...(change.expiresAt || change.status === "canceled" ? { subscriptionExpiresAt: change.expiresAt } : {}),
            ...(change.subscriptionId ? { paddleSubscriptionId: change.subscriptionId } : {}),
            ...(change.customerId && !user.paddleCustomerId ? { paddleCustomerId: change.customerId } : {}),
            subscriptionEventAt: occurredAt,
          },
        });
        outcome = `applied:${change.tier ?? "keep"}:${change.status}`;
      }
    }
  }
  await prisma.paddleEvent.create({ data: { id: e.event_id, type: e.event_type, userId, occurredAt, outcome } }).catch(() => undefined);
  return outcome;
}

/** Lazy lapse: a Paddle plan whose paid period ended more than the grace ago drops to FREE (admin grants are untouched). */
export async function lapseIfExpired(u: { id: string; subscriptionTier: string; paddleSubscriptionId: string | null; subscriptionExpiresAt: Date | null }) {
  if (!hasLapsed(u)) return false;
  await getPrisma().user.updateMany({ where: { id: u.id, paddleSubscriptionId: u.paddleSubscriptionId }, data: { subscriptionTier: "FREE", subscriptionStatus: "expired" } });
  return true;
}

/** Customer portal (manage payment method, invoices, cancel). Returns the overview URL or null. */
export async function portalUrl(cfg: PaddleConfig, customerId: string, subscriptionId: string | null, f: typeof fetch = fetch): Promise<string | null> {
  const res = await f(`${paddleApiBase(cfg)}/customers/${encodeURIComponent(customerId)}/portal-sessions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(subscriptionId ? { subscription_ids: [subscriptionId] } : {}),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  }).catch(() => null);
  if (!res?.ok) return null;
  const j = (await res.json().catch(() => null)) as { data?: { urls?: { general?: { overview?: string } } } } | null;
  const url = j?.data?.urls?.general?.overview ?? "";
  return /^https:\/\//.test(url) ? url : null;
}
