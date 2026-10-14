# A.C.E. development roadmap

Work in small stages. Do not build the whole platform in one task. Each stage lists a goal, likely files, how to test, and what is still mock or future.

Git checkpoint (commit or stash) before a stage that changes many files, whenever git is available.

## Stage 0 — Planning documents (this stage)

- **Goal:** Product spec, architecture, roadmap, security, decisions, Cursor rules, README commands.
- **In scope:** `docs/*.md`, `.cursorrules`, `.cursor/rules/ace.mdc`, `README.md`.
- **Out of scope:** Website features, database, authentication.
- **How to test:** Confirm the files exist and agree with each other. There is no `npm test`. Optionally run `npm run lint` and report the real result.
- **Still mock/future:** The entire product UI.

## Stage 1 — Branded public shell

- **Goal:** Replace the Create Next App homepage with an English A.C.E. landing page (charcoal / gold), site header with placeholder nav, correct metadata, CSS tokens. No database. No login.
- **Likely files:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, maybe `src/components/` for a header, `README.md` if commands change.
- **How to test:**
  1. `npm run dev` and open http://localhost:3000 in a browser. Confirm A.C.E. branding, English copy, no false claims (no AI anti-cheat, live servers, real payments, or real prizes).
  2. `npm run lint`
  3. `npm run build`
- **Still mock/future:** Nav links may go to pages that do not exist yet, or be non-navigating placeholders clearly labeled. Steam button, if shown, must be labeled as not wired.

## Stage 2 — Placeholder information pages

- **Goal:** Routes for players, teams, rankings, and tournaments using **labeled mock data**.
- **Likely files:** `src/app/players/page.tsx`, `src/app/teams/page.tsx`, `src/app/rankings/page.tsx`, `src/app/tournaments/page.tsx`, mock data modules clearly named (for example `src/lib/mock-*.ts`).
- **How to test:** Visit each route. Every list must say it is sample data. Lint and build.
- **Still mock/future:** All records are fake. No sign-in.

## Stage 3 — PostgreSQL and Prisma schema only

- **Goal:** Local PostgreSQL, Prisma with a **stable** version pinned at install time, first schema, `.env.example` placeholders. No Steam login yet.
- **Likely files:** `prisma/schema.prisma`, `.env.example`, `.gitignore` exception for `.env.example`, `src/server/db.ts` (or similar).
- **How to test:** Generate the client and run a migration against a local database. App still runs without requiring login.
- **Still mock/future:** UI can keep mocks until later stages switch over.
- **Cost:** Local Postgres only unless the owner authorizes a hosted database.

## Stage 4 — Steam sign-in and server sessions

- **Goal:** Sign in and out with Steam OpenID. Server-side session. No Steam password field anywhere.
- **Likely files:** auth route handlers, session helpers under `src/server`, sign-in UI, env placeholders for Steam API key and auth secret.
- **How to test:** Complete Steam login on a test account, see a signed-in state, sign out. Confirm the UI never asks for a Steam password. Confirm an unauthenticated request cannot hit a protected server action.
- **Verify first:** Auth.js Steam provider still viable; Steam Web API terms; no paid auth SaaS unless authorized.

## Stage 5 — Player profiles (real data)

- **Goal:** A profile page backed by the database and Steam identity.
- **How to test:** After Steam sign-in, open the profile. Public fields render. Missing data does not crash the page.
- **Still mock/future:** Competitive stats may be empty until matches exist.

## Stage 6 — Teams

- **Goal:** Create a team, view a team, join/leave (rules documented in the stage task).
- **How to test:** Signed-in player can create a team; team page shows members; permission rules enforced on the server (for example only a captain can rename).
- **Still mock/future:** Team rankings if not yet computed.

## Stage 7 — Rankings

- **Goal:** An A.C.E. ranking list from real platform results, with the rating rules written down. Start simple.
- **How to test:** After recording or importing allowed results, the ranking page updates. Empty state is clear. Do not imply Valve rank or FACEIT elo unless those are separately integrated and labeled.
- **Still mock/future:** Advanced calibration, decay, or anti-smurf systems.

## Stage 8 — Tournaments

- **Goal:** Create/list tournaments, register a team, show bracket or match list. **No live game servers.**
- **How to test:** Staff or allowed role creates a tournament; team registers; pages show the structure. Copy must not promise real prizes unless prize handling is real and legal (it is not, yet).
- **Still mock/future:** Server hosting, GOTV, automated result ingest, prize payouts.

## Stage 9 — Match integrity reports

- **Goal:** Players can submit a report; staff can list and update reports. This is a **human review queue**, not AI detection.
- **How to test:** Submit a report while signed in; staff sees it; a normal player cannot change report status. UI must not say “AI anti-cheat detected.”
- **Still mock/future:** Autonomous anti-cheat, demo parsing pipelines, desktop sensors.

## Stage 10 — Moderation

- **Goal:** Staff roles (for example moderator, admin) enforced on the server: restrict users, hide content, handle reports.
- **How to test:** A non-staff session cannot call staff APIs even if they forge a browser request. Staff can complete a documented moderation action. Audit log if included in the stage.
- **Still mock/future:** Automated bans from a cheat model.

## Stage 11 — Subscriptions (no live charges until authorized)

- **Goal:** Design plus UI placeholders for premium features. Wire a payment provider **only** after explicit authorization (that spend is a business decision).
- **How to test until authorized:** Placeholder pages, no checkout that charges money. If a sandbox is later authorized, use test keys only and say so in the UI during development.
- **Still mock/future:** Real payments, invoices, VAT, refunds.

## Stage 12 — Desktop application

- **Goal:** A desktop shell only after the web app is stable (Stages 1–10 in usable form).
- **How to test:** Defined in that stage. Do not start Electron earlier.
- **Still mock/future until then:** Any “desktop anti-cheat” marketing.

## After each stage

- Report **actual** lint/build/test results. Do not invent passing tests.
- If a check fails, explain why and fix it before claiming the stage is done.
- Update this roadmap only when a stage’s outcome changes the plan (record the change in `DECISIONS.md` too).
