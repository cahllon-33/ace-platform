-- R30: store the Steam community profile URL and the last Steam persona sync time.
-- Additive only: existing rows get "" and NULL, nothing is dropped or rewritten.
ALTER TABLE "User" ADD COLUMN "steamProfileUrl" TEXT NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN "steamSyncedAt" TIMESTAMP(3);
