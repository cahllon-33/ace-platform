import type { ReactNode } from "react";

export function Panel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag
      className={`ace-card-hover ace-glass-laser ${className}`}
    >
      {children}
    </Tag>
  );
}
