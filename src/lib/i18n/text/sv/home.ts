import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "LIVE",
    "online": "Online nu",
    "registered": "Registrerade spelare",
    "earlyTitle": "Tidig åtkomst",
    "earlyBody": "Bli en av de första spelarna på A.C.E. Liveräknarna visas här när communityn växer.",
    "unavailable": "Liveräknarna är inte tillgängliga just nu.",
    "note": "Riktiga siffror, uppdateras var 30:e sekund."
  },
  "ops": {
    "identityKicker": "IDENTITETSNAV",
    "signedOutTitle": "Logga in med Steam",
    "signedOutBody": "Anslut med officiella Steam OpenID för att se din Steam-avatar, ditt rankemblem och dina Rating Points här. A.C.E ber aldrig om ett Steam-lösenord.",
    "connect": "Logga in med Steam",
    "openDeck": "Öppna Command Deck",
    "avatarAlt": "Steam-avatar för {name}",
    "emblemAlt": "Rankemblem {rank}",
    "rp": "Rating Points",
    "wins": "Vinster",
    "losses": "Förluster",
    "winRate": "Vinstandel",
    "matches": "Matcher",
    "kd": "K/D",
    "na": "–",
    "kdNote": "K/D visar – eftersom A.C.E inte registrerar kills och dödsfall än.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "UNDER UTVECKLING",
    "shieldTitle": "Integritetsstatus",
    "shieldBody": "A.C.E Shield är under utveckling. Inget installeras, skannas eller övervakas i dag, så inget konto har något integritetsbeslut.",
    "shieldClient": "Anti-fusk-klient",
    "shieldClientValue": "Inte släppt",
    "shieldServer": "Matchservrar",
    "shieldServerValue": "Inte anslutna",
    "shieldHardware": "Hårdvaruskanning",
    "shieldHardwareValue": "Samlas inte in",
    "shieldLink": "Så kommer A.C.E Shield att fungera",
    "seasonKicker": "SÄSONG 1",
    "seasonChip": "DATUM INTE ANNONSERADE",
    "seasonTitle": "Säsong 1-översikt",
    "seasonBody": "Säsong 1 har inget start- eller slutdatum än, så det finns ingen nedräkning. Datumen publiceras på den här webbplatsen innan säsongen öppnar.",
    "statsKicker": "DIN STATISTIK",
    "statsSignedOut": "Logga in med Steam för att se din statistik.",
    "statsEmpty": "Inga registrerade matcher än. Vinster och förluster visas efter din första registrerade A.C.E-match.",
    "statsLive": "Vinster och förluster kommer från ditt sparade A.C.E-konto.",
    "statsLink": "Öppna spelarstatistik"
  },
  "meta": {
    "title": "A.C.E — Tävlingsplattform för CS2",
    "description": "A.C.E är en planerad tävlingsplattform för Counter-Strike 2 med spelaridentitet, kalibrering, lag och turneringar. Den här publika webbplatsen är en förhandsversion. Rankad matchning, anti-fusk, betalningar och priser är inte aktiva."
  },
  "opening": {
    "dialogLabel": "A.C.E intro",
    "line": "A.C.E: Autonomt anti-fusk, tävlingskalibrering, elitspelare",
    "enter": "Gå in på webbplatsen"
  },
  "hero": {
    "logoAlt": "A.C.E. Autonomt anti-fusk, tävlingskalibrering, elitspelare",
    "arenaAlt": "A.C.E arenaplatta. Originalbild av scenen, inte Valve-grafik. Skärmen är märkt spel-tv. Ingen direktsändning pågår."
  },
  "broadcast": {
    "kicker": "TURNERINGSBEVAKNING",
    "title": "Sändningsdesk",
    "lede": "Tävlingskartpoolen finns på den här desken: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis och Train. Det är originalbilder. Ingen turnering sänds, och sidan spelar ingen Valve-match.",
    "offAir": "EJ I SÄNDNING · {map}"
  },
  "jumpNav": {
    "label": "Kategorier på startsidan",
    "play": "Spela",
    "prizes": "Priser",
    "teams": "Lag",
    "leaderboard": "Topplista",
    "ranks": "Ranker",
    "systems": "System"
  },
  "charter": {
    "kicker": "HUVUDLOBBY",
    "title": "A.C.E LOBBY FÖR TÄVLINGSMATCHNING OCH UTSKICKSCENTRAL",
    "badge": "SERVRAR · KOMMER SNART",
    "lede": "Den här lobbyn tilldelar ingen server, startar ingen anti-fusk-klient och betalar inga priser.",
    "modules": [
      {
        "kicker": "MATCH HITTAD · 5v5",
        "copy": "5v5-ramen på den här sidan är en stängd kö. Den tilldelar ingen server.",
        "chips": [
          "INGEN 128-TICK-SERVER",
          "KÖN ÄR STÄNGD"
        ]
      },
      {
        "kicker": "FASTA 3D-RANKER",
        "copy": "Tio nivåer från Recruit till A.C.E Legend. En sparad rating visas efter Steam-inloggning. Den här sidan registrerar inga matchresultat.",
        "chips": [
          "RATINGREGEL DOKUMENTERAD",
          "VRIDBORD PÅ DEN HÄR SIDAN"
        ]
      },
      {
        "kicker": "SKIN-BELÖNINGAR",
        "copy": "Mästerskapsbelöningar tillkännages för varje evenemang.",
        "chips": [
          "INGET FÖREMÅL LEVERERAS",
          "INGEN DROPPKONTROLL"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELIT"
  },
  "membership": {
    "compareLink": "Se hela jämförelsetabellen"
  },
  "loot": {
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "SPELSERVRAR · KOMMER SNART",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}. Server kommer snart.",
    "note": "Regionala 128-tick-servrar kommer med tävlingsbetan."
  },
  "telemetry": {
    "badge": "FÖRHANDSVISNING · KOMMER SNART",
    "lines": [
      "A.C.E SHIELD: UNDER UTVECKLING",
      "HÅRDVARUBANN-MATRIS: INGEN IDENTIFIERARE SAMLAS IN",
      "A.C.E SHIELD-LÄNK: INGEN KLIENT ÄR INSTALLERAD"
    ],
    "note": "Den här webbplatsen kör ingen kärnklient, skannar inte minnet och utfärdar inga hårdvarubann."
  },
  "comingSoon": {
    "badge": "INTE TILLGÄNGLIG",
    "body": "A.C.E:s skrivbordsklient erbjuds inte för nedladdning. Säsong 1 på den här webbplatsen installerar ingen programvara och öppnar ingen incheckning."
  },
  "operative": {
    "kicker": "Filmisk taktisk vy · original-CSS-miljö · inte Valve-grafik",
    "title": "Gå djupare in i CS2: den ultimata tävlingsplattformen",
    "lede": "Rättvisare matcher, bättre lagkamrater. Ranker som betyder något, belöningar som räknas.",
    "note": "Kampanjtext. Rankade köer, aktiva servrar och priser är inte aktiva."
  },
  "howStatus": {
    "label": "A.C.E REGISTRERINGSSYSTEM — KALIBRERINGSMOTORN REDO",
    "note": "Rankade köer öppnar när A.C.E Shield och kalibreringen går live."
  },
  "shell": {
    "primaryNav": "Huvudmeny",
    "mobileNav": "Mobil",
    "elite": "ELIT",
    "notificationsTitle": "Aviseringar · kommer snart",
    "notificationsAria": "Aviseringar. Inga olästa.",
    "connectProfileTitle": "Koppla profil",
    "openProfileAria": "Öppna profilen i kommandocentralen",
    "connectProfileAria": "Koppla profil via Steam OpenID",
    "signOutAria": "Logga ut från A.C.E."
  },
  "notFound": {
    "kicker": "RUTNÄTSFEL",
    "title": "FEL 404 — RADARTELEMETRI FÖRLORAD",
    "body": "Koordinaten du begärde finns inte i vårt aktiva servernät.",
    "homeAria": "Tillbaka till lobbyn på A.C.E:s startsida",
    "cta": "TILLBAKA TILL LOBBYN"
  },
  "error": {
    "kicker": "Fel",
    "title": "Något gick fel",
    "body": "Den här publika sidan kunde inte visas. Du kan försöka igen. Inga kontouppgifter begärdes på den här förhandsversionen.",
    "retryAria": "Ladda om sidan",
    "retry": "Försök igen"
  }
};
