-- R47: DatHost match webhook + CS2 bridge plugin events. Additive only.
ALTER TABLE "Match" ADD COLUMN "externalId" TEXT;
ALTER TABLE "Match" ADD COLUMN "gameServerId" TEXT;
CREATE UNIQUE INDEX "Match_externalId_key" ON "Match"("externalId");

ALTER TABLE "MatchPlayer" ADD COLUMN "mvps" INTEGER;

CREATE TABLE "Cs2PluginEvent" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "matchId" TEXT,
    "payload" JSONB NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Cs2PluginEvent_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Cs2PluginEvent_eventId_key" ON "Cs2PluginEvent"("eventId");
CREATE INDEX "Cs2PluginEvent_serverId_receivedAt_idx" ON "Cs2PluginEvent"("serverId", "receivedAt");
CREATE INDEX "Cs2PluginEvent_matchId_idx" ON "Cs2PluginEvent"("matchId");
