-- R37: admin "Sign-ins" feed. One row per successful Steam login.
-- Additive only: creates a new table, indexes and FK; no existing table or row is changed. No IP addresses stored.
-- CreateTable
CREATE TABLE "SignInEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "steamId" TEXT NOT NULL,
    "personaName" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL DEFAULT '',
    "isNewUser" BOOLEAN NOT NULL DEFAULT false,
    "deviceType" TEXT NOT NULL DEFAULT 'unknown',
    "os" TEXT NOT NULL DEFAULT '',
    "browser" TEXT NOT NULL DEFAULT '',
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SignInEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SignInEvent_createdAt_idx" ON "SignInEvent"("createdAt");

-- CreateIndex
CREATE INDEX "SignInEvent_userId_idx" ON "SignInEvent"("userId");

-- AddForeignKey
ALTER TABLE "SignInEvent" ADD CONSTRAINT "SignInEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

