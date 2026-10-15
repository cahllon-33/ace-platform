/**
 * Large 3D "Coming soon" plate: charcoal layered slab, bevelled gold rim, gold-gradient lettering,
 * soft drop shadow and a gentle float (disabled under prefers-reduced-motion).
 * Purely presentational; it never implies that a feature or payment works.
 */
export function ComingSoonPlate({
  label,
  caption,
  size = "md",
  className = "",
}: {
  label: string;
  caption?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span className={`ace-plate is-${size} ${className}`}>
      <span className="ace-plate-float">
        <span className="ace-plate-shadow" aria-hidden="true" />
        <span className="ace-plate-back" aria-hidden="true" />
        <span className="ace-plate-face">
          <span className="ace-plate-rivet is-l" aria-hidden="true" />
          <span className="ace-plate-text">{label}</span>
          <span className="ace-plate-rivet is-r" aria-hidden="true" />
        </span>
      </span>
      {caption ? <span className="ace-plate-caption">{caption}</span> : null}
    </span>
  );
}
