import { NextResponse } from "next/server";

const MAX_BODY_BYTES = 16 * 1024;

/** Parse a JSON object body. Returns null for malformed, oversized or non-object bodies. */
export async function readJsonObject(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return null;
    const parsed: unknown = JSON.parse(text);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export function badRequest(message = "Invalid request body.") {
  return NextResponse.json({ error: message }, { status: 400 });
}

/** Accept a non-empty string up to `max` characters; anything else becomes undefined. */
export function optionalString(value: unknown, max = 200): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= max ? trimmed : undefined;
}

/**
 * Only plain application errors (thrown with `new Error("…")` by our server modules) are shown
 * to clients. Database/driver errors carry a `code` or a Prisma class name and are replaced by the fallback.
 */
export function publicErrorMessage(error: unknown, fallback: string): string {
  if (!(error instanceof Error)) return fallback;
  const name = error.constructor?.name ?? "";
  if (name.startsWith("Prisma") || "code" in error || error.message.length > 200) return fallback;
  return error.message;
}
