"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RankOrb } from "@/components/rank-orb";
import { PrestigeEmblem } from "@/components/prestige-emblem";
import { PRESTIGE_LEVELS } from "@/lib/prestige";
import { RANK_TIERS } from "@/lib/ranks";
import "./badge-3d-viewer.css";

/**
 * R74 3D badge viewer. Any element with data-v3d="rank" (data-lv) or data-v3d="prestige" (data-slug) opens it.
 * Every visitor can view every variant (Standard/Premium ranks, Plus/Premium prestige) regardless of plan.
 * The badge sways and follows drags, clamped to |Y| <= 40deg and |X| <= 18deg so it never turns edge-on.
 */
type Open = { kind: "rank"; lv: number; v: string; range: string } | { kind: "prestige"; slug: string; v: string; range: string };
const clamp = (v: number, a: number) => Math.max(-a, Math.min(a, v));

export function Badge3DViewer() {
  const [open, setOpen] = useState<Open | null>(null);
  const obj = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; oy: number; ox: number } | null>(null);
  const off = useRef({ oy: 0, ox: 0 });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest?.("[data-v3d]") as HTMLElement | null;
      if (!el || el.closest(".b3d")) return;
      e.preventDefault();
      const fig = (e.target as HTMLElement).closest("[data-v3d-var]") as HTMLElement | null;
      const range = el.dataset.range || "";
      if (el.dataset.v3d === "rank") setOpen({ kind: "rank", lv: Number(el.dataset.lv) || 1, v: el.dataset.v3dVar || "standard", range });
      else setOpen({ kind: "prestige", slug: el.dataset.slug || "ascendant", v: fig?.dataset.v3dVar || "plus", range });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("keydown", key);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now(); let raf = 0;
    const tick = (t: number) => {
      const s = (t - t0) / 1000, o = off.current;
      if (!drag.current) { o.oy *= 0.94; o.ox *= 0.94; }
      const ry = clamp((reduce ? 0 : 24 * Math.sin(s * 0.9)) + o.oy, 40), rx = clamp((reduce ? 0 : 6 * Math.sin(s * 0.7 + 1)) + o.ox, 18);
      if (obj.current) { obj.current.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`; obj.current.style.setProperty("--sh", ((ry + 40) / 80).toFixed(3)); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("keydown", key); };
  }, [open]);

  const down = useCallback((e: React.PointerEvent) => { drag.current = { x: e.clientX, y: e.clientY, ...off.current }; e.currentTarget.setPointerCapture(e.pointerId); }, []);
  const move = useCallback((e: React.PointerEvent) => { const d = drag.current; if (!d) return; off.current = { oy: clamp(d.oy + (e.clientX - d.x) * 0.5, 80), ox: clamp(d.ox - (e.clientY - d.y) * 0.35, 30) }; }, []);
  const up = useCallback(() => { drag.current = null; }, []);

  if (!open) return null;
  const vars = open.kind === "rank" ? [["standard", "Standard"], ["premium", "Premium"]] : [["plus", "Plus"], ["premium", "Premium"]];
  const tier = open.kind === "rank" ? RANK_TIERS[Math.min(10, Math.max(1, open.lv)) - 1] : null;
  const pl = open.kind === "prestige" ? PRESTIGE_LEVELS.find((p) => p.slug === open.slug) ?? PRESTIGE_LEVELS[0] : null;
  const name = tier ? tier.name : pl!.name;
  return (
    <div className="b3d" data-var={open.v} role="dialog" aria-modal="true" aria-label={`${name} in 3D`} onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
      <div className="b3d-box">
        <button type="button" className="b3d-x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
        <p className="b3d-kick">{tier ? "Rank tier" : "Beyond Legend · prestige"}</p>
        <h2 className="b3d-name">{name}</h2>
        <p className="b3d-range">{open.range}</p>
        <div className="b3d-stage" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
          <div className="b3d-glow" />
          <div className="b3d-obj" ref={obj}>
            <div className="b3d-art">
              {tier ? <RankOrb level={tier.level} art={open.v === "premium" ? "premium" : "standard"} size={240} label={tier.name} priority />
                : <PrestigeEmblem badge={{ level: pl!.level, set: open.v === "premium" ? "premium" : "plus", name: pl!.name, slug: pl!.slug }} size={240} label={pl!.name} priority />}
            </div>
            <i className="b3d-shine" />
          </div>
          <div className="b3d-floor" />
        </div>
        <div className="b3d-vars">{vars.map(([k, l]) => <button type="button" key={k} className={"b3d-var" + (open.v === k ? " on" : "")} onClick={() => setOpen({ ...open, v: k })}>{l}</button>)}</div>
        <p className="b3d-hint">Drag to rotate · every variant is viewable on any plan</p>
      </div>
    </div>
  );
}
