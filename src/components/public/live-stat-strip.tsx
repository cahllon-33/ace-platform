"use client";

import { useEffect, useRef, useState } from "react";
import type { PublicStats } from "@/server/public-stats";
import "./live-stat-strip.css";

type Labels = { kicker: string; online: string; registered: string; earlyTitle: string; earlyBody: string; unavailable: string; note: string };

const REFRESH_MS = 30_000;

function useCountUp(target: number | null) {
  const [value, setValue] = useState(0);
  const from = useRef(0);
  useEffect(() => {
    if (target === null) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = from.current;
    if (reduce || start === target) {
      from.current = target;
      setValue(target);
      return;
    }
    const t0 = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return value;
}

export function LiveStatStrip({ initial, labels }: { initial: PublicStats; labels: Labels }) {
  const [stats, setStats] = useState(initial);
  useEffect(() => {
    let alive = true;
    const load = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/api/stats/public", { cache: "no-store" });
        if (res.ok && alive) setStats((await res.json()) as PublicStats);
      } catch {
        /* keep last real value */
      }
    };
    const id = window.setInterval(load, REFRESH_MS);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);
  const online = useCountUp(stats.online);
  const registered = useCountUp(stats.registered);

  return (
    <section className="ace-livestats" aria-label={labels.kicker} aria-live="polite">
      <span className={`ace-livestats-badge${stats.unavailable ? " is-off" : ""}`}>
        <i aria-hidden="true" />
        {labels.kicker}
      </span>
      {stats.unavailable ? (
        <p className="ace-livestats-msg">{labels.unavailable}</p>
      ) : stats.earlyAccess ? (
        <div className="ace-livestats-early">
          <strong>{labels.earlyTitle}</strong>
          <p>{labels.earlyBody}</p>
        </div>
      ) : (
        <dl className="ace-livestats-nums">
          <div>
            <dt>{labels.online}</dt>
            <dd>{online.toLocaleString()}</dd>
          </div>
          <div>
            <dt>{labels.registered}</dt>
            <dd>{registered.toLocaleString()}</dd>
          </div>
        </dl>
      )}
      <small className="ace-livestats-note">{labels.note}</small>
    </section>
  );
}
