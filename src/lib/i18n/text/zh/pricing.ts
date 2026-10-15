import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  matrix: {
    "kicker": "功能矩阵",
    "title": "会员方案对比",
    "note": "金色勾：包含。短横：不包含。即将推出：属于方案但尚未发布。任何方案都不能购买积分、匹配或排队优先。",
    "checkout": "结账功能尚未上线，因此目前所有账号都是 Free。",
    "feature": "功能",
    "included": "包含",
    "notIncluded": "不包含",
    "soon": "即将推出",
    "rows": {
      "site": "公开网站和 Steam OpenID 登录",
      "ladder": "Rating Points 阶梯和标准段位徽章",
      "squads": "Squads 中的五人战队记录",
      "stats": "玩家数据：积分变化图",
      "gauges": "玩家数据：爆头率和命中率仪表",
      "letter": "感谢信和邮件支持",
      "rankArt": "Premium 段位美术和段位图鉴",
      "card": "动态 Premium 资料卡",
      "badges": "特殊徽章和 ELITE SEAL",
      "analysis": "扩展比赛分析",
      "beta": "Beta 功能抢先体验",
      "support": "Premium 会员优先支持",
      "advantage": "积分加成、匹配或排队优势"
    }
  },
  plansR11: {
    "termsPlusStats": "玩家数据：基于已记录比赛的积分变化图。爆头率和命中率仪表即将推出。",
    "codexTitle": "Premium 段位图鉴和动态卡",
    "codexBody": "这是 Premium 包含的段位美术和动态资料卡。它是同一 Rating Points 阶梯上的外观美术，不带来任何竞技优势。",
    "codexLink": "打开 Premium 段位图鉴"
  },
  premiumExtras: {
    "card": {
      "previewTag": "预览",
      "previewNote": "动态 Premium 个人资料卡预览。名称和数值均为示例。只有已保存方案为 Premium 的真实个人资料才会显示此卡片。",
      "planTag": "A.C.E PREMIUM",
      "seal": "ELITE 印章",
      "rank": "段位",
      "rating": "评分",
      "sampleName": "示例玩家",
      "ownTitle": "你的 Premium 个人资料卡"
    },
    "analysis": {
      "metaTitle": "扩展比赛分析",
      "metaDescription": "Premium 比赛分析布局：死亡热力图、爆头率和每回合表现。待演示文件解析上线后推出。",
      "kicker": "PREMIUM · 比赛分析",
      "title": "扩展比赛分析",
      "lede": "为你已记录的比赛提供死亡热力图、爆头率和每回合表现。这需要尚不存在的演示文件解析。",
      "sampleTag": "示例布局 — 不是你的数据",
      "soon": "即将推出",
      "soonCaption": "演示文件解析上线后填充。下方没有任何真实统计。",
      "heatmap": "死亡热力图",
      "headshot": "爆头率",
      "rounds": "每回合表现",
      "noData": "暂无数据",
      "locked": "扩展比赛分析属于 A.C.E Premium（每月 $7）。即将推出：结账功能尚不存在，因此目前没有任何账号是 Premium。",
      "premiumNote": "你的方案是 Premium。演示文件解析上线后，你的分析将显示在这里。",
      "signIn": "使用 Steam 登录以查看你的分析权限。",
      "plansLink": "查看方案"
    },
    "terms": {
      "metaTitle": "Premium 条款",
      "metaDescription": "A.C.E Plus 和 Premium 包含什么、任何方案都不包含什么，以及如何取消。",
      "kicker": "ACE-LEGAL / PREMIUM 条款",
      "title": "A.C.E Premium 条款",
      "intro": "本条款说明付费方案包含的内容，是 /terms 服务条款的组成部分。结账功能尚不存在，因此目前无法购买任何内容，也不会产生任何费用。",
      "pricesTitle": "1. 方案、价格与取消",
      "prices": "Free {free}。Plus 每月 {plus}。Premium 每月 {premium}。方案按月续订。你可以随时在仪表板设置中免费取消，并保留访问权限至已付月份结束。未满一个月的部分不予退款，除非你所在国家的法律要求。",
      "plusTitle": "2. Plus 包含",
      "plus1": "Free 的全部内容。",
      "plus2": "即将推出：结账上线后，提供感谢信和 support@ace-platform.gg 邮件支持。",
      "premiumTitle": "3. Premium 包含",
      "prem1": "Plus 的全部内容。",
      "prem2": "Premium 段位美术与 Premium 段位图鉴：显示在你资料上的 A.C.E. 原创插画徽章套组。仅为外观，位于同一 Rating Points 阶梯。",
      "prem3": "动态 Premium 个人资料卡。",
      "prem4": "特殊徽章和 ELITE 印章。",
      "prem5": "即将推出：演示文件解析上线后提供扩展比赛分析（死亡热力图、爆头率、每回合表现）。",
      "prem6": "即将推出：Beta 开放时抢先体验 Beta 功能。",
      "prem7": "即将推出：Premium 会员优先支持。Premium 请求优先处理，但不保证回复时间。",
      "neverTitle": "4. 任何方案都不包含",
      "never": "任何方案都不提供竞技优势。任何方案都不会增加 Rating Points 或提升评分。任何方案都不提供匹配优势、优先队列或更弱的对手。",
      "soonTitle": "5. 即将推出的功能",
      "soon": "标记为即将推出的内容在发布前不构成承诺。在此之前，价格不包含这些内容。",
      "languageTitle": "6. 语言",
      "language": "译文仅为方便提供。如译文与英文文本不一致，以英文文本为准。",
      "contact": "问题：support@ace-platform.gg",
      "footerLink": "Premium 条款",
      "pricingLink": "阅读 Premium 条款"
    }
  },
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
      "title": "玩家数据与支持",
      "points": [
        "包含 Free 的全部内容。",
        "玩家数据：基于已记录 A.C.E. 比赛的积分变化图。爆头率和命中率仪表即将推出。",
        "即将推出：结账功能上线后，提供感谢信和 support@ace-platform.gg 邮件支持。Plus 不会购买积分或更弱的对手。"
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "个人资料美术、徽章与分析",
      "points": [
        "Plus 的全部内容。",
        "Premium 段位美术与 Premium 段位图鉴、动态资料卡、特殊徽章和 ELITE SEAL。",
        "即将推出：扩展比赛分析、Beta 抢先体验，以及 Premium 会员优先支持。",
        "无竞技优势：不增加 Rating Points，也没有匹配优势。"
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
      "nextLabel": "阅读 Premium 条款",
      "nextBody": "Premium 包含 Premium 段位美术、动态资料卡、特殊徽章和 ELITE SEAL，以及 Plus 的全部内容。在 Squads 保存战队对所有账号免费。"
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
