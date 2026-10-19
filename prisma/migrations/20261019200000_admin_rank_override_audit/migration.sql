-- R40: additive only. Admin rank override bookkeeping, private operator notes, and an append-only audit log.
ALTER TABLE "User" ADD COLUMN "rankOverrideBaseRp" INTEGER;
ALTER TABLE "User" ADD COLUMN "rankOverrideAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "adminNote" TEXT NOT NULL DEFAULT '';

CREATE TABLE "AdminAuditLog" (
    "id" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "targetUserId" TEXT,
    "oldValue" TEXT NOT NULL DEFAULT '',
    "newValue" TEXT NOT NULL DEFAULT '',
    "reason" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AdminAuditLog_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "AdminAuditLog_targetUserId_createdAt_idx" ON "AdminAuditLog"("targetUserId", "createdAt");
CREATE INDEX "AdminAuditLog_createdAt_idx" ON "AdminAuditLog"("createdAt");
