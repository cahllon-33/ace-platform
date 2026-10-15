/** Rank emblem floating in 3D with a soft gold glow. Motion stops under prefers-reduced-motion (CSS). */
export function FloatingEmblem({ src, alt, size = 120 }: { src: string; alt: string; size?: number }) {
  return (
    <span className="ace-float-emblem" style={{ width: size, height: size }}>
      <span className="ace-float-emblem-glow" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={size} height={size} loading="lazy" />
    </span>
  );
}

/** Steam avatar from the stored profile, or an initial when none is stored. */
export function PlayerAvatar({ src, name, alt, size = 64 }: { src: string | null; name: string; alt: string; size?: number }) {
  const initial = name.replace(/[^\p{L}\p{N}]/gu, "").slice(0, 1).toUpperCase() || "A";
  return (
    <span className="ace-avatar3d" style={{ width: size, height: size }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} width={size} height={size} referrerPolicy="no-referrer" />
      ) : (
        <span aria-hidden="true">{initial}</span>
      )}
    </span>
  );
}
