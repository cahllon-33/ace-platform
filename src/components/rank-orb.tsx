import { rankArtAsset, RANK_TIERS, type RankArt } from "@/lib/ranks";

/**
 * Compact, CSS-only version of the Premium 3D rank viewer orb (RankTurntable):
 * a shaded sphere with the tier's own art (fixed tier colors), two orbit rings, crown, gold glow, pedestal.
 * Rings orbit with moving glints and the sphere rocks gently, so it never turns edge-on; `"sway"` (small sizes) drops the far ring and pedestal.
 * Respects prefers-reduced-motion.
 */
export function RankOrb({
  level,
  art = "standard",
  size,
  label,
  motion = size >= 90 ? "spin" : "sway",
}: {
  level: number;
  art?: RankArt;
  size: number;
  label: string;
  motion?: "spin" | "sway";
}) {
  const tier = RANK_TIERS[Math.min(10, Math.max(1, Math.round(level))) - 1];
  const asset = rankArtAsset(tier.level, art);
  return (
    <span
      className={`ace-rankorb is-${motion}${art === "premium" ? " is-premium" : ""}`}
      style={{ ["--orb" as string]: `${size}px` }}
      role="img"
      aria-label={`${label}: ${tier.name}`}
      data-tier={tier.level}
    >
      <span className="ace-rankorb-glow" aria-hidden="true" />
      <span className="ace-rankorb-rig" aria-hidden="true">
        <span className="ace-rankorb-crown" />
        <span className="ace-rankorb-ring is-a" />
        <span className="ace-rankorb-ring is-b" />
        <span className="ace-rankorb-core" style={{ ["--orb-art" as string]: `url(${asset.heroSrc})` }} />
      </span>
      <span className="ace-rankorb-pedestal" aria-hidden="true" />
    </span>
  );
}
