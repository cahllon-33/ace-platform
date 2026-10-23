-- R71: durable admin tier override (additive only).
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "tierOverride" "SubscriptionTier";
