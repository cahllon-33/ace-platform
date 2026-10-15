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
  { id: "startingRating", ...same({ value: "1,200" }) },
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
    plus: { label: "no" },
    premium: { label: "storedTierOnly" },
  },
];

export const PLAN_COMPARE_COLUMNS = [
  { id: "free", price: FREE_PRICE, monthly: false },
  { id: "plus", price: PLUS_PRICE, monthly: true },
  { id: "premium", price: PREMIUM_PRICE, monthly: true },
] as const;

/** Feature matrix: "yes" = included today, "soon" = in the plan but not released, "no" = not included. */
export type MatrixCell = "yes" | "soon" | "no";

export type PlanMatrixRowId =
  | "site"
  | "ladder"
  | "squads"
  | "stats"
  | "gauges"
  | "letter"
  | "rankArt"
  | "card"
  | "badges"
  | "analysis"
  | "beta"
  | "support"
  | "advantage";

export const PLAN_MATRIX: { id: PlanMatrixRowId; free: MatrixCell; plus: MatrixCell; premium: MatrixCell }[] = [
  { id: "site", free: "yes", plus: "yes", premium: "yes" },
  { id: "ladder", free: "yes", plus: "yes", premium: "yes" },
  { id: "squads", free: "yes", plus: "yes", premium: "yes" },
  { id: "stats", free: "no", plus: "yes", premium: "yes" },
  { id: "gauges", free: "no", plus: "soon", premium: "soon" },
  { id: "letter", free: "no", plus: "soon", premium: "soon" },
  { id: "rankArt", free: "no", plus: "no", premium: "yes" },
  { id: "card", free: "no", plus: "no", premium: "yes" },
  { id: "badges", free: "no", plus: "no", premium: "yes" },
  { id: "analysis", free: "no", plus: "no", premium: "soon" },
  { id: "beta", free: "no", plus: "no", premium: "soon" },
  { id: "support", free: "no", plus: "no", premium: "soon" },
  { id: "advantage", free: "no", plus: "no", premium: "no" },
];
