-- R49b (additive): Steam inventory showcase + Paddle refund revocation.
ALTER TABLE "User" ADD COLUMN "inventoryHidden" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "PaddleOrder" ADD COLUMN "refundedAt" TIMESTAMP(3);

CREATE TABLE "SteamInventoryCache" (
    "steamId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "fetchedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SteamInventoryCache_pkey" PRIMARY KEY ("steamId")
);

CREATE TABLE "SteamMarketPrice" (
    "marketHashName" TEXT NOT NULL,
    "lowest" TEXT,
    "fetchedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SteamMarketPrice_pkey" PRIMARY KEY ("marketHashName")
);
