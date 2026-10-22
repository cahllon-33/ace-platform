-- R48b: queue moderation, live score, server health. Additive only.
ALTER TABLE "QueueLobby" ADD COLUMN "scoreA" INTEGER, ADD COLUMN "scoreB" INTEGER, ADD COLUMN "roundsPlayed" INTEGER, ADD COLUMN "endedAt" TIMESTAMP(3);
ALTER TABLE "QueueLobbyPlayer" ADD COLUMN "waitedSec" INTEGER, ADD COLUMN "replaced" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "QueueBan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "reason" TEXT NOT NULL DEFAULT '',
    "until" TIMESTAMP(3),
    "createdBy" TEXT NOT NULL DEFAULT 'system',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    CONSTRAINT "QueueBan_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "QueueBan_userId_createdAt_idx" ON "QueueBan"("userId", "createdAt");
CREATE INDEX "QueueBan_kind_createdAt_idx" ON "QueueBan"("kind", "createdAt");
ALTER TABLE "QueueBan" ADD CONSTRAINT "QueueBan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "ServerAlert" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "message" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    CONSTRAINT "ServerAlert_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "ServerAlert_serverId_createdAt_idx" ON "ServerAlert"("serverId", "createdAt");

CREATE TABLE "AdminSetting" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "AdminSetting_pkey" PRIMARY KEY ("key")
);
