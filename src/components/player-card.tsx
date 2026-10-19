"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { PlayerAvatar } from "@/components/floating-emblem";
import { RankNameTokens } from "@/components/rank-name-tokens";
import { rankProgress } from "@/lib/rank-progress";

export type PlayerCardLabels = {
  rp: string;
  matches: string;
  wl: string;
  noMatches: string;
  division: string;
  avatarAlt: string;
};

/**
 * Player identity card: real Steam avatar + persona, rank and division from stored RP, and match stats only
 * when matches are recorded. K/D is never shown because no kill data is stored.
 * Tilt + gold foil edge: mouse pointers only, disabled under prefers-reduced-motion.
 */
export function PlayerCard({
  name,
  avatarUrl,
  rp,
  wins,
  losses,
  labels,
  emblem,
  className = "",
}: {
  name: string;
  avatarUrl: string | null;
  rp: number;
  wins: number;
  losses: number;
  labels: PlayerCardLabels;
  emblem?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);
  const [motionOk, setMotionOk] = useState(false);
  const p = rankProgress(rp);
  const matches = Math.max(0, wins) + Math.max(0, losses);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!motionOk || event.pointerType !== "mouse" || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    setTilt({ x: (event.clientX - box.left) / box.width - 0.5, y: (event.clientY - box.top) / box.height - 0.5 });
  };

  const style = tilt
    ? ({
        transform: `perspective(900px) rotateX(${(tilt.y * -6).toFixed(2)}deg) rotateY(${(tilt.x * 7).toFixed(2)}deg)`,
        "--ace-foil-x": `${Math.round((tilt.x + 0.5) * 100)}%`,
        "--ace-foil-y": `${Math.round((tilt.y + 0.5) * 100)}%`,
      } as React.CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={`ace-pcard3d${tilt ? " is-hover" : ""} ${className}`.trim()}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={() => setTilt(null)}
    >
      <span className="ace-pcard3d-foil" aria-hidden="true" />
      <div className="ace-pcard3d-body">
        <div className="ace-pcard3d-id">
          <PlayerAvatar src={avatarUrl} name={name} alt={labels.avatarAlt} size={64} />
          <div className="min-w-0">
            <p className="ace-pcard3d-name">{name}</p>
            <RankNameTokens level={p.tier.level} division={p.division} divisionLabel={labels.division} />
          </div>
          {emblem ? <div className="ace-pcard3d-emblem">{emblem}</div> : null}
        </div>
        <dl className="ace-pcard3d-stats">
          <div>
            <dt>{labels.rp}</dt>
            <dd>{p.rp.toLocaleString("en-US")}</dd>
          </div>
          {matches > 0 ? (
            <>
              <div>
                <dt>{labels.matches}</dt>
                <dd>{matches}</dd>
              </div>
              <div>
                <dt>{labels.wl}</dt>
                <dd>
                  {wins}/{losses}
                </dd>
              </div>
            </>
          ) : (
            <div className="is-wide">
              <dt className="sr-only">{labels.matches}</dt>
              <dd className="ace-pcard3d-empty">{labels.noMatches}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
