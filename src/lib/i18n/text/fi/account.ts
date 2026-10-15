import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "Tunnistettu",
    "title": "Command Deck",
    "lede": "Kirjauduttu Steam OpenID:n kautta. Istunto on HttpOnly-evästeessä, ei localStoragessa. Ranked-haku pysyy suljettuna, kunnes huijauksenesto on todellinen.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Tilin tila",
      "subscription": "Tilaus",
      "rank": "A.C.E.-ranking",
      "ratingPoints": "Luokituspisteet",
      "wins": "Voitot",
      "losses": "Tappiot",
      "accountId": "Sisäinen tilitunnus"
    },
    "accountStatuses": {
      "ACTIVE": "Aktiivinen",
      "SUSPENDED": "Jäädytetty",
      "BANNED": "Bannattu",
      "TEMP_BANNED": "Väliaikaisesti bannattu",
      "PERM_BANNED": "Pysyvästi bannattu",
      "UNDER_REVIEW": "Tarkastettavana"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapteeni",
      "PLAYER": "Pelaaja"
    },
    "settings": {
      "title": "HALLINTAPANEELIN ASETUKSET",
      "billingNotLive": "Jokainen tili on Free-paketissa, kunnes maksutoiminto on olemassa.",
      "cancelReason": "Peruttavaa laskutettua tilausta ei ole. Maksutoimintoa ei ole toteutettu.",
      "cancelButton": "Peru tilaus"
    },
    "rankedReason": "Ranked-matchmaking evätään, kunnes vahvistettu huijauksenestointegraatio on olemassa.",
    "rankedButton": "Etsi ranked-ottelu",
    "roster": {
      "title": "5v5-kokoonpano",
      "body": "Yksi kapteeni. Neljä kutsua. Kapteenit kutsuvat muita A.C.E.-tilitunnuksia, jotka luodaan vasta vahvistetun Steam-kirjautumisen jälkeen."
    },
    "pendingInvites": "Odottavat kutsut"
  },
  "forms": {
    "requestFailed": "Pyyntö epäonnistui.",
    "createTeam": {
      "acceptRequired": "Hyväksy käyttöehdot, Anti-Cheat EULA ja tietosuojakäytäntö jatkaaksesi.",
      "failed": "Joukkuetta ei voitu luoda.",
      "nameLabel": "Uuden 5v5-joukkueen nimi",
      "submitAria": "Perusta uusi 5v5-joukkue",
      "submit": "Perusta joukkue"
    },
    "invite": {
      "failed": "Kutsu epäonnistui.",
      "label": "Kutsu vapaa pelaaja SteamID:llä tai A.C.E.-tilitunnuksella",
      "submitAria": "Lähetä joukkuekutsu",
      "submit": "Lähetä kutsu"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Pelaajaprofiili",
      "title": "{name} · A.C.E.-profiili",
      "description": "A.C.E.-pelaajakansio. Plus- ja Premium-istunnot avaavat telemetrian trendikaaviot."
    },
    "kicker": "Pelaajan identiteetti",
    "bannerPlaceholder": "Profiilibanneri · tulossa pian",
    "levelBadge": "TASO {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "Kokoonpanotaso {level}.",
    "trend": {
      "title": "Kilpailuluokituksen kehitys",
      "note": "Luokituspisteet peräkkäisissä otteluhistorian merkinnöissä."
    },
    "combat": {
      "title": "Yksityiskohtainen taistelutietomatriisi",
      "kills": "Tapot yhteensä",
      "deaths": "Kuolemat yhteensä",
      "kd": "Laskettu K/D",
      "headshots": "Pääosumat yhteensä",
      "headshotPct": "Pääosuma-% -alue",
      "knifeKills": "Erikoisveitsitapot"
    },
    "weapon": {
      "title": "Tunnusaseen erikoistuminen",
      "note": "Ensisijainen kalibroitu aselusta",
      "accuracy": "Tarkkuusluokitus",
      "kills": "Asetapot yhteensä"
    },
    "gear": {
      "title": "Tietokoneen tiedot",
      "cpu": "Suoritin",
      "gpu": "Näytönohjain",
      "monitor": "Näytön virkistystaajuus (Hz)",
      "mouse": "Hiiren malli",
      "dpi": "Aktiivinen DPI-asetus"
    },
    "networksTitle": "Steam-profiilin linkki",
    "back": "Palaa klaanin kokoonpanoon"
  },
  "networks": {
    "note": "Tähän kirjoitettu linkki pysyy tässä selaimessa eikä sitä tallenneta. A.C.E. ei koskaan kysy Steam-salasanaa.",
    "labels": {
      "steam": "Steam-profiili"
    },
    "open": "Avaa {label} >"
  },
  "ratingTrend": {
    "chartAria": "Kilpailuluokituksen kehitys",
    "pointAria": "Ottelu {match}: luokitus {rating}",
    "axisLabel": "M{match}",
    "idle": "Vie osoitin solmun päälle nähdäksesi luokitusmerkinnän.",
    "readout": "Ottelu {match} · luokitus {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Kirjautumisvirhe"
    },
    "title": "Steam-kirjautuminen ei valmistunut",
    "notConfigured": "Steam OpenID:tä ei ole vielä määritetty tälle palvelimelle. A.C.E. ei koskaan kysy Steam-salasanaa.",
    "unavailable": "Steam ei vastannut vahvistuspyyntöön. Yritä hetken kuluttua uudelleen. A.C.E. ei koskaan kysy Steam-salasanaa.",
    "unverified": "OpenID-takaisinkutsua ei voitu vahvistaa palvelimella. A.C.E. ei koskaan kysy Steam-salasanaa.",
    "returnHome": "Palaa etusivulle"
  }
};
