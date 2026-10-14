import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/** Compile-time proof the generated client exposes Stage 2 models. */
export type PrismaStage2Delegates = {
  user: typeof prisma.user;
  team: typeof prisma.team;
  matchHistory: typeof prisma.matchHistory;
};
