import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Tržiště A.C.E.",
      description:
        "Karty zbraní jako ukázky cen. Nejsou to předměty Valve, nejde o financovanou odměnu a pokladna nestrhává platbu z karty.",
    },
    heroHonesty:
      "Karty zbraní jsou ukázky cen. Nejsou to předměty Valve, nejsou v žádném inventáři a pokladna na této stránce nestrhává platbu z karty.",
    prizeBanner: "🏆 UKÁZKA TURNAJOVÉ CENY — VITRÍNA ODMĚN PREMIUM",
    notice:
      "Tyto ukázky nemají žádnou peněžní hodnotu. Žádný skin se nedoručuje, žádná cena není financována a tlačítko prohlédnutí nespouští nákup.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ TAJNÉ DROPY ŽEBŘÍČKU",
        price: "Pouze ukázka · bez peněžní hodnoty",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ STUPEŇ UTAJENÉHO VYLEPŠENÍ",
        price: "Pouze ukázka · bez peněžní hodnoty",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ TAJNÝ SPECIÁLNÍ DROP",
        price: "Pouze ukázka · bez peněžní hodnoty",
      },
      crown: {
        name: "Rámeček avataru Koruna A.C.E.",
        tag: "Ozdoba profilu",
        price: "Součást tarifu Premium nebo {rp} RP",
      },
      shimmer: {
        name: "Zlatý laserový třpyt profilu",
        tag: "Přizpůsobení chatu",
        price: "Součást tarifu Premium nebo {rp} RP",
      },
      pass: {
        name: "Zlatá turnajová vstupenka Premium",
        tag: "Žeton přístupu do ligy",
        price: "{rp} RP / přednostní registrace",
      },
    },
  },
  support: {
    meta: {
      title: "Podpora",
      description:
        "Rozvržení centra nápovědy A.C.E. Pracoviště anti-cheatu, rankingových front a vyúčtování nejsou v provozu. Výzvy k požadavkům nevytvářejí případy.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Firemní kontaktní terminál A.C.E. Odeslání formuláře je maketa v pískovišti a neodesílá e-mail ani neukládá telemetrii.",
    },
  },
  contactEmail: {
    label: "NASTAVIT OVĚŘENÝ TELEMETRICKÝ E-MAIL",
    hintSignedIn:
      "Ukládá se pouze k přihlášenému účtu. Neodesílá se žádná potvrzovací zpráva, takže adresa není ověřena.",
    hintSignedOut: "Chcete-li k účtu uložit kontaktní e-mail, přihlaste se přes Steam.",
    saving: "UKLÁDÁNÍ",
    save: "ULOŽIT KONTAKTNÍ E-MAIL",
    results: {
      signInFirst: "Před uložením kontaktního e-mailu se přihlaste přes Steam.",
      invalid: "Zadejte jednu e-mailovou adresu, nebo pole nechte prázdné a adresu tím smažete.",
      failed: "Tato adresa je už uložena u jiného účtu, nebo je databáze nedostupná.",
      saved: "Kontaktní adresa byla u tohoto účtu uložena. Nebyla odeslána žádná potvrzovací zpráva, takže adresa není ověřena.",
      cleared: "Kontaktní adresa byla smazána.",
    },
  },
};
