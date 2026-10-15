import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "Fonctions",
      description:
        "Architecture spécifiée du noyau anti-triche A.C.E., liaison biométrique par scan facial et dix paliers de calibrage du niveau. Ces systèmes ne sont pas en ligne sur ce site.",
    },
    header: {
      kicker: "ACE-FONCTIONS / NOYAU / SCAN FACIAL / CALIBRAGE",
      title: "Spécification des fonctions de la plateforme",
      lede: "Cette page est la carte technique de niveau production de trois systèmes A.C.E. prévus : le noyau anti-triche autonome, la liaison biométrique par scan facial et l'échelle de calibrage du niveau en dix paliers. Rien sur cette page n'est un noyau en direct, un produit caméra en direct ni une file classée en direct. Steam OpenID, les équipes 5v5, les maquettes de tableaux et les calculs de cote de type Elo existent dans ce dépôt. Les serveurs CS2 dédiés, les paiements, les prix et un client d'intégrité téléchargeable n'existent pas.",
    },
    kernel: {
      title: "Architecture du noyau anti-triche",
      paragraphs: [
        "L'Enveloppe sécurisée autonome spécifiée est un client d'intégrité lié au matériel qui fonctionnerait à côté de Counter-Strike 2 sur la machine du joueur et transmettrait un état signé ALLOW ou DENY aux serveurs gérés par A.C.E. La conception du noyau est fermée en cas d'échec : si le client manque, est arrêté, obsolète, usurpé ou non vérifié, l'admission classée est refusée. Le navigateur ne fait jamais foi pour l'éligibilité. TROUVER UN MATCH classé sur ce site se ferme déjà en cas d'échec pour cette raison.",
        "Les couches de noyau prévues comprennent une poignée de main en mode utilisateur qui lie le SteamID 64 bits vérifié au compte A.C.E., une surface d'attestation de l'identifiant matériel (HWID), une liste de surveillance des signatures des familles de triche connues et une route d'éligibilité de serveur à serveur protégée par un secret partagé. Une validation de signature de triche, un contrôle d'intégrité refusé ou un identifiant d'appareil usurpé est spécifié pour entraîner un changement immédiat du statut du compte en BANNED ou PERM_BANNED et, lorsqu'un produit facturé existera, la perte totale du temps d'abonnement prépayé sans aucune obligation de remboursement. Aucun client de ce type n'est livré avec ce site. Les cartes de téléchargement Bientôt ne sont qu'une mise en page.",
      ],
      stats: [
        { label: "ÉTAT DU NOYAU", value: "En développement" },
        { label: "FILE CLASSÉE", value: "Fermée en cas d'échec" },
        { label: "STOCKAGE HWID", value: "Non collecté sur ce site" },
      ],
    },
    faceScan: {
      title: "Liaison biométrique par scan facial",
      paragraphs: [
        "Le scan facial est une couche future de liaison d'identité spécifiée, pas un produit caméra sur ce site. La conception prévue ne lierait, qu'après un consentement explicite et un examen juridique distinct, un modèle facial vérifié par détection du vivant au même compte A.C.E. qui détient déjà un SteamID vérifié par le serveur. L'objectif est de résister au partage de compte utilisé pour contourner une restriction antérieure. A.C.E. ne collecte aujourd'hui ni images faciales, ni empreintes faciales numériques, ni adresses e-mail, ni empreintes matérielles. La politique de confidentialité en vigueur reste la stricte nécessité : uniquement le SteamID 64 bits vérifié et le nom d'affichage Steam public.",
        "Si Face Scan est un jour mis en œuvre, il ne remplacera pas Steam OpenID, ne servira pas à vendre de la publicité comportementale et n'ouvrira pas à lui seul les files classées. L'accès aux parties classées exigera toujours un parcours Anti-Cheat vérifié. Tant que cet examen n'existe pas, tout panneau Face Scan du lobby est un aperçu de design.",
      ],
    },
    calibration: {
      title: "Dix paliers de calibrage du niveau",
      intro:
        "Competitive Calibration utilise les règles publiées des Rating Points A.C.E (version {version} : pas {kFactor}, échelle {scale}). Les nouveaux comptes commencent au rang 3 (Vanguard), abonnement FREE, statut ACTIVE et {startingRating} de classement compétitif. Les noms de cristaux du lobby sont des alias visuels. Les cosmétiques payants n'achètent jamais de classement, d'adversaires plus faciles, de serveurs 128 ticks ni de priorité de file. Aucun produit 128 ticks actif n'est en vente.",
      table: {
        level: "Niveau",
        engineName: "Nom du moteur",
        crystalAlias: "Alias cristal",
        minRating: "Cote min.",
      },
      divisions: {
        before:
          "Les divisions I, II et III du lobby sont des pastilles de vitrine. Elles ne modifient que les mesures de mise en page. Le matchmaking par division en direct n'existe pas. Voir ",
        middle: " pour le plateau tournant 3D et ",
        after: " pour le texte de compétition contraignant.",
      },
    },
  },
  loot: {
    kicker: "Cosmétiques · bientôt",
    title: "ARCHITECTURE DE BUTIN A.C.E. — DROPS D'ARMES",
    lede: "Finitions originales A.C.E., disponibles avec la boutique. Les cosmétiques n'affectent jamais la compétition.",
    mockDrop: "Bientôt",
    multiplierLabel: "Exigences du multiplicateur de taux de victoire",
    ladderLabel: "Drops hebdomadaires de l'échelle",
    multiplierValue: "Modèle {multiplier}×",
    ladderValue: "Emplacement hebdomadaire · bientôt",
    checkout: "Paiement · bientôt",
  },
  communityRail: {
    kicker: "Fil d'actualité · bientôt",
    newsTitle: "Dernières actualités de l'échelle",
    newsItems: [
      "Le tableau reste vide — 0 équipe sur 100.",
      "La recherche classée reste fermée tant que l'anti-triche n'existe pas.",
    ],
    prizesTitle: "Prix de skins quotidiens",
    prizesBody:
      "Les récompenses et le paiement ouvriront avec la Saison 1.",
  },
  identityPreview: {
    badge: "Aperçu — non confirmé",
    cards: {
      faceScan: {
        title: "Scan facial en direct vérifié",
        copy: "La détection du vivant est une vérification prévue auprès d'un prestataire. Aucune donnée biométrique n'est collectée aujourd'hui.",
      },
      hardwareId: {
        title: "Identifiant matériel lié",
        copy: "L'association d'appareil est un signal d'intégrité prévu. Aucun identifiant matériel n'est collecté aujourd'hui.",
      },
    },
  },
  preview: {
    fallbackTitle: "Aperçu",
    kicker: "Bientôt",
    returnHome: "Retour à l'accueil",
    pages: {
      support: {
        title: "Assistance",
        body: "Notre support public ouvrira avec la bêta compétitive.",
      },
      "anti-cheat": {
        title: "Présentation de l'anti-triche",
        body: "A.C.E. n'a pas de produit anti-triche fonctionnel. Le matchmaking classé reste fermé tant qu'une vraie intégration n'existe pas.",
      },
      "download-client": {
        title: "Télécharger le client",
        body: "Il n'y a pas de client de bureau A.C.E. à télécharger. Un client natif ne fait pas partie de l'étape web actuelle.",
      },
      "mobile-app": {
        title: "Application mobile",
        body: "L'application mobile A.C.E. est prévue dans la feuille de route.",
      },
      news: {
        title: "Actualités",
        body: "La salle de presse A.C.E. ouvrira bientôt.",
      },
      about: {
        title: "À propos",
        body: "A.C.E. est un site de compétition Counter-Strike 2 indépendant, en aperçu public. Il n'est pas affilié à Valve.",
      },
      advertising: {
        title: "Publicité",
        body: "Les demandes de partenariat et de publicité ouvriront bientôt.",
      },
      developers: {
        title: "Développeurs",
        body: "Il n'y a pas encore de programme public pour les développeurs. Les API d'éligibilité serveur de ce dépôt sont des adaptateurs internes, pas un SDK partenaire.",
      },
      press: {
        title: "Presse",
        body: "Le kit presse arrive bientôt.",
      },
      jobs: {
        title: "Emplois",
        body: "Les postes ouverts seront publiés ici.",
      },
      terms: {
        title: "Conditions d'utilisation",
        body: "Les Conditions d'utilisation applicables sont publiées à /terms. Le règlement du tournoi se trouve à /rules.",
      },
      privacy: {
        title: "Politique de confidentialité",
        body: "La Politique de confidentialité est publiée à /privacy. Steam OpenID est le seul moyen de connexion ; les mots de passe Steam ne sont jamais collectés.",
      },
      eula: {
        title: "CLUF anti-triche",
        body: "Il n'y a pas de CLUF anti-triche, car l'anti-triche n'est pas actif. Le classé reste fermé en cas d'échec.",
      },
    },
  },
};
