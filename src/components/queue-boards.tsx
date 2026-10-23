"use client";

import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";
import { QUEUE_BOARD_IDS, QUEUE_BOARD_RATING_WINDOW, type QueueBoardId } from "@/lib/queue-boards";

const BOARD_CSS = `
.ace-q-section { margin-bottom: 1.5rem; padding: 1.1rem; border: 1px solid rgba(201,162,74, 0.28); border-radius: 1.1rem; background: #0f0f11; }
.ace-q-kicker { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A24A; }
.ace-q-title { margin-top: 0.35rem; font-size: 1.35rem; font-weight: 700; color: #f5f3ec; }
.ace-q-note, .ace-q-picked { margin-top: 0.45rem; max-width: 42rem; font-size: 0.86rem; line-height: 1.45; color: #a9abb3; }
.ace-q-row { display: grid; gap: 0.75rem; margin-top: 1rem; }
@media (min-width: 960px) { .ace-q-row { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.ace-q-card { display: flex; flex-direction: column; gap: 0.75rem; min-height: 100%; padding: 0.95rem 1rem 1rem; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 0.9rem; background: #121214; color: #f5f3ec; text-align: start; cursor: pointer; }
.ace-q-card[data-on="true"] { border-color: #C9A24A; box-shadow: inset 0 0 0 1px rgba(201,162,74, 0.45); background: #16140f; }
.ace-q-name { display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; font-size: 1rem; font-weight: 700; }
.ace-q-name span, .ace-q-picked span { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; color: #C9A24A; }
.ace-q-card ul { display: grid; gap: 0.4rem; margin: 0; padding: 0; list-style: none; }
.ace-q-card li { padding-inline-start: 0.85rem; font-size: 0.8rem; line-height: 1.35; color: #c8c6be; }
.ace-q-card li::before { content: ""; display: inline-block; width: 0.35rem; height: 0.35rem; margin-inline-start: -0.85rem; margin-inline-end: 0.5rem; border-radius: 1px; background: #C9A24A; vertical-align: 0.05rem; }
.ace-q-picked span { margin-inline-start: 0.45rem; }
`;

export function QueueBoards({
  selected,
  onSelect,
}: {
  selected: QueueBoardId;
  onSelect: (id: QueueBoardId) => void;
}) {
  const copy = useText().play.boards;
  const current = copy.items[selected];

  return (
    <section className="ace-q-section" aria-labelledby="ace-boards-title">
      <style>{BOARD_CSS}</style>
      <header>
        <p className="ace-q-kicker">{copy.label}</p>
        <h2 id="ace-boards-title" className="ace-q-title">
          {copy.title}
        </h2>
        <p className="ace-q-note">{copy.note}</p>
      </header>
      <div className="ace-q-row" role="radiogroup" aria-label={copy.label}>
        {QUEUE_BOARD_IDS.map((id) => {
          const board = copy.items[id];
          const points = QUEUE_BOARD_RATING_WINDOW[id];
          const on = id === selected;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={on}
              className="ace-q-card"
              data-board={id}
              data-on={on ? "true" : "false"}
              onClick={() => onSelect(id)}
            >
              <span className="ace-q-name">
                {board.name}
                <span>5v5</span>
              </span>
              <ul>
                {board.rules.map((rule) => (
                  <li key={rule}>{points === undefined ? rule : interpolate(rule, { points })}</li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
      <p className="ace-q-picked">
        {current.name}
        <span>5v5</span>
      </p>
    </section>
  );
}
