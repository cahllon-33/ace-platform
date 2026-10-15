import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funcționalități",
      "description": "Arhitectura specificată a kernelului A.C.E. Anti-Cheat, legătura biometrică Face Scan și zece niveluri de calibrare a abilităților. Aceste sisteme nu sunt active pe acest site."
    },
    "header": {
      "kicker": "ACE-FUNCȚIONALITĂȚI / KERNEL / FACE-SCAN / CALIBRARE",
      "title": "Specificația funcționalităților platformei",
      "lede": "Această pagină este harta tehnică de nivel de producție pentru trei sisteme A.C.E. planificate: kernelul anti-cheat autonom, legătura biometrică Face Scan și scara de calibrare a abilităților pe zece niveluri. Nimic de pe această pagină nu este un kernel activ, un produs cu cameră activ sau o coadă ranked activă. Steam OpenID, echipele 5v5, machetele de tablouri și calculul de rating de tip Elo există în acest depozit. Servere CS2 dedicate, plăți, premii și un client de integritate descărcabil nu există."
    },
    "kernel": {
      "title": "Arhitectura kernelului Anti-Cheat",
      "paragraphs": [
        "Autonomous Secure Shell specificat este un client de integritate legat de hardware care ar rula alături de Counter-Strike 2 pe calculatorul jucătorului și ar raporta o stare semnată ALLOW sau DENY către serverele gestionate de A.C.E. Designul kernelului este fail-closed: dacă clientul lipsește, este oprit, învechit, falsificat sau neverificat, accesul ranked este refuzat. Browserul nu decide niciodată eligibilitatea. CAUTĂ MECI ranked pe acest site este deja închis din acest motiv.",
        "Straturile de kernel planificate includ un handshake în modul utilizator care leagă SteamID-ul pe 64 de biți verificat de contul A.C.E., o suprafață de atestare a identificatorului hardware (HWID), o listă de urmărire a semnăturilor pentru familii de cheaturi cunoscute și o rută de eligibilitate server-la-server protejată de un secret comun. Validarea unei semnături de cheat, refuzul unei verificări de integritate sau un identificator de dispozitiv falsificat sunt specificate să producă imediat schimbarea stării contului în BANNED sau PERM_BANNED și, când există un produs de facturare, pierderea completă a timpului de abonament preplătit fără obligație de rambursare. Un astfel de client nu este livrat cu acest site. Cardurile de descărcare În curând sunt doar machetă."
      ],
      "stats": [
        {
          "label": "STAREA KERNELULUI",
          "value": "În dezvoltare"
        },
        {
          "label": "COADĂ RANKED",
          "value": "Fail-closed"
        },
        {
          "label": "STOCARE HWID",
          "value": "Nu se colectează pe acest site"
        }
      ]
    },
    "faceScan": {
      "title": "Legătura biometrică Face Scan",
      "paragraphs": [
        "Face Scan este un strat viitor specificat de legare a identității, nu un produs cu cameră pe acest site. Designul planificat ar lega, doar după consimțământ explicit și o revizuire juridică separată, un șablon facial verificat pentru viabilitate de același cont A.C.E. care deține deja un SteamID verificat de server. Scopul este de a împiedica partajarea conturilor folosită pentru a evita o restricție anterioară. A.C.E. nu colectează astăzi imagini faciale, încorporări faciale, adrese de e-mail sau amprente hardware. Poziția de confidențialitate în vigoare rămâne Necesitate strictă: doar SteamID pe 64 de biți verificat și numele public afișat în Steam.",
        "Dacă Face Scan va fi vreodată implementat, nu va înlocui Steam OpenID, nu va fi folosit pentru a vinde publicitate comportamentală și nu va deschide singur cozile ranked. Accesul ranked necesită în continuare o cale anti-cheat verificată. Până la acea revizuire, orice panou Face Scan din lobby este o previzualizare de design."
      ]
    },
    "calibration": {
      "title": "Zece niveluri de calibrare a abilităților",
      "intro": "Calibrarea competitivă folosește o formulă documentată de tip Elo (versiunea {version}, factor K {kFactor}, scară {scale}). Conturile noi încep la rangul 1 (Recruit), abonament FREE, stare ACTIVE și rating competitiv {startingRating}. Etichetele de cristal din lobby sunt aliasuri vizuale. Cosmeticele plătite nu cumpără niciodată rating, adversari mai ușori, servere 128-tick sau prioritate la coadă. Nu există niciun produs 128-tick activ de vânzare.",
      "table": {
        "level": "Nivel",
        "engineName": "Nume în motor",
        "crystalAlias": "Alias cristal",
        "minRating": "Rating min."
      },
      "divisions": {
        "before": "Diviziile I, II și III din lobby sunt etichete de prezentare. Schimbă doar măsurătorile de machetă. Matchmakingul live pe divizii nu există. Vezi ",
        "middle": " pentru masa rotativă 3D și ",
        "after": " pentru textul competițional obligatoriu."
      }
    }
  },
  "loot": {
    "kicker": "Cosmetice · în curând",
    "title": "ARHITECTURA LOOT A.C.E. — DROPURI DE ARME",
    "lede": "Finisaje A.C.E. originale, sosesc odată cu magazinul. Cosmeticele nu afectează niciodată competiția.",
    "mockDrop": "În curând",
    "multiplierLabel": "Cerințe pentru multiplicatorul ratei de victorii",
    "ladderLabel": "Dropuri săptămânale din clasament",
    "multiplierValue": "Șablon {multiplier}×",
    "ladderValue": "Slot săptămânal · în curând",
    "checkout": "Plată · în curând"
  },
  "communityRail": {
    "kicker": "Flux · în curând",
    "newsTitle": "Ultimele știri din clasament",
    "newsItems": [
      "Tabloul rămâne gol — 0 din 100 de echipe.",
      "Căutarea ranked rămâne închisă până există anti-cheat."
    ],
    "prizesTitle": "Premii zilnice cu skinuri",
    "prizesBody": "Recompensele și plata se deschid odată cu Sezonul 1."
  },
  "identityPreview": {
    "badge": "Previzualizare — neconfirmat",
    "cards": {
      "faceScan": {
        "title": "Face Scan live verificat",
        "copy": "Verificarea viabilității identității este o verificare planificată a unui furnizor. Astăzi nu se colectează date biometrice."
      },
      "hardwareId": {
        "title": "ID hardware legat",
        "copy": "Legarea dispozitivului este un semnal de integritate planificat. Astăzi nu se colectează identificatori hardware."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Previzualizare",
    "kicker": "În curând",
    "returnHome": "Înapoi acasă",
    "pages": {
      "support": {
        "title": "Asistență",
        "body": "Ghișeul nostru public de asistență se deschide odată cu beta competitivă."
      },
      "anti-cheat": {
        "title": "Prezentare anti-cheat",
        "body": "A.C.E. nu are un produs anti-cheat funcțional. Matchmakingul ranked rămâne închis până există o integrare reală."
      },
      "download-client": {
        "title": "Descarcă clientul",
        "body": "Nu există un client desktop A.C.E. de descărcat. Un client nativ nu face parte din etapa web curentă."
      },
      "mobile-app": {
        "title": "Aplicație mobilă",
        "body": "Aplicația mobilă A.C.E. este pe foaia de parcurs."
      },
      "news": {
        "title": "Știri",
        "body": "Redacția A.C.E. se deschide în curând."
      },
      "about": {
        "title": "Despre noi",
        "body": "A.C.E. este un site independent de competiții Counter-Strike 2 în previzualizare publică. Nu este afiliat cu Valve."
      },
      "advertising": {
        "title": "Publicitate",
        "body": "Solicitările de parteneriat și publicitate se deschid în curând."
      },
      "developers": {
        "title": "Dezvoltatori",
        "body": "Nu există încă un program public pentru dezvoltatori. API-urile de eligibilitate a serverelor din acest depozit sunt adaptoare interne, nu un SDK pentru parteneri."
      },
      "press": {
        "title": "Presă",
        "body": "Kitul de presă vine în curând."
      },
      "jobs": {
        "title": "Cariere",
        "body": "Posturile deschise vor fi listate aici."
      },
      "terms": {
        "title": "Termenii serviciului",
        "body": "Termenii serviciului în vigoare sunt publicați la /terms. Regulamentul turneului este la /rules."
      },
      "privacy": {
        "title": "Politica de confidențialitate",
        "body": "Politica de confidențialitate este publicată la /privacy. Steam OpenID este singura cale de autentificare; parolele Steam nu sunt colectate niciodată."
      },
      "eula": {
        "title": "Anti-Cheat EULA",
        "body": "Nu există Anti-Cheat EULA deoarece anti-cheatul nu este activ. Ranked rămâne închis."
      }
    }
  }
};
