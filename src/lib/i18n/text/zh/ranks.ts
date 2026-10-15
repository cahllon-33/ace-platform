import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "meta": {
    "title": "竞技段位",
    "description": "A.C.E. 的十个段位,从 Iron Recruit 到 A.C.E. Legend,含分级与评分下限。"
  },
  "hero": {
    "kicker": "定级",
    "title": "竞技段位",
    "lede": "从 Recruit 到 A.C.E. Legend 共十个段位,每个段位含 {divisions} 分级。拖动或使用方向键旋转徽章。登录后显示你自己的评分,否则显示各段位下限。"
  },
  "codexLink": "打开定级典籍",
  "document": {
    "title": "十段位定级文档",
    "body": "引擎名称为官方天梯名称。水晶名称是大厅美术。榜单上的胜率标签在排位匹配上线前均为示例数据。付费装饰绝不会让玩家在段位之间移动。",
    "level": "等级 {level} · {crystal}",
    "detail": "最低评分 {rating}。材质设定:{material}。"
  },
  "tiers": {
    "1": {
      "tagline": "入门定级",
      "material": "粗铁 / 黑曜石板材质"
    },
    "2": {
      "tagline": "前线行动员",
      "material": "拉丝青铜水晶核心"
    },
    "3": {
      "tagline": "先锋锋线",
      "material": "带深红底色的玫瑰金碎片"
    },
    "4": {
      "tagline": "精准工艺",
      "material": "铬银钻石碎块"
    },
    "5": {
      "tagline": "老练核心",
      "material": "做旧黄铜熔融核心光环"
    },
    "6": {
      "tagline": "黄金标准",
      "material": "耀眼的金色水晶光芒"
    },
    "7": {
      "tagline": "青色升腾",
      "material": "青蓝色等离子水晶矩阵"
    },
    "8": {
      "tagline": "蓝宝石风暴",
      "material": "高亮蓝宝石闪电水晶核心"
    },
    "9": {
      "tagline": "虚空之冠",
      "material": "深邃宇宙紫色星辰碎片核心"
    },
    "10": {
      "tagline": "精英中的精英",
      "material": "奢华的熔金光辉王冠框架"
    }
  },
  "board": {
    "selectEmblem": "选择 A.C.E. {name} 段位徽章,等级 {level}",
    "emblemAlt": "A.C.E. 定制 3D 水晶等级 {level} {crystal} {name} 徽章个人资料标志",
    "emblemAltLegend": "A.C.E. 定制 3D 水晶等级 {level} 徽章个人资料标志",
    "premium": "最高段位"
  },
  "division": {
    "label": "{division} 级",
    "select": "选择 {division} 级",
    "summary": "每段 {divisions} 级 / 共 {levels} 个等级"
  },
  "card": {
    "rank": "段位 {level}",
    "targetWinRate": "目标胜率 {winRate}",
    "calibrationTarget": "定级目标",
    "floor": "下限",
    "samplesNote": "各段位的目标数值。",
    "progressMockup": "进度"
  },
  "turntable": {
    "stageLabel": "{name} 环绕徽章。拖动可旋转。",
    "dragToRotate": "拖动旋转",
    "rankSystem": "段位系统"
  },
  "emblem": {
    "kicker": "定级标记",
    "rankLabel": "段位 {level} · {name}"
  },
  "calibration": {
    "placementNote": "已根据保存的胜负记录填充 {complete} / {total} 个定级标记。这些节点不会开始比赛。"
  }
};
