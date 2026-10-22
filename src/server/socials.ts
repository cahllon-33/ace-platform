import { getPrisma } from "@/server/db";
import { SOCIALS, validSocialUrl, type Social } from "@/lib/socials";

/** Configured social links (DB first, then legacy NEXT_PUBLIC_SOCIAL_* env), only valid https URLs. */
export async function readSocials(): Promise<Partial<Record<Social, string>>> {
  const out: Partial<Record<Social, string>> = {};
  for (const n of SOCIALS) {
    const env = process.env[`NEXT_PUBLIC_SOCIAL_${n.toUpperCase()}`]?.trim();
    if (env && validSocialUrl(n, env)) out[n] = env;
  }
  try {
    const rows = await getPrisma().siteSetting.findMany({ where: { key: { startsWith: "social." } } });
    for (const r of rows) {
      const n = r.key.slice(7) as Social;
      if (!(SOCIALS as readonly string[]).includes(n)) continue;
      if (r.value === "") delete out[n];
      else if (validSocialUrl(n, r.value)) out[n] = r.value;
    }
  } catch {
    /* DB unavailable: env fallbacks only */
  }
  return out;
}
