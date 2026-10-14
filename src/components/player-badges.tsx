import type { PlayerBadge } from "@/lib/badges";

/** Server-rendered badge row. Badges are computed on the server from stored data. */
export function PlayerBadges({ badges, label = "Player badges" }: { badges: PlayerBadge[]; label?: string }) {
  if (badges.length === 0) return null;
  return (
    <ul className="ace-badges" aria-label={label}>
      {badges.map((badge) => (
        <li key={badge.id} className={`ace-badge is-${badge.kind}`} title={badge.detail}>
          {badge.kind === "special" ? (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 1l2 4.6 5 .5-3.8 3.3 1.1 4.9L8 11.8 3.7 14.3l1.1-4.9L1 6.1l5-.5z" />
            </svg>
          ) : null}
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
