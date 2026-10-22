-- R50 Discord match integration
ALTER TABLE "User" ADD COLUMN "discordId" TEXT;
ALTER TABLE "User" ADD COLUMN "discordUsername" TEXT NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN "discordLinkedAt" TIMESTAMP(3);
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
ALTER TABLE "QueueLobby" ADD COLUMN "serverPassword" TEXT;
ALTER TABLE "QueueLobby" ADD COLUMN "discord" JSONB;
