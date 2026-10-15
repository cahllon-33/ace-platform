import type React from "react";

/**
 * Reusable "Coming soon" treatment: charcoal plate, gold bevel edge light and a slow sheen.
 * Use it for anything planned. It never claims a feature is live.
 */
export function ComingSoon({
  label,
  size = "sm",
  className = "",
  children,
}: {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={`ace-soon is-${size} ${className}`}>
      <span className="ace-soon-dot" aria-hidden="true" />
      <span className="ace-soon-label">{label}</span>
      {children ? <span className="ace-soon-extra">{children}</span> : null}
    </span>
  );
}
