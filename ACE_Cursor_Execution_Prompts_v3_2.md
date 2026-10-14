# A.C.E. — פקודות ביצוע ל-Cursor (גרסה 3.2)

קובץ זה מכיל פקודה נפרדת לכל שלב. מסמך האב `ACE_Master_Plan_v3_2.md` הוא מקור האמת לגבי דרישות המוצר. יש לבצע רק שלב אחד בכל פעם.

## הוראות קבועות לכל השלבים

- פתח את הפרויקט הנכון ובדוק את המבנה לפני שינוי קבצים.
- קרא את `ACE_Master_Plan_v3_2.md` ואת `.cursor/rules/ace-project.mdc` אם הוא קיים.
- בצע רק את השלב שהתבקש; אל תתחיל שלבים עתידיים.
- אל תיצור חשבון demo/seed אוטומטי בשם NEXsus ואל תקבע את השם בקוד. **אל תחסום את הכינוי NEXsus**: אם בעליו מתחבר לחשבון Steam אמיתי ומאומת, יש להציג את שמו המאומת כרגיל. נתוני demo יהיו גנריים ומסומנים כ-demo.
- אל תציג נתוני דמה כנתונים חיים.
- אל תטען שיכולת חיצונית עובדת לפני שיש credentials, אינטגרציה ובדיקות אמיתיות.
- אל תשתמש בנכסי CS2 רשמיים בלי בדיקת זכויות מתאימה; השתמש בנכסים מקוריים או מורשים.
- שמור secrets מחוץ לקוד ומחוץ ל-Git.
- אל תריץ פקודות הרסניות או paid-service setup בלי אישור מפורש.
- לאחר מימוש: הרץ בדיקות מתאימות, דווח תוצאות אמיתיות, תן הוראות בדיקה ידנית בעברית ועצור לאישור.

### פקודת סיום אחידה

After completing the current stage, do not start the next stage. Run the relevant lint, type checks, unit tests, integration tests, and production build that exist in the project. Fix regressions introduced by this stage. Report changed files, actual commands and outcomes, manual checks still needed, external credentials or assets required, and known risks. Explain the result in Hebrew and wait for my explicit approval before continuing.

---

# Stage 0 — Preflight, project setup, documentation, Git

Read `ACE_Master_Plan_v3_2.md` fully. Inspect the current workspace before doing anything.

If the workspace already contains a project, identify its framework, package manager, scripts, Git status, and existing files. Do not overwrite or replace it.

If the workspace is empty and has no `package.json`, explain that a Next.js app scaffold is needed, then create it using the official current stable Next.js setup flow with TypeScript, Tailwind CSS, and App Router. Use the package manager already present if a project exists; do not change package managers without reason. Do not install database, auth, 3D, payment, or game-server integrations yet.

Create or update:
- `README.md` with simple local run/test/build instructions.
- `docs/PRODUCT_SPEC.md` as a concise summary derived from the master specification, not a competing full copy.
- `docs/ARCHITECTURE.md` describing intended modules and boundaries.
- `docs/ROADMAP.md` with stages 0–18.
- `docs/SECURITY.md` with the security requirements.
- `docs/DECISIONS.md` with current technology choices and open decisions.
- `.cursor/rules/ace-project.mdc` with valid MDC frontmatter and persistent project rules. Follow https://cursor.com/docs/context/rules.
- `.gitignore` protection for secrets, local environment files, build output, caches, and user-generated private data.

Do not create another full copy of `ACE_Master_Plan_v3_2.md` or `ACE_Cursor_Execution_Prompts_v3_2.md` inside `docs/`.

If Git is not initialized, initialize it only after confirming the folder is the intended project folder and no existing repository will be overwritten. Never delete existing files to make setup easier.

Deliver a Hebrew summary, list files created/changed, state whether a Next.js app is ready, report checks actually run, and stop.

---

# Stage 1 — Design system and public website

Read the master spec and current rules. Build the first polished responsive public A.C.E. website using the existing Next.js App Router, TypeScript, and Tailwind CSS.

