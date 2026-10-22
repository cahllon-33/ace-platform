"use client";

import { useEffect, useRef, useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";
import { rankArtAsset, type RankArt, type RankTier } from "@/lib/ranks";

export const FALLBACK_MS = 2500;

export function RankTurntable({ tier, art = "standard" }: { tier: RankTier; art?: RankArt }) {
  const copy = useText().ranks.turntable;
  const asset = rankArtAsset(tier.level, art);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const [yaw, setYaw] = useState(18);
  // "3d" while the turntable asset is healthy; "static" after a failed load or 2.5s without one.
  const [mode, setMode] = useState<"loading" | "3d" | "static">("loading");

  useEffect(() => {
    const src = asset.gltfSrc ?? asset.heroSrc;
    let settled = false;
    const done = (next: "3d" | "static") => {
      if (settled) return;
      settled = true;
      setMode(next);
    };
    const timer = window.setTimeout(() => done("static"), FALLBACK_MS);
    if (asset.gltfSrc) {
      // GLB slot: only a HEAD-style reachability probe here; a real loader would plug in at this point.
      fetch(src, { method: "HEAD" }).then((r) => done(r.ok ? "3d" : "static"), () => done("static"));
    } else {
      const img = new Image();
      img.onload = () => done("3d");
      img.onerror = () => done("static");
      img.src = src;
    }
    return () => {
      settled = true;
      window.clearTimeout(timer);
    };
  }, [asset.gltfSrc, asset.heroSrc]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (dragging.current) {
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      setYaw((value) => value + 0.45);
    }, 32);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="ace-orbit-wrap" data-mode={mode}>
      <div
        className="ace-orbit-stage"
        role="application"
        aria-label={interpolate(copy.stageLabel, { name: tier.name })}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            setYaw((value) => value - 14);
          }
          if (event.key === "ArrowRight") {
            setYaw((value) => value + 14);
          }
        }}
        onPointerDown={(event) => {
          dragging.current = true;
          last.current = { x: event.clientX, y: event.clientY };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragging.current) {
            return;
          }
          const dx = event.clientX - last.current.x;
          last.current = { x: event.clientX, y: event.clientY };
          setYaw((value) => value + dx * 0.5);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        {mode === "static" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="ace-orbit-static" src={asset.staticSrc} alt="" width={512} height={512} decoding="async" />
        ) : null}
        <div
          hidden={mode === "static"}
          className="ace-orbit-rig"
          data-gltf-slot={asset.gltfSrc ?? ""}
          style={{ transform: `rotateY(${yaw}deg)` }}
        >
          <div className="ace-orbit-crown" aria-hidden="true" />
          <div className="ace-orbit-ring ace-orbit-ring-a" aria-hidden="true" />
          <div className="ace-orbit-ring ace-orbit-ring-b" aria-hidden="true" />
          <div
            className={`ace-orbit-core${art === "premium" ? " is-illustrated" : ""}`}
            style={{ backgroundImage: `url(${asset.heroSrc})` }}
          />
        </div>
        <div className="ace-orbit-pedestal" aria-hidden="true" />
      </div>
      <div className="ace-orbit-meta">
        <p className="ace-orbit-drag">
          <span aria-hidden="true" className="ace-orbit-mouse" />
          {copy.dragToRotate}
        </p>
        <p className="ace-orbit-id">
          A.C.E
          <br />
          {copy.rankSystem}
        </p>
      </div>
    </div>
  );
}
