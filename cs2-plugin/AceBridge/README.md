# AceBridge (CounterStrikeSharp plugin)

Posts CS2 server events to A.C.E. at `POST /api/cs2/events`:

| type | when | data |
| --- | --- | --- |
| `map_start` | map loaded | `map` |
| `round_end` | every round | `round`, `winner` (ct/t), `reason`, `scoreCt`, `scoreT`, `map` |
| `player_death` | every kill (toggle `SendKills`) | `victim`, `attacker`, `assister` (SteamID64), `weapon`, `headshot` |
| `kill_telemetry` (0.4.0) | every live kill (toggle `SendKillTelemetry`) | attacker/victim positions, attacker view angles, distance, wallbang/throughSmoke/attackerBlind/noscope, short aim `trace` (`[{dt,pitch,yaw,err}]`) |
| `round_mvp` | round MVP | `player`, `reason` |
| `round_start` (0.3.0) | every round | `round`, `map` |
| `round_stats` (0.3.0) | every live round end (not warmup) | `round`, `winner`, scores, `players[]`: `steamId`, `team`, `dmg` (capped at victim HP), `heDmg`, `molDmg`, `flashes`, `flashesHit` (flashbangs that blinded an enemy), `enemiesFlashed`, `flashMs`, `teamFlashed`, `he`, `molotovs`, `smokes`, `kills`, `deaths`, `weapons` {weapon: kills}, `firstKill`, `firstDeath`, `clutchVs` (X in 1vX, 0 = none), `clutchWon` |
| `player_hurt` / `player_blind` / `grenade_thrown` (0.3.0) | only when `SendRawUtilityEvents` is true (debugging) | per-hit / per-blind / per-throw details |
| `match_end` | win panel | scores, rounds, per-player kills/deaths/assists/damage/HS/MVPs |

Every request carries `X-Ace-Timestamp` (unix seconds) and
`X-Ace-Signature: sha256=<hex HMAC-SHA256(secret, "<timestamp>.<raw body>")>`.
The server rejects bad signatures and timestamps more than 5 minutes off, and stores each `eventId` once
(retries are safe). Official match results and RP still come only from the DatHost match webhook;
these events are telemetry.

## Build

Requires the .NET 10 SDK (CounterStrikeSharp.API 1.0.377 targets net10.0; keep the package version in line with the CounterStrikeSharp build on the server).

```bash
cd cs2-plugin/AceBridge
dotnet build -c Release
# output: bin/Release/net10.0/AceBridge.dll
```

## Install on DatHost

1. In the DatHost panel, open the server → **Settings** and enable **Metamod** and **CounterStrikeSharp**
   (it is currently OFF on "A.C.E | Ranked 5v5 #1"), then save and restart the server once.
2. **Files** (or FTP): create `addons/counterstrikesharp/plugins/AceBridge/` and upload `AceBridge.dll` into it.
3. Restart the server (or run `css_plugins load AceBridge` in the console). The plugin creates
   `addons/counterstrikesharp/configs/plugins/AceBridge/AceBridge.json`.
4. Edit that file:
   ```json
   {
     "EventsUrl": "https://ace-platform-steel.vercel.app/api/cs2/events",
     "Secret": "<the same value as ACE_PLUGIN_SECRET on Vercel, at least 16 characters>",
     "ServerId": "6ad95a038be954c4e42d067f",
     "SendKills": true,
     "ConfigVersion": 1
   }
   ```
   Then `css_plugins reload AceBridge`. Never commit the secret.
5. Check: `css_plugins list` shows AceBridge; play a round and look for rows in the `Cs2PluginEvent` table.

`ACE_EVENTS_URL`, `ACE_PLUGIN_SECRET` and `ACE_SERVER_ID` environment variables override the file if your host supports them.

## Binding events to an A.C.E match (0.2.0)

Kill events (`player_death`) carry the engine's `headshot` flag. For the A.C.E Dossier to use them as a
headshot source when a server report lacks `kills_with_headshot`, bind events to the match:

- server command `ace_match_id <A.C.E match id | DatHost match id>` (server console / rcon only), or
- environment variable `ACE_MATCH_ID`.

Unbound events keep the old `<map>-<unix time>` key and are stored but not attributed to a match.

## 0.3.0: full stats (utility, entry, clutch, multi-kills, weapons, ADR)

The plugin keeps per-round counters in memory and posts **one** `round_stats` event per round (about 30 requests a
map instead of hundreds). The site recomputes `Cs2PlayerMatchStat` (one row per match key + SteamID) from all
`round_stats` of that match, de-duplicated by round number, and My Stats uses it to fill flashes, enemies flashed,
blind time, HE/molotov throws and damage, flash success, 1v1/1v2 clutches, and (only where the DatHost report is
missing a value) ADR, entry, clutches, multi-kills and weapon classes.

**Bind every match** (otherwise rows are keyed by map+time and never reach a player's stats): the match start config must
run `ace_match_id <A.C.E match id or DatHost match id>` before the first live round.

New config keys (added automatically to AceBridge.json on load; defaults shown):
`"SendRoundStats": true`, `"SendRawUtilityEvents": false`.

Upgrade on DatHost: replace `addons/counterstrikesharp/plugins/AceBridge/AceBridge.dll` with the 0.3.0 build,
then `css_plugins reload AceBridge` (or restart). `css_plugins list` should show AceBridge 0.3.0.


## 0.4.0 integrity telemetry and match gating

New config keys (defaults shown):

```json
{
  "SendKillTelemetry": true,
  "AimSampleTicks": 2,
  "GateUrl": "",
  "GateEnabled": true,
  "GateFailOpen": true
}
```

- Aim samples are kept in a short in-RAM ring (~0.8 s) and attached only to the kill that just happened; nothing is streamed continuously.
- On player authorize, AceBridge POSTs `{steamId}` to `GateUrl` (or `EventsUrl` with `/api/cs2/events` → `/api/cs2/gate`) with the same HMAC headers. The site answers `{allow, required, reason}`. Kick only when `allow` is explicitly `false`. On site/network failure the plugin fails open when `GateFailOpen` is true.
- Kick messages tell the player to open the A.C.E desktop app (or close a blocked program). No secrets are printed.
