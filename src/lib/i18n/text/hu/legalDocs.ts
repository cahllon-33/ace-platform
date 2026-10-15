import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "Ez az oldal a kényelem érdekében készült fordítás. Ha a fordítás és az angol szöveg eltér, az angol szöveg az irányadó.",
  "terms": {
    "meta": {
      "title": "Felhasználási feltételek",
      "description": "Az A.C.E. weboldal felhasználási feltételei ehhez a Counter-Strike 2 versenyoldalhoz. A ranked, a fizetések és a csalásellenes rendszer nem élnek."
    },
    "kicker": "ACE-LEGAL / FELHASZNÁLÁSI FELTÉTELEK",
    "title": "Felhasználási feltételek",
    "lede": "Ezek a feltételek szabályozzák az A.C.E. nyilvános weboldalának és a kapcsolódó fiók-API-knak a használatát. A meccshossz, a pályakészlet, a keretzárolás és az óvások a /rules oldalon található versenyszabálykönyvben vannak részletezve, amely ennek része.",
    "sections": {
      "operator": {
        "title": "1. Üzemeltető és függetlenség",
        "paragraphs": [
          "A szolgáltatást az A.C.E. Competitions Ltd. üzemelteti (cégjegyzékszám később kerül közzétételre). Az oldal használatával elfogadod ezeket a feltételeket, az Adatvédelmi szabályzatot, a Sütiszabályzatot és a versenyszabálykönyvet."
        ]
      },
      "eligibility": {
        "title": "2. Jogosultság és fiókok",
        "paragraphs": [
          "Elég idősnek kell lenned a Steam használatához az országodban. Fiók csak hivatalos Steam OpenID-n keresztül hozható létre. Korlátozás kijátszására nem oszthatsz meg fiókot. Az A.C.E. soha nem kéri a Steam-jelszavadat."
        ]
      },
      "notActive": {
        "title": "3. Ami ez a weboldal nem",
        "paragraphs": [
          "A ranked párosítás, az élő CS2 játékszerverek, a működő MI-alapú csalásellenes rendszer, a számlázás és a díjak nem aktívak. A lobbiórák és integritáspanelek előnézetek, hacsak az oldal mást nem állít."
        ]
      },
      "subscriptions": {
        "title": "4. Javasolt előfizetések",
        "paragraphs": [
          "A Plus (4 $/hó) és a Premium (7 $/hó) megjelenített árak. Ezen az oldalon még nincs fizetés, és a csomaggombokon a Hamarosan felirat áll. Ha lesz számlázás, a /pricing oldal lemondási szabálya érvényes: havi gördülő előfizetés, lemondás a vezérlőpult beállításaiban, a töredékhónapok nem téríthetők vissza."
        ]
      },
      "antiCheat": {
        "title": "5. Csalásellenes kliens (nem jelent meg)",
        "paragraphs": [
          "Ezen az oldalon nincs letölthető csalásellenes kliens. A /rules oldalon lévő versenyszabályzat nem gyűjt hardverazonosítót és nem tilt ki eszközt. Korlátozás kijátszására szolgáló fiókmegosztás tilos."
        ]
      },
      "liability": {
        "title": "6. Felelősségkorlátozás",
        "paragraphs": [
          "A jogszabályok által megengedett mértékben az A.C.E. nem felel elvesztett rangért, soha nem valós tárgyként létezett elvesztett kozmetikumokért, vagy harmadik fél Steam / CS2 kimaradásaiért. Az országod kötelező fogyasztói jogai nincsenek kizárva, ahol azokról nem lehet lemondani."
        ]
      },
      "copyright": {
        "title": "7. Az oldal eredeti anyagainak szerzői joga",
        "paragraphs": [
          "Az ehhez a weboldalhoz készült eredeti szöveg, oldalelrendezés, emblémák és grafikák az A.C.E. Competitions Ltd. tulajdonát képezik. Írásos engedély nélkül nem másolhatod, teheted közzé újra vagy gyűjtheted ki ezt az eredeti anyagot más termékhez. Ahol a jog megengedi, az A.C.E. érvényesítheti ezt a jogot, akár igénnyel is. Ez a közlemény nem indít pert, nem állapít meg kártérítést és nem garantál bírósági eredményt.",
          "A Counter-Strike 2, a Steam és a Dust II, Mirage, Inferno, Nuke, Ancient, Anubis és Train pályanevek a Valve tulajdonai. Az A.C.E. nem tart rájuk igényt. Az oldal megnyitása nem szüntet meg jogot és nem köt szerződést."
        ]
      },
      "contact": {
        "title": "8. Kapcsolat",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — A cégjegyzékszám később kerül közzétételre."
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "Adatvédelmi szabályzat",
      "description": "Az A.C.E. adatvédelmi szabályzata: szigorúan szükséges adatok, csak Steam OpenID, nincs Steam-jelszó, nincs viselkedési adatok eladása."
    },
    "kicker": "ACE-PRIVACY / GDPR / SZIGORÚ SZÜKSÉGESSÉG",
    "title": "Adatvédelmi szabályzat",
    "lede": "Ez az adatvédelmi szabályzat elmagyarázza, mit tárol az A.C.E. Competitions Ltd., amikor ezt a weboldalt használod. A fordítások a kényelmet szolgálják; az angol változat a hivatkozási szöveg. Ez nem állítja, hogy minden jövőbeli termékfelület már létezik.",
    "strictNecessity": {
      "title": "A szigorú szükségesség elve",
      "intro": "A versenyjátékos azonosításához és a saját szolgáltatásunkon elkövetett nyilvánvaló csalás megállításához szükséges minimális fiókadatot gyűjtjük. Nem gyűjtünk szükségtelen naplókat, nem gyűjtünk ki privát Steam-készleteket, és nem adunk el harmadik féltől származó viselkedési adatokat.",
      "storedIntro": "Jelenleg sikeres Steam OpenID bejelentkezés után tárolt adatok:",
      "stored": [
        {
          "label": "Ellenőrzött 64 bites SteamID",
          "body": "amelyet a Steam hivatalos OpenID-állítása ad vissza, és amelyet a szerver ellenőriz az A.C.E.-fiók létrehozása vagy frissítése előtt."
        },
        {
          "label": "Nyilvános Steam megjelenítendő név",
          "body": "ha Steam Web API kulcs be van állítva. Ez egy personanév, nem e-mail-postafiók."
        },
        {
          "label": "A.C.E. fiókrekordok",
          "body": "például rangszint, értékelési pontok, győzelmek/vereségek, csapattagság és munkamenet-tokenek hash-ei."
        }
      ],
      "notCollected": {
        "before": "E-mail-címeket és titkosított hardverprofilokat",
        "strong": "ma nem gyűjtünk ezen az oldalon",
        "after": ". A lobbi arcszkennelési és HWID kártyái tervezési előnézetek. Ha egy jövőbeli csalásellenes kliens vagy támogatási csatorna e-mailt vagy hardver-ujjlenyomatot igényel, a gyűjtés a csalásmegelőzésre korlátozódik, előbb itt kerül közzétételre, és nem adjuk el hirdetési adatként."
      }
    },
    "neverCollect": {
      "title": "Amit soha nem gyűjtünk",
      "items": [
        "Steam-jelszavakat. A bejelentkezés csak Steam OpenID-vel / a Steam hivatalos folyamatával történik.",
        "Bankkártyaszámokat. A fizetés nincs megvalósítva.",
        "Kernel-telemetriát. Ezzel az oldallal nem érkezik csalásellenes kliens."
      ]
    },
    "steamBoundary": {
      "title": "Harmadik féltől származó beágyazások és a Steam OpenID határa",
      "callback": {
        "before": "A Steam-bejelentkezés elhagyja az A.C.E.-t, a Steamen hitelesít, majd visszatér ide:",
        "after": ". A szerver a munkamenet létrehozása előtt ellenőrzi az OpenID-állítást (beleértve az állított identitást és a Steam aláírt paramétereit). A Steam által tárolt adatokra a Steam adatvédelmi szabályzata vonatkozik. Az A.C.E. csak az ellenőrzött SteamID-t és a fiók működtetéséhez szükséges nyilvános persona mezőket tárolja."
      },
      "footerLinks": "A lábléc külső hálózati ikonjai nyilvános weboldalakra mutató könyvtári linkek. Nem hivatalos A.C.E.-fiókok, és nem ágyaznak be követő widgeteket."
    },
    "rights": {
      "title": "GDPR-szerű jogok",
      "before": "Ha olyan régióban vagy, ahol személyes adatokkal kapcsolatos jogok vannak, kérheted A.C.E.-fiókadataid hozzáférését, helyesbítését vagy törlését e-mailben ide:",
      "after": ". A ranked csalásellenes hardverzárolások nem élnek; a weboldalfiók törlése nem CS2 VAC fellebbezés."
    },
    "cookies": {
      "title": "Sütik",
      "before": "Lásd a",
      "link": "Sütiszabályzatot",
      "after": "és a hozzájárulási sávot. Bejelentkezés után alapvető munkamenet-sütik szükségesek. Az opcionális kategóriák nincsenek használatban, amíg ténylegesen nem kerül hozzáadásra követő."
    },
    "controller": {
      "title": "Adatkezelő",
      "body": "A.C.E. Competitions Ltd. A cégjegyzékszám később kerül közzétételre. Kapcsolat: support@ace-platform.gg."
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Sütiszabályzat",
      "description": "Az A.C.E. süti- és telemetria-adatvédelmi auditja. Csak alapvető munkamenet-sütik, hacsak nem választod a fenntartott opcionális kategóriákat."
    },
    "kicker": "ACE-PRIVACY / SÜTIK / TELEMETRIA-AUDIT",
    "title": "Sütiszabályzat",
    "lede": "Ez az oldal az ace-platform.gg telemetria-adatvédelmi auditja. Leírja a weboldal által ténylegesen használt sütiket, a későbbre fenntartott kategóriákat és azt, amit nem gyűjtünk.",
    "audit": {
      "title": "100%-os telemetria-audit (jelenlegi build)",
      "body": "Az A.C.E. ezen a nyilvános oldalon nem futtat hirdetési pixeleket, Google Analyticset, Meta Pixelt, ujjlenyomat-SDK-kat vagy más harmadik féltől származó viselkedéskövetőket. A hozzájárulási sáv opcionális „Analitikai követők” és „Marketingkövetők” elemei csak kategóriák. Bejelölésük ma nem tölt be szkriptet. Ha később követő kerül hozzáadásra, először a tárolt beállítást olvassa, és kikapcsolva marad, hacsak nem járultál hozzá."
    },
    "essential": {
      "title": "Alapvető sütik [Kötelező / Zárolt]",
      "session": {
        "label": "Munkamenet-süti",
        "body": "— csak ellenőrzött Steam OpenID visszahívás után kerül beállításra. HttpOnly, az oldal JavaScriptje nem olvashatja, arra szolgál, hogy bejelentkezve maradj az A.C.E.-n."
      },
      "necessity": "Ezek a sütik szigorúan szükségesek egy hitelesített fiók működtetéséhez. Nem hirdetési azonosítók."
    },
    "analytics": {
      "title": "Analitikai követők [Opcionális]",
      "before": "Fenntartva. Nincs beállítva termékanalitikai szolgáltató. A választásod helyben tárolódik itt:",
      "after": "hogy egy jövőbeli saját használati mérőszám tiszteletben tarthassa."
    },
    "marketing": {
      "title": "Marketingkövetők [Opcionális]",
      "body": "Fenntartva. Az A.C.E. nem ad el, nem ad bérbe és nem közvetít viselkedési profilokat. Ezen az oldalon nincs marketing tagkezelő."
    },
    "change": {
      "title": "Hogyan módosíthatod a választásodat",
      "body": "Használd a láblécben a Sütibeállításokat, vagy töröld az oldaladatokat a böngésződben. Az opcionális kategóriák elutasítása soha nem blokkolja a Steam-bejelentkezést."
    }
  }
};
