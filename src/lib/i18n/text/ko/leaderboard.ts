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
    note: "플레이어가 Steam을 연결하고 레이팅을 얻기 전까지 이 보드는 쇼케이스 자리로 채워집니다. 국가와 대표 무기는 예시입니다. 무기 렌더는 A.C.E. 스튜디오의 오리지널 아트이며 Valve 스킨이 아닙니다. 킬은 아직 기록되지 않으므로 대표 무기는 최다 킬 통계가 아닙니다.",
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
    sampleRender: "대표 무기",
    notStored: "저장되지 않음",
    noKillSaved: "저장된 킬 없음",
    alt: "{name}",
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
    banner: "시즌 1 순위표",
    noteLive:
      "Steam에 연결된 이름은 A.C.E. 계정입니다. K/D는 경기 서버가 킬을 기록하면 표시됩니다.",
    noteSample:
      "시즌 1 기록은 랭크 경기가 진행되면 여기에 표시됩니다.",
  },
  playerCard: {
    kicker: "플레이어 카드 미리보기",
    title: "오퍼레이터 신상 파일",
    badge: "Premium",
    note: "랭크 매치메이킹이 열리면 카드가 실제 수치로 채워집니다.",
    currentRank: "현재 랭크",
    rankValue: "A.C.E. Legend (디비전 I)",
    competitiveRating: "경쟁 레이팅",
    seasonRank: "시즌 순위",
    seasonTop: "(상위 {percent})",
  },
};
