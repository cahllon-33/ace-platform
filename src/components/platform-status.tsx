"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";
import type { PlatformStatusPayload, Tone } from "@/server/platform-status";

/**
 * R63 live platform status. Every value comes from /api/status/platform, which derives it from real signals
 * (Steam OpenID reachability, anti-cheat setting + heartbeats, DatHost server state, tournament counts, Paddle env).
 * Nothing is hard-coded; until the first answer arrives each row shows "Checking…". Refreshes every 60 s.
 */
const KEYS = ["steam", "shield", "servers", "tournaments", "billing"] as const;
const TONE: Record<Tone | "pending", string> = { ok: "available", warn: "inDevelopment", off: "comingSoon", pending: "comingSoon" };

export function PlatformStatus() {
  const status = useUi().r38.status;
  const [data, setData] = useState<PlatformStatusPayload | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let live = true;
    const load = () => fetch("/api/status/platform", { cache: "no-store" }).then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: PlatformStatusPayload) => { if (live) { setData(d); setFailed(false); } }).catch(() => { if (live) setFailed(true); });
    load();
    const t = setInterval(load, 60_000);
    return () => { live = false; clearInterval(t); };
  }, []);
  return (
    <section className="ace-status-strip is-compact" aria-labelledby="ace-status-title" aria-live="polite">
      <h2 id="ace-status-title" className="ace-status-title">{status.title}</h2>
      <ul>
        {KEYS.map((key) => {
          const row = data?.rows.find((r) => r.key === key);
          const value = row ? row.value : failed ? "Status unavailable" : "Checking…";
          return (
            <li key={key} className={`is-${TONE[row?.tone ?? "pending"]}`} title={row?.detail || undefined}>
              <span className="ace-status-light" aria-hidden="true" />
              <span className="ace-status-name">{status[key]}</span>
              <span className="ace-status-value">{value}</span>
              {row?.detail ? <span className="ace-status-detail">{row.detail}</span> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
