import { describe, expect, it } from "vitest";
import { clampVolume, MAX_VOLUME, SOUND_NOTES, soundEnabled } from "./ui-sound";

describe("ui sound", () => {
  it("is muted by default (no storage)", () => {
    expect(soundEnabled()).toBe(false);
  });
  it("never exceeds 20% volume", () => {
    for (const notes of Object.values(SOUND_NOTES)) for (const n of notes) expect(clampVolume(n.v)).toBeLessThanOrEqual(MAX_VOLUME);
    expect(clampVolume(5)).toBe(MAX_VOLUME);
    expect(MAX_VOLUME).toBeLessThanOrEqual(0.2);
  });
});
