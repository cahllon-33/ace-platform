import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funciones",
      "description": "Arquitectura especificada del núcleo anticheat de A.C.E., vinculación biométrica por escaneo facial y diez escalones de calibración de habilidad. Estos sistemas no están en vivo en este sitio web."
    },
    "header": {
      "kicker": "ACE-FEATURES / NÚCLEO / ESCANEO FACIAL / CALIBRACIÓN",
      "title": "Especificación de funciones de la plataforma",
      "lede": "Esta página es el mapa técnico de nivel de producción de tres sistemas previstos de A.C.E.: el núcleo anticheat autónomo, la vinculación biométrica por escaneo facial y la escalera de calibración de habilidad de diez escalones. Nada en esta página es un núcleo en vivo, un producto de cámara en vivo ni una cola clasificatoria en vivo. Steam OpenID, los equipos 5v5, los diseños de cuadro y el cálculo de puntuación de tipo Elo existen en este repositorio. Los servidores dedicados de CS2, los pagos, los premios y un cliente de integridad descargable no existen."
    },
    "kernel": {
      "title": "Arquitectura del núcleo anticheat",
      "paragraphs": [
        "La Envoltura segura autónoma especificada es un cliente de integridad vinculado al hardware que se ejecutaría junto a Counter-Strike 2 en el equipo del jugador y comunicaría un estado firmado ALLOW o DENY a los servidores gestionados por A.C.E. El diseño del núcleo se cierra ante fallo: si el cliente falta, está detenido, desactualizado, suplantado o no verificado, se deniega la admisión clasificatoria. El navegador nunca decide la elegibilidad. BUSCAR PARTIDA clasificatorio en este sitio web ya se cierra ante fallo por ese motivo.",
        "Las capas previstas del núcleo incluyen un enlace en modo usuario que vincula el SteamID verificado de 64 bits a la cuenta A.C.E., una superficie de certificación del identificador de hardware (HWID), una lista de vigilancia de firmas de familias de trampas conocidas y una ruta de elegibilidad de servidor a servidor protegida por un secreto compartido. Una validación de firma de trampas, una comprobación de integridad rechazada o un identificador de dispositivo suplantado se especifican para producir un cambio inmediato del estado de la cuenta a BANNED o PERM_BANNED y, cuando exista un producto de facturación, la pérdida total del tiempo de suscripción prepagado sin ninguna obligación de reembolso. Con este sitio web no se entrega ningún cliente de ese tipo. Las tarjetas de descarga Próximamente son solo diseño."
      ],
      "stats": [
        {
          "label": "ESTADO DEL KERNEL",
          "value": "En desarrollo"
        },
        {
          "label": "COLA CLASIFICATORIA",
          "value": "Cerrada ante fallo"
        },
        {
          "label": "ALMACÉN DE HWID",
          "value": "No se recoge en este sitio"
        }
      ]
    },
    "faceScan": {
      "title": "Vinculación biométrica por escaneo facial",
      "paragraphs": [
        "El escaneo facial es una capa futura de vinculación de identidad especificada, no un producto de cámara en este sitio web. El diseño previsto, solo tras un consentimiento explícito y una revisión legal aparte, vincularía una plantilla facial con prueba de vida a la misma cuenta A.C.E. que ya tiene un SteamID verificado por el servidor. El objetivo es impedir que se comparta una cuenta para eludir una restricción previa. A.C.E. no recoge hoy imágenes faciales, representaciones faciales, direcciones de correo ni huellas de hardware. La postura de privacidad en vigor sigue siendo la de estricta necesidad: solo el SteamID verificado de 64 bits y el nombre visible público de Steam.",
        "Si Face Scan llega a implementarse, no sustituirá a Steam OpenID, no se usará para vender publicidad conductual y no desbloqueará por sí solo las colas clasificatorias. El acceso a las clasificatorias seguirá requiriendo una vía de Anti-Cheat verificada. Hasta que exista esa revisión, cualquier panel de Face Scan en el lobby es una vista previa de diseño."
      ]
    },
    "calibration": {
      "title": "Diez escalones de calibración de habilidad",
      "intro": "Competitive Calibration usa las reglas publicadas de Rating Points de A.C.E (versión {version}: paso {kFactor}, escala {scale}). Las cuentas nuevas empiezan en el rango 3 (Vanguard), suscripción FREE, estado ACTIVE y {startingRating} de puntuación competitiva. Las etiquetas de cristal del lobby son alias visuales. Los cosméticos de pago nunca compran puntuación, rivales más fáciles, servidores de 128 ticks ni prioridad en la cola. No hay ningún producto de 128 ticks activo a la venta.",
      "table": {
        "level": "Nivel",
        "engineName": "Nombre del motor",
        "crystalAlias": "Alias de cristal",
        "minRating": "Puntuación mín."
      },
      "divisions": {
        "before": "Las divisiones I, II y III del lobby son fichas de muestra. Solo cambian métricas de diseño. El emparejamiento en vivo por división no existe. Consulta ",
        "middle": " para el torno 3D y ",
        "after": " para el texto de competición vinculante."
      }
    }
  },
  "loot": {
    "kicker": "Cosméticos · próximamente",
    "title": "ARQUITECTURA DE BOTÍN A.C.E. — BOTINES DE ARMAS",
    "lede": "Acabados originales de A.C.E. que llegarán con la tienda. Los cosméticos nunca afectan a la competición.",
    "checkout": "Pago · próximamente"
  },
  "identityPreview": {
    "badge": "Vista previa: no confirmado",
    "cards": {
      "faceScan": {
        "title": "Escaneo facial en vivo verificado",
        "copy": "La prueba de vida es una verificación de proveedor prevista. Hoy no se recopilan datos biométricos."
      },
      "hardwareId": {
        "title": "ID de hardware vinculado",
        "copy": "La vinculación de dispositivos es una señal de integridad prevista. Hoy no se recopilan identificadores de hardware."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Vista previa",
    "kicker": "Próximamente",
    "returnHome": "Volver al inicio",
    "pages": {
      "support": {
        "title": "Soporte",
        "body": "Nuestro soporte público abrirá con la beta competitiva."
      },
      "anti-cheat": {
        "title": "Resumen del anticheat",
        "body": "A.C.E. no tiene un producto de anticheat funcional. El emparejamiento clasificatorio sigue cerrado hasta que exista una integración real."
      },
      "download-client": {
        "title": "Descargar cliente",
        "body": "No hay ningún cliente de escritorio de A.C.E. para descargar. Un cliente nativo no forma parte de la etapa web actual."
      },
      "mobile-app": {
        "title": "Aplicación móvil",
        "body": "La app móvil de A.C.E. está en la hoja de ruta."
      },
      "news": {
        "title": "Noticias",
        "body": "La sala de prensa de A.C.E. abrirá pronto."
      },
      "about": {
        "title": "Quiénes somos",
        "body": "A.C.E. es un sitio independiente de competición de Counter-Strike 2 en vista previa pública. No está afiliado a Valve."
      },
      "advertising": {
        "title": "Publicidad",
        "body": "Las consultas de colaboración y publicidad se abrirán pronto."
      },
      "developers": {
        "title": "Desarrolladores",
        "body": "Todavía no hay un programa público para desarrolladores. Las API de elegibilidad de servidores de este repositorio son adaptadores internos, no un SDK para socios."
      },
      "press": {
        "title": "Prensa",
        "body": "El kit de prensa llegará pronto."
      },
      "jobs": {
        "title": "Empleo",
        "body": "Las vacantes se publicarán aquí."
      },
      "terms": {
        "title": "Términos del servicio",
        "body": "Los Términos del servicio vigentes están publicados en /terms. El reglamento del torneo está en /rules."
      },
      "privacy": {
        "title": "Política de privacidad",
        "body": "La Política de privacidad está publicada en /privacy. Steam OpenID es la única forma de iniciar sesión; nunca se recogen contraseñas de Steam."
      },
      "eula": {
        "title": "EULA de anticheat",
        "body": "No hay un EULA de anticheat porque el anticheat no está activo. El modo clasificatorio sigue cerrado ante fallo."
      }
    }
  }
};
