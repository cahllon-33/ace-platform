import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "本页面为便于阅读而提供的译文。如译文与英文原文不一致,以英文原文为准。",
  "terms": {
    "meta": {
      "title": "服务条款",
      "description": "A.C.E. 网站服务条款,适用于本《反恐精英 2》竞技网站。排位、支付和反作弊均未上线。"
    },
    "kicker": "ACE-LEGAL / 服务条款",
    "title": "服务条款",
    "lede": "本条款适用于 A.C.E. 公开网站及相关账户 API 的使用。比赛时长、地图池、阵容锁定和申诉详见 /rules 的竞技规则手册,该手册构成本条款的一部分。",
    "sections": {
      "operator": {
        "title": "1. 运营方与独立性",
        "paragraphs": [
          "本服务由 A.C.E. Competitions Ltd.(公司注册号待公布)运营。使用本网站即表示你接受本条款、隐私政策、Cookie 政策和竞技规则手册。"
        ]
      },
      "eligibility": {
        "title": "2. 资格与账户",
        "paragraphs": [
          "你必须达到所在国家允许使用 Steam 的年龄。账户只能通过官方 Steam OpenID 创建。不得为规避限制而共享账户。A.C.E. 绝不会索要 Steam 密码。"
        ]
      },
      "notActive": {
        "title": "3. 本网站不提供的内容",
        "paragraphs": [
          "排位匹配、在线 CS2 游戏服务器、可用的 AI 反作弊、计费和奖品均未启用。除页面另有说明外,大厅时钟和完整性面板均为预览。"
        ]
      },
      "subscriptions": {
        "title": "4. 拟议订阅",
        "paragraphs": [
          "Plus(每月 $4)和 Premium(每月 $7)为显示价格。本网站目前尚无支付功能,方案按钮显示“即将推出”。计费上线后,适用 /pricing 中的取消规则:按月滚动订阅,可在控制面板设置中取消,不足一个月的部分不予退款。"
        ]
      },
      "antiCheat": {
        "title": "5. 反作弊客户端(未发布)",
        "paragraphs": [
          "本网站没有可下载的反作弊客户端。/rules 的竞赛规则不收集硬件标识符,也不封禁设备。禁止为规避限制而共享账户。"
        ]
      },
      "liability": {
        "title": "6. 责任限制",
        "paragraphs": [
          "在法律允许的范围内,A.C.E. 不对段位损失、从未真实存在的装饰品损失,或第三方 Steam / CS2 的服务中断承担责任。你所在国家不可放弃的强制性消费者权利不受影响。"
        ]
      },
      "copyright": {
        "title": "7. 网站原创内容的版权",
        "paragraphs": [
          "为本网站创作的原创文字、页面布局、徽章和图形归 A.C.E. Competitions Ltd. 所有。未经书面许可,不得为其他产品复制、转载或抓取这些原创内容。在法律允许的情况下,A.C.E. 可以主张该权利,包括提出索赔。本声明不构成起诉,不设定赔偿金额,也不保证任何法院判决结果。",
          "Counter-Strike 2、Steam 以及地图名称 Dust II、Mirage、Inferno、Nuke、Ancient、Anubis 和 Train 归 Valve 所有。A.C.E. 不主张对其拥有权利。打开本网站不会取消任何法定权利,也不会订立合同。"
        ]
      },
      "contact": {
        "title": "8. 联系方式",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — 公司注册号待公布。"
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "隐私政策",
      "description": "A.C.E. 隐私政策:严格必要的数据,仅限 Steam OpenID,不收集 Steam 密码,不出售行为数据。"
    },
    "kicker": "ACE-PRIVACY / GDPR / 严格必要",
    "title": "隐私政策",
    "lede": "本隐私政策说明你使用本网站时 A.C.E. Competitions Ltd. 存储哪些信息。译文仅为方便提供;英文版本为参考文本。本政策并不表示所有未来的产品功能都已存在。",
    "strictNecessity": {
      "title": "严格必要原则",
      "intro": "我们只收集识别竞技玩家和阻止针对本服务的明显欺诈所需的最少账户数据。我们不收集不必要的日志,不抓取私密的 Steam 库存,也不出售第三方行为数据。",
      "storedIntro": "成功通过 Steam OpenID 登录后,目前存储的内容:",
      "stored": [
        {
          "label": "经过验证的 64 位 SteamID",
          "body": "由 Steam 官方 OpenID 断言返回,并在创建或更新 A.C.E. 账户前于服务器上核验。"
        },
        {
          "label": "公开的 Steam 显示名称",
          "body": "在配置了 Steam Web API 密钥时获取。这是个人资料名称,不是电子邮箱。"
        },
        {
          "label": "A.C.E. 账户记录",
          "body": "例如段位等级、评分、胜/负、战队成员身份和会话令牌哈希。"
        }
      ],
      "notCollected": {
        "before": "电子邮箱地址和加密硬件档案",
        "strong": "目前本网站不收集",
        "after": "。大厅中的人脸扫描和 HWID 卡片为设计预览。如果未来的反作弊客户端或支持渠道需要邮箱或硬件指纹,收集将仅限于防止欺诈,会先在此处披露,且不会作为广告数据出售。"
      }
    },
    "neverCollect": {
      "title": "我们绝不收集的内容",
      "items": [
        "Steam 密码。登录仅通过 Steam OpenID / Steam 官方流程。",
        "支付卡号。支付尚未实现。",
        "内核遥测。本网站不附带任何反作弊客户端。"
      ]
    },
    "steamBoundary": {
      "title": "第三方嵌入与 Steam OpenID 边界",
      "callback": {
        "before": "Steam 登录会离开 A.C.E.,在 Steam 完成验证,然后返回",
        "after": "。服务器在写入会话前会核验 OpenID 断言(包括声明的身份和 Steam 签名参数)。Steam 持有的数据受 Steam 隐私政策约束。A.C.E. 仅保存运营账户所需的已验证 SteamID 和公开资料字段。"
      },
      "footerLinks": "页脚中的外部网络图标是指向公开网站的目录链接。它们不是 A.C.E. 官方账号,也不嵌入追踪组件。"
    },
    "rights": {
      "title": "类 GDPR 权利",
      "before": "如果你所在地区赋予个人数据权利,你可以发送邮件至",
      "after": "申请访问、更正或删除你的 A.C.E. 账户数据。排位反作弊的硬件封禁并未启用;删除网站账户也不等同于 CS2 的 VAC 申诉。"
    },
    "cookies": {
      "title": "Cookie",
      "before": "请参阅",
      "link": "Cookie 政策",
      "after": "和同意面板。登录后需要必要的会话 Cookie。在实际添加追踪器之前,可选类别不会被使用。"
    },
    "controller": {
      "title": "数据控制者",
      "body": "A.C.E. Competitions Ltd. 公司注册号待公布。联系方式:support@ace-platform.gg。"
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Cookie 政策",
      "description": "A.C.E. Cookie 与遥测隐私审计。除非你同意预留的可选类别,否则仅使用必要的会话 Cookie。"
    },
    "kicker": "ACE-PRIVACY / COOKIES / 遥测审计",
    "title": "Cookie 政策",
    "lede": "本页面是 ace-platform.gg 的遥测隐私审计,说明本网站实际使用的 Cookie、为将来预留的类别,以及不收集的内容。",
    "audit": {
      "title": "100% 遥测审计(当前版本)",
      "body": "A.C.E. 不在本公开网站上运行广告像素、Google Analytics、Meta Pixel、指纹识别 SDK 或其他第三方行为追踪器。同意面板中可选的“分析追踪器”和“营销追踪器”仅为类别,勾选它们目前不会加载任何脚本。如果以后添加追踪器,它会先读取已保存的偏好,在你未同意时保持关闭。"
    },
    "essential": {
      "title": "必要 Cookie [必需 / 已锁定]",
      "session": {
        "label": "会话 Cookie",
        "body": "— 仅在 Steam OpenID 回调验证通过后设置。HttpOnly,页面 JavaScript 无法读取,用于保持你在 A.C.E. 的登录状态。"
      },
      "necessity": "这些 Cookie 是运营已验证账户所严格必需的,并非广告标识符。"
    },
    "analytics": {
      "title": "分析追踪器 [可选]",
      "before": "预留。未配置任何产品分析服务商。你的选择保存在本地的",
      "after": "中,以便未来的第一方使用指标遵从你的选择。"
    },
    "marketing": {
      "title": "营销追踪器 [可选]",
      "body": "预留。A.C.E. 不出售、出租或中介任何行为档案。本网站没有营销标签管理器。"
    },
    "change": {
      "title": "如何更改你的选择",
      "body": "使用页脚中的“Cookie 设置”,或在浏览器中清除网站数据。拒绝可选类别绝不会阻止 Steam 登录。"
    }
  }
};
