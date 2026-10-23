using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using CounterStrikeSharp.API;
using CounterStrikeSharp.API.Core;
using CounterStrikeSharp.API.Core.Attributes.Registration;
using CounterStrikeSharp.API.Modules.Commands;
using CounterStrikeSharp.API.Modules.Utils;
using Microsoft.Extensions.Logging;

namespace AceBridge;

/// Config file: addons/counterstrikesharp/configs/plugins/AceBridge/AceBridge.json (created on first load).
/// Environment variables ACE_EVENTS_URL / ACE_PLUGIN_SECRET / ACE_SERVER_ID override the file when set.
public class AceBridgeConfig : BasePluginConfig
{
    [JsonPropertyName("EventsUrl")] public string EventsUrl { get; set; } = "https://ace-platform-steel.vercel.app/api/cs2/events";
    [JsonPropertyName("Secret")] public string Secret { get; set; } = "";
    [JsonPropertyName("ServerId")] public string ServerId { get; set; } = "";
    [JsonPropertyName("SendKills")] public bool SendKills { get; set; } = true;
    /// 0.3.0: one compact "round_stats" event per round carries damage, utility, entry, clutch and per-weapon kills.
    [JsonPropertyName("SendRoundStats")] public bool SendRoundStats { get; set; } = true;
    /// Also post every player_hurt / player_blind / grenade_thrown as its own event (debugging; many requests per round).
    [JsonPropertyName("SendRawUtilityEvents")] public bool SendRawUtilityEvents { get; set; } = false;
    /// 0.4.0 integrity telemetry: one "kill_telemetry" event per kill (positions, view angles, flags, short aim trace).
    [JsonPropertyName("SendKillTelemetry")] public bool SendKillTelemetry { get; set; } = true;
    /// View-angle sample interval in server ticks (2 = ~31 ms at 64 tick). Samples are kept in RAM only (~0.8 s ring) and sent only around kills.
    [JsonPropertyName("AimSampleTicks")] public int AimSampleTicks { get; set; } = 2;
    /// 0.4.0 match gating: ask A.C.E on connect whether the SteamID has a fresh desktop integrity session. Empty = derived from EventsUrl.
    [JsonPropertyName("GateUrl")] public string GateUrl { get; set; } = "";
    [JsonPropertyName("GateEnabled")] public bool GateEnabled { get; set; } = true;
    /// If the site cannot be reached, let the player stay (true) rather than kick everyone during an outage.
    [JsonPropertyName("GateFailOpen")] public bool GateFailOpen { get; set; } = true;
    /// 0.4.1 occlusion-tracking telemetry: periodic per-player samples of enemies near the crosshair (error, engine "spotted" flag, bearing).
    /// Only enemies inside ViewConeDeg are recorded; batches are sent every ViewFlushSec or at round end.
    [JsonPropertyName("SendViewSamples")] public bool SendViewSamples { get; set; } = true;
    [JsonPropertyName("ViewSampleTicks")] public int ViewSampleTicks { get; set; } = 16; // ~4 Hz at 64 tick
    [JsonPropertyName("ViewConeDeg")] public double ViewConeDeg { get; set; } = 30;
    [JsonPropertyName("ViewFlushSec")] public int ViewFlushSec { get; set; } = 10;
    /// Hard server-wide bandwidth budget for view_samples; batches over budget are dropped (never queued).
    [JsonPropertyName("MaxViewBytesPerMinute")] public int MaxViewBytesPerMinute { get; set; } = 120_000;
}

public class AceBridgePlugin : BasePlugin, IPluginConfig<AceBridgeConfig>
{
    public override string ModuleName => "AceBridge";
    public override string ModuleVersion => "0.4.1";
    public override string ModuleAuthor => "A.C.E.";
    public override string ModuleDescription => "Posts round, kill, utility, clutch, MVP and match-end events to A.C.E. with an HMAC signature.";

