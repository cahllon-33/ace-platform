import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "리더보드",
    description:
      "A.C.E. 경쟁 보드입니다. 저장된 Steam 계정이 먼저 표시됩니다. 빈 자리는 쇼케이스 행으로 남습니다.",
  },
  hero: {
    kicker: "리더보드",
    title: "경쟁 보드",
    note: "Steam 계정이 저장되기 전까지 이 보드는 쇼케이스 자리로 채워집니다. 저장된 레이팅이 있으면 그 자리를 대신합니다. 국가와 주무기는 샘플입니다. 무기 렌더는 A.C.E. 스튜디오의 독창적인 이미지이며 Valve 스킨이 아닙니다. 이 사이트는 킬을 저장하지 않으므로, 표시된 무기는 기록된 최다 킬 무기가 아닙니다.",
  },
  facts: {
    seats: "자리",
    storedAccounts: "저장된 계정",
    killsStored: "저장된 킬",
    none: "없음",
  },
  empty: "해당 이름과 일치하는 쇼케이스 자리가 없습니다.",
  podiumLabel: "상위 3자리",
  boardLabel: "경쟁 보드",
  table: {
    rank: "랭크",
    player: "플레이어",
    country: "국가",
    tier: "티어",
    leadWeapon: "주무기",
    rating: "레이팅",
  },
  tags: {
    stored: "저장된 계정",
    showcase: "쇼케이스",
  },
  weapon: {
    sampleRender: "샘플 렌더",
    notStored: "저장되지 않음",
    noKillSaved: "저장된 킬 없음",
    alt: "{name} 샘플 렌더",
  },
  countries: {
    il: "이스라엘",
    us: "미국",
    de: "독일",
    ua: "우크라이나",
    se: "스웨덴",
    fr: "프랑스",
    pl: "폴란드",
    br: "브라질",
    jp: "일본",
    kr: "대한민국",
  },
  search: {
    openLabel: "플레이어 검색 열기",
    srLabel: "리더보드 검색",
    fieldLabel: "플레이어 검색",
    placeholder: "표시 이름",
  },
  seasonPreview: {
    banner: "시즌 1 래더 — 레이아웃",
    noteLive:
      "Steam에 연결된 이름은 저장된 계정입니다. 빈 자리는 쇼케이스로 표시됩니다. K/D는 저장되지 않으므로 해당 게이지는 레이아웃입니다.",
    noteSample:
      "레이아웃 샘플입니다. 실시간 랭크 기록은 0건입니다. 이 수치는 시즌 결과가 아니며, K/D는 저장되지 않습니다.",
  },
  playerCard: {
    kicker: "인증된 카드 미리보기 · 모의 수치",
    title: "오퍼레이터 신상 파일",
    badge: "Premium",
    note: "레이아웃 전용입니다. 이 수치는 실시간 시즌, 실시간 Elo, 로그인한 계정의 값이 아닙니다. 랭크 매치메이킹은 작동하지 않습니다.",
    currentRank: "현재 랭크",
    rankValue: "A.C.E. Legend (디비전 I)",
    competitiveRating: "경쟁 레이팅",
    seasonRank: "시즌 순위",
    seasonTop: "(상위 {percent})",
  },
};
