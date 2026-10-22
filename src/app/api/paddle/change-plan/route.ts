import { NextResponse } from "next/server";
import { checkoutActionFor } from "@/lib/paddle";
import { paddleApiBase, readPaddleConfig } from "@/server/paddle";
import { readSessionUser } from "@/server/session";

/**
 * R49e: switch an existing Paddle subscription to the other plan (prorated immediately) instead of opening a second
 * checkout. The tier itself still changes only when the signed subscription.updated webhook arrives.
 */
export async function POST(request: Request) {
  const cfg = readPaddleConfig();
  if (!cfg) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  const user = await readSessionUser().catch(() => null);
  if (!user?.steamId) return NextResponse.json({ ok: false, error: "sign-in" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { plan?: unknown } | null;
  const plan = body?.plan === "plus" || body?.plan === "premium" ? body.plan : null;
  if (!plan) return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  const action = checkoutActionFor({ tier: user.subscriptionTier, hasSub: !!user.paddleSubscriptionId, subStatus: user.subscriptionStatus }, plan);
  if (action !== "change" || !user.paddleSubscriptionId) return NextResponse.json({ ok: false, error: "no-subscription" }, { status: 409 });
  const res = await fetch(`${paddleApiBase(cfg)}/subscriptions/${encodeURIComponent(user.paddleSubscriptionId)}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${cfg.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ price_id: cfg.prices[plan], quantity: 1 }], proration_billing_mode: "prorated_immediately" }),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  }).catch(() => null);
  if (!res?.ok) {
    const j = (await res?.json().catch(() => null)) as { error?: { code?: string } } | null;
    return NextResponse.json({ ok: false, error: j?.error?.code ?? "paddle-error" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