Implement a shared design system for matte charcoal black and luminous metallic gold. Use reusable tokens/components for colors, typography, borders, panels, buttons, focus states, and restrained motion. The visual style must look like a premium competitive CS2 platform, not a generic dashboard template.

Create:
- `/` homepage explaining A.C.E.
- `/features` overview, clearly distinguishing current features from planned features.
- `/pricing` with Free, Plus ($3.99 proposal), Premium ($6.99 proposal), clearly labeled as proposed prices with no checkout.
- `/rules` containing original preliminary tournament rules clearly marked as a draft.
- shared navigation, footer, responsive mobile layout, accessible focus/keyboard behavior, appropriate metadata and not-found/error states.

Do not build authentication, database access, real payments, live player stats, fake matchmaking, fake Anti-Cheat status, fake countdowns, or fake tournament data. Buttons without implementation must be clearly disabled/marked as planned, not dead controls that imply functionality.

Run relevant checks and stop.

---

# Stage 2 — Early 3D proof of concept (mandatory design checkpoint)

This is a feasibility stage, not a full 3D asset production stage. Inspect the existing app and choose the smallest compatible, maintained Three.js-based approach, such as React Three Fiber, only after checking compatibility with the existing Next.js version. Load the 3D canvas client-side only when needed.

Implement a proof of concept containing:
1. One original/licensed 3D rank emblem with metallic PBR-style materials and controlled gold illumination.
2. One original/licensed tactical operator model behind a clearly separate player-photo placeholder.
3. Mouse and touch drag to rotate the emblem through 360 degrees.
4. A reset rotation action, loading state, error fallback, static poster fallback, and support for reduced-motion preferences.
5. Lazy loading and basic measurements of loading time and render performance.

If no suitable GLB/glTF assets exist, do not pretend to generate professional models. Use a clearly labeled temporary procedural/geometric prototype or approved placeholder, document the exact assets needed, and ask the owner to provide or approve source assets before full asset integration.

Do not use official CS2 character models or extracted game assets unless rights/terms have been checked. Use original tactical-operator artwork or properly licensed assets by default.

Do not build all ten ranks or all ten operators yet. Provide screenshots and explain what works versus what requires external assets. Stop for visual approval before proceeding.

---

# Stage 3 — Database foundation

Inspect the current code, then set up PostgreSQL and a stable compatible Prisma ORM version. Do not invent credentials or connect to a paid service without approval.

Design normalized relational models for User, UserSession, Team, TeamMember, TeamInvitation, Party, PartyMember, Tournament, TournamentEntry, Match, MatchPlayer, RatingHistory, Season, VerificationRecord, Report, BanRecord, Appeal, Subscription, AuditLog, and other essential entities only where justified.

Requirements:
- Unique internal IDs and unique verified SteamID when linked.
- Explicit roles and account status.
- Relations, indexes, uniqueness constraints, timestamps, and transaction boundaries.
- Separate audit/history records for important state changes.
- Versioned rank/rating configuration.
- Never seed a default/demo user named NEXsus; do not block the username. A real, authenticated Steam user may use NEXsus if this is their verified account/display name.
- Seed data must be generic, fake, and clearly development-only.
- Secret-free `.env.example`; exclude `.env*` from Git.

Provide migration and reset instructions. Never reset/drop a database with valuable data without explicit approval. Test schema and migration behavior, report what requires a real PostgreSQL connection, and stop.

---

# Stage 4 — Steam sign-in and secure sessions

Implement Steam browser authentication using the current supported documented flow and server-side verification. Reference https://steamcommunity.com/dev.

Requirements:
- Never ask for or store Steam passwords.
- Validate the authentication callback, provider, response fields and state/anti-forgery protections.
- Derive SteamID only from a verified response, never from an untrusted browser field.
- Create or link a user safely using unique constraints and transactions.
- Use secure server-managed sessions and appropriate HttpOnly/Secure/SameSite cookies.
- Do not store session bearer tokens in localStorage.
- Implement logout, expiry, revocation, protected routes, useful error states and rate limits.
- Never create a seeded/default NEXsus account. Do not block that display name for a real authenticated account.
- Use a test/mock adapter when external authentication cannot be run in automated tests, and clearly mark the integration as incomplete until tested with real configuration.

