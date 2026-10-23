/**
 * R60 tests. Every dataset below is SYNTHETIC test data (seeded RNG), labelled as such, and never used in production.
 */
import { describe, expect, it } from "vitest";
import { generateKeyPairSync } from "node:crypto";
import { activationVerdict, featuresFrom, FEATURES, isHoldout, predict, readiness, train, MIN_LABELS, type Sample } from "./ac-model";
import { findTracks, parseCompactSamples, wallhackScore, type ViewSample } from "./ac-wallhack";
import { computeTrust, pickByTrust, trustBand, TRUST_MAX_WAIT_MS, type TrustInput } from "./trust";
import { anonymizedTimeline, eligibility, scrub, safeDemoUrl, tally } from "./overwatch";
import { checkReport, cleanDetails, MATCH_REPORTS_PER_DAY } from "./match-reports";
import { canonical, normalizeRules, signRules, verifyRules } from "./ac-rules";

function rng(seed: number) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 32; }; }
const gauss = (r: () => number) => Math.sqrt(-2 * Math.log(r() + 1e-12)) * Math.cos(2 * Math.PI * r());

/** SYNTHETIC labelled player-matches: cheaters have elevated z-scores on some features. */
function syntheticSamples(n: number, cheatRate: number, seed = 7): Sample[] {
  const r = rng(seed);
  return Array.from({ length: n }, (_, i) => {
    const y = r() < cheatRate ? 1 : 0;
    const ind = { hsZ: gauss(r) + (y ? 2.5 : 0), flickZ: gauss(r) + (y ? 3 : 0), fastReactionZ: gauss(r) + (y ? 2 : 0), wallbangZ: gauss(r), smokeZ: gauss(r), blindZ: gauss(r), reactionStdMs: 60 + gauss(r) * 15 - (y ? 25 : 0), finalErrStd: 1.2 + gauss(r) * 0.3, occludedTrackZ: gauss(r) + (y && r() < 0.3 ? 4 : 0) };
    return { id: `SYNTHETIC-${seed}-${i}`, y: y as 0 | 1, x: featuresFrom(ind) };
  });
}

describe("ac-model (SYNTHETIC data only)", () => {
  it("stays rule-based until enough real labels exist", () => {
    expect(readiness([]).ready).toBe(false);
    expect(readiness(Array.from({ length: MIN_LABELS }, () => ({ y: 0 as const }))).ready).toBe(false); // one class only
    const mix = Array.from({ length: MIN_LABELS }, (_, i) => ({ y: (i % 4 === 0 ? 1 : 0) as 0 | 1 }));
    expect(readiness(mix).ready).toBe(true);
  });
  it("featuresFrom is neutral for missing data", () => {
    const f = featuresFrom({});
    for (const k of FEATURES) expect(f[k]).toBe(0);
    expect(featuresFrom({ hsZ: 1e9 }).hsZ).toBe(10);
  });
  it("learns separable synthetic data, explains predictions and passes activation gates", () => {
    const data = syntheticSamples(600, 0.25);
    const m = train(data, { now: new Date("2026-01-01T00:00:00Z") });
    expect(m.holdout.n).toBeGreaterThan(50);
    expect(m.holdout.fpr).toBeLessThanOrEqual(0.05);
    expect(activationVerdict(m).active).toBe(true);
    const hot = predict(m, featuresFrom({ hsZ: 4, flickZ: 5, fastReactionZ: 4, reactionStdMs: 20 }));
    const cold = predict(m, featuresFrom({ hsZ: 0, flickZ: 0, fastReactionZ: 0, reactionStdMs: 60, finalErrStd: 1.2 }));
    expect(hot.p).toBeGreaterThan(0.8);
    expect(cold.p).toBeLessThan(0.2);
    expect(hot.contributions[0].contribution).toBeGreaterThan(0);
    // flick is the most informative synthetic feature: it should carry a positive weight
    expect(m.weights[FEATURES.indexOf("flickZ")]).toBeGreaterThan(0);
  });
  it("does not activate a model trained on noise (false-positive guard)", () => {
    const r = rng(99);
    const noise: Sample[] = Array.from({ length: 400 }, (_, i) => ({ id: `SYNTHETIC-noise-${i}`, y: (r() < 0.3 ? 1 : 0) as 0 | 1, x: featuresFrom({ hsZ: gauss(r), flickZ: gauss(r), fastReactionZ: gauss(r) }) }));
    expect(activationVerdict(train(noise)).active).toBe(false);
  });
  it("holdout split is deterministic", () => { expect(isHoldout("abc")).toBe(isHoldout("abc")); });
});

