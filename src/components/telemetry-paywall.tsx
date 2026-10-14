"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useText } from "@/components/text-provider";

export function TelemetryPaywall({
  unlocked,
  children,
}: {
  unlocked: boolean;
  children: ReactNode;
}) {
  const text = useText().pricing.telemetry;

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="ace-telemetry-lock">
      <div className="ace-telemetry-lock-canvas" aria-hidden="true">
        {children}
      </div>
      <div className="ace-telemetry-lock-glass" role="status">
        <p className="ace-telemetry-lock-kicker">{text.kicker}</p>
        <p className="ace-telemetry-lock-copy">{text.copy}</p>
        <Link href="/pricing" className="ace-telemetry-lock-cta">
          {text.cta}
        </Link>
      </div>
    </div>
  );
}
