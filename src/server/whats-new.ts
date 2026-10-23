import "server-only";
import { getPrisma } from "@/server/db";
import { readIsSteamOwner, readAdminActor } from "@/server/admin-gate";

/** R62 player-facing changelog. Only player-relevant entries; admin/system changes never go here. */
export type WhatsNewEntry = { id: string; kind: "FEATURE" | "SHOP"; title: string; body: string; href: string | null; at: string };

const SAFE_HREF = /^\/[\w\-/?=&.%]*$/;

export async function listWhatsNew(take = 50): Promise<WhatsNewEntry[]> {
  const rows = await getPrisma().changelogEntry.findMany({ where: { published: true, publishedAt: { lte: new Date() } }, orderBy: { publishedAt: "desc" }, take });
  return rows.map((r) => ({ id: r.id, kind: r.kind === "SHOP" ? "SHOP" : "FEATURE", title: r.title, body: r.body, href: r.href && SAFE_HREF.test(r.href) ? r.href : null, at: r.publishedAt.toISOString() }));
}

export function validateEntry(i: { title: string; body: string; href: string }): string | null {
  if (i.title.trim().length < 2 || i.title.trim().length > 80) return "כותרת: 2–80 תווים";
  if (i.body.length > 600) return "תיאור: עד 600 תווים";
  if (i.href && !SAFE_HREF.test(i.href)) return "קישור: נתיב באתר בלבד, מתחיל ב-/";
  return null;
}

export async function addWhatsNew(i: { title: string; body: string; href: string }) {
  if (!(await readIsSteamOwner())) return { ok: false as const, error: "בעלים בלבד" };
  const bad = validateEntry(i);
  if (bad) return { ok: false as const, error: bad };
  const p = getPrisma();
  await p.changelogEntry.create({ data: { kind: "FEATURE", title: i.title.trim(), body: i.body.trim(), href: i.href || null } });
  await p.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "whatsnew.add", newValue: i.title.trim().slice(0, 80) } }).catch(() => undefined);
  return { ok: true as const };
}

/** Hide (unpublish) an entry. Nothing is deleted. */
export async function setWhatsNewPublished(id: string, published: boolean) {
  if (!(await readIsSteamOwner())) return { ok: false as const, error: "בעלים בלבד" };
  await getPrisma().changelogEntry.update({ where: { id }, data: { published } });
  return { ok: true as const };
}

export async function adminWhatsNew() {
  return getPrisma().changelogEntry.findMany({ orderBy: { publishedAt: "desc" }, take: 200 });
}

const KIND_LABEL: Record<string, string> = { FRAME: "frame", BANNER: "banner", CARD_EFFECT: "card effect", NAME_COLOR: "name colour", STICKER: "sticker", BADGE: "badge" };

/** Called when a new cosmetic is created and active: adds a "New in the shop" entry once per item. */
export async function announceShopItem(item: { id: string; name: string; kind: string; active: boolean }) {
  if (!item.active) return;
  await getPrisma().changelogEntry.upsert({
    where: { itemId: item.id },
    update: {},
    create: { kind: "SHOP", itemId: item.id, title: `New in the shop: ${item.name}`, body: `A new ${KIND_LABEL[item.kind] ?? "cosmetic"} is available in the A.C.E shop. Cosmetic only.`, href: "/shop" },
  }).catch(() => undefined);
}
