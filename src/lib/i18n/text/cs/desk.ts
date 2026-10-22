import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Tržiště A.C.E",
      description:
        "Karty šampionátových odměn. Obchod a odměny se brzy otevřou.",
    },
    heroHonesty:
      "Kosmetika a členství se prodávají přes pokladnu Paddle. Kosmetika nikdy neovlivňuje hru.",
    prizeBanner: "🏆 ŠAMPIONÁTOVÉ ODMĚNY · JIŽ BRZY",
    notice:
      "Tyto ukázky jsou náhledy bez peněžní hodnoty. Nic se nedoručuje ani neúčtuje a tlačítko prohlédnutí nespouští nákup.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ TAJNÉ DROPY ŽEBŘÍČKU",
        price: "Již brzy",
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
        price: "Již brzy",
      },
      shimmer: {
        name: "Zlatý laserový třpyt profilu",
        tag: "Přizpůsobení chatu",
        price: "Již brzy",
      },
      pass: {
        name: "Zlatá turnajová vstupenka",
        tag: "Žeton přístupu do ligy",
        price: "Již brzy",
      },
    },
  },
  support: {
    meta: {
      title: "Podpora",
      description:
        "Centrum nápovědy A.C.E. Podpora pro anti-cheat, hodnocené hry a platby se otevře se soutěžní betou.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Kontaktujte A.C.E. Online formulář se brzy otevře.",
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
