/**
 * Optional UI micro-audio. Muted by default; the preference lives in localStorage.
 * Sounds are synthesised in the browser with WebAudio (original, no audio files, no third-party
 * assets) and the AudioContext is created lazily on the first sound after the user unmutes.
 */
export type UiSound = "hover" | "click" | "match";
export const SOUND_KEY = "ace:sound";
export const MAX_VOLUME = 0.2;

let ctx: AudioContext | null = null;
let lastHover = 0;

export function soundEnabled(): boolean {
  try {
    return localStorage.getItem(SOUND_KEY) === "on";
  } catch {
    return false;
  }
}

export function setSoundEnabled(on: boolean) {
  try {
    localStorage.setItem(SOUND_KEY, on ? "on" : "off");
  } catch {
    /* storage blocked: stay muted */
  }
}

type Note = { f: number; t: number; d: number; v: number; type?: OscillatorType };
export const SOUND_NOTES: Record<UiSound, Note[]> = {
  hover: [{ f: 1800, t: 0, d: 0.03, v: 0.25, type: "sine" }],
  click: [{ f: 900, t: 0, d: 0.05, v: 0.5, type: "triangle" }],
  match: [
    { f: 660, t: 0, d: 0.14, v: 0.7, type: "triangle" },
    { f: 880, t: 0.12, d: 0.14, v: 0.7, type: "triangle" },
    { f: 1320, t: 0.24, d: 0.3, v: 0.8, type: "sine" },
  ],
};

/** Clamp any requested gain so the master never exceeds 20%. */
export function clampVolume(v: number) {
  return Math.max(0, Math.min(MAX_VOLUME, v * MAX_VOLUME));
}

export function playSound(name: UiSound) {
  if (typeof window === "undefined" || !soundEnabled()) return;
  if (name === "hover") {
    const now = performance.now();
    if (now - lastHover < 90) return;
    lastHover = now;
  }
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx ??= new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const start = ctx.currentTime;
    for (const n of SOUND_NOTES[name]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type ?? "sine";
      osc.frequency.value = n.f;
      const peak = clampVolume(n.v);
      gain.gain.setValueAtTime(0.0001, start + n.t);
      gain.gain.exponentialRampToValueAtTime(peak, start + n.t + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + n.t + n.d);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start + n.t);
      osc.stop(start + n.t + n.d + 0.02);
    }
  } catch {
    /* audio unavailable: silent */
  }
}
