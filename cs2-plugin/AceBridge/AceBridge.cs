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
}

public class AceBridgePlugin : BasePlugin, IPluginConfig<AceBridgeConfig>
{
    public override string ModuleName => "AceBridge";
    public override string ModuleVersion => "0.3.0";
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