Test invalid callbacks, unauthenticated protected routes, duplicate login/linking, logout and expiry. Stop.

---

# Stage 5 — Email, SMS and identity verification

Design a provider-based verification service for email OTP, SMS OTP, and liveness/identity verification. Do not write facial recognition or liveness detection from scratch. Do not purchase or activate paid providers without authorization.

Requirements:
- Use test/sandbox mode until credentials are supplied.
- Rate-limit OTP requests and attempts, expire codes, prevent replay, protect against account enumeration, and never log codes.
- Store verification state and provider reference, with minimal sensitive data.
- Require explicit consent and provide a clear explanation before biometric checks.
- Avoid storing raw biometric files/templates on A.C.E. servers by default.
- Plan retention/deletion, failed verification, manual review and appeals.
- Ranked/tournament eligibility must read verification status from the server.
- Public browsing can remain available, but the product's defined protected competitive activities must enforce the required verification gates.
- Never show a green verified badge when the provider has not confirmed verification.

Write integration and privacy limitations, test rate limits/expiry/state transitions using mocks, and stop for owner review of provider and privacy choices.

---

# Stage 6 — Player profiles and photo moderation

Build player profiles using verified account data and controlled display-name editing if permitted by the product rules. Display the player's chosen/verified human portrait separately from the tactical operator model.

Implement:
- Profile summary, region/preferences, season and career stats when available, rank slot, match history, achievements and privacy settings.
- Image upload validation: file type, size, dimensions, safe storage, access control and deletion.
- Moderation/report flow for images that violate the product's stated policy (such as animals/logos if the policy requires human portrait images).
- Clear user-facing rules, rejection reason and appeal/review route.
- Do not claim automated image classification is reliable without tests and review.
- Prevent private verification documents and biometric data from being served as public avatars.
- Use generic demo profiles; never seed NEXsus as a demo/default user. Do not block the name NEXsus for the owner’s real, authenticated account.

Add tests for invalid uploads, unauthorized profile edits and deletion/privacy rules. Stop.

---

# Stage 7 — Teams and premium Party Lobby

Implement teams and parties as server-authoritative features. A ranked CS2 team roster has five players, with one captain.

Lobby design:
- One central captain card, with four teammate slots for invitations.
- Each player card has a player portrait in front and a tactical 3D operator render behind it.
- The captain card has a stronger, tasteful gold spotlight and crown marker, without obstructing other players.
- Show verified display name, rank emblem, division and actual status/ping only when real data exists.
- Private/public lobby option, invite/search flows, accept/decline, leave party, transfer captain, remove member with permission checks, and chat only if a safe messaging implementation is in scope.
- Use responsive layouts. On devices that cannot render 3D, use an optimized static fallback.
- Do not load all full-detail operator assets eagerly; use lazy loading, texture/model budgets, and reduced-motion/accessibility options.
- Do not use official CS2 assets without confirmed rights. Use approved original/licensed GLB files.
- Find Match remains disabled until party size, verification and queue requirements are met; show an explanation.

Test permissions, duplicate invites, full party, race conditions, captain changes, disconnected members, missing assets, and fallback behavior. Stop.

---

# Stage 8 — Competitive rating and rank badge system

Implement the ten rank tiers from the master spec, each with III/II/I divisions, and configurable thresholds. Rating must be distinct from cosmetics and Premium.

Requirements:
- Implement a documented Elo-style service with isolated/configurable parameters.
- Only verified match outcomes affect rating.
- Store rating history, before/after values, match reference, algorithm/config version, and reason metadata.
- Do not let client requests edit rating or rank.
- Keep season rank separate from lifetime history.
- Premium does not grant ranking points or matchmaking advantage.
- Create ten distinct visual identities. Do not use the same shield recolored ten times and do not produce cartoon military patches.
- 3D rank assets must be original/licensed, with PBR-style metal/crystal materials, different silhouettes and measured lighting.
- Add 360-degree rotation in the full showcase plus static small-size version.
- Divisions should have distinct but restrained detail variants, not 30 incoherent emblems.
- If production-grade assets are missing, keep an explicit asset manifest and placeholders; do not imply the assets are final.

