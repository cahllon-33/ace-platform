import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Topplista",
    "description": "A.C.E:s tävlingstavla. Sparade Steam-konton visas först. Tomma platser förblir exempelrader."
  },
  "hero": {
    "kicker": "TOPPLISTA",
    "title": "Tävlingstavla",
    "note": "Exempelplatser fyller tavlan tills spelare kopplar Steam och får en rating. Land och utvalt vapen är illustrativa. Vapenbilderna är original från A.C.E:s studio, inte Valve-skins. Kills spåras ännu inte, så det utvalda vapnet är ingen toppfragstatistik."
  },
  "facts": {
    "seats": "Platser",
    "storedAccounts": "Sparade konton",
    "killsStored": "Sparade kills",
    "none": "Inga"
  },
  "empty": "Ingen exempelplats matchar det namnet.",
  "podiumLabel": "Topp tre",
  "boardLabel": "Tävlingstavla",
  "table": {
    "rank": "Placering",
    "player": "Spelare",
    "country": "Land",
    "tier": "Nivå",
    "leadWeapon": "Huvudvapen",
    "rating": "Rating"
  },
  "tags": {
    "stored": "Sparat konto",
    "showcase": "Exempel"
  },
  "weapon": {
    "sampleRender": "Signaturvapen",
    "notStored": "Inte sparat",
    "noKillSaved": "Inga kills sparade",
    "alt": "{name}"
  },
  "countries": {
    "il": "Israel",
    "us": "USA",
    "de": "Tyskland",
    "ua": "Ukraina",
    "se": "Sverige",
    "fr": "Frankrike",
    "pl": "Polen",
    "br": "Brasilien",
    "jp": "Japan",
    "kr": "Sydkorea"
  },
  "search": {
    "openLabel": "Öppna spelarsök",
    "srLabel": "Sök i topplistan",
    "fieldLabel": "Sök spelare",
    "placeholder": "Visningsnamn"
  }
};
