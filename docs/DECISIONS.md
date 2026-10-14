# A.C.E. technical decisions

Record important choices here so later work does not relitigate them silently. If a decision changes, add a new entry instead of rewriting history.

Status values: **Accepted** (follow this), **Proposed** (default plan, confirm before the stage), **Verify later**.

## D1. Keep the existing Next.js App Router app

- **Status:** Accepted
- **Decision:** Build A.C.E. in `ace-platform`, the current Next.js 16.4.0 / React 19.3.0 / TypeScript / Tailwind CSS v4 project.
- **Reason:** The owner already scaffolded this stack. Rewriting would waste time and add risk.
- **Alternatives:** Pages Router, a separate API server, another framework.
- **Verify later:** Next 16 APIs differ from older docs. Read `node_modules/next/dist/docs/` and `AGENTS.md` before using unfamiliar APIs. Confirm 16.4.0 remains an appropriate production pin as the app grows.

## D2. One full-stack Next.js application for the web MVP

- **Status:** Accepted
- **Decision:** Use App Router pages plus Route Handlers. No second backend until this file says otherwise.
- **Reason:** One deployable app is simpler for incremental work and for a single developer.
- **Alternatives:** Nest/Express API + Next frontend, serverless functions in another cloud.

## D3. Tailwind CSS v4 for styling; no extra UI kit yet

- **Status:** Accepted
- **Decision:** Style with Tailwind. Stage 1 public canvas uses charcoal `#121212`. Metallic gold follows the master spec: `#D4AF37`, highlight `#FFD66B`, dark `#8F6418`. Graphite cards `#111318`, void `#050608`.
- **Reason:** Already installed. A component library would duplicate capabilities and add learning cost.
- **Alternatives:** shadcn/ui, MUI, CSS Modules only.

## D4. PostgreSQL + Prisma when data starts, not now

- **Status:** Accepted (timing); Prisma **version pin is Verify later**
- **Decision:** Relational data in PostgreSQL. Access via Prisma. Do not add Prisma or a database in Stage 0–2.
- **Reason:** Profiles, teams, tournaments, and reports are relational. Prisma is a stable, common ORM for Next.js when a production version is pinned.
- **Alternatives:** MongoDB, Drizzle, raw SQL.
- **Verify later:** At Stage 3, install a current **stable** Prisma release (not a prerelease unless `DECISIONS.md` explains why). Confirm Node/Next compatibility then.

## D5. Auth.js (NextAuth) + Steam OpenID, self-hosted

- **Status:** Proposed — confirm before Stage 4
- **Decision:** Use Auth.js with Steam’s official login. Store sessions on the server. Never collect Steam passwords.
- **Reason:** Self-hosted, no auth SaaS fee unless later authorized. Steam is how CS2 players already identify.
- **Alternatives:** Clerk or similar (likely paid), custom OpenID only, email/password (rejected: duplicates Steam and invites password theft confusion).
- **Verify later:** Steam provider maintenance, Steam API ToS, callback URLs, and whether Auth.js major version matches Next 16.

## D6. No Electron until the web app is stable

- **Status:** Accepted
- **Decision:** Desktop app is Stage 12, after branded UI, auth, core competitive features, and server-side moderation exist in usable form.
- **Reason:** Electron doubles maintenance. Integrity tooling on the desktop is high risk and not needed to start a website.

## D7. Match integrity starts as a human report queue

- **Status:** Accepted
- **Decision:** Players report; staff review. Do not ship or advertise AI anti-cheat, live game servers, or automated bans from a model until those are real.
- **Reason:** Honest product. Building a cheat detector is a multi-year specialist problem.

## D8. No paid services without explicit authorization

- **Status:** Accepted
- **Decision:** Local development first. No paid Vercel teams, hosted DBs, Steam features that cost money, or payment providers until the owner says so.
- **Reason:** Owner rule. Avoid surprise bills.

## D9. Next.js cache flags already enabled

- **Status:** Accepted as current config; **Verify later** for user data
- **Decision:** Leave `cacheComponents` and `partialPrefetching` in `next.config.ts` for now. When auth and profiles exist, mark personalized data so it cannot be served to the wrong user.
- **Reason:** They shipped with the scaffold. Changing them without a test is guesswork.
- **Verify later:** Stage 4–5 caching vs sessions.

