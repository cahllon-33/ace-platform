import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "플레이",
    description: "안티치트가 실제로 존재하기 전까지 랭크 5v5 매치메이킹은 실패 시 닫혀 있습니다.",
  },
  boards: {
    label: "대기열 보드",
    title: "세 가지 5v5 보드",
    note: "선택은 이 페이지에만 남습니다. 랭크 매치 찾기는 닫혀 있으며, 보드를 골라도 상대를 찾지 않습니다.",
    items: {
      open: {
        name: "오픈 보드",
        rules: [
          "최대 5명까지 인원 제한 없는 파티",
          "레이팅 범위 제한 없음",
          "Steam OpenID로 신원 확인",
          "대기열이 생기면 자유 연습용으로 명시됨",
        ],
      },
      calibration: {
        name: "캘리브레이션 보드",
        rules: [
          "솔로, 듀오 또는 트리오",
          "계획된 레이팅 범위 {points}포인트",
          "Steam 프로필이 이미 저장되어 있어야 함",
          "A.C.E. 레이팅 규칙 적용, 실시간 매치 찾기 없음",
        ],
      },
      elite: {
        name: "엘리트 보드",
        rules: [
          "솔로 또는 듀오",
          "계획된 레이팅 범위 {points}포인트",
          "저장된 멤버십이 Plus 또는 Premium이어야 함",
          "더 엄격한 명문화된 입장 조건. 상금 풀은 없음",
        ],
      },
    },
  },
  veto: {
    kicker: "맵 비토",
    title: "맵 선택",
    lede: "맵이 하나 남을 때까지 제외하세요. 이 로비는 Counter-Strike 2를 시작하지 않으며 서버를 열지 않습니다.",
    mapSelected: "선택된 맵: {map}",
    yourBan: "내 밴",
    opponentBan: "상대 밴",
    selected: "선택됨",
    declined: "제외됨",
    decline: "제외",
    reset: "비토 초기화",
    declinedToast: "{map}이(가) 제외되었습니다. 이 페이지는 서버를 열지 않습니다.",
    lockKicker: "5v5 레이아웃",
    lockTitle: "남은 맵은 {map}입니다",
    lockBody:
      "아래 로스터는 레이아웃입니다. 이 페이지는 경쟁 매치를 불러오지 않고, 플레이어를 게임에 넣지 않으며, 서버 주소를 보내지 않습니다.",
    close: "닫기",
  },
  arena: {
    ariaLabel: "매치 성사 레이아웃 미리보기",
    captain: "주장",
    ping: "핑 {ping}",
    mapPlates: "맵 플레이트",
    selectMap: "{map} 레이아웃 맵 플레이트 선택",
    settings: {
      region: "지역",
      mode: "모드",
      antiCheat: "안티치트",
      simulator: "시뮬레이터",
    },
    chat: {
      title: "팀 채팅",
      kicker: "모의 터미널 · 네트워크 연결 안 됨",
      captainName: "{name} (주장)",
      layoutName: "{name} (레이아웃)",
      samples: ["gl hf, 즐겜!", "가자!", "dust 2는 우리한테 유리해", "준비 완료"],
      inputLabel: "레이아웃 채팅 메시지",
      placeholder: "팀에게 메시지… (레이아웃 전용)",
      send: "레이아웃 채팅 줄 추가",
    },
    tiles: {
      map: "맵",
      server: "서버",
      serverValue: "EU 서부 · {ping} (샘플)",
      mode: "모드",
    },
    identity: {
      title: "신원 인증",
      kicker: "레이아웃 검사 · 실제 제공자 아님",
      rows: [
        "이메일 코드 확인됨 (레이아웃)",
        "SMS 전화 코드 확인됨 (레이아웃)",
        "실시간 얼굴 스캔 확인됨 (레이아웃)",
      ],
    },
    security: {
      title: "매치 보안",
      kicker: "시뮬레이터 · AI 배포되지 않음",
      rows: [
        "안티치트 보호 — 레이아웃 표시",
        "서버 무결성 검사 — 모의",
        "매치 데이터 암호화 — 개념",
      ],
    },
    findMatchReason: "매치 찾기로 실시간 CS2 서버를 열 수 없습니다. 랭크는 실패 시 닫혀 있습니다. 인원은 0명입니다.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name}님은 이 레이아웃 로스터에 배치되지 않았습니다.",
    banner: "아레나 레이아웃 · 실시간 매치 없음",
    mapPlate: "맵 플레이트 · DUST II · 128틱 서버 없음",
    rosterNote: "레이아웃 콜사인입니다. 연결된 로스터가 아닙니다.",
    teamA: "팀 A · TACTICAL ALLIANCE",
    teamB: "팀 B · SHADOW LEGION",
    clockLabel: "레이아웃 시계",
    clockNote: "이 시계는 반복됩니다. 대기열은 닫혀 있습니다.",
    chatKicker: "팀 채팅",
    chatLines: [
      "시계가 초기화될 때까지 레이아웃 유지 중.",
      "이 페이지에서 Dust II는 맵 플레이트야.",
      "이 로스터에 연결된 서버는 없어.",
    ],
    chatField: "메시지는 전송되지 않습니다.",
    identityKicker: "신원 격자",
    identityRows: [
      "매치 티켓 메일은 발송되지 않습니다.",
      "커널 검사가 실행되고 있지 않습니다.",
      "연결된 실시간 텔레메트리 스트림이 없습니다.",
    ],
    findMatch: "경쟁 매치 찾기",
    closedNotice: "이 버튼은 서버를 열지 않습니다. 랭크 대기열은 닫혀 있습니다. 인원은 0명입니다.",
  },
};