    public AceBridgeConfig Config { get; set; } = new();
    private static readonly HttpClient Http = new() { Timeout = TimeSpan.FromSeconds(8) };
    private string _url = "", _secret = "", _serverId = "", _matchKey = "";
    private int _round;
    private string _boundMatch = "";

    /// Per-round, per-player counters (game thread only).
    private sealed class RoundLine
    {
        public string Team = "spec";
        public int Damage, HeDamage, MolotovDamage, Flashes, He, Molotovs, Smokes, EnemiesFlashed, FlashMs, TeamFlashed, Kills, Deaths;
        public HashSet<uint> FlashesHit = new();
        public Dictionary<string, int> Weapons = new();
        public bool FirstKill, FirstDeath;
        public int ClutchVs;
    }
    private readonly Dictionary<ulong, RoundLine> _rl = new();
    private readonly Dictionary<ulong, int> _hp = new();
    private bool _firstDone;

    /// 0.4.0 aim ring buffer: one sample per AimSampleTicks per alive human (RAM only).
    private readonly record struct AimSample(long Ms, float Pitch, float Yaw, float X, float Y, float Z);
    private const int RingSize = 28;
    private readonly Dictionary<int, AimSample[]> _ring = new();
    private readonly Dictionary<int, int> _ringPos = new();
    private int _tick;
    private string _gateUrl = "";
    private RoundLine L(CCSPlayerController p) { if (!_rl.TryGetValue(p.SteamID, out var l)) { l = new RoundLine(); _rl[p.SteamID] = l; } l.Team = TeamOf(p); return l; }
    private static string TeamOf(CCSPlayerController p) => p.TeamNum == (int)CsTeam.CounterTerrorist ? "ct" : p.TeamNum == (int)CsTeam.Terrorist ? "t" : "spec";
    private static bool Human(CCSPlayerController? p) => p is { IsValid: true, IsBot: false } && p.SteamID != 0;

    /// Server-only: `ace_match_id <A.C.E match id or DatHost match id>` so kill events (with headshot flag) join the verified match.
    [ConsoleCommand("ace_match_id", "Bind AceBridge events to an A.C.E match id")]
    [CommandHelper(minArgs: 1, usage: "<matchId>", whoCanExecute: CommandUsage.SERVER_ONLY)]
    public void OnBindMatch(CCSPlayerController? caller, CommandInfo cmd)
    {
        var id = cmd.GetArg(1).Trim();
        if (id.Length is < 1 or > 80) return;
        _boundMatch = id; _matchKey = id;
        Logger.LogInformation("[AceBridge] Events bound to match {Id}", id);
    }

    public void OnConfigParsed(AceBridgeConfig config)
    {
        Config = config;
        _url = Environment.GetEnvironmentVariable("ACE_EVENTS_URL") is { Length: > 0 } u ? u : config.EventsUrl;
        _secret = Environment.GetEnvironmentVariable("ACE_PLUGIN_SECRET") is { Length: > 0 } s ? s : config.Secret;
        _serverId = Environment.GetEnvironmentVariable("ACE_SERVER_ID") is { Length: > 0 } id ? id : config.ServerId;
        _gateUrl = config.GateUrl.Length > 0 ? config.GateUrl : _url.Replace("/api/cs2/events", "/api/cs2/gate");
        if (_secret.Length < 16) Logger.LogWarning("[AceBridge] Secret is missing or shorter than 16 characters; events will be rejected.");
    }

    public override void Load(bool hotReload)
    {
        RegisterListener<Listeners.OnMapStart>(map =>
        {
            _round = 0;
            // Bind events to the A.C.E match: ace_match_id (server command) or ACE_MATCH_ID, else a map/time key.
            _matchKey = _boundMatch.Length > 0 ? _boundMatch
                : Environment.GetEnvironmentVariable("ACE_MATCH_ID") is { Length: > 0 } mid ? mid
                : $"{map}-{DateTimeOffset.UtcNow.ToUnixTimeSeconds()}";
            Send("map_start", new { map });
            _ring.Clear(); _ringPos.Clear(); _view.Clear(); _alive.Clear();
        });
        RegisterListener<Listeners.OnTick>(SampleAim);
        RegisterListener<Listeners.OnTick>(SampleView);
        RegisterListener<Listeners.OnClientAuthorized>((slot, steamId) => GateCheck(slot, steamId.SteamId64));
    }