## D10. English public site; docs in the repo for humans and Cursor

- **Status:** Accepted
- **Decision:** UI copy in English. Architecture lives in `ace-platform/docs/`. Cursor instructions in `.cursorrules` and `.cursor/rules/ace.mdc`.
- **Reason:** International competitive audience. Persistent AI guidance so later stages stay consistent.

## D11. Tests: do not invent results; no test runner yet

- **Status:** Accepted
- **Decision:** Stage 0–1 use lint, build, and manual browser checks. Add a test runner only when there is logic worth automating (likely around Stage 3–4).
- **Reason:** There is no `npm test` today. Claiming tests passed would be false.

## D12. Mock data must be labeled

- **Status:** Accepted
- **Decision:** Any sample players, teams, rankings, or tournaments must be visibly labeled as mock until replaced by database data.
- **Reason:** Owner rule and player trust.

## D13. Stage 1 public website is a preview shell only

- **Status:** Accepted
- **Decision:** Ship `/`, `/features`, `/pricing`, and `/rules` with shared navigation, footer, not-found, and error states. Disabled buttons are labeled “Planned — not available”. No database, auth, payments, live stats, fake Anti-Cheat, or fake tournaments.
- **Reason:** Master plan Stage 1 and execution prompts. Ranked remains closed until Anti-Cheat exists.
- **Verify later:** Visual approval of charcoal/gold; Stage 2 3D proof of concept.

## D14. Prisma 6.19.3 instead of Prisma 7 / 8 RC

- **Status:** Accepted
- **Decision:** Pin `prisma` and `@prisma/client` to **6.19.3**. Prisma 8 on npm was an RC. Prisma 7.10 requires driver adapters (`pg` + `@prisma/adapter-pg`) that we do not need yet.
- **Reason:** Owner rule: stable, production-ready ORM; no prerelease without a recorded reason.

## D15. Custom Steam OpenID routes, not Auth.js

- **Status:** Accepted for this implementation
- **Decision:** `GET /api/auth/steam` and `GET /api/auth/steam/callback` implement OpenID 2.0 with HMAC login state, server-side `check_authentication`, and HttpOnly `SameSite=Strict` session cookies. Tokens are stored as SHA-256 hashes.
- **Reason:** The owner specified those API paths. SteamID is never read from a browser form field.

## D16. Rank labels: Rank 1–10 with original names

- **Status:** Accepted (titles updated 2026-10-12)
- **Decision:** New users start at Rank 1 (Recruit), FREE, ACTIVE, 1000 rating. Rank 10 is A.C.E. Legend. Names are original to A.C.E., not a copy of another ladder. Gallery copy for three divisions / 30 levels is visual structure only; the rating engine still maps a single Elo integer onto ten floors.

## D17. Rank presentation palettes

- **Status:** Accepted
- **Decision:** Rank gallery cards use official material palettes (chromium through celestial gold) as CSS, not as purchased assets. Homepage player-card Elo/season figures are mock layout, not live stats.

## D18. Campaign neon-orange and cyber-footer

- **Status:** Accepted
- **Decision:** Orange accents are not used. Client download uses graphite with a gold glow frame. Footer destinations that are not built yet route to `/preview/[slug]`. Concurrent-player counts are launch-accurate zeros. PLAY NOW is planned, not live matchmaking.

## D19. Radiant gold cinematic layer

- **Status:** Accepted
- **Decision:** Radiant gold highlights use `#FFF000` / `#FFD700` on pitch carbon `#020203`. Operative silhouettes and loot cards are original CSS/SVG templates, not Valve art or real skin inventory. Checkouts stay simulated.

## D20. CS2 exclusive public catalog

- **Status:** Accepted
- **Decision:** The public Games footer lists only Counter-Strike 2 (Exclusive League). Other titles are not shown as hubs. Operative arena art stays original CSS/SVG with CT/T labels, not Valve models. Community rail news and skin prizes are mock layout.

## D21. Stage 2 Prisma relational core (2026-10-13)

