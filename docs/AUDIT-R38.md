# R38 audit (base e41149f)

Read before changing anything: `docs/PRODUCT_SPEC.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `SECURITY.md`, `DECISIONS.md` (D1–D54), `.cursor/rules/ace.mdc`.
Evidence: Playwright screenshots `screenshots-r38/before-*` (1440 and 390), Lighthouse on a local production build (`/tmp/lh/before*.json`), code reading.
Scores are honest 1–10 judgements of the current state, not targets.

| Area | Score | Main weaknesses found |
|---|---|---|
| Hero | 6.0 | Hero carries a legal/technical paragraph (OpenID, "anti-cheat, match servers and prize payouts are not running") and a legal checkbox. No one-line value proposition. Secondary CTA is "How it works" (an anchor far down the page), not ranks. Signed-in primary CTA is "Play now" into a closed queue instead of the dashboard. |
| Hierarchy | 5.5 | Home stacks hero → status → live strip → jump chips → "Matchmaking lobby and dispatch center" (huge gold headline about something that is not running) → identity hub. Many sections shout with the same gold weight; gold is used as a surface, not an accent. |
| Mobile | 6.0 | No page-level horizontal overflow at 390, but the home is ~9,300px tall; "Five paths" cards clip inside their row; hero image + legal text push the CTA below the fold. |
| Accessibility | 6.5 | Good: lang/dir, skip of reduced motion in several components, aria labels on many buttons. Gaps: no shared toast/live region, inconsistent focus rings, several 0.6–0.7rem uppercase labels with low contrast, Steam CTA is an `<a aria-disabled>` until a checkbox is ticked. |
| Performance | 6.0 | Large hero JPGs (logo 1024², arena), multiple full-width animated layers, many client components on the home. See Lighthouse numbers in the R38 report. |
| Trust / honesty | 7.5 | Strong labelling culture (DEMO/not connected) but very wordy; leaderboard falls back to invented showcase names (D54) and lists accounts with zero recorded matches as "ranked"; home identity hub derives rank from RP while dashboard/leaderboard use the stored `rankLevel` (same demo account shows Legend on home and Elite on dashboard). |
| Conversion | 5.5 | Primary action hidden behind consent checkbox + long text; pricing message ($0/$4/$7, no pay-to-win) appears only far down the page; no clear "what you get today". |
| Profile / player card | 6.0 | Premium showcase card is strong, but dashboard identity block is a dense list; W/L shown without "no recorded matches" handling; no journey/progress toward next division. |
| Ranks | 7.5 | Ranks page, codex, 3D viewer and Premium showcase are rich. Duplicate labels where standard and Premium names coincide (MASTER · Master, GRANDMASTER · Grandmaster). Division is shown as a showcase chip only, never computed from RP. 3D viewer has no static fallback on slow/failed load. |
| Admin | 8.0 | Real data, gated, Online now + Sign-ins, Steam owner gate. Missing: support inbox, toasts are ad-hoc flash text. |
| **Overall** | **6.5** | |

Also noted (not changed, needs the owner):
- D31 tournament bracket staging clan list starts with "NEXsus Clan". It is a staging bracket name, not an account, but it conflicts with the spirit of "never seed NEXsus".
- `moreNav` exists in `src/lib/site.ts`; the header renders it as the right-hand "Explore" row, not a "MORE" dropdown.
