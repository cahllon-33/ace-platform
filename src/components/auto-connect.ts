"use client";

import { useEffect, useRef, useState } from "react";
import { autoLaunchKey } from "@/lib/queue";

/** Opens the steam:// connect URL (Steam launches CS2 and joins). Safe to call from a click handler. */
export function launchSteam(url: string) {
  if (!/^steam:\/\/connect\//.test(url)) return;
  window.location.assign(url);
}

function once(lobbyId: string) {
  try {
    if (localStorage.getItem(autoLaunchKey(lobbyId))) return false;
    localStorage.setItem(autoLaunchKey(lobbyId), String(Date.now()));
    return true;
  } catch {
    return true;
  }
}

/**
 * R48c: launches CS2 automatically once per lobby when it becomes live (flag in localStorage).
 * Browsers may block protocol launches without a recent user gesture, so `phase` moves to "hint" after a few seconds
 * and the caller keeps a large Join button visible.
 */
export function useAutoConnect(lobbyId: string | null, url: string | null) {
  const [phase, setPhase] = useState<"idle" | "launching" | "hint">("idle");
  const fired = useRef<string | null>(null);
  useEffect(() => {
    if (!lobbyId || !url || fired.current === lobbyId) return;
    fired.current = lobbyId;
    const first = once(lobbyId);
    const t1 = setTimeout(() => { if (first) { setPhase("launching"); launchSteam(url); } else setPhase("hint"); }, 0);
    const t2 = setTimeout(() => setPhase("hint"), first ? 4000 : 0);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lobbyId, url]);
  return phase;
}
