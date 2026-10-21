import Link from "next/link";
import { embedSrc } from "@/lib/broadcast";
import type { LiveFeed, UpcomingTournament } from "@/server/live";
import "./live-block.css";

type LiveCopy = { title: string; lede: string; none: string; noneBody: string; schedule: string; noSchedule: string; onAir: string; watch: string };

export function LivePlayers({ feeds, host, copy, compact = false }: { feeds: LiveFeed[]; host: string; copy: LiveCopy; compact?: boolean }) {
  if (feeds.length === 0) {
    return (
      <div className="lv41-off" role="status">
        <span className="lv41-off-mark" aria-hidden="true" />
        <p className="lv41-off-title">{copy.none}</p>
        <p className="lv41-off-body">{copy.noneBody}</p>
      </div>
    );
  }
  const shown = compact ? feeds.slice(0, 1) : feeds;
  return (
    <div className={`lv41-grid${shown.length > 1 ? " is-multi" : ""}`}>
      {shown.map((f) => (
        <figure key={f.id} className="lv41-player">
          <div className="lv41-frame">
            <iframe src={embedSrc(f.embedUrl, host)} title={f.title} allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
          <figcaption><span className="lv41-badge">{copy.onAir}</span>{f.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function UpcomingList({ items, copy }: { items: UpcomingTournament[]; copy: LiveCopy }) {
  return (
    <section className="lv41-card" aria-labelledby="lv41-up">
      <h2 id="lv41-up">{copy.schedule}</h2>
      {items.length === 0 ? <p className="lv41-muted">{copy.noSchedule}</p> : (
        <ul className="lv41-up">
          {items.map((t) => (
            <li key={t.id}><Link href="/tournaments">{t.name}</Link></li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function HomeLiveBlock({ feeds, host, copy }: { feeds: LiveFeed[]; host: string; copy: LiveCopy }) {
  return (
    <section className="lv41-home" aria-labelledby="lv41-home-t">
      <div className="lv41-home-head">
        <h2 id="lv41-home-t">{feeds.length ? <span className="lv41-badge">{copy.onAir}</span> : null}{copy.title}</h2>
        <Link href="/live" className="lv41-link">{copy.watch} →</Link>
      </div>
      <LivePlayers feeds={feeds} host={host} copy={copy} compact />
    </section>
  );
}
