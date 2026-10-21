-- Additive: player reports (admin queue) and in-site notifications.
CREATE TABLE "PlayerReport" (
  "id" TEXT NOT NULL,
  "reporterId" TEXT NOT NULL,
  "targetSteamId" TEXT NOT NULL,
  "reason" TEXT NOT NULL,
  "details" TEXT NOT NULL DEFAULT '',
  "status" TEXT NOT NULL DEFAULT 'open',
  "resolvedBy" TEXT,
  "resolvedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PlayerReport_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "PlayerReport_status_createdAt_idx" ON "PlayerReport"("status", "createdAt");
CREATE INDEX "PlayerReport_reporterId_createdAt_idx" ON "PlayerReport"("reporterId", "createdAt");
ALTER TABLE "PlayerReport" ADD CONSTRAINT "PlayerReport_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "Notification" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "readAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Notification_userId_readAt_idx" ON "Notification"("userId", "readAt");
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
