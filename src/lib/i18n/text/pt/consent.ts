import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A A.C.E é um sítio independente de competições de Counter-Strike 2. Não é afiliada, autorizada nem apoiada pela Valve Corporation. Steam e Counter-Strike são marcas dos respetivos titulares. O código de competição é texto próprio da A.C.E para esse jogo.",
  acceptance: {
    label: "Aceito expressamente os Termos de Serviço, o EULA do Anti-Cheat e a Política de Privacidade.",
    readBefore: "Leia os",
    termsLink: "Termos",
    afterTerms: ", as",
    rulesLink: "Regras / EULA",
    afterRules: " e a",
    privacyLink: "Privacidade",
    after: ".",
  },
  categories: {
    legend: "Categorias de cookies",
    essential: "Cookies essenciais",
    required: "Obrigatórios / Bloqueados",
    analytics: "Rastreadores de análise",
    marketing: "Rastreadores de marketing",
    optional: "Opcionais",
  },
  banner: {
    kicker: "AVISO DO SÍTIO A.C.E.",
    copy: {
      before:
        "Aceitar guarda as escolhas de cookies deste navegador. Não é uma assinatura eletrónica, não recolhe telemetria do dispositivo, não inicia um cliente anti-cheat e não abre uma fila competitiva. Leia os",
      termsLink: "Termos de Serviço",
      afterTerms: ", as",
      rulesLink: "Regras",
      afterRules: " e a",
      cookiePolicyLink: "Política de Cookies",
      after: "antes de continuar.",
    },
    acceptLabel: "Aceitar as escolhas de cookies. Isto não abre uma fila nem inicia um cliente anti-cheat.",
    accept: "ACEITAR ESCOLHAS DE COOKIES >",
    rejectLabel: "Rejeitar cookies opcionais de análise e de marketing",
    reject: "REJEITAR OPCIONAIS",
  },
  settings: {
    openLabel: "Abrir as definições de cookies",
    open: "Definições de cookies",
    title: "Definições de cookies",
    body: "Os cookies de sessão essenciais são necessários para o Steam OpenID. As opções opcionais de análise e de marketing são apenas guardadas aqui. Atualmente, nenhum script de publicidade ou de análise é executado neste sítio.",
    cookiePolicyLink: "Política de Cookies",
    saveLabel: "Guardar preferências de cookies",
    save: "Guardar",
    closeLabel: "Fechar as definições de cookies",
    close: "Fechar",
  },
  subscriptionDisclosure:
    "Em breve: o pagamento ainda não existe, por isso nenhuma subscrição pode começar, nada é cobrado e nada é renovado. Quando existir faturação, será um plano mensal que pode cancelar nas definições do painel; um mês já pago não é reembolsado.",
  planned: {
    fallbackLabel: "Ação planeada",
    badge: "Planeado — não disponível",
  },
};
