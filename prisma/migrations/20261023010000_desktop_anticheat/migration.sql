-- R51 A.C.E desktop anti-cheat
CREATE TABLE "AnticheatSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clientVersion" TEXT NOT NULL DEFAULT '',
    "machineHash" TEXT NOT NULL DEFAULT '',
    "lastHeartbeatAt" TIMESTAMP(3),
    "lastSeq" INTEGER NOT NULL DEFAULT 0,
    "cs2Running" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'clean',
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnticheatSession_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "AnticheatEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT,
    "kind" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'warn',
    "detail" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnticheatEvent_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "AnticheatSession_userId_lastHeartbeatAt_idx" ON "AnticheatSession"("userId", "lastHeartbeatAt");
CREATE INDEX "AnticheatEvent_createdAt_idx" ON "AnticheatEvent"("createdAt");
CREATE INDEX "AnticheatEvent_userId_createdAt_idx" ON "AnticheatEvent"("userId", "createdAt");
ALTER TABLE "AnticheatSession" ADD CONSTRAINT "AnticheatSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AnticheatEvent" ADD CONSTRAINT "AnticheatEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AnticheatEvent" ADD CONSTRAINT "AnticheatEvent_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "AnticheatSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
