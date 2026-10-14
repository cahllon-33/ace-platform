-- Stage 2 relational core: User/Team columns, captain relation, MatchHistory.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
UPDATE "User" SET "avatarUrl" = '' WHERE "avatarUrl" IS NULL;
ALTER TABLE "User" ALTER COLUMN "avatarUrl" SET DEFAULT '';
ALTER TABLE "User" ALTER COLUMN "avatarUrl" SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");

ALTER TABLE "Team" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "Team" ADD COLUMN IF NOT EXISTS "clanTag" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Team" ADD COLUMN IF NOT EXISTS "logoUrl" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Team" ADD COLUMN IF NOT EXISTS "captainId" TEXT;
ALTER TABLE "Team" ADD COLUMN IF NOT EXISTS "combinedWinRate" DOUBLE PRECISION NOT NULL DEFAULT 0;
ALTER TABLE "Team" ADD COLUMN IF NOT EXISTS "activeStreak" INTEGER NOT NULL DEFAULT 0;

UPDATE "Team" AS t
SET "captainId" = m."userId"
FROM "TeamMember" AS m
WHERE t."captainId" IS NULL
  AND m."teamId" = t.id
  AND m.role = 'CAPTAIN';

UPDATE "Team"
SET "clanTag" = COALESCE(NULLIF("tag", ''), UPPER(LEFT(REPLACE("name", ' ', ''), 5)), 'ACE')
WHERE "clanTag" = '';

ALTER TABLE "Team" ALTER COLUMN "captainId" SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "Team_name_key" ON "Team"("name");
CREATE INDEX IF NOT EXISTS "Team_captainId_idx" ON "Team"("captainId");

ALTER TABLE "Team"
  ADD CONSTRAINT "Team_captainId_fkey"
  FOREIGN KEY ("captainId") REFERENCES "User"("id")
  ON UPDATE CASCADE ON DELETE RESTRICT;

CREATE TABLE IF NOT EXISTS "MatchHistory" (
  "id" TEXT NOT NULL,
  "mapName" TEXT NOT NULL,
  "scoreTeamA" INTEGER NOT NULL,
  "scoreTeamB" INTEGER NOT NULL,
  "telemetryStatus" TEXT NOT NULL DEFAULT 'SECURE',
  "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "teamAId" TEXT,
  "teamBId" TEXT,

  CONSTRAINT "MatchHistory_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "MatchHistory_executedAt_idx" ON "MatchHistory"("executedAt");

ALTER TABLE "MatchHistory"
  ADD CONSTRAINT "MatchHistory_teamAId_fkey"
  FOREIGN KEY ("teamAId") REFERENCES "Team"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "MatchHistory"
  ADD CONSTRAINT "MatchHistory_teamBId_fkey"
  FOREIGN KEY ("teamBId") REFERENCES "Team"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;
