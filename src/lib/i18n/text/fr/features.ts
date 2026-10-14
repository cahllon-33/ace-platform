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
        { label: "ÉTAT DU NOYAU", value: "Non déployé" },
        { label: "FILE CLASSÉE", value: "Fermée en cas d'échec" },
        { label: "STOCKAGE HWID", value: "Non collecté sur ce site" },
      ],
    },
    faceScan: {
      title: "Liaison biométrique par scan facial",
      paragraphs: [
        "Le scan facial est une couche future de liaison d'identité spécifiée, pas un produit caméra sur ce site. La conception prévue ne lierait, qu'après un consentement explicite et un examen juridique distinct, un modèle facial vérifié par détection du vivant au même compte A.C.E. qui détient déjà un SteamID vérifié par le serveur. L'objectif est de résister au partage de compte utilisé pour contourner une restriction antérieure. A.C.E. ne collecte aujourd'hui ni images faciales, ni empreintes faciales numériques, ni adresses e-mail, ni empreintes matérielles. La politique de confidentialité en vigueur reste la stricte nécessité : uniquement le SteamID 64 bits vérifié et le nom d'affichage Steam public.",
        "Si le scan facial est un jour mis en œuvre, il ne remplacera pas Steam OpenID, ne servira pas à vendre de la publicité comportementale et ne débloquera pas à lui seul les files classées. L'admission classée exige toujours une voie anti-triche vérifiée. Tant que cet examen n'existe pas, tout panneau de scan facial dans le lobby est un emplacement de mise en page.",
      ],
    },
    calibration: {
      title: "Dix paliers de calibrage du niveau",
      intro:
        "Le calibrage compétitif utilise une formule documentée de type Elo (version {version}, facteur K {kFactor}, échelle {scale}). Les nouveaux comptes démarrent au rang 1 (Recruit), abonnement GRATUIT, statut ACTIF et cote compétitive de {startingRating}. Les étiquettes cristal du lobby sont des alias visuels. Les cosmétiques payants n'achètent jamais de cote, d'adversaires plus faciles, de serveurs 128-tick ni de priorité de file. Aucun produit 128-tick en direct n'est en vente.",
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
    kicker: "Cosmétiques d'essai · paiement simulé",
    title: "ARCHITECTURE DE BUTIN A.C.E. — DROPS D'ARMES",
    lede: "Noms de finitions originaux A.C.E. sur des types d'armes CS2. Ce ne sont pas des objets Valve, ni des skins échangeables, ni de vrais prix. Les paiements sont simulés.",
    mockDrop: "Drop fictif",
    multiplierLabel: "Exigences du multiplicateur de taux de victoire",
    ladderLabel: "Drops hebdomadaires de l'échelle",
    multiplierValue: "Modèle {multiplier}×",
    ladderValue: "Créneau hebdomadaire · fictif",
    checkout: "Paiement simulé",
  },
  communityRail: {
    kicker: "Fil de mise en page · pas en direct",
    newsTitle: "Dernières actualités de l'échelle",
    newsItems: [
      "Le tableau reste vide — 0 équipe sur 100.",
      "La recherche classée reste fermée tant que l'anti-triche n'existe pas.",
    ],
    prizesTitle: "Prix de skins quotidiens",
    prizesBody:
      "Aucun prix n'est attribué. Les cartes cosmétiques de ce site sont des maquettes d'essai. Les paiements sont simulés.",
  },
  identityPreview: {
    badge: "Aperçu — non confirmé",
    cards: {
      faceScan: {
        title: "Scan facial en direct vérifié",
        copy: "La détection du vivant de l'identité est un contrôle prévu auprès d'un prestataire. Cette carte est un aperçu de mise en page. Aucun scan n'a été effectué et aucune donnée biométrique n'est stockée.",
      },
      hardwareId: {
        title: "Identifiant matériel lié",
        copy: "La liaison de l'appareil est un signal d'intégrité prévu. Cette carte est un aperçu de mise en page. Aucune empreinte matérielle n'a été collectée.",
      },
    },
  },
  preview: {
    fallbackTitle: "Aperçu",
    kicker: "Destination de mise en page · pas un produit en direct",
    returnHome: "Retour à l'accueil",
    pages: {
      support: {
        title: "Assistance",
        body: "Aucun guichet d'assistance public n'est encore tenu. Ce lien est un emplacement de destination du pied de page.",
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
        body: "Il n'y a pas d'application mobile A.C.E. Ceci n'est qu'un lien de mise en page du pied de page.",
      },
      news: {
        title: "Actualités",
        body: "Il n'y a pas de salle de presse en direct. Ceci n'est qu'un lien de mise en page du pied de page.",
      },
      about: {
        title: "À propos",
        body: "A.C.E. est un site de compétition Counter-Strike 2 indépendant, en aperçu public. Il n'est pas affilié à Valve.",
      },
      advertising: {
        title: "Publicité",
        body: "Aucun espace publicitaire n'est à vendre. Ceci n'est qu'un lien de mise en page du pied de page.",
      },
      developers: {
        title: "Développeurs",
        body: "Il n'y a pas encore de programme public pour les développeurs. Les API d'éligibilité serveur de ce dépôt sont des adaptateurs internes, pas un SDK partenaire.",
      },
      press: {
        title: "Presse",
        body: "Il n'y a ni dossier de presse ni salle de presse. Ceci n'est qu'un lien de mise en page du pied de page.",
      },
      jobs: {
        title: "Emplois",
        body: "Aucune offre d'emploi n'est publiée. Ceci n'est qu'un lien de mise en page du pied de page.",
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
