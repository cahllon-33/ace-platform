import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "Priser",
    "description": "A.C.E.-medlemskap: Free {free}, Plus {plus}/mån, Premium {premium}/mån. Fasta heltalspriser."
  },
  "period": {
    "monthly": "/mån"
  },
  "hero": {
    "badge": "Medlemskap",
    "title": "Åtkomstnivåer",
    "lede": "Free {free}. Plus {plus}/mån. Premium {premium}/mån. Beloppen är fasta heltal. Betalda planer köper aldrig rating eller lättare motståndare."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Öppen åtkomst",
      "points": [
        "Logga in med Steam OpenID. A.C.E. ber aldrig om ett Steam-lösenord.",
        "En sparad rating börjar på 1 000. Inget matchresultat har ändrat den.",
        "Alla publika sidor: spela, turneringar, topplista, lag och regler."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Tackbrev och support",
      "points": [
        "Allt i Free.",
        "Öppnar ett tackbrev på den här webbplatsen: vad som ingår, vad som inte ingår, och support@ace-platform.gg.",
        "Köper inte rating eller lättare motståndare. Guldmärken på profilen kommer från sparad matchdata för alla spelare. Elitsigillet och specialmärkena visas bara när den sparade nivån redan är Premium."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Tackbrev och femmannatrupp",
      "points": [
        "Allt i Free.",
        "Öppnar ett tackbrev på den här webbplatsen: vad som ingår, vad som inte ingår, och support@ace-platform.gg.",
        "Öppnar sedan Trupper: en kapten inloggad med Steam kan spara en klan med fem spelare.",
        "Inget pris, vapen, aktiv kö eller spelserver. En sparad klan är ingen plats på 100-lagstavlan."
      ]
    }
  },
  "card": {
    "elite": "ELIT",
    "stayFree": "Stanna på Free",
    "freeNote": "Öppet nu",
    "choose": "Välj {plan}",
    "chooseAria": "Välj {plan} för {price} per månad"
  },
  "billing": {
    "kicker": "BETALNINGSTIDSLINJE",
    "title": "Hur betalningen fungerar när den finns",
    "body": "Plus kostar exakt {plus}/mån. Premium kostar exakt {premium}/mån.",
    "display": {
      "label": "01 · VISNING",
      "body": "Free {free}. Plus {plus}/mån. Premium {premium}/mån. Betalda nivåer köper aldrig rating eller lättare motståndare."
    },
    "rolling": {
      "label": "02 · LÖPANDE CYKEL",
      "body": "När betalning finns förnyas avgiften månadsvis. Delvis använd månad återbetalas inte. Uppsägning stoppar nästa cykel och tar inte bort den redan betalda perioden."
    },
    "today": {
      "label": "03 · I DAG"
    }
  },
  "compare": {
    "kicker": "Vad A.C.E. kan lova i dag",
    "title": "Jämförelse av medlemskap",
    "note": "Varje rad speglar webbplatsen i dag. Betalning kommer snart, och en betald plan öppnar aldrig en kö eller köper en fördel.",
    "caption": "Free, Plus och Premium jämförda utifrån vad webbplatsen gör i dag",
    "includedToday": "Ingår i dag",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Publik webbplats",
        "detail": "Start, spela, turneringar, topplista, lag, regler och villkor."
      },
      "steamSignIn": {
        "feature": "Steam-inloggning",
        "detail": "Officiellt Steam OpenID. A.C.E. ber aldrig om ett Steam-lösenord."
      },
      "startingRating": {
        "feature": "Startrating",
        "detail": "Talet som sparas på ett nytt konto före någon registrerad match."
      },
      "recordedMatches": {
        "feature": "Registrerade matcher",
        "detail": "Vinster och förluster från en avslutad A.C.E.-match."
      },
      "rankedQueue": {
        "feature": "Rankad kö",
        "detail": "HITTA MATCH förblir stängd tills en riktig kö finns."
      },
      "cs2Servers": {
        "feature": "CS2-servrar",
        "detail": "Den här webbplatsen skickar ingen serveradress eller anslutningslänk."
      },
      "antiCheatClient": {
        "feature": "Anti-fusk-klient",
        "detail": "Inget laddas ned från den här webbplatsen."
      },
      "charge": {
        "feature": "Debitering",
        "detail": "Att välja Plus eller Premium kräver inget kort."
      },
      "ratingForSale": {
        "feature": "Rating till salu",
        "detail": "En betald etikett köper aldrig rating eller lättare motståndare."
      },
      "prizeOrWeapon": {
        "feature": "Pris eller vapen",
        "detail": "Inga skins, knivar eller prispott levereras."
      },
      "goldEliteSeal": {
        "feature": "Elitsigill och specialmärken",
        "detail": "Endast Premium, läses från den sparade nivån på servern. Kosmetiskt. Betalning sätter inte den nivån."
      }
    },
    "cells": {
      "open": "Öppen",
      "yes": "Ja",
      "noneYet": "Inga än",
      "closed": "Stängd",
      "notConnected": "Kommer snart",
      "notShipped": "Inte lanserat",
      "noCharge": "Ingen debitering",
      "notForSale": "Inte till salu",
      "none": "Inga",
      "no": "Nej",
      "storedTierOnly": "Endast sparad nivå"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus-kvitto",
      "metaDescription": "A.C.E. Plus-brevet som visas på den här webbplatsen. Betalning är inte aktiv, så inget debiteras och inget e-postmeddelande skickas.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Fortsätt på A.C.E.",
      "nextBody": "De publika sidorna förblir öppna. Valet öppnar ingen kö och ändrar inte den sparade nivån."
    },
    "premium": {
      "metaTitle": "Premium-kvitto",
      "metaDescription": "A.C.E. Premium-brevet som visas på den här webbplatsen. Betalning är inte aktiv, så inget debiteras och inget e-postmeddelande skickas.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Fortsätt till Trupper",
      "nextBody": "Fortsätt till Trupper. Sidan frågar om ni är ett lag på fem. Plats 1 är det inloggade Steam-kontot. Plats 2 till 5 är de andra spelarna. Att spara en klan debiterar inte heller detta pris."
    }
  },
  "letter": {
    "kicker": "{plan} · {price} per månad",
    "title": "Tack för ditt val",
    "flag": "Det här brevet visas på webbplatsen. Inget e-postmeddelande skickades. Inget kort debiterades. Betalning är inte aktiv, och den sparade medlemsnivån ändrades inte.",
    "greeting": "Bästa spelare,",
    "intro": "Tack för att du valde {plan}. Den här sidan är kvittot. Den anger visningspriset, vad valet omfattar i dag, vad det inte omfattar och supportadressen som publiceras på den här webbplatsen.",
    "selected": {
      "title": "Vad som valdes",
      "items": [
        "Plannamn: {plan}.",
        "Visningspris: {price} per månad. Beloppet är en etikett, inte en debitering.",
        "Betalning: ingen. Att välja den här planen kräver inget kort.",
        "E-post: ingen. A.C.E. skickar inte det här brevet till en inkorg.",
        "Sparad nivå: oförändrad. Specialmärken och elitsigillet visas bara när kontot redan har Premium sparat.",
        "Rating: inte till salu. Ett nytt konto börjar fortfarande på 1 000."
      ]
    },
    "today": {
      "title": "Vad du kan använda i dag",
      "items": [
        "Den publika webbplatsen: start, spela, turneringar, topplista, lag, regler och villkor.",
        "Steam-inloggning via officiellt Steam OpenID. A.C.E. ber aldrig om ett Steam-lösenord.",
        "Samma publika sidor som Free. Priset öppnar ingen separat kö."
      ]
    },
    "excluded": {
      "title": "Vad valet inte omfattar",
      "items": [
        "En aktiv rankad kö. HITTA MATCH förblir stängd.",
        "En Counter-Strike 2-server, en serveradress eller en anslutningslänk.",
        "En anti-fusk-nedladdning. A.C.E Shield är under utveckling.",
        "Ett pris, ett skin, en kniv eller en prispott.",
        "En plats på 100-lagstavlan. Tavlan visar 0 registrerade tills en säsong öppnar.",
        "Lättare motståndare, köpt rating eller en annan publik webbplats än Free."
      ]
    },
    "trouble": {
      "title": "Om något inte fungerar",
      "items": [
        "Du väntade dig en debitering eller en betald nivå. Inget tillämpades. Kontot är oförändrat.",
        "Du väntade dig brevet i en inkorg. Det finns bara på den här sidan.",
        "Steam anslöts inte. Använd Koppla profil och kryssa först i rutan för villkoren. Skriv aldrig ett Steam-lösenord på A.C.E.",
        "Du behöver hjälp. Använd supportadressen nedan eller öppna hjälpsidorna på den här webbplatsen."
      ]
    },
    "support": {
      "title": "Support",
      "addressBefore": "Supportadressen som publiceras på den här webbplatsen är ",
      "addressAfter": ".",
      "helpBefore": "Hjälp på webbplatsen: ",
      "supportLink": "Support",
      "helpAnd": " och ",
      "contactLink": "Kontakt",
      "rulesBefore": ". Reglerna finns på ",
      "rulesLink": "Regler",
      "rulesAnd": " och ",
      "termsLink": "Villkor",
      "helpAfter": ". En förfrågan på Support öppnar inget ärende, och text som skrivs på Kontakt skickas inte."
    },
    "next": {
      "title": "Nästa steg"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM-TELEMETRI",
    "copy": "PANELTELEMETRI LÅST — Uppgradera till A.C.E. Plus eller Premium för att låsa upp dynamiska statistikkurvor i realtid och vapenspecialiseringsindex.",
    "cta": "Öppna pristabellerna"
  }
};
