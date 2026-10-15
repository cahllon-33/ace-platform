# A.C.E Shield (anti-cheat)

Home of the anti-cheat project. Nothing here runs in production yet.

- `types.ts` – shared types: pillars, phases, signals, verdicts.
- `status.ts` – single source of truth for phase/pillar status shown on `/anti-cheat`.
  Update a status here when a milestone ships; the page and status strip read from it.
- `privacy.ts` – data-collection policy as code. Hardware identifiers stay disabled until a
  documented, independently reviewed implementation exists.

Rules of the road:
1. Never mark a phase `live` until it is deployed and enforced in real matches.
2. Every new signal must be added to `privacy.ts` with its purpose and retention before collection.
3. Paid plans never change integrity checks.
