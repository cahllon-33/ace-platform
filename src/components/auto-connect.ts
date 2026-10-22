"use client";

import { useEffect, useState } from "react";
import { autoLaunchKey } from "@/lib/queue";

/** Opens the steam:// connect URL (Steam launches CS2 and joins). Safe to call from a click handler. */
export function launchSteam(url: string) {
  if (!/^steam:\/\/run\/730\/\/\+connect%20/.test(url)) return;
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
  useEffect(() => {
    if (!lobbyId || !url) return;
    // The once-flag is taken inside the timer, so a cancelled run (Strict Mode, re-render) never burns the launch.
    let t2: ReturnType<typeof setTimeout> | undefined;
    const t1 = setTimeout(() => {
      if (once(lobbyId)) { setPhase("launching"); launchSteam(url); t2 = setTimeout(() => setPhase("hint"), 4000); }
      else setPhase("hint");
    }, 0);
    return () => { clearTimeout(t1); if (t2) clearTimeout(t2); };
  }, [lobbyId, url]);
  return phase;
}

