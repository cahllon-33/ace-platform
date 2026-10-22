import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E",
      description:
        "Tarjetas de recompensas del campeonato. La tienda y las recompensas abrirán pronto.",
    },
    heroHonesty:
      "Un primer vistazo a las próximas recompensas del campeonato. La tienda abrirá pronto; hoy no se cobra nada.",
    prizeBanner: "🏆 RECOMPENSAS DEL CAMPEONATO · PRÓXIMAMENTE",
    notice:
      "Estas vitrinas son vistas previas sin valor monetario. No se entrega ni se cobra nada, y el botón de inspeccionar no inicia ninguna compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ BOTINES ENCUBIERTOS DE LA CLASIFICACIÓN",
        price: "Próximamente",
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
        price: "Próximamente",
      },
      shimmer: {
        name: "Destello láser dorado de perfil",
        tag: "Personalización del chat",
        price: "Próximamente",
      },
      pass: {
        name: "Pase dorado de torneo",
        tag: "Token de acceso a la liga",
        price: "Próximamente",
      },
    },
  },
  support: {
    meta: {
      title: "Soporte",
      description:
        "Centro de ayuda de A.C.E. El soporte de anti-cheat, clasificatorias y facturación abrirá con la beta competitiva.",
    },
  },
  contact: {
    meta: {
      title: "Contacto",
      description:
        "Contacta con A.C.E. El formulario en línea abrirá pronto.",
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
