import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Ranglista",
    "description": "Az A.C.E. versenytáblája. A tárolt Steam-fiókok jelennek meg elöl. Az üres helyek bemutató sorok maradnak."
  },
  "hero": {
    "kicker": "RANGLISTA",
    "title": "Versenytábla",
    "note": "Bemutató helyek töltik ki a táblát, amíg a játékosok össze nem kapcsolják a Steamet és értékelést nem szereznek. Országuk és kiemelt fegyverük szemléltető. A fegyverképek eredeti A.C.E. stúdiógrafikák, nem Valve skinek. Az ölések még nincsenek követve, így a kiemelt fegyver nem top-frag statisztika."
  },
  "facts": {
    "seats": "Helyek",
    "storedAccounts": "Tárolt fiókok",
    "killsStored": "Tárolt ölések",
    "none": "Nincs"
  },
  "empty": "Egy bemutató hely sem egyezik ezzel a névvel.",
  "podiumLabel": "Első három hely",
  "boardLabel": "Versenytábla",
  "table": {
    "rank": "Helyezés",
    "player": "Játékos",
    "country": "Ország",
    "tier": "Szint",
    "leadWeapon": "Fő fegyver",
    "rating": "Értékelés"
  },
  "tags": {
    "stored": "Tárolt fiók",
    "showcase": "Bemutató"
  },
  "weapon": {
    "sampleRender": "Jellegzetes fegyver",
    "notStored": "Nincs tárolva",
    "noKillSaved": "Nincs mentett ölés",
    "alt": "{name}"
  },
  "countries": {
    "il": "Izrael",
    "us": "Egyesült Államok",
    "de": "Németország",
    "ua": "Ukrajna",
    "se": "Svédország",
    "fr": "Franciaország",
    "pl": "Lengyelország",
    "br": "Brazília",
    "jp": "Japán",
    "kr": "Dél-Korea"
  },
  "search": {
    "openLabel": "Játékoskeresés megnyitása",
    "srLabel": "Keresés a ranglistán",
    "fieldLabel": "Játékosok keresése",
    "placeholder": "Megjelenített név"
  }
};
