import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "statsConsole": {
    "metaTitle": "Spielerstatistiken",
    "kicker": "SPIELERSTATISTIKEN",
    "title": "Spielerstatistiken",
    "lede": "Rating-Verlauf aus deinen erfassten A.C.E.-Matches, mit Anzeigen für Headshot-% und Treffsicherheit. Enthalten in A.C.E Plus ($4/Monat) und A.C.E Premium ($7/Monat).",
    "movementTitle": "Rating-Verlauf",
    "movementNote": "Jeder Punkt ist eine Rating-Änderung aus einem erfassten A.C.E.-Match.",
    "noMatches": "Noch keine erfassten Matches, daher ist die Grafik leer. Sie füllt sich nach deinem ersten erfassten A.C.E.-Match.",
    "currentLabel": "Aktuelles Rating",
    "netLabel": "Netto-Änderung",
    "changesLabel": "Erfasste Änderungen",
    "hsTitle": "Headshot-%",
    "accTitle": "Treffsicherheit (Treffer / Schüsse)",
    "gaugeSoon": "Demnächst: Diese Anzeigen brauchen Demo-Auswertung, die es noch nicht gibt.",
    "soon": "Demnächst",
    "sample": "BEISPIEL · nur Form, keine echten Daten",
    "lockedTitle": "Spielerstatistiken gehören zu A.C.E Plus und Premium",
    "lockedBody": "Dein gespeicherter Plan ist Free. Plus ($4/Monat) und Premium ($7/Monat) schalten diese Seite frei. Demnächst: Einen Checkout gibt es noch nicht.",
    "signIn": "Melde dich mit Steam an, um deine Spielerstatistiken zu sehen.",
    "plansLink": "Pläne ansehen",
    "rosterNote": "Beispiel-Kaderprofil: Diese Spieler haben keine erfassten A.C.E.-Matches, daher zeigen die Statistiken keine Zahlen.",
    "dashTitle": "Statistiken und Analyse",
    "dashStats": "Spielerstatistiken öffnen",
    "dashAnalysis": "Match-Analyse öffnen (Premium)",
    "chartAria": "Rating-Verlaufsdiagramm"
  },
  "dashboard": {
    "meta": {
      "title": "Befehlsstand"
    },
    "kicker": "Authentifiziert",
    "title": "Befehlsstand",
    "lede": "Angemeldet über Steam OpenID. Die Sitzung liegt in einem HttpOnly-Cookie, nicht im localStorage. Die Ranglisten-Suche bleibt geschlossen, bis das Anti-Cheat echt ist.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Kontostatus",
      "subscription": "Abonnement",
      "rank": "A.C.E.-Rang",
      "ratingPoints": "Wertungspunkte",
      "wins": "Siege",
      "losses": "Niederlagen",
      "accountId": "Interne Kontokennung"
    },
    "accountStatuses": {
      "ACTIVE": "Aktiv",
      "SUSPENDED": "Ausgesetzt",
      "BANNED": "Gesperrt",
      "TEMP_BANNED": "Vorübergehend gesperrt",
      "PERM_BANNED": "Dauerhaft gesperrt",
      "UNDER_REVIEW": "In Prüfung"
    },
    "tiers": {
      "FREE": "Kostenlos",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapitän",
      "PLAYER": "Spieler"
    },
    "settings": {
      "title": "EINSTELLUNGEN DES BEFEHLSSTANDS",
      "billingNotLive": "Jedes Konto bleibt auf Free, bis es einen Checkout gibt.",
      "cancelReason": "Es gibt kein abgerechnetes Abonnement zum Kündigen. Die Kasse ist nicht umgesetzt.",
      "cancelButton": "Abonnement kündigen"
    },
    "rankedReason": "Die Rangliste-Spielersuche wird verweigert, bis eine geprüfte Anti-Cheat-Anbindung besteht.",
    "rankedButton": "Ranglistenspiel finden",
    "roster": {
      "title": "5v5-Aufstellung",
      "body": "Ein Kapitän. Vier Einladungen. Kapitäne laden andere A.C.E.-Kontokennungen ein, die erst nach einer geprüften Steam-Anmeldung entstehen."
    },
    "pendingInvites": "Ausstehende Einladungen"
  },
  "forms": {
    "requestFailed": "Anfrage fehlgeschlagen.",
    "createTeam": {
      "acceptRequired": "Akzeptiere die Nutzungsbedingungen, die Anti-Cheat-EULA und die Datenschutzrichtlinie, um fortzufahren.",
      "failed": "Mannschaft konnte nicht angelegt werden.",
      "nameLabel": "Name der neuen 5v5-Mannschaft",
      "submitAria": "Neue 5v5-Mannschaft gründen",
      "submit": "Mannschaft gründen"
    },
    "invite": {
      "failed": "Einladung fehlgeschlagen.",
      "label": "Freien Spieler über SteamID oder A.C.E.-Kontokennung einladen",
      "submitAria": "Mannschaftseinladung senden",
      "submit": "Einladung senden"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Spielerprofil",
      "title": "{name} · A.C.E.-Profil",
      "description": "A.C.E.-Spielerakte. Plus- und Premium-Sitzungen schalten Telemetrie-Verlaufsgrafiken frei."
    },
    "kicker": "Spieleridentität",
    "bannerPlaceholder": "Profilbanner · demnächst",
    "levelBadge": "STUFE {level}",
    "rosterLevel": "Aufstellungsstufe {level}.",
    "trend": {
      "title": "Leistungsverlauf der Wettkampfwertung",
      "note": "Wertungspunkte über aufeinanderfolgende Einträge der Spielhistorie."
    },
    "combat": {
      "title": "Detaillierte Kampfdatenmatrix",
      "kills": "Kills gesamt",
      "deaths": "Tode gesamt",
      "kd": "Berechnete K/D",
      "headshots": "Kopfschüsse gesamt",
      "headshotPct": "Kopfschussquote in %",
      "knifeKills": "Besondere Messer-Kills"
    },
    "weapon": {
      "title": "Spezialisierung auf die Signaturwaffe",
      "note": "Primäre kalibrierte Waffenplattform",
      "accuracy": "Treffsicherheitswertung",
      "kills": "Waffen-Kills gesamt"
    },
    "gear": {
      "title": "Desktop-Spezifikationen",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Bildwiederholrate des Monitors (Hz)",
      "mouse": "Mausmodell",
      "dpi": "Aktive DPI-Einstellung"
    },
    "networksTitle": "Steam-Profillink",
    "back": "Zurück zur Clan-Aufstellung"
  },
  "networks": {
    "note": "Ein hier eingegebener Link bleibt in diesem Browser und wird nicht gespeichert. A.C.E. fragt niemals nach einem Steam-Passwort.",
    "labels": {
      "steam": "Steam-Profil"
    },
    "open": "{label} öffnen >"
  },
  "ratingTrend": {
    "chartAria": "Leistungsverlauf der Wettkampfwertung",
    "pointAria": "Spiel {match}: Wertung {rating}",
    "axisLabel": "S{match}",
    "idle": "Fahre über einen Knoten, um einen Wertungseintrag anzusehen.",
    "readout": "Spiel {match} · Wertung {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Anmeldefehler"
    },
    "title": "Die Steam-Anmeldung wurde nicht abgeschlossen",
    "notConfigured": "Steam OpenID ist auf diesem Server noch nicht eingerichtet. A.C.E. fragt niemals nach einem Steam-Passwort.",
    "unavailable": "Steam hat auf die Prüfungsanfrage nicht geantwortet. Versuche es gleich noch einmal. A.C.E. fragt niemals nach einem Steam-Passwort.",
    "unverified": "Der OpenID-Rückruf konnte auf dem Server nicht geprüft werden. A.C.E. fragt niemals nach einem Steam-Passwort.",
    "returnHome": "Zurück zum Start"
  }
};
