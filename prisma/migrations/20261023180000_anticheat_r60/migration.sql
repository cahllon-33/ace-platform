-- R60 A.C.E integrity: additive only (no drops, no data changes). Safe to re-run.
-- AlterTable
ALTER TABLE "PlayerReport" ADD COLUMN IF NOT EXISTS "category" TEXT NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS "lobbyId" TEXT,
ADD COLUMN IF NOT EXISTS "source" TEXT NOT NULL DEFAULT 'web',
ADD COLUMN IF NOT EXISTS "targetUserId" TEXT;

-- AlterTable
ALTER TABLE "AnticheatReview" ADD COLUMN IF NOT EXISTS "modelP" DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS "source" TEXT NOT NULL DEFAULT 'analytics';

-- CreateTable
CREATE TABLE IF NOT EXISTS "Cs2ViewSample" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "matchKey" TEXT NOT NULL,
    "round" INTEGER NOT NULL DEFAULT 0,
    "steamId" TEXT NOT NULL,
    "aliveMs" INTEGER NOT NULL DEFAULT 0,
    "samples" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cs2ViewSample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "AnticheatModel" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'trained',
    "model" JSONB NOT NULL,
    "verdict" TEXT NOT NULL DEFAULT '',
    "labeled" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activatedAt" TIMESTAMP(3),

    CONSTRAINT "AnticheatModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "TrustProfile" (
    "userId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 50,
    "band" TEXT NOT NULL DEFAULT 'normal',
    "parts" JSONB NOT NULL,
    "steamLevel" INTEGER,
    "cs2Hours" DOUBLE PRECISION,
    "steamCreatedAt" TIMESTAMP(3),
    "steamFetchedAt" TIMESTAMP(3),
    "computedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrustProfile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "OverwatchCase" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "demoUrl" TEXT NOT NULL DEFAULT '',
    "timeline" JSONB NOT NULL,
    "summary" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),

    CONSTRAINT "OverwatchCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "OverwatchVote" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "verdict" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OverwatchVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Cs2ViewSample_eventId_key" ON "Cs2ViewSample"("eventId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Cs2ViewSample_matchKey_steamId_idx" ON "Cs2ViewSample"("matchKey", "steamId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Cs2ViewSample_createdAt_idx" ON "Cs2ViewSample"("createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "AnticheatModel_status_createdAt_idx" ON "AnticheatModel"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "OverwatchCase_reviewId_key" ON "OverwatchCase"("reviewId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "OverwatchCase_status_createdAt_idx" ON "OverwatchCase"("status", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "OverwatchVote_reviewerId_createdAt_idx" ON "OverwatchVote"("reviewerId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "OverwatchVote_caseId_reviewerId_key" ON "OverwatchVote"("caseId", "reviewerId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PlayerReport_lobbyId_reporterId_idx" ON "PlayerReport"("lobbyId", "reporterId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PlayerReport_targetSteamId_createdAt_idx" ON "PlayerReport"("targetSteamId", "createdAt");

-- AddForeignKey
DO $$ BEGIN
  ALTER TABLE "OverwatchVote" ADD CONSTRAINT "OverwatchVote_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "OverwatchCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

