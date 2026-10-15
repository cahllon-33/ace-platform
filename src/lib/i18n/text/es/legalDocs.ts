import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Esta página es una traducción ofrecida por comodidad. Si la traducción y el texto en inglés difieren, prevalece el texto en inglés.",
  terms: {
    meta: {
      title: "Términos de servicio",
      description:
        "Términos de servicio del sitio web de A.C.E. para este sitio de competición de Counter-Strike 2. Las clasificatorias, los pagos y el antitrampas no están en funcionamiento.",
    },
    kicker: "ACE-LEGAL / TÉRMINOS DE SERVICIO",
    title: "Términos de servicio",
    lede: "Estos Términos rigen el uso del sitio web público de A.C.E. y de las API de cuenta conectadas. La duración de las partidas, el grupo de mapas, el bloqueo de plantilla y las reclamaciones se detallan en el Reglamento competitivo en /rules, que se incorpora a estos Términos.",
    sections: {
      operator: {
        title: "1. Operador e independencia",
        paragraphs: [
          "El servicio lo gestiona A.C.E. Competitions Ltd. (el número de registro mercantil se publicará próximamente). Al usar el sitio aceptas estos Términos, la Política de privacidad, la Política de cookies y el Reglamento de competición.",
        ],
      },
      eligibility: {
        title: "2. Requisitos y cuentas",
        paragraphs: [
          "Debes tener la edad suficiente para usar Steam en tu país. Las cuentas se crean únicamente mediante el Steam OpenID oficial. No puedes compartir una cuenta para eludir una restricción. A.C.E. nunca pide una contraseña de Steam.",
        ],
      },
      notActive: {
        title: "3. Lo que este sitio web no es",
        paragraphs: [
          "El emparejamiento clasificatorio, los servidores de CS2 en funcionamiento, el AI Anti-Cheat operativo, la facturación y los premios no están activos. Los relojes del lobby y los paneles de integridad son vistas previas, salvo que la página indique lo contrario.",
        ],
      },
      subscriptions: {
        title: "4. Suscripciones propuestas",
        paragraphs: [
          "Plus ($4/mes) y Premium ($7/mes) son precios mostrados. No hay pago en este sitio web. Los botones de plan abren un recibo en este sitio web, no un cargo, y no envían ningún correo. Cuando exista facturación, se aplicará la regla de cancelación de /pricing: suscripción mensual renovable, cancelación desde la configuración del panel y sin reembolso de meses parciales.",
        ],
      },
      antiCheat: {
        title: "5. Cliente antitrampas (no publicado)",
        paragraphs: [
          "No hay ningún cliente antitrampas descargable en este sitio web. El código de competición en /rules no recoge ningún identificador de hardware y no prohíbe ningún dispositivo. Está prohibido compartir una cuenta para eludir una restricción.",
        ],
      },
      liability: {
        title: "6. Limitación de responsabilidad",
        paragraphs: [
          "En la medida permitida por la ley, A.C.E. no responde por un rango perdido, por cosméticos perdidos que nunca fueron objetos reales, ni por caídas de Steam o CS2 ajenas a A.C.E. Los derechos de consumo obligatorios de tu país no quedan excluidos cuando no se puede renunciar a ellos.",
        ],
      },
      copyright: {
        title: "7. Derechos de autor sobre el material original del sitio",
        paragraphs: [
          "El texto original, el diseño de las páginas, los emblemas y los gráficos creados para este sitio web pertenecen a A.C.E. Competitions Ltd. No puedes copiar, volver a publicar ni extraer ese material original para otro producto sin permiso por escrito. Cuando la ley lo permita, A.C.E. puede hacer valer ese derecho, incluso mediante una reclamación. Este aviso no inicia ningún procedimiento, no fija ninguna indemnización y no garantiza ningún resultado judicial.",
          "Counter-Strike 2, Steam y los nombres de mapas Dust II, Mirage, Inferno, Nuke, Ancient, Anubis y Train pertenecen a Valve. A.C.E. no los reclama como propios. Abrir este sitio web no anula ningún derecho legal ni firma ningún contrato.",
        ],
      },
      contact: {
        title: "8. Contacto",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — El número de registro mercantil se publicará próximamente.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Política de privacidad",
      description:
        "Política de privacidad de A.C.E.: datos de estricta necesidad, solo Steam OpenID, sin contraseñas de Steam y sin venta de datos de comportamiento.",
    },
    kicker: "ACE-PRIVACY / RGPD / ESTRICTA NECESIDAD",
    title: "Política de privacidad",
    lede: "Esta Política de privacidad explica qué almacena A.C.E. Competitions Ltd. cuando usas este sitio web. Las traducciones se ofrecen por comodidad; la versión en inglés es el texto de referencia. Esto no afirma que todas las futuras superficies del producto existan ya.",
    strictNecessity: {
      title: "Filosofía de estricta necesidad",
      intro:
        "Recogemos los datos de cuenta mínimos necesarios para identificar a un jugador competitivo y detener fraudes evidentes en nuestro propio servicio. No acumulamos registros innecesarios, no extraemos el inventario privado de Steam y no vendemos datos de comportamiento a terceros.",
      storedIntro: "Datos almacenados actualmente tras un inicio de sesión correcto con Steam OpenID:",
      stored: [
        {
          label: "SteamID de 64 bits verificado",
          body: "devuelto por la aserción OpenID oficial de Steam y comprobado en el servidor antes de crear o actualizar una cuenta de A.C.E.",
        },
        {
          label: "Nombre público visible en Steam",
          body: "cuando hay configurada una clave de Steam Web API. Es una cadena de alias, no una bandeja de correo electrónico.",
        },
        {
          label: "Registros de la cuenta de A.C.E.",
          body: "como el nivel de rango, los Puntos de Rating, las victorias y derrotas, la pertenencia a equipos y los hashes de los tokens de sesión.",
        },
      ],
      notCollected: {
        before: "Las direcciones de correo electrónico y los perfiles de hardware cifrados",
        strong: "no se recogen hoy en este sitio web",
        after:
          ". Las tarjetas de Face Scan y HWID del lobby son vistas previas de diseño. Si un futuro cliente Anti-Cheat o canal de soporte requiere un correo o una huella de hardware, la recogida se limitará a la prevención del fraude, se informará aquí primero y no se venderá como datos publicitarios.",
      },
    },
    neverCollect: {
      title: "Lo que nunca recogemos",
      items: [
        "Contraseñas de Steam. El inicio de sesión se hace únicamente con Steam OpenID / el flujo oficial de Steam.",
        "Números de tarjetas de pago. El pago no está implementado.",
        "Telemetría a nivel de kernel. Este sitio web no incluye ningún cliente antitrampas.",
      ],
    },
    steamBoundary: {
      title: "Límite de contenido de terceros y de Steam OpenID",
      callback: {
        before: "El inicio de sesión con Steam sale de A.C.E., se autentica en Steam y vuelve a",
        after:
          ". El servidor verifica la aserción OpenID (incluida la identidad declarada y los parámetros firmados por Steam) antes de crear una sesión. La política de privacidad de Steam rige los datos que conserva Steam. A.C.E. solo guarda el SteamID verificado y los campos públicos de alias necesarios para operar la cuenta.",
      },
      footerLinks:
        "Los iconos de redes externas del pie de página son enlaces de directorio a sitios web públicos. No son cuentas oficiales de A.C.E. y no incrustan widgets de seguimiento.",
    },
    rights: {
      title: "Derechos de estilo RGPD",
      before:
        "Si te encuentras en una región con derechos sobre los datos personales, puedes solicitar el acceso, la rectificación o la supresión de los datos de tu cuenta de A.C.E. escribiendo a",
      after:
        ". Los bloqueos de hardware del antitrampas clasificatorio no están en funcionamiento; eliminar una cuenta del sitio web no es una apelación de VAC de CS2.",
    },
    cookies: {
      title: "Cookies",
      before: "Consulta la",
      link: "Política de cookies",
      after:
        "y el panel de consentimiento. Las cookies de sesión esenciales son necesarias tras iniciar sesión. Las categorías opcionales no se usan hasta que se añada realmente un rastreador.",
    },
    controller: {
      title: "Responsable del tratamiento",
      body: "A.C.E. Competitions Ltd. El número de registro mercantil se publicará próximamente. Contacto: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Política de cookies",
      description:
        "Auditoría de privacidad de cookies y telemetría de A.C.E. Solo cookies de sesión esenciales, salvo que aceptes categorías opcionales reservadas.",
    },
    kicker: "ACE-PRIVACY / COOKIES / AUDITORÍA DE TELEMETRÍA",
    title: "Política de cookies",
    lede: "Esta página es la auditoría de privacidad de telemetría de ace-platform.gg. Describe las cookies que este sitio web usa realmente, las categorías reservadas para más adelante y lo que no se recoge.",
    audit: {
      title: "Auditoría de telemetría al 100 % (versión actual)",
      body: "A.C.E. no ejecuta píxeles publicitarios, Google Analytics, Meta Pixel, SDK de huella digital ni otros rastreadores de comportamiento de terceros en este sitio web público. Los “Rastreadores de analítica” y “Rastreadores de marketing” opcionales del panel de consentimiento son solo categorías. Marcarlos no carga hoy ningún script. Si más adelante se añade un rastreador, leerá primero la preferencia guardada y permanecerá desactivado salvo que lo hayas aceptado.",
    },
    essential: {
      title: "Cookies esenciales [Obligatorias / Bloqueadas]",
      session: {
        label: "Cookie de sesión",
        body: "— se establece solo después de una respuesta verificada de Steam OpenID. Es HttpOnly, el JavaScript de la página no puede leerla y se usa para mantener tu sesión iniciada en A.C.E.",
      },
      necessity:
        "Estas cookies son estrictamente necesarias para operar una cuenta autenticada. No son identificadores publicitarios.",
    },
    analytics: {
      title: "Rastreadores de analítica [Opcionales]",
      before: "Reservado. No hay configurado ningún proveedor de analítica de producto. Tu elección se guarda localmente en",
      after: "para que una futura métrica de uso propia pueda respetarla.",
    },
    marketing: {
      title: "Rastreadores de marketing [Opcionales]",
      body: "Reservado. A.C.E. no vende, alquila ni intermedia perfiles de comportamiento. No hay ningún gestor de etiquetas de marketing en este sitio.",
    },
    change: {
      title: "Cómo cambiar tu elección",
      body: "Usa Configuración de cookies en el pie de página o borra los datos del sitio en tu navegador. Rechazar las categorías opcionales nunca bloquea el inicio de sesión con Steam.",
    },
  },
};
