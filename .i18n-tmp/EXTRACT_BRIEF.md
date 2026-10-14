# Extraction brief (shared by all extraction agents)

Project: `C:\Users\cahll\Desktop\ACE\ace-platform` — Next.js 16 App Router + TypeScript + React 19, Tailwind v4. Path alias `@/*` -> `./src/*`. Windows PowerShell (no `&&`). Shell commands need `required_permissions: ["all"]` on this machine.

## Goal

Every public page must render in the visitor's chosen language. Many components still print English string literals directly in JSX or in `src/lib/*.ts` data. Your job is to MOVE that English text, verbatim, into ONE English text area file and make the components read it from the active-locale text bag. You do NOT translate anything. Translators will translate your English area later, so your keys and structure must be clean and complete.

## The text system (already built — do not change these files)

- `src/lib/i18n/text/en/<area>.ts` — English source. Currently a stub: `export const <area> = {} as const;`. You fill YOUR area only. Keep `as const` on the exported object.
- `src/lib/i18n/text/en/index.ts` — aggregates areas into `TEXT_EN`. Do not edit.
- `src/lib/i18n/text/types.ts` — `TextBag` is the widened shape of `TEXT_EN`. `ClientText` = TextBag without the server-only areas `rules`, `legalDocs`, `codex`. Do not edit.
- `src/lib/i18n/text/index.ts` — `textFor(localeId)`, `clientText(bag)`. Do not edit.
- Server components / pages / `generateMetadata`: `import { getText } from "@/server/locale";` then `const text = await getText();` and read `text.<area>.<key>`. Also available: `getLocaleId()`, `getLocale()` (returns `{ id, code, dir, ... }`).
- Client components (`"use client"`): `import { useText } from "@/components/text-provider";` then `const text = useText();` and read `text.<area>.<key>`. `useText()` does NOT include `rules`, `legalDocs`, `codex`. If a client component needs text from those areas, read it in the server parent with `getText()` and pass it down as props.
- Interpolation: `import { interpolate } from "@/lib/i18n";` — `interpolate("Page {n} of {m}", { n: 1, m: 3 })`. Use `{name}` placeholders in English strings instead of string concatenation, so translators can reorder words.
- The OLD short dictionary (`useI18n()` / `t("key")` from `@/components/locale-provider`, keys in `src/lib/i18n/en.ts`) still exists and already works. Leave existing `t(...)` calls alone. Do NOT add keys to `src/lib/i18n/en.ts` or any `src/lib/i18n/<locale>.ts` file. All NEW text goes into your area file.

## Rules for the English area file

1. Move text VERBATIM. Do not reword, shorten, "improve" or add marketing. Honesty sentences such as "not running", "not live", "sample", "showcase", "no prize is funded", "checkout is not live", "does not start a match", "A.C.E. never asks for a Steam password" MUST be kept exactly. Never remove them.
2. Nest by section: `{ meta: { title, description }, hero: { kicker, title, lede }, table: { rank, player, ... } }`. Use camelCase keys. Arrays of strings are fine for paragraph lists (`paragraphs: ["...", "..."]`). Arrays of objects are fine for repeated cards (`items: [{ title, body }, ...]`) as long as code maps over them in the same order.
3. Every value is a plain string (or array/object of strings). No numbers, booleans, JSX, functions, URLs that code depends on, CSS classes, enum ids, slugs, or file paths inside the text file. Keep ids/slugs/numbers/hrefs in code or in the existing lib data, and look up text by id: e.g. `text.play.boards[board.id].title` with an object keyed by id.
4. Do NOT translate or move: brand names (A.C.E., Steam, Steam OpenID, Counter-Strike 2, CS2, Valve), map names (Dust II, Mirage, ...), weapon names (AK-47, AWP...), player/clan showcase handles, numbers, prices like "$4", rating units like "RP" when they are a unit. These may stay in code. But full sentences that CONTAIN these names go into the text file whole (use placeholders for numbers).
5. Inline emphasis: if a sentence has a `<strong>`/`<Link>` in the middle, split into parts like `{ before, link, after }` so translators can translate each part; prefer whole sentences where possible.
6. `aria-label`, `title`, `alt`, placeholder, button labels, empty states, error messages shown to users, and page `metadata` (title/description) are ALL user-visible text — move them too. For pages with `export const metadata`, convert to `export async function generateMetadata(): Promise<Metadata>` that reads `getText()`. Keep `generateStaticParams` where it exists.
7. Do NOT touch admin pages/components (`src/app/admin/**`, `admin-*`), API routes (`src/app/api/**`), server logic in `src/server/**` (except reading text), tests, or any file not listed for your area. If you find English in a file outside your list, note it in your final report instead of editing it.
8. If a component has `dir="ltr"` only because the content was English-only, remove that forced `dir` so RTL locales lay out correctly — unless it is a code/number block that must stay LTR.
9. Keep behaviour identical: same markup, classes, order, ids, hrefs, data. Only the text source changes.
10. Never mention or add the names of competitor platforms anywhere.

## Verification you must run before finishing

- `npx tsc --noEmit -p .` from `C:\Users\cahll\Desktop\ACE\ace-platform` must report no errors in YOUR files. Other agents are editing other areas at the same time; if you see errors only in files you do not own, ignore them and mention them.
- `npx eslint <your changed files>` must be clean.
- `rg -n "\"[A-Z][a-z]+ [a-z]+" <your files>` style spot check: no leftover user-visible English sentences in your components (brand/map/weapon names are fine).

## Final report (your last message)

Return: (1) list of files changed, (2) the area name and approximate number of string leaves added, (3) any English you found outside your files, (4) tsc/eslint results verbatim (short).
