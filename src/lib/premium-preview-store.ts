import { useSyncExternalStore } from "react";

/**
 * Page-local selection shared between a rank grid and the Premium preview card.
 * null = nothing selected yet, so the preview keeps its default tier.
 */
let selectedLevel: number | null = null;
const listeners = new Set<() => void>();

export function setPremiumPreviewLevel(level: number | null) {
  if (selectedLevel === level) return;
  selectedLevel = level;
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function usePremiumPreviewLevel(): number | null {
  return useSyncExternalStore(subscribe, () => selectedLevel, () => null);
}
