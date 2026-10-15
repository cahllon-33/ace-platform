-- A.C.E RP rules v2: new accounts start at 1,200 RP in tier 3. Defaults only; existing ratings are not changed.
ALTER TABLE "User" ALTER COLUMN "competitiveRating" SET DEFAULT 1200;
ALTER TABLE "User" ALTER COLUMN "rankLevel" SET DEFAULT 3;
