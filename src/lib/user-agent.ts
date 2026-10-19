/** Coarse User-Agent classification for the admin sign-ins feed. The raw UA is never stored. */
export type DeviceType = "desktop" | "mobile" | "tablet" | "unknown";
export type CoarseAgent = { deviceType: DeviceType; os: string; browser: string };

export function parseUserAgent(ua: string | null | undefined): CoarseAgent {
  const s = (ua ?? "").slice(0, 512);
  if (!s.trim()) return { deviceType: "unknown", os: "", browser: "" };

  let os = "";
  if (/Windows NT/i.test(s)) os = "Windows";
  else if (/iPhone|iPad|iPod/i.test(s)) os = "iOS";
  else if (/Android/i.test(s)) os = "Android";
  else if (/CrOS/i.test(s)) os = "ChromeOS";
  else if (/Mac OS X|Macintosh/i.test(s)) os = "macOS";
  else if (/Linux/i.test(s)) os = "Linux";

  let browser = "";
  if (/Edg(e|A|iOS)?\//i.test(s)) browser = "Edge";
  else if (/OPR\/|Opera/i.test(s)) browser = "Opera";
  else if (/SamsungBrowser\//i.test(s)) browser = "Samsung Internet";
  else if (/Firefox\/|FxiOS\//i.test(s)) browser = "Firefox";
  else if (/Chrome\/|CriOS\//i.test(s)) browser = "Chrome";
  else if (/Safari\//i.test(s) && /Version\//i.test(s)) browser = "Safari";

  let deviceType: DeviceType = "desktop";
  if (/iPad|Tablet/i.test(s) || (/Android/i.test(s) && !/Mobile/i.test(s))) deviceType = "tablet";
  else if (/Mobi|iPhone|iPod|Android/i.test(s)) deviceType = "mobile";
  else if (!os && !browser) deviceType = "unknown";

  return { deviceType, os, browser };
}

/** Accepts only a 2-letter ISO country code (Vercel's x-vercel-ip-country); anything else → null. */
export function coarseCountry(value: string | null | undefined): string | null {
  const v = (value ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(v) && v !== "XX" ? v : null;
}
