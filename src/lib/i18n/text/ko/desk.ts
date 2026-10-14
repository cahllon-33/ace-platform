import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "A.C.E. 마켓플레이스",
      description:
        "상품 예시 무기 카드입니다. Valve 아이템이 아니고, 재원이 마련된 보상이 아니며, 결제 시 카드에 청구되지 않습니다.",
    },
    heroHonesty:
      "무기 카드는 상품 예시입니다. Valve 아이템이 아니고, 인벤토리에 없으며, 이 페이지의 결제는 카드에 청구하지 않습니다.",
    prizeBanner: "🏆 토너먼트 상품 예시 — PREMIUM 보상 쇼케이스",
    notice:
      "이 쇼케이스에는 현금 가치가 없습니다. 지급되는 스킨도, 재원이 마련된 상금도 없으며, 살펴보기 버튼은 구매를 시작하지 않습니다.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ 비밀 등급 리더보드 드롭",
        price: "예시 전용 · 현금 가치 없음",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ 극비 등급 업그레이드 티어",
        price: "예시 전용 · 현금 가치 없음",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ 비밀 등급 특별 드롭",
        price: "예시 전용 · 현금 가치 없음",
      },
      crown: {
        name: "A.C.E. 왕관 아바타 프레임",
        tag: "프로필 장식",
        price: "Premium 플랜에 포함 또는 {rp} RP",
      },
      shimmer: {
        name: "골든 프로필 레이저 시머",
        tag: "채팅 꾸미기",
        price: "Premium 플랜에 포함 또는 {rp} RP",
      },
      pass: {
        name: "Premium 토너먼트 골든 패스",
        tag: "리그 이용 토큰",
        price: "{rp} RP / 우선 등록 참가권",
      },
    },
  },
  support: {
    meta: {
      title: "지원",
      description:
        "A.C.E. 도움말 센터 레이아웃입니다. 안티치트, 랭크 대기열, 결제 창구는 운영되지 않습니다. 티켓 안내는 문의 건을 생성하지 않습니다.",
    },
  },
  contact: {
    meta: {
      title: "문의",
      description:
        "A.C.E. 기업 문의 터미널입니다. 양식 제출은 샌드박스 목업이며 이메일을 보내거나 텔레메트리를 저장하지 않습니다.",
    },
  },
  contactEmail: {
    label: "검증된 텔레메트리 이메일 설정",
    hintSignedIn:
      "로그인한 계정에만 저장됩니다. 확인 메시지가 발송되지 않으므로 주소는 검증되지 않습니다.",
    hintSignedOut: "계정에 연락 이메일을 저장하려면 Steam으로 로그인하세요.",
    saving: "저장 중",
    save: "연락 이메일 저장",
    results: {
      signInFirst: "연락 이메일을 저장하기 전에 Steam으로 로그인하세요.",
      invalid: "이메일 주소를 하나만 입력하거나, 지우려면 필드를 비워 두세요.",
      failed: "해당 주소가 이미 다른 계정에 저장되어 있거나 데이터베이스를 사용할 수 없습니다.",
      saved: "연락 주소가 이 계정에 저장되었습니다. 확인 메시지가 발송되지 않았으므로 검증되지 않은 상태입니다.",
      cleared: "연락 주소가 삭제되었습니다.",
    },
  },
};
