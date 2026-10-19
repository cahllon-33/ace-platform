"use client";

import { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/components/locale-provider";
import { RegistrationScanner } from "@/components/registration-scanner";
import { useText } from "@/components/text-provider";
import { TournamentTeamProfile } from "@/components/tournament-team-profile";
import { interpolate } from "@/lib/interpolate";
import {
  BRACKET_CAPACITY,
  WING_ROUNDS,
  buildDualWing,
  type BracketSlot,
  type WingMatch,
} from "@/lib/dual-wing-bracket";
import { bracketField } from "@/lib/staging-clans";
import type { LayoutTeam } from "@/lib/tournament-layout";
import "./tournament-dual-wing.css";

type Runway = { d: string; delay: string };

type BracketCopy = ReturnType<typeof useText>["teams"]["tournaments"]["bracket"];

function slotName(slot: BracketSlot, copy: BracketCopy) {
  if (slot.kind === "bye") return copy.bye;
  if (slot.kind === "open") return copy.openSlot;
  return slot.team.name;
}

function slotScore(slot: BracketSlot) {
  if (slot.kind !== "team") return "—";
  return String(slot.team.score);
}

function SlotNode({
  slot,
  onOpen,
  onEmpty,
}: {
  slot: BracketSlot;
  onOpen: (id: string) => void;
  onEmpty: () => void;
}) {
  const copy = useText().teams.tournaments.bracket;
  if (slot.kind === "bye") {
    return <div className="ace-wing-slot is-bye">{slotName(slot, copy)}</div>;
  }

  const open = slot.kind === "open";
  const label = open ? copy.openCompetitorSlot : interpolate(copy.openRoster, { name: slot.team.name });
  return (
    <button
      type="button"
      className="ace-wing-slot"
      aria-label={label}
      onClick={() => {
        if (open) onEmpty();
        else onOpen(slot.team.id);
      }}
    >
      <span className="ace-wing-logo" aria-hidden="true">
        {open ? "—" : slot.team.tag.slice(0, 2)}
      </span>
      <span className="ace-wing-name">{slotName(slot, copy)}</span>
      <span className="ace-wing-score">{slotScore(slot)}</span>
    </button>
  );
}

function MatchCard({
  wing,
  match,
  onOpen,
  onEmpty,
}: {
  wing: "left" | "right" | "center";
  match: WingMatch;
  onOpen: (id: string) => void;
  onEmpty: () => void;
}) {
  return (
    <div
      className="ace-wing-card"
      data-bracket-match=""
      data-wing={wing}
      data-round={match.round}
      data-index={String(match.index)}
    >
      {match.slots.map((slot, index) => (
        <SlotNode key={`${match.id}-${index}`} slot={slot} onOpen={onOpen} onEmpty={onEmpty} />
      ))}
    </div>
  );
}

function WingColumn({
  wing,
  label,
  matches,
  span,
  onOpen,
  onEmpty,
}: {
  wing: "left" | "right";
  label: string;
  matches: WingMatch[];
  span: number;
  onOpen: (id: string) => void;
  onEmpty: () => void;
}) {
  return (
    <div>
      <p className="ace-wing-label">{label}</p>
      <div className="ace-wing-col">
        {matches.map((match) => (
          <div key={match.id} className="ace-wing-match" style={{ gridRow: `span ${span}` }}>
            <MatchCard wing={wing} match={match} onOpen={onOpen} onEmpty={onEmpty} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CrownBadge() {
  return (
    <svg className="ace-champion-crown" viewBox="0 0 64 48" aria-hidden="true">
      <path d="M6 38h52v6.5H6z" fill="url(#ace-dual-crown-band)" stroke="#fff6c2" strokeWidth="1.1" />
      <path
        d="M8 36 16 12l16 14L48 8l8 28z"
        fill="url(#ace-dual-crown-metal)"
        stroke="#ffd76a"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="11" r="3.2" fill="#fff8de" />
      <circle cx="32" cy="24.5" r="2.6" fill="#ffd66b" />
      <circle cx="48" cy="7.5" r="3.4" fill="#fff8de" />
      <defs>
        <linearGradient id="ace-dual-crown-metal" x1="8" y1="8" x2="56" y2="40">
          <stop offset="0%" stopColor="#fff8de" />
          <stop offset="42%" stopColor="#ffd76a" />
          <stop offset="100%" stopColor="#8f6418" />
        </linearGradient>
        <linearGradient id="ace-dual-crown-band" x1="6" y1="38" x2="58" y2="45">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#fff6c2" />
          <stop offset="100%" stopColor="#8f6418" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ChampionStage({
  onOpen,
  onEmpty,
}: {
  onOpen: (id: string) => void;
  onEmpty: () => void;
}) {
  const copy = useText().teams.tournaments.bracket;
  const final: WingMatch = {
    id: "gf-0",
    round: "gf",
    index: 0,
    slots: [
      { kind: "open" },
      { kind: "open" },
    ],
  };
  return (
    <div className="ace-champion">
      <div className="ace-champion-halo" aria-hidden="true" />
      <CrownBadge />
      <p className="ace-champion-title">{copy.championStage}</p>
      <MatchCard wing="center" match={final} onOpen={onOpen} onEmpty={onEmpty} />
      <div className="ace-champion-plinth" aria-hidden="true" />
      <div className="ace-champion-plinth ace-champion-plinth-mid" aria-hidden="true" />
      <div className="ace-champion-plinth ace-champion-plinth-base" aria-hidden="true" />
    </div>
  );
}

function LaserRunways({ paths, width, height }: { paths: Runway[]; width: number; height: number }) {
  const uid = useId().replace(/:/g, "");
  if (width < 2 || height < 2 || paths.length === 0) return null;

  return (
    <svg
      className="ace-runway-layer"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="28%" stopColor="#ffd76a" />
          <stop offset="52%" stopColor="#fff6c2" />
          <stop offset="100%" stopColor="#ffd76a" />
        </linearGradient>
        <filter id={`ace-runway-glow-${uid}`} x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((path, index) => (
        <g key={`${path.d}-${index}`} filter={`url(#ace-runway-glow-${uid})`}>
          <path className="ace-runway-bloom" d={path.d} stroke="url(#gold-gradient)" />
          <path className="ace-runway-core" d={path.d} stroke="url(#gold-gradient)" />
          <path className="ace-runway-pulse" d={path.d} style={{ animationDelay: path.delay }} />
        </g>
      ))}
    </svg>
  );
}

const BRACKET_SCALE = 0.92;

function edgePoint(
  rect: DOMRect,
  canvas: DOMRect,
  layoutWidth: number,
  side: "left" | "right",
) {
  const originX = canvas.left + canvas.width / 2;
  const originY = canvas.top;
  const clientX = side === "left" ? rect.left : rect.right;
  const clientY = rect.top + rect.height / 2;
  return {
    x: (clientX - originX) / BRACKET_SCALE + layoutWidth / 2,
    y: (clientY - originY) / BRACKET_SCALE,
  };
}

export function TournamentBracketPreview({
  teams,
  unavailable = false,
}: {
  teams: LayoutTeam[];
  unavailable?: boolean;
}) {
  const { t } = useI18n();
  const copy = useText().teams.tournaments.bracket;
  const router = useRouter();
  const params = useSearchParams();
  const field = useMemo(() => bracketField(teams), [teams]);
  const bracket = useMemo(() => buildDualWing(field), [field]);
  const selectedIndex = field.findIndex((team) => team.id === params.get("team"));
  const selected = selectedIndex >= 0 ? field[selectedIndex]! : null;
  const canvasRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Runway[]>([]);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [notice, setNotice] = useState<string | null>(null);

  const openTeam = useCallback(
    (id: string) => {
      setNotice(null);
      const next = new URLSearchParams(params.toString());
      next.set("team", id);
      router.replace(`/tournaments?${next.toString()}`, { scroll: false });
    },
    [params, router],
  );

  const closeTeam = useCallback(() => {
    const next = new URLSearchParams(params.toString());
    next.delete("team");
    const query = next.toString();
    router.replace(query ? `/tournaments?${query}` : "/tournaments", { scroll: false });
  }, [params, router]);

  const measure = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasBox = canvas.getBoundingClientRect();
    const layoutWidth = Math.max(canvas.clientWidth, 1);
    const nodes = new Map<string, DOMRect>();
    canvas.querySelectorAll<HTMLElement>("[data-bracket-match]").forEach((node) => {
      const wing = node.dataset.wing;
      const round = node.dataset.round;
      const index = node.dataset.index;
      if (!wing || !round || index === undefined) return;
      nodes.set(`${wing}-${round}-${index}`, node.getBoundingClientRect());
    });

    const next: Runway[] = [];
    const wings = ["left", "right"] as const;
    for (const wing of wings) {
      for (let roundIndex = 0; roundIndex < WING_ROUNDS.length - 1; roundIndex += 1) {
        const round = WING_ROUNDS[roundIndex]!;
        const parent = WING_ROUNDS[roundIndex + 1]!;
        for (let index = 0; index < round.matches; index += 1) {
          const from = nodes.get(`${wing}-${round.id}-${index}`);
          const to = nodes.get(`${wing}-${parent.id}-${Math.floor(index / 2)}`);
          if (!from || !to) continue;
          const start = edgePoint(from, canvasBox, layoutWidth, wing === "left" ? "right" : "left");
          const end = edgePoint(to, canvasBox, layoutWidth, wing === "left" ? "left" : "right");
          const mid = (start.x + end.x) / 2;
          next.push({
            d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} H ${mid.toFixed(1)} V ${end.y.toFixed(1)} H ${end.x.toFixed(1)}`,
            delay: `${(index % 8) * 0.16}s`,
          });
        }
      }
      const sf = nodes.get(`${wing}-sf-0`);
      const gf = nodes.get("center-gf-0");
      if (sf && gf) {
        const start = edgePoint(sf, canvasBox, layoutWidth, wing === "left" ? "right" : "left");
        const end = edgePoint(gf, canvasBox, layoutWidth, wing === "left" ? "left" : "right");
        const mid = (start.x + end.x) / 2;
        next.push({
          d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} H ${mid.toFixed(1)} V ${end.y.toFixed(1)} H ${end.x.toFixed(1)}`,
          delay: wing === "left" ? "0.2s" : "0.45s",
        });
      }
    }

    const width = layoutWidth;
    const height = Math.max(canvas.clientHeight, 1);
    const signature = next.map((path) => path.d).join("|");
    setBox((current) => (current.w === width && current.h === height ? current : { w: width, h: height }));
    setPaths((current) => (current.map((path) => path.d).join("|") === signature ? current : next));
  }, []);

  useLayoutEffect(() => {
    measure();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(canvas);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const rightRounds = [...WING_ROUNDS].reverse();
  const storedCount = Math.min(teams.length, BRACKET_CAPACITY.competitors);
  const status = unavailable
    ? copy.statusUnavailable
    : storedCount === 0
      ? copy.statusEmpty
      : interpolate(copy.statusStored, { count: storedCount });

  return (
    <section className="ace-rise ace-glass-laser ace-bracket-stage relative w-full max-w-7xl overflow-x-hidden">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#FFD76A]">{copy.kicker}</p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{copy.title}</h2>
          <p className="mt-2 max-w-xl text-sm text-[#bdb8a8]">
            {status} {t("registeredTeams")}
          </p>
        </div>
        <RegistrationScanner />
      </div>
      {notice ? (
        <p className="ace-bracket-notice" role="status">
          {notice}
        </p>
      ) : null}

      <div className="ace-dual-fit" style={{ height: box.h > 0 ? `${box.h * BRACKET_SCALE}px` : undefined }}>
      <div
        ref={canvasRef}
        className="ace-dual"
        style={{ transform: `scale(${BRACKET_SCALE})`, transformOrigin: "top center" }}
      >
        <LaserRunways paths={paths} width={box.w} height={box.h} />
        <div className="ace-dual-grid">
          <div className="ace-wing" aria-label={copy.leftWing}>
            {WING_ROUNDS.map((round) => (
              <WingColumn
                key={`left-${round.id}`}
                wing="left"
                label={copy.rounds[round.id]}
                matches={bracket.left[round.id]}
                span={round.span}
                onOpen={openTeam}
                onEmpty={() => setNotice(copy.emptySlotNotice)}
              />
            ))}
          </div>
          <ChampionStage
            onOpen={openTeam}
            onEmpty={() => setNotice(copy.grandFinalNotice)}
          />
          <div className="ace-wing" aria-label={copy.rightWing}>
            {rightRounds.map((round) => (
              <WingColumn
                key={`right-${round.id}`}
                wing="right"
                label={copy.rounds[round.id]}
                matches={bracket.right[round.id]}
                span={round.span}
                onOpen={openTeam}
                onEmpty={() => setNotice(copy.emptySlotNotice)}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      {selected ? (
        <TournamentTeamProfile
          team={selected}
          index={selectedIndex}
          total={field.length}
          onClose={closeTeam}
          onPrev={() => {
            const previous = field[selectedIndex - 1];
            if (previous) openTeam(previous.id);
          }}
          onNext={() => {
            const next = field[selectedIndex + 1];
            if (next) openTeam(next.id);
          }}
        />
      ) : null}
    </section>
  );
}
