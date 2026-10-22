"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";

type State = "available" | "inDevelopment" | "comingSoon" | "preparing" | "billingOff" | "billingOn";

/**
 * Honest platform status. Each state reflects the code today:
 * - Steam sign-in: live OpenID routes (/api/auth/steam).
 * - A.C.E Shield: in development, no client ships.
 * - Competitive servers: no game server integration exists.
 * - Tournaments: bracket/rulebook pages exist, no funded or running event.
 * - Billing: Paddle checkout; "billingOn" only when the server reports a complete Paddle config (/api/paddle/config).
 */
const ROWS: { key: "steam" | "shield" | "servers" | "tournaments" | "billing"; state: State }[] = [
  { key: "steam", state: "available" },
  { key: "shield", state: "inDevelopment" },
  { key: "servers", state: "comingSoon" },
  { key: "tournaments", state: "preparing" },
  { key: "billing", state: "billingOff" },
];

export function PlatformStatus() {
  const status = useUi().r38.status;
  const [paddle, setPaddle] = useState(false);
  useEffect(() => {
    let live = true;
    fetch("/api/paddle/config", { cache: "no-store" }).then((r) => r.json()).then((c: { enabled?: boolean }) => { if (live) setPaddle(c.enabled === true); }).catch(() => undefined);
    return () => { live = false; };
  }, []);
  return (
    <section className="ace-status-strip is-compact" aria-labelledby="ace-status-title">
      <h2 id="ace-status-title" className="ace-status-title">
        {status.title}
      </h2>
      <ul>
        {ROWS.map((r) => (r.key === "billing" && paddle ? { ...r, state: "billingOn" as State } : r)).map((row) => (
          <li key={row.key} className={`is-${row.state}`}>
            <span className="ace-status-light" aria-hidden="true" />
            <span className="ace-status-name">{status[row.key]}</span>
            <span className="ace-status-value">{status[row.state]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
