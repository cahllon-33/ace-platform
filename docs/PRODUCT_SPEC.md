# A.C.E. product specification

This document describes what A.C.E. is supposed to do. It is a plan, not a claim that these features already exist.

## Identity

- **Product name:** A.C.E.
- **Brand vision:** Autonomous Anti-Cheat, Competitive Calibration, Elite Players.
- **Public website language:** English.
- **Audience:** international competitive players, starting with Counter-Strike 2.
- **Visual identity:**
  - Deep charcoal black `#121212`
  - Graphite gray
  - Clean white
  - Premium metallic gold `#D4AF37` / `#FFD700`

## Product goal

A.C.E. should become a competitive esports platform where players can:

1. Create and view **player profiles** tied to a Steam identity.
2. **Sign in with Steam** (OpenID / Steam Web API). A.C.E. must never ask for or store Steam passwords.
3. Create and manage **teams**.
4. See **rankings** based on A.C.E. competitive results (not a copy of Valve or third-party ladders unless those sources are integrated later and clearly labeled).
5. Organize and join **tournaments**.
6. Support **match integrity** through reporting, review, and (later) additional tooling.
7. Provide **moderation** tools for staff (bans, reports, role checks on the server).
8. Offer **subscriptions** for premium features, only after payment spend is explicitly authorized.
9. Eventually ship a **desktop application**. Electron must not be introduced until the web application is stable.

The first playable game on the platform is **Counter-Strike 2**. Other games are out of scope until CS2 flows work.

## Honest status (do not over-claim)

A.C.E. does **not** currently have:

- A working AI anti-cheat
- Live game servers
- Real payments
- Real prizes

Do not write marketing copy, UI text, or documentation that claims otherwise. Mark mock data, future features, and unfinished integrations clearly in the interface and in code comments.

## Steam sign-in rules

- Players authenticate by completing Steam’s official login flow (OpenID / OAuth-style redirect). They log in on Steam, not on an A.C.E. password form.
- A.C.E. must never collect, store, or ask for Steam account passwords.
- Store only what is needed: Steam ID, public profile fields allowed by Steam’s terms, and A.C.E. session data.
- Steam Web API keys and other secrets stay in environment variables on the server. They must never ship in client JavaScript.

## Mock data vs real data

Until a database and authentication exist:

- Pages may use **mock data** so layouts can be designed.
- Every mock list, profile, ranking, or tournament must be labeled in the UI as mock / sample / not live.
- Mock data must not be presented as real player results, real prizes, or real anti-cheat verdicts.

When a feature is wired to the database, remove or clearly separate remaining mocks.

## User-facing capabilities (intended)

### Public site

- Home page explaining A.C.E. without false claims.
- Placeholder or real pages for players, teams, rankings, and tournaments as they are built.
- English copy. Visuals follow the charcoal / gold identity.

### Authenticated players (future stages)

- Steam sign-in and sign-out.
- Player profile (display name, Steam identity, team membership, A.C.E. stats once those exist).
- Team create / join / leave (exact rules to be defined when that stage starts).
- Tournament registration when tournaments exist.

### Staff (future stages)

- Review match-integrity reports.
- Apply moderation actions.
- All permission checks run on the server, not only by hiding buttons in the browser.

### Subscriptions (future)

- UI may show “coming later” until a payment provider is authorized.
- No live charges without explicit authorization from the project owner.

### Desktop application (future)

- Not part of the web MVP.
- Intended later for deeper client-side integrity tooling. That work is not started and must not be advertised as finished.

## Success for the current planning stage

This specification is complete when it can guide the next implementation stage (branded public shell) without requiring a database, authentication, or new product libraries.
