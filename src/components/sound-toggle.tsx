"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useUi } from "@/components/use-ui";
import { playSound, setSoundEnabled, soundEnabled } from "@/lib/ui-sound";

const subs = new Set<() => void>();
const notify = () => subs.forEach((fn) => fn());
function subscribe(fn: () => void) {
  subs.add(fn);
  window.addEventListener("storage", fn);
  return () => {
    subs.delete(fn);
    window.removeEventListener("storage", fn);
  };
}

/** Navbar mute toggle. Muted by default; also wires delegated hover/click sounds when on. */
export function SoundToggle() {
  const ui = useUi();
  const on = useSyncExternalStore(subscribe, soundEnabled, () => false);

  useEffect(() => {
    if (!on) return;
    const pick = (e: Event) => (e.target instanceof Element ? e.target.closest("a, button, [role='button']") : null);
    const over = (e: Event) => {
      const el = pick(e);
      if (el && !el.contains((e as MouseEvent).relatedTarget as Node | null)) playSound("hover");
    };
    const click = (e: Event) => {
      if (pick(e)) playSound("click");
    };
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("click", click, { passive: true });
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("click", click);
    };
  }, [on]);

  const label = on ? ui.r38.sound.on : ui.r38.sound.off;
  return (
    <button
      type="button"
      className="ace-sound-toggle"
      aria-pressed={on}
      aria-label={label}
      title={label}
      onClick={() => {
        const next = !on;
        setSoundEnabled(next);
        notify();
        if (next) playSound("click");
      }}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 9h4l5-4v14l-5-4H4z" />
        {on ? <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" /> : <path d="m16 9 5 6m0-6-5 6" />}
      </svg>
    </button>
  );
}
