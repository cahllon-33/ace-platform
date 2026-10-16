function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return value;
}

export function getSessionSecret(): string {
  return required("SESSION_SECRET");
}

export function getAppBaseUrl(): string {
  const configured = process.env.APP_BASE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.NODE_ENV === "production") {
    throw new Error("Missing environment variable APP_BASE_URL");
  }
  return "http://localhost:3000";
}

export function getSteamApiKey(): string | undefined {
  // Read at call time (never cached at module load). Tolerate a value pasted with surrounding quotes.
  const key = process.env.STEAM_API_KEY?.trim().replace(/^(["'])(.*)\1$/, "$2").trim();
  return key ? key : undefined;
}

export function getCs2ServerSecret(): string {
  return required("CS2_SERVER_SHARED_SECRET");
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