    private static long NowMs() => (long)(Server.CurrentTime * 1000);

    /// Light periodic view-angle + eye position sampling (game thread). Nothing is sent from here.
    private void SampleAim()
    {
        if (!Config.SendKillTelemetry || ++_tick % Math.Max(1, Config.AimSampleTicks) != 0) return;
        var now = NowMs();
        foreach (var p in Utilities.GetPlayers())
        {
            if (p is not { IsValid: true, PawnIsAlive: true }) continue;
            var pawn = p.PlayerPawn.Value; if (pawn == null || pawn.AbsOrigin == null) continue;
            var a = pawn.EyeAngles; var o = pawn.AbsOrigin;
            var smp = new AimSample(now, a.X, a.Y, o.X, o.Y, o.Z + (pawn.ViewOffset?.Z ?? 64f));
            if (!_ring.TryGetValue(p.Slot, out var r)) { r = new AimSample[RingSize]; _ring[p.Slot] = r; _ringPos[p.Slot] = 0; }
            var i = _ringPos[p.Slot]; r[i % RingSize] = smp; _ringPos[p.Slot] = i + 1;
        }
    }

    /// 0.4.1 view sampling buffers (game thread only). smp entries: [tMs, [[enemySlot, err*10, spotted 0|1, bearingDeg], ...]].
    private readonly Dictionary<ulong, List<object[]>> _view = new();
    private readonly Dictionary<ulong, long> _alive = new();
    private long _viewT0, _lastFlushMs, _budgetWindowMs; private int _budgetUsed;
    public const int MaxEnemiesPerSample = 10, MaxBatchBytes = 48_000;

    /// Bearing (world yaw, degrees -180..180) from eye to target.
    public static double Bearing(float ex, float ey, float tx, float ty) => Math.Atan2(ty - ey, tx - ex) * 180 / Math.PI;

    /// True when the observer's slot bit is set in the target pawn's engine SpottedByMask (line-of-sight "spotted").
    public static bool SpottedBy(uint m0, uint m1, int observerSlot) =>
        observerSlot is >= 0 and < 64 && (((observerSlot < 32 ? m0 : m1) >> (observerSlot % 32)) & 1u) == 1u;

    private void SampleView()
    {
        if (!Config.SendViewSamples || _tick % Math.Max(4, Config.ViewSampleTicks) != 0) return;
        if (Warmup()) return;
        var now = NowMs(); if (_viewT0 == 0) _viewT0 = now;
        var step = Math.Max(4, Config.ViewSampleTicks) * 1000 / 64;
        var players = Utilities.GetPlayers().Where(p => p is { IsValid: true, PawnIsAlive: true } && p.TeamNum is (int)CsTeam.CounterTerrorist or (int)CsTeam.Terrorist).ToList();
        foreach (var p in players)
        {
            if (!Human(p)) continue;
            var pawn = p.PlayerPawn.Value; if (pawn?.AbsOrigin == null) continue;
            _alive[p.SteamID] = (_alive.TryGetValue(p.SteamID, out var al) ? al : 0) + step;
            float ex = pawn.AbsOrigin.X, ey = pawn.AbsOrigin.Y, ez = pawn.AbsOrigin.Z + (pawn.ViewOffset?.Z ?? 64f);
            var a = pawn.EyeAngles;
            var obs = new List<object>();
            foreach (var e in players)
            {
                if (e.TeamNum == p.TeamNum || obs.Count >= MaxEnemiesPerSample) continue;
                var ep = e.PlayerPawn.Value; if (ep?.AbsOrigin == null) continue;
                float tx = ep.AbsOrigin.X, ty = ep.AbsOrigin.Y, tz = ep.AbsOrigin.Z + 48f;
                var err = AimError(a.X, a.Y, ex, ey, ez, tx, ty, tz);
                if (err > Config.ViewConeDeg) continue;
                var mask = ep.EntitySpottedState.SpottedByMask;
                var vis = SpottedBy(mask.Length > 0 ? mask[0] : 0, mask.Length > 1 ? mask[1] : 0, p.Slot);
                obs.Add(new object[] { e.Slot, (int)Math.Round(err * 10), vis ? 1 : 0, (int)Math.Round(Bearing(ex, ey, tx, ty)) });
            }
            if (obs.Count == 0) continue;
            if (!_view.TryGetValue(p.SteamID, out var l)) { l = new(); _view[p.SteamID] = l; }
            l.Add(new object[] { (int)(now - _viewT0), obs });
        }
        if (now - _lastFlushMs >= Math.Max(5, Config.ViewFlushSec) * 1000L) FlushView(now);
    }

