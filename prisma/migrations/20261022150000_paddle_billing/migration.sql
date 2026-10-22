-- R49 Paddle Billing (additive only).
ALTER TABLE "User" ADD COLUMN "paddleCustomerId" TEXT;
ALTER TABLE "User" ADD COLUMN "paddleSubscriptionId" TEXT;
ALTER TABLE "User" ADD COLUMN "subscriptionStatus" TEXT NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN "subscriptionExpiresAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "subscriptionEventAt" TIMESTAMP(3);
CREATE UNIQUE INDEX "User_paddleCustomerId_key" ON "User"("paddleCustomerId");
CREATE UNIQUE INDEX "User_paddleSubscriptionId_key" ON "User"("paddleSubscriptionId");

CREATE TABLE "PaddleEvent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "userId" TEXT,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "outcome" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaddleEvent_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "PaddleEvent_userId_idx" ON "PaddleEvent"("userId");
CREATE INDEX "PaddleEvent_createdAt_idx" ON "PaddleEvent"("createdAt");

-- R49 cosmetics + paid tournament entry (additive only).
ALTER TABLE "Tournament" ADD COLUMN "entryFeeCents" INTEGER;
CREATE TYPE "CosmeticKind" AS ENUM ('FRAME', 'BANNER', 'CARD_EFFECT', 'NAME_COLOR');
CREATE TABLE "CosmeticItem" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "kind" "CosmeticKind" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "priceCents" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CosmeticItem_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CosmeticItem_slug_key" ON "CosmeticItem"("slug");
CREATE TABLE "CosmeticOwnership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "equipped" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CosmeticOwnership_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CosmeticOwnership_orderId_key" ON "CosmeticOwnership"("orderId");
CREATE UNIQUE INDEX "CosmeticOwnership_userId_itemId_key" ON "CosmeticOwnership"("userId", "itemId");
CREATE INDEX "CosmeticOwnership_userId_idx" ON "CosmeticOwnership"("userId");
ALTER TABLE "CosmeticOwnership" ADD CONSTRAINT "CosmeticOwnership_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "CosmeticItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE "PaddleOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "refId" TEXT NOT NULL,
    "teamId" TEXT,
    "amountCents" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    CONSTRAINT "PaddleOrder_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "PaddleOrder_userId_idx" ON "PaddleOrder"("userId");
CREATE INDEX "PaddleOrder_kind_refId_idx" ON "PaddleOrder"("kind", "refId");

-- R49 owner-editable site settings (social links).
CREATE TABLE "SiteSetting" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("key")
);
