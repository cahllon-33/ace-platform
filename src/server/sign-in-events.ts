import { getPrisma } from "@/server/db";
import { coarseCountry, parseUserAgent } from "@/lib/user-agent";

export const SIGN_IN_RETENTION_MS = 90 * 24 * 60 * 60 * 1000;

/**
 * Records one successful Steam login. Never throws: a logging failure must not break sign-in.
 * Stores no IP address; only the 2-letter country header when Vercel provides one.
 * Opportunistically prunes rows older than 90 days.
 */
export async function recordSignInEvent(input: {
  userId: string;
  steamId: string;
  personaName: string;
  avatarUrl: string;
  isNewUser: boolean;
  userAgent: string | null;
  countryHeader: string | null;
}) {
  const prisma = getPrisma();
  const agent = parseUserAgent(input.userAgent);
  try {
    await prisma.signInEvent.create({
      data: {
        userId: input.userId,
        steamId: input.steamId,
        personaName: input.personaName.slice(0, 64),
        avatarUrl: input.avatarUrl.slice(0, 512),
        isNewUser: input.isNewUser,
        deviceType: agent.deviceType,
        os: agent.os,
        browser: agent.browser,
        country: coarseCountry(input.countryHeader),
      },
    });
  } catch (error) {
    console.error("[sign-in-events] record failed:", error instanceof Error ? error.message : error);
    return;
  }
  try {
    await prisma.signInEvent.deleteMany({ where: { createdAt: { lt: new Date(Date.now() - SIGN_IN_RETENTION_MS) } } });
  } catch {
    // Pruning is best-effort.
  }
}

/** Start of "today" in the operator's zone (Asia/Jerusalem), as a UTC Date. */
export function startOfDayInZone(now: Date, timeZone = "Asia/Jerusalem"): Date {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" })
      .formatToParts(now)
      .map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  const offset = asUtc - Math.floor(now.getTime() / 1000) * 1000;
  return new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day) - offset);
}