    /// Sends buffered samples (one event, capped below the site's 64 KB body limit) if the per-minute budget allows; otherwise drops them.
    private void FlushView(long now)
    {
        _lastFlushMs = now;
        if (_view.Count == 0 && _alive.Count == 0) return;
        var players = new List<object>();
        foreach (var (sid, alive) in _alive)
        {
            var smp = _view.TryGetValue(sid, out var l) ? l : new List<object[]>();
            players.Add(new { s = sid.ToString(), alive, smp });
        }
        _view.Clear(); _alive.Clear();
        var data = new { round = _round + 1, players };
        var size = JsonSerializer.Serialize(data).Length;
        if (now - _budgetWindowMs >= 60_000) { _budgetWindowMs = now; _budgetUsed = 0; }
        if (size > MaxBatchBytes || _budgetUsed + size > Config.MaxViewBytesPerMinute) { Logger.LogDebug("[AceBridge] view batch dropped ({B} bytes)", size); return; }
        _budgetUsed += size;
        Send("view_samples", data);
    }

    private List<AimSample> History(int slot)
    {
        if (!_ring.TryGetValue(slot, out var r)) return new();
        var n = _ringPos[slot]; var outp = new List<AimSample>();
        for (var k = Math.Max(0, n - RingSize); k < n; k++) outp.Add(r[k % RingSize]);
        return outp;
    }

    /// Angle (degrees) between the view direction (pitch,yaw) and the vector from eye to target.
    public static double AimError(float pitch, float yaw, float ex, float ey, float ez, float tx, float ty, float tz)
    {
        double dx = tx - ex, dy = ty - ey, dz = tz - ez;
        var len = Math.Sqrt(dx * dx + dy * dy + dz * dz); if (len < 1e-3) return 0;
        double p = pitch * Math.PI / 180, y = yaw * Math.PI / 180;
        double vx = Math.Cos(p) * Math.Cos(y), vy = Math.Cos(p) * Math.Sin(y), vz = -Math.Sin(p);
        var dot = Math.Clamp((vx * dx + vy * dy + vz * dz) / len, -1, 1);
        return Math.Acos(dot) * 180 / Math.PI;
    }