- **Status:** Accepted
- **Decision:** Keep Prisma **6.19.3** on PostgreSQL. User / Team gain the Stage 2 competition columns (`clanTag`, `captainId`, `combinedWinRate`, `activeStreak`, `MatchHistory`). Steam accounts keep `email` optional-and-unique because OpenID does not always supply an address. `AccountStatus` still includes legacy `TEMP_BANNED` / `PERM_BANNED` / `UNDER_REVIEW` so eligibility fail-closed paths do not break. Existing `Match` (tournament bracket) stays; `MatchHistory` is the MR12 score log table.
- **Reason:** Owner asked for the relational tables now. Required email or dropping legacy ban enums would break Steam upsert and server eligibility.
- **Alternatives:** Wipe the existing schema and start over (rejected: would break sessions, teams, and tournaments).

## D22. Prisma client singleton at `src/lib/prisma.ts`

- **Status:** Accepted
- **Decision:** One `PrismaClient` lives in `src/lib/prisma.ts` and is reused on `globalThis` outside production. `src/server/db.ts` re-exports that same instance as `prisma` and `getPrisma()` so existing server modules do not open a second pool.
- **Reason:** Next.js hot reload would otherwise spawn extra connections.

## D23. Local Postgres URL and future `migrate dev` (do not run yet)

- **Status:** Accepted
- **Decision:** Local development uses `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ace_db?schema=public"` in gitignored `.env`. The live migrate command is **not** executed in this step. No paid hosted database is authorized.
- **Reason:** Owner asked to provision the connection string and write the operator brief before any physical Docker/Postgres container is started.

### Deployment brief — run this only after local Postgres is up

Work from `ace-platform/` (the Next.js app root). Prisma 6.19.3 is already pinned.

1. Start a local PostgreSQL 16 (or current stable) service. Docker example:

```bash
docker run --name ace-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ace_db -p 5432:5432 -d postgres:16
```

2. Confirm `.env` contains the local URL above. Do not commit `.env`.
3. Confirm the query engine is unlocked (stop `npm run dev` if `npx prisma generate` hits Windows `EPERM` on `query_engine-windows.dll.node`).
4. When the container is healthy, create/apply migrations from the current `schema.prisma`:

```bash
npx prisma migrate dev --name init
```

That command compares `prisma/schema.prisma` to the database, writes SQL under `prisma/migrations/`, applies it to `ace_db`, and regenerates `@prisma/client`.

**Existing history:** this repo already has `20261012120000_init`, `20261013010000_stage2_profile_mr12`, and `20261013020000_stage2_relational_core`. On a new empty `ace_db`, `migrate dev --name init` will apply those pending folders first. It only creates another named `init` folder if the schema still differs from the last migration. If you only need to apply what is already written, use `npx prisma migrate deploy` instead.

5. Optional sanity check after migrate: `npx prisma validate` then `npx prisma generate`.
6. Do not point `DATABASE_URL` at a paid cloud Postgres without explicit owner authorization.

## D24. Admin command suite is a labeled layout, not live staff tools

- **Status:** Accepted
- **Decision:** `/admin/dashboard` is a conceptual operator layout. Steam disconnect, HWID ban, and VOD review stay client-side mocks. They do not query Prisma users, revoke Steam sessions, collect hardware hashes, or write `BanRecord`. Staff-role APIs remain Stage 10.
- **Reason:** SECURITY.md requires server authorization for real moderation. Shipping a public “root access” page that mutates accounts would be unsafe and dishonest.
- **Alternatives:** Gate the route behind any Steam session (would still not prove staff). Build Stage 10 staff APIs now (out of this task).
- **Verify later:** Stage 10 role bootstrap, MFA, and audit logs before any real disconnect or ban action.

## D25. Public 18-locale dictionaries vs admin English/Hebrew only

