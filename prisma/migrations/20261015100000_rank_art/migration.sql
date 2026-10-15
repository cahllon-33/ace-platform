-- Premium rank art choice. The application only honours PREMIUM while subscriptionTier is PREMIUM.
CREATE TYPE "RankArt" AS ENUM ('STANDARD', 'PREMIUM');
ALTER TABLE "User" ADD COLUMN "rankArt" "RankArt" NOT NULL DEFAULT 'STANDARD';
