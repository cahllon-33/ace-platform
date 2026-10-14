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

/** Plus and Premium accounts carry the gold crest in the interface. */
export function hasEliteSeal(tier: string | null | undefined) {
  return tier === "PLUS" || tier === "PREMIUM";
}
