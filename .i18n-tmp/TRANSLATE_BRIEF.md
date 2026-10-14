# A.C.E. page-text translation brief

Project root: `C:\Users\cahll\Desktop\ACE\ace-platform` (Next.js + TypeScript). Shell is Windows PowerShell: no `&&` (use `;`), and `Get-Content -Raw` is unavailable. Shell commands need `required_permissions: ["all"]`.

A.C.E. is an independent Counter-Strike 2 competition website. All page text lives in English source files under `src/lib/i18n/text/en/<area>.ts`. You write the translated mirror for ONE locale and the areas listed in your task.

## Output format

For every area assigned to you, create `src/lib/i18n/text/<folder>/<area>.ts`:

```ts
import type { TextBag } from "../types";

export const <area>: TextBag["<area>"] = {
  // exactly the same keys, nesting, and array lengths/order as the English file
};
```

- Do NOT add `as const`. Do NOT create or edit `index.ts` (it already exists). Do NOT edit any English file or any component.
- Same keys, same nesting, same array lengths and order. No extra keys, no missing keys.
- Keep every `{placeholder}` exactly as written (e.g. `{level}`, `{name}`, `{rp}`, `{points}`, `{plan}`, `{price}`). You may move it inside the sentence for natural grammar, but do not rename, translate, add, or remove placeholders.
- Strings split into fragments around links (e.g. `before`, `termsLink`, `afterTerms`, `after`) are rendered in key order: `before + link + afterTerms + link + ... + after`. Translate so the joined result reads naturally in your language; keep punctuation fragments sensible (a fragment may become `""` only if English is just punctuation and your grammar needs nothing there — prefer a space or punctuation).
- Write large files in a few chunks if needed (create the file, then append with edits), but the final file must be one valid TypeScript object.

## Translation quality

- Professional, natural, native-speaker quality for a gaming/esports audience. Not word-for-word. Consistent terminology across all areas.
- For UI labels already translated in the old dictionary `src/lib/i18n/<dictFile>.ts` (navigation, FIND MATCH, Teams, Leaderboard, Rules, Pricing, rank/rating words, etc.), reuse that file's wording so the whole site is consistent. Read it first.
- Keep the English UPPERCASE styling where your script has case.

## Do NOT translate (keep exactly)

(Number values must stay the same; you may use your locale's digit grouping, e.g. German `1.000` for English `1,000`.)

A.C.E., A.C.E. Competitions Ltd., Steam, Steam OpenID, OpenID, SteamID, Valve, Counter-Strike 2, CS2, 5v5, RP, ELO/Elo, K/D, HS, DPI, Hz, CPU, GPU, URLs, emails (support@ace-platform.gg), numbers, prices, dates, version strings.
Plan names: Free / Plus / Premium may be translated only if the old dictionary already translates them; otherwise keep "Plus" and "Premium" (Free may be translated).
Rank names: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend. Crystal names (e.g. IMMORTAL, ACE ELITE). Map names (Mirage, Inferno, Nuke, Ancient, Anubis, Dust2, Overpass, Vertigo, Train...). Weapon and skin names (AK-47, AWP, M4A4, M4A1-S, Desert Eagle, USP-S, MP9, FAMAS, Butterfly Knife | Lore, Karambit | Lore, M4A1-S | Welcome to the Jungle). Player/team/clan handles.

## Honesty rules (never violate)

The English copy is deliberately honest. Your translation must keep EVERY honesty statement with the same meaning and strength. Never soften, drop, or upgrade a claim. In particular keep that: there is no working AI anti-cheat; no live game servers; no live matchmaking/queue; no real payments (checkout is not live, nothing is charged); no real prizes / no funded prize pool / no cash value; mock/sample/preview/planned/example data is marked as such; A.C.E. never asks for a Steam password; not affiliated with Valve.
Do not add new claims, marketing promises, or any mention of other platforms. Never write the names FACEIT, ESEA, or ESL.

## Verify (mandatory)

Run after writing your files (from the project root):

```
node --no-warnings .i18n-tmp/verify.mjs <folder> <area1> <area2> ...
```

It must print `0 errors`. Review its "Identical to English" list: anything there that is not a brand/product/weapon/map/rank name or code must be translated. Fix and re-run until clean.

Then run `npx tsc --noEmit -p .` and fix any error that points into YOUR files (`src/lib/i18n/text/<folder>/...` or your dictionary file). Errors in other locale folders belong to other agents running in parallel — ignore them.

## Final report

Reply briefly: files written, the final verify line (strings checked / errors / identical count), and whether tsc showed errors in your files.
