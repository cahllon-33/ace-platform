import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "statsConsole": {
    "metaTitle": "Játékosstatisztika",
    "kicker": "JÁTÉKOSSTATISZTIKA",
    "title": "Játékosstatisztika",
    "lede": "A rating alakulása a rögzített A.C.E meccseidből, fejlövés-% és pontosság mérőkkel. Része az A.C.E Plusnak (4 $/hó) és az A.C.E Premiumnak (7 $/hó).",
    "movementTitle": "Rating alakulása",
    "movementNote": "Minden pont egy rögzített A.C.E meccsből írt ratingváltozás.",
    "noMatches": "Még nincs rögzített meccs, ezért a grafikon üres. Az első rögzített A.C.E meccsed után feltöltődik.",
    "currentLabel": "Jelenlegi rating",
    "netLabel": "Nettó változás",
    "changesLabel": "Rögzített változások",
    "hsTitle": "Fejlövés-%",
    "accTitle": "Pontosság (találat / lövés)",
    "gaugeSoon": "Hamarosan: ezekhez a mérőkhöz meccsdemó-feldolgozás kell, ami még nem létezik.",
    "soon": "Hamarosan",
    "sample": "MINTA · csak forma, nem valós adat",
    "lockedTitle": "A játékosstatisztika az A.C.E Plus és Premium része",
    "lockedBody": "A tárolt csomagod Free. A Plus (4 $/hó) és a Premium (7 $/hó) is feloldja ezt az oldalt. Hamarosan: fizetés még nincs.",
    "signIn": "Jelentkezz be Steammel a statisztikáid megtekintéséhez.",
    "plansLink": "Csomagok megtekintése",
    "rosterNote": "Minta keretprofil: ezeknek a játékosoknak nincs rögzített A.C.E meccsük, ezért a statisztika nem mutat számokat.",
    "dashTitle": "Statisztika és elemzés",
    "dashStats": "Játékosstatisztika megnyitása",
    "dashAnalysis": "Meccselemzés megnyitása (Premium)",
    "chartAria": "Rating-alakulás diagram"
  },
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "Hitelesítve",
    "title": "Command Deck",
    "lede": "Bejelentkezve Steam OpenID-n keresztül. A munkamenet HttpOnly sütiben él, nem localStorage-ban. A ranked keresés zárva marad, amíg a csalásellenes rendszer nem valós.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Fiók állapota",
      "subscription": "Előfizetés",
      "rank": "A.C.E rang",
      "ratingPoints": "Értékelési pontok",
      "wins": "Győzelmek",
      "losses": "Vereségek",
      "accountId": "Belső fiókazonosító"
    },
    "accountStatuses": {
      "ACTIVE": "Aktív",
      "SUSPENDED": "Felfüggesztve",
      "BANNED": "Kitiltva",
      "TEMP_BANNED": "Ideiglenesen kitiltva",
      "PERM_BANNED": "Véglegesen kitiltva",
      "UNDER_REVIEW": "Felülvizsgálat alatt"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapitány",
      "PLAYER": "Játékos"
    },
    "settings": {
      "title": "VEZÉRLŐPULT BEÁLLÍTÁSAI",
      "billingNotLive": "Minden fiók Free, amíg nincs fizetés.",
      "cancelReason": "Nincs lemondható számlázott előfizetés. A fizetés nincs megvalósítva.",
      "cancelButton": "Előfizetés lemondása"
    },
    "rankedReason": "A ranked párosítás megtagadva, amíg nincs ellenőrzött csalásellenes integráció.",
    "rankedButton": "Ranked meccs keresése",
    "roster": {
      "title": "5v5 keret",
      "body": "Egy kapitány. Négy meghívó. A kapitányok más A.C.E-fiókazonosítókat hívnak meg, amelyek csak ellenőrzött Steam-bejelentkezés után jönnek létre."
    },
    "pendingInvites": "Függő meghívók"
  },
  "forms": {
    "requestFailed": "A kérés sikertelen.",
    "createTeam": {
      "acceptRequired": "A folytatáshoz fogadd el a Felhasználási feltételeket, az Anti-Cheat EULA-t és az Adatvédelmi szabályzatot.",
      "failed": "Nem sikerült csapatot létrehozni.",
      "nameLabel": "Új 5v5 csapat neve",
      "submitAria": "Új 5v5 csapat alapítása",
      "submit": "Csapat alapítása"
    },
    "invite": {
      "failed": "A meghívás sikertelen.",
      "label": "Szabad játékos meghívása SteamID-vel vagy A.C.E-fiókazonosítóval",
      "submitAria": "Csapatmeghívó küldése",
      "submit": "Meghívó küldése"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Játékosprofil",
      "title": "{name} · A.C.E profil",
      "description": "A.C.E játékosdosszié. A Plus és Premium munkamenetek feloldják a telemetriai trendgrafikonokat."
    },
    "kicker": "Játékos identitása",
    "bannerPlaceholder": "Profilbanner · hamarosan",
    "levelBadge": "{level}. SZINT",
    "rosterLevel": "Keretszint {level}.",
    "trend": {
      "title": "Versenyértékelés teljesítménytrendje",
      "note": "Értékelési pontok egymást követő meccstörténeti bejegyzéseken."
    },
    "combat": {
      "title": "Részletes harci adatmátrix",
      "kills": "Összes ölés",
      "deaths": "Összes halál",
      "kd": "Számított K/D",
      "headshots": "Összes fejlövés",
      "headshotPct": "Fejlövés % tartomány",
      "knifeKills": "Különleges késes ölések"
    },
    "weapon": {
      "title": "Jellegzetes fegyver-specializáció",
      "note": "Elsődleges kalibrált fegyverplatform",
      "accuracy": "Pontossági értékelés",
      "kills": "Összes fegyveres ölés"
    },
    "gear": {
      "title": "Asztali gép specifikációi",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Monitor frissítési frekvencia (Hz)",
      "mouse": "Egérmodell",
      "dpi": "Aktív DPI-beállítás"
    },
    "networksTitle": "Steam-profil link",
    "back": "Vissza a klán keretéhez"
  },
  "networks": {
    "note": "Az ide írt link ebben a böngészőben marad, és nem kerül mentésre. Az A.C.E soha nem kéri a Steam-jelszavadat.",
    "labels": {
      "steam": "Steam-profil"
    },
    "open": "{label} megnyitása >"
  },
  "ratingTrend": {
    "chartAria": "Versenyértékelés teljesítménytrendje",
    "pointAria": "{match}. meccs: {rating} értékelés",
    "axisLabel": "M{match}",
    "idle": "Vidd az egeret egy csomópont fölé az értékelési bejegyzés megtekintéséhez.",
    "readout": "{match}. meccs · {rating} értékelés"
  },
  "loginError": {
    "meta": {
      "title": "Bejelentkezési hiba"
    },
    "title": "A Steam-bejelentkezés nem fejeződött be",
    "notConfigured": "A Steam OpenID még nincs beállítva ezen a szerveren. Az A.C.E soha nem kéri a Steam-jelszavadat.",
    "unavailable": "A Steam nem válaszolt az ellenőrzési kérésre. Próbáld újra egy pillanat múlva. Az A.C.E soha nem kéri a Steam-jelszavadat.",
    "unverified": "Az OpenID visszahívást nem sikerült ellenőrizni a szerveren. Az A.C.E soha nem kéri a Steam-jelszavadat.",
    "returnHome": "Vissza a kezdőlapra"
  }
};
