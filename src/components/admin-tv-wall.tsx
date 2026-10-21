"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { AdminMessageKey } from "@/lib/admin-i18n";
import type { TvFeed } from "@/lib/broadcast";
import { addBroadcastFeed, removeBroadcastFeed, setBroadcastLive } from "@/server/admin-broadcast";

/** With feeds, the wall fills up to 8 slots (unfilled ones say so). With none, only the empty state shows. */
const WALL_SLOTS = 8;

type T = (key: AdminMessageKey, values?: Record<string, string | number>) => string;

function TvTile({ feed, focused, onFocus, onRemove, onLive, t }: { feed: TvFeed; focused: boolean; onFocus: () => void; onRemove: () => void; onLive: () => void; t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <figure className={`ace-tv-tile${focused ? " is-focused" : ""}`} ref={ref}>
      <div className="ace-tv-frame">
        <iframe
          src={feed.embedUrl}
          title={feed.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        />
      </div>
      <figcaption>
        <span className="ace-tv-title">
          {feed.title}
          <small>{feed.provider}{feed.source === "env" ? ` · ${t("tvEnvTag")}` : ""}</small>
        </span>
        <span className="ace-tv-actions">
          <button type="button" className="ace-admin-ghost" onClick={onFocus}>
            {focused ? t("tvUnfocus") : t("tvFocus")}
          </button>
          <button type="button" className="ace-admin-ghost" onClick={() => void ref.current?.requestFullscreen?.()}>
            {t("tvFullscreen")}
          </button>
          {feed.source === "admin" ? (
            <>
            <button type="button" className="ace-admin-ghost" aria-pressed={Boolean(feed.isLive)} onClick={onLive}>
              {feed.isLive ? t("tvLiveOff") : t("tvLiveOn")}
            </button>
            <button type="button" className="ace-admin-ghost" onClick={onRemove}>
              {t("tvRemove")}
            </button>
            </>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}

export function AdminTvWall({ feeds, dbAvailable, t }: { feeds: TvFeed[]; dbAvailable: boolean; t: T }) {
  const router = useRouter();
  const [focus, setFocus] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState<string | null>(null);
  const visible = focus ? feeds.filter((feed) => feed.id === focus) : feeds;

  async function onAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await addBroadcastFeed(title, url);
    if (result.ok) {
      setTitle("");
      setUrl("");
      setNote(t("tvSaved"));
      router.refresh();
      return;
    }
    setNote(t(result.reason === "full" ? "tvFull" : result.reason === "db" ? "tvDbDown" : "tvInvalid"));
  }

  return (
    <section className="ace-admin-section ace-tv" aria-labelledby="ace-tv-title">
      <div className="ace-tv-head">
        <div>
          <p className="ace-admin-kicker">{t("tvKicker")}</p>
          <h2 id="ace-tv-title" className="ace-admin-section-title">{t("tvTitle")}</h2>
          <p className="ace-tv-lede">{t("tvLede")}</p>
        </div>
        <span className="ace-tv-count">{t("tvCount", { count: feeds.length })}</span>
      </div>
      {feeds.length === 0 ? (
        <div className="ace-tv-empty" role="status">
          <span className="ace-tv-empty-mark" aria-hidden="true" />
          <p><strong>{t("tvEmptyTitle")}</strong></p>
          <p>{t("tvEmpty")}</p>
        </div>
      ) : null}
      <div className={`ace-tv-grid${focus ? " is-focus" : ""}`}>
        {visible.map((feed) => (
          <TvTile
            key={feed.id}
            feed={feed}
            focused={focus === feed.id}
            t={t}
            onFocus={() => setFocus((current) => (current === feed.id ? null : feed.id))}
            onLive={() => void setBroadcastLive(feed.id, !feed.isLive).then((r) => { setNote(t(r.ok ? "tvSaved" : "tvDbDown")); if (r.ok) router.refresh(); })}
            onRemove={() =>
              void removeBroadcastFeed(feed.id).then((result) => {
                setNote(t(result.ok ? "tvRemoved" : "tvDbDown"));
                if (result.ok) {
                  setFocus(null);
                  router.refresh();
                }
              })
            }
          />
        ))}
        {focus || feeds.length === 0
          ? null
          : Array.from({ length: Math.max(0, WALL_SLOTS - feeds.length) }, (_, index) => (
              <div key={`slot-${index}`} className="ace-tv-slot" aria-hidden="true">
                <span>{t("tvSlotEmpty", { n: feeds.length + index + 1 })}</span>
              </div>
            ))}
      </div>
      <form className="ace-tv-form" onSubmit={(event) => void onAdd(event)}>
        <label className="ace-admin-label">
          {t("tvAddTitle")}
          <input className="ace-admin-input" value={title} maxLength={80} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="ace-admin-label">
          {t("tvAddUrl")}
          <input className="ace-admin-input" value={url} type="url" inputMode="url" onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button type="submit" className="ace-admin-gold" disabled={!dbAvailable}>
          {t("tvAdd")}
        </button>
        {!dbAvailable ? <p className="ace-tv-note">{t("tvDbDown")}</p> : null}
        {note ? <p className="ace-tv-note" role="status">{note}</p> : null}
      </form>
    </section>
  );
}