Test edge cases, idempotency, provisional/placement rating, wins, losses, cancelled/disputed matches and configuration boundaries. Stop.

---

# Stage 9 — Matchmaking prototype

Build a functioning prototype of the matchmaking state machine, but do not claim live CS2 matches or servers exist.

Support states such as idle, searching, match found, accepting, ready check, cancelled, expired and server assigned. Store queue requests server-side. Enforce eligibility/verification, party roster, region, mode, rating range, selected maps and acceptable latency where measured.

MANDATORY ANTI-CHEAT GATE FOR RANKED
- Ranked matchmaking must remain disabled until a real, approved Anti-Cheat integration has been implemented and verified end to end.
- Before adding a user to a ranked queue, the server must validate a current, authenticated Anti-Cheat attestation/session for that user; never trust a browser flag.
- If Anti-Cheat is missing, stopped, outdated, unverified, unavailable, or the handshake/heartbeat fails, return DENY and do not create or launch a ranked match (fail closed).
- In prototype/staging, use a clearly labeled mock only for tests; the actual Ranked button must remain disabled or show that production Anti-Cheat is not yet available.
- Clarify that A.C.E. can gate access to its own ranked queue/managed servers, but cannot globally prevent the user from launching CS2 outside A.C.E.

Requirements:
- Never fabricate live server availability, ping, queue population or countdown.
- Use clearly labeled demo fixtures when no live queue exists.
- Prevent duplicate queue enrollment, queue manipulation, accepting for another user, and invalid client transitions.
- Add cancellation, timeout, reconnect and match-dodge policy hooks, with moderation review before severe penalties.
- Paid tiers must not grant unfair ranked matchmaking priority.
- Build map preferences/vote UI that reflects actual state.

Test concurrent join/cancel, parties, missing verification, timeouts, duplicates and server-side authorization. Stop.

---

# Stage 10 — Matches, results and player stats

Implement the match record and results workflows. An ordinary browser request must not be trusted as proof of a CS2 result.

- Store match participants, teams, map, times, match state, results, source of verification, player stats if authorized, and disputes.
- Permit results through a controlled admin workflow or a genuinely authenticated server adapter.
- Keep previous results when a correction occurs and write an audit log.
- Keep disputed matches from changing rating/tournament progression until resolved.
- Use only real, permitted data sources for CS2 statistics; do not invent a telemetry API.
- Provide post-match screen, history and a clear explanation of rating delta when available.
- Create synthetic fixtures for tests only.

Test duplicate submissions, conflicting results, cancelled matches, corrections, permissions and rating side effects. Stop.

---

# Stage 11 — Tournament engine for up to 100 teams

Build registration, eligibility, documented seeding, single-elimination bracket, scheduling fields, results and disputes.

For 100 entrants, test a 128-slot bracket with 28 byes, 36 played matches in the first round, and 99 actual elimination matches to determine the champion under normal single-elimination rules.

Requirements:
- A team can register only once and needs an eligible roster.
- Close registration before bracket generation.
- Persist bracket seeding and generated matches.
- Each team advances at most once per match; bye advancement is not a fake played match.
- Results must be confirmed by authorized workflow or verified server integration.
- A disputed match cannot silently advance either side.
- Match corrections are audited.
- Responsive bracket UI and accessible match details.
- Real CS2 tournament operation must remain blocked until licensing and operating requirements are reviewed.

Test entrant counts 2, 3, 5, 8, 64, 100 and 128, plus duplicate registration, byes, double advancement, disputes and invalid results. Stop.

---

# Stage 12 — Admin, moderation, bans, appeals and audit

Build a server-protected administration panel for users, teams, tournaments, matches, reports, bans, appeals, subscriptions and audit logs.

