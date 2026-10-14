import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E.",
      description:
        "Tarjetas de armas de ejemplo de premio. No son objetos de Valve, no son una recompensa financiada y el pago no cobra ninguna tarjeta.",
    },
    heroHonesty:
      "Las tarjetas de armas son ejemplos de premios. No son objetos de Valve, no están en ningún inventario y el pago en esta página no cobra ninguna tarjeta.",
    prizeBanner: "🏆 EJEMPLO DE PREMIO DE TORNEO — MUESTRA DE RECOMPENSAS PREMIUM",
    notice:
      "Estas muestras no tienen valor en efectivo. No se entrega ningún skin, no se financia ningún premio y el botón de inspeccionar no inicia ninguna compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ BOTINES ENCUBIERTOS DE LA CLASIFICACIÓN",
        price: "Solo ejemplo · sin valor en efectivo",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ NIVEL DE MEJORA CLASIFICADO",
        price: "Solo ejemplo · sin valor en efectivo",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ BOTÍN ESPECIAL ENCUBIERTO",
        price: "Solo ejemplo · sin valor en efectivo",
      },
      crown: {
        name: "Marco de avatar Corona A.C.E.",
        tag: "Adorno de perfil",
        price: "Incluido en el plan Premium o {rp} RP",
      },
      shimmer: {
        name: "Destello láser dorado de perfil",
        tag: "Personalización del chat",
        price: "Incluido en el plan Premium o {rp} RP",
      },
      pass: {
        name: "Pase dorado de torneo Premium",
        tag: "Token de acceso a la liga",
        price: "{rp} RP / Inscripción prioritaria",
      },
    },
  },
  support: {
    meta: {
      title: "Soporte",
      description:
        "Diseño del centro de ayuda de A.C.E. El anticheat, las colas clasificatorias y los servicios de facturación no están en vivo. Los avisos de ticket no crean casos.",
    },
  },
  contact: {
    meta: {
      title: "Contacto",
      description:
        "Terminal de contacto corporativo de A.C.E. Los envíos del formulario son maquetas de prueba y no envían correo ni guardan telemetría.",
    },
  },
  contactEmail: {
    label: "ESTABLECER CORREO DE TELEMETRÍA VERIFICADO",
    hintSignedIn:
      "Solo se guarda en la cuenta con sesión iniciada. No se envía ningún mensaje de confirmación, así que la dirección no está verificada.",
    hintSignedOut: "Inicia sesión con Steam para guardar un correo de contacto en tu cuenta.",
    saving: "GUARDANDO",
    save: "GUARDAR CORREO DE CONTACTO",
    results: {
      signInFirst: "Inicia sesión con Steam antes de guardar un correo de contacto.",
      invalid: "Introduce una sola dirección de correo, o deja el campo vacío para borrarla.",
      failed: "Esa dirección ya está guardada en otra cuenta, o la base de datos no está disponible.",
      saved: "Dirección de contacto guardada en esta cuenta. No se envió ningún mensaje de confirmación, así que no está verificada.",
      cleared: "Dirección de contacto borrada.",
    },
  },
};