- **Status:** Accepted
- **Decision:** Public routes (home, tournaments, shop, teams, rules, support, contact) use a complete `MessageBag` per locale under `src/lib/i18n/{locale}.ts` for all 18 `SITE_LOCALES`. There is no English-spread `bag()` and no overlay shortcut. Hebrew, Arabic, and Egyptian Arabic set `dir="rtl"`. The admin command suite uses `@/lib/admin-i18n` only: `he` renders professional Hebrew with RTL on `.ace-admin-shell`; every other locale, including Arabic, falls back to English LTR. Admin keys are never added to the public `MessageBag`.
- **Reason:** Staff chrome must stay a two-language production surface. Mapping the other 16 public flags into admin copy would mix operator English with visitor Arabic and break the required fallback.
- **Alternatives:** Reuse the public dictionary for admin (rejected — Arabic would localize staff chrome). Hardcode English-only admin (rejected — Hebrew staff layout is required).
- **Verify later:** Flag switch on `/shop`, `/teams`, `/tournaments`, `/rules`, `/support`, `/contact`, and home remirrors chrome. Hebrew admin is RTL Hebrew. Arabic public is RTL Arabic while `/admin/dashboard` stays English LTR.

## D26. Admin operator gate is an environment check, not a password in source

- **Status:** Accepted
- **Decision:** `/admin/dashboard` stays closed until a server action matches `ACE_ADMIN_USERNAME` and `ACE_ADMIN_PASSWORD` from the environment and sets an httpOnly cookie. The password is never written into client code, git, or `.env.example`. Inventory edits, VOD playback, and the hardware form remain console state. They do not write Prisma, revoke Steam, collect HWID, or run anti-cheat.
- **Reason:** A client-side password string would ship in the JavaScript bundle. SECURITY.md forbids secrets in source and requires the real check on the server.
- **Alternatives:** Hardcode the owner password in the browser (rejected). Treat any Steam session as staff (rejected — that is not an admin role).
- **Verify later:** Stage 10 staff roles, MFA, and an audit log replace this single shared gate.

## D27. Admin counters and co-pilot are zeroed console staging

- **Status:** Accepted
- **Decision:** The command-center revenue counter starts at `$0.00 USD` and stays there until a real billing pipeline exists. Enrollment, online players, and regional match servers render as zero. The co-pilot ticker is a simulated gold readout, labeled `SIMULATED CORE`. Player dossier hashes, dates, and latency lines are layout samples. A console HWID mark changes the row status only.
- **Reason:** Honest-claims rules forbid a working AI anti-cheat, live billing, live match servers, or hardware collection. The previous `$142,590.00` and `12,492` figures read as live totals.
- **Alternatives:** Keep the large cash figure as “display revenue” (rejected — it still looked funded). Wire the co-pilot to an external model (rejected — no spend, and it would imply a live security engine).
- **Verify later:** Replace the zero counters when checkout and presence are actually connected.

## D28. Admin, teams, and tournaments read Prisma rows

- **Status:** Accepted
- **Decision:** The operator directory uses `prisma.user.findMany()` and `prisma.user.count()`. Online is the count of unexpired, unrevoked sessions. Gross subscription revenue stays `$0.00` because there is no billing ledger. Disconnect sets `steamId` to null. Premium, rank 10, and rating 3000 are real column updates. Reset returns rank, rating, wins, losses, and tier to schema defaults and clears that user’s rating history plus captain streaks. Team pages use `team.findMany` with `members.user`, which is the roster relation. There is no `Team.users` field.
- **Reason:** Stage 3 already created these columns. Inventing revenue from list prices would claim money that was never charged. A second Prisma client at a new path would fight the existing singleton.
- **Alternatives:** Leave the six sample admin rows (rejected for this request). Multiply Plus and Premium counts by $4 and $7 (rejected — checkout is not live).
- **Verify later:** Staff roles in Stage 10 should replace the shared operator cookie before these updates are treated as moderation.

## D29. Admin falls back to five staging profiles when PostgreSQL is down

- **Status:** Accepted
- **Decision:** If the user query throws, `/admin/dashboard` renders five in-memory staging profiles instead of an empty “Database unavailable” table. Enrollment then reads “5 Verified Profiles (Staging Mode)”. That phrase is a staging label, not an identity check. Online stays 0 and gross stays `$0.00`. The four inventory buttons mutate that list in the browser and do not call Prisma. A successful database response replaces the staging list.
- **Reason:** The local PostgreSQL server was not running, so the command center could not show or edit rows.
- **Alternatives:** Leave the unavailable empty state (rejected for this preview). Insert the five names into PostgreSQL (rejected — the engine is down, and those rows would look like real accounts).
- **Verify later:** Drop the fallback after `prisma migrate deploy` succeeds and the directory lists real `User` rows.