Use roles with least privilege. Never create an admin through public registration. Plan secure initial-admin bootstrap and stronger admin MFA.

Ban states: ACTIVE, SUSPENDED, TEMP_BANNED, PERM_BANNED, UNDER_REVIEW. Store history, reason, issuer, start/expiry, evidence references and appeal state. Do not permanently ban solely on an unverified report or AI suspicion. Prevent reviewers from approving their own appeals.

Audit sensitive changes without logging passwords/tokens. Protect report evidence. Rate-limit reporting and prevent harassment/abuse.

Test server authorization for every admin API, role escalation attempts, ban expiry, appeals, audit events and data privacy. Stop.

---

# Stage 13 — Real CS2 server integration checkpoint

Before implementation, research and document current official Valve/Steam terms for third-party matchmaking services, permitted server integration methods, hosting requirements, Anti-Cheat compatibility, and applicable tournament licensing. Do not assume tournament licensing automatically authorizes matchmaking, and do not assume that a web API response can kick a player from a CS2 server. Record any required written permission/approval as a launch blocker.

Build a secure server-to-backend eligibility interface using authenticated server-to-server credentials or signed requests, rotation/revocation and rate limits. Use mock adapter/tests until an actual authorized server adapter is available. Never put server secrets in browser code. Do not claim live server integration until tested on a real configured server.

Only proceed with an actual server after owner approval, licensing/terms checks, cost approval, chosen Anti-Cheat approach, and a test plan. Define the real server-side enforcement path and an authenticated Anti-Cheat handshake before any ranked launch. Do not implement invasive game-memory inspection or kernel drivers here. Stop at any unresolved licensing/access blocker.

---

# Stage 14 — Subscriptions and cosmetic shop

Prepare Free, Plus and Premium entitlement logic with proposed prices $0, $3.99 and $6.99, marked preliminary. Use sandbox only.

- Server is the source of truth for entitlements.
- Use mock/sandbox payment events; never collect real payment in this stage.
- Verify provider webhooks, signatures, event idempotency, refunds, cancellations, expiration and failed payments.
- Never store card data.
- Sell cosmetics, profile frames, 3D badge skins, stat features or customization only where value is real.
- Do not sell rating points, competitive immunity or unfair queue priority.
- Do not promise knife giveaways or enable paid random rewards.
- Do not configure a paid provider or incur fees without explicit authorization.

Test tier authorization and simulated webhook duplicates. Stop.

---

# Stage 15 — Growth features and analytics

Build ethical growth features only after the core lobby/profile flows work:
- Invite links and friend invites with spam/abuse controls.
- Shareable profile/rank achievement cards respecting privacy choices.
- Seasons, missions and achievement tracking based on verified data.
- Opt-in notification preferences and unsubscribe controls.
- Event/landing pages and basic SEO.
- Privacy-minimizing product analytics for activation, retention, queue outcomes, invite conversion, subscriptions, error rates and support burden.
- Do not track sensitive face/biometric data in analytics.
- Do not use dark patterns, fake scarcity, spam or manipulative spending pressure.
- Consider feature flags for gradual rollout and quick disablement of risky features.
- Anti-smurf signals may trigger human review, never an automatic permanent ban on their own.
- Defer localization beyond English, advanced demo analysis, supplier-cost dashboards, and multi-person review workflows until there is validated need and a test plan.
- Do not add queue workers or complex real-time infrastructure without measured load/latency evidence.

Ensure metrics are based on real events and clearly distinguish staging from production. Stop.

---

# Stage 16 — Staging, deployment and operations

Prepare separate development, staging and production environments. Compare hosting/database options and present cost estimates, but do not purchase services or incur charges without approval.

