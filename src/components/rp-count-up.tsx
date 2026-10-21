"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to the real RP once on mount (ease-out, ~1.4s). Reduced motion: shows the value at once. */
export function RpCountUp({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const from = Math.max(0, Math.round(value * 0.55));
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(from + (value - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span className="hrs-rp-num" aria-label={`${value.toLocaleString("en-US")} RP`}>
      <span aria-hidden="true">{shown.toLocaleString("en-US")}</span>
    </span>
  );
}
