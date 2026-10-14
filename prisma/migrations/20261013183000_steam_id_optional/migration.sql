-- Operator disconnect clears the Steam link. PostgreSQL unique indexes allow multiple NULLs.
ALTER TABLE "User" ALTER COLUMN "steamId" DROP NOT NULL;