## D30. Tournament bracket is a dual-wing 128-slot tree

- **Status:** Accepted
- **Decision:** `/tournaments` draws a mirrored bracket. Each wing runs R128, R64, R32, R16, quarter-finals, and semi-finals into a center champion stage. The first round has 100 competitor slots and 28 bye slots labeled “[BYE - ADVANCED TO ROUND 2]”. Stored teams fill those competitor slots. Empty slots stay open. Series scores stay at 0 until a match exists. Round of 16 is included so each wing produces one finalist.
- **Reason:** A 128-slot tree cannot reach one finalist per side if quarter-finals follow the round of 32 directly. Inventing 100 clan names would look like a checked-in field.
- **Alternatives:** Keep the vertical pyramid (rejected for this layout). Fill all 100 slots with sample clan names (rejected — those are not stored teams).
- **Verify later:** When matches are recorded, replace the open later rounds with the stored winners.

## D31. Empty bracket slots use staging clan names

- **Status:** Accepted
- **Decision:** When fewer than 100 clans are stored, the remaining competitor slots use a fixed list of staging names, starting with NEXsus Clan, Shadow Legion, Vault 1 Esports, Northline Prime, Alpha Tactical, Viper Squad, Sable Matrix, and Titan Force. The page says those names are not a checked-in field. Bye slots read “👑 [BYE - ROUND 2 SEEDED]”. Stored clans still occupy slots first. Connector cores are 4px gold with a wider glow. Series scores stay at 0.
- **Reason:** Open-slot text left the first round looking blank while PostgreSQL was down. The names are a layout list so the nodes and roster drawer can be reviewed.
- **Alternatives:** Leave every unfilled slot as “Open slot” (rejected for this preview). Treat the 100 names as registered entrants (rejected — they are not in the database).
- **Verify later:** Hide staging names once 100 real teams exist.

## D32. Tournament by-laws are published text, not a live rules engine

- **Status:** Accepted
- **Decision:** `/tournaments` prints a four-chapter rulebook under the bracket. It states the 100-team / 128-slot math, the 28 highest-rating Round 1 byes, the 72-team Round 1, the 15-minute attendance forfeit, the future client check, and final authority over protests. The same chapters state that lobbies, anti-cheat, automated forfeits, biometrics, hardware collection, and funded prizes are not connected. The English block stays left-to-right.
- **Reason:** The field size had to be written down without claiming a live competition client. Honest-claims rules forbid a working anti-cheat, live servers, and real prizes.
- **Alternatives:** Publish the forfeit and biometric lines with no limit (rejected — they would read as systems that are running). Omit the rulebook (rejected for this request).
- **Verify later:** When a real match client exists, replace the “not connected” lines with the checks that client actually performs.

## D33. The tournament page is branded as a 100-team knockout

- **Status:** Accepted
- **Decision:** Visible tournament titles, the format chip, the operations brief, and the graph heading say 100-team. They do not say “128-slot.” The regulation block under the graph is three clauses: attendance forfeit, device suspension, and director authority. Each clause states that lobbies, anti-cheat, device checks, and automated forfeits are not connected. The opening-round column is labeled R1. Its internal id stays r128 so the lasers still join the same fixtures.
- **Reason:** The public identity of the event is 100 teams. The opening round still has spare positions for byes. Showing “128” in the column read as the event size.
- **Alternatives:** Keep “128-slot” in the page title (rejected for this request). Leave the column labeled R128 (rejected — that number was the branding being removed).
- **Verify later:** If a later round is renamed, keep its laser id stable and change only the visible label.

## D34. Contact email is saved, not verified, and no ticket mail is sent

- **Status:** Accepted
- **Decision:** `User.email` stays a unique optional address. The profile form writes it only for the signed-in account. The championship ticket HTML is a black-and-gold staging template, and `dispatchChampionshipTickets` returns zero sends because no mail provider is connected. The rulebook’s two clauses describe contact mail and a lucky-loser lobby rule, and both say those steps are not running. The graph remains the 100-team layout.
- **Reason:** A 500-message send would claim a finished field and would need a mail provider. Biometric and anti-cheat instructions cannot be written as if those systems exist.
- **Alternatives:** Call Resend or SendGrid when the 100th name is filled (rejected — no provider, and the names are staging). Relabel the bracket as 64 teams (rejected — the published field is 100).
- **Verify later:** Add a confirmation message only after an explicit mail provider is chosen and the owner approves any cost.

