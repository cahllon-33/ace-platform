import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E. es un sitio independiente de competición de Counter-Strike 2. No está afiliado, autorizado ni respaldado por Valve Corporation. Steam y Counter-Strike son marcas de sus titulares. El código de competición es texto propio de A.C.E. para ese juego.",
  acceptance: {
    label: "Acepto expresamente los Términos del servicio, el EULA de anticheat y la Política de privacidad.",
    readBefore: "Lee los",
    termsLink: "Términos",
    afterTerms: ", las",
    rulesLink: "Reglas / EULA",
    afterRules: " y la",
    privacyLink: "Política de privacidad",
    after: ".",
  },
  categories: {
    legend: "Categorías de cookies",
    essential: "Cookies esenciales",
    required: "Obligatorias / Bloqueadas",
    analytics: "Rastreadores de analítica",
    marketing: "Rastreadores de marketing",
    optional: "Opcional",
  },
  banner: {
    kicker: "AVISO DEL SITIO A.C.E.",
    copy: {
      before:
        "Aceptar guarda las preferencias de cookies de este navegador. No es una firma electrónica, no recoge telemetría del dispositivo, no inicia un cliente de anticheat y no abre una cola competitiva. Lee los",
      termsLink: "Términos del servicio",
      afterTerms: ", las",
      rulesLink: "Reglas",
      afterRules: " y la",
      cookiePolicyLink: "Política de cookies",
      after: "antes de continuar.",
    },
    acceptLabel: "Aceptar las preferencias de cookies. Esto no abre una cola ni inicia un cliente de anticheat.",
    accept: "ACEPTAR PREFERENCIAS DE COOKIES >",
    rejectLabel: "Rechazar las cookies opcionales de analítica y marketing",
    reject: "RECHAZAR OPCIONALES",
  },
  settings: {
    openLabel: "Abrir la configuración de cookies",
    open: "Configuración de cookies",
    title: "Configuración de cookies",
    body: "Las cookies de sesión esenciales son necesarias para Steam OpenID. Las marcas opcionales de analítica y marketing solo se guardan aquí. Hoy no se ejecuta ningún script de publicidad ni de analítica en este sitio web.",
    cookiePolicyLink: "Política de cookies",
    saveLabel: "Guardar preferencias de cookies",
    save: "Guardar",
    closeLabel: "Cerrar la configuración de cookies",
    close: "Cerrar",
  },
  subscriptionDisclosure:
    "Próximamente: el pago aún no existe, así que no puede empezar ninguna suscripción, no se cobra nada y nada se renueva. Cuando exista la facturación, será un plan mensual que puedes cancelar en los ajustes del panel; un mes ya pagado no se reembolsa.",
  planned: {
    fallbackLabel: "Acción planificada",
    badge: "Planificado: no disponible",
  },
};
