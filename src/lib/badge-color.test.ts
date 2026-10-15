import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { BADGE_PRESETS, badgeEmblemSrc, paletteFromColor, parseBadgeColor, recolorEmblemSvg, TIER_PALETTES } from "@/lib/badge-color";
import { rankArtAsset } from "@/lib/ranks";

const FILES = ["01-recruit", "02-operative", "03-vanguard", "04-specialist", "05-veteran", "06-elite", "07-master", "08-grandmaster", "09-sovereign", "10-legend"];

describe("badge color", () => {
  it("offers the 10 tier colors as presets", () => {
    expect(BADGE_PRESETS).toHaveLength(10);
    expect(new Set(BADGE_PRESETS).size).toBe(10);
  });

  it("validates strictly", () => {
    expect(parseBadgeColor("#1FBF7F")).toBe("#1fbf7f");
    expect(parseBadgeColor("1fbf7f")).toBe("#1fbf7f");
    for (const bad of ["red", "#fff", "#12345g", "", null, 5, "#1234567", "url(x)"]) expect(parseBadgeColor(bad)).toBeNull();
  });

  it("palettes match the baked SVG colors so recoloring replaces every tier color", () => {
    FILES.forEach((file, i) => {
      const svg = readFileSync(`public/ranks/emblems/${file}.svg`, "utf8");
      for (const c of Object.values(TIER_PALETTES[i])) expect(svg).toContain(c);
      const out = recolorEmblemSvg(svg, i + 1, "#123456");
      for (const c of Object.values(TIER_PALETTES[i])) expect(out).not.toContain(c);
      expect(out).toContain(paletteFromColor("#123456").mid);
    });
  });

  it("only standard art takes the color; Premium art stays per tier", () => {
    expect(rankArtAsset(4, "standard", "#ff0000").stillSrc).toBe(badgeEmblemSrc(4, "#ff0000"));
    expect(rankArtAsset(4, "standard", null).stillSrc).toBe("/ranks/emblems/04-specialist.svg");
    expect(rankArtAsset(4, "premium", "#ff0000").stillSrc).toBe("/ranks/04-specialist.png");
  });
});
