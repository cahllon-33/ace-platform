import "server-only";
import { getPrisma } from "@/server/db";
import { cleanPrice, INVENTORY_TTL_MS, parseInventory, PRICE_TTL_MS, type InventoryItem, type InventoryStatus } from "@/lib/steam-inventory";

/** R49b: server-side public CS2 inventory (Steam community endpoint), cached ~6h in the DB. Display only. */

const STEAM_ID64 = /^\d{17}$/;
const UA = "Mozilla/5.0 (compatible; ACE-Platform/1.0; inventory showcase)";

export type Showcase = { status: InventoryStatus; items: (InventoryItem & { price: string | null })[]; total: number; fetchedAt: Date | null };

async function fetchInventory(steamId: string): Promise<{ status: InventoryStatus; items: InventoryItem[]; total: number }> {
  try {
    const res = await fetch(`https://steamcommunity.com/inventory/${steamId}/730/2?l=english&count=2000`, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    // Steam answers 403 (or 200 with a null body) for private inventories; 429/5xx is an error.
    if (res.status === 403 || res.status === 401) return { status: "private", items: [], total: 0 };
    if (!res.ok) return { status: "error", items: [], total: 0 };
    const json = await res.json().catch(() => null);
    if (json === null) return { status: "private", items: [], total: 0 };
    if (!json.success) return { status: "error", items: [], total: 0 };
    const parsed = parseInventory(json);
    return { status: "public", ...parsed };
  } catch {
    return { status: "error", items: [], total: 0 };
  }
}

// In-process limiter for Steam market priceoverview (Steam throttles hard: keep well under ~20/min).
let lastPriceAt = 0;
const PRICE_GAP_MS = 3500;
const PRICES_PER_VIEW = 2;

async function fetchPrice(name: string): Promise<string | null | undefined> {
  const now = Date.now();
  if (now - lastPriceAt < PRICE_GAP_MS) return undefined; // skipped: try on a later view
  lastPriceAt = now;
  try {
    const url = `https://steamcommunity.com/market/priceoverview/?appid=730&currency=1&market_hash_name=${encodeURIComponent(name)}`;
    const res = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(4000), cache: "no-store" });
    if (res.status === 429) { lastPriceAt = now + 60_000; return undefined; }
    if (!res.ok) return undefined;
    const j = (await res.json().catch(() => null)) as { success?: boolean; lowest_price?: string; median_price?: string } | null;
    if (!j?.success) return null;
    return cleanPrice(j.lowest_price) ?? cleanPrice(j.median_price);
  } catch {
    return undefined;
  }
}

async function withPrices(items: InventoryItem[]): Promise<(InventoryItem & { price: string | null })[]> {
  const prisma = getPrisma();
  const names = items.filter((i) => i.marketable).map((i) => i.marketHashName);
  const rows = names.length ? await prisma.steamMarketPrice.findMany({ where: { marketHashName: { in: names } } }).catch(() => []) : [];
  const map = new Map(rows.map((r) => [r.marketHashName, r]));
  const stale = names.filter((n) => { const r = map.get(n); return !r || Date.now() - r.fetchedAt.getTime() > PRICE_TTL_MS; }).slice(0, PRICES_PER_VIEW);
  for (const n of stale) {
    const p = await fetchPrice(n);
    if (p === undefined) continue;
    const row = { marketHashName: n, lowest: p, fetchedAt: new Date() };
    map.set(n, row);
    await prisma.steamMarketPrice.upsert({ where: { marketHashName: n }, create: row, update: { lowest: p, fetchedAt: row.fetchedAt } }).catch(() => undefined);
  }
  return items.map((i) => ({ ...i, price: i.marketable ? map.get(i.marketHashName)?.lowest ?? null : null }));
}

export async function inventoryShowcase(steamId: string): Promise<Showcase> {
  if (!STEAM_ID64.test(steamId)) return { status: "error", items: [], total: 0, fetchedAt: null };
  const prisma = getPrisma();
  const cached = await prisma.steamInventoryCache.findUnique({ where: { steamId } }).catch(() => null);
  let status: InventoryStatus;
  let items: InventoryItem[];
  let total: number;
  let fetchedAt: Date;
  if (cached && Date.now() - cached.fetchedAt.getTime() < (cached.status === "error" ? 10 * 60 * 1000 : INVENTORY_TTL_MS)) {
    status = cached.status as InventoryStatus; items = (cached.items as unknown as InventoryItem[]) ?? []; total = cached.total; fetchedAt = cached.fetchedAt;
  } else {
    const fresh = await fetchInventory(steamId);
    if (fresh.status === "error" && cached && cached.status !== "error") {
      // Keep showing the last good snapshot when Steam is down or rate-limiting.
      status = cached.status as InventoryStatus; items = (cached.items as unknown as InventoryItem[]) ?? []; total = cached.total; fetchedAt = cached.fetchedAt;
    } else {
      ({ status, items, total } = fresh);
      fetchedAt = new Date();
      const data = { status, items: items as unknown as object, total, fetchedAt };
      await prisma.steamInventoryCache.upsert({ where: { steamId }, create: { steamId, ...data }, update: data }).catch(() => undefined);
    }
  }
  return { status, items: status === "public" ? await withPrices(items) : [], total, fetchedAt };
}
