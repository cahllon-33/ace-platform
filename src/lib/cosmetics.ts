/** R49 cosmetic helpers (client-safe). Strictly visual. */
export const COSMETIC_KINDS = ["FRAME", "BANNER", "CARD_EFFECT", "NAME_COLOR", "STICKER", "BADGE"] as const;
export type CosmeticKindId = (typeof COSMETIC_KINDS)[number];
export const isHexColor = (c: string) => /^#[0-9a-f]{6}$/i.test(c);
/** Price bounds for admin-set amounts (USD cents). */
export const validCents = (n: number) => Number.isInteger(n) && n >= 50 && n <= 100_00;
export const fmtUsd = (cents: number) => `$${(cents / 100).toFixed(cents % 100 ? 2 : 0)}`;

/** Inline style for an equipped cosmetic (derived only from a validated hex colour). */
export function cosmeticStyle(kind: CosmeticKindId, color: string): Record<string, string> {
  if (!isHexColor(color)) return {};
  if (kind === "NAME_COLOR") return { color };
  if (kind === "FRAME") return { boxShadow: `0 0 0 3px ${color}`, borderRadius: "14px" };
  if (kind === "BANNER") return { backgroundImage: `linear-gradient(120deg, ${color}55, transparent 70%)` };
  if (kind === "BADGE") return { color, borderColor: color, textShadow: `0 0 12px ${color}88` };
  if (kind === "STICKER") return { filter: `drop-shadow(0 0 10px ${color}88)` };
  return { boxShadow: `0 0 28px ${color}66` };
}
