import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E est un site de compétition Counter-Strike 2 indépendant. Il n'est ni affilié à Valve Corporation, ni autorisé, ni soutenu par elle. Steam et Counter-Strike sont des marques de leurs titulaires. Le code de compétition est le texte propre d'A.C.E pour ce jeu.",
  acceptance: {
    label: "J'accepte explicitement les Conditions d'utilisation, le CLUF anti-triche et la Politique de confidentialité.",
    readBefore: "Lire :",
    termsLink: "Conditions",
    afterTerms: ",",
    rulesLink: "Règles / CLUF",
    afterRules: " et",
    privacyLink: "Confidentialité",
    after: ".",
  },
  categories: {
    legend: "Catégories de cookies",
    essential: "Cookies essentiels",
    required: "Obligatoires / verrouillés",
    analytics: "Traceurs d'analyse",
    marketing: "Traceurs marketing",
    optional: "Facultatifs",
  },
  banner: {
    kicker: "AVIS DU SITE A.C.E.",
    copy: {
      before:
        "Accepter enregistre les choix de cookies de ce navigateur. Ce n'est pas une signature électronique : cela ne collecte aucune télémétrie de l'appareil, ne lance aucun client anti-triche et n'ouvre aucune file compétitive. Lisez les",
      termsLink: "Conditions d'utilisation",
      afterTerms: ", les",
      rulesLink: "Règles",
      afterRules: " et la",
      cookiePolicyLink: "Politique de cookies",
      after: "avant de continuer.",
    },
    acceptLabel: "Accepter les choix de cookies. Cela n'ouvre aucune file et ne lance aucun client anti-triche.",
    accept: "ACCEPTER LES CHOIX DE COOKIES >",
    rejectLabel: "Refuser les cookies facultatifs d'analyse et de marketing",
    reject: "REFUSER LES FACULTATIFS",
  },
  settings: {
    openLabel: "Ouvrir les paramètres des cookies",
    open: "Paramètres des cookies",
    title: "Paramètres des cookies",
    body: "Les cookies de session essentiels sont nécessaires à Steam OpenID. Les options facultatives d'analyse et de marketing sont uniquement enregistrées ici. Aucun script publicitaire ou d'analyse ne s'exécute sur ce site aujourd'hui.",
    cookiePolicyLink: "Politique de cookies",
    saveLabel: "Enregistrer les préférences de cookies",
    save: "Enregistrer",
    closeLabel: "Fermer les paramètres des cookies",
    close: "Fermer",
  },
  subscriptionDisclosure:
    "Bientôt disponible : le paiement n'existe pas encore, donc aucun abonnement ne peut commencer, rien n'est facturé et rien ne se renouvelle. Quand la facturation existera, ce sera un forfait mensuel résiliable dans les paramètres du tableau de bord ; un mois déjà payé n'est pas remboursé.",
  planned: {
    fallbackLabel: "Action prévue",
    badge: "Prévu — non disponible",
  },
};
