"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";
import "./platform-status.css";
import type { PlatformStatusPayload, Tone } from "@/server/platform-status";

/**
 * R63 live platform status. Every value comes from /api/status/platform, which derives it from real signals
 * (Steam OpenID reachability, anti-cheat setting + heartbeats, DatHost server state, tournament counts, Paddle env).
 * Nothing is hard-coded; until the first answer arrives each row shows "Checking…". Refreshes every 60 s.
 */
const KEYS = ["steam", "shield", "servers", "tournaments", "billing"] as const;
const dotFor = (tone: Tone | undefined, value: string) =>
  !tone ? "pending" : tone === "ok" ? "live" : tone === "warn" ? "partial" : /offline|unreachable|unavailable/i.test(value) ? "down" : "idle";

function ago(iso: string | undefined, now: number) {
  if (!iso) return "Updating…";
  const s = Math.max(0, Math.round((now - new Date(iso).getTime()) / 1000));
  return s < 60 ? `Updated ${s}s ago` : `Updated ${Math.floor(s / 60)}m ago`;
}

export function PlatformStatus() {
  const status = useUi().r38.status;
  const [data, setData] = useState<PlatformStatusPayload | null>(null);
  const [failed, setFailed] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => {
    let live = true;
    const load = () => fetch("/api/status/platform", { cache: "no-store" }).then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: PlatformStatusPayload) => { if (live) { setData(d); setFailed(false); } }).catch(() => { if (live) setFailed(true); });
    load();
    const t = setInterval(load, 60_000);
    return () => { live = false; clearInterval(t); };
  }, []);
  return (
    <section className="ps2" aria-labelledby="ps2-title">
      <header className="ps2-head">
        <h2 id="ps2-title" className="ps2-title">PLATFORM STATUS</h2>
        <span className="ps2-ago" aria-live="polite">{failed && !data ? "Status unavailable" : ago(data?.checkedAt, now)}</span>
      </header>
      <ul className="ps2-grid">
        {KEYS.map((key) => {
          const row = data?.rows.find((r) => r.key === key);
          const value = row ? row.value : failed ? "Status unavailable" : "Checking…";
          return (
            <li key={key} className={`ps2-card is-${dotFor(row?.tone, value)}`}>
              <span className="ps2-label"><i className="ps2-dot" aria-hidden="true" />{status[key]}</span>
              <span className="ps2-value">{value}</span>
              <span className="ps2-detail">{row?.detail || "\u00a0"}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
