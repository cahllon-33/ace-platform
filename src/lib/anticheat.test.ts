import { describe, expect, it } from "vitest";
import { isFresh, matchBlocklist, parseExpectedHashes, requireAnticheat, sessionKey, signPayload, verifySignature, versionAtLeast } from "@/lib/anticheat";
import { DESKTOP_I18N } from "@/lib/desktop-i18n";
import { SITE_LOCALES } from "@/lib/languages";

describe("anticheat", () => {
  it("signs and verifies within the skew window only", () => {
    const k = sessionKey("secret", "s1");
    const now = 1_800_000_000;
    const sig = signPayload(k, now, "{}");
    expect(verifySignature(k, now, "{}", sig, now)).toBe(true);
    expect(verifySignature(k, now, "{\"x\":1}", sig, now)).toBe(false);
    expect(verifySignature(sessionKey("secret", "s2"), now, "{}", sig, now)).toBe(false);
    expect(verifySignature(k, now, "{}", sig, now + 1000)).toBe(false);
    expect(verifySignature(k, now, "{}", "zz", now)).toBe(false);
  });
  it("flags blocklisted processes, flags and bad hashes", () => {
    const v = matchBlocklist({ processes: ["explorer.exe", "CheatEngine-x86_64.exe"], windows: ["Spotify"], modules: [], launchArgs: "-novid -insecure", fileHashes: { "a.dll": "00" } }, { "a.dll": "f".repeat(64) });
    expect(v.map((x) => x.kind).sort()).toEqual(["file-hash", "launch-flag", "process"]);
    expect(matchBlocklist({ processes: ["steam.exe"], launchArgs: "-novid" })).toEqual([]);
  });
  it("freshness, flag, hashes, versions", () => {
    const now = new Date();
    expect(isFresh(new Date(now.getTime() - 10_000), now)).toBe(true);
    expect(isFresh(new Date(now.getTime() - 120_000), now)).toBe(false);
    expect(isFresh(null, now)).toBe(false);
    expect(requireAnticheat({})).toBe(false);
    expect(requireAnticheat({ ACE_REQUIRE_ANTICHEAT: "true" })).toBe(true);
    expect(parseExpectedHashes(`x=${"A".repeat(64)},bad=1`)).toEqual({ x: "a".repeat(64) });
    expect(versionAtLeast("1.2.0", "1.0.0")).toBe(true);
    expect(versionAtLeast("0.9.9", "1.0.0")).toBe(false);
  });
  it("desktop strings exist for every site locale", () => {
    const keys = Object.keys(DESKTOP_I18N.en).sort();
    for (const l of SITE_LOCALES) {
      const bag = DESKTOP_I18N[l.id];
      expect(bag, l.id).toBeDefined();
      expect(Object.keys(bag).sort(), l.id).toEqual(keys);
      for (const k of keys) expect((bag as Record<string, string>)[k].trim(), `${l.id}.${k}`).not.toBe("");
      if (l.id !== "en") expect(bag.lede, l.id).not.toBe(DESKTOP_I18N.en.lede);
    }
  });
});

import { gateVerdict, parseFindings, sessionStatus, allowedStatus, newNonce } from "./anticheat";
describe("R59 gate + findings", () => {
  const now = new Date("2026-10-23T10:00:00Z");
  const fresh = new Date(now.getTime() - 10_000), stale = new Date(now.getTime() - 120_000);
  it("always allows when not required", () => { expect(gateVerdict({ required: false, userFound: false, session: null, hwBanned: true }, now).allow).toBe(true); });
  it("kicks without a fresh session when required", () => {
    expect(gateVerdict({ required: true, userFound: true, session: null, hwBanned: false }, now)).toMatchObject({ allow: false, reason: "no-session" });
    expect(gateVerdict({ required: true, userFound: true, session: { lastHeartbeatAt: stale, status: "clean" }, hwBanned: false }, now).allow).toBe(false);
    expect(gateVerdict({ required: true, userFound: false, session: null, hwBanned: false }, now).reason).toBe("no-account");
  });
  it("allows clean and review sessions, blocks flagged and hw-banned", () => {
    expect(gateVerdict({ required: true, userFound: true, session: { lastHeartbeatAt: fresh, status: "clean" }, hwBanned: false }, now).allow).toBe(true);
    expect(gateVerdict({ required: true, userFound: true, session: { lastHeartbeatAt: fresh, status: "review" }, hwBanned: false }, now).allow).toBe(true);
    expect(gateVerdict({ required: true, userFound: true, session: { lastHeartbeatAt: fresh, status: "flagged" }, hwBanned: false }, now).reason).toBe("integrity-flagged");
    expect(gateVerdict({ required: true, userFound: true, session: { lastHeartbeatAt: fresh, status: "clean" }, hwBanned: true }, now).allow).toBe(false);
  });
  it("soft findings go to review, hard rules block", () => {
    expect(sessionStatus([])).toBe("clean");
    expect(sessionStatus([{ kind: "overlay" }, { kind: "vm" }])).toBe("review");
    expect(sessionStatus([{ kind: "overlay" }, { kind: "process" }])).toBe("flagged");
    expect(allowedStatus("review")).toBe(true); expect(allowedStatus("flagged")).toBe(false);
  });
  it("drops unknown finding kinds (client cannot self-assign a hard kind)", () => {
    expect(parseFindings([{ kind: "process", detail: "x" }, { kind: "handle", detail: "y", severity: "high" }, null])).toEqual([{ kind: "handle", severity: "high", detail: "y" }]);
  });
  it("nonces are unique", () => { expect(newNonce()).not.toBe(newNonce()); expect(newNonce()).toMatch(/^[a-f0-9]{36}$/); });
});

describe("R61 automatic permanent ban", () => {
  it("only definite program/window/module matches auto-ban", async () => {
    const { autoBanTriggers, autoBanReason, AUTO_BAN_PREFIX } = await import("./anticheat");
    const all = [
      { kind: "process", detail: "cheatengine.exe" }, { kind: "launch-flag", detail: "-insecure" }, { kind: "file-hash", detail: "client.dll" },
      { kind: "tamper", detail: "x" }, { kind: "handle", detail: "y" }, { kind: "overlay", detail: "z" }, { kind: "asar", detail: "a" },
    ];
    expect(autoBanTriggers(all).map((x) => x.kind)).toEqual(["process"]);
    expect(autoBanTriggers(all.slice(1))).toEqual([]);
    expect(autoBanReason([{ kind: "process", detail: "cheatengine.exe" }])).toBe(`${AUTO_BAN_PREFIX}: process=cheatengine.exe`);
  });
});
