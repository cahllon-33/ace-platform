"use server";

import { getPrisma } from "@/server/db";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import { readPaddleConfig } from "@/server/paddle";
import { SOCIALS, validSocialUrl, type Social } from "@/lib/socials";
import { readSocials } from "@/server/socials";
import { COSMETIC_KINDS, isHexColor, validCents, type CosmeticKindId } from "@/lib/cosmetics";

/** R49 owner-only payments console: Paddle status, subscriptions, events, orders, cosmetic catalog, entry fees. */
type R<T> = { ok: true; data: T } | { ok: false; error: string };

export type CommerceSnapshot = {
  paddle: { configured: boolean; env: string | null };
  subs: { tier: string; status: string; count: number }[];
  events: { id: string; type: string; outcome: string; userId: string | null; at: string }[];
  orders: { id: string; kind: string; refId: string; amountCents: number; status: string; userId: string; at: string }[];
  items: { id: string; slug: string; kind: string; name: string; description: string; priceCents: number; color: string; active: boolean; owners: number }[];
  tournaments: { id: string; name: string; status: string; entryFeeCents: number | null; entries: number }[];
  socials: Partial<Record<Social, string>>;
};

export async function loadCommerce(): Promise<R<CommerceSnapshot>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const prisma = getPrisma();
  const cfg = readPaddleConfig();
  try {
    const socials = await readSocials();
    const [subs, events, orders, items, tournaments] = await Promise.all([
      prisma.user.groupBy({ by: ["subscriptionTier", "subscriptionStatus"], where: { OR: [{ paddleSubscriptionId: { not: null } }, { subscriptionTier: { not: "FREE" } }] }, _count: { _all: true } }),
      prisma.paddleEvent.findMany({ orderBy: { createdAt: "desc" }, take: 25 }),
      prisma.paddleOrder.findMany({ orderBy: { createdAt: "desc" }, take: 25 }),
      prisma.cosmeticItem.findMany({ orderBy: [{ kind: "asc" }, { createdAt: "asc" }], include: { _count: { select: { owners: true } } } }),
      prisma.tournament.findMany({ where: { status: { in: ["DRAFT", "REGISTRATION"] } }, orderBy: { createdAt: "desc" }, take: 25, include: { _count: { select: { entries: true } } } }),
    ]);
    return {
      ok: true,
      data: {
        paddle: { configured: !!cfg, env: cfg?.env ?? null },
        subs: subs.map((s) => ({ tier: s.subscriptionTier, status: s.subscriptionStatus || "manual", count: s._count._all })),
        events: events.map((e) => ({ id: e.id, type: e.type, outcome: e.outcome, userId: e.userId, at: e.createdAt.toISOString() })),
        orders: orders.map((o) => ({ id: o.id, kind: o.kind, refId: o.refId, amountCents: o.amountCents, status: o.status, userId: o.userId, at: o.createdAt.toISOString() })),
        items: items.map((i) => ({ id: i.id, slug: i.slug, kind: i.kind, name: i.name, description: i.description, priceCents: i.priceCents, color: i.color, active: i.active, owners: i._count.owners })),
        tournaments: tournaments.map((t) => ({ id: t.id, name: t.name, status: t.status, entryFeeCents: t.entryFeeCents, entries: t._count.entries })),
        socials,
      },
    };
  } catch {
    return { ok: false, error: "database-unavailable" };
  }
}

export type CosmeticInput = { id?: string; slug: string; kind: string; name: string; description: string; priceCents: number; color: string; active: boolean };

export async function validateCosmetic(i: CosmeticInput): Promise<string | null> {
  if (!/^[a-z0-9-]{3,40}$/.test(i.slug)) return "Slug: 3–40 of a-z, 0-9, -";
  if (!(COSMETIC_KINDS as readonly string[]).includes(i.kind)) return "Unknown kind";
  if (i.name.trim().length < 2 || i.name.trim().length > 60) return "Name: 2–60 characters";
  if (i.description.length > 200) return "Description: max 200 characters";
  if (!validCents(i.priceCents)) return "Price: $0.50–$100.00";
  if (!isHexColor(i.color)) return "Colour: #rrggbb";
  return null;
}

export async function saveCosmetic(i: CosmeticInput): Promise<R<string>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const bad = await validateCosmetic(i);
  if (bad) return { ok: false, error: bad };
  const prisma = getPrisma();
  const data = { slug: i.slug, kind: i.kind as CosmeticKindId, name: i.name.trim(), description: i.description.trim(), priceCents: i.priceCents, color: i.color.toLowerCase(), active: i.active };
  try {
    const row = i.id ? await prisma.cosmeticItem.update({ where: { id: i.id }, data }) : await prisma.cosmeticItem.create({ data });
    await prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "shop.cosmetic", newValue: `${row.slug} ${row.priceCents}c active=${row.active}` } }).catch(() => undefined);
    return { ok: true, data: row.id };
  } catch {
    return { ok: false, error: "Save failed (slug must be unique)." };
  }
}

export async function setEntryFee(tournamentId: string, cents: number | null): Promise<R<null>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  if (cents !== null && !validCents(cents)) return { ok: false, error: "Fee: $0.50–$100.00 or empty for free" };
  const prisma = getPrisma();
  const t = await prisma.tournament.findUnique({ where: { id: tournamentId }, include: { _count: { select: { entries: true } } } });
  if (!t) return { ok: false, error: "not-found" };
  if (t._count.entries > 0 && (t.entryFeeCents ?? null) !== cents) return { ok: false, error: "Fee is locked once a team has registered." };
  await prisma.tournament.update({ where: { id: tournamentId }, data: { entryFeeCents: cents } });
  await prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "tournament.fee", newValue: `${tournamentId} ${cents ?? "free"}` } }).catch(() => undefined);
  return { ok: true, data: null };
}

/** R49 Socials: owner sets each network URL ("" hides the icon). Only https URLs on the network's own domain. */
export async function saveSocials(input: Partial<Record<string, string>>): Promise<R<null>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const prisma = getPrisma();
  for (const n of SOCIALS) {
    const v = (input[n] ?? "").trim();
    if (!validSocialUrl(n, v)) return { ok: false, error: `${n}: https URL on the ${n} domain, or empty` };
  }
  await prisma.$transaction(SOCIALS.map((n) => prisma.siteSetting.upsert({ where: { key: `social.${n}` }, create: { key: `social.${n}`, value: (input[n] ?? "").trim() }, update: { value: (input[n] ?? "").trim() } })));
  await prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "site.socials", newValue: SOCIALS.filter((n) => (input[n] ?? "").trim()).join(",") || "none" } }).catch(() => undefined);
  return { ok: true, data: null };
}
