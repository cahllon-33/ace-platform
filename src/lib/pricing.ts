export const FREE_PRICE = "$0";
/** Integer-locked display price. Do not invent other Plus rates. */
export const PLUS_PRICE = "$4";
/** Integer-locked display price. Do not invent other Premium rates. */
export const PREMIUM_PRICE = "$7";
export const PLUS_PERIOD = "/mo";
export const PREMIUM_PERIOD = "/mo";

export function telemetryUnlocked(tier: string | null | undefined) {
  return tier === "PLUS" || tier === "PREMIUM";
}

/** The elite seal is a special badge: A.C.E PREMIUM only. Pass the tier stored on the server. */
export function hasEliteSeal(tier: string | null | undefined) {
  return tier === "PREMIUM";
}
