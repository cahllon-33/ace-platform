import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Arvotaso {n}",
    "chip": "Premium",
    "artAlt": "{rank} – Premium-arvokuva"
  },
  "rpRules": {
    "kicker": "A.C.E RATING POINTS -SÄÄNNÖT",
    "title": "Näin Rating Points muuttuvat",
    "lede": "Sääntöversio {version}. Jokainen uusi pelaaja aloittaa {start} RP:llä tasolta 3, {tier}. Tikkaat ovat tarkoituksella hitaat: jokainen keskikohdan yläpuolinen taso vaatii enemmän voittoja kuin edellinen.",
    "tableTitle": "Säännöt",
    "colRule": "Sääntö",
    "colValue": "Arvo",
    "rStart": "Aloitusluokitus",
    "vStart": "{start} RP, taso 3 ({tier})",
    "rWin": "Voitto tasaväkistä joukkuetta vastaan",
    "vWin": "+{win} RP",
    "rLoss": "Tappio tasaväkiselle joukkueelle",
    "vLoss": "−{loss} RP",
    "rOdds": "Vastustajan vahvuus",
    "vOdds": "Luokitustasi verrataan toisen joukkueen keskimääräiseen luokitukseen (asteikko {scale}). Voitto vahvemmasta joukkueesta tuo enemmän ja tappio sille maksaa vähemmän; heikompaa joukkuetta vastaan päinvastoin.",
    "rClamp": "Rajat ottelua kohden",
    "vClamp": "Voitto tuo +{winMin}–+{winMax} RP. Tappio maksaa −{lossMin}–−{lossMax} RP.",
    "rTier": "Voitot korkeilla tasoilla",
    "vTier": "Voittopisteet kerrotaan luvulla {t7} tasoilla 7–9 ja luvulla {t10} tasolla 10 ({top}). Tappioita ei koskaan pienennetä.",
    "rMvp": "Ottelun MVP",
    "vMvp": "Pelaaja, jolla on eniten tappoja; tasatilanteessa ratkaisee suurempi vahinko ja sitten vähemmät kuolemat. +{mvp} RP voitosta ja {mvp} RP pienempi menetys tappiosta, ei koskaan yli ottelukohtaisten rajojen. Tulossa: palvelin ei vielä tallenna tappoja, joten MVP-bonusta ei tänään sovelleta.",
    "rPlacement": "Sijoitus",
    "vPlacement": "Ensimmäiset {n} otteluasi. Sijoituksen aikana luokituksesi ei voi nousta tason {maxTier} ({cap} RP) yläpuolelle.",
    "rDraw": "Tasapeli",
    "vDraw": "0 RP kaikille.",
    "rAbandon": "Ottelun hylkääminen tai siitä poistuminen",
    "vAbandon": "−{abandon} RP tuloksesta riippumatta, eikä MVP-bonusta.",
    "rLimits": "Luokitusväli",
    "vLimits": "{floor}–{ceiling} RP",
    "rDecay": "Passiivisuus",
    "vDecay": "Ei laskua. Luokituksesi ei laske, kun olet poissa.",
    "rPaid": "Maksulliset tilaukset",
    "vPaid": "Ei vaikutusta. Free-, Plus- ja Premium-pelaajat etenevät täsmälleen samoilla säännöillä.",
    "tierTableTitle": "Tasoittain, tasaväkistä joukkuetta vastaan",
    "colTier": "Taso",
    "colFloor": "Alkaen",
    "colWin": "Voitto",
    "colLoss": "Tappio",
    "examplesTitle": "Laskuesimerkit",
    "ex1": "{start} → {elite} RP ({top}) tasaväkisiä joukkueita vastaan pelkillä voitoilla: {w1} voittoa à +{win} tasolle 6 asti, sitten {w2} voittoa à +{win7} tasojen 7–9 läpi. Yhteensä {total} voittoa.",
    "ex2": "Jokainen tappio matkalla lisää tarvittavia voittoja. Tasoilla 7–9 voitto tuo +{win7}, mutta tappio maksaa edelleen −{loss}, joten sinun on voitettava vähintään {breakEven} % tasaväkisistä otteluista, jotta nousu jatkuu.",
    "ex3": "Joukkuetta vastaan, jonka keskiarvo on 200 RP sinua korkeampi, voitto tuo +{strongWin} ja tappio maksaa −{strongLoss}.",
    "ex4": "Joukkuetta vastaan, jonka keskiarvo on 200 RP sinua matalampi, voitto tuo +{weakWin} ja tappio maksaa −{weakLoss}.",
    "note": "Luvut laskee sama koodi, joka soveltaa vahvistetun ottelutuloksen. Ne ovat esimerkkejä, eivät tallennettuja otteluita."
  },
  "premiumCodex": {
    "kicker": "PREMIUM-ARVOMERKKIKOODEKSI",
    "title": "Premium-arvomerkkikoodeksi",
    "lede": "Kymmenen kuvitettua kristallitunnusta, yksi kutakin arvoa kohden. Tämä on kosmeettista profiilitaidetta samalla Rating Points -tikkaalla kuin vakioarvot. Se ei muuta reittausta, ottelunhakua eikä jonoa.",
    "cosmetic": "Kosmeettinen taide · sama RP-tikas · vain A.C.E Premium 7 $/kk",
    "imgAlt": "{name} Premium-arvomerkkitaide, taso {level}"
  },
  "premiumRanks": {
    "kicker": "PREMIUM-ARVOT",
    "plan": "A.C.E PREMIUM · vain 7 $/kk",
    "title": "Premium-arvokuvitus",
    "lede": "Alkuperäinen kuvitettu A.C.E-arvosarja: kymmenen kristallitunnusta divisioonilla III/II/I, luokitusprotokolla, Legend-tietokortti ja vetämällä pyöritettävä 3D-katselin. Se on profiilikuvitus Premium-jäsenille. Se lukee samoja Rating Points -tikkaita kuin vakioarvot eikä anna kilpailuetua.",
    "demo": "Demoarvot: taulun edistyminen, voittoprosentti ja divisioonat ovat esimerkkejä, eivät reaaliaikaisia tilastoja. Kirjautuneena näytetty luokitus on tallennettu luokituksesi.",
    "locked": "Tulossa: maksua ei vielä ole, joten mikään tili ei ole tänään Premium. Palvelin käyttää Premium-arvokuvitusta profiilissa vain, jos sen tallennettu tilaus on Premium.",
    "standardKicker": "VAKIOARVOT",
    "standardNote": "Jokainen tili käyttää näitä 3D-vektoritunnuksia.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Arvokuvitus profiilissasi",
    "pickerStandard": "Vakio",
    "pickerPremium": "Premium",
    "pickerLocked": "Premium-arvokuvitus kuuluu A.C.E Premiumiin (7 $/kk). Tulossa: maksua ei vielä ole.",
    "pickerSaved": "Tallennettu.",
    "pickerFailed": "Ei tallennettu. Premium-arvokuvitus vaatii A.C.E Premiumin."
  },
  "meta": {
    "title": "Kilpailurankingit",
    "description": "A.C.E:n kymmenen rankingia Iron Recruitista A.C.E Legendiin divisioonineen ja luokituslattioineen."
  },
  "hero": {
    "kicker": "KALIBROINTI",
    "title": "Kilpailurankingit",
    "lede": "Kymmenen tasoa Recruitista A.C.E Legendiin, kussakin divisioonat {divisions}. Vedä tai käytä nuolinäppäimiä emblemin kiertämiseen. Kirjautuneena näet oman luokituksesi; muuten kunkin tason lattian."
  },
  "codexLink": "Avaa Kalibrointikoodeksi",
  "document": {
    "title": "Kymmenen tason kalibrointiasiakirja",
    "body": "Moottorin nimet ovat virallinen ranking. Kristallinimet ovat aulataidetta. Taulun voittoprosenttimerkit ovat esittelylukuja, kunnes ranked-matchmaking käynnistyy. Maksulliset kosmetiikat eivät koskaan siirrä pelaajaa lattioiden välillä.",
    "level": "TASO {level} · {crystal}",
    "detail": "Vähimmäisluokitus {rating}. Materiaalitutkielma: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "LÄHTÖKALIBROINTI",
      "material": "Raakarauta / obsidiaanilaattapinta"
    },
    "2": {
      "tagline": "KENTTÄOPERATIIVI",
      "material": "Harjattu pronssikristalliydin"
    },
    "3": {
      "tagline": "ETULINJA",
      "material": "Ruusukultasirpaleita tummanpunaisin vivahtein"
    },
    "4": {
      "tagline": "TARKKUUSTYÖ",
      "material": "Kromihopeinen timanttisirpalekappale"
    },
    "5": {
      "tagline": "KOKENUT YDIN",
      "material": "Vanhennetun messingin sula ydinaura"
    },
    "6": {
      "tagline": "KULTAINEN STANDARDI",
      "material": "Eloisa kultasirpalekristallin hehku"
    },
    "7": {
      "tagline": "SYAANINOUSU",
      "material": "Syaaninsininen plasmakristallimatriisi"
    },
    "8": {
      "tagline": "SAFIIRIMYRSKY",
      "material": "Safiirinsininen hehkuva salamakristalliydin"
    },
    "9": {
      "tagline": "TYHJYYDEN KRUUNU",
      "material": "Syvä kosminen tyhjyydenvioletti tähtisirpaleydin"
    },
    "10": {
      "tagline": "ELIITIN ELIITTI",
      "material": "Ylellinen sula säteilevä kultakruunurunko"
    }
  },
  "board": {
    "selectEmblem": "Valitse A.C.E {name} -emblemi, taso {level}",
    "emblemAlt": "A.C.E:n mukautettu 3D-kristallinen taso {level} {crystal} {name} -emblemin profiilimerkki",
    "emblemAltLegend": "A.C.E:n mukautettu 3D-kristallinen tason {level} emblemin profiilimerkki",
    "premium": "HUIPPUTASO"
  },
  "division": {
    "label": "Divisioona {division}",
    "select": "Valitse divisioona {division}",
    "summary": "{divisions} divisioonaa kussakin / {levels} tasoa yhteensä"
  },
  "card": {
    "rank": "Ranking {level}",
    "targetWinRate": "{winRate} tavoitevoittoprosentti",
    "floor": "Lattia"
  },
  "turntable": {
    "stageLabel": "{name} kiertoratemblemi. Vedä kiertääksesi.",
    "dragToRotate": "VEDÄ KIERTÄÄKSESI",
    "rankSystem": "RANKINGJÄRJESTELMÄ"
  },
  "emblem": {
    "kicker": "Kalibrointimerkki",
    "rankLabel": "Ranking {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} sijoitusmerkkiä täytetty tallennetuista voitoista ja tappioista. Nämä solmut eivät käynnistä ottelua."
  }
};
