"use client";

import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { PremiumShowcase } from "@/components/premium-showcase";
import { interpolate } from "@/lib/interpolate";
import { FloatingEmblem, PlayerAvatar } from "@/components/floating-emblem";
import { RANK_TIERS, rankArtAsset, type RankArt } from "@/lib/ranks";
import { mapLabel } from "@/lib/queue";

/** One real seat in a queue lobby (stored name, avatar, RP and rank art). R48: no sample rows remain. */
export type ArenaPlayer = { userId: string; name: string; avatarUrl: string | null; rp: number; level: number; art: RankArt; captain: boolean; me: boolean; accepted?: boolean };

function RosterCard({ row }: { row: ArenaPlayer }) {
  const text = useText();
  const ui = useUi();
  const tier = RANK_TIERS[Math.min(10, Math.max(1, row.level)) - 1];
  const premium = row.art === "premium";
  return (
    <li className={`ace-play-slot ace-room-slot${premium ? " is-premium" : ""}${row.me ? " is-me" : ""}`}>
      <PlayerAvatar src={row.avatarUrl} name={row.name} alt={interpolate(text.play.room.avatarAlt, { name: row.name })} size={44} />
      <div className="ace-play-slot-meta">
        <p className="ace-play-slot-name">
          <bdi>{row.name}</bdi>
          {row.captain ? <span className="ace-play-cap">{ui.r48.captain}</span> : null}
          {premium ? <span className="ace-premium-tag">{text.play.premium.tag}</span> : null}
        </p>
        <p className="ace-play-slot-rank">{tier.crystalName}</p>
        <p className="ace-room-rp">{row.rp.toLocaleString("en-US")} RP</p>
      </div>
      {premium ? (
        <PremiumShowcase level={tier.level} rating={null} labels={text.ranks.showcase} size="sm" caption={false} />
      ) : (
        <FloatingEmblem src={rankArtAsset(tier.level, row.art).stillSrc} alt={tier.name} size={52} />
      )}
    </li>
  );
}

function OperatorArt({ side, alt }: { side: "guardian" | "rebel"; alt: string }) {
  return (
    <figure className="ace-room-operator" data-side={side}>
      <span className="ace-room-operator-glow" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/operators/operator-${side}-640.webp`}
        srcSet={`/operators/operator-${side}-640.webp 640w, /operators/operator-${side}-1280.webp 1280w, /operators/operator-${side}-2560.webp 2560w`}
        sizes="(min-width: 1280px) 30vw, 100vw"
        alt={alt}
        width={1280}
        height={720}
        loading="lazy"
      />
    </figure>
  );
}

const avg = (xs: ArenaPlayer[]) => (xs.length ? Math.round(xs.reduce((a, p) => a + p.rp, 0) / xs.length) : 0);

/** Match lobby with the operator art, fed only by real lobby seats. */
export function PlayMatchArena({ team1, team2, map, title, children }: { team1: ArenaPlayer[]; team2: ArenaPlayer[]; map: string | null; title: string; children?: React.ReactNode }) {
  const text = useText();
  const ui = useUi();
  const r = ui.r48;
  return (
    <section className="ace-play-arena r48-arena" aria-label={title}>
      <header className="ace-play-banner">
        <div className="ace-play-title-row">
          <h2 className="r48-arena-title">{title}</h2>
        </div>
        {map ? (
          <p className="r48-arena-map">
            <span className="ace-play-map-plate" data-map={mapLabel(map)} aria-hidden="true" /> {r.map}: <strong>{mapLabel(map)}</strong>
          </p>
        ) : null}
      </header>
      <div className="ace-play-horizon">
        <OperatorArt side="guardian" alt={text.play.room.operatorA} />
        <article className="ace-play-team" data-side="a">
          <h3>{r.teamA}</h3>
          <p className="ace-play-team-note">{interpolate(r.avgRp, { rp: avg(team1).toLocaleString("en-US") })}</p>
          <ul>{team1.map((p) => <RosterCard key={p.userId} row={p} />)}</ul>
        </article>
        <div className="ace-play-vs" aria-hidden="true"><span>VS</span></div>
        <article className="ace-play-team" data-side="b">
          <h3>{r.teamB}</h3>
          <p className="ace-play-team-note">{interpolate(r.avgRp, { rp: avg(team2).toLocaleString("en-US") })}</p>
          <ul>{team2.map((p) => <RosterCard key={p.userId} row={p} />)}</ul>
        </article>
        <OperatorArt side="rebel" alt={text.play.room.operatorB} />
      </div>
      {children}
      <p className="ace-room-art-note">{r.lobbyNote}</p>
    </section>
  );
}
