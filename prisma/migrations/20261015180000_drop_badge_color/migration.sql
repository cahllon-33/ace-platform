-- Owner decision (R18): badge color customization removed. Emblems always use fixed tier colors.
ALTER TABLE "User" DROP COLUMN IF EXISTS "badgeColor";
