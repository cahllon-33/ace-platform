export type MarketCategory = "skins" | "cosmetics" | "access";

export type MarketItemId = "lore" | "jungle" | "karambit" | "crown" | "shimmer" | "pass";

export type MarketItem = {
  id: MarketItemId;
  index: string;
  category: MarketCategory;
  rp?: string;
};

export const MARKET_TABS: { id: MarketCategory }[] = [
  { id: "skins" },
  { id: "cosmetics" },
  { id: "access" },
];

export const MARKET_ITEMS: MarketItem[] = [
  {
    id: "lore",
    index: "01",
    category: "skins",
  },
  {
    id: "jungle",
    index: "02",
    category: "skins",
  },
  {
    id: "karambit",
    index: "03",
    category: "skins",
  },
  {
    id: "crown",
    index: "04",
    category: "cosmetics",
    rp: "500",
  },
  {
    id: "shimmer",
    index: "05",
    category: "cosmetics",
    rp: "250",
  },
  {
    id: "pass",
    index: "06",
    category: "access",
    rp: "100",
  },
];
