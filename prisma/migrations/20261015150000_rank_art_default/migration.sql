-- rankArt becomes an explicit choice. NULL = no choice: a PREMIUM plan shows Premium art by default.
-- Before this migration STANDARD was only ever the column default and could not be told apart from a choice,
-- so existing STANDARD rows are reset to NULL (no explicit choice). Explicit PREMIUM rows are kept.
ALTER TABLE "User" ALTER COLUMN "rankArt" DROP NOT NULL;
ALTER TABLE "User" ALTER COLUMN "rankArt" DROP DEFAULT;
UPDATE "User" SET "rankArt" = NULL WHERE "rankArt" = 'STANDARD';
