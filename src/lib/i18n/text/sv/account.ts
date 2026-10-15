import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "statsConsole": {
    "metaTitle": "Spelarstatistik",
    "kicker": "SPELARSTATISTIK",
    "title": "Spelarstatistik",
    "lede": "Ratingutveckling från dina registrerade A.C.E.-matcher, med mätare för headshot-% och träffsäkerhet. Ingår i A.C.E Plus (4 $/mån) och A.C.E Premium (7 $/mån).",
    "movementTitle": "Ratingutveckling",
    "movementNote": "Varje punkt är en ratingändring skriven från en registrerad A.C.E.-match.",
    "noMatches": "Inga registrerade matcher än, så grafen är tom. Den fylls efter din första registrerade A.C.E.-match.",
    "currentLabel": "Nuvarande rating",
    "netLabel": "Nettoförändring",
    "changesLabel": "Registrerade ändringar",
    "hsTitle": "Headshot-%",
    "accTitle": "Träffsäkerhet (träffar / skott)",
    "gaugeSoon": "Kommer snart: dessa mätare kräver tolkning av matchdemos, som inte finns än.",
    "soon": "Kommer snart",
    "sample": "EXEMPEL · bara form, inte riktiga data",
    "lockedTitle": "Spelarstatistik ingår i A.C.E Plus och Premium",
    "lockedBody": "Din sparade plan är Free. Plus (4 $/mån) och Premium (7 $/mån) låser båda upp den här sidan. Kommer snart: betalning finns inte än.",
    "signIn": "Logga in med Steam för att se din spelarstatistik.",
    "plansLink": "Se planer",
    "rosterNote": "Exempelprofil i truppen: de här spelarna har inga registrerade A.C.E.-matcher, så statistiken visar inga siffror.",
    "dashTitle": "Statistik och analys",
    "dashStats": "Öppna spelarstatistik",
    "dashAnalysis": "Öppna matchanalys (Premium)",
    "chartAria": "Diagram över ratingutveckling"
  },
  "dashboard": {
    "meta": {
      "title": "Kommandocentral"
    },
    "kicker": "Autentiserad",
    "title": "Kommandocentral",
    "lede": "Inloggad via Steam OpenID. Sessionen lagras i en HttpOnly-cookie, inte i localStorage. Rankad sökning förblir stängd tills anti-fusket är på riktigt.",
    "eliteBadge": "ELIT",
    "stats": {
      "accountStatus": "Kontostatus",
      "subscription": "Prenumeration",
      "rank": "A.C.E.-rank",
      "ratingPoints": "Ratingpoäng",
      "wins": "Vinster",
      "losses": "Förluster",
      "accountId": "Internt konto-ID"
    },
    "accountStatuses": {
      "ACTIVE": "Aktiv",
      "SUSPENDED": "Avstängd",
      "BANNED": "Bannad",
      "TEMP_BANNED": "Tillfälligt bannad",
      "PERM_BANNED": "Permanent bannad",
      "UNDER_REVIEW": "Under granskning"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapten",
      "PLAYER": "Spelare"
    },
    "settings": {
      "title": "PANELINSTÄLLNINGAR",
      "billingNotLive": "Alla konton är på Free tills betalning finns.",
      "cancelReason": "Det finns ingen betald prenumeration att säga upp. Betalning är inte implementerad.",
      "cancelButton": "Säg upp prenumeration"
    },
    "rankedReason": "Rankad matchning nekas tills en verifierad anti-fusk-integration finns.",
    "rankedButton": "Hitta rankad match",
    "roster": {
      "title": "5v5-trupp",
      "body": "En kapten. Fyra inbjudningar. Kaptener bjuder in andra A.C.E.-konto-ID:n, som skapas först efter en verifierad Steam-inloggning."
    },
    "pendingInvites": "Väntande inbjudningar"
  },
  "forms": {
    "requestFailed": "Begäran misslyckades.",
    "createTeam": {
      "acceptRequired": "Godkänn användarvillkoren, anti-fusk-EULA:n och integritetspolicyn för att fortsätta.",
      "failed": "Kunde inte skapa laget.",
      "nameLabel": "Namn på nytt 5v5-lag",
      "submitAria": "Grunda ett nytt 5v5-lag",
      "submit": "Grunda lag"
    },
    "invite": {
      "failed": "Inbjudan misslyckades.",
      "label": "Bjud in en fri agent via SteamID eller A.C.E.-konto-ID",
      "submitAria": "Skicka laginbjudan",
      "submit": "Skicka inbjudan"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Spelarprofil",
      "title": "{name} · A.C.E.-profil",
      "description": "A.C.E. spelardossier. Plus- och Premium-sessioner låser upp trenddiagram för telemetri."
    },
    "kicker": "Spelaridentitet",
    "bannerPlaceholder": "Profilbanner · kommer snart",
    "levelBadge": "NIVÅ {level}",
    "rosterLevel": "Truppnivå {level}.",
    "trend": {
      "title": "Trend för tävlingsrating",
      "note": "Ratingpoäng över på varandra följande matchhistorikloggar."
    },
    "combat": {
      "title": "Detaljerad stridsdatamatris",
      "kills": "Totalt antal kills",
      "deaths": "Totalt antal dödsfall",
      "kd": "Beräknad K/D",
      "headshots": "Totalt antal huvudskott",
      "headshotPct": "Andel huvudskott",
      "knifeKills": "Speciella knivkills"
    },
    "weapon": {
      "title": "Specialisering på signaturvapen",
      "note": "Primär kalibrerad vapenplattform",
      "accuracy": "Träffsäkerhetsbetyg",
      "kills": "Totalt antal vapenkills"
    },
    "gear": {
      "title": "Datorspecifikationer",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Skärmens uppdateringsfrekvens (Hz)",
      "mouse": "Musmodell",
      "dpi": "Aktuell DPI-inställning"
    },
    "networksTitle": "Länk till Steam-profil",
    "back": "Tillbaka till klanens trupp"
  },
  "networks": {
    "note": "En länk som skrivs här stannar i den här webbläsaren och sparas inte. A.C.E. ber aldrig om ett Steam-lösenord.",
    "labels": {
      "steam": "Steam-profil"
    },
    "open": "Öppna {label} >"
  },
  "ratingTrend": {
    "chartAria": "Trend för tävlingsrating",
    "pointAria": "Match {match}: rating {rating}",
    "axisLabel": "M{match}",
    "idle": "Hovra över en punkt för att se en ratinglogg.",
    "readout": "Match {match} · rating {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Inloggningsfel"
    },
    "title": "Steam-inloggningen slutfördes inte",
    "notConfigured": "Steam OpenID är inte konfigurerat på den här servern ännu. A.C.E. ber aldrig om ett Steam-lösenord.",
    "unavailable": "Steam svarade inte på verifieringsbegäran. Försök igen om en stund. A.C.E. ber aldrig om ett Steam-lösenord.",
    "unverified": "OpenID-svaret kunde inte verifieras på servern. A.C.E. ber aldrig om ett Steam-lösenord.",
    "returnHome": "Till startsidan"
  }
};
