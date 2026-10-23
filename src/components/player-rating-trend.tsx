"use client";

import { useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";
import type { RatingPoint } from "@/lib/player-dossier";

const WIDTH = 720;
const HEIGHT = 220;
const PAD = { top: 28, right: 24, bottom: 36, left: 48 };

export function PlayerRatingTrend({ points }: { points: RatingPoint[] }) {
  const text = useText();
  const copy = text.account.ratingTrend;
  const [active, setActive] = useState<number | null>(null);
  const ratings = points.map((point) => point.rating);
  const min = Math.min(...ratings) - 20;
  const max = Math.max(...ratings) + 20;
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;

  const coords = points.map((point, index) => {
    const x = PAD.left + (index / Math.max(1, points.length - 1)) * innerW;
    const y = PAD.top + (1 - (point.rating - min) / (max - min)) * innerH;
    return { ...point, x, y };
  });

  const path = coords
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  return (
    <div className="ace-dossier-chart-wrap">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width={WIDTH}
        height={HEIGHT}
        className="ace-dossier-chart h-auto w-full max-h-[220px] max-w-full"
        role="img"
        aria-label={copy.chartAria}
      >
        <defs>
          <linearGradient id="ace-dossier-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#C9A24A" />
          </linearGradient>
          <filter id="ace-dossier-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[0, 1, 2, 3].map((line) => {
          const y = PAD.top + (line / 3) * innerH;
          return (
            <line
              key={line}
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={y}
              y2={y}
              stroke="rgba(201,162,74,0.18)"
              strokeWidth="1"
            />
          );
        })}
        <path
          d={path}
          fill="none"
          stroke="url(#ace-dossier-line)"
          strokeWidth="3"
          filter="url(#ace-dossier-glow)"
        />
        {coords.map((point, index) => (
          <g key={point.match}>
            <circle
              cx={point.x}
              cy={point.y}
              r={active === index ? 7 : 5}
              fill="#0B0B0C"
              stroke="#C9A24A"
              strokeWidth="2"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              aria-label={interpolate(copy.pointAria, { match: point.match, rating: point.rating })}
            />
            <text
              x={point.x}
              y={HEIGHT - 12}
              textAnchor="middle"
              fill="#c8c4b8"
              fontSize="10"
            >
              {interpolate(copy.axisLabel, { match: point.match })}
            </text>
          </g>
        ))}
      </svg>
      <p className="ace-dossier-chart-readout">
        {active === null
          ? copy.idle
          : interpolate(copy.readout, { match: coords[active].match, rating: coords[active].rating })}
      </p>
    </div>
  );
}
