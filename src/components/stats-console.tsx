import { PlayerRatingTrend } from "@/components/player-rating-trend";
import type { RatingPoint } from "@/lib/player-dossier";
import type { getText } from "@/server/locale";

type Text = Awaited<ReturnType<typeof getText>>;

export type StatsConsoleData =
  | { mode: "sample" }
  | { mode: "live"; points: RatingPoint[]; current: number };

/** Shape-only path for the sample chart. It has no axis values and is labelled as sample. */
const SAMPLE_PATH = "M 20 150 C 90 140, 120 100, 180 110 S 290 60, 350 80 S 460 40, 520 50 S 640 20, 700 30";

function RingGauge({ title, soon, note }: { title: string; soon: string; note: string }) {
  return (
    <figure className="ace-s3d-ring">
      <div className="ace-s3d-ring-stage" aria-hidden="true">
        <svg viewBox="0 0 120 120" width={120} height={120}>
          <defs>
            <linearGradient id="ace-s3d-ring-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9A24A" />
              <stop offset="55%" stopColor="#C9A24A" />
              <stop offset="100%" stopColor="#7A5C12" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="48" fill="none" stroke="#1B1B1F" strokeWidth="14" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(201,162,74,0.08)" strokeWidth="2" />
          <circle
            className="ace-s3d-ring-arc"
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="url(#ace-s3d-ring-gold)"
            strokeOpacity="0.35"
            strokeWidth="14"
            strokeDasharray="6 10"
            strokeLinecap="round"
          />
        </svg>
        <span className="ace-s3d-ring-value">—</span>
      </div>
      <figcaption>
        <strong>{title}</strong>
        <span className="ace-s3d-soon">{soon}</span>
        <small>{note}</small>
      </figcaption>
    </figure>
  );
}

export function StatsConsole({ text, data }: { text: Text; data: StatsConsoleData }) {
  const copy = text.account.statsConsole;
  const live = data.mode === "live";
  const points = live ? data.points : [];
  const net = points.length > 1 ? points[points.length - 1].rating - points[0].rating : 0;

  return (
    <div className="ace-s3d">
      <section className="ace-s3d-panel ace-s3d-chart" aria-labelledby="ace-s3d-movement">
        <div className="ace-s3d-panel-head">
          <h2 id="ace-s3d-movement">{copy.movementTitle}</h2>
          {!live ? <span className="ace-s3d-sample">{copy.sample}</span> : null}
        </div>
        <p className="ace-s3d-note">{copy.movementNote}</p>
        {live ? (
          <dl className="ace-s3d-kpis">
            <div>
              <dt>{copy.currentLabel}</dt>
              <dd>{data.current}</dd>
            </div>
            <div>
              <dt>{copy.netLabel}</dt>
              <dd>{points.length > 1 ? (net > 0 ? `+${net}` : `${net}`) : "—"}</dd>
            </div>
            <div>
              <dt>{copy.changesLabel}</dt>
              <dd>{Math.max(0, points.length - 1)}</dd>
            </div>
          </dl>
        ) : null}
        <div className="ace-s3d-stage">
          <div className="ace-s3d-plane">
            {live && points.length > 1 ? (
              <PlayerRatingTrend points={points} />
            ) : (
              <svg viewBox="0 0 720 180" className="ace-s3d-sample-chart" role="img" aria-label={`${copy.chartAria} · ${copy.sample}`}>
                {[30, 75, 120, 165].map((y) => (
                  <line key={y} x1="0" x2="720" y1={y} y2={y} stroke="rgba(201,162,74,0.14)" />
                ))}
                <path d={SAMPLE_PATH} fill="none" stroke="#6D6A60" strokeWidth="3" strokeDasharray="8 8" />
              </svg>
            )}
          </div>
        </div>
        {live && points.length < 2 ? <p className="ace-s3d-empty">{copy.noMatches}</p> : null}
      </section>
      <section className="ace-s3d-panel ace-s3d-rings" aria-label={`${copy.hsTitle} · ${copy.accTitle}`}>
        <RingGauge title={copy.hsTitle} soon={copy.soon} note={copy.gaugeSoon} />
        <RingGauge title={copy.accTitle} soon={copy.soon} note={copy.gaugeSoon} />
      </section>
    </div>
  );
}
