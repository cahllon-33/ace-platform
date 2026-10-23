/** R60 signed rules feed: built-in blocklist + owner additions, Ed25519-signed with ACE_RULES_SIGNING_KEY (never logged). */
import { BLOCKLIST } from "@/lib/anticheat";
import { loadPrivateKey, signRules, normalizeRules, type SignedRules } from "@/lib/ac-rules";
import { extraBlockedProcesses } from "@/server/anticheat";
import { readSetting } from "@/server/server-health";

export const RULES_VERSION_SETTING = "anticheat.rulesVersion";

export async function signedRules(): Promise<SignedRules | null> {
  const raw = process.env.ACE_RULES_SIGNING_KEY;
  if (!raw?.trim()) return null;
  const extra = await extraBlockedProcesses();
  const version = Number((await readSetting(RULES_VERSION_SETTING).catch(() => null)) ?? "1") || 1;
  const rules = normalizeRules({ ...BLOCKLIST, processes: [...BLOCKLIST.processes, ...extra] });
  try { return signRules(rules, version, loadPrivateKey(raw)); } catch { return null; }
}
