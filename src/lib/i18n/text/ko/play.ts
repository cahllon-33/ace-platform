import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "premium": {
    "tag": "PREMIUM",
    "sample": "PREMIUM 샘플",
    "note": "Premium 샘플로 표시된 슬롯은 Premium 일러스트 랭크 아트를 예시로만 보여 줍니다. 샘플 선수이며 구독자가 아닙니다. Premium 아트는 외형 전용이며 레이팅이나 매치메이킹을 절대 바꾸지 않습니다.",
    "artAlt": "{rank} Premium 일러스트 랭크 아트"
  },
  "room": {
    "showcaseTag": "쇼케이스 · 샘플 선수이며 실시간 경기가 아닙니다. 대기열은 닫혀 있습니다.",
    "showcaseShort": "쇼케이스",
    "queueClosed": "대기열 닫힘",
    "floorRp": "랭크 하한 {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "{name}의 아바타",
    "sampleChat": "샘플 문구입니다. 전송되지 않으며 실시간이 아닙니다.",
    "sampleLine": "샘플",
    "operatorA": "팀 A용 A.C.E 오리지널 오퍼레이터 아트: 헬멧을 쓴 전술 오퍼레이터, 금색 포인트의 차콜 장비",
    "operatorB": "팀 B용 A.C.E 오리지널 오퍼레이터 아트: 후드를 쓴 반군 전사, 금색 포인트의 차콜 장비",
    "artNote": "A.C.E 오리지널 캐릭터 아트입니다. 게임 모델이 아닙니다."
  },
  "meta": {
    "title": "플레이",
    "description": "랭크 5v5 매치메이킹은 A.C.E Shield 안티치트가 가동되면 열립니다."
  },
  "boards": {
    "label": "대기열 보드",
    "title": "세 가지 5v5 보드",
    "note": "선택은 이 페이지에만 남습니다. 랭크 매치 찾기는 닫혀 있으며, 보드를 골라도 상대를 찾지 않습니다.",
    "items": {
      "open": {
        "name": "오픈 보드",
        "rules": [
          "최대 5명까지 인원 제한 없는 파티",
          "레이팅 범위 제한 없음",
          "Steam OpenID로 신원 확인",
          "대기열이 생기면 자유 연습용으로 명시됨"
        ]
      },
      "calibration": {
        "name": "캘리브레이션 보드",
        "rules": [
          "솔로, 듀오 또는 트리오",
          "계획된 레이팅 범위 {points}포인트",
          "Steam 프로필이 이미 저장되어 있어야 함",
          "A.C.E. 레이팅 규칙 사용 · 검색 곧 출시"
        ]
      },
      "elite": {
        "name": "엘리트 보드",
        "rules": [
          "솔로 또는 듀오",
          "계획된 레이팅 범위 {points}포인트",
          "저장된 멤버십이 Plus 또는 Premium이어야 함",
          "더 엄격한 명문화된 입장 조건. 상금 풀은 없음"
        ]
      }
    }
  },
  "veto": {
    "kicker": "맵 비토",
    "title": "맵 선택",
    "lede": "맵이 하나 남을 때까지 제외하세요. 이 로비는 Counter-Strike 2를 시작하지 않으며 서버를 열지 않습니다.",
    "mapSelected": "선택된 맵: {map}",
    "yourBan": "내 밴",
    "opponentBan": "상대 밴",
    "selected": "선택됨",
    "declined": "제외됨",
    "decline": "제외",
    "reset": "비토 초기화",
    "declinedToast": "{map}이(가) 제외되었습니다. 이 페이지는 서버를 열지 않습니다.",
    "lockKicker": "5v5 매치 룸",
    "lockTitle": "남은 맵은 {map}입니다",
    "lockBody": "나의 매치 룸입니다. 경쟁 베타가 열리면 여기에서 경쟁 경기가 시작됩니다.",
    "close": "닫기"
  },
  "arena": {
    "ariaLabel": "매치 룸 미리보기",
    "captain": "주장",
    "mapPlates": "맵 플레이트",
    "selectMap": "{map} 선택",
    "settings": {
      "region": "지역",
      "mode": "모드",
      "antiCheat": "안티치트",
      "simulator": "미리보기"
    },
    "chat": {
      "title": "팀 채팅",
      "kicker": "팀 채팅 · 곧 출시",
      "captainName": "{name} (주장)",
      "layoutName": "{name}",
      "samples": [
        "gl hf, 즐겜!",
        "가자!",
        "dust 2는 우리한테 유리해",
        "준비 완료"
      ],
      "inputLabel": "팀 채팅 메시지",
      "placeholder": "팀에게 메시지…",
      "send": "보내기"
    },
    "tiles": {
      "map": "맵",
      "server": "서버",
      "serverValue": "EU 서부 · 곧 출시",
      "mode": "모드"
    },
    "identity": {
      "title": "신원 인증",
      "kicker": "신원 확인 · 곧 출시",
      "rows": [
        "이메일 인증 · 곧 출시",
        "전화 인증 · 곧 출시",
        "얼굴 확인 · 곧 출시"
      ]
    },
    "security": {
      "title": "매치 보안",
      "kicker": "A.C.E SHIELD · 개발 중",
      "rows": [
        "안티치트 보호 · 개발 중",
        "서버 무결성 검사 · 개발 중",
        "경기 데이터 암호화 · 개발 중"
      ]
    },
    "findMatchReason": "매치메이킹은 경쟁 베타와 함께 열립니다. 랭크 대기열은 아직 운영되지 않습니다."
  }
};
