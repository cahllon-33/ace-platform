import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A A.C.E. é um site independente de competições de Counter-Strike 2. Não é afiliada, autorizada nem endossada pela Valve Corporation. Steam e Counter-Strike são marcas de seus respectivos titulares. O regulamento de competição é texto próprio da A.C.E. para esse jogo.",
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
    required: "Obrigatório / Bloqueado",
    analytics: "Rastreadores de análise",
    marketing: "Rastreadores de marketing",
    optional: "Opcional",
  },
  banner: {
    kicker: "AVISO DO SITE A.C.E.",
    copy: {
      before:
        "Aceitar salva as escolhas de cookies deste navegador. Isso não é uma assinatura eletrônica, não coleta telemetria do dispositivo, não inicia um cliente anti-cheat e não abre uma fila competitiva. Leia os",
      termsLink: "Termos de Serviço",
      afterTerms: ", as",
      rulesLink: "Regras",
      afterRules: " e a",
      cookiePolicyLink: "Política de cookies",
      after: "antes de continuar.",
    },
    acceptLabel: "Aceitar as escolhas de cookies. Isso não abre uma fila nem inicia um cliente anti-cheat.",
    accept: "ACEITAR ESCOLHAS DE COOKIES >",
    rejectLabel: "Recusar cookies opcionais de análise e marketing",
    reject: "RECUSAR OPCIONAIS",
  },
  settings: {
    openLabel: "Abrir configurações de cookies",
    open: "Configurações de cookies",
    title: "Configurações de cookies",
    body: "Os cookies essenciais de sessão são necessários para o Steam OpenID. As opções de análise e marketing são apenas salvas aqui. Nenhum script de publicidade ou de análise é executado neste site hoje.",
    cookiePolicyLink: "Política de cookies",
    saveLabel: "Salvar preferências de cookies",
    save: "Salvar",
    closeLabel: "Fechar configurações de cookies",
    close: "Fechar",
  },
  subscriptionDisclosure:
    "Em breve: o pagamento ainda não existe, então nenhuma assinatura pode começar, nada é cobrado e nada é renovado. Quando houver cobrança, será um plano mensal que você cancela nas configurações do painel; um mês já pago não é reembolsado.",
  planned: {
    fallbackLabel: "Ação planejada",
    badge: "Planejado — não disponível",
  },
};
