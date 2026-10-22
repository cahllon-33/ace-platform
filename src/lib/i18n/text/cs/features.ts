import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funkce",
      "description": "Specifikovaná architektura jádra anti-cheatu A.C.E, biometrické propojení skenem obličeje a deset stupňů kalibrace dovedností. Tyto systémy na tomto webu nejsou v provozu."
    },
    "header": {
      "kicker": "ACE-FEATURES / JÁDRO / SKEN OBLIČEJE / KALIBRACE",
      "title": "Specifikace funkcí platformy",
      "lede": "Tato stránka je produkční technickou mapou tří zamýšlených systémů A.C.E: autonomního jádra anti-cheatu, biometrického propojení skenem obličeje a desetistupňového žebříčku kalibrace dovedností. Nic na této stránce není živé jádro, živý kamerový produkt ani živá rankingová fronta. Steam OpenID, týmy 5v5, rozvržení pavouků a výpočet hodnocení ve stylu Elo v tomto repozitáři existují. Dedikované servery CS2, platby, ceny a klient integrity ke stažení neexistují."
    },
    "kernel": {
      "title": "Architektura jádra anti-cheatu",
      "paragraphs": [
        "Specifikovaný autonomní zabezpečený plášť je klient integrity vázaný na hardware, který by běžel vedle Counter-Strike 2 na počítači hráče a hlásil podepsaný stav ALLOW nebo DENY serverům spravovaným A.C.E. Návrh jádra se při selhání zavírá: pokud klient chybí, je zastavený, zastaralý, podvržený nebo neověřený, přijetí do rankingu se odmítne. Prohlížeč nikdy nerozhoduje o způsobilosti. Rankingové NAJÍT ZÁPAS se na tomto webu z tohoto důvodu už při selhání zavírá.",
        "Zamýšlené vrstvy jádra zahrnují navázání v uživatelském režimu, které sváže ověřené 64bitové SteamID s účtem A.C.E, plochu pro atestaci hardwarového identifikátoru (HWID), seznam podpisů známých rodin cheatů a trasu způsobilosti mezi servery chráněnou sdíleným tajemstvím. Potvrzení podpisu cheatu, odmítnutá kontrola integrity nebo podvržený identifikátor zařízení mají podle specifikace vést k okamžité změně stavu účtu na BANNED nebo PERM_BANNED a — pokud bude existovat placený produkt — k úplnému propadnutí předplaceného času s nulovou povinností vrátit peníze. S tímto webem se žádný takový klient nedodává. Karty ke stažení označené Již brzy jsou pouze rozvržení."
      ],
      "stats": [
        {
          "label": "STAV JÁDRA",
          "value": "Ve vývoji"
        },
        {
          "label": "RANKINGOVÁ FRONTA",
          "value": "Při selhání uzavřená"
        },
        {
          "label": "ÚLOŽIŠTĚ HWID",
          "value": "Na tomto webu se nesbírá"
        }
      ]
    },
    "faceScan": {
      "title": "Biometrické propojení skenem obličeje",
      "paragraphs": [
        "Sken obličeje je specifikovaná budoucí vrstva vázání identity, ne kamerový produkt na tomto webu. Zamýšlený návrh by — pouze po výslovném souhlasu a samostatném právním posouzení — svázal obličejovou šablonu ověřenou kontrolou živosti se stejným účtem A.C.E, který už má SteamID ověřené na serveru. Účelem je bránit sdílení účtu za účelem obejití dřívějšího omezení. A.C.E dnes nesbírá snímky obličeje, obličejové vektory, e-mailové adresy ani hardwarové otisky. Živý přístup k soukromí zůstává na úrovni nezbytné nutnosti: pouze ověřené 64bitové SteamID a veřejné zobrazované jméno Steam.",
        "Pokud bude Face Scan někdy zaveden, nenahradí Steam OpenID, nebude použit k prodeji behaviorální reklamy a sám o sobě neodemkne hodnocené fronty. Vstup do hodnocených her bude i nadále vyžadovat ověřenou cestu Anti-Cheat. Dokud takové posouzení neproběhne, je každý panel Face Scan v lobby náhledem designu."
      ]
    },
    "calibration": {
      "title": "Deset stupňů kalibrace dovedností",
      "intro": "Competitive Calibration používá zveřejněná pravidla Rating Points A.C.E (verze {version}: krok {kFactor}, škála {scale}). Nové účty začínají na hodnosti 3 (Vanguard), s předplatným FREE, stavem ACTIVE a {startingRating} soutěžního hodnocení. Názvy krystalů v lobby jsou vizuální aliasy. Placená kosmetika nikdy nekupuje hodnocení, snazší soupeře, 128tickové servery ani přednost ve frontě. Žádný aktivní 128tickový produkt se neprodává.",
      "table": {
        "level": "Úroveň",
        "engineName": "Název v enginu",
        "crystalAlias": "Krystalová přezdívka",
        "minRating": "Min. hodnocení"
      },
      "divisions": {
        "before": "Divize I, II a III v lobby jsou štítky z vitríny. Mění pouze metriky rozvržení. Živé párování podle divizí neexistuje. 3D otočný stojan najdete na stránce ",
        "middle": " a závazný soutěžní text na stránce ",
        "after": "."
      }
    }
  },
  "loot": {
    "kicker": "Kosmetika · již brzy",
    "title": "ARCHITEKTURA ODMĚN A.C.E — DROPY ZBRANÍ",
    "lede": "Původní úpravy A.C.E, které dorazí s obchodem. Kosmetika nikdy neovlivňuje soutěž.",
    "checkout": "Pokladna · Paddle"
  },
  "identityPreview": {
    "badge": "Náhled — nepotvrzeno",
    "cards": {
      "faceScan": {
        "title": "Živý sken obličeje ověřen",
        "copy": "Ověření živosti je plánovaná kontrola u poskytovatele. Dnes se nesbírají žádná biometrická data."
      },
      "hardwareId": {
        "title": "Hardwarové ID propojeno",
        "copy": "Vazba zařízení je plánovaný signál integrity. Dnes se nesbírají žádné hardwarové identifikátory."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Náhled",
    "kicker": "Již brzy",
    "returnHome": "Zpět domů",
    "pages": {
      "support": {
        "title": "Podpora",
        "body": "Naše veřejná podpora se otevře se soutěžní betou."
      },
      "anti-cheat": {
        "title": "Přehled anti-cheatu",
        "body": "A.C.E nemá funkční produkt anti-cheatu. Rankingové párování zůstává zavřené, dokud nebude existovat skutečná integrace."
      },
      "download-client": {
        "title": "Stáhnout klienta",
        "body": "Neexistuje žádný desktopový klient A.C.E ke stažení. Nativní klient není součástí aktuální webové fáze."
      },
      "mobile-app": {
        "title": "Mobilní aplikace",
        "body": "Mobilní aplikace A.C.E je v plánu vývoje."
      },
      "news": {
        "title": "Novinky",
        "body": "Tisková místnost A.C.E se brzy otevře."
      },
      "about": {
        "title": "O nás",
        "body": "A.C.E je nezávislý soutěžní web pro Counter-Strike 2 ve fázi veřejného náhledu. Není přidružen k Valve."
      },
      "advertising": {
        "title": "Reklama",
        "body": "Dotazy na partnerství a reklamu budou brzy možné."
      },
      "developers": {
        "title": "Vývojáři",
        "body": "Veřejný program pro vývojáře zatím neexistuje. API způsobilosti serverů v tomto repozitáři jsou interní adaptéry, ne partnerské SDK."
      },
      "press": {
        "title": "Tisk",
        "body": "Tiskový balíček bude brzy k dispozici."
      },
      "jobs": {
        "title": "Kariéra",
        "body": "Volné pozice budou zveřejněny zde."
      },
      "terms": {
        "title": "Podmínky služby",
        "body": "Závazné Podmínky služby jsou zveřejněny na /terms. Turnajový řád je na /rules."
      },
      "privacy": {
        "title": "Zásady ochrany soukromí",
        "body": "Zásady ochrany soukromí jsou zveřejněny na /privacy. Steam OpenID je jediný způsob přihlášení; hesla ke službě Steam se nikdy nesbírají."
      },
      "eula": {
        "title": "Licenční smlouva anti-cheatu (EULA)",
        "body": "Licenční smlouva anti-cheatu neexistuje, protože anti-cheat není aktivní. Ranking zůstává při selhání uzavřený."
      }
    }
  }
};
