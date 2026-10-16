"use client";

import { useEffect, useRef, useState } from "react";
import { PremiumProfileCard, type PremiumCardLabels } from "@/components/premium-profile-card";
import { setPremiumPreviewLevel, usePremiumPreviewLevel } from "@/lib/premium-preview-store";

const FADE_MS = 420;

/** Preview card that follows the tier picked in a rank grid on the same page, with a crossfade. */
export function PremiumProfileCardLive({
  name,
  labels,
  defaultLevel,
}: {
  name: string;
  labels: PremiumCardLabels;
  defaultLevel: number;
}) {
  const picked = usePremiumPreviewLevel();
  const level = picked ?? defaultLevel;
  const [shown, setShown] = useState(level);
  const [leaving, setLeaving] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset the page-local selection when this preview leaves the page.
  useEffect(() => () => setPremiumPreviewLevel(null), []);

  // Adjust state during render when the picked tier changes (React's documented pattern).
  if (level !== shown) {
    setLeaving(shown);
    setShown(level);
  }

  useEffect(() => {
    if (leaving == null) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setLeaving(null), FADE_MS);
  }, [leaving, shown]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <div className="ace-pcard-xfade" aria-live="polite">
      <div key={shown} className={`ace-pcard-xfade-layer${leaving != null ? " is-entering" : ""}`}>
        <PremiumProfileCard name={name} level={shown} rating={null} labels={labels} preview />
      </div>
      {leaving != null ? (
        <div key={`out-${leaving}`} className="ace-pcard-xfade-layer is-leaving" aria-hidden="true">
          <PremiumProfileCard name={name} level={leaving} rating={null} labels={labels} preview />
        </div>
      ) : null}
    </div>
  );
}