/** SYNTHETIC view-sample generator (4 Hz). */
function series(fn: (t: number) => { err: number; vis: boolean; bear: number } | null, ms: number, e = 1): ViewSample[] {
  const out: ViewSample[] = [];
  for (let t = 0; t <= ms; t += 250) { const o = fn(t); out.push({ t, enemies: o ? [{ e, ...o }] : [] }); }
  return out;
}

describe("wallhack heuristic", () => {
  it("counts a crosshair following a hidden moving enemy", () => {
    const s = series((t) => ({ err: 2, vis: false, bear: 90 + t / 100 }), 2500);
    expect(findTracks(s)).toHaveLength(1);
  });
  it("ignores holding a common angle (bearing not moving) — pre-aim false positive", () => {
    const s = series(() => ({ err: 1, vis: false, bear: 90 }), 5000);
    expect(findTracks(s)).toHaveLength(0);
  });
  it("ignores tracking a VISIBLE enemy (legit aim)", () => {
    expect(findTracks(series((t) => ({ err: 1, vis: true, bear: 90 + t / 100 }), 4000))).toHaveLength(0);
  });
  it("ignores short sweeps under the duration threshold", () => {
    expect(findTracks(series((t) => ({ err: 2, vis: false, bear: 90 + t / 50 }), 1000))).toHaveLength(0);
  });
  it("handles yaw wrap-around", () => {
    expect(findTracks(series((t) => ({ err: 2, vis: false, bear: ((175 + t / 100) % 360) - (175 + t / 100 > 180 ? 360 : 0) }), 2500))).toHaveLength(1);
  });
  it("scores only sustained excess over long alive time", () => {
    const one = series((t) => ({ err: 2, vis: false, bear: t / 100 }), 2000);
    const shortGame = wallhackScore([{ aliveMs: 3 * 60000, samples: one }]);
    expect(shortGame.points).toBe(0);
    const legit = wallhackScore([{ aliveMs: 20 * 60000, samples: one }]); // one coincidental track in 20 min
    expect(legit.points).toBe(0);
    const many = Array.from({ length: 8 }, (_, i) => ({ aliveMs: 2 * 60000, samples: one.map((x) => ({ ...x, t: x.t + i * 10000 })) }));
    const sus = wallhackScore(many);
    expect(sus.tracks).toBe(8);
    expect(sus.points).toBeGreaterThan(0);
    expect(sus.points).toBeLessThanOrEqual(25);
  });
  it("parses the compact payload defensively", () => {
    const p = parseCompactSamples([[0, [[1, 25, 0, 90]]], "junk", [250, [[1, "x", 0, 1]]]]);
    expect(p).toHaveLength(2);
    expect(p[0].enemies[0]).toEqual({ e: 1, err: 2.5, vis: false, bear: 90 });
    expect(p[1].enemies).toHaveLength(0);
  });
});

const base: TrustInput = { accountAgeDays: 400, steamLevel: 20, cs2Hours: 1500, steamAccountAgeDays: 3000, matches: 150, reportsAgainstDistinct90d: 0, reportsUpheld: 0, reviewsConfirmed: 0, reviewsCleared: 0, hwBanLinked: false, accountBanned: false };
describe("trust", () => {
  it("veteran is high, fresh account normal-ish, confirmed cheater low", () => {
    expect(computeTrust(base).band).toBe("high");
    const fresh = computeTrust({ ...base, accountAgeDays: 1, steamLevel: null, cs2Hours: null, steamAccountAgeDays: null, matches: 0 });
    expect(fresh.band).toBe("normal");
    expect(computeTrust({ ...base, reviewsConfirmed: 1 }).band).toBe("low");
    expect(computeTrust({ ...base, hwBanLinked: true }).score).toBeLessThan(computeTrust(base).score - 30);
  });
  it("a private Steam profile is neutral, not a penalty", () => {
    const p = computeTrust({ ...base, steamLevel: null, cs2Hours: null, steamAccountAgeDays: null, accountAgeDays: 0, matches: 0 });
    expect(p.score).toBe(40);
  });
  it("one or two reports (salty opponents) do not lower trust", () => {
    expect(computeTrust({ ...base, reportsAgainstDistinct90d: 2 }).score).toBe(computeTrust(base).score);
    expect(computeTrust({ ...base, reportsAgainstDistinct90d: 50 }).score).toBe(computeTrust(base).score - 15);
  });
  it("pickByTrust keeps the oldest, prefers same band, and stops caring after the max wait", () => {
    const now = new Date(1_000_000_000);
    const at = (s: number) => new Date(now.getTime() - s * 1000);
    const e = Array.from({ length: 14 }, (_, i) => ({ userId: `u${i}`, joinedAt: at(100 - i) }));
    const t = new Map(e.map((x, i) => [x.userId, i === 0 || i >= 9 ? 20 : 80]));
    const pick = pickByTrust(e, t, 10, now);
    expect(pick[0]).toBe("u0");
    expect(pick.filter((id) => trustBand(t.get(id)!) === "low").length).toBe(6); // u0 + u9..u13
    const old = e.map((x, i) => (i === 0 ? { ...x, joinedAt: new Date(now.getTime() - TRUST_MAX_WAIT_MS - 1) } : x));
    expect(pickByTrust(old, t, 10, now)).toEqual(old.slice(0, 10).map((x) => x.userId));
    expect(pickByTrust(e.slice(0, 5), t, 10, now)).toEqual([]);
  });
});

