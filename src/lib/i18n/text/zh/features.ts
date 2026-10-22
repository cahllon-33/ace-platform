import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "功能",
      "description": "A.C.E 反作弊内核架构、生物识别人脸扫描绑定和十级技能定级的规格说明。这些系统未在本网站上线。"
    },
    "header": {
      "kicker": "ACE-FEATURES / KERNEL / FACE-SCAN / CALIBRATION",
      "title": "平台功能规格",
      "lede": "本页面是 A.C.E 三个规划系统的技术蓝图:自主反作弊内核、生物识别人脸扫描绑定,以及十级技能定级天梯。本页面没有运行中的内核、运行中的摄像头产品或运行中的排位队列。Steam OpenID、5v5 战队、对阵表布局和 Elo 式评分计算已存在于此代码库中。专用 CS2 服务器、支付、奖品和可下载的完整性客户端尚不存在。"
    },
    "kernel": {
      "title": "反作弊内核架构",
      "paragraphs": [
        "规格中的自主安全外壳(Autonomous Secure Shell)是一个与硬件绑定的完整性客户端,将在玩家电脑上与《反恐精英 2》并行运行,并向 A.C.E 托管服务器报告带签名的 ALLOW 或 DENY 状态。内核采用故障关闭设计:如果客户端缺失、停止、过期、被伪造或未经验证,将拒绝进入排位。浏览器绝不作为资格判定依据。正因如此,本网站上的排位“寻找比赛”已处于关闭状态。",
        "规划的内核层包括:将经过验证的 64 位 SteamID 与 A.C.E 账户绑定的用户态握手、硬件标识符(HWID)认证、已知作弊家族的特征监控列表,以及由共享密钥保护的服务器间资格通道。按照规格,一旦检测到作弊特征、拒绝完整性检查或伪造设备标识符,账户状态将立即变为 BANNED 或 PERM_BANNED;在存在计费产品时,已预付的订阅时长将全部作废且不予退款。本网站不附带任何此类客户端。“即将推出”的下载卡片仅为设计预览。"
      ],
      "stats": [
        {
          "label": "内核状态",
          "value": "开发中"
        },
        {
          "label": "排位队列",
          "value": "故障关闭"
        },
        {
          "label": "HWID 存储",
          "value": "本网站不收集"
        }
      ]
    },
    "faceScan": {
      "title": "生物识别人脸扫描绑定",
      "paragraphs": [
        "人脸扫描是规格中规划的未来身份绑定层,而不是本网站上的摄像头产品。规划设计仅在获得明确同意并经过单独法律审查后,才会将经过活体检测的面部模板绑定到已持有经服务器验证 SteamID 的同一 A.C.E 账户。其目的是防止为规避既有限制而共享账户。A.C.E 目前不收集面部图像、面部特征向量、邮箱地址或硬件指纹。现行隐私原则为严格必要:仅限经过验证的 64 位 SteamID 和公开的 Steam 显示名称。",
        "如果将来实现人脸扫描,它不会取代 Steam OpenID,不会用于出售行为广告,也不会单独开启排位队列。进入排位仍需要经过验证的反作弊流程。在该审查完成前,大厅中的任何人脸扫描面板都只是设计预览。"
      ]
    },
    "calibration": {
      "title": "十级技能定级",
      "intro": "Competitive Calibration 使用已公布的 A.C.E 积分规则（版本 {version}：步长 {kFactor}，尺度 {scale}）。新账号从第 3 段（Vanguard）、FREE 订阅、ACTIVE 状态和 {startingRating} 竞技积分开始。大厅中的水晶名称只是视觉别名。付费外观永远买不到积分、更弱的对手、128 tick 服务器或排队优先权。目前没有在售的 128 tick 产品。",
      "table": {
        "level": "等级",
        "engineName": "引擎名称",
        "crystalAlias": "水晶名称",
        "minRating": "最低评分"
      },
      "divisions": {
        "before": "大厅中的 I、II、III 级为示例标签,只会改变布局数值。不存在按分级匹配的功能。3D 旋转展台请参见 ",
        "middle": ",具有约束力的竞赛文本请参见 ",
        "after": "。"
      }
    }
  },
  "loot": {
    "kicker": "装饰 · 即将推出",
    "title": "A.C.E 战利品架构 — 武器掉落",
    "lede": "A.C.E 原创涂装,将随商店推出。装饰绝不影响比赛。",
    "checkout": "结账 · Paddle"
  },
  "identityPreview": {
    "badge": "预览 — 未确认",
    "cards": {
      "faceScan": {
        "title": "实时人脸扫描已验证",
        "copy": "身份活体检测是计划中的第三方检查。目前不收集任何生物识别数据。"
      },
      "hardwareId": {
        "title": "硬件 ID 已绑定",
        "copy": "设备绑定是计划中的完整性信号。目前不收集任何硬件标识符。"
      }
    }
  },
  "preview": {
    "fallbackTitle": "预览",
    "kicker": "即将推出",
    "returnHome": "返回首页",
    "pages": {
      "support": {
        "title": "支持",
        "body": "我们的公开支持服务台将随竞技测试版开放。"
      },
      "anti-cheat": {
        "title": "反作弊概述",
        "body": "A.C.E 目前没有可用的反作弊产品。在真正的集成出现前,排位匹配保持关闭。"
      },
      "download-client": {
        "title": "下载客户端",
        "body": "目前没有可下载的 A.C.E 桌面客户端。原生客户端不在当前网页阶段之内。"
      },
      "mobile-app": {
        "title": "移动应用",
        "body": "A.C.E 移动应用已列入路线图。"
      },
      "news": {
        "title": "新闻",
        "body": "A.C.E 新闻中心即将开放。"
      },
      "about": {
        "title": "关于我们",
        "body": "A.C.E 是一个处于公开预览阶段的独立《反恐精英 2》竞技网站,与 Valve 无关联。"
      },
      "advertising": {
        "title": "广告",
        "body": "合作与广告咨询即将开放。"
      },
      "developers": {
        "title": "开发者",
        "body": "目前尚无公开的开发者计划。本代码库中的服务器资格 API 是内部适配器,而非合作伙伴 SDK。"
      },
      "press": {
        "title": "媒体",
        "body": "媒体资料包即将推出。"
      },
      "jobs": {
        "title": "招聘",
        "body": "开放职位将在此列出。"
      },
      "terms": {
        "title": "服务条款",
        "body": "正式的服务条款发布于 /terms。赛事规则手册位于 /rules。"
      },
      "privacy": {
        "title": "隐私政策",
        "body": "隐私政策发布于 /privacy。Steam OpenID 是唯一的登录方式;绝不收集 Steam 密码。"
      },
      "eula": {
        "title": "反作弊 EULA",
        "body": "由于反作弊未启用,因此没有反作弊 EULA。排位保持关闭。"
      }
    }
  }
};
