/** R49b: pure helpers for the public CS2 inventory showcase (appid 730, context 2). Display only: no trading. */

export type InventoryItem = {
  name: string;
  marketHashName: string;
  icon: string;
  rarity: string;
  rarityColor: string | null;
  type: string;
  marketable: boolean;
  count: number;
};

export type InventoryStatus = "public" | "private" | "error";

type RawTag = { category?: string; internal_name?: string; localized_tag_name?: string; color?: string };
type RawDesc = {
  classid?: string; instanceid?: string; name?: string; market_hash_name?: string; icon_url?: string; icon_url_large?: string;
  type?: string; marketable?: number; tradable?: number; tags?: RawTag[]; name_color?: string;
};
type RawInventory = { success?: number | boolean; assets?: { classid?: string; instanceid?: string; amount?: string }[]; descriptions?: RawDesc[]; total_inventory_count?: number } | null;

/** Higher is rarer. Unknown rarities sort last. */
const RARITY_ORDER: Record<string, number> = {
  Rarity_Contraband: 9, Rarity_Ancient_Weapon: 8, Rarity_Ancient: 8, Rarity_Ancient_Character: 8,
  Rarity_Legendary_Weapon: 7, Rarity_Legendary: 7, Rarity_Legendary_Character: 7,
  Rarity_Mythical_Weapon: 6, Rarity_Mythical: 6, Rarity_Mythical_Character: 6,
  Rarity_Rare_Weapon: 5, Rarity_Rare: 5, Rarity_Rare_Character: 5,
  Rarity_Uncommon_Weapon: 4, Rarity_Uncommon: 4, Rarity_Common_Weapon: 3, Rarity_Common: 3,
};
const HEX6 = /^[0-9a-fA-F]{6}$/;
const ICON = /^[A-Za-z0-9_-]{10,2000}$/;

function rarityOf(d: RawDesc): { id: string; label: string; color: string | null } {
  const t = d.tags?.find((x) => x.category === "Rarity");
  const id = t?.internal_name ?? "";
  const color = t?.color && HEX6.test(t.color) ? `#${t.color}` : null;
  return { id, label: t?.localized_tag_name ?? "", color };
}

/** Parse Steam's /inventory/{id}/730/2 JSON into the top `limit` showcase items (rarest first, grouped by name). */
export function parseInventory(raw: RawInventory, limit = 12): { items: InventoryItem[]; total: number } {
  if (!raw || !raw.success) return { items: [], total: 0 };
  const counts = new Map<string, number>();
  for (const a of raw.assets ?? []) {
    const k = `${a.classid}_${a.instanceid}`;
    counts.set(k, (counts.get(k) ?? 0) + Math.max(1, Number(a.amount) || 1));
  }
  const byName = new Map<string, InventoryItem & { rank: number }>();
  for (const d of raw.descriptions ?? []) {
    const icon = d.icon_url_large || d.icon_url || "";
    if (!d.market_hash_name || !ICON.test(icon)) continue;
    const r = rarityOf(d);
    const n = counts.get(`${d.classid}_${d.instanceid}`) ?? 1;
    const prev = byName.get(d.market_hash_name);
    if (prev) { prev.count += n; continue; }
    // Rank: rarity, then marketable items, then knives/gloves (★) first.
    const rank = (RARITY_ORDER[r.id] ?? 0) * 10 + (d.marketable ? 2 : 0) + (d.market_hash_name.startsWith("★") ? 5 : 0);
    byName.set(d.market_hash_name, {
      name: (d.name || d.market_hash_name).slice(0, 120),
      marketHashName: d.market_hash_name.slice(0, 200),
      icon,
      rarity: r.label.slice(0, 60),
      rarityColor: r.color,
      type: (d.type ?? "").slice(0, 80),
      marketable: !!d.marketable,
      count: n,
      rank,
    });
  }
  const sorted = [...byName.values()].sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name));
  const total = typeof raw.total_inventory_count === "number" ? raw.total_inventory_count : sorted.length;
  return { items: sorted.slice(0, limit).map(({ rank: _rank, ...it }) => it), total };
}

/** Real Steam CDN image for an economy icon hash. */
export function steamIconUrl(icon: string, size = 256): string {
  return `https://community.akamai.steamstatic.com/economy/image/${icon}/${size}fx${size}f`;
}

export const INVENTORY_TTL_MS = 6 * 60 * 60 * 1000;
export const PRICE_TTL_MS = 12 * 60 * 60 * 1000;

/** Validate a priceoverview `lowest_price` string ("$1.23"). Anything else = no price. */
export function cleanPrice(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  return /^\$[0-9][0-9,]*(\.[0-9]{2})?$/.test(s) ? s : null;
}
