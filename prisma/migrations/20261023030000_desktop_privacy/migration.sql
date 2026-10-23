-- R53 desktop privacy settings (additive, defaults keep current behaviour).
ALTER TABLE "User" ADD COLUMN "profileVisibility" TEXT NOT NULL DEFAULT 'public';
ALTER TABLE "User" ADD COLUMN "showOnline" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "User" ADD COLUMN "dmPolicy" TEXT NOT NULL DEFAULT 'friends';
