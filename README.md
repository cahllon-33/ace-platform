# A.C.E

A.C.E is an independent competitive CS2 platform (Autonomous Anti-Cheat, Competitive Calibration, Elite Players). It is an independent platform and is **not** affiliated with Valve or Steam.

This codebase now includes a public website plus Steam OpenID sign-in, PostgreSQL/Prisma models, 5v5 teams, a single-elimination bracket engine, rating math, and a game-server eligibility API. It does **not** include live CS2 servers, real payments, prizes, or a working Anti-Cheat client.

## Commands

Run from `ace-platform`.

```bash
npm install
copy .env.example .env
```

Start local PostgreSQL (Docker, optional):

```bash
docker compose up -d
npx prisma migrate dev --name init
```

Or point `DATABASE_URL` at any local Postgres, then run the migrate command.

```bash
npm run prisma:generate
npm run dev
```

Open http://localhost:3000. Hub: `/`, `/play`, `/tournaments`, `/leaderboard`, `/teams`, `/shop`. Also `/features`, `/ranks`, `/pricing`, `/rules`, `/privacy`, `/terms`. After Steam OpenID: `/dashboard`.

```bash
npm run lint
npm test
npm run build
npm start
```

## Steam login

A.C.E never asks for a Steam password. Sign-in redirects to Steam OpenID. The callback is verified on the server; the 64-bit SteamID is taken only from Steam’s claimed_id after `is_valid:true`.

Set `SESSION_SECRET` (long random string) and `APP_BASE_URL` (must match the Steam return URL). `STEAM_API_KEY` is optional (public persona name only).

## Game server eligibility

`POST /api/server/eligibility`  
Header: `Authorization: Bearer <CS2_SERVER_SHARED_SECRET>`  
Body: `{ "steamId": "7656119...", "mode": "managed" }` or `{ "steamIds": [...], "mode": "ranked" }`

Ranked mode always returns DENY until Anti-Cheat is verified.

## Environment

See `.env.example`. Never commit `.env`.
