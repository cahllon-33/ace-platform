"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useText } from "@/components/text-provider";
import type { RankArt } from "@/lib/ranks";

/** UI only. The server re-checks the stored plan on every save (POST /api/profile/rank-art). */
export function RankArtPicker({ current, premiumAllowed }: { current: RankArt; premiumAllowed: boolean }) {
  const copy = useText().ranks.premiumRanks;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  async function choose(art: RankArt) {
    setBusy(true);
    setNote(null);
    try {
      const res = await fetch("/api/profile/rank-art", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ art }),
      });
      setNote(res.ok ? copy.pickerSaved : copy.pickerFailed);
      if (res.ok) router.refresh();
    } catch {
      setNote(copy.pickerFailed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="ace-rank-art-picker">
      <p className="ace-rank-art-picker-title">{copy.pickerTitle}</p>
      <div className="ace-rank-art-picker-row" role="group" aria-label={copy.pickerTitle}>
        <button type="button" aria-pressed={current === "standard"} disabled={busy} onClick={() => choose("standard")}>
          {copy.pickerStandard}
        </button>
        <button
          type="button"
          aria-pressed={current === "premium"}
          disabled={busy || !premiumAllowed}
          onClick={() => choose("premium")}
        >
          {copy.pickerPremium} · $7
        </button>
      </div>
      {!premiumAllowed ? <p className="ace-rank-art-picker-note">{copy.pickerLocked}</p> : null}
      {note ? <p className="ace-rank-art-picker-note" role="status">{note}</p> : null}
    </div>
  );
}