## D35. Shop cards, the cookie banner, and the footer stay honest

- **Status:** Accepted
- **Decision:** The three weapon cards are gold 3D prize examples named Butterfly Knife | Lore, M4A1-S | Welcome to the Jungle, and Karambit | Lore. The page still says they are not Valve items and that checkout does not charge a card. The cookie banner stores cookie choices only. The footer notice says showcases have no cash value and that opening the site does not waive a lawsuit or trigger a hardware ban.
- **Reason:** A cookie click is not a signature, kernel anti-cheat is not running, and this website does not collect a hardware identifier or delete accounts for contacting a court.
- **Alternatives:** Publish the requested signature, queue lock, and hardware-ban sentences (rejected). Remove the “not a Valve item” line (rejected).
- **Verify later:** If a real prize is ever funded, replace the example label only after the owner approves the cost and the item source.

## D36. Server tiles and anti-cheat lines stay labeled as unconnected

- **Status:** Accepted
- **Decision:** The home hub shows Frankfurt, Stockholm, and Tel Aviv as layout samples. The telemetry lines say the kernel is not connected, no hardware identifier is collected, and no client is installed. The download tile says the desktop client is not offered. Gold styling does not change those facts.
- **Reason:** A.C.E. has no live game server, no 128-tick fleet, and no kernel or hardware-ban client.
- **Alternatives:** Publish “100% operational,” Ring-0, and hardware-ban copy (rejected).
- **Verify later:** Replace a tile’s latency only when a real server reports it.

## D37. The home vault and top-five board stay layout samples

- **Status:** Accepted
- **Decision:** The loot card is a gold vault layout with a countdown clock. The top five keeps showcase names unless a stored account fills a seat. Gauges draw the printed sample figures. Both blocks say the drop is not live and the figures are not a season result.
- **Reason:** There is no funded drop, no Steam item delivery, and no live ranked table of professional players.
- **Alternatives:** Label the vault “weekly drops live” and replace showcase names with known competitors (rejected).
- **Verify later:** Fill a seat from a stored account only, and leave K/D blank until that stat exists.

## D38. Home identity, shield, season, and stats stay account-backed

- **Status:** Accepted
- **Decision:** The identity card shows a stored rating only after Steam sign-in. Placement nodes count stored wins and losses. The shield says the AI client is not deployed and neural analysis is not running. The season crest is a layout medal. Stats show stored wins and losses, or zero, and K/D stays unavailable.
- **Reason:** There is no live anti-cheat model, no season clock, and no invented match record.
- **Alternatives:** Print 1,500 RP, 3/10 placements, “fully deployed” AI, and 14 matches at 64% (rejected).
- **Verify later:** Show a placement count above zero only when the account has stored wins or losses.

## D39. The home match frame is a closed-queue layout

- **Status:** Accepted
- **Decision:** The 5v5 frame uses layout callsigns, a looping clock, and a gold Find Competitive Match button. The button click states that no server opens. The map line says Dust II is a plate and that no 128-tick server exists. The identity rows say mail is not sent, no kernel check runs, and no telemetry stream is connected.
- **Reason:** Ranked matchmaking, kernel checks, and match-ticket mail are not running.
- **Alternatives:** Label Dust II as a live 128Hz node and treat the button as a real queue (rejected).
- **Verify later:** Enable the button only when a real queue exists and the owner has approved that service.

## D40. The rank board describes Elo and does not apply a match

- **Status:** Accepted
- **Decision:** The home rank panel states the written rule: a recorded result moves rating by a factor of 32 against the other team’s average, across 10 tiers and 3 divisions. The open page does not apply that update. An unsigned visitor sees the selected tier floor. A signed-in visitor sees the stored account rating. No last-match gain is printed.
- **Reason:** This page has no match to validate. A fixed +15 to +30 band is not the formula in `src/lib/rating.ts`.
- **Alternatives:** Show 2,100 RP and +25 from a secured handshake (rejected).
- **Verify later:** Show a gain only from a stored `RatingHistory` row after a verified match result.

