import { describe, expect, it } from "vitest";
import { ingestDathostMatch, summarizeDathostMatch, type IngestStore, type MatchSummary } from "@/server/dathost-ingest";
import type { Cs2Match } from "@/server/dathost";
import { parseStatusLog } from "@/lib/cs2-status";
import { buildMatchBody } from "@/server/dathost";

const A = "76561198000000001", B = "76561198000000002", C = "76561198000000003";
const match = (over: Partial<Cs2Match> = {}): Cs2Match => ({
  id: "dh-match-1", game_server_id: "srv", finished: true, rounds_played: 21,
  team1: { name: "A", stats: { score: 13 } }, team2: { name: "B", stats: { score: 8 } }, settings: { map: "de_mirage" },
  players: [
    { steam_id_64: A, team: "team1", stats: { kills: 21, deaths: 12, assists: 4, mvps: 5, damage_dealt: 2310, kills_with_headshot: 11 } },
    { steam_id_64: B, team: "team2", stats: { kills: 10, deaths: 18, assists: 2, mvps: 1, damage_dealt: 1400 } },
    { steam_id_64: C, team: "spectator" },
  ],
  ...over,
});

function memoryStore() {
  const matches = new Map<string, { id: string; state: string; ratingApplied: boolean; summary: MatchSummary }>();
  let applied = 0;
  const store: IngestStore = {
    findByExternalId: async (x) => matches.get(x) ?? null,
    usersBySteamId: async (ids) => new Map(ids.filter((i) => i !== C).map((i) => [i, `u-${i.slice(-1)}`])),
    createMatch: async (summary) => {
      if (matches.has(summary.externalId)) throw Object.assign(new Error("unique"), { code: "P2002" });
      const row = { id: `m-${matches.size + 1}`, state: "IN_PROGRESS", ratingApplied: false, summary };
      matches.set(summary.externalId, row);
      return { id: row.id };
    },
    completeWithoutRating: async (id) => { for (const m of matches.values()) if (m.id === id) m.state = "COMPLETED"; },
    applyRating: async (id) => { for (const m of matches.values()) if (m.id === id) { if (m.ratingApplied) throw new Error("This match result was already applied."); m.ratingApplied = true; m.state = "COMPLETED"; applied++; } },
  };
  return { store, matches, applied: () => applied };
}

describe("DatHost match ingest", () => {
  it("summarizes stats (ADR inputs, HS, MVPs), drops spectators and picks the winner", () => {
    const s = summarizeDathostMatch(match());
    expect(s.winner).toBe("team1");
    expect(s.lines).toHaveLength(2);
    expect(s.lines[0]).toMatchObject({ kills: 21, deaths: 12, assists: 4, mvps: 5, damage: 2310, headshotKills: 11, roundsPlayed: 21 });
    expect(Math.round(s.lines[0].damage! / s.lines[0].roundsPlayed!)).toBe(110); // ADR
  });
  it("is idempotent: a re-delivered webhook never creates a second match or applies RP twice", async () => {
    const mem = memoryStore();
    const first = await ingestDathostMatch(match(), mem.store);
    const second = await ingestDathostMatch(match(), mem.store);
    const third = await ingestDathostMatch(match(), mem.store);
    expect(first).toMatchObject({ status: "applied", players: 2 });
    expect(second.status).toBe("duplicate");
    expect(third.status).toBe("duplicate");
    expect(mem.matches.size).toBe(1);
    expect(mem.applied()).toBe(1);
  });
  it("handles a concurrent create race (unique violation) as a duplicate", async () => {
    const mem = memoryStore();
    const [a, b] = await Promise.all([ingestDathostMatch(match(), mem.store), ingestDathostMatch(match(), mem.store)]);
    expect([a.status, b.status].sort()).toEqual(["applied", "duplicate"]);
    expect(mem.applied()).toBe(1);
  });
  it("ignores unfinished, canceled and other-server matches; stores ties without RP", async () => {
    const mem = memoryStore();
    expect(await ingestDathostMatch(match({ finished: false }), mem.store)).toMatchObject({ status: "ignored", reason: "not-finished" });
    expect(await ingestDathostMatch(match({ cancel_reason: "MISSING_PLAYERS" }), mem.store)).toMatchObject({ status: "ignored", reason: "canceled" });
    expect(await ingestDathostMatch(match(), mem.store, { serverId: "other" })).toMatchObject({ status: "ignored", reason: "wrong-server" });
    const tie = await ingestDathostMatch(match({ id: "tie", team1: { name: "A", stats: { score: 12 } }, team2: { name: "B", stats: { score: 12 } } }), mem.store);
    expect(tie).toMatchObject({ status: "stored", reason: "tie" });
    expect(mem.applied()).toBe(0);
  });
});

