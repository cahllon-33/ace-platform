import type { Ui } from "@/lib/i18n/ui";

const NAMES = Array.from({ length: 10 }, (_, i) => `ACE_Player_${String(i + 1).padStart(2, "0")}`);

/**
 * Lobby + Match found layout PREVIEW. Neutral placeholder names, no stats, no ratings, no timers,
 * and no controls that do anything. Clearly tagged PREVIEW.
 */
export function MatchPreview({ ui }: { ui: Ui }) {
  const b = ui.r38.board;
  return (
    <section className="ace-mpreview" aria-labelledby="ace-mpreview-title">
      <header className="ace-mpreview-head">
        <span className="ace-mpreview-tag">{b.previewTag}</span>
        <p id="ace-mpreview-title" className="ace-mpreview-note">{b.previewNote}</p>
      </header>
      <div className="ace-mpreview-grid">
        <article className="ace-mpreview-card" aria-label={`${b.lobbyTitle} — ${b.previewTag}`}>
          <h3>
            {b.lobbyTitle} <span className="ace-mpreview-tag is-inline">{b.previewTag}</span>
          </h3>
          <ul className="ace-mpreview-slots">
            {NAMES.slice(0, 5).map((name) => (
              <li key={name}>
                <span className="ace-mpreview-dot" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
          <p className="ace-mpreview-status">{b.waiting}</p>
        </article>
        <article className="ace-mpreview-card is-found" aria-label={`${b.matchFoundTitle} — ${b.previewTag}`}>
          <h3>
            {b.matchFoundTitle} <span className="ace-mpreview-tag is-inline">{b.previewTag}</span>
          </h3>
          <div className="ace-mpreview-teams">
            <ul>
              {NAMES.slice(0, 5).map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <span className="ace-mpreview-vs" aria-hidden="true">VS</span>
            <ul>
              {NAMES.slice(5).map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <button type="button" className="ace-mpreview-accept" disabled aria-disabled="true">
            {b.accept}
          </button>
        </article>
      </div>
    </section>
  );
}
