"use client";

import { soundEnabled } from "@/lib/ui-sound";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./play-arena-hero.css";

/** Real data only: the queue count, lobby map and anti-cheat state come from the live queue engine / platform status. */
export type ArenaData = {
  queued: number;
  needed: number;
  map: string | null;
  found: boolean;
  shield: { tone: "ok" | "warn" | "off"; value: string } | null;
  region: string | null;
};

const POOL: [string, string][] = [["de_dust2", "Dust II"], ["de_mirage", "Mirage"], ["de_inferno", "Inferno"], ["de_nuke", "Nuke"], ["de_ancient", "Ancient"], ["de_anubis", "Anubis"], ["de_train", "Train"]];
const OPS = [7, 12.5, 19.5, 27, 33, 68.5, 73.5, 80.5, 87, 93];

/* Original synthesized chord (WebAudio). The site never autoplays: sound starts muted on every visit and only plays after a click. */
function chime(kind: "entry" | "found") {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const c = new AC(), t0 = c.currentTime + 0.02, out = c.createGain();
    out.gain.value = kind === "found" ? 0.07 : 0.045; out.connect(c.destination);
    const notes = kind === "found" ? [[523.3, 0, .5], [659.3, .12, .5], [784, .24, .9], [1046.5, .36, 1.1]] : [[220, 0, 1.6], [329.6, .08, 1.5], [440, .18, 1.4], [659.3, .3, 1.2]];
    for (const [f, at, d] of notes) {
      const o = c.createOscillator(), g = c.createGain(); o.frequency.value = f;
      g.gain.setValueAtTime(0, t0 + at); g.gain.linearRampToValueAtTime(1, t0 + at + .04); g.gain.exponentialRampToValueAtTime(.001, t0 + at + d);
      o.connect(g).connect(out); o.start(t0 + at); o.stop(t0 + at + d + .05);
    }
    setTimeout(() => c.close().catch(() => undefined), 2500);
  } catch { /* optional */ }
}

const IconCT = () => (<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3 34 8v11c0 9-6 15-14 18C12 34 6 28 6 19V8z" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="m13 23 2-8 5 4 5-4 2 8z" fill="currentColor" /></svg>);
const IconT = () => (<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="m20 9 3.2 7 7.6.7-5.8 5 1.8 7.5L20 25.3 13.2 29.2 15 21.7l-5.8-5 7.6-.7z" fill="currentColor" /></svg>);

/** On /play the PLAY button drives the real queue below it (same join action, restrictions and ready check as the queue panel). */
function joinBelow() {
  const btn = document.querySelector<HTMLButtonElement>("[data-ace-join]");
  const panel = document.getElementById("ace-queue");
  if (btn && !btn.disabled) btn.click();
  (panel ?? btn)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PlayArenaHero({ signedIn, initial, direct = false }: { signedIn: boolean; initial: ArenaData; direct?: boolean }) {
  const [d, setD] = useState(initial);
  const root = useRef<HTMLElement>(null);
  const wasFound = useRef(initial.found);

  // Live queue refresh (same engine as the app); pauses while the tab is hidden.
  useEffect(() => {
    let stop = false;
    const pull = async () => {
      if (document.hidden) return;
      try {
        const r = await fetch("/api/desktop/queue", { headers: { "x-ace-desktop": "1" }, cache: "no-store" });
        const j = await r.json();
        const v = j && j.view; if (!v || stop) return;
        const l = v.lobby && !["DONE", "CANCELLED", "FAILED"].includes(v.lobby.state) ? v.lobby : null;
        setD((p) => ({ ...p, queued: v.queued, needed: v.needed, map: l?.map ?? null, found: l?.state === "READY", region: v.region ?? p.region }));
      } catch { /* keep last real value */ }
    };
    const t = setInterval(pull, 10000);
    return () => { stop = true; clearInterval(t); };
  }, []);

  useEffect(() => {
    if (d.found && !wasFound.current && soundEnabled()) chime("found");
    wasFound.current = d.found;
  }, [d.found]);

  // Mouse parallax (skipped for reduced motion / touch).
  useEffect(() => {
    const el = root.current; if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const mv = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        el.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
    };
    el.addEventListener("mousemove", mv);
    return () => { el.removeEventListener("mousemove", mv); cancelAnimationFrame(raf); };
  }, []);

  const lit = d.found ? 10 : Math.min(10, d.queued);
  const shield = d.shield;
  const region = d.region && !/^eu$/i.test(d.region) ? d.region : "Milan, Italy";

  return (
    <section ref={root} className={"pah" + (d.found ? " is-found" : "")} data-map={d.map || ""} aria-label="Ranked 5v5 matchmaking">
      <div className="pah-scene" aria-hidden="true">
        <div className="pah-bg base" /><div className="pah-bg l" /><div className="pah-bg r" />
        <div className="pah-ops">{OPS.map((x, i) => <i key={i} className={"pah-op " + (i < 5 ? "ct" : "t") + (i < lit ? " on" : "")} style={{ left: x + "%" }} />)}</div>
      </div>
      <div className="pah-tint" aria-hidden="true" />
      <div className="pah-fx" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} style={{ ["--i" as string]: i }} />)}</div>
      <div className="pah-burst" aria-hidden="true" />

      <div className="pah-main">
        <Image src="/images/ace-badge.png" alt="A.C.E" width={300} height={300} priority className="pah-badge" />
        <p className="pah-tag">Autonomous Anti-Cheat | Competitive Calibration | Elite Players</p>
        <h2 className="pah-vs">5 <span>VS</span> 5</h2>
        <p className="pah-mode"><i />RANKED MATCHMAKING<i /></p>
        <div className="pah-teams">
          <div className="pah-team ct"><IconCT /><div><b>COUNTER-TERRORISTS</b><small>5 PLAYERS</small></div></div>
          <div className="pah-team t"><div><b>TERRORISTS</b><small>5 PLAYERS</small></div><IconT /></div>
        </div>
        <div className="pah-cta">
          {!signedIn ? <a href="/api/auth/steam" className="pah-play">PLAY</a> : direct ? <button type="button" className="pah-play" onClick={joinBelow}>PLAY</button> : <Link href="/play" className="pah-play">PLAY</Link>}
          <div className="pah-seats" aria-hidden="true">{Array.from({ length: d.needed || 10 }, (_, i) => <i key={i} className={i < lit ? "on" : ""} />)}</div>
          <p className="pah-count">{d.queued} / {d.needed || 10} players in queue</p>
          <div className="pah-links">
            <Link href="/download/latest" className="pah-btn">Download the app</Link>
            {!signedIn && <a href="/api/auth/steam" className="pah-btn steam">Sign in with Steam</a>}
          </div>
        </div>
      </div>

      <div className="pah-strip">
        <div className="pah-cell"><b>ANTI-CHEAT</b><small className={shield ? "t-" + shield.tone : ""}>{shield ? shield.value : "Status unavailable"}</small></div>
        <div className="pah-cell"><b>CALIBRATION</b><small>Teams balanced by RP</small></div>
        <div className="pah-cell"><b>ELITE PLAYERS</b><small>Ranked by Rating Points</small></div>
        <div className="pah-cell"><b>MAP POOL</b><small>{POOL.map((m) => m[1]).join(" · ")}</small></div>
        <div className="pah-cell"><b>EU SERVERS</b><small>{region}</small></div>
      </div>
    </section>
  );
}