    /// Per-kill integrity record. Victim target point = victim eye/chest height from the victim's own ring (same timestamps when available).
    private void SendKillTelemetry(EventPlayerDeath ev)
    {
        var a = ev.Attacker; var v = ev.Userid;
        if (!Human(a) || v is not { IsValid: true } || a!.SteamID == v.SteamID || a.TeamNum == v.TeamNum) return;
        var ap = a.PlayerPawn.Value; var vp = v.PlayerPawn.Value;
        if (ap?.AbsOrigin == null || vp?.AbsOrigin == null) return;
        var now = NowMs();
        var ah = History(a.Slot); var vh = History(v.Slot);
        float vx = vp.AbsOrigin.X, vy = vp.AbsOrigin.Y, vz = vp.AbsOrigin.Z + 48f;
        var trace = ah.Select(s =>
        {
            var vs = vh.Count > 0 ? vh.OrderBy(q => Math.Abs(q.Ms - s.Ms)).First() : default;
            float tx = vh.Count > 0 ? vs.X : vx, ty = vh.Count > 0 ? vs.Y : vy, tz = vh.Count > 0 ? vs.Z - 16f : vz;
            return new { dt = (int)(s.Ms - now), pitch = MathF.Round(s.Pitch, 2), yaw = MathF.Round(s.Yaw, 2), err = Math.Round(AimError(s.Pitch, s.Yaw, s.X, s.Y, s.Z, tx, ty, tz), 2) };
        }).ToList();
        var ang = ap.EyeAngles;
        Send("kill_telemetry", new
        {
            round = _round + 1,
            attacker = Sid(a), victim = Sid(v), victimBot = v.IsBot,
            weapon = (ev.Weapon ?? "").Replace("weapon_", ""), headshot = ev.Headshot, hitgroup = 0,
            distance = Math.Round(ev.Distance, 1),
            wallbang = ev.Penetrated > 0, penetrated = ev.Penetrated,
            throughSmoke = ev.Thrusmoke, attackerBlind = ev.Attackerblind, noscope = ev.Noscope,
            attackerPos = new[] { MathF.Round(ap.AbsOrigin.X, 1), MathF.Round(ap.AbsOrigin.Y, 1), MathF.Round(ap.AbsOrigin.Z, 1) },
            victimPos = new[] { MathF.Round(vp.AbsOrigin.X, 1), MathF.Round(vp.AbsOrigin.Y, 1), MathF.Round(vp.AbsOrigin.Z, 1) },
            attackerAngles = new[] { MathF.Round(ang.X, 2), MathF.Round(ang.Y, 2) },
            sampleMs = Math.Max(1, Config.AimSampleTicks) * 1000 / 64,
            trace,
        });
    }

    /// Match gating (0.4.0). The site answers { allow, required, reason }. Kick only when the site explicitly says allow=false.
    private void GateCheck(int slot, ulong steamId)
    {
        if (!Config.GateEnabled || steamId == 0 || _secret.Length < 16 || string.IsNullOrWhiteSpace(_gateUrl)) return;
        var body = JsonSerializer.Serialize(new { steamId = steamId.ToString(), serverId = _serverId, matchId = _matchKey });
        var url = _gateUrl; var secret = _secret; var failOpen = Config.GateFailOpen;
        _ = Task.Run(async () =>
        {
            bool allow; string reason = "";
            try
            {
                var ts = DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString();
                using var req = new HttpRequestMessage(HttpMethod.Post, url) { Content = new StringContent(body, Encoding.UTF8, "application/json") };
                req.Headers.Add("X-Ace-Timestamp", ts);
                req.Headers.Add("X-Ace-Signature", Sign(secret, ts, body));
                using var res = await Http.SendAsync(req);
                if (!res.IsSuccessStatusCode) { allow = failOpen; reason = "gate-http-" + (int)res.StatusCode; }
                else
                {
                    using var doc = JsonDocument.Parse(await res.Content.ReadAsStringAsync());
                    allow = !doc.RootElement.TryGetProperty("allow", out var al) || al.ValueKind != JsonValueKind.False;
                    reason = doc.RootElement.TryGetProperty("reason", out var rs) ? rs.GetString() ?? "" : "";
                }
            }
            catch (Exception) { allow = failOpen; reason = "gate-unreachable"; }
            if (allow) return;
            Server.NextFrame(() =>
            {
                var p = Utilities.GetPlayerFromSlot(slot);
                if (p is not { IsValid: true } || p.SteamID != steamId || p.UserId == null) return;
                var msg = reason == "integrity-flagged"
                    ? "A.C.E: your anti-cheat client reported a blocked program. Close it, then reconnect."
                    : "A.C.E: open the A.C.E desktop app (anti-cheat active) and sign in before joining this match.";
                Logger.LogInformation("[AceBridge] Gate kicked {Sid}: {Reason}", steamId, reason);
                Server.ExecuteCommand($"kickid {p.UserId.Value} \"{msg}\"");
            });
        });
    }

