/**
 * R60 signed detection-rule payload delivered to A.C.E desktop without an app release.
 * Ed25519 over the canonical JSON string. The desktop embeds the public key, verifies, rejects older versions.
 */
import { createPrivateKey, createPublicKey, sign as edSign, verify as edVerify, type KeyObject } from "node:crypto";

export type RuleSet = { processes: string[]; windows: string[]; modules: string[]; launchFlags: string[]; files: string[] };
export type RulesPayload = { v: 1; version: number; issuedAt: number; expiresAt: number; rules: RuleSet };
export type SignedRules = { payload: string; sig: string; alg: "ed25519"; kid: string };
export const RULES_TTL_SEC = 14 * 24 * 3600;

const list = (v: unknown, n = 300) => [...new Set((Array.isArray(v) ? v : []).filter((x): x is string => typeof x === "string").map((x) => x.trim().toLowerCase().slice(0, 120)).filter(Boolean))].slice(0, n).sort();
export function normalizeRules(r: Partial<Record<keyof RuleSet, unknown>>): RuleSet {
  return { processes: list(r.processes), windows: list(r.windows), modules: list(r.modules), launchFlags: list(r.launchFlags, 50), files: list(r.files, 50) };
}
/** Stable JSON (sorted keys) so the signature is reproducible. */
export function canonical(v: unknown): string {
  if (Array.isArray(v)) return `[${v.map(canonical).join(",")}]`;
  if (v && typeof v === "object") return `{${Object.keys(v as object).sort().map((k) => `${JSON.stringify(k)}:${canonical((v as Record<string, unknown>)[k])}`).join(",")}}`;
  return JSON.stringify(v);
}
/** Accepts PEM or base64-encoded PEM (env-friendly). */
export function loadPrivateKey(raw: string): KeyObject {
  const s = raw.trim();
  const pem = s.includes("BEGIN") ? s : Buffer.from(s, "base64").toString("utf8");
  return createPrivateKey(pem);
}
export function keyId(pub: KeyObject): string {
  return (pub.export({ format: "der", type: "spki" }) as Buffer).subarray(-32).toString("hex").slice(0, 16);
}
export function signRules(rules: RuleSet, version: number, priv: KeyObject, nowSec = Math.floor(Date.now() / 1000)): SignedRules {
  const p: RulesPayload = { v: 1, version, issuedAt: nowSec, expiresAt: nowSec + RULES_TTL_SEC, rules: normalizeRules(rules) };
  const payload = canonical(p);
  return { payload, sig: edSign(null, Buffer.from(payload), priv).toString("base64"), alg: "ed25519", kid: keyId(createPublicKey(priv)) };
}
export function verifyRules(env: SignedRules, pubPem: string, nowSec = Math.floor(Date.now() / 1000)): RulesPayload | null {
  try {
    if (!env || typeof env.payload !== "string" || typeof env.sig !== "string") return null;
    if (!edVerify(null, Buffer.from(env.payload), createPublicKey(pubPem), Buffer.from(env.sig, "base64"))) return null;
    const p = JSON.parse(env.payload) as RulesPayload;
    if (p.v !== 1 || !Number.isInteger(p.version) || p.expiresAt < nowSec) return null;
    return p;
  } catch { return null; }
}