## D41. The home hero and lobby charter stay within what the site runs

- **Status:** Accepted
- **Decision:** The hero says Steam OpenID is the sign-in and that anti-cheat, match servers, and prizes are not running. The five chips read Steam OpenID, Not connected, Written rule, 100-team layout, and Public site. The lobby header names the dispatch center and says it does not assign a server. The three tiles say the queue is closed, the rank table does not apply a match, and skin cards are examples.
- **Reason:** Ring-0 anti-cheat, live servers, a live 64-squad bracket, and verified skin drops are not on this website.
- **Alternatives:** Publish the requested operational sentences (rejected).
- **Verify later:** Change a chip to a live status only after that system is actually connected.

## D42. The public home uses a competitive landing rhythm in A.C.E. colors

- **Status:** Accepted
- **Decision:** The home hero is a large original promise, a side lobby plate, a solid gold Steam OpenID button, and five path cards. Later home blocks sit in a 76rem column. No third-party platform branding, orange accents or invented live player counts are used.
- **Reason:** The owner asked for the clarity and scale of a competitive homepage while keeping the gold and charcoal identity already on the site.
- **Alternatives:** Copy another platform's light canvas and orange brand (rejected).

## D43. The home opens with an original film, then a dark broadcast desk

- **Status:** Accepted
- **Decision:** Entering the home page plays a short original gold-on-charcoal film, then shows A.C.E. and the full brand sentence as the centered title. The watch desk loops an original standby plate and says no match is on air.
- **Reason:** The owner asked for an opening video and a live tournament picture. Real tournament footage is not ours to embed, and no match is being played on this site.
- **Alternatives:** Embed third-party live matches (rejected).

## D44. Navigation stays usable, and public boards stay labeled

- **Status:** Accepted
- **Decision:** The opening film does not block the header. Connect Profile goes to Steam OpenID or a clear sign-in page. The public board shows five showcase seats with original names, not stored accounts and not real competitors. The news line names the 100-team field without saying it is live. The footer notice stays an honest platform notice. Play adds a map veto that does not start a server.
- **Reason:** A full-screen film was covering the menu. Fake pro names, a live ladder, and a lawsuit-immunity clause would misstate what the site does.
- **Alternatives:** Publish the requested immunity paragraph and pro-player names (rejected).

## D45. Home stays a lobby, and plates stay original

- **Status:** Accepted
- **Decision:** Prize and server blocks moved off the home page into Shop and Features. The watch desk rotates original plates. The play page is a map veto plus the 5v5 frame, and it does not start a server. Languages sit in a header menu. The leaderboard keeps five showcase names and does not claim live rating math.
- **Reason:** The home page was a stack of every system, the lobby image file was empty, and the requested leaderboard sentence described a live network that is not running.
- **Alternatives:** Embed Valve match video and publish the real-time leaderboard sentence (rejected).

## D46. Home depth, Steam press color, example prize row

- **Status:** Accepted
- **Decision:** The home hero, rank marks, identity cards, and footer use deeper gold slabs. Pressing the Steam button switches it to Steam navy `#1b2838` and link blue `#66c0f4`. Rank portraits keep original A.C.E. emblems and gain a level number. An example prize row is on the home again. Those cards are original shapes, not Valve skin renders, and they are not paid prizes.
- **Reason:** The owner asked for a more professional 3D home, a Steam-colored button, a rank strip, the prize category back, and a tighter footer.
- **Alternatives:** Copy third-party level art or generate Valve weapon skins (rejected).

## D47. Map plates match the name, and the veto does not open a server

- **Status:** Accepted
- **Decision:** Each veto map uses its own original plate. Declining a map shows a notice. When one map remains, a dialog says the 5v5 roster is a layout. No server address is sent and no player is connected.
- **Reason:** The plates were reused across names, and a live connect string would claim a match server that is not running.
- **Alternatives:** Send a server IP and auto-join Counter-Strike 2 (rejected).

## D48. Dashboard cards stay honest

- **Status:** Accepted
- **Decision:** The home logo has a deeper gold extrusion. The Steam button turns Steam black `#171a21` when pressed. The broadcast desk shows the seven competitive map plates. The four home cards keep the sentences that say rating, anti-cheat, the season clock, and match stats are not running.
- **Reason:** The requested 1,500 RP, 3 of 10 placements, deployed AI, and 14 matches / 64% / 1.28 K/D would describe stored results and a live model that do not exist.
- **Alternatives:** Delete the limit sentences and print those figures as live (rejected).

