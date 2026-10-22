import { describe, expect, it } from "vitest";
import { cleanPrice, parseInventory, steamIconUrl } from "@/lib/steam-inventory";
import { adjustmentEffect, type PaddleEventIn } from "@/lib/paddle";

const ICON = "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2D4G65Mp3rmT9Nmn2VXg_UVrMjr2LISTIQ9qMFvT_1O3lOvtgMPu75TJmnRgpGB8slSgLGNu";
const desc = (classid: string, name: string, rarity: string, extra: object = {}) => ({
  classid, instanceid: "0", name, market_hash_name: name, icon_url: ICON, type: "Rifle", marketable: 1,
  tags: [{ category: "Rarity", internal_name: rarity, localized_tag_name: rarity.replace("Rarity_", ""), color: "eb4b4b" }], ...extra,
});

describe("parseInventory", () => {
  it("sorts rarest first, groups duplicates, keeps real icons", () => {
    const r = parseInventory({
      success: 1, total_inventory_count: 4,
      assets: [{ classid: "1", instanceid: "0" }, { classid: "2", instanceid: "0" }, { classid: "2", instanceid: "0" }, { classid: "3", instanceid: "0" }],
      descriptions: [desc("1", "P250 | Sand Dune", "Rarity_Common_Weapon"), desc("2", "AK-47 | Redline", "Rarity_Rare_Weapon"), desc("3", "★ Karambit | Fade", "Rarity_Ancient_Weapon")],
    });
    expect(r.items.map((i) => i.name)).toEqual(["★ Karambit | Fade", "AK-47 | Redline", "P250 | Sand Dune"]);
    expect(r.items[1].count).toBe(2);
    expect(r.items[0].rarityColor).toBe("#eb4b4b");
    expect(r.total).toBe(4);
  });
  it("returns nothing for private/failed payloads and drops bad icons", () => {
    expect(parseInventory(null).items).toEqual([]);
    expect(parseInventory({ success: 0 }).items).toEqual([]);
    expect(parseInventory({ success: 1, descriptions: [desc("1", "X", "Rarity_Common", { icon_url: "bad/../x" })] }).items).toEqual([]);
  });
  it("builds steam CDN urls and only accepts real price strings", () => {
    expect(steamIconUrl("abcdefghijk")).toBe("https://community.akamai.steamstatic.com/economy/image/abcdefghijk/256fx256f");
    expect(cleanPrice("$1,234.56")).toBe("$1,234.56");
    expect(cleanPrice("<b>1</b>")).toBeNull();
    expect(cleanPrice(undefined)).toBeNull();
  });
});

const adj = (data: Partial<PaddleEventIn["data"]>): PaddleEventIn => ({ event_id: "evt_1", event_type: "adjustment.updated", occurred_at: "2026-10-22T10:00:00Z", data: { id: "adj_1", transaction_id: "txn_1", ...data } as PaddleEventIn["data"] });

describe("adjustmentEffect", () => {
  it("revokes on approved full refunds and chargebacks only", () => {
    expect(adjustmentEffect(adj({ action: "refund", status: "approved", type: "full" }))).toBe("revoke");
    expect(adjustmentEffect(adj({ action: "chargeback", status: "approved" }))).toBe("revoke");
    expect(adjustmentEffect(adj({ action: "refund", status: "pending_approval", type: "full" }))).toBe("pending");
    expect(adjustmentEffect(adj({ action: "refund", status: "approved", type: "partial" }))).toBe("partial");
    expect(adjustmentEffect(adj({ action: "credit", status: "approved" }))).toBeNull();
    expect(adjustmentEffect(adj({ action: "chargeback_reverse", status: "approved" }))).toBeNull();
    expect(adjustmentEffect({ ...adj({ action: "refund", status: "approved" }), event_type: "transaction.completed" })).toBeNull();
  });
});

import { checkoutActionFor, paddleLocale } from "@/lib/paddle-client";
describe("checkoutActionFor (R49e)", () => {
  it("never leaves a dead button", () => {
    expect(checkoutActionFor({ tier: "FREE" }, "plus")).toBe("subscribe");
    expect(checkoutActionFor({ tier: "PREMIUM" }, "premium")).toBe("current");
    // owner / manually granted Premium without a Paddle subscription can still test-buy PLUS
    expect(checkoutActionFor({ tier: "PREMIUM", hasSub: false }, "plus")).toBe("subscribe-manual");
    // live Paddle subscriber on a higher (or lower) plan switches instead of a second checkout
    expect(checkoutActionFor({ tier: "PREMIUM", hasSub: true, subStatus: "active" }, "plus")).toBe("change");
    expect(checkoutActionFor({ tier: "PLUS", hasSub: true, subStatus: "past_due" }, "premium")).toBe("change");
    expect(checkoutActionFor({ tier: "PLUS", hasSub: true, subStatus: "canceled" }, "premium")).toBe("subscribe-manual");
  });
  it("maps site locales to Paddle checkout locales", () => {
    expect(paddleLocale("he")).toBe("en");
    expect(paddleLocale("pt-BR")).toBe("pt");
    expect(paddleLocale("zh")).toBe("zh-Hans");
    expect(paddleLocale("de")).toBe("de");
  });
});
