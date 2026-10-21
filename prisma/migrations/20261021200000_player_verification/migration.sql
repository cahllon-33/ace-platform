-- R41: additive only. Operator verification timestamp (null = not verified).
ALTER TABLE "User" ADD COLUMN "verifiedAt" TIMESTAMP(3);