    [GameEventHandler]
    public HookResult OnRoundStart(EventRoundStart ev, GameEventInfo info)
    {
        _rl.Clear(); _hp.Clear(); _firstDone = false;
        foreach (var p in Utilities.GetPlayers().Where(Human)) if (TeamOf(p) != "spec") L(p);
        Send("round_start", new { round = _round + 1, map = Server.MapName });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnPlayerHurt(EventPlayerHurt ev, GameEventInfo info)
    {
        var a = ev.Attacker; var v = ev.Userid;
        if (!Human(a) || v is not { IsValid: true } || a!.SteamID == v.SteamID || a.TeamNum == v.TeamNum) return HookResult.Continue;
        // Real damage is capped at the victim's remaining health (same rule as the in-game ADR).
        var key = v.IsBot ? (ulong)v.Index : v.SteamID;
        var before = _hp.TryGetValue(key, out var h) ? h : 100;
        var dealt = Math.Max(0, Math.Min(ev.DmgHealth, before));
        _hp[key] = Math.Max(0, ev.Health);
        var l = L(a);
        l.Damage += dealt;
        var w = ev.Weapon ?? "";
        if (w == "hegrenade") l.HeDamage += dealt;
        else if (w is "inferno" or "molotov" or "incgrenade") l.MolotovDamage += dealt;
        if (Config.SendRawUtilityEvents) Send("player_hurt", new { round = _round + 1, attacker = Sid(a), victim = Sid(v), weapon = w, dmg = dealt, hitgroup = ev.Hitgroup });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnGrenadeThrown(EventGrenadeThrown ev, GameEventInfo info)
    {
        var p = ev.Userid; if (!Human(p)) return HookResult.Continue;
        var l = L(p!);
        switch (ev.Weapon) { case "flashbang": l.Flashes++; break; case "hegrenade": l.He++; break; case "molotov" or "incgrenade": l.Molotovs++; break; case "smokegrenade": l.Smokes++; break; }
        if (Config.SendRawUtilityEvents) Send("grenade_thrown", new { round = _round + 1, player = Sid(p), weapon = ev.Weapon });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnPlayerBlind(EventPlayerBlind ev, GameEventInfo info)
    {
        var a = ev.Attacker; var v = ev.Userid;
        if (!Human(a) || v is not { IsValid: true } || a!.SteamID == v.SteamID || ev.BlindDuration <= 0) return HookResult.Continue;
        var l = L(a);
        if (a.TeamNum != v.TeamNum) { l.EnemiesFlashed++; l.FlashMs += (int)(ev.BlindDuration * 1000); l.FlashesHit.Add((uint)ev.Entityid); }
        else l.TeamFlashed++;
        if (Config.SendRawUtilityEvents) Send("player_blind", new { round = _round + 1, attacker = Sid(a), victim = Sid(v), enemy = a.TeamNum != v.TeamNum, duration = ev.BlindDuration, flash = ev.Entityid });
        return HookResult.Continue;
    }

    /// After every death: entry (first kill/death of the round) and clutch detection (last player alive vs X).
    private void TrackDeath(EventPlayerDeath ev)
    {
        var a = ev.Attacker; var v = ev.Userid;
        if (v is not { IsValid: true }) return;
        var enemyKill = a is { IsValid: true } && a.TeamNum != v.TeamNum;
        if (Human(v)) L(v).Deaths++;
        if (enemyKill && Human(a))
        {
            var l = L(a!); l.Kills++;
            var w = (ev.Weapon ?? "").Replace("weapon_", "");
            l.Weapons[w] = (l.Weapons.TryGetValue(w, out var c) ? c : 0) + 1;
        }
        if (enemyKill && !_firstDone)
        {
            _firstDone = true;
            if (Human(a)) L(a!).FirstKill = true;
            if (Human(v)) L(v).FirstDeath = true;
        }
        var alive = Utilities.GetPlayers().Where(p => p.IsValid && p.PawnIsAlive && p.Slot != v.Slot && p.TeamNum is (int)CsTeam.CounterTerrorist or (int)CsTeam.Terrorist).ToList();
        foreach (var team in new[] { (int)CsTeam.CounterTerrorist, (int)CsTeam.Terrorist })
        {
            var mine = alive.Where(p => p.TeamNum == team).ToList();
            var enemies = alive.Count(p => p.TeamNum != team);
            if (mine.Count == 1 && enemies >= 1 && Human(mine[0]))
            {
                var l = L(mine[0]);
                if (l.ClutchVs == 0) l.ClutchVs = enemies;
            }
        }
    }

    [GameEventHandler]
    public HookResult OnRoundEnd(EventRoundEnd ev, GameEventInfo info)
    {
        if (Config.SendViewSamples && !Warmup()) { try { FlushView(NowMs()); } catch (Exception e) { Logger.LogWarning("[AceBridge] view flush: {M}", e.Message); } }
        _round++;
        var (ct, t) = Scores();
        var winner = ev.Winner == (int)CsTeam.CounterTerrorist ? "ct" : ev.Winner == (int)CsTeam.Terrorist ? "t" : "none";
        if (Config.SendRoundStats && _rl.Count > 0 && !Warmup())
        {
            var players = _rl.Where(kv => kv.Value.Team != "spec").Select(kv => new
            {
                steamId = kv.Key.ToString(), team = kv.Value.Team,
                dmg = kv.Value.Damage, heDmg = kv.Value.HeDamage, molDmg = kv.Value.MolotovDamage,
                flashes = kv.Value.Flashes, flashesHit = kv.Value.FlashesHit.Count, enemiesFlashed = kv.Value.EnemiesFlashed, flashMs = kv.Value.FlashMs, teamFlashed = kv.Value.TeamFlashed,
                he = kv.Value.He, molotovs = kv.Value.Molotovs, smokes = kv.Value.Smokes,
                kills = kv.Value.Kills, deaths = kv.Value.Deaths, weapons = kv.Value.Weapons,
                firstKill = kv.Value.FirstKill, firstDeath = kv.Value.FirstDeath,
                clutchVs = kv.Value.ClutchVs, clutchWon = kv.Value.ClutchVs > 0 && kv.Value.Team == winner,
            }).ToList();
            Send("round_stats", new { round = _round, winner, scoreCt = ct, scoreT = t, map = Server.MapName, players });
        }
        Send("round_end", new { round = _round, winner = ev.Winner == (int)CsTeam.CounterTerrorist ? "ct" : ev.Winner == (int)CsTeam.Terrorist ? "t" : "none", reason = ev.Reason, scoreCt = ct, scoreT = t, map = Server.MapName });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnPlayerDeath(EventPlayerDeath ev, GameEventInfo info)
    {
        TrackDeath(ev);
        if (Config.SendKillTelemetry && !Warmup()) { try { SendKillTelemetry(ev); } catch (Exception e) { Logger.LogWarning("[AceBridge] kill telemetry: {M}", e.Message); } }
        if (!Config.SendKills) return HookResult.Continue;
        Send("player_death", new
        {
            round = _round + 1,
            victim = Sid(ev.Userid),
            attacker = Sid(ev.Attacker),
            assister = Sid(ev.Assister),
            weapon = ev.Weapon,
            headshot = ev.Headshot,
        });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnRoundMvp(EventRoundMvp ev, GameEventInfo info)
    {
        Send("round_mvp", new { round = _round, player = Sid(ev.Userid), reason = ev.Reason });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnMatchEnd(EventCsWinPanelMatch ev, GameEventInfo info)
    {
        var (ct, t) = Scores();
        var players = Utilities.GetPlayers()
            .Where(p => p is { IsValid: true, IsBot: false } && p.SteamID != 0)
            .Select(p => new
            {
                steamId = p.SteamID.ToString(),
                team = p.TeamNum == (int)CsTeam.CounterTerrorist ? "ct" : p.TeamNum == (int)CsTeam.Terrorist ? "t" : "spec",
                kills = p.ActionTrackingServices?.MatchStats.Kills ?? 0,
                deaths = p.ActionTrackingServices?.MatchStats.Deaths ?? 0,
                assists = p.ActionTrackingServices?.MatchStats.Assists ?? 0,
                damage = p.ActionTrackingServices?.MatchStats.Damage ?? 0,
                headshotKills = p.ActionTrackingServices?.MatchStats.HeadShotKills ?? 0,
                mvps = p.MVPs,
            })
            .ToList();
        Send("match_end", new { map = Server.MapName, rounds = _round, scoreCt = ct, scoreT = t, players });
        return HookResult.Continue;
    }

    private static string? Sid(CCSPlayerController? p) => p is { IsValid: true, IsBot: false } && p.SteamID != 0 ? p.SteamID.ToString() : null;

    private static bool Warmup() =>
        Utilities.FindAllEntitiesByDesignerName<CCSGameRulesProxy>("cs_gamerules").FirstOrDefault()?.GameRules?.WarmupPeriod ?? false;

    private static (int ct, int t) Scores()
    {
        int ct = 0, t = 0;
        foreach (var team in Utilities.FindAllEntitiesByDesignerName<CCSTeam>("cs_team_manager"))
        {
            if (team.TeamNum == (int)CsTeam.CounterTerrorist) ct = team.Score;
            else if (team.TeamNum == (int)CsTeam.Terrorist) t = team.Score;
        }
        return (ct, t);
    }

    /// Builds the event on the game thread, then signs and posts it off-thread (never blocks a tick).
    private void Send(string type, object data)
    {
        if (_secret.Length < 16 || string.IsNullOrWhiteSpace(_url)) return;
        var body = JsonSerializer.Serialize(new { eventId = Guid.NewGuid().ToString("N"), serverId = _serverId, matchId = _matchKey, type, data, sentAt = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() });
        var url = _url;
        var secret = _secret;
        _ = Task.Run(async () =>
        {
            for (var attempt = 0; attempt < 3; attempt++)
            {
                try
                {
                    // Re-sign each attempt so the timestamp stays inside the server's 5-minute window.
                    var ts = DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString();
                    using var req = new HttpRequestMessage(HttpMethod.Post, url) { Content = new StringContent(body, Encoding.UTF8, "application/json") };
                    req.Headers.Add("X-Ace-Timestamp", ts);
                    req.Headers.Add("X-Ace-Signature", Sign(secret, ts, body));
                    using var res = await Http.SendAsync(req);
                    if ((int)res.StatusCode < 500) return; // 2xx done; 4xx will not succeed on retry
                }
                catch (Exception)
                {
                    // network error: retry
                }
                await Task.Delay(1000 * (attempt + 1));
            }
        });
    }

    /// sha256=<lowercase hex HMAC-SHA256(secret, "<timestamp>.<body>")>, identical to src/lib/ace-signature.ts.
    public static string Sign(string secret, string timestamp, string body)
    {
        using var h = new HMACSHA256(Encoding.UTF8.GetBytes(secret));
        return "sha256=" + Convert.ToHexString(h.ComputeHash(Encoding.UTF8.GetBytes($"{timestamp}.{body}"))).ToLowerInvariant();
    }
}
