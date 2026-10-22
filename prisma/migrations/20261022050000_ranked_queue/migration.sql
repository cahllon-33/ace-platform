-- R48: ranked 5v5 solo queue, ready check, map veto, DatHost lobby. Additive only.
CREATE TABLE "QueueEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rp" INTEGER NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "QueueEntry_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "QueueEntry_userId_key" ON "QueueEntry"("userId");
CREATE INDEX "QueueEntry_joinedAt_idx" ON "QueueEntry"("joinedAt");
ALTER TABLE "QueueEntry" ADD CONSTRAINT "QueueEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "QueueLobby" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'READY',
    "isTest" BOOLEAN NOT NULL DEFAULT false,
    "readyDeadline" TIMESTAMP(3),
    "mapPool" TEXT[],
    "bans" JSONB NOT NULL DEFAULT '[]',
    "vetoTurn" TEXT,
    "vetoDeadline" TIMESTAMP(3),
    "captain1Id" TEXT,
    "captain2Id" TEXT,
    "map" TEXT,
    "dathostMatchId" TEXT,
    "matchId" TEXT,
    "connectUrl" TEXT,
    "serverAddress" TEXT,
    "error" TEXT NOT NULL DEFAULT '',
    "checkedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "QueueLobby_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "QueueLobby_dathostMatchId_key" ON "QueueLobby"("dathostMatchId");
CREATE UNIQUE INDEX "QueueLobby_matchId_key" ON "QueueLobby"("matchId");
CREATE INDEX "QueueLobby_state_idx" ON "QueueLobby"("state");

CREATE TABLE "QueueLobbyPlayer" (
    "id" TEXT NOT NULL,
    "lobbyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "rp" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "declined" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "QueueLobbyPlayer_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "QueueLobbyPlayer_lobbyId_userId_key" ON "QueueLobbyPlayer"("lobbyId", "userId");
CREATE INDEX "QueueLobbyPlayer_userId_idx" ON "QueueLobbyPlayer"("userId");
ALTER TABLE "QueueLobbyPlayer" ADD CONSTRAINT "QueueLobbyPlayer_lobbyId_fkey" FOREIGN KEY ("lobbyId") REFERENCES "QueueLobby"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "QueueLobbyPlayer" ADD CONSTRAINT "QueueLobbyPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
