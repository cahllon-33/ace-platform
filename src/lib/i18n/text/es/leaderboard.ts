import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Clasificación",
    description:
      "Tabla competitiva de A.C.E. Las cuentas de Steam guardadas aparecen primero. Los puestos vacíos siguen siendo filas de muestra.",
  },
  hero: {
    kicker: "CLASIFICACIÓN",
    title: "Tabla competitiva",
    note: "Los puestos de muestra llenan esta tabla hasta que se guarda una cuenta de Steam. Una puntuación guardada los sustituye. El país y el arma principal son muestras. Los renders de armas son imágenes originales del estudio A.C.E., no skins de Valve. Este sitio no guarda bajas, así que el arma no es un arma de máximo de bajas registrada.",
  },
  facts: {
    seats: "Puestos",
    storedAccounts: "Cuentas guardadas",
    killsStored: "Bajas guardadas",
    none: "Ninguna",
  },
  empty: "Ningún puesto de muestra coincide con ese nombre.",
  podiumLabel: "Los tres primeros puestos",
  boardLabel: "Tabla competitiva",
  table: {
    rank: "Puesto",
    player: "Jugador",
    country: "País",
    tier: "Rango",
    leadWeapon: "Arma principal",
    rating: "Puntuación",
  },
  tags: {
    stored: "Cuenta guardada",
    showcase: "Muestra",
  },
  weapon: {
    sampleRender: "Render de muestra",
    notStored: "No guardado",
    noKillSaved: "No se guarda ninguna baja",
    alt: "Render de muestra de {name}",
  },
  countries: {
    il: "Israel",
    us: "Estados Unidos",
    de: "Alemania",
    ua: "Ucrania",
    se: "Suecia",
    fr: "Francia",
    pl: "Polonia",
    br: "Brasil",
    jp: "Japón",
    kr: "Corea del Sur",
  },
  search: {
    openLabel: "Abrir la búsqueda de jugadores",
    srLabel: "Buscar en la clasificación",
    fieldLabel: "Buscar jugadores",
    placeholder: "Nombre visible",
  },
  seasonPreview: {
    banner: "ESCALERA DE LA TEMPORADA 1 — DISEÑO",
    noteLive:
      "Los nombres vinculados a Steam son cuentas guardadas. Los puestos vacíos siguen marcados como muestra. El K/D no se guarda, así que ese indicador es un diseño.",
    noteSample:
      "Muestra de diseño. 0 registros clasificatorios en vivo. Estas cifras no son un resultado de temporada, y el K/D no se guarda.",
  },
  playerCard: {
    kicker: "Vista previa de tarjeta autenticada · cifras simuladas",
    title: "Expediente del operador",
    badge: "Premium",
    note: "Solo diseño. Estas cifras no son una temporada en vivo, ni un Elo en vivo, ni una cuenta con sesión iniciada. El emparejamiento clasificatorio no está activo.",
    currentRank: "Rango actual",
    rankValue: "A.C.E. Legend (División I)",
    competitiveRating: "Puntuación competitiva",
    seasonRank: "Puesto en la temporada",
    seasonTop: "({percent} superior)",
  },
};
