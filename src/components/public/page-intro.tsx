import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="pg41-hero">
      <Badge>{kicker}</Badge>
      <h1 className="pg41-h1 mt-4">
        {title}
      </h1>
      <div className="mt-4 text-lg leading-8 text-ace-muted">{children}</div>
    </header>
  );
}
