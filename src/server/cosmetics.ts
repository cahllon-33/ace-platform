import type { CSSProperties } from "react";
import { getPrisma } from "@/server/db";
import { cosmeticStyle, COSMETIC_KINDS, type CosmeticKindId } from "@/lib/cosmetics";

export async function equippedStyles(userId: string): Promise<Partial<Record<CosmeticKindId, CSSProperties>>> {
  const rows = await getPrisma().cosmeticOwnership.findMany({ where: { userId, equipped: true }, include: { item: true } }).catch(() => []);
  const out: Partial<Record<CosmeticKindId, CSSProperties>> = {};
  for (const r of rows) if ((COSMETIC_KINDS as readonly string[]).includes(r.item.kind)) out[r.item.kind as CosmeticKindId] = cosmeticStyle(r.item.kind as CosmeticKindId, r.item.color) as CSSProperties;
  return out;
}

export type ShopItem = { id: string; kind: CosmeticKindId; name: string; description: string; priceCents: number; color: string; owned: boolean; equipped: boolean };

/** Active catalog for the shop plus the viewer's ownership. Empty until the owner adds items (no placeholder products). */
export async function shopCatalog(userId: string | null): Promise<ShopItem[] | null> {
  try {
    const prisma = getPrisma();
    const [items, owned] = await Promise.all([
      prisma.cosmeticItem.findMany({ where: { active: true }, orderBy: [{ kind: "asc" }, { priceCents: "asc" }] }),
      userId ? prisma.cosmeticOwnership.findMany({ where: { userId } }) : Promise.resolve([]),
    ]);
    const own = new Map(owned.map((o) => [o.itemId, o]));
    return items.map((i) => ({ id: i.id, kind: i.kind as CosmeticKindId, name: i.name, description: i.description, priceCents: i.priceCents, color: i.color, owned: own.has(i.id), equipped: !!own.get(i.id)?.equipped }));
  } catch {
    return null;
  }
}
