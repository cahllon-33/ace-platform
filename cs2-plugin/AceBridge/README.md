# AceBridge (CounterStrikeSharp plugin)

Posts CS2 server events to A.C.E. at `POST /api/cs2/events`:

| type | when | data |
| --- | --- | --- |
| `map_start` | map loaded | `map` |
| `round_end` | every round | `round`, `winner` (ct/t), `reason`, `scoreCt`, `scoreT`, `map` |
| `player_death` | every kill (toggle `SendKills`) | `victim`, `attacker`, `assister` (SteamID64), `weapon`, `headshot` |
| `round_mvp` | round MVP | `player`, `reason` |
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
