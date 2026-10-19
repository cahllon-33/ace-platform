import type { Ui } from "./en";

export const UI_ES: Ui = {
  "nav": {
    "home": "Inicio",
    "play": "Jugar",
    "ranks": "Rangos",
    "tournaments": "Torneos",
    "leaderboard": "Clasificación",
    "teams": "Equipos",
    "getPremium": "Hazte Premium",
    "maps": "Mapas",
    "prizes": "Premios",
    "shop": "Tienda",
    "rules": "Reglas",
    "antiCheat": "Antitrampas",
    "features": "Funciones",
    "pricing": "Precios",
    "compete": "Competir",
    "explore": "Explorar"
  },
  "footer": {
    "platform": "Plataforma",
    "competition": "Competición",
    "company": "Empresa",
    "legal": "Legal",
    "tagline": "Clasificaciones competitivas de Counter-Strike 2, construidas en torno al juego limpio.",
    "follow": "Sigue a A.C.E.",
    "rights": "Todos los derechos reservados.",
    "legalLine": "© 2026 A.C.E. Competitions Ltd. Plataforma independiente, sin afiliación con Valve. Counter-Strike y CS2 son marcas de Valve Corporation."
  },
  "soon": {
    "label": "Próximamente"
  },
  "cta": {
    "kicker": "Temporada 1",
    "title": "¿Listo para competir?",
    "body": "Conecta Steam, calíbrate y escala.",
    "play": "Jugar A.C.E",
    "ranks": "Explorar los rangos"
  },
  "status": {
    "title": "Estado de la plataforma",
    "steam": "Inicio de sesión con Steam OpenID",
    "shield": "A.C.E Shield · fase de despliegue",
    "servers": "Servidores competitivos · beta competitiva",
    "billing": "Integración de pagos",
    "available": "Disponible",
    "inDevelopment": "En desarrollo",
    "comingSoon": "Próximamente",
    "designed": "Diseñado"
  },
  "ranksTabs": {
    "label": "Rangos",
    "tiers": "Niveles y divisiones",
    "codex": "Códice de calibración"
  },
  "maps": {
    "kicker": "Grupo de mapas competitivo",
    "title": "Mapas y retransmisión",
    "lede": "Siete mapas forman el grupo competitivo de A.C.E. Los equipos vetan y eligen entre ellos durante el veto descrito en el reglamento. Las retransmisiones de torneos aparecen en la pantalla de abajo.",
    "rulebook": "Leer las reglas del veto",
    "screen": "Pantalla de retransmisión",
    "offAir": "Fuera del aire",
    "noBroadcast": "No hay ninguna retransmisión ahora mismo.",
    "nextLabel": "Próxima retransmisión",
    "notScheduled": "se anunciará aquí pronto",
    "embeddedFrom": "En directo desde {provider}.",
    "pool": "Grupo de mapas activo",
    "poolMeta": "{count} mapas · veto BO1 / BO3",
    "mapLabel": "Mapa {n}",
    "settings": {
      "dust": "Pueblo desértico",
      "mirage": "Barrio del mercado",
      "inferno": "Pueblo antiguo",
      "nuke": "Planta industrial",
      "ancient": "Ruinas en la selva",
      "anubis": "Templo de los canales",
      "train": "Patio ferroviario"
    },
    "notes": {
      "dust": "Líneas de visión largas en A y puertas de mid estrechas.",
      "mirage": "El control del mid decide la mayoría de rondas.",
      "inferno": "Pasos estrechos y ejecuciones cargadas de utilidad.",
      "nuke": "Zonas superpuestas y rotaciones verticales rápidas.",
      "ancient": "La presión de mid a B marca la mitad.",
      "anubis": "Mid acuático y ataques abiertos a B.",
      "train": "Cobertura entre vagones y largos pasillos en A."
    }
  },
  "prizes": {
    "kicker": "Premios del campeonato",
    "title": "Premios",
    "lede": "La selección de recompensas que preparamos para los campeones de la Temporada 1. Las bolsas de premios se confirman en la página de cada evento al anunciarse, según la sección 18 del reglamento.",
    "rulebook": "Reglas de premios",
    "cardKicker": "Recompensa legendaria",
    "slots": {
      "first": "1.er puesto · por jugador",
      "second": "2.º puesto · por jugador",
      "mvp": "Premio MVP"
    },
    "facts": {
      "pool": "Bolsa de premios",
      "items": "Objetos de recompensa",
      "delivery": "Entrega",
      "season": "Temporada"
    },
    "factValues": {
      "season": "Temporada 1"
    }
  },
  "rules": {
    "kicker": "Reglamento de competición A.C.E.",
    "title": "Reglas de competición",
    "version": "Versión {version} · vigente desde {date}",
    "intro": "Las reglas con las que se juega toda competición A.C.E. Las cláusulas marcadas con «Se aplica al desplegarse» entran en vigor cuando se lanza el sistema del que dependen.",
    "pending": "Se aplica al desplegarse",
    "contents": "Índice",
    "penalties": {
      "offence": "Infracción",
      "first": "Primera infracción",
      "repeat": "Reincidencia",
      "rule": "Regla"
    },
    "englishNote": "",
    "sections": [
      "Alcance y definiciones",
      "Elegibilidad",
      "Cuentas e identidad",
      "Equipos y plantillas",
      "Capitanes",
      "Grupo de mapas y veto",
      "Desarrollo del partido",
      "Configuración del partido",
      "Problemas de servidor y técnicos",
      "Pausas",
      "Desconexiones",
      "Abandonos e incomparecencias",
      "Conducta",
      "Trampas e integridad competitiva",
      "Disputas y apelaciones",
      "Sanciones",
      "Retransmisión",
      "Premios",
      "Rating Points",
      "Modificaciones"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Antitrampas",
    "lede": "A.C.E Shield es el sistema de integridad que se está construyendo para cada partido de A.C.E.: controles de cliente, servidor, partido y comportamiento trabajando juntos, con la privacidad primero.",
    "statusLabel": "Fase de despliegue",
    "pillarsTitle": "Pilares de la arquitectura",
    "pillars": {
      "client": {
        "title": "Integridad del cliente",
        "body": "Un cliente ligero verifica el entorno de juego durante el partido e informa de señales de manipulación."
      },
      "server": {
        "title": "Integridad del servidor",
        "body": "Los servidores usan configuraciones bloqueadas, plugins firmados y registros a prueba de manipulación."
      },
      "match": {
        "title": "Integridad del partido",
        "body": "Cada ronda se graba con demos y registros de eventos para poder revisar cualquier resultado."
      },
      "behaviour": {
        "title": "Análisis de comportamiento",
        "body": "Modelos estadísticos señalan patrones anómalos de puntería, reacción e información para revisión humana."
      },
      "identity": {
        "title": "Identidad",
        "body": "Cuentas Steam OpenID, un jugador por cuenta, con controles contra la evasión de sanciones."
      }
    },
    "roadmapTitle": "Hoja de ruta",
    "phases": {
      "p1": {
        "title": "Fase 1 · Arquitectura",
        "body": "Modelo de amenazas, flujos de datos y diseño de privacidad."
      },
      "p2": {
        "title": "Fase 2 · Integridad de servidor y partido",
        "body": "Configuraciones bloqueadas, captura de demos y registros a prueba de manipulación."
      },
      "p3": {
        "title": "Fase 3 · Análisis de comportamiento",
        "body": "Herramientas de revisión y primeros modelos estadísticos."
      },
      "p4": {
        "title": "Fase 4 · Integridad del cliente",
        "body": "Beta del cliente Shield con auditoría de seguridad pública."
      },
      "p5": {
        "title": "Fase 5 · Beta competitiva",
        "body": "Shield obligatorio en partidas clasificatorias y torneos."
      }
    },
    "privacyTitle": "Principios de privacidad",
    "privacy": [
      "Solo recogemos lo necesario para proteger un partido y decimos exactamente qué es.",
      "No se recogen identificadores de hardware hasta que exista una implementación segura, documentada y revisada de forma independiente.",
      "Los datos de partido se guardan durante un periodo fijo y después se eliminan.",
      "Toda sanción puede apelarse y la revisa una persona."
    ],
    "faqTitle": "Preguntas",
    "faq": [
      {
        "q": "¿Está activo A.C.E Shield hoy?",
        "a": "Todavía no. Está en desarrollo; cada fase de arriba muestra su estado actual."
      },
      {
        "q": "¿Necesitará acceso al kernel?",
        "a": "El diseño empieza con controles en modo usuario y análisis en el servidor. Cualquier acceso más profundo se documentaría y revisaría públicamente antes."
      },
      {
        "q": "¿Premium afecta al antitrampas?",
        "a": "No. Las reglas de integridad son iguales para todos. Los planes de pago nunca compran ventaja competitiva."
      },
      {
        "q": "¿Cómo denuncio a un tramposo?",
        "a": "Desde la página de contacto. Las denuncias se revisan según la sección 14 del reglamento."
      }
    ]
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Construye tu identidad competitiva. Calibra tu habilidad. Sube en los rangos de A.C.E.",
      "connectSteam": "Conectar Steam",
      "openDashboard": "Abrir panel",
      "exploreRanks": "Explorar rangos"
    },
    "status": {
      "title": "Estado de la plataforma",
      "steam": "Inicio de sesión con Steam",
      "shield": "A.C.E. Shield",
      "servers": "Servidores competitivos",
      "tournaments": "Torneos",
      "billing": "Facturación",
      "available": "Disponible",
      "inDevelopment": "En desarrollo",
      "comingSoon": "Próximamente",
      "preparing": "En preparación",
      "billingOff": "No activo · no se cobran pagos"
    },
    "card": {
      "matches": "Partidas",
      "wl": "V/D",
      "kd": "K/D",
      "noMatches": "Sin partidas registradas",
      "division": "División {division}"
    },
    "journey": {
      "title": "Tu trayectoria competitiva",
      "currentRp": "RP actuales",
      "current": "Actual",
      "next": "Siguiente",
      "toGo": "{rp} RP para la siguiente división",
      "top": "División más alta alcanzada",
      "basis": "Calculado a partir de tus RP guardados y la tabla de rangos publicada."
    },
    "board": {
      "emptyTitle": "Aún no hay partidas clasificatorias",
      "emptyBody": "Los jugadores aparecen aquí tras su primera partida clasificatoria registrada. Nada en esta tabla es inventado.",
      "previewTag": "VISTA PREVIA",
      "lobbyTitle": "Sala",
      "matchFoundTitle": "Partida encontrada",
      "previewNote": "Solo una vista previa del diseño: no hay cola ni servidor en marcha y los nombres son marcadores.",
      "accept": "Aceptar",
      "waiting": "Esperando jugadores",
      "note": "Cuentas reales con al menos una partida clasificatoria registrada, ordenadas por RP guardados. Sin filas de muestra ni inventadas."
    },
    "toast": {
      "region": "Notificaciones",
      "dismiss": "Cerrar notificación",
      "signedIn": "Sesión iniciada como {name}",
      "signedOut": "Has cerrado sesión.",
      "authFailed": "El inicio de sesión con Steam no se completó. Inténtalo de nuevo."
    },
    "sound": {
      "on": "Sonidos de interfaz: activados",
      "off": "Sonidos de interfaz: desactivados"
    },
    "chat": {
      "open": "Abrir chat de soporte",
      "close": "Cerrar chat de soporte",
      "title": "Soporte A.C.E.",
      "greeting": "¡Hola! Soy el asistente de soporte de A.C.E. Pregúntame sobre rangos, planes, reglas o tu cuenta.",
      "placeholder": "Escribe tu pregunta…",
      "send": "Enviar",
      "unavailable": "El chat de soporte aún no está disponible.",
      "disclaimer": "Las respuestas automáticas pueden equivocarse. Las sanciones y decisiones sobre cuentas las toma solo la administración.",
      "escalate": "Enviar al equipo",
      "escalated": "Guardado como ticket de soporte. La administración lo revisará.",
      "error": "Algo salió mal. Inténtalo de nuevo.",
      "rateLimited": "Demasiados mensajes. Espera un momento.",
      "thinking": "Escribiendo…",
      "tooLong": "El mensaje es demasiado largo (máx. {max} caracteres)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Plataforma competitiva",
      "h1a": "Compite.",
      "h1b": "Calibra.",
      "h1c": "Asciende.",
      "sub": "CS2 clasificatorio con inicio de sesión de Steam, una escalera de RP pública y planes que nunca compran ventaja.",
      "trust1": "Solo CS2",
      "trust2": "Inicio de sesión con Steam OpenID",
      "trust3": "$0 · $4 · $7 — sin pagar para ganar",
      "trust4": "10 rangos · empiezas con 1.200 RP",
      "stepsKicker": "Cómo funciona",
      "stepsTitle": "Tres pasos hasta tu primer rango",
      "step1t": "Conecta Steam",
      "step1b": "Inicia sesión con Steam OpenID. A.C.E. nunca ve tu contraseña de Steam.",
      "step2t": "Calibra",
      "step2b": "Empiezas en el nivel 3 con 1.200 RP. Cada partida registrada mueve tus RP según reglas publicadas.",
      "step3t": "Asciende",
      "step3b": "Una victoria da hasta +20 RP (+22 como mejor jugador); una derrota cuesta hasta −23. Tu rango siempre sigue a tus RP.",
      "ranksTitle": "Diez rangos. Una tabla pública.",
      "ranksBody": "Los colores de las insignias son fijos por nivel y tu rango siempre se calcula con tus RP guardados.",
      "ranksCta": "Ver todos los rangos",
      "plansTitle": "Planes que nunca compran victorias",
      "plansBody": "Los planes de pago son solo estéticos y de comodidad. El pago aún no está activo, así que hoy todos están en Gratis.",
      "plansCta": "Comparar planes",
      "free": "Gratis",
      "perMonth": "/mes",
      "signedInKicker": "Bienvenido de nuevo"
    },
    "profile": {
      "kicker": "JUGADOR",
      "notFound": "Jugador no encontrado",
      "notFoundBody": "Ninguna cuenta de A.C.E. usa este Steam ID, o el perfil no es público.",
      "rating": "Puntuación",
      "rank": "Rango",
      "record": "Historial",
      "memberSince": "Miembro desde {date}",
      "steamProfile": "Perfil de Steam",
      "yourProfile": "Este es tu perfil",
      "backToBoard": "Volver a la clasificación"
    },
    "board": {
      "podium": "Mejores jugadores",
      "viewProfile": "Ver perfil"
    },
    "chat": {
      "sources": "Fuentes",
      "noMatch": "No encontré esto en el contenido del sitio de A.C.E. Puedes enviar tu pregunta al equipo como ticket.",
      "s1": "¿Cuánto cuesta Premium?",
      "s2": "¿Cómo gano RP?",
      "s3": "¿Cómo denuncio a un tramposo?",
      "kbNote": "Las respuestas provienen del contenido del sitio de A.C.E."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Centro de mando",
      "welcome": "Bienvenido de nuevo, {name}",
      "quick": "Acciones rápidas",
      "qProfile": "Perfil público",
      "qBoard": "Clasificación",
      "qRanks": "Tabla de rangos",
      "qPlay": "Jugar",
      "statRp": "Puntuación",
      "statRank": "Rango",
      "statRecord": "Balance",
      "statWinRate": "Porcentaje de victorias",
      "statPlan": "Plan",
      "toNext": "{rp} RP para {next}",
      "top": "Cima de la clasificación",
      "activity": "Actividad reciente",
      "activityEmpty": "Aún no hay actividad registrada. Las partidas y los inicios de sesión aparecerán aquí cuando ocurran.",
      "evSignIn": "Sesión iniciada con Steam",
      "evRating": "Puntuación {before} → {after}",
      "noRecord": "Aún no hay partidas",
      "account": "Cuenta"
    },
    "nf": {
      "code": "Error 404",
      "title": "Esta página está fuera del mapa",
      "body": "Puede que el enlace sea antiguo o esté mal escrito. Todo A.C.E. está a un clic desde aquí.",
      "home": "Volver al inicio",
      "ranks": "Ver rangos"
    },
    "err": {
      "code": "Algo falló",
      "title": "Se produjo un error inesperado",
      "body": "No se ha cobrado nada y tu cuenta está a salvo. Inténtalo de nuevo o vuelve al inicio.",
      "retry": "Reintentar"
    }
  }
};
