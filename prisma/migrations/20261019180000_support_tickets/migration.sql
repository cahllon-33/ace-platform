-- R38-L: AI support chat escalations ("Send to the team") saved as tickets for the admin Support panel.
-- Additive only: creates one new table and one index; no existing table or row is changed. No IP addresses stored.
-- CreateTable
CREATE TABLE "SupportTicket" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "locale" TEXT NOT NULL DEFAULT 'en',
    "sessionKey" TEXT NOT NULL DEFAULT '',
    "userId" TEXT,
    "steamId" TEXT,
    "subject" TEXT NOT NULL DEFAULT '',
    "transcript" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SupportTicket_status_createdAt_idx" ON "SupportTicket"("status", "createdAt");
