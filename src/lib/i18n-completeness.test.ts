/**
 * Fails when any locale is missing a key, has an empty string where English has text,
 * drops a {placeholder}, or silently serves English. Run alone with `npm run check:i18n`.
 */
import { describe, expect, it } from "vitest";
import { DICTIONARIES, EN } from "@/lib/i18n";
import { SITE_LOCALES } from "@/lib/languages";
import { RB_EN, RULEBOOK_LOCALES } from "@/lib/rulebook-i18n";
import { TEXTS } from "@/lib/i18n/text";
import { TEXT_EN } from "@/lib/i18n/text/en";
import { UI_EN } from "@/lib/i18n/ui/en";
import { UI_LOCALES } from "@/lib/i18n/ui/locales";

/**
 * Locales whose long-form page text (TextBag) is not translated yet and still serves English.
 * Shared UI, legacy dictionary and the full rulebook ARE translated for these locales.
 * Remove an id from this list once its TextBag files exist; the test then enforces them.
 */
const TEXTBAG_ENGLISH_FALLBACK = [
  "fi", "tr", "id", "th", "hu", "hr", "mk", "hi", "ro",
] as const;

const NON_EN = SITE_LOCALES.map((l) => l.id).filter((id) => id !== "en");

type Problem = string;

function placeholders(s: string) {
  return (s.match(/\{\w+\}/g) ?? []).sort().join(",");
}

/** Deep-compare structure of `ref` against `val`; collect missing keys, type and length mismatches. */
function compare(ref: unknown, val: unknown, path: string, out: Problem[]) {
  if (typeof ref === "string") {
    if (typeof val !== "string") return void out.push(`${path}: missing`);
    if (ref.trim() && !val.trim()) out.push(`${path}: empty`);
    if (placeholders(ref) !== placeholders(val)) out.push(`${path}: placeholders ${placeholders(ref)} vs ${placeholders(val)}`);
    return;
  }
  if (Array.isArray(ref)) {
    if (!Array.isArray(val)) return void out.push(`${path}: not an array`);
    if (ref.length !== val.length) out.push(`${path}: length ${val.length} != ${ref.length}`);
    ref.forEach((item, i) => compare(item, val[i], `${path}[${i}]`, out));
    return;
  }
  if (ref && typeof ref === "object") {
    if (!val || typeof val !== "object") return void out.push(`${path}: missing object`);
    for (const key of Object.keys(ref)) compare((ref as Record<string, unknown>)[key], (val as Record<string, unknown>)[key], `${path}.${key}`, out);
    return;
  }
  if (typeof ref !== typeof val) out.push(`${path}: type ${typeof val} != ${typeof ref}`);
}

describe("i18n completeness", () => {
  it("has 25 non-English locales", () => {
    expect(NON_EN).toHaveLength(25);
  });

  it.each(NON_EN)("legacy dictionary %s has every English key", (id) => {
    const out: Problem[] = [];
    compare(EN, DICTIONARIES[id], id, out);
    expect(out).toEqual([]);
  });

  it.each(NON_EN)("shared UI %s has every key and is its own translation", (id) => {
    const ui = UI_LOCALES[id];
    expect(ui, `${id} missing UI dictionary`).toBeDefined();
    expect(ui).not.toBe(UI_EN);
    const out: Problem[] = [];
    compare(UI_EN, ui, id, out);
    expect(out).toEqual([]);
  });

  it.each(NON_EN)("rulebook %s is fully translated", (id) => {
    const rb = RULEBOOK_LOCALES[id];
    expect(rb, `${id} missing rulebook`).toBeDefined();
    const out: Problem[] = [];
    compare(RB_EN, rb, id, out);
    expect(out).toEqual([]);
    const english = rb.clauses.flat().filter((text, i) => text === RB_EN.clauses.flat()[i]);
    expect(english, `${id} clauses still in English`).toEqual([]);
    expect(rb.summary16).not.toBe(RB_EN.summary16);
  });

  it.each(NON_EN)("page text %s has every key", (id) => {
    const bag = TEXTS[id];
    expect(bag, `${id} missing TextBag`).toBeDefined();
    const out: Problem[] = [];
    compare(TEXT_EN, bag, id, out);
    expect(out).toEqual([]);
  });

  it.each(NON_EN)("page text %s is translated unless explicitly allow-listed", (id) => {
    const fallback = (TEXTBAG_ENGLISH_FALLBACK as readonly string[]).includes(id);
    if (fallback) {
      expect(TEXTS[id]).toBe(TEXT_EN);
    } else {
      expect(TEXTS[id]).not.toBe(TEXT_EN);
      for (const area of Object.keys(TEXT_EN) as (keyof typeof TEXT_EN)[]) {
        expect(TEXTS[id][area], `${id}.${String(area)} is the English object`).not.toBe(TEXT_EN[area]);
      }
    }
  });
});
