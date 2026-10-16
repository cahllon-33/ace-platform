import { rankArtAsset, RANK_TIERS, type RankArt } from "@/lib/ranks";
import "./rank-orb.css";

/** Fixed tier colors (same values as the public .ace-rank-tone-N palette). Never user-editable. */
const TIER_TONE: Record<number, string> = {
  1: "#9aa3ad",
  2: "#c08a4a",
  3: "#d4a094",
  4: "#d7e4f2",
  5: "#c4a15a",
  6: "#ffd66b",
  7: "#7ef0ff",
  8: "#4d8dff",
  9: "#c084fc",
  10: "#ffd66b",
};

/**
 * Admin-only premium rank orb: glossy sphere (specular highlight, rim light, inner shadow) with the
 * tier art masked inside, a tier-colored orbit ring that passes behind and in front of the sphere with
 * a travelling glint, and a soft particle halo. Premium adds a gold crown, a gold ring and a shimmer sweep.
 * `size` is in px; below 64px the decorative layers are reduced so table badges stay crisp and cheap.
 */
export function RankOrb({ level, art = "standard", size, label }: { level: number; art?: RankArt; size: number; label: string }) {
  const tier = RANK_TIERS[Math.min(10, Math.max(1, Math.round(level))) - 1];
  const asset = rankArtAsset(tier.level, art);
  const premium = art === "premium";
  const scale = size >= 120 ? "is-lg" : size >= 64 ? "is-md" : "is-sm";
  return (
    <span
      className={`rorb ${scale}${premium ? " is-premium" : ""}`}
      style={{ ["--rorb-size" as string]: `${size}px`, ["--rorb-tone" as string]: TIER_TONE[tier.level] }}
      role="img"
      aria-label={`${label}: ${tier.name}${premium ? " (Premium)" : ""}`}
      data-tier={tier.level}
    >
      <span className="rorb-halo" aria-hidden="true" />
      <span className="rorb-ring is-back" aria-hidden="true" />
      <span className="rorb-sphere" aria-hidden="true">
        <span className="rorb-art" style={{ backgroundImage: `url(${asset.heroSrc})` }} />
        <span className="rorb-shade" />
        <span className="rorb-shimmer" />
        <span className="rorb-gloss" />
      </span>
      <span className="rorb-ring is-front" aria-hidden="true" />
      {premium ? (
        <svg className="rorb-crown" viewBox="0 0 64 40" aria-hidden="true">
          <defs>
            <linearGradient id={`rorb-gold-${tier.level}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff7d1" />
              <stop offset="0.45" stopColor="#f5c842" />
              <stop offset="1" stopColor="#8a5f0c" />
            </linearGradient>
          </defs>
          <path
            d="M6 34 L3 12 L17 22 L32 4 L47 22 L61 12 L58 34 Z"
            fill={`url(#rorb-gold-${tier.level})`}
            stroke="#5c3d06"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <rect x="6" y="33" width="52" height="5" rx="2" fill={`url(#rorb-gold-${tier.level})`} stroke="#5c3d06" strokeWidth="1" />
          <circle cx="32" cy="4.5" r="3" fill="#fff3b0" />
          <circle cx="3.5" cy="12" r="2.4" fill="#fff3b0" />
          <circle cx="60.5" cy="12" r="2.4" fill="#fff3b0" />
          <circle cx="32" cy="26" r="3.2" fill="var(--rorb-tone)" stroke="#fff3b0" strokeWidth="0.8" />
        </svg>
      ) : null}
      <span className="rorb-floor" aria-hidden="true" />
    </span>
  );
}
