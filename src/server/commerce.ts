import { getPrisma } from "@/server/db";
import { orderAmountMatches, type PaddleEventIn } from "@/lib/paddle";
import { paddleApiBase, type PaddleConfig } from "@/server/paddle";
import { registerTeam } from "@/server/tournaments";

/**
 * R49 one-time Paddle orders: cosmetics and tournament entry. The server creates the Paddle transaction at the
 * DB price (non-catalog item), records a pending PaddleOrder, and fulfils only on a verified transaction.completed
 * for that exact transaction id and amount. Nothing is granted on the client.
 */
export type OrderKind = "COSMETIC" | "TOURNAMENT_ENTRY";
type Line = { name: string; description: string; amountCents: number };

export class OrderError extends Error {}

async function lineFor(userId: string, kind: OrderKind, refId: string, teamId: string | null): Promise<Line> {
  const prisma = getPrisma();
  if (kind === "COSMETIC") {
    const item = await prisma.cosmeticItem.findUnique({ where: { id: refId } });
    if (!item || !item.active) throw new OrderError("item-unavailable");
    if (await prisma.cosmeticOwnership.findUnique({ where: { userId_itemId: { userId, itemId: item.id } } })) throw new OrderError("already-owned");
    return { name: `A.C.E cosmetic: ${item.name}`, description: "Cosmetic only. No gameplay advantage.", amountCents: item.priceCents };
  }
  const t = await prisma.tournament.findUnique({ where: { id: refId } });
  if (!t || t.status !== "REGISTRATION") throw new OrderError("registration-closed");
  if (!t.entryFeeCents) throw new OrderError("no-fee");
  if (!teamId) throw new OrderError("team-required");
  const captain = await prisma.teamMember.findFirst({ where: { teamId, userId, role: "CAPTAIN" } });
  if (!captain) throw new OrderError("captain-only");
  if (await prisma.tournamentEntry.findUnique({ where: { tournamentId_teamId: { tournamentId: t.id, teamId } } })) throw new OrderError("already-registered");
  return { name: `A.C.E tournament entry: ${t.name}`, description: "Entry fee. Prizes are non-cash (cosmetics or subscription time).", amountCents: t.entryFeeCents };
}

export async function createOrder(cfg: PaddleConfig, userId: string, kind: OrderKind, refId: string, teamId: string | null, f: typeof fetch = fetch): Promise<string> {
  const line = await lineFor(userId, kind, refId, teamId);
  const res = await f(`${paddleApiBase(cfg)}/transactions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ quantity: 1, price: { name: line.name, description: line.description, unit_price: { amount: String(line.amountCents), currency_code: "USD" }, product: { name: line.name, tax_category: "standard" } } }],
      currency_code: "USD",
      collection_mode: "automatic",
      custom_data: { userId, kind, refId, ...(teamId ? { teamId } : {}) },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  }).catch(() => null);
  const j = res?.ok ? ((await res.json().catch(() => null)) as { data?: { id?: string } } | null) : null;
  const id = j?.data?.id;
  if (!id || !/^txn_[a-z0-9]+$/i.test(id)) throw new OrderError("paddle-unavailable");
  await getPrisma().paddleOrder.create({ data: { id, userId, kind, refId, teamId, amountCents: line.amountCents } });
  return id;
}

/** Fulfils a pending order on a verified transaction.completed. Returns an outcome or null if it is not one of ours. */
export async function fulfilOrder(e: PaddleEventIn): Promise<string | null> {
  if (e.event_type !== "transaction.completed" || !e.data.id) return null;
  const prisma = getPrisma();
  const order = await prisma.paddleOrder.findUnique({ where: { id: e.data.id } });
  if (!order) return null;
  if (order.status === "completed") return "order-duplicate";
  if (!orderAmountMatches(e.data.items, order.amountCents)) {
    await prisma.paddleOrder.update({ where: { id: order.id }, data: { status: "amount-mismatch" } });
    return "order-amount-mismatch";
  }
  const claim = await prisma.paddleOrder.updateMany({ where: { id: order.id, status: "pending" }, data: { status: "completed", completedAt: new Date() } });
  if (!claim.count) return "order-duplicate";
  if (order.kind === "COSMETIC") {
    await prisma.cosmeticOwnership.upsert({ where: { userId_itemId: { userId: order.userId, itemId: order.refId } }, create: { userId: order.userId, itemId: order.refId, orderId: order.id }, update: {} });
    return "order-cosmetic";
  }
  if (order.kind === "TOURNAMENT_ENTRY" && order.teamId) {
    try {
      await registerTeam(order.userId, order.refId, order.teamId, { paid: true });
      return "order-entry";
    } catch (err) {
      // Paid but registration could not complete (closed/full): flagged for an owner refund in Paddle.
      await prisma.paddleOrder.update({ where: { id: order.id }, data: { status: `needs-refund:${err instanceof Error ? err.message : "error"}`.slice(0, 120) } });
      return "order-entry-failed";
    }
  }
  return "order-unknown";
}
