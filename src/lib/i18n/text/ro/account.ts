import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "Autentificat",
    "title": "Command Deck",
    "lede": "Autentificat prin Steam OpenID. Sesiunea trăiește într-un cookie HttpOnly, nu în localStorage. Căutarea ranked rămâne închisă până când anti-cheatul este real.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Starea contului",
      "subscription": "Abonament",
      "rank": "Rang A.C.E.",
      "ratingPoints": "Puncte de rating",
      "wins": "Victorii",
      "losses": "Înfrângeri",
      "accountId": "ID intern de cont"
    },
    "accountStatuses": {
      "ACTIVE": "Activ",
      "SUSPENDED": "Suspendat",
      "BANNED": "Interzis",
      "TEMP_BANNED": "Interzis temporar",
      "PERM_BANNED": "Interzis permanent",
      "UNDER_REVIEW": "În revizuire"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Căpitan",
      "PLAYER": "Jucător"
    },
    "settings": {
      "title": "PROFIL SETĂRI PANOU",
      "billingNotLive": "Fiecare cont este pe Free până există plata.",
      "cancelReason": "Nu există niciun abonament facturat de anulat. Plata nu este implementată.",
      "cancelButton": "Anulează abonamentul"
    },
    "rankedReason": "Matchmakingul ranked este refuzat până există o integrare anti-cheat verificată.",
    "rankedButton": "Caută meci ranked",
    "roster": {
      "title": "Lot 5v5",
      "body": "Un căpitan. Patru invitații. Căpitanii invită alte ID-uri de cont A.C.E., create doar după o autentificare Steam verificată."
    },
    "pendingInvites": "Invitații în așteptare"
  },
  "forms": {
    "requestFailed": "Cererea a eșuat.",
    "createTeam": {
      "acceptRequired": "Acceptă Termenii serviciului, Anti-Cheat EULA și Politica de confidențialitate pentru a continua.",
      "failed": "Nu s-a putut crea echipa.",
      "nameLabel": "Numele noii echipe 5v5",
      "submitAria": "Fondează o nouă echipă 5v5",
      "submit": "Fondează echipa"
    },
    "invite": {
      "failed": "Invitația a eșuat.",
      "label": "Invită un agent liber prin SteamID sau ID de cont A.C.E.",
      "submitAria": "Trimite invitația în echipă",
      "submit": "Trimite invitația"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Profil de jucător",
      "title": "{name} · profil A.C.E.",
      "description": "Dosar de jucător A.C.E. Sesiunile Plus și Premium deblochează graficele de tendință ale telemetriei."
    },
    "kicker": "Identitatea jucătorului",
    "bannerPlaceholder": "Banner de profil · în curând",
    "levelBadge": "NIVEL {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "Nivel lot {level}.",
    "trend": {
      "title": "Tendința performanței ratingului competitiv",
      "note": "Puncte de rating de-a lungul jurnalelor consecutive din istoricul meciurilor."
    },
    "combat": {
      "title": "Matrice detaliată de date de luptă",
      "kills": "Total ucideri",
      "deaths": "Total morți",
      "kd": "K/D calculat",
      "headshots": "Total headshoturi",
      "headshotPct": "Interval % headshot",
      "knifeKills": "Ucideri speciale cu cuțitul"
    },
    "weapon": {
      "title": "Specializare pe arma emblematică",
      "note": "Platformă de armă principală calibrată",
      "accuracy": "Rating de precizie",
      "kills": "Total ucideri cu arma"
    },
    "gear": {
      "title": "Specificații desktop",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Rata de reîmprospătare a monitorului (Hz)",
      "mouse": "Model mouse",
      "dpi": "Setare DPI activă"
    },
    "networksTitle": "Link profil Steam",
    "back": "Înapoi la lotul clanului"
  },
  "networks": {
    "note": "Un link scris aici rămâne în acest browser și nu este salvat. A.C.E. nu cere niciodată parola Steam.",
    "labels": {
      "steam": "Profil Steam"
    },
    "open": "Deschide {label} >"
  },
  "ratingTrend": {
    "chartAria": "Tendința performanței ratingului competitiv",
    "pointAria": "Meciul {match}: rating {rating}",
    "axisLabel": "M{match}",
    "idle": "Treci cu mouse-ul peste un nod pentru a vedea un jurnal de rating.",
    "readout": "Meciul {match} · rating {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Eroare de autentificare"
    },
    "title": "Autentificarea Steam nu s-a finalizat",
    "notConfigured": "Steam OpenID nu este încă configurat pe acest server. A.C.E. nu cere niciodată parola Steam.",
    "unavailable": "Steam nu a răspuns la cererea de verificare. Încearcă din nou peste un moment. A.C.E. nu cere niciodată parola Steam.",
    "unverified": "Callback-ul OpenID nu a putut fi verificat pe server. A.C.E. nu cere niciodată parola Steam.",
    "returnHome": "Înapoi acasă"
  }
};
