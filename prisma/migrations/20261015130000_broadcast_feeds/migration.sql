-- CreateTable
CREATE TABLE "BroadcastFeed" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "embedUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BroadcastFeed_pkey" PRIMARY KEY ("id")
);