Implement/check:
- HTTPS, secure cookies, security headers and CSP where compatible.
- Secret manager/environment variables and secret redaction.
- Health checks, error tracking and useful logs.
- Rate limits and production error pages.
- Database backup and an actual restore test.
- Rollback plan, migration plan and incident response notes.
- Production build, Lighthouse/performance measurements and accessibility review.
- Monitor 3D bundle sizes, model loading, frame rate and fallback behavior.
- Complete the launch checklist in section 18.1 of the master plan and record evidence for each relevant item.
- Verify support contact, account recovery/deletion workflows, terms/privacy notices, incident response, rollback, and beta success metrics.
- Make a documented GO/NO-GO decision; do not launch with unresolved critical security, privacy, licensing, backup, or payment issues.

Follow current Next.js production guidance: https://nextjs.org/docs/app/getting-started/deploying.

Do not announce that the service is live until deployment is verified. Stop.

---

# Stage 17 — Optional Electron desktop app

Only proceed if there is a validated product reason. Package the existing web app rather than duplicating business logic.

- Use a supported Electron version and maintained builder.
- Disable Node integration in renderer, enable context isolation, use a narrow preload bridge, restrict navigation and external content.
- Do not embed server secrets.
- Test authentication, external links, failure states, packaging and Windows launch.
- Do not add invasive Anti-Cheat features to this task.
- Document code signing/distribution requirements and costs before production release.

Stop.

---

# Stage 18 — Mandatory Anti-Cheat implementation plan and launch gate

This stage is a mandatory launch blocker for A.C.E. ranked matchmaking, not an optional future enhancement. Ranked matches must not be offered or started until a real Anti-Cheat approach is implemented, tested, and approved for the intended CS2 use.

PHASE A — FEASIBILITY AND APPROVAL
- Review current official Steam/Valve terms for third-party matchmaking, server hosting, tournament operation, and anti-cheat compatibility. Do not assume a tournament license automatically permits a third-party matchmaking service.
- Evaluate whether to integrate a maintained third-party Anti-Cheat provider or build a custom client/server solution. Prefer a suitable maintained provider where feasible.
- Assess supported CS2/server integration, Windows compatibility, updates, signing, false positives, privacy, accessibility, incident response, operating cost, and support requirements.
- Identify any Valve/vendor permission, licensing, contractual, legal, or specialist-review requirement. Do not proceed through a blocker by guessing.

PHASE B — IMPLEMENTATION PLAN AFTER EXPLICIT OWNER APPROVAL
- Define an authenticated client-to-backend attestation/session flow, with short-lived match authorization, client/version status, integrity/heartbeat signals where supported, revocation, replay resistance, rate limits, and audit events.
- The backend and the actual A.C.E.-managed CS2 server integration must verify the Anti-Cheat state; a frontend label or a plain API response is not enough.
- If Anti-Cheat is absent, stopped, outdated, unverified, unavailable, or its handshake fails, ranked queue admission and match start must be denied (fail closed). Test this path explicitly.
- Define what happens if Anti-Cheat stops during a match, including safe response, evidence handling, reconnect policy, and appeal/review. Avoid automatic permanent bans based solely on a single unverified signal.
- Keep the actual CS2 executable usable outside A.C.E. in the general sense: A.C.E. can gate its own ranked matchmaking and managed servers, but must not claim to prevent users from launching the game independently outside the service.

PHASE C — TEST AND RELEASE GATE
- Test missing client, failed handshake, outdated client, revoked attestation, unavailable provider, lost heartbeat, server mismatch, false-positive scenarios, reconnect, and service outage.
- Test the complete end-to-end path with a real, authorized test server/provider before any ranked launch. Mock implementations are only for automated tests and do not satisfy launch requirements.
- Obtain specialist security/privacy and platform compatibility review for any custom client-level or privileged component. Do not casually build kernel drivers, invasive game-memory readers, stealth mechanisms, or bypass techniques.
- If the available time/budget/skills are not sufficient for a reliable solution, recommend a vetted provider or keep ranked matchmaking disabled until the blocker is resolved.

FINAL REQUIREMENT
Do not launch A.C.E. ranked CS2 matchmaking without a functioning and tested Anti-Cheat enforcement path. A working website, rank system, or tournament bracket does not satisfy this requirement. Report evidence, blockers, expected costs, and a GO/NO-GO recommendation in Hebrew, then stop for owner approval.
