import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Cette page est une traduction fournie pour plus de commodité. En cas de divergence entre la traduction et le texte anglais, le texte anglais prévaut.",
  terms: {
    meta: {
      title: "Conditions d’utilisation",
      description:
        "Conditions d’utilisation du site A.C.E., site de compétition Counter-Strike 2. Le mode classé, les paiements et l’anti-triche ne sont pas actifs.",
    },
    kicker: "ACE-LEGAL / CONDITIONS D’UTILISATION",
    title: "Conditions d’utilisation",
    lede: "Les présentes Conditions régissent l’utilisation du site public A.C.E. et des API de compte associées. La durée des matchs, le pool de cartes, le verrouillage des effectifs et les réclamations sont détaillés dans le Règlement compétitif disponible à /rules, qui fait partie intégrante des présentes.",
    sections: {
      operator: {
        title: "1. Exploitant et indépendance",
        paragraphs: [
          "Le service est exploité par A.C.E. Competitions Ltd. (identifiant provisoire au registre des sociétés : en attente). En utilisant le site, vous acceptez les présentes Conditions, la Politique de confidentialité, la Politique de cookies et le Règlement compétitif.",
        ],
      },
      eligibility: {
        title: "2. Conditions d’accès et comptes",
        paragraphs: [
          "Vous devez avoir l’âge requis pour utiliser Steam dans votre pays. Les comptes sont créés uniquement via le Steam OpenID officiel. Vous ne pouvez pas partager un compte pour contourner une restriction. A.C.E. ne demande jamais de mot de passe Steam.",
        ],
      },
      notActive: {
        title: "3. Ce que ce site n’est pas",
        paragraphs: [
          "Le matchmaking classé, les serveurs de jeu CS2 en direct, un anti-triche par IA fonctionnel, la facturation et les prix ne sont pas actifs. Les horloges de lobby, les échelles de butin et les panneaux d’intégrité sont des aperçus de mise en page, sauf indication contraire sur la page concernée.",
        ],
      },
      subscriptions: {
        title: "4. Abonnements proposés",
        paragraphs: [
          "Plus ($4/mois) et Premium ($7/mois) sont des prix d’affichage. Il n’y a aucun paiement sur ce site. Les boutons des forfaits ouvrent un reçu sur ce site, et non un débit, et n’envoient pas d’e-mail. Lorsque la facturation existera, la règle de résiliation figurant sur /pricing s’appliquera : abonnement mensuel reconductible, résiliation dans les paramètres du tableau de bord, mois entamés non remboursables.",
        ],
      },
      antiCheat: {
        title: "5. Client anti-triche (non livré)",
        paragraphs: [
          "Aucun client anti-triche n’est téléchargeable sur ce site. Le code de compétition disponible à /rules ne collecte pas d’identifiant matériel et ne bannit aucun appareil. Le partage de compte destiné à contourner une restriction est interdit.",
        ],
      },
      liability: {
        title: "6. Limitation de responsabilité",
        paragraphs: [
          "Dans la mesure permise par la loi, A.C.E. n’est pas responsable d’un rang perdu, de cosmétiques perdus qui n’ont jamais été de vrais objets, ni des pannes de services tiers Steam / CS2. Les droits impératifs des consommateurs de votre pays ne sont pas exclus lorsqu’il ne peut y être renoncé.",
        ],
      },
      copyright: {
        title: "7. Droit d’auteur sur les contenus originaux du site",
        paragraphs: [
          "Les textes, la mise en page, les emblèmes et les graphismes originaux créés pour ce site appartiennent à A.C.E. Competitions Ltd. Vous ne pouvez pas copier, republier ou extraire automatiquement ces contenus originaux pour un autre produit sans autorisation écrite. Lorsque la loi le permet, A.C.E. peut faire valoir ce droit, y compris par une action en justice. Le présent avis n’engage aucune procédure, ne fixe aucuns dommages-intérêts et ne garantit aucune issue judiciaire.",
          "Counter-Strike 2, Steam et les noms de cartes Dust II, Mirage, Inferno, Nuke, Ancient, Anubis et Train appartiennent à Valve. A.C.E. ne les revendique pas. Ouvrir ce site n’annule aucun droit légal et ne vaut pas signature d’un contrat.",
        ],
      },
      contact: {
        title: "8. Contact",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Identifiant provisoire au registre des sociétés : en attente.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité d’A.C.E. : données strictement nécessaires, Steam OpenID uniquement, aucun mot de passe Steam, aucune vente de données comportementales.",
    },
    kicker: "ACE-PRIVACY / RGPD / STRICTE NÉCESSITÉ",
    title: "Politique de confidentialité",
    lede: "La présente Politique de confidentialité explique ce qu’A.C.E. Competitions Ltd. conserve lorsque vous utilisez ce site. Les traductions sont fournies pour plus de commodité ; la version anglaise est le texte de référence. Elle ne prétend pas que chaque future fonctionnalité du produit existe déjà.",
    strictNecessity: {
      title: "Principe de stricte nécessité",
      intro:
        "Nous collectons le minimum de données de compte nécessaires pour identifier un joueur compétitif et empêcher les fraudes manifestes sur notre propre service. Nous n’accumulons pas de journaux inutiles, nous n’extrayons pas l’inventaire Steam privé et nous ne vendons pas de données comportementales de tiers.",
      storedIntro: "Données actuellement conservées après une connexion Steam OpenID réussie :",
      stored: [
        {
          label: "SteamID 64 bits vérifié",
          body: "renvoyé par l’assertion OpenID officielle de Steam, vérifié sur le serveur avant la création ou la mise à jour d’un compte A.C.E.",
        },
        {
          label: "Nom d’affichage Steam public",
          body: "lorsqu’une clé Steam Web API est configurée. Il s’agit d’un pseudonyme, pas d’une boîte e-mail.",
        },
        {
          label: "Données du compte A.C.E.",
          body: "telles que le niveau de rang, les points de cote, les victoires/défaites, l’appartenance à une équipe et les empreintes (hachages) des jetons de session.",
        },
      ],
      notCollected: {
        before: "Les adresses e-mail et les profils matériels chiffrés",
        strong: "ne sont pas collectés sur ce site aujourd’hui",
        after:
          ". Les cartes de scan facial et HWID du lobby ne sont qu’une mise en page. Si un futur client anti-triche ou canal d’assistance nécessite une adresse e-mail ou une empreinte matérielle, la collecte restera limitée à la prévention de la fraude, sera d’abord annoncée ici et ne sera pas vendue comme donnée publicitaire.",
      },
    },
    neverCollect: {
      title: "Ce que nous ne collectons jamais",
      items: [
        "Les mots de passe Steam. La connexion passe uniquement par Steam OpenID / le flux officiel de Steam.",
        "Les numéros de carte bancaire. Le paiement n’est pas implémenté.",
        "La télémétrie au niveau du noyau. Aucun client anti-triche n’est livré avec ce site.",
      ],
    },
    steamBoundary: {
      title: "Contenus tiers intégrés et périmètre de Steam OpenID",
      callback: {
        before: "La connexion Steam quitte A.C.E., s’authentifie sur Steam, puis revient vers",
        after:
          ". Le serveur vérifie l’assertion OpenID (y compris l’identité revendiquée et les paramètres signés par Steam) avant d’ouvrir une session. La politique de confidentialité de Steam régit les données détenues par Steam. A.C.E. ne conserve que le SteamID vérifié et les champs de profil publics nécessaires au fonctionnement du compte.",
      },
      footerLinks:
        "Les icônes de réseaux externes en pied de page sont des liens d’annuaire vers des sites publics. Ce ne sont pas des comptes officiels A.C.E. et elles n’intègrent aucun widget de suivi.",
    },
    rights: {
      title: "Droits de type RGPD",
      before:
        "Si vous vous trouvez dans une région qui reconnaît des droits sur les données personnelles, vous pouvez demander l’accès, la rectification ou la suppression des données de votre compte A.C.E. en écrivant à",
      after:
        ". Les blocages matériels de l’anti-triche classé ne sont pas actifs ; la suppression d’un compte du site ne constitue pas un recours VAC pour CS2.",
    },
    cookies: {
      title: "Cookies",
      before: "Consultez la",
      link: "Politique de cookies",
      after:
        "et le panneau de consentement. Les cookies de session essentiels sont nécessaires après la connexion. Les catégories facultatives restent inutilisées tant qu’aucun traceur n’est réellement ajouté.",
    },
    controller: {
      title: "Responsable du traitement",
      body: "A.C.E. Competitions Ltd. Identifiant provisoire au registre des sociétés : en attente. Contact : support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Politique de cookies",
      description:
        "Audit de confidentialité des cookies et de la télémétrie d’A.C.E. Uniquement des cookies de session essentiels, sauf si vous activez les catégories facultatives réservées.",
    },
    kicker: "ACE-PRIVACY / COOKIES / AUDIT DE TÉLÉMÉTRIE",
    title: "Politique de cookies",
    lede: "Cette page constitue l’audit de confidentialité de la télémétrie pour ace-platform.gg. Elle décrit les cookies réellement utilisés par ce site, les catégories réservées pour plus tard et ce qui n’est pas collecté.",
    audit: {
      title: "Audit de télémétrie à 100 % (version actuelle)",
      body: "A.C.E. n’utilise ni pixels publicitaires, ni Google Analytics, ni Meta Pixel, ni SDK d’empreinte numérique, ni aucun autre traceur comportemental tiers sur ce site public. Les « Traceurs analytiques » et « Traceurs marketing » facultatifs du panneau de consentement ne sont que des catégories. Les cocher ne charge aucun script aujourd’hui. Si un traceur est ajouté plus tard, il lira d’abord la préférence enregistrée et restera désactivé, sauf si vous l’avez accepté.",
    },
    essential: {
      title: "Cookies essentiels [Obligatoires / Verrouillés]",
      session: {
        label: "Cookie de session",
        body: "— défini uniquement après un retour Steam OpenID vérifié. HttpOnly, illisible par le JavaScript de la page, il sert à vous garder connecté à A.C.E.",
      },
      necessity:
        "Ces cookies sont strictement nécessaires au fonctionnement d’un compte authentifié. Ce ne sont pas des identifiants publicitaires.",
    },
    analytics: {
      title: "Traceurs analytiques [Facultatif]",
      before: "Réservé. Aucun fournisseur d’analyse de produit n’est configuré. Votre choix est enregistré localement dans",
      after: "afin qu’une future mesure d’utilisation interne puisse le respecter.",
    },
    marketing: {
      title: "Traceurs marketing [Facultatif]",
      body: "Réservé. A.C.E. ne vend, ne loue ni ne négocie aucun profil comportemental. Ce site n’utilise aucun gestionnaire de balises marketing.",
    },
    change: {
      title: "Comment modifier votre choix",
      body: "Utilisez les Paramètres des cookies dans le pied de page, ou effacez les données du site dans votre navigateur. Refuser les catégories facultatives ne bloque jamais la connexion Steam.",
    },
  },
};
