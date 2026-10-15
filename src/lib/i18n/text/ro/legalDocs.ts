import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "Această pagină este o traducere oferită pentru comoditate. Dacă traducerea și textul în engleză diferă, se aplică textul în engleză.",
  "terms": {
    "meta": {
      "title": "Termeni și condiții",
      "description": "Termenii și condițiile site-ului A.C.E. pentru acest site de competiții Counter-Strike 2. Ranked, plățile și anti-cheat nu sunt active."
    },
    "kicker": "ACE-LEGAL / TERMENI ȘI CONDIȚII",
    "title": "Termeni și condiții",
    "lede": "Acești Termeni reglementează utilizarea site-ului public A.C.E. și a API-urilor de cont asociate. Durata meciului, pool-ul de hărți, blocarea lotului și disputele sunt detaliate în Regulamentul competitiv de la /rules, inclus aici.",
    "sections": {
      "operator": {
        "title": "1. Operator și independență",
        "paragraphs": [
          "Serviciul este operat de A.C.E. Competitions Ltd. (numărul companiei va fi publicat). Folosind site-ul, accepți acești Termeni, Politica de confidențialitate, Politica de cookie-uri și Regulamentul competitiv."
        ]
      },
      "eligibility": {
        "title": "2. Eligibilitate și conturi",
        "paragraphs": [
          "Trebuie să ai vârsta necesară pentru a folosi Steam în țara ta. Conturile se creează doar prin Steam OpenID oficial. Nu partaja conturi pentru a evita restricții. A.C.E. nu cere niciodată parola Steam."
        ]
      },
      "notActive": {
        "title": "3. Ce nu este acest site",
        "paragraphs": [
          "Ranked matchmaking, serverele de joc CS2 live, un anti-cheat AI funcțional, facturarea și premiile nu sunt active. Ceasurile din lobby și panourile de integritate sunt previzualizări, dacă pagina nu spune altfel."
        ]
      },
      "subscriptions": {
        "title": "4. Abonamente propuse",
        "paragraphs": [
          "Plus (4 $/lună) și Premium (7 $/lună) sunt prețuri afișate. Acest site nu are încă checkout, iar butoanele planurilor afișează În curând. Când facturarea va exista, se aplică regula de anulare de la /pricing: abonament lunar continuu, anulare din setările panoului, fără rambursare pentru lunile parțiale."
        ]
      },
      "antiCheat": {
        "title": "5. Client anti-cheat (nelansat)",
        "paragraphs": [
          "Acest site nu are un client anti-cheat de descărcat. Regulile competitive de la /rules nu colectează un identificator hardware și nu interzic un dispozitiv. Partajarea conturilor pentru a evita restricțiile este interzisă."
        ]
      },
      "liability": {
        "title": "6. Limitarea răspunderii",
        "paragraphs": [
          "În măsura permisă de lege, A.C.E. nu răspunde pentru rang pierdut, cosmetice pierdute care nu au fost niciodată obiecte reale sau întreruperi Steam / CS2 ale terților. Drepturile obligatorii ale consumatorilor din țara ta la care nu se poate renunța nu sunt excluse."
        ]
      },
      "copyright": {
        "title": "7. Drepturi de autor asupra materialului original al site-ului",
        "paragraphs": [
          "Textul original, aspectul paginilor, emblemele și grafica create pentru acest site aparțin A.C.E. Competitions Ltd. Nu copia, republica sau extrage acel material original pentru alt produs fără permisiune scrisă. Unde legea permite, A.C.E. poate aplica acest drept, inclusiv prin proces. Această notificare nu inițiază proceduri, nu stabilește daune și nu garantează un rezultat în instanță.",
          "Counter-Strike 2, Steam și numele hărților Dust II, Mirage, Inferno, Nuke, Ancient, Anubis și Train aparțin Valve. A.C.E. nu le revendică. Deschiderea acestei pagini nu anulează un drept legal și nu semnează un contract."
        ]
      },
      "contact": {
        "title": "8. Contact",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Numărul companiei va fi publicat."
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "Politica de confidențialitate",
      "description": "Politica de confidențialitate A.C.E.: doar date necesare, doar Steam OpenID, fără parole Steam, fără vânzarea datelor comportamentale."
    },
    "kicker": "ACE-PRIVACY / GDPR / STRICT NECESAR",
    "title": "Politica de confidențialitate",
    "lede": "Această Politică de confidențialitate explică ce stochează A.C.E. Competitions Ltd. când folosești acest site. Traducerile sunt oferite pentru comoditate; versiunea în engleză este textul de referință. Nu este o afirmație că fiecare funcție viitoare a produsului există deja.",
    "strictNecessity": {
      "title": "Principiul strictei necesități",
      "intro": "Colectăm datele minime de cont necesare pentru a identifica un jucător competitiv și a opri fraudele evidente pe serviciul nostru. Nu colectăm jurnale inutile, nu extragem inventare Steam private și nu vindem date comportamentale terților.",
      "storedIntro": "Stocat în prezent după o autentificare Steam OpenID reușită:",
      "stored": [
        {
          "label": "SteamID pe 64 de biți verificat",
          "body": "returnat de aserțiunea oficială Steam OpenID, verificat pe server înainte de crearea sau actualizarea unui cont A.C.E."
        },
        {
          "label": "Nume public de afișare Steam",
          "body": "când este configurată o cheie Steam Web API. Acesta este un nume de persona, nu o căsuță de e-mail."
        },
        {
          "label": "Înregistrări ale contului A.C.E.",
          "body": "precum nivelul de rang, punctele de rating, victorii/înfrângeri, apartenența la echipă și hash-urile tokenurilor de sesiune."
        }
      ],
      "notCollected": {
        "before": "Adrese de e-mail și profiluri hardware criptate",
        "strong": "nu sunt colectate astăzi pe acest site",
        "after": ". Cardurile de scanare facială și HWID din lobby sunt previzualizări de design. Dacă un viitor client anti-cheat sau canal de suport cere un e-mail sau o amprentă hardware, colectarea va rămâne limitată la prevenirea fraudei, va fi anunțată mai întâi aici și nu va fi vândută ca date publicitare."
      }
    },
    "neverCollect": {
      "title": "Ce nu colectăm niciodată",
      "items": [
        "Parole Steam. Autentificarea este doar prin Steam OpenID / fluxul oficial Steam.",
        "Numere de card de plată. Checkout-ul nu este implementat.",
        "Telemetrie de kernel. Niciun client anti-cheat nu este livrat cu acest site."
      ]
    },
    "steamBoundary": {
      "title": "Încorporări terțe și granița Steam OpenID",
      "callback": {
        "before": "Autentificarea Steam părăsește A.C.E., se autentifică pe Steam și revine la",
        "after": ". Serverul verifică aserțiunea OpenID (inclusiv identitatea revendicată și parametrii semnați de Steam) înainte de a scrie o sesiune. Politica de confidențialitate Steam guvernează datele deținute de Steam. A.C.E. păstrează doar SteamID-ul verificat și câmpurile publice de persona necesare pentru funcționarea contului."
      },
      "footerLinks": "Pictogramele rețelelor externe din subsol sunt linkuri de director către pagini publice. Nu sunt conturi oficiale A.C.E. și nu încorporează widgeturi de urmărire."
    },
    "rights": {
      "title": "Drepturi de tip GDPR",
      "before": "Dacă te afli într-o regiune cu drepturi privind datele personale, poți solicita accesul, rectificarea sau ștergerea datelor contului tău A.C.E. scriind la",
      "after": ". Blocările hardware ale anti-cheat-ului ranked nu sunt active; ștergerea contului de pe site nu este o contestație CS2 VAC."
    },
    "cookies": {
      "title": "Cookie-uri",
      "before": "Vezi",
      "link": "Politica de cookie-uri",
      "after": "și bannerul de consimțământ. Cookie-urile de sesiune necesare sunt obligatorii după autentificare. Categoriile opționale nu sunt folosite până când nu se adaugă efectiv un tracker."
    },
    "controller": {
      "title": "Operator de date",
      "body": "A.C.E. Competitions Ltd. Numărul companiei va fi publicat. Contact: support@ace-platform.gg."
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Politica de cookie-uri",
      "description": "Auditul A.C.E. privind confidențialitatea cookie-urilor și a telemetriei. Doar cookie-uri de sesiune necesare, dacă nu alegi categoriile opționale rezervate."
    },
    "kicker": "ACE-PRIVACY / COOKIE-URI / AUDIT TELEMETRIE",
    "title": "Politica de cookie-uri",
    "lede": "Această pagină este auditul de confidențialitate a telemetriei pentru ace-platform.gg. Descrie cookie-urile pe care acest site le folosește efectiv, categoriile rezervate pentru mai târziu și ce nu se colectează.",
    "audit": {
      "title": "Audit de telemetrie 100% (versiunea curentă)",
      "body": "A.C.E. nu rulează pe acest site public pixeli publicitari, Google Analytics, Meta Pixel, SDK-uri de amprentare sau alte trackere comportamentale ale terților. „Trackerele de analiză” și „Trackerele de marketing” opționale din bannerul de consimțământ sunt doar categorii. Bifarea lor astăzi nu încarcă niciun script. Dacă un tracker este adăugat mai târziu, va citi mai întâi preferința salvată și va rămâne oprit fără consimțământul tău."
    },
    "essential": {
      "title": "Cookie-uri necesare [Obligatoriu / Blocat]",
      "session": {
        "label": "Cookie de sesiune",
        "body": "— setat doar după un callback Steam OpenID verificat. HttpOnly, nu poate fi citit de JavaScript-ul paginii, folosit pentru a te menține autentificat în A.C.E."
      },
      "necessity": "Aceste cookie-uri sunt strict necesare pentru funcționarea unui cont autentificat. Nu sunt ID-uri publicitare."
    },
    "analytics": {
      "title": "Trackere de analiză [Opțional]",
      "before": "Rezervat. Niciun furnizor de analiză a produsului nu este configurat. Alegerea ta este salvată local în",
      "after": "astfel încât o viitoare metrică de utilizare first-party să o poată respecta."
    },
    "marketing": {
      "title": "Trackere de marketing [Opțional]",
      "body": "Rezervat. A.C.E. nu vinde, nu închiriază și nu intermediază profiluri comportamentale. Acest site nu are un manager de etichete de marketing."
    },
    "change": {
      "title": "Cum îți schimbi alegerea",
      "body": "Folosește Setările cookie-urilor din subsol sau șterge datele site-ului din browser. Refuzarea categoriilor opționale nu blochează niciodată autentificarea Steam."
    }
  }
};
