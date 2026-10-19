"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";
import { PLACEHOLDER_GEAR, type LayoutGear, type LayoutPlayer, type LayoutTeam } from "@/lib/tournament-layout";

const GEAR_KEYS = ["processor", "gpu", "mouse", "dpi", "keyboard", "monitor", "headset"] as const satisfies readonly (keyof LayoutGear)[];

function PlayerSheet({ player }: { player: LayoutPlayer }) {
  const text = useText().teams;
  const copy = text.tournaments.player;
  return (
    <>
      <span className="ace-roster-avatar" aria-hidden="true">
        {player.name.slice(0, 1)}
      </span>
      <span className="ace-roster-name">{player.name}</span>
      <span className="ace-roster-level">
        {interpolate(copy.level, { level: player.level, rating: player.rating })}
      </span>
      <span className="ace-roster-kd">{interpolate(copy.record, { wins: player.wins, losses: player.losses })}</span>
      <span className="ace-roster-kd">{copy.kdNotStored}</span>
      <svg className="ace-roster-trend" viewBox="0 0 80 28" aria-hidden="true">
        <rect x="8" y={28 - Math.min(24, player.wins)} width="18" height={Math.min(24, player.wins)} fill="#FFD76A" />
        <rect x="36" y={28 - Math.min(24, player.losses)} width="18" height={Math.min(24, player.losses)} fill="#8f6418" />
      </svg>
      <dl className="ace-roster-gear">
        {GEAR_KEYS.map((key) => (
          <div key={key}>
            <dt>{copy.gear[key]}</dt>
            <dd>{player.gear[key] === PLACEHOLDER_GEAR[key] ? text.gearPlaceholder[key] : player.gear[key]}</dd>
          </div>
        ))}
      </dl>
      <span className="ace-roster-badge">
        {copy.badge}
        <span className="ace-roster-badge-note">{copy.badgeNote}</span>
      </span>
    </>
  );
}

function PlayerCard({ player }: { player: LayoutPlayer }) {
  const copy = useText().teams.tournaments.player;
  return (
    <article className="ace-roster-card">
      <Link
        href={`/profile/${player.username}`}
        className="ace-roster-hit"
        aria-label={interpolate(copy.openProfileAria, { name: player.name })}
      >
        <PlayerSheet player={player} />
        <span className="ace-roster-open">{copy.openProfile}</span>
      </Link>
    </article>
  );
}

export function TournamentTeamProfile({
  team,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  team: LayoutTeam;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const titleId = useId();
  const copy = useText().teams.tournaments.profile;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="ace-team-modal" role="presentation">
      <button type="button" className="ace-team-modal-backdrop" aria-label={copy.closeBackdrop} onClick={onClose} />
      <section
        className="ace-team-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="ace-team-hero">
          <div className="ace-team-shield" aria-hidden="true">
            <span>{team.tag}</span>
          </div>
          <div>
            <p className="ace-team-kicker">{copy.kicker}</p>
            <h2 id={titleId} className="ace-team-title">
              <span className="ace-team-tag">[{team.tag}]</span> {team.name}
            </h2>
            <dl className="ace-team-grid">
              <div>
                <dt>{copy.matchesPlayed}</dt>
                <dd>{team.matchesPlayed}</dd>
              </div>
              <div>
                <dt>{copy.winRate}</dt>
                <dd>{team.winRate}</dd>
              </div>
              <div>
                <dt>{copy.streak}</dt>
                <dd>{team.streak}</dd>
              </div>
            </dl>
          </div>
        </header>

        <h3 className="ace-roster-heading">{copy.rosterHeading}</h3>
        <div className="ace-roster-row">
          {Array.from({ length: 5 }, (_, index) => {
            const player = team.players[index];
            if (!player) {
              return (
                <article key={`open-${index}`} className="ace-roster-card">
                  <div className="ace-roster-hit">
                    <span className="ace-roster-avatar" aria-hidden="true">
                      +
                    </span>
                    <span className="ace-roster-name">{interpolate(copy.openSeat, { seat: index + 1 })}</span>
                    <span className="ace-roster-level">{copy.noPlayer}</span>
                  </div>
                </article>
              );
            }
            return <PlayerCard key={player.id} player={player} />;
          })}
        </div>
        <p className="ace-team-disclosure">{copy.disclosure}</p>
        <div className="ace-team-nav">
          <button type="button" className="ace-team-close" onClick={onPrev} disabled={index <= 0}>
            {copy.previous}
          </button>
          <span className="ace-team-count">
            {interpolate(copy.count, { index: index + 1, total })}
          </span>
          <button type="button" className="ace-team-close" onClick={onNext} disabled={index >= total - 1}>
            {copy.next}
          </button>
          <button type="button" className="ace-team-close" onClick={onClose}>
            {copy.close}
          </button>
        </div>
      </section>
    </div>
  );
}
