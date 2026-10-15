/**
 * Player-chosen standard emblem color. Cosmetic only: never touches Rating Points, matchmaking or plans.
 * Premium illustrated art keeps its own per-tier colors.
 */
export type EmblemPalette = { hi: string; mid: string; lo: string; glow: string; face: string };

/** Must match scripts/generate-rank-emblems.mjs (the colors baked into public/ranks/emblems/*.svg). */
export const TIER_PALETTES: readonly EmblemPalette[] = [
  { hi: "#d9dee4", mid: "#7b838c", lo: "#262a2f", glow: "#9aa3ad", face: "#16191c" },
  { hi: "#ffd6ae", mid: "#e0843c", lo: "#5e2a08", glow: "#ff9a50", face: "#1f1006" },
  { hi: "#cfa47c", mid: "#6b4226", lo: "#22120a", glow: "#8a5a36", face: "#120a05" },
  { hi: "#ffe7a6", mid: "#c89632", lo: "#4d3208", glow: "#e0aa3c", face: "#1c1406" },
  { hi: "#ffffff", mid: "#b9c6d2", lo: "#3d4752", glow: "#d6e4f0", face: "#12161b" },
  { hi: "#e6fbff", mid: "#49c6ea", lo: "#0b3a52", glow: "#5fd8ff", face: "#06141c" },
  { hi: "#efdcff", mid: "#9a5ff0", lo: "#2b0f55", glow: "#b07cff", face: "#120822" },
  { hi: "#ffd0d6", mid: "#e0304a", lo: "#4a0712", glow: "#ff4a64", face: "#1c0408" },
  { hi: "#c9ffe6", mid: "#1fbf7f", lo: "#053a24", glow: "#36e39a", face: "#04160e" },
  { hi: "#fffbe0", mid: "#ffd34d", lo: "#7a4e00", glow: "#ffe27a", face: "#1e1400" },
];

/** The preset palette: the 10 tier colors. */
export const BADGE_PRESETS: readonly string[] = TIER_PALETTES.map((p) => p.mid);

const HEX = /^#[0-9a-f]{6}$/;

/** Validates and normalizes "#RRGGBB" / "RRGGBB". Anything else is null. */
export function parseBadgeColor(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const v = (value.startsWith("#") ? value : `#${value}`).toLowerCase();
  return HEX.test(v) ? v : null;
}

const toRgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const toHex = (rgb: number[]) => `#${rgb.map((c) => Math.round(Math.min(255, Math.max(0, c))).toString(16).padStart(2, "0")).join("")}`;
const mix = (hex: string, target: number, amount: number) => toHex(toRgb(hex).map((c) => c + (target - c) * amount));

/** Light / dark / glow shades derived from one chosen color, in the same roles as the tier palettes. */
export function paletteFromColor(color: string): EmblemPalette {
  return { hi: mix(color, 255, 0.72), mid: color, lo: mix(color, 0, 0.72), glow: mix(color, 255, 0.18), face: mix(color, 0, 0.9) };
}

/** Swaps the tier palette baked into an emblem SVG for the chosen color's palette. */
export function recolorEmblemSvg(svg: string, level: number, color: string): string {
  const from = TIER_PALETTES[Math.min(9, Math.max(0, level - 1))];
  const to = paletteFromColor(color);
  let out = svg;
  for (const key of ["hi", "mid", "lo", "glow", "face"] as const) {
    out = out.split(from[key]).join(`__${key}__`);
  }
  for (const key of ["hi", "mid", "lo", "glow", "face"] as const) {
    out = out.split(`__${key}__`).join(to[key]);
  }
  return out;
}

/** Public URL of a recolored standard emblem. */
export function badgeEmblemSrc(level: number, color: string): string {
  const lvl = Math.min(10, Math.max(1, Math.round(level)));
  return `/api/emblem/${lvl}/${color.slice(1)}`;
}
