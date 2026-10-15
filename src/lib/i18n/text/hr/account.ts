import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  statsConsole: {
    "metaTitle": "Statistika igrača",
    "kicker": "STATISTIKA IGRAČA",
    "title": "Statistika igrača",
    "lede": "Kretanje ratinga iz tvojih zabilježenih A.C.E. mečeva, s pokazateljima % headshotova i preciznosti. Uključeno u A.C.E Plus (4 $/mj.) i A.C.E Premium (7 $/mj.).",
    "movementTitle": "Kretanje ratinga",
    "movementNote": "Svaka točka je promjena ratinga zapisana iz A.C.E. meča.",
    "noMatches": "Još nema zabilježenih mečeva pa je grafikon prazan. Popunit će se nakon tvog prvog zabilježenog A.C.E. meča.",
    "currentLabel": "Trenutni rating",
    "netLabel": "Neto promjena",
    "changesLabel": "Zabilježene promjene",
    "hsTitle": "% headshotova",
    "accTitle": "Preciznost (pogoci / hici)",
    "gaugeSoon": "Uskoro: ovi pokazatelji trebaju analizu demo snimki mečeva, koja još ne postoji.",
    "soon": "Uskoro",
    "sample": "PRIMJER · samo oblik, nisu stvarni podaci",
    "lockedTitle": "Statistika igrača dio je A.C.E Plus i Premium",
    "lockedBody": "Tvoj spremljeni plan je Free. Plus (4 $/mj.) i Premium (7 $/mj.) otključavaju ovu stranicu. Uskoro: naplata još ne postoji.",
    "signIn": "Prijavi se putem Steama da vidiš svoju statistiku.",
    "plansLink": "Pogledaj planove",
    "rosterNote": "Primjer profila sastava: ovi igrači nemaju zabilježenih A.C.E. mečeva, pa statistika ne prikazuje brojeve.",
    "dashTitle": "Statistika i analiza",
    "dashStats": "Otvori statistiku igrača",
    "dashAnalysis": "Otvori analizu mečeva (Premium)",
    "chartAria": "Grafikon kretanja ratinga"
  },
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "Autentificirano",
    "title": "Command Deck",
    "lede": "Prijavljen putem Steam OpenID-a. Sesija živi u HttpOnly kolačiću, ne u localStorageu. Ranked pretraga ostaje zatvorena dok anti-cheat ne bude stvaran.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Status računa",
      "subscription": "Pretplata",
      "rank": "A.C.E. rang",
      "ratingPoints": "Bodovi rejtinga",
      "wins": "Pobjede",
      "losses": "Porazi",
      "accountId": "Interni ID računa"
    },
    "accountStatuses": {
      "ACTIVE": "Aktivan",
      "SUSPENDED": "Suspendiran",
      "BANNED": "Zabranjen",
      "TEMP_BANNED": "Privremeno zabranjen",
      "PERM_BANNED": "Trajno zabranjen",
      "UNDER_REVIEW": "Na provjeri"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapetan",
      "PLAYER": "Igrač"
    },
    "settings": {
      "title": "PROFIL POSTAVKI NADZORNE PLOČE",
      "billingNotLive": "Svaki račun je na Free dok ne postoji plaćanje.",
      "cancelReason": "Ne postoji naplaćena pretplata za otkazivanje. Plaćanje nije implementirano.",
      "cancelButton": "Otkaži pretplatu"
    },
    "rankedReason": "Ranked matchmaking je odbijen dok ne postoji provjerena anti-cheat integracija.",
    "rankedButton": "Pronađi ranked meč",
    "roster": {
      "title": "5v5 postava",
      "body": "Jedan kapetan. Četiri pozivnice. Kapetani pozivaju druge A.C.E. ID-jeve računa, koji se stvaraju tek nakon provjerene Steam prijave."
    },
    "pendingInvites": "Pozivnice na čekanju"
  },
  "forms": {
    "requestFailed": "Zahtjev nije uspio.",
    "createTeam": {
      "acceptRequired": "Prihvati Uvjete korištenja, Anti-Cheat EULA i Pravila privatnosti za nastavak.",
      "failed": "Tim nije moguće stvoriti.",
      "nameLabel": "Ime novog 5v5 tima",
      "submitAria": "Osnuj novi 5v5 tim",
      "submit": "Osnuj tim"
    },
    "invite": {
      "failed": "Pozivnica nije uspjela.",
      "label": "Pozovi slobodnog igrača putem SteamID-a ili A.C.E. ID-a računa",
      "submitAria": "Pošalji timsku pozivnicu",
      "submit": "Pošalji pozivnicu"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Profil igrača",
      "title": "{name} · A.C.E. profil",
      "description": "A.C.E. dosje igrača. Plus i Premium sesije otključavaju grafove trendova telemetrije."
    },
    "kicker": "Identitet igrača",
    "bannerPlaceholder": "Banner profila · uskoro",
    "levelBadge": "RAZINA {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "Razina postave {level}.",
    "trend": {
      "title": "Trend izvedbe natjecateljskog rejtinga",
      "note": "Bodovi rejtinga kroz uzastopne zapise povijesti mečeva."
    },
    "combat": {
      "title": "Detaljna matrica borbenih podataka",
      "kills": "Ukupno ubojstava",
      "deaths": "Ukupno smrti",
      "kd": "Izračunati K/D",
      "headshots": "Ukupno pogodaka u glavu",
      "headshotPct": "Raspon % pogodaka u glavu",
      "knifeKills": "Posebna ubojstva nožem"
    },
    "weapon": {
      "title": "Specijalizacija prepoznatljivog oružja",
      "note": "Primarna kalibrirana platforma oružja",
      "accuracy": "Ocjena preciznosti",
      "kills": "Ukupno ubojstava oružjem"
    },
    "gear": {
      "title": "Specifikacije računala",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Frekvencija osvježavanja monitora (Hz)",
      "mouse": "Model miša",
      "dpi": "Aktivna DPI postavka"
    },
    "networksTitle": "Poveznica Steam profila",
    "back": "Povratak na postavu klana"
  },
  "networks": {
    "note": "Poveznica upisana ovdje ostaje u ovom pregledniku i ne sprema se. A.C.E. nikad ne traži Steam lozinku.",
    "labels": {
      "steam": "Steam profil"
    },
    "open": "Otvori {label} >"
  },
  "ratingTrend": {
    "chartAria": "Trend izvedbe natjecateljskog rejtinga",
    "pointAria": "Meč {match}: rejting {rating}",
    "axisLabel": "M{match}",
    "idle": "Postavi pokazivač na čvor za pregled zapisa rejtinga.",
    "readout": "Meč {match} · rejting {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Pogreška prijave"
    },
    "title": "Steam prijava nije dovršena",
    "notConfigured": "Steam OpenID još nije konfiguriran na ovom poslužitelju. A.C.E. nikad ne traži Steam lozinku.",
    "unavailable": "Steam nije odgovorio na zahtjev za provjeru. Pokušaj ponovno za trenutak. A.C.E. nikad ne traži Steam lozinku.",
    "unverified": "OpenID povratni poziv nije bilo moguće provjeriti na poslužitelju. A.C.E. nikad ne traži Steam lozinku.",
    "returnHome": "Povratak na početnu"
  }
};