describe("overwatch", () => {
  const vet = { accountAgeDays: 400, matches: 200, trust: 80, banned: false, confirmedReviews: 0, verified: true };
  it("eligibility rules", () => {
    expect(eligibility(vet).eligible).toBe(true);
    expect(eligibility({ ...vet, accountAgeDays: 10 }).eligible).toBe(false);
    expect(eligibility({ ...vet, confirmedReviews: 1 }).missing).toContain("account has a confirmed anti-cheat review");
  });
  it("tally needs quorum and 75% agreement", () => {
    expect(tally(["aim", "wall", "aim"]).consensus).toBeNull();
    expect(tally(["aim", "wall", "aim", "other_cheat", "clean"]).consensus).toBe("cheating");
    expect(tally(["aim", "clean", "aim", "clean", "clean"]).consensus).toBe("split");
    expect(tally(["insufficient", "clean", "clean", "clean", "clean"]).consensus).toBe("clean");
  });
  it("timeline and text are anonymised", () => {
    const tl = anonymizedTimeline([{ round: 3, tick: 640, weapon: "weapon_ak47", headshot: true, wallbang: false, throughSmoke: true, attackerBlind: false, flagged: ["snap-to-target"] }]);
    expect(tl[0]).toEqual({ round: 3, t: 10, weapon: "ak47", flags: ["snap-to-target", "headshot", "through smoke"] });
    expect(JSON.stringify(tl)).not.toMatch(/7656/);
    expect(scrub("player 76561198000000001 at https://steamcommunity.com/id/x")).toBe("player [player] at https://[link]");
    expect(safeDemoUrl("javascript:alert(1)")).toBeNull();
    expect(safeDemoUrl("https://demos.example/a.dem")).toBe("https://demos.example/a.dem");
  });
});

describe("match reports", () => {
  const ok = { reporterInLobby: true, targetInLobby: true, self: false, lobbyEndedAt: new Date(0), lobbyStarted: true, reportsToday: 0, reportsThisMatch: 0, alreadyReportedTarget: false, now: new Date(1000) };
  it("validates membership, duplicates and rate limits", () => {
    expect(checkReport(ok)).toEqual({ ok: true });
    expect(checkReport({ ...ok, self: true })).toMatchObject({ error: "self" });
    expect(checkReport({ ...ok, targetInLobby: false })).toMatchObject({ error: "not_in_match" });
    expect(checkReport({ ...ok, lobbyStarted: false })).toMatchObject({ error: "match_not_started" });
    expect(checkReport({ ...ok, alreadyReportedTarget: true })).toMatchObject({ error: "duplicate" });
    expect(checkReport({ ...ok, reportsToday: MATCH_REPORTS_PER_DAY })).toMatchObject({ error: "rate_limited" });
    expect(checkReport({ ...ok, now: new Date(2 * 86400_000) })).toMatchObject({ error: "too_late" });
    expect(cleanDetails("a\u0000b".repeat(200)).length).toBe(300);
  });
});

describe("signed rules", () => {
  const { privateKey, publicKey } = generateKeyPairSync("ed25519");
  const pub = publicKey.export({ format: "pem", type: "spki" }).toString();
  it("signs, verifies, rejects tampering and expiry", () => {
    const s = signRules(normalizeRules({ processes: ["B", "a", "a"], windows: [], modules: [], launchFlags: [], files: [] }), 5, privateKey, 1000);
    const p = verifyRules(s, pub, 1000);
    expect(p?.version).toBe(5);
    expect(p?.rules.processes).toEqual(["a", "b"]);
    expect(verifyRules({ ...s, payload: s.payload.replace('"a"', '"z"') }, pub, 1000)).toBeNull();
    expect(verifyRules(s, pub, 1000 + 15 * 86400)).toBeNull();
    const other = generateKeyPairSync("ed25519").publicKey.export({ format: "pem", type: "spki" }).toString();
    expect(verifyRules(s, other, 1000)).toBeNull();
  });
  it("canonical JSON is key-order independent", () => { expect(canonical({ b: 1, a: [2, { d: 1, c: 2 }] })).toBe(canonical({ a: [2, { c: 2, d: 1 }], b: 1 })); });
});
