using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using CounterStrikeSharp.API;
using CounterStrikeSharp.API.Core;
using CounterStrikeSharp.API.Core.Attributes.Registration;
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
}

public class AceBridgePlugin : BasePlugin, IPluginConfig<AceBridgeConfig>
{
    public override string ModuleName => "AceBridge";
    public override string ModuleVersion => "0.1.0";
    public override string ModuleAuthor => "A.C.E.";
    public override string ModuleDescription => "Posts round, kill, MVP and match-end events to A.C.E. with an HMAC signature.";

    public AceBridgeConfig Config { get; set; } = new();
    private static readonly HttpClient Http = new() { Timeout = TimeSpan.FromSeconds(8) };
    private string _url = "", _secret = "", _serverId = "", _matchKey = "";
    private int _round;

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
            _matchKey = $"{map}-{DateTimeOffset.UtcNow.ToUnixTimeSeconds()}";
            Send("map_start", new { map });
        });
    }

    [GameEventHandler]
    public HookResult OnRoundEnd(EventRoundEnd ev, GameEventInfo info)
    {
        _round++;
        var (ct, t) = Scores();
        Send("round_end", new { round = _round, winner = ev.Winner == (int)CsTeam.CounterTerrorist ? "ct" : ev.Winner == (int)CsTeam.Terrorist ? "t" : "none", reason = ev.Reason, scoreCt = ct, scoreT = t, map = Server.MapName });
        return HookResult.Continue;
    }

    [GameEventHandler]
    public HookResult OnPlayerDeath(EventPlayerDeath ev, GameEventInfo info)
    {
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
