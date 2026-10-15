import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "Prețuri",
    "description": "Abonament A.C.E.: Free {free}, Plus {plus}/lună, Premium {premium}/lună. Prețuri afișate blocate la numere întregi."
  },
  "period": {
    "monthly": "/lună"
  },
  "hero": {
    "badge": "Abonament",
    "title": "Niveluri de acces",
    "lede": "Free {free}. Plus {plus}/lună. Premium {premium}/lună. Aceste sume sunt blocate la numere întregi. Planurile plătite nu cumpără niciodată rating sau adversari mai ușori."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Acces deschis",
      "points": [
        "Autentifică-te cu Steam OpenID. A.C.E. nu cere niciodată parola Steam.",
        "Ratingul stocat începe de la 1.000. Niciun rezultat de meci nu l-a schimbat.",
        "Toate paginile publice: joacă, turnee, clasament, echipe și reguli."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Scrisoare de mulțumire și asistență",
      "points": [
        "Tot ce include Free.",
        "În curând: scrisoarea de mulțumire (ce include, ce nu, și support@ace-platform.gg) se deschide doar după ce există plata. Butonul este dezactivat astăzi.",
        "Nu cumpără rating sau adversari mai ușori. Insignele aurii de profil provin din datele de meci stocate pentru fiecare jucător. Sigiliul elite și insignele speciale apar doar când nivelul stocat este deja Premium."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Scrisoare de mulțumire și echipă de cinci",
      "points": [
        "Tot ce include Free.",
        "În curând: scrisoarea de mulțumire (ce include, ce nu, și support@ace-platform.gg) se deschide doar după ce există plata. Butonul este dezactivat astăzi.",
        "În curând: după plată, scrisoarea duce la Squads, unde un căpitan autentificat cu Steam poate salva un clan de cinci jucători.",
        "Fără premiu, armă, coadă live sau server de joc. Un clan stocat nu este un loc pe tabla de 100 de echipe."
      ]
    }
  },
  "card": {
    "elite": "ELITE",
    "stayFree": "Rămâi pe Free",
    "freeNote": "Deschis acum",
    "choose": "Alege {plan}",
    "chooseAria": "Alege {plan} la {price} pe lună"
  },
  "billing": {
    "kicker": "MATRICEA CRONOLOGIEI DE FACTURARE",
    "title": "Cum va funcționa facturarea când va exista",
    "body": "Plus costă exact {plus}/lună. Premium costă exact {premium}/lună.",
    "display": {
      "label": "01 · AFIȘARE",
      "body": "Free {free}. Plus {plus}/lună. Premium {premium}/lună. Nivelurile plătite nu cumpără niciodată rating sau adversari mai ușori."
    },
    "rolling": {
      "label": "02 · CICLU CONTINUU",
      "body": "Când va exista facturare, taxele se reînnoiesc într-un ciclu lunar continuu. Utilizarea parțială a lunii nu se rambursează. Anularea oprește ciclul următor și nu șterge perioada preplătită curentă."
    },
    "today": {
      "label": "03 · ASTĂZI"
    }
  },
  "compare": {
    "kicker": "Ce poate promite A.C.E. astăzi",
    "title": "Comparație abonamente",
    "note": "Fiecare rând reflectă site-ul de astăzi. Plata vine în curând, iar un plan plătit nu deschide niciodată o coadă și nu cumpără un avantaj.",
    "caption": "Free, Plus și Premium comparate după ce face site-ul astăzi",
    "includedToday": "Inclus astăzi",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Site public",
        "detail": "Acasă, joacă, turnee, clasament, echipe, reguli și termeni."
      },
      "steamSignIn": {
        "feature": "Autentificare Steam",
        "detail": "Steam OpenID oficial. A.C.E. nu cere niciodată parola Steam."
      },
      "startingRating": {
        "feature": "Rating inițial",
        "detail": "Numărul stocat pe un cont nou înainte de orice meci înregistrat."
      },
      "recordedMatches": {
        "feature": "Meciuri înregistrate",
        "detail": "Victorii și înfrângeri scrise dintr-un meci A.C.E. terminat."
      },
      "rankedQueue": {
        "feature": "Coadă ranked",
        "detail": "CAUTĂ MECI rămâne închis până există o coadă reală."
      },
      "cs2Servers": {
        "feature": "Servere CS2",
        "detail": "Acest site nu trimite o adresă de server sau un link de conectare."
      },
      "antiCheatClient": {
        "feature": "Client anti-cheat",
        "detail": "Nimic nu se descarcă de pe acest site."
      },
      "charge": {
        "feature": "Taxare",
        "detail": "Alegerea Plus sau Premium nu preia un card."
      },
      "ratingForSale": {
        "feature": "Rating de vânzare",
        "detail": "O etichetă plătită nu cumpără niciodată rating sau adversari mai ușori."
      },
      "prizeOrWeapon": {
        "feature": "Premiu sau armă",
        "detail": "Nu se livrează skin, cuțit sau fond de premii."
      },
      "goldEliteSeal": {
        "feature": "Sigiliu elite și insigne speciale",
        "detail": "Doar Premium, citit din nivelul stocat pe server. Cosmetic. Plata nu setează acel nivel."
      }
    },
    "cells": {
      "open": "Deschis",
      "yes": "Da",
      "noneYet": "Încă nimic",
      "closed": "Închis",
      "notConnected": "În curând",
      "notShipped": "Nelansat",
      "noCharge": "Fără taxă",
      "notForSale": "Nu e de vânzare",
      "none": "Nimic",
      "no": "Nu",
      "storedTierOnly": "Doar nivelul stocat"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Chitanță Plus",
      "metaDescription": "Scrisoarea A.C.E. Plus afișată pe acest site. Plata nu este activă, deci nu se taxează nimic și nu se trimite e-mail.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Continuă pe A.C.E.",
      "nextBody": "Paginile publice rămân deschise. Această selecție nu deschide o coadă și nu schimbă nivelul stocat."
    },
    "premium": {
      "metaTitle": "Chitanță Premium",
      "metaDescription": "Scrisoarea A.C.E. Premium afișată pe acest site. Plata nu este activă, deci nu se taxează nimic și nu se trimite e-mail.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Continuă la Squads",
      "nextBody": "Continuă la Squads. Pagina te va întreba dacă sunteți o echipă de cinci. Locul 1 este contul Steam autentificat. Locurile 2–5 sunt ceilalți jucători. Salvarea unui clan tot nu taxează acest preț."
    }
  },
  "letter": {
    "kicker": "{plan} · {price} pe lună",
    "title": "Îți mulțumim pentru alegere",
    "flag": "Această scrisoare este afișată pe site. Nu s-a trimis e-mail. Niciun card nu a fost taxat. Plata nu este activă, iar nivelul de abonament stocat nu a fost schimbat.",
    "greeting": "Dragă jucătorule,",
    "intro": "Îți mulțumim că ai ales {plan}. Această pagină este chitanța. Înregistrează prețul afișat, ce include alegerea astăzi, ce nu include și adresa de asistență publicată pe acest site.",
    "selected": {
      "title": "Ce s-a ales",
      "items": [
        "Numele planului: {plan}.",
        "Preț afișat: {price} pe lună. Suma este o etichetă, nu o taxă.",
        "Plată: niciuna. Alegerea acestui plan nu preia un card.",
        "E-mail: niciunul. A.C.E. nu trimite această scrisoare într-o căsuță.",
        "Nivel stocat: neschimbat. Insignele speciale și sigiliul elite apar doar când contul stochează deja Premium.",
        "Rating: nu e de vânzare. Un cont nou începe tot de la 1.000."
      ]
    },
    "today": {
      "title": "Ce poți folosi astăzi",
      "items": [
        "Site-ul public: acasă, joacă, turnee, clasament, echipe, reguli și termeni.",
        "Autentificare Steam prin Steam OpenID oficial. A.C.E. nu cere niciodată parola Steam.",
        "Aceleași pagini publice ca Free. Acest preț nu deschide o coadă separată."
      ]
    },
    "excluded": {
      "title": "Ce nu include această alegere",
      "items": [
        "O coadă ranked live. CAUTĂ MECI rămâne închis.",
        "Un server Counter-Strike 2, o adresă de server sau un link de conectare.",
        "O descărcare anti-cheat. A.C.E Shield este în dezvoltare.",
        "Un premiu, un skin, un cuțit sau un fond de premii.",
        "Un loc pe tabla de 100 de echipe. Tabla arată încă 0 înscrise până se deschide un sezon.",
        "Adversari mai ușori, rating cumpărat sau un site public diferit de Free."
      ]
    },
    "trouble": {
      "title": "Dacă ceva nu funcționează",
      "items": [
        "Te așteptai la o taxă sau la un nivel plătit. Nu s-a aplicat nimic. Contul rămâne cum era.",
        "Te așteptai la această scrisoare în căsuță. Există doar pe această pagină.",
        "Steam nu s-a conectat. Folosește Conectează profilul și bifează mai întâi caseta termenilor. Nu scrie niciodată parola Steam în A.C.E.",
        "Ai nevoie de ajutor. Folosește adresa de asistență de mai jos sau deschide paginile de ajutor de pe acest site."
      ]
    },
    "support": {
      "title": "Asistență",
      "addressBefore": "Adresa de asistență tipărită pe acest site este ",
      "addressAfter": ".",
      "helpBefore": "Ajutor pe site: ",
      "supportLink": "Asistență",
      "helpAnd": " și ",
      "contactLink": "Contact",
      "rulesBefore": ". Regulile sunt pe ",
      "rulesLink": "Reguli",
      "rulesAnd": " și ",
      "termsLink": "Termeni",
      "helpAfter": ". O solicitare pe Asistență nu deschide un tichet, iar textul scris pe Contact nu este livrat."
    },
    "next": {
      "title": "Pasul următor"
    }
  },
  "telemetry": {
    "kicker": "TELEMETRIE PLUS / PREMIUM",
    "copy": "TELEMETRIA PANOULUI BLOCATĂ — Treci la A.C.E. Plus sau Premium pentru a debloca curbe statistice dinamice în timp real și indici de specializare pe arme.",
    "cta": "Deschide tabelele de prețuri"
  }
};
