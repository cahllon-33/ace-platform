import type { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export { prisma };

/** Shared singleton. Prefer `prisma` from `@/lib/prisma` for new server modules. */
export function getPrisma(): PrismaClient {
  return prisma;
}
