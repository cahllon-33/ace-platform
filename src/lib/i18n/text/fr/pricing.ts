import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Tarifs",
    description:
      "Abonnement A.C.E. : Gratuit {free}, Plus {plus}/mois, Premium {premium}/mois. Prix d'affichage verrouillés en entiers.",
  },
  period: {
    monthly: "/mois",
  },
  hero: {
    badge: "Abonnement",
    title: "Niveaux d'accès",
    lede: "Gratuit {free}. Plus {plus}/mois. Premium {premium}/mois. Ces montants sont verrouillés en entiers. Les forfaits payants n'achètent jamais de cote ni d'adversaires plus faciles.",
  },
  tiers: {
    free: {
      name: "GRATUIT",
      note: "Graphite",
      title: "Accès libre",
      points: [
        "Connexion via Steam OpenID. A.C.E. ne demande jamais un mot de passe Steam.",
        "Une cote enregistrée démarre à 1 000. Aucun résultat de match ne l'a modifiée.",
        "Toutes les pages publiques : jouer, tournois, classement, équipes et règles.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Lettre de remerciement et assistance",
      points: [
        "Tout ce qu'inclut Gratuit.",
        "Bientôt disponible : la lettre de remerciement (ce qui est inclus, ce qui ne l'est pas, et support@ace-platform.gg) ne s'ouvre qu'une fois le paiement en place. Aujourd'hui, le bouton est désactivé.",
        "N'achète ni classement ni adversaires plus faciles. Les badges dorés du profil proviennent des données de match enregistrées pour chaque joueur. Le sceau élite et les badges spéciaux n'apparaissent que si le palier enregistré est déjà Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Lettre de remerciement et escouade de cinq joueurs",
      points: [
        "Tout ce qu'inclut Gratuit.",
        "Bientôt disponible : la lettre de remerciement (ce qui est inclus, ce qui ne l'est pas, et support@ace-platform.gg) ne s'ouvre qu'une fois le paiement en place. Aujourd'hui, le bouton est désactivé.",
        "Bientôt disponible : après le paiement, la lettre mène à Squads, où un capitaine connecté avec Steam peut enregistrer un clan de cinq joueurs.",
        "Aucun prix, aucune arme, aucune file en direct ni aucun serveur de jeu. Un clan enregistré n'est pas une place sur le tableau de 100 équipes.",
      ],
    },
  },
  card: {
    elite: "ÉLITE",
    stayFree: "Rester sur Gratuit",
    freeNote: "Disponible maintenant",
    choose: "Choisir {plan}",
    chooseAria: "Choisir {plan} à {price} par mois",
  },
  billing: {
    kicker: "CHRONOLOGIE DE FACTURATION",
    title: "Comment la facturation fonctionnera une fois en place",
    body: "Plus coûte exactement {plus}/mois. Premium coûte exactement {premium}/mois.",
    display: {
      label: "01 · AFFICHAGE",
      body: "Gratuit {free}. Plus {plus}/mois. Premium {premium}/mois. Les paliers payants n'achètent jamais de cote ni d'adversaires plus faciles.",
    },
    rolling: {
      label: "02 · CYCLE RENOUVELABLE",
      body: "Lorsque la facturation existera, les prélèvements se renouvelleront selon un cycle mensuel. Un mois partiellement utilisé n'est pas remboursable. La résiliation arrête le cycle suivant et n'efface pas la période prépayée en cours.",
    },
    today: {
      label: "03 · AUJOURD'HUI",
    },
  },
  compare: {
    kicker: "Ce qu'A.C.E. peut promettre aujourd'hui",
    title: "Comparaison des abonnements",
    note: "Chaque ligne reflète le site tel qu'il est aujourd'hui. Le paiement arrive bientôt, et un forfait payant n'ouvre jamais de file ni n'achète d'avantage.",
    caption: "Gratuit, Plus et Premium comparés selon ce que le site fait aujourd'hui",
    includedToday: "Inclus aujourd'hui",
    columns: {
      free: "Gratuit",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Site public",
        detail: "Accueil, jouer, tournois, classement, équipes, règles et conditions.",
      },
      steamSignIn: {
        feature: "Connexion Steam",
        detail: "Steam OpenID officiel. A.C.E. ne demande jamais un mot de passe Steam.",
      },
      startingRating: {
        feature: "Cote de départ",
        detail: "Le nombre enregistré sur un nouveau compte avant tout match enregistré.",
      },
      recordedMatches: {
        feature: "Matchs enregistrés",
        detail: "Victoires et défaites inscrites à partir d'un match A.C.E. terminé.",
      },
      rankedQueue: {
        feature: "File classée",
        detail: "TROUVER UN MATCH reste fermé tant qu'une vraie file n'existe pas.",
      },
      cs2Servers: {
        feature: "Serveurs CS2",
        detail: "Ce site n'envoie ni adresse de serveur ni lien de connexion.",
      },
      antiCheatClient: {
        feature: "Client anti-triche",
        detail: "Rien n'est téléchargé depuis ce site.",
      },
      charge: {
        feature: "Facturation",
        detail: "Choisir Plus ou Premium ne débite aucune carte.",
      },
      ratingForSale: {
        feature: "Cote à vendre",
        detail: "Une étiquette payante n'achète jamais de cote ni d'adversaires plus faciles.",
      },
      prizeOrWeapon: {
        feature: "Prix ou arme",
        detail: "Aucun skin, aucun couteau ni aucune cagnotte n'est livré.",
      },
      goldEliteSeal: {
        feature: "Sceau élite et badges spéciaux",
        detail:
          "Premium uniquement, lu depuis le palier enregistré sur le serveur. Cosmétique. Le paiement ne définit pas ce palier.",
      },
    },
    cells: {
      open: "Ouvert",
      yes: "Oui",
      noneYet: "Aucun pour l'instant",
      closed: "Fermé",
      notConnected: "Bientôt",
      notShipped: "Non livré",
      noCharge: "Aucun débit",
      notForSale: "Pas à vendre",
      none: "Aucun",
      no: "Non",
      storedTierOnly: "Palier enregistré uniquement",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Reçu Plus",
      metaDescription:
        "La lettre A.C.E. Plus affichée sur ce site. Le paiement n'est pas en ligne : rien n'est facturé et aucun e-mail n'est envoyé.",
      planName: "A.C.E. Plus",
      nextLabel: "Continuer sur A.C.E.",
      nextBody:
        "Les pages publiques restent ouvertes. Cette sélection n'ouvre aucune file et ne modifie pas le palier enregistré.",
    },
    premium: {
      metaTitle: "Reçu Premium",
      metaDescription:
        "La lettre A.C.E. Premium affichée sur ce site. Le paiement n'est pas en ligne : rien n'est facturé et aucun e-mail n'est envoyé.",
      planName: "A.C.E. Premium",
      nextLabel: "Continuer vers Escouades",
      nextBody:
        "Continuez vers Escouades. La page vous demandera si vous formez une équipe de cinq. La place 1 est le compte Steam connecté. Les places 2 à 5 sont les autres joueurs. Enregistrer un clan ne facture toujours pas ce prix.",
    },
  },
  letter: {
    kicker: "{plan} · {price} par mois",
    title: "Merci pour votre sélection",
    flag: "Cette lettre est affichée sur le site. Aucun e-mail n'a été envoyé. Aucune carte n'a été débitée. Le paiement n'est pas en ligne, et le palier d'abonnement enregistré n'a pas été modifié.",
    greeting: "Cher joueur, chère joueuse,",
    intro:
      "Merci d'avoir sélectionné {plan}. Cette page tient lieu de reçu. Elle indique le prix affiché, ce que cette sélection inclut aujourd'hui, ce qu'elle n'inclut pas, et l'adresse d'assistance publiée sur ce site.",
    selected: {
      title: "Ce qui a été sélectionné",
      items: [
        "Nom du forfait : {plan}.",
        "Prix affiché : {price} par mois. Ce montant est une étiquette, pas un débit.",
        "Paiement : aucun. Choisir ce forfait ne débite aucune carte.",
        "E-mail : aucun. A.C.E. n'envoie pas cette lettre dans une boîte de réception.",
        "Palier enregistré : inchangé. Les badges spéciaux et le sceau élite n'apparaissent que si le compte a déjà Premium enregistré.",
        "Cote : pas à vendre. Un nouveau compte démarre toujours à 1 000.",
      ],
    },
    today: {
      title: "Ce que vous pouvez utiliser aujourd'hui",
      items: [
        "Le site public : accueil, jouer, tournois, classement, équipes, règles et conditions.",
        "La connexion Steam via le Steam OpenID officiel. A.C.E. ne demande jamais un mot de passe Steam.",
        "Les mêmes pages publiques que Gratuit. Ce prix n'ouvre pas de file séparée.",
      ],
    },
    excluded: {
      title: "Ce que cette sélection n'inclut pas",
      items: [
        "Une file classée en direct. TROUVER UN MATCH reste fermé.",
        "Un serveur Counter-Strike 2, une adresse de serveur ou un lien de connexion.",
        "Un téléchargement anti-triche. A.C.E Shield est en développement.",
        "Un prix, un skin, un couteau ou une cagnotte.",
        "Une place sur le tableau de 100 équipes. Ce tableau affiche toujours 0 inscrite tant qu'aucune saison n'est ouverte.",
        "Des adversaires plus faciles, une cote achetée ou un site public différent de Gratuit.",
      ],
    },
    trouble: {
      title: "Si quelque chose ne fonctionne pas",
      items: [
        "Vous attendiez un débit ou un palier payant. Rien n'a été appliqué. Le compte reste tel qu'il était.",
        "Vous attendiez cette lettre dans une boîte de réception. Elle n'existe que sur cette page.",
        "Steam ne s'est pas connecté. Utilisez Connecter le profil et cochez d'abord la case des conditions. Ne saisissez jamais un mot de passe Steam sur A.C.E.",
        "Vous avez besoin d'aide. Utilisez l'adresse d'assistance ci-dessous, ou ouvrez les pages d'aide de ce site.",
      ],
    },
    support: {
      title: "Assistance",
      addressBefore: "L'adresse d'assistance indiquée sur ce site est ",
      addressAfter: ".",
      helpBefore: "Aide sur le site : ",
      supportLink: "Assistance",
      helpAnd: " et ",
      contactLink: "Contact",
      rulesBefore: ". Les règles se trouvent dans ",
      rulesLink: "Règles",
      rulesAnd: " et ",
      termsLink: "Conditions",
      helpAfter:
        ". Une invite dans Assistance n'ouvre pas de ticket, et le texte saisi dans Contact n'est pas transmis.",
    },
    next: {
      title: "Étape suivante",
    },
  },
  telemetry: {
    kicker: "TÉLÉMÉTRIE PLUS / PREMIUM",
    copy: "TÉLÉMÉTRIE DU TABLEAU DE BORD VERROUILLÉE — Passez à l'abonnement A.C.E. Plus ou Premium pour débloquer les courbes de statistiques dynamiques en temps réel et les indices de spécialité d'arme.",
    cta: "Ouvrir les grilles tarifaires",
  },
};
