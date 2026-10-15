import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  "shop": {
    "meta": {
      "title": "A.C.E. 市场",
      "description": "锦标赛奖励卡片。商店和奖励即将开放。"
    },
    "heroHonesty": "抢先一览即将推出的锦标赛奖励。商店即将开放;目前不会扣任何费用。",
    "prizeBanner": "🏆 锦标赛奖励 · 即将推出",
    "notice": "这些展示均为预览,没有现金价值。不会发放或扣费,“查看”按钮也不会发起购买。",
    "items": {
      "lore": {
        "name": "Butterfly Knife | Lore",
        "tag": "★ 隐秘级排行榜掉落",
        "price": "即将推出"
      },
      "jungle": {
        "name": "M4A1-S | Welcome to the Jungle",
        "tag": "★ 保密级升级档",
        "price": "即将推出"
      },
      "karambit": {
        "name": "Karambit | Lore",
        "tag": "★ 隐秘级特别掉落",
        "price": "即将推出"
      },
      "crown": {
        "name": "A.C.E. 王冠头像框",
        "tag": "个人资料装饰",
        "price": "包含在 Premium 方案中,或 {rp} RP"
      },
      "shimmer": {
        "name": "金色个人资料激光光泽",
        "tag": "聊天个性化",
        "price": "包含在 Premium 方案中,或 {rp} RP"
      },
      "pass": {
        "name": "Premium 锦标赛金色通行证",
        "tag": "联赛准入令牌",
        "price": "{rp} RP / 优先报名资格"
      }
    }
  },
  "support": {
    "meta": {
      "title": "支持",
      "description": "A.C.E. 帮助中心。反作弊、排位和账单服务台将随竞技测试版开放。"
    }
  },
  "contact": {
    "meta": {
      "title": "联系我们",
      "description": "联系 A.C.E.。在线表单即将开放。"
    }
  },
  "contactEmail": {
    "label": "设置联系邮箱",
    "hintSignedIn": "仅保存到当前登录的账户。不会发送确认邮件,因此该地址未经验证。",
    "hintSignedOut": "请使用 Steam 登录,以便在账户中保存联系邮箱。",
    "saving": "正在保存",
    "save": "保存联系邮箱",
    "results": {
      "signInFirst": "保存联系邮箱前,请先使用 Steam 登录。",
      "invalid": "请输入一个邮箱地址,或留空以清除。",
      "failed": "该地址已保存在其他账户中,或数据库不可用。",
      "saved": "联系地址已保存到此账户。未发送确认邮件,因此尚未验证。",
      "cleared": "联系地址已清除。"
    }
  }
};
