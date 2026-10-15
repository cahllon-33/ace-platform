/**
 * Fails when user-facing text (all locales, rulebook, admin, showcase data) states RP figures that
 * contradict src/lib/rp-rules.ts — e.g. the retired rating factor 32, a 1,000 RP start, +25/−25 base,
 * 10..40 / 8..25 clamp, gains above +22, +3 MVP, "34 wins", or the removed badge-colour customisation.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { DICTIONARIES } from "@/lib/i18n";
import { TEXTS } from "@/lib/i18n/text";
import { UI_LOCALES } from "@/lib/i18n/ui/locales";
import { RB_EN, RULEBOOK_LOCALES } from "@/lib/rulebook-i18n";
import { RULEBOOK } from "@/lib/rulebook";
import { ADMIN_EN, ADMIN_HE } from "@/lib/admin-i18n";
import { RP_RULES } from "@/lib/rp-rules";
import { winsToReach } from "@/lib/rating";

function strings(v: unknown, at: string, out: [string, string][]) {
  if (typeof v === "string") out.push([at, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${at}[${i}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) strings(x, `${at}.${k}`, out);
}

const base = RP_RULES.kFactor / 2;
const n = (x: number) => String(x);
/** Number tokens near "RP"-ish context that may legitimately appear. */
const ALLOWED_SIGNED = new Set([
  base, RP_RULES.win.min, RP_RULES.win.max, RP_RULES.maxGainWithMvp, RP_RULES.loss.min, RP_RULES.loss.max,
  RP_RULES.mvpBonus, RP_RULES.abandonPenalty, Math.round(base * 0.8), Math.round(base * 0.7), 0,
]);
const total = winsToReach(RP_RULES.startingRating, 1950).total;

/** [name, regex] — any match is a contradiction with rp-rules.ts. */
const RULES: [string, RegExp][] = [
  ["old rating factor 32", /(?:K\s*=\s*32|(?:factor|facteur|faktor|fattore|factorul|tekijä|tényező|faktör|фактор|коефіцієнт|коэффициент|係数|系数|계수)\D{0,12}32|32\D{0,6}(?:factor|faktor|facteur|fattore|factorul|tekijä|tényező|faktör|係数|系数|계수))/i],
  ["old 1,000 start", /1[,.\s\u202f\u00a0]?000\s?(?:RP|Rating Points)/],
  ["old 10..40 clamp", /(?<!\d)10(?!\d)\D{1,14}(?<!\d)40(?!\d)/],
  ["old 8..25 / 10..25 clamp", /(?<!\d)(?:8|10)(?!\d)\D{1,14}(?<!\d)25(?!\d)\s?(?:RP|Rating)/],
  ["old +3 MVP", /(?<![\d.,])[+＋]?3\s?RP/],
  ["badge colour customisation", /badge.?colou?r|colou?r picker|custom (?:badge|emblem) colou?r|badgeColor/i],
];

/** Signed RP amounts like "+25 RP", "−40", "+38": must be a configured value. */
const SIGNED = /(?<![\w.,])[+−-](\d{1,3})(?![\d.,%:])(?!\s?(?:%|x|×|\d))/g;

function collect(): [string, string][] {
  const out: [string, string][] = [];
  strings(DICTIONARIES, "dict", out);
  strings(TEXTS, "text", out);
  strings(UI_LOCALES, "ui", out);
  strings(RULEBOOK_LOCALES, "rbI18n", out);
  strings(RB_EN, "rbEn", out);
  strings(RULEBOOK, "rulebook", out);
  strings(ADMIN_EN, "adminEn", out);
  strings(ADMIN_HE, "adminHe", out);
  return out;
}

describe("RP figures in user-facing text match rp-rules.ts", () => {
  const all = collect();

  it("collects text from every source", () => {
    expect(all.length).toBeGreaterThan(5000);
  });

  for (const [name, re] of RULES) {
    it(`no ${name}`, () => {
      expect(all.filter(([, s]) => re.test(s)).map(([p, s]) => `${p}: ${s.slice(0, 140)}`)).toEqual([]);
    });
  }

  it("no stray 1,000 figure (old start rating) outside the allowlist", () => {
    // what-a-rank-is: "Legend is a floor, not a list of 1,000 accounts" — not a rating.
    const ALLOW = /\.what-a-rank-is\./;
    const bad = all.filter(([p, s]) => !ALLOW.test(p) && /(?<![\d$€£])1[,.\s\u202f\u00a0]?000(?![\d,.])/.test(s));
    expect(bad.map(([p, s]) => `${p}: ${s.slice(0, 120)}`)).toEqual([]);
  });

  it("signed RP amounts next to 'RP' are configured values", () => {
    const bad: string[] = [];
    for (const [p, s] of all) {
      if (!/RP|Rating Points/.test(s)) continue;
      for (const m of s.matchAll(SIGNED)) if (!ALLOWED_SIGNED.has(Number(m[1]))) bad.push(`${p}: ${m[0]} in ${s.slice(0, 140)}`);
    }
    expect(bad).toEqual([]);
  });

  it("wins-to-top figure quoted anywhere is the computed one", () => {
    const bad = all.filter(([, s]) => /1[,.\s]?200\D{1,30}1[,.\s]?950/.test(s) && /\b(?!56\b)\d{2}\b(?=\D{0,12}(?:wins|victoires|Siege|vitórias|victorias))/.test(s));
    expect(bad.map(([p]) => p)).toEqual([]);
    expect(total).toBe(56);
  });

  it("source showcase/sample data uses the configured start rating, not 1000", () => {
    const bad: string[] = [];
    const walk = (dir: string) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const f = path.join(dir, e.name);
        if (e.isDirectory()) walk(f);
        else if (/\.tsx?$/.test(e.name) && !/\.test\.tsx?$/.test(e.name)) {
          const src = fs.readFileSync(f, "utf8");
          if (/(?:rating|Rating|elo|rp)\s*[:=]\s*1_?000\b|kFactor:\s*32|badgeColor/.test(src)) bad.push(f);
        }
      }
    };
    walk(path.join(process.cwd(), "src"));
    expect(bad).toEqual([]);
  });

  it("config sanity", () => {
    expect(n(RP_RULES.startingRating)).toBe("1200");
    expect(base).toBe(15);
  });
});
