/**
 * R49c single contact address. Default below; env ACE_CONTACT_EMAIL (inlined at build via next.config.ts) overrides it.
 * Locale text is written with DEFAULT_CONTACT_EMAIL; withContact() swaps in an override everywhere at load time.
 */
export const DEFAULT_CONTACT_EMAIL = "ace.platform.official@gmail.com";
export const CONTACT_EMAIL = (process.env.ACE_CONTACT_EMAIL || "").trim() || DEFAULT_CONTACT_EMAIL;

/** Deep-replace the default address with the configured one (identity when they match). */
export function withContact<T>(value: T, email: string = CONTACT_EMAIL): T {
  if (email === DEFAULT_CONTACT_EMAIL) return value;
  const walk = (v: unknown): unknown => {
    if (typeof v === "string") return v.split(DEFAULT_CONTACT_EMAIL).join(email);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(value) as T;
}
