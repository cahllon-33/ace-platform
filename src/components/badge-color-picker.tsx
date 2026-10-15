"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useText } from "@/components/text-provider";
import { BADGE_PRESETS, parseBadgeColor } from "@/lib/badge-color";
import { interpolate } from "@/lib/i18n";
import { RANK_TIERS, rankArtAsset } from "@/lib/ranks";

/** Cosmetic standard-emblem color. The server validates and stores it (POST /api/profile/badge-color). */
export function BadgeColorPicker({ current, level }: { current: string | null; level: number }) {
  const copy = useText().account.badgeColor;
  const router = useRouter();
  const [color, setColor] = useState<string | null>(parseBadgeColor(current));
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  async function save(next: string | null) {
    setColor(next);
    setBusy(true);
    setNote(null);
    try {
      const res = await fetch("/api/profile/badge-color", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ color: next }),
      });
      setNote(res.ok ? copy.saved : copy.failed);
      if (res.ok) router.refresh();
    } catch {
      setNote(copy.failed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="ace-badge-picker" aria-labelledby="ace-badge-picker-title">
      <div className="ace-badge-picker-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={rankArtAsset(level, "standard", color).stillSrc} alt={copy.previewAlt} width={84} height={84} />
        <div>
          <p id="ace-badge-picker-title" className="ace-badge-picker-title">{copy.title}</p>
          <p className="ace-badge-picker-body">{copy.body}</p>
        </div>
      </div>
      <p className="ace-badge-picker-label">{copy.presets}</p>
      <div className="ace-badge-swatches" role="group" aria-label={copy.presets}>
        {BADGE_PRESETS.map((preset, index) => (
          <button
            key={preset}
            type="button"
            className="ace-badge-swatch"
            style={{ background: preset }}
            aria-pressed={color === preset}
            aria-label={interpolate(copy.swatch, { tier: RANK_TIERS[index].name })}
            title={RANK_TIERS[index].name}
            disabled={busy}
            onClick={() => save(preset)}
          />
        ))}
      </div>
      <div className="ace-badge-picker-row">
        <label className="ace-badge-custom">
          <span>{copy.custom}</span>
          <input
            type="color"
            value={color ?? BADGE_PRESETS[Math.min(9, Math.max(0, level - 1))]}
            disabled={busy}
            onChange={(event) => setColor(parseBadgeColor(event.target.value))}
            onBlur={(event) => {
              const next = parseBadgeColor(event.target.value);
              if (next && next !== parseBadgeColor(current)) void save(next);
            }}
          />
        </label>
        <button type="button" className="ace-badge-reset" disabled={busy || color === null} onClick={() => save(null)}>
          {copy.reset}
        </button>
      </div>
      {note ? <p className="ace-badge-picker-note" role="status">{note}</p> : null}
    </section>
  );
}