describe("DatHost helpers", () => {
  it("parses map and players from a CS2 status block", () => {
    const log = ["Oct 22 01:00:24:  ----- Status -----", "Oct 22 01:00:24:  hostname : A.C.E | Ranked 5v5 #1", "Oct 22 01:00:24:  players  : 3 humans, 2 bots (0 max)", "Oct 22 01:00:24:  loaded spawngroup(  1)  : SV:  [1: de_dust2 | main lump | mapload]", "Oct 22 01:00:24:  #end"];
    expect(parseStatusLog(log)).toEqual({ map: "de_dust2", humans: 3, bots: 2, hostname: "A.C.E | Ranked 5v5 #1" });
    expect(parseStatusLog([])).toEqual({ map: null, humans: null, bots: null, hostname: null });
  });
  it("builds a DatHost match body with SteamID64 teams and webhooks; rejects bad input", () => {
    const body = buildMatchBody("srv", { team1: { name: "A", steamIds: [A] }, team2: { name: "B", steamIds: [B] }, map: "de_nuke", matchEndUrl: "https://x/api/dathost/match-webhook", webhookAuthorization: "Bearer s" });
    expect(body.players).toEqual([{ steam_id_64: A, team: "team1" }, { steam_id_64: B, team: "team2" }]);
    expect(body.webhooks).toMatchObject({ match_end_url: "https://x/api/dathost/match-webhook", authorization_header: "Bearer s" });
    expect(() => buildMatchBody("srv", { team1: { name: "A", steamIds: ["123"] }, team2: { name: "B", steamIds: [] }, map: "de_nuke", matchEndUrl: "u", webhookAuthorization: "s" })).toThrow();
  });
});

describe("R73 test match vs bots", () => {
  const BOT = "0";
  const vsBots = (over: Partial<Cs2Match> = {}) => match({ players: [{ steam_id_64: A, team: "team1", stats: { kills: 20 } }, { steam_id_64: BOT, team: "team2", stats: { kills: 3 } }], ...over });
  const seeded = (countsForRp: boolean) => {
    const mem = memoryStore();
    const row = { id: "m-test", state: "IN_PROGRESS", ratingApplied: false, isTest: true, countsForRp, summary: summarizeDathostMatch(vsBots()) };
    mem.matches.set("dh-match-1", row);
    let opts: unknown = null;
    const apply = mem.store.applyRating;
    mem.store.applyRating = async (id, w, o) => { opts = o; await apply(id, w, o); };
    return { mem, opts: () => opts };
  };
  it("rates the one-sided real team against bots when RP counts", async () => {
    const s = seeded(true);
    const r = await ingestDathostMatch(vsBots(), s.mem.store);
    expect(r).toMatchObject({ status: "applied", players: 1 });
    expect(s.opts()).toEqual({ vsBots: true });
  });
  it("stores without RP when the owner turned RP off", async () => {
    const s = seeded(false);
    const r = await ingestDathostMatch(vsBots(), s.mem.store);
    expect(r).toMatchObject({ status: "stored", reason: "test-no-rp" });
    expect(s.mem.applied()).toBe(0);
  });
  it("still never rates a one-sided ranked match", async () => {
    const mem = memoryStore();
    const r = await ingestDathostMatch(vsBots(), mem.store);
    expect(r).toMatchObject({ status: "stored", reason: "one-sided" });
  });
});
