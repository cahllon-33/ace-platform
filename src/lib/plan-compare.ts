import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";

/** Key into `text.pricing.compare.cells`, or a literal value that is not translated. */
export type PlanCell =
  | { label: PlanCellLabel }
  | { value: string };

export type PlanCellLabel =
  | "open"
  | "yes"
  | "noneYet"
  | "closed"
  | "notConnected"
  | "notShipped"
  | "noCharge"
  | "notForSale"
  | "none"
  | "no"
  | "storedTierOnly";

export type PlanCompareRowId =
  | "publicSite"
  | "steamSignIn"
  | "startingRating"
  | "recordedMatches"
  | "rankedQueue"
  | "cs2Servers"
  | "antiCheatClient"
  | "charge"
  | "ratingForSale"
  | "prizeOrWeapon"
  | "goldEliteSeal";

export type PlanCompareRow = {
  id: PlanCompareRowId;
  free: PlanCell;
  plus: PlanCell;
  premium: PlanCell;
};

function same(cell: PlanCell) {
  return { free: cell, plus: cell, premium: cell };
}

/** Promises the public site can keep today. Display prices are not a live checkout. */
export const PLAN_COMPARE_ROWS: PlanCompareRow[] = [
  { id: "publicSite", ...same({ label: "open" }) },
  { id: "steamSignIn", ...same({ label: "yes" }) },
  { id: "startingRating", ...same({ value: "1,000" }) },
  { id: "recordedMatches", ...same({ label: "noneYet" }) },
  { id: "rankedQueue", ...same({ label: "closed" }) },
  { id: "cs2Servers", ...same({ label: "notConnected" }) },
  { id: "antiCheatClient", ...same({ label: "notShipped" }) },
  { id: "charge", ...same({ label: "noCharge" }) },
  { id: "ratingForSale", ...same({ label: "notForSale" }) },
  { id: "prizeOrWeapon", ...same({ label: "none" }) },
  {
    id: "goldEliteSeal",
    free: { label: "no" },
    plus: { label: "storedTierOnly" },
    premium: { label: "storedTierOnly" },
  },
];

export const PLAN_COMPARE_COLUMNS = [
  { id: "free", price: FREE_PRICE, monthly: false },
  { id: "plus", price: PLUS_PRICE, monthly: true },
  { id: "premium", price: PREMIUM_PRICE, monthly: true },
] as const;
