import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Classificação",
    description:
      "Tabela competitiva da A.C.E. As contas Steam salvas aparecem primeiro. As vagas vazias continuam como linhas de vitrine.",
  },
  hero: {
    kicker: "CLASSIFICAÇÃO",
    title: "Tabela competitiva",
    note: "Vagas de vitrine preenchem esta tabela até que uma conta Steam seja salva. Um rating salvo as substitui. País e arma principal são amostras. As imagens das armas são renders originais do estúdio A.C.E., não skins da Valve. Este site não armazena abates, então a arma não é a arma com mais abates registrada.",
  },
  facts: {
    seats: "Vagas",
    storedAccounts: "Contas salvas",
    killsStored: "Abates salvos",
    none: "Nenhum",
  },
  empty: "Nenhuma vaga de vitrine corresponde a esse nome.",
  podiumLabel: "Três primeiras vagas",
  boardLabel: "Tabela competitiva",
  table: {
    rank: "Rank",
    player: "Jogador",
    country: "País",
    tier: "Patente",
    leadWeapon: "Arma principal",
    rating: "Rating",
  },
  tags: {
    stored: "Conta salva",
    showcase: "Vitrine",
  },
  weapon: {
    sampleRender: "Render de amostra",
    notStored: "Não salvo",
    noKillSaved: "Nenhum abate salvo",
    alt: "Render de amostra de {name}",
  },
  countries: {
    il: "Israel",
    us: "Estados Unidos",
    de: "Alemanha",
    ua: "Ucrânia",
    se: "Suécia",
    fr: "França",
    pl: "Polônia",
    br: "Brasil",
    jp: "Japão",
    kr: "Coreia do Sul",
  },
  search: {
    openLabel: "Abrir busca de jogadores",
    srLabel: "Buscar na classificação",
    fieldLabel: "Buscar jogadores",
    placeholder: "Nome de exibição",
  },
  seasonPreview: {
    banner: "ESCADA DA TEMPORADA 1 — LAYOUT",
    noteLive:
      "Os nomes vinculados à Steam são contas salvas. As vagas vazias continuam marcadas como vitrine. O K/D não é armazenado, então esse medidor é apenas layout.",
    noteSample:
      "Amostra de layout. 0 registros ranqueados ao vivo. Estes números não são resultado de temporada, e o K/D não é armazenado.",
  },
  playerCard: {
    kicker: "Prévia do cartão autenticado · números simulados",
    title: "Dossiê do operador",
    badge: "Premium",
    note: "Apenas layout. Estes números não são de uma temporada ao vivo, de um Elo ao vivo nem de uma conta conectada. O pareamento ranqueado não está ativo.",
    currentRank: "Rank atual",
    rankValue: "A.C.E. Legend (Divisão I)",
    competitiveRating: "Rating competitivo",
    seasonRank: "Posição na temporada",
    seasonTop: "(Top {percent})",
  },
};
