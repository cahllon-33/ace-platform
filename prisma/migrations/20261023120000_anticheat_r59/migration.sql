-- R59 A.C.E anti-cheat stage 1+2: kill telemetry, review queue, hardware bans, challenge nonce. Additive only (no data deleted).
ALTER TABLE "AnticheatSession" ADD COLUMN IF NOT EXISTS "nonce" TEXT NOT NULL DEFAULT '';
ALTER TABLE "AnticheatSession" ADD COLUMN IF NOT EXISTS "hwHash" TEXT NOT NULL DEFAULT '';
ALTER TABLE "AnticheatSession" ADD COLUMN IF NOT EXISTS "asarHash" TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS "Cs2KillTelemetry" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "matchKey" TEXT NOT NULL,
    "round" INTEGER NOT NULL DEFAULT 0,
    "attackerSteamId" TEXT NOT NULL,
    "victimSteamId" TEXT,
    "victimBot" BOOLEAN NOT NULL DEFAULT false,
    "weapon" TEXT NOT NULL DEFAULT '',
    "headshot" BOOLEAN NOT NULL DEFAULT false,
    "distance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "wallbang" BOOLEAN NOT NULL DEFAULT false,
    "throughSmoke" BOOLEAN NOT NULL DEFAULT false,
    "attackerBlind" BOOLEAN NOT NULL DEFAULT false,
    "noscope" BOOLEAN NOT NULL DEFAULT false,
    "attackerPos" JSONB,
    "victimPos" JSONB,
    "attackerAngles" JSONB,
    "trace" JSONB,
    "sampleMs" INTEGER NOT NULL DEFAULT 31,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Cs2KillTelemetry_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "Cs2KillTelemetry_eventId_key" ON "Cs2KillTelemetry"("eventId");
CREATE INDEX IF NOT EXISTS "Cs2KillTelemetry_matchKey_attackerSteamId_idx" ON "Cs2KillTelemetry"("matchKey", "attackerSteamId");
CREATE INDEX IF NOT EXISTS "Cs2KillTelemetry_attackerSteamId_createdAt_idx" ON "Cs2KillTelemetry"("attackerSteamId", "createdAt");

CREATE TABLE IF NOT EXISTS "AnticheatReview" (
    "id" TEXT NOT NULL,
    "matchKey" TEXT NOT NULL,
    "steamId" TEXT NOT NULL,
    "userId" TEXT,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "level" TEXT NOT NULL DEFAULT 'low',
    "indicators" JSONB NOT NULL,
    "reasons" JSONB NOT NULL,
    "kills" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'open',
    "note" TEXT NOT NULL DEFAULT '',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "AnticheatReview_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "AnticheatReview_matchKey_steamId_key" ON "AnticheatReview"("matchKey", "steamId");
CREATE INDEX IF NOT EXISTS "AnticheatReview_status_score_idx" ON "AnticheatReview"("status", "score");

CREATE TABLE IF NOT EXISTS "AnticheatHardwareBan" (
    "id" TEXT NOT NULL,
    "hwHash" TEXT NOT NULL,
    "userId" TEXT,
    "reason" TEXT NOT NULL DEFAULT '',
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    CONSTRAINT "AnticheatHardwareBan_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "AnticheatHardwareBan_hwHash_key" ON "AnticheatHardwareBan"("hwHash");