## D49. Steam OpenID is verified with Valve, not a local signature guess

- **Status:** Accepted
- **Decision:** Sign-in starts at `/api/auth/steam`, which redirects to `https://steamcommunity.com/openid/login` with `return_to` on this site's callback. The callback accepts a SteamID64 only after Valve answers `check_authentication` with a line that is exactly `is_valid:true`, the claimed id matches Steam's host, and `return_to` is this site's callback. A new row is `FREE` with the stored starting rating of 1000 and zero wins and losses. Persona name and avatar are filled only when `STEAM_API_KEY` is set; otherwise the name is `Player` plus the last four digits and the avatar stays empty. Failures redirect to `/login-error` with a fixed reason code.
- **Reason:** The owner asked for the official Valve OpenID flow, a Prisma upsert, and a page that stays up when Steam does not answer.
- **Alternatives:** Treat any body containing the text `is_valid:true` as proof, or store a Steam password (rejected).

## D50. Home depth stays visual; live claims stay out

- **Status:** Accepted
- **Decision:** The Steam button rests on `#171a21` and grows a pulsing gold edge on hover. The hero panel tilts with the pointer. The four home cards stay on `#040406` with a gold edge, the season hex spins, and the stat bars rise in. The sentences that say anti-cheat, match servers, prizes, rating, placements, and match stats are not running stay on the page. Stored rating for a new account remains 1000 with zero wins and losses.
- **Reason:** The requested replacement copy claimed a Ring-0 client, a live matchmaker, 1,500 RP, 3 of 10 placements, a deployed model, and 14 matches at 64% / 1.28 K/D. None of those are stored or running.
- **Alternatives:** Delete the limit sentences and print those figures as live (rejected).

## D51. Entrance logo stays complete, and the Ring-0 line stays out

- **Status:** Accepted
- **Decision:** The entrance logo is capped at 650px wide and 400px tall, shown in full. The Steam button spans the sign-in column. The sentence under the logo still says anti-cheat, match servers, and prize payouts are not running.
- **Reason:** The requested replacement claimed a connected Ring-0 client and a live global matchmaker. Those systems are not running.
- **Alternatives:** Print “Ring-0 anti-cheat client execution keys and global matchmaker vectors fully operational” (rejected).

## D52. Entrance logo is widescreen; the Ring-0 line stays out

- **Status:** Accepted
- **Decision:** The entrance poster fills the card width and is capped at 350px tall, with `object-fit: cover`, so the frame is wide and the height does not grow. The sentence under it still says anti-cheat, match servers, and prize payouts are not running.
- **Reason:** The owner asked to open the square logo sideways without letting it take the screen. The replacement sentence claimed a connected Ring-0 client and a live global matchmaker. Those systems are not running.
- **Alternatives:** Print “Ring-0 anti-cheat client execution keys and global matchmaker vectors fully operational” (rejected).

## D53. Entrance logo returns to a small complete square

- **Status:** Accepted
- **Decision:** The entrance card is a centered column, `min(100%, 34rem)`. The poster fills that card and stays complete with `object-fit: contain`. Steam sits full width under the copy, and HOW IT WORKS sits centered beneath it.
- **Reason:** The owner rejected the widescreen crop and asked for the whole poster, smaller, in the center.
- **Alternatives:** Keep the wide `object-fit: cover` frame (rejected).

## D54. Competitive board stays a labeled showcase

- **Status:** Accepted
- **Decision:** The public board is ten showcase rows in an obsidian glass frame. Each empty seat stays marked Showcase. A stored Steam account replaces those seats. Country on a showcase seat is a sample.
- **Reason:** The requested subtitle claimed live match validation and telemetry. The requested names were known players, with ratings above 4,900 RP and a verified badge. None of that is stored.
- **Alternatives:** Print those names, ratings, and the Season 1 telemetry sentence as the official roster (rejected).

## How to add a decision

Append `D17`, `D18`, … with status, decision, reason, alternatives, and verify-later notes.
