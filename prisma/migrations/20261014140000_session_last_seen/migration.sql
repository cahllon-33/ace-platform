-- Website presence uses a recent visit, not the full 14-day session lifetime.
ALTER TABLE "UserSession" ADD COLUMN "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
CREATE INDEX "UserSession_lastSeenAt_idx" ON "UserSession"("lastSeenAt");
