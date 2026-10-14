"use client";

import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";
import { RANK_DIVISIONS } from "@/lib/site";
import type { RankDivision } from "@/lib/ranks";

export function DivisionChips({
  active,
  onSelect,
  compact = false,
}: {
  active: RankDivision;
  onSelect: (division: RankDivision) => void;
  compact?: boolean;
}) {
  const copy = useText().ranks.division;
  return (
    <ul className={`ace-div-row ${compact ? "ace-div-row-compact" : ""}`}>
      {RANK_DIVISIONS.map((div) => {
        const on = div === active;
        return (
          <li key={div}>
            <button
              type="button"
              data-div={div}
              className={`ace-div-chip ${on ? "ace-div-chip-on" : ""}`}
              aria-pressed={on}
              aria-label={interpolate(copy.select, { division: div })}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(div);
              }}
            >
              {div}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
