import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Clasificación",
    "description": "Tabla competitiva de A.C.E. Las cuentas de Steam guardadas aparecen primero. Los puestos vacíos siguen siendo filas de muestra."
  },
  "hero": {
    "kicker": "CLASIFICACIÓN",
    "title": "Tabla competitiva",
    "note": "Hasta que los jugadores vinculen Steam y obtengan una puntuación, el tablero muestra plazas de muestra. Su país y su arma destacada son ilustrativos. Los renders de armas son arte original del estudio A.C.E, no skins de Valve. Las bajas todavía no se registran, así que el arma destacada no es una estadística de máximo eliminador."
  },
  "facts": {
    "seats": "Puestos",
    "storedAccounts": "Cuentas guardadas",
    "killsStored": "Bajas guardadas",
    "none": "Ninguna"
  },
  "empty": "Ningún puesto de muestra coincide con ese nombre.",
  "podiumLabel": "Los tres primeros puestos",
  "boardLabel": "Tabla competitiva",
  "table": {
    "rank": "Puesto",
    "player": "Jugador",
    "country": "País",
    "tier": "Rango",
    "leadWeapon": "Arma principal",
    "rating": "Puntuación"
  },
  "tags": {
    "stored": "Cuenta guardada",
    "showcase": "Muestra"
  },
  "weapon": {
    "sampleRender": "Arma insignia",
    "notStored": "No guardado",
    "noKillSaved": "No se guarda ninguna baja",
    "alt": "{name}"
  },
  "countries": {
    "il": "Israel",
    "us": "Estados Unidos",
    "de": "Alemania",
    "ua": "Ucrania",
    "se": "Suecia",
    "fr": "Francia",
    "pl": "Polonia",
    "br": "Brasil",
    "jp": "Japón",
    "kr": "Corea del Sur"
  },
  "search": {
    "openLabel": "Abrir la búsqueda de jugadores",
    "srLabel": "Buscar en la clasificación",
    "fieldLabel": "Buscar jugadores",
    "placeholder": "Nombre visible"
  }
};
