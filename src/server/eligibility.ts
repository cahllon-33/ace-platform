import { getPrisma } from "@/server/db";

export type EligibilityDecision = {
  steamId: string;
  decision: "ALLOW" | "DENY";
  reason: string;
};

const BLOCKING_STATUS = new Set(["SUSPENDED", "BANNED", "TEMP_BANNED", "PERM_BANNED", "UNDER_REVIEW"]);

export async function evaluateEligibility(
  steamId: string,
  mode: "ranked" | "managed" = "managed",
): Promise<EligibilityDecision> {
  if (mode === "ranked") {
    return {
      steamId,
      decision: "DENY",
      reason: "Ranked matchmaking is closed until a verified Anti-Cheat path exists.",
    };
  }

  const prisma = getPrisma();
  const user = await prisma.user.findUnique({
    where: { steamId },
    include: {
      bans: { orderBy: { createdAt: "desc" }, take: 5 },
      matchPlayers: {
        where: { match: { state: "IN_PROGRESS" } },
        include: { match: true },
      },
    },
  });

  if (!user) {
    return { steamId, decision: "DENY", reason: "No A.C.E account is linked to this SteamID." };
  }

  if (BLOCKING_STATUS.has(user.accountStatus)) {
    const ban = user.bans[0];
    if (user.accountStatus === "TEMP_BANNED" && ban?.expiresAt && ban.expiresAt.getTime() <= Date.now()) {
      // expired temp ban does not auto-clear status here; fail closed until staff restore ACTIVE
    }
    return {
      steamId,
      decision: "DENY",
      reason: `Account status ${user.accountStatus} is not eligible.`,
    };
  }

  if (user.matchPlayers.length > 0) {
    return {
      steamId,
      decision: "DENY",
      reason: "Player is already assigned to an in-progress A.C.E match.",
    };
  }

  return {
    steamId,
    decision: "ALLOW",
    reason: "Account is ACTIVE, unbanned for managed servers, and not in a live match.",
  };
}

export function timingSafeEqualString(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}
