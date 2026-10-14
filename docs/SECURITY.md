# A.C.E. security rules and risks

Security is part of the product. Competitive platforms hold identities, reports, and later payment data. This file lists rules to follow now and risks to verify later.

## Rules that always apply

1. **No secrets in source code.** API keys, database URLs, and auth secrets belong in environment variables. Never commit `.env`. When a stage first needs env vars, add `.env.example` with **placeholder values only**.
2. **`.gitignore` today ignores `.env*`**, which would also hide `.env.example`. When env files are added, change gitignore to ignore `.env` and friends but keep `.env.example` tracked (`!.env.example`).
3. **Authorize on the server.** Hiding a button is not security. Staff actions, team admin actions, and report status changes must be checked in server code using the real session.
4. **Never collect Steam passwords.** Sign-in is Steam’s official flow only. Do not build a form that asks for Steam username/password. Do not store Steam passwords.
5. **Least data.** Store Steam ID and public profile fields needed for A.C.E. Do not scrape private inventory or other data without a documented reason and Steam’s permission via their API terms.
6. **Steam API keys stay on the server.** They must not appear in client bundles.
7. **Do not claim anti-cheat that does not exist.** False security claims harm players and the brand.
8. **No paid purchases, paid hosting, or paid APIs** without explicit authorization from the project owner.
9. **Do not invent security tests.** Run the checks that exist and report real results.

## When authentication exists (Stage 4+)

- Use HTTP-only, secure session cookies (details depend on Auth.js configuration at that time).
- Protect sign-in callbacks against CSRF using the auth library’s built-in protections; do not disable them.
- Rate-limit login and report-submission endpoints when those exist.
- Treat session tokens as secrets.
- Log staff moderation actions (who did what, when) once moderation ships.
- Do not trust `localStorage` as the only proof of identity.

## When the database exists (Stage 3+)

- Use parameterized queries via Prisma. Do not concatenate SQL from user input.
- Restrict which fields clients may update (allow-lists, not “accept the whole JSON body”).
- Separate staff roles in the database; do not hard-code “is admin” only in the frontend.

## Match integrity

- Reports can be abused (harassment, false flags). Rate-limit and require a signed-in Steam user.
- Staff tools can ruin reputations. Require server-side staff role checks and an audit trail when that stage is built.
- A desktop anti-cheat client, if ever built, is a high-risk program (kernel drivers, privacy, false positives). It is out of scope until explicitly designed. Do not ship unsigned “anti-cheat” binaries as a side project.

## Content and abuse

- Player-generated names, team names, and report text can contain abuse or personal data. Plan sanitization for display (avoid unescaped HTML) and a moderation path.
- Uploads (screenshots, demos), if added later, need size limits, type checks, and private storage rules. Do not add file uploads casually.

## Risks to verify later

These are not resolved in this planning stage:

| Topic | Why it matters | When to verify |
| --- | --- | --- |
| Steam Web API and OpenID terms | Using Steam identity incorrectly can get the API key revoked | Before Stage 4 |
| Auth.js Steam provider status | Community providers can lag framework updates | Before Stage 4 |
| Next.js 16 `cacheComponents` | Cached pages might leak one user’s data to another if misconfigured | Before Stage 4–5 |
| GDPR / international privacy | EU players have rights over profile data | Before storing real users |
| Age and region | Competitive and prize features may have age limits | Before tournaments with prizes |
| Prize and gambling law | “Real prizes” may be regulated by country | Before any real prize |
| Hosted Postgres / auth / payments cost | Must not incur cost without authorization | Before any cloud service |
| Dependency pin of Prisma | Must be a stable release, not a prerelease, unless justified | Stage 3 |
| Electron / client integrity | Desktop code can be attacked or become malware-like | Stage 12 |

## Incident basics (future)

When the app has real users, add a short process: rotate leaked secrets, invalidate sessions, and document what data was stored. That process is not implemented yet.

## Current project status

The starter app has no authentication and no database. The main security work **now** is: do not add fake login forms, do not put secrets in git, and do not over-claim product capabilities.
