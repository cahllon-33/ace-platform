-- Additive: per-match stat line on MatchPlayer (all nullable) + per-weapon table.
ALTER TABLE "MatchPlayer" ADD COLUMN "kills" INTEGER, ADD COLUMN "deaths" INTEGER, ADD COLUMN "assists" INTEGER,
  ADD COLUMN "damage" INTEGER, ADD COLUMN "roundsPlayed" INTEGER, ADD COLUMN "headshotKills" INTEGER,
  ADD COLUMN "clutchesWon" INTEGER, ADD COLUMN "clutchesPlayed" INTEGER, ADD COLUMN "entryWins" INTEGER,
  ADD COLUMN "entryAttempts" INTEGER, ADD COLUMN "utilityDamage" INTEGER, ADD COLUMN "multi2k" INTEGER,
  ADD COLUMN "multi3k" INTEGER, ADD COLUMN "multi4k" INTEGER, ADD COLUMN "multi5k" INTEGER;

CREATE TABLE "MatchWeaponStat" (
  "id" TEXT NOT NULL,
  "matchPlayerId" TEXT NOT NULL,
  "weapon" TEXT NOT NULL,
  "kills" INTEGER NOT NULL DEFAULT 0,
  "headshotKills" INTEGER NOT NULL DEFAULT 0,
  "damage" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "MatchWeaponStat_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "MatchWeaponStat_matchPlayerId_weapon_key" ON "MatchWeaponStat"("matchPlayerId", "weapon");
ALTER TABLE "MatchWeaponStat" ADD CONSTRAINT "MatchWeaponStat_matchPlayerId_fkey" FOREIGN KEY ("matchPlayerId") REFERENCES "MatchPlayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
