import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "Hinnoittelu",
    "description": "A.C.E.-jäsenyys: Free {free}, Plus {plus}/kk, Premium {premium}/kk. Kokonaislukuihin lukitut näyttöhinnat."
  },
  "period": {
    "monthly": "/kk"
  },
  "hero": {
    "badge": "Jäsenyys",
    "title": "Käyttötasot",
    "lede": "Free {free}. Plus {plus}/kk. Premium {premium}/kk. Luvut on lukittu kokonaislukuihin. Maksulliset paketit eivät koskaan osta luokitusta tai helpompia vastustajia."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafiitti",
      "title": "Avoin pääsy",
      "points": [
        "Kirjaudu Steam OpenID:llä. A.C.E. ei koskaan kysy Steam-salasanaa.",
        "Tallennettu luokitus alkaa 1 000:sta. Mikään ottelutulos ei ole muuttanut sitä.",
        "Kaikki julkiset sivut: pelaa, turnaukset, tulostaulu, joukkueet ja säännöt."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Kiitoskirje ja tuki",
      "points": [
        "Kaikki Free-paketin sisältö.",
        "Tulossa pian: kiitoskirje (mitä sisältyy, mitä ei, ja support@ace-platform.gg) avautuu vasta, kun maksutoiminto on olemassa. Painike on tänään pois käytöstä.",
        "Ei osta luokitusta tai helpompia vastustajia. Kultaiset profiilimerkit tulevat tallennetusta otteludatasta jokaiselle pelaajalle. Eliittisinetti ja erikoismerkit näkyvät vain, kun tallennettu taso on jo Premium."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Kiitoskirje ja viiden pelaajan ryhmä",
      "points": [
        "Kaikki Free-paketin sisältö.",
        "Tulossa pian: kiitoskirje (mitä sisältyy, mitä ei, ja support@ace-platform.gg) avautuu vasta, kun maksutoiminto on olemassa. Painike on tänään pois käytöstä.",
        "Tulossa pian: maksun jälkeen kirje johtaa Squadsiin, jossa Steamilla kirjautunut kapteeni voi tallentaa viiden pelaajan klaanin.",
        "Ei palkintoa, asetta, live-jonoa tai pelipalvelinta. Tallennettu klaani ei ole paikka 100 joukkueen taulussa."
      ]
    }
  },
  "card": {
    "elite": "ELITE",
    "stayFree": "Pysy Free-paketissa",
    "freeNote": "Avoinna nyt",
    "choose": "Valitse {plan}",
    "chooseAria": "Valitse {plan} {price} kuukaudessa"
  },
  "billing": {
    "kicker": "LASKUTUKSEN AIKAJANA",
    "title": "Miten laskutus toimii, kun se on olemassa",
    "body": "Plus on tasan {plus}/kk. Premium on tasan {premium}/kk.",
    "display": {
      "label": "01 · HINTA",
      "body": "Free {free}. Plus {plus}/kk. Premium {premium}/kk. Maksulliset tasot eivät koskaan osta luokitusta tai helpompia vastustajia."
    },
    "rolling": {
      "label": "02 · JATKUVA JAKSO",
      "body": "Kun laskutus on olemassa, maksut uusiutuvat kuukausittain jatkuvana jaksona. Osittaista kuukautta ei hyvitetä. Peruminen lopettaa seuraavan jakson eikä poista nykyistä ennalta maksettua jaksoa."
    },
    "today": {
      "label": "03 · TÄNÄÄN"
    }
  },
  "compare": {
    "kicker": "Mitä A.C.E. voi luvata tänään",
    "title": "Jäsenyysvertailu",
    "note": "Jokainen rivi kuvaa sivustoa tänään. Maksutoiminto on tulossa pian, eikä maksullinen paketti koskaan avaa jonoa tai osta etua.",
    "caption": "Free, Plus ja Premium vertailtuna sen mukaan, mitä sivusto tekee tänään",
    "includedToday": "Sisältyy tänään",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Julkinen sivusto",
        "detail": "Etusivu, pelaa, turnaukset, tulostaulu, joukkueet, säännöt ja ehdot."
      },
      "steamSignIn": {
        "feature": "Steam-kirjautuminen",
        "detail": "Virallinen Steam OpenID. A.C.E. ei koskaan kysy Steam-salasanaa."
      },
      "startingRating": {
        "feature": "Aloitusluokitus",
        "detail": "Uudelle tilille tallennettu luku ennen yhtään kirjattua ottelua."
      },
      "recordedMatches": {
        "feature": "Kirjatut ottelut",
        "detail": "Voitot ja tappiot kirjattuna päättyneestä A.C.E.-ottelusta."
      },
      "rankedQueue": {
        "feature": "Ranked-jono",
        "detail": "ETSI OTTELU pysyy suljettuna, kunnes todellinen jono on olemassa."
      },
      "cs2Servers": {
        "feature": "CS2-palvelimet",
        "detail": "Tämä sivusto ei lähetä palvelinosoitetta tai yhdistämislinkkiä."
      },
      "antiCheatClient": {
        "feature": "Huijauksenestoasiakas",
        "detail": "Tältä sivustolta ei ladata mitään."
      },
      "charge": {
        "feature": "Veloitus",
        "detail": "Plussan tai Premiumin valinta ei vaadi korttia."
      },
      "ratingForSale": {
        "feature": "Luokitus myytävänä",
        "detail": "Maksullinen merkintä ei koskaan osta luokitusta tai helpompia vastustajia."
      },
      "prizeOrWeapon": {
        "feature": "Palkinto tai ase",
        "detail": "Skiniä, veistä tai palkintopottia ei toimiteta."
      },
      "goldEliteSeal": {
        "feature": "Eliittisinetti ja erikoismerkit",
        "detail": "Vain Premium, luettuna palvelimen tallennetusta tasosta. Kosmeettinen. Maksutoiminto ei aseta tätä tasoa."
      }
    },
    "cells": {
      "open": "Avoin",
      "yes": "Kyllä",
      "noneYet": "Ei vielä",
      "closed": "Suljettu",
      "notConnected": "Tulossa pian",
      "notShipped": "Ei julkaistu",
      "noCharge": "Ei veloitusta",
      "notForSale": "Ei myytävänä",
      "none": "Ei mitään",
      "no": "Ei",
      "storedTierOnly": "Vain tallennettu taso"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus-kuitti",
      "metaDescription": "Tällä sivustolla näytettävä A.C.E. Plus -kirje. Maksutoiminto ei ole käytössä, joten mitään ei veloiteta eikä sähköpostia lähetetä.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Jatka A.C.E.:ssä",
      "nextBody": "Julkiset sivut pysyvät avoimina. Tämä valinta ei avaa jonoa eikä muuta tallennettua tasoa."
    },
    "premium": {
      "metaTitle": "Premium-kuitti",
      "metaDescription": "Tällä sivustolla näytettävä A.C.E. Premium -kirje. Maksutoiminto ei ole käytössä, joten mitään ei veloiteta eikä sähköpostia lähetetä.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Jatka Squadsiin",
      "nextBody": "Jatka Squadsiin. Sivu kysyy, oletteko viiden hengen joukkue. Paikka 1 on kirjautunut Steam-tili. Paikat 2–5 ovat muut pelaajat. Klaanin tallentaminen ei silti veloita tätä hintaa."
    }
  },
  "letter": {
    "kicker": "{plan} · {price} kuukaudessa",
    "title": "Kiitos valinnastasi",
    "flag": "Tämä kirje näytetään sivustolla. Sähköpostia ei lähetetty. Korttia ei veloitettu. Maksutoiminto ei ole käytössä, eikä tallennettua jäsenyystasoa muutettu.",
    "greeting": "Hyvä pelaaja,",
    "intro": "Kiitos, että valitsit {plan}. Tämä sivu on kuitti. Se kirjaa näyttöhinnan, mitä valinta sisältää tänään, mitä se ei sisällä, ja tällä sivustolla julkaistun tukiosoitteen.",
    "selected": {
      "title": "Mitä valittiin",
      "items": [
        "Paketin nimi: {plan}.",
        "Näyttöhinta: {price} kuukaudessa. Luku on merkintä, ei veloitus.",
        "Maksu: ei mitään. Paketin valinta ei vaadi korttia.",
        "Sähköposti: ei mitään. A.C.E. ei lähetä tätä kirjettä sähköpostiin.",
        "Tallennettu taso: ennallaan. Erikoismerkit ja eliittisinetti näkyvät vain, kun tilille on jo tallennettu Premium.",
        "Luokitus: ei myytävänä. Uusi tili alkaa yhä 1 000:sta."
      ]
    },
    "today": {
      "title": "Mitä voit käyttää tänään",
      "items": [
        "Julkinen sivusto: etusivu, pelaa, turnaukset, tulostaulu, joukkueet, säännöt ja ehdot.",
        "Steam-kirjautuminen virallisen Steam OpenID:n kautta. A.C.E. ei koskaan kysy Steam-salasanaa.",
        "Samat julkiset sivut kuin Free-paketissa. Tämä hinta ei avaa erillistä jonoa."
      ]
    },
    "excluded": {
      "title": "Mitä tämä valinta ei sisällä",
      "items": [
        "Live-ranked-jonoa. ETSI OTTELU pysyy suljettuna.",
        "Counter-Strike 2 -palvelinta, palvelinosoitetta tai yhdistämislinkkiä.",
        "Huijauksenestolatausta. A.C.E Shield on kehitteillä.",
        "Palkintoa, skiniä, veistä tai palkintopottia.",
        "Paikkaa 100 joukkueen taulussa. Taulu näyttää yhä 0 rekisteröitynyttä, kunnes kausi alkaa.",
        "Helpompia vastustajia, ostettua luokitusta tai Free-paketista poikkeavaa julkista sivustoa."
      ]
    },
    "trouble": {
      "title": "Jos jokin ei toimi",
      "items": [
        "Odotit veloitusta tai maksullista tasoa. Mitään ei sovellettu. Tili pysyy ennallaan.",
        "Odotit tätä kirjettä sähköpostiin. Se on olemassa vain tällä sivulla.",
        "Steam ei yhdistänyt. Käytä Yhdistä profiili -toimintoa ja hyväksy ensin ehtojen valintaruutu. Älä koskaan kirjoita Steam-salasanaa A.C.E.:hen.",
        "Tarvitset apua. Käytä alla olevaa tukiosoitetta tai avaa sivuston ohjesivut."
      ]
    },
    "support": {
      "title": "Tuki",
      "addressBefore": "Tällä sivustolla julkaistu tukiosoite on ",
      "addressAfter": ".",
      "helpBefore": "Apua sivustolla: ",
      "supportLink": "Tuki",
      "helpAnd": " ja ",
      "contactLink": "Yhteystiedot",
      "rulesBefore": ". Säännöt ovat sivuilla ",
      "rulesLink": "Säännöt",
      "rulesAnd": " ja ",
      "termsLink": "Ehdot",
      "helpAfter": ". Tuki-sivun kehote ei avaa tukipyyntöä, eikä Yhteystiedot-sivulle kirjoitettua tekstiä toimiteta."
    },
    "next": {
      "title": "Seuraava vaihe"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM -TELEMETRIA",
    "copy": "HALLINTAPANEELIN TELEMETRIA LUKITTU — Päivitä tilauksesi A.C.E. Plus- tai Premium-pakettiin avataksesi dynaamiset reaaliaikaiset tilastokäyrät ja aseiden erikoisuusindeksit.",
    "cta": "Avaa hintataulukot"
  }
};
