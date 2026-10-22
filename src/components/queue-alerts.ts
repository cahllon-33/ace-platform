"use client";

/** Original A.C.E alert tones (synthesized, no audio assets). */
let ctx: AudioContext | null = null;
function audio() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx ??= new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}
function tone(freq: number, start: number, dur: number, gain = 0.08, type: OscillatorType = "triangle") {
  const a = audio();
  if (!a) return;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, a.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, a.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
  o.connect(g).connect(a.destination);
  o.start(a.currentTime + start);
  o.stop(a.currentTime + start + dur + 0.05);
}
export const playMatchFound = () => { tone(523.25, 0, 0.22); tone(659.25, 0.16, 0.22); tone(783.99, 0.32, 0.4, 0.1); };
export const playTick = () => tone(880, 0, 0.08, 0.05, "sine");
export const playBan = () => tone(196, 0, 0.18, 0.06, "sawtooth");
export const playLive = () => { tone(392, 0, 0.18); tone(587.33, 0.14, 0.35, 0.09); };
/** Must be called from a user gesture once so browsers allow later playback. */
export const unlockAudio = () => void audio();

export function notify(title: string, body: string) {
  if (typeof window === "undefined" || !("Notification" in window) || Notification.permission !== "granted") return;
  try { new Notification(title, { body, tag: "ace-match", icon: "/favicon.ico" }); } catch { /* some browsers only allow SW notifications */ }
}
