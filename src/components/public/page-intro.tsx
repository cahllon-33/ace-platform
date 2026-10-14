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
    <header className="max-w-3xl">
      <Badge>{kicker}</Badge>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F5F3EC] sm:text-5xl">
        {title}
      </h1>
      <div className="mt-4 text-lg leading-8 text-ace-muted">{children}</div>
    </header>
  );
}
