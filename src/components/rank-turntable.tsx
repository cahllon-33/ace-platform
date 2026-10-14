"use client";

import { useEffect, useRef, useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";
import { rankEmblemAsset, type RankTier } from "@/lib/ranks";

export function RankTurntable({ tier }: { tier: RankTier }) {
  const copy = useText().ranks.turntable;
  const asset = rankEmblemAsset(tier.level);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const [yaw, setYaw] = useState(18);

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
    <div className="ace-orbit-wrap">
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
        <div
          className="ace-orbit-rig"
          data-gltf-slot={asset.gltfSrc ?? ""}
          style={{ transform: `rotateY(${yaw}deg)` }}
        >
          <div className="ace-orbit-crown" aria-hidden="true" />
          <div className="ace-orbit-ring ace-orbit-ring-a" aria-hidden="true" />
          <div className="ace-orbit-ring ace-orbit-ring-b" aria-hidden="true" />
          <div
            className="ace-orbit-core"
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
          A.C.E.
          <br />
          {copy.rankSystem}
        </p>
      </div>
    </div>
  );
}
