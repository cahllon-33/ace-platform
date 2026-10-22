import type { PrestigeBadge } from "@/lib/prestige";
import "./prestige-emblem.css";

/**
 * Prestige emblem (R41b): original A.C.E art per level on a transparent WebP, shown like the rank
 * orbs: 3D turn with parallax layers (halo behind, embers in front), per-theme fire glow, rising flame
 * plumes and embers, and a light sweep. Premium = full effect; Plus = cooler platinum glow, fewer embers.
 * Transform/opacity-only animation (GPU-composited). Reduced motion = static image + static glow.
 */
export function PrestigeEmblem({ badge, size, label, priority = false }: { badge: Pick<PrestigeBadge, "level" | "set" | "name" | "slug">; size: number; label: string; priority?: boolean }) {
  const src = `/prestige/${badge.slug}-${size > 160 ? 512 : 192}.webp`;
  const small = size < 64;
  return (
    <span
      className={`pem is-${badge.set}${small ? " is-sm" : ""}`}
      style={{ ["--pem-size" as string]: `${size}px`, ["--pem-img" as string]: `url(${src})` }}
      role="img"
      aria-label={`${label}: ${badge.name}`}
      data-level={badge.level}
    >
      <span className="pem-glow" aria-hidden="true" />
      <span className="pem-halo" aria-hidden="true" />
      {small ? null : <span className="pem-fire" aria-hidden="true"><span className="pem-plume" /><span className="pem-plume is-b" /></span>}
      <span className="pem-turn" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={size} height={size} loading={priority ? "eager" : "lazy"} decoding="async" />
        <span className="pem-shine" />
      </span>
      {small ? null : (
        <span className="pem-fx" aria-hidden="true">
          {Array.from({ length: badge.set === "premium" ? 10 : 4 }, (_, i) => <i key={i} className="pem-ember" />)}
        </span>
      )}
      <span className="pem-floor" aria-hidden="true" />
    </span>
  );
}
