import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "价格",
    "description": "A.C.E. 会员:Free {free},Plus 每月 {plus},Premium 每月 {premium}。固定整数显示价格。"
  },
  "period": {
    "monthly": "/月"
  },
  "hero": {
    "badge": "会员",
    "title": "访问层级",
    "lede": "Free {free}。Plus 每月 {plus}。Premium 每月 {premium}。这些金额为固定整数。付费方案绝不能购买评分或更弱的对手。"
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "石墨",
      "title": "开放访问",
      "points": [
        "使用 Steam OpenID 登录。A.C.E. 绝不会索要 Steam 密码。",
        "已保存的评分从 1,000 开始。尚无任何比赛结果改变过它。",
        "所有公开页面:游戏、锦标赛、排行榜、战队和规则。"
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "感谢信与支持",
      "points": [
        "包含 Free 的全部内容。",
        "即将推出:感谢信(包含什么、不包含什么,以及 support@ace-platform.gg)只有在支付上线后才会打开。目前按钮已禁用。",
        "不能购买评分或更弱的对手。金色资料徽章来自每位玩家已保存的比赛数据。精英印章和特殊徽章仅在已保存的等级为 Premium 时显示。"
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "感谢信与五人小队",
      "points": [
        "包含 Free 的全部内容。",
        "即将推出:感谢信(包含什么、不包含什么,以及 support@ace-platform.gg)只有在支付上线后才会打开。目前按钮已禁用。",
        "即将推出:支付后,感谢信会引导至 Squads,通过 Steam 登录的队长可在那里保存五人战队。",
        "无奖品、武器、实时队列或游戏服务器。已保存的战队并不占据 100 队榜单的席位。"
      ]
    }
  },
  "card": {
    "elite": "精英",
    "stayFree": "继续使用 Free",
    "freeNote": "现已开放",
    "choose": "选择 {plan}",
    "chooseAria": "以每月 {price} 选择 {plan}"
  },
  "billing": {
    "kicker": "计费时间线",
    "title": "计费上线后的运作方式",
    "body": "Plus 每月恰好 {plus}。Premium 每月恰好 {premium}。",
    "display": {
      "label": "01 · 显示价格",
      "body": "Free {free}。Plus 每月 {plus}。Premium 每月 {premium}。付费层级绝不能购买评分或更弱的对手。"
    },
    "rolling": {
      "label": "02 · 按月滚动",
      "body": "计费上线后,费用按月自动续订。当月部分使用不予退款。取消将停止下一个周期,不会取消当前已预付的期间。"
    },
    "today": {
      "label": "03 · 现状"
    }
  },
  "compare": {
    "kicker": "A.C.E. 目前能承诺的内容",
    "title": "会员对比",
    "note": "每一行都反映网站的现状。支付即将推出,付费方案绝不会开启队列或购买优势。",
    "caption": "按网站当前功能对比 Free、Plus 和 Premium",
    "includedToday": "目前包含",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "公开网站",
        "detail": "首页、游戏、锦标赛、排行榜、战队、规则和条款。"
      },
      "steamSignIn": {
        "feature": "Steam 登录",
        "detail": "官方 Steam OpenID。A.C.E. 绝不会索要 Steam 密码。"
      },
      "startingRating": {
        "feature": "初始评分",
        "detail": "新账户在任何比赛记录前保存的数值。"
      },
      "recordedMatches": {
        "feature": "已记录比赛",
        "detail": "根据已结束的 A.C.E. 比赛写入的胜负。"
      },
      "rankedQueue": {
        "feature": "排位队列",
        "detail": "在真正的队列出现前,“寻找比赛”保持关闭。"
      },
      "cs2Servers": {
        "feature": "CS2 服务器",
        "detail": "本网站不会发送服务器地址或连接链接。"
      },
      "antiCheatClient": {
        "feature": "反作弊客户端",
        "detail": "本网站不提供任何下载。"
      },
      "charge": {
        "feature": "扣费",
        "detail": "选择 Plus 或 Premium 不需要银行卡。"
      },
      "ratingForSale": {
        "feature": "出售评分",
        "detail": "付费标签绝不能购买评分或更弱的对手。"
      },
      "prizeOrWeapon": {
        "feature": "奖品或武器",
        "detail": "不发放任何皮肤、刀具或奖金池。"
      },
      "goldEliteSeal": {
        "feature": "精英印章与特殊徽章",
        "detail": "仅限 Premium,从服务器上保存的等级读取。仅为装饰。支付不会设置该等级。"
      }
    },
    "cells": {
      "open": "开放",
      "yes": "是",
      "noneYet": "暂无",
      "closed": "关闭",
      "notConnected": "即将推出",
      "notShipped": "未发布",
      "noCharge": "不扣费",
      "notForSale": "不出售",
      "none": "无",
      "no": "否",
      "storedTierOnly": "仅限已保存等级"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus 收据",
      "metaDescription": "本网站显示的 A.C.E. Plus 信函。支付尚未上线,因此不会扣费,也不会发送邮件。",
      "planName": "A.C.E. Plus",
      "nextLabel": "继续浏览 A.C.E.",
      "nextBody": "公开页面保持开放。此选择不会开启队列,也不会更改已保存的等级。"
    },
    "premium": {
      "metaTitle": "Premium 收据",
      "metaDescription": "本网站显示的 A.C.E. Premium 信函。支付尚未上线,因此不会扣费,也不会发送邮件。",
      "planName": "A.C.E. Premium",
      "nextLabel": "前往小队",
      "nextBody": "前往小队页面。页面会询问你们是否为五人战队。席位 1 是已登录的 Steam 账户,席位 2 至 5 为其他玩家。保存战队同样不会收取此费用。"
    }
  },
  "letter": {
    "kicker": "{plan} · 每月 {price}",
    "title": "感谢你的选择",
    "flag": "此信函显示在网站上。未发送邮件,未从银行卡扣费。支付尚未上线,已保存的会员等级也未更改。",
    "greeting": "亲爱的玩家:",
    "intro": "感谢你选择 {plan}。本页面即为收据,记录了显示价格、此选择目前包含和不包含的内容,以及本网站公布的支持地址。",
    "selected": {
      "title": "所选内容",
      "items": [
        "方案名称:{plan}。",
        "显示价格:每月 {price}。该数字只是标价,不是扣费。",
        "付款:无。选择此方案不需要银行卡。",
        "邮件:无。A.C.E. 不会将此信函发送到邮箱。",
        "已保存等级:未更改。特殊徽章和精英印章仅在账户已保存 Premium 时显示。",
        "评分:不出售。新账户仍从 1,000 开始。"
      ]
    },
    "today": {
      "title": "目前可以使用的内容",
      "items": [
        "公开网站:首页、游戏、锦标赛、排行榜、战队、规则和条款。",
        "通过官方 Steam OpenID 登录。A.C.E. 绝不会索要 Steam 密码。",
        "与 Free 相同的公开页面。此价格不会开启单独的队列。"
      ]
    },
    "excluded": {
      "title": "此选择不包含的内容",
      "items": [
        "实时排位队列。“寻找比赛”保持关闭。",
        "《反恐精英 2》服务器、服务器地址或连接链接。",
        "反作弊下载。A.C.E Shield 正在开发中。",
        "奖品、皮肤、刀具或奖金池。",
        "100 队榜单的席位。在赛季开始前,该榜单仍显示 0 支已报名。",
        "更弱的对手、购买的评分,或与 Free 不同的公开网站。"
      ]
    },
    "trouble": {
      "title": "如果遇到问题",
      "items": [
        "你以为会扣费或获得付费等级:实际上未应用任何内容,账户保持原样。",
        "你以为会在邮箱中收到此信函:它只存在于本页面。",
        "Steam 未连接:请使用“绑定个人资料”,并先勾选条款复选框。切勿在 A.C.E. 输入 Steam 密码。",
        "你需要帮助:请使用下方的支持地址,或打开本网站的帮助页面。"
      ]
    },
    "support": {
      "title": "支持",
      "addressBefore": "本网站公布的支持地址为 ",
      "addressAfter": "。",
      "helpBefore": "网站帮助:",
      "supportLink": "支持",
      "helpAnd": "和",
      "contactLink": "联系我们",
      "rulesBefore": "。规则见",
      "rulesLink": "规则",
      "rulesAnd": "和",
      "termsLink": "条款",
      "helpAfter": "。支持页面的请求不会创建工单,在联系页面输入的文字也不会被发送。"
    },
    "next": {
      "title": "下一步"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM 遥测",
    "copy": "控制面板遥测已锁定 — 升级到 A.C.E. Plus 或 Premium,即可解锁实时动态统计曲线和武器专精指数。",
    "cta": "打开价格表"
  }
};
