import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "定级典籍",
    "description": "A.C.E. 段位详解。每个问题都会展开关于评分和该段位规则的完整解答。典籍不会计入比赛结果。",
    "articleTitle": "{title} — 定级典籍"
  },
  "groups": {
    "ladder": {
      "title": "天梯",
      "kicker": "如何解读段位"
    },
    "points": {
      "title": "评分",
      "kicker": "唯一保存的数值"
    },
    "ranks": {
      "title": "各个段位",
      "kicker": "该标记的规则"
    },
    "desk": {
      "title": "比赛服务台",
      "kicker": "服务台能做什么、不能做什么"
    }
  },
  "index": {
    "title": "定级典籍",
    "lede": "十个段位,一个保存的数值。打开任意问题即可阅读完整解答。比赛服务台的内容在后续页面继续。",
    "status": "本典籍解释书面天梯规则。它不会计入比赛结果,也不会更改已保存的评分。",
    "searchLabel": "搜索典籍",
    "searchPlaceholder": "试试 1950、Recruit 或平局",
    "empty": "没有与该搜索匹配的条目。",
    "columnLabel": "A.C.E. 专栏 {n}",
    "pagerLabel": "典籍页面",
    "first": "首页",
    "previous": "上一页",
    "next": "下一页",
    "last": "末页",
    "pageOf": "第 {n} / {m} 页"
  },
  "article": {
    "breadcrumb": "A.C.E. · 定级典籍",
    "status": "本页解释书面天梯规则。它不会计入比赛结果,也不会更改已保存的评分。",
    "emblemAlt": "{name} 徽章,段位 {level}",
    "emblemCaption": "段位 {level} · {name} · {crystal}",
    "examples": {
      "heading": "引擎计算示例",
      "intro": "每一行都调用天梯所用的同一评分函数。输入值均为示例,不会保存到任何账户。",
      "columns": {
        "yourPoints": "你的分数",
        "otherSide": "对方",
        "result": "结果",
        "storedAfter": "保存后",
        "change": "变化"
      },
      "results": {
        "win": "胜",
        "loss": "负",
        "draw": "平"
      }
    },
    "turnLabel": "继续阅读典籍",
    "previous": "上一页",
    "next": "下一页",
    "alsoIn": "A.C.E. 其他内容",
    "backToBoard": "返回段位面板"
  },
  "rankArticle": {
    "title": "{name} — 段位 {level}",
    "band": {
      "heading": "区间",
      "range": "{name} 为段位 {level}。徽章上的水晶名称为 {crystal}。已保存评分在 {from} 至 {to} 之间即属于此段位。"
    },
    "code": {
      "heading": "段位规则",
      "hold": "保持:只要已保存的评分处于此区间内,账户就保持 {name}。段位由数值读出,而不是从菜单中选择。",
      "gateNext": "门槛:下一段位从 {next} 分开始。",
      "gateLast": "门槛:没有下一段位。区间止于 3,000 分。",
      "record": "记录:只有当已记录的结果改变评分时,段位才会变化。打开本页面不会记录结果。",
      "emblem": "徽章:图片用于标识段位。购买、皮肤预览或装饰都不会移动下限。"
    },
    "emblem": {
      "heading": "徽章的用途",
      "material": "此标记的材质设定为:{material}。这行文字描述的是美术,并非统计数据,也不是要求。",
      "sample": "段位面板上此徽章旁显示的胜率是示例标签。佩戴此段位无需达到该数值。"
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit 是入门铭牌。新账号不再从这里开始：而是从 Vanguard 的 1,200 Rating Points 开始。只有失分才会落到 Recruit。",
      "detail": "Operative 的门槛是 1,100。天梯表中 Recruit 从 0 开始,但引擎不会保存低于 100 的评分。在 100 至 1,099 之间,账户仍为 Recruit。"
    },
    "rank-2-operative": {
      "stance": "Operative 位于初始数值的正下方。跌破 1,200 的账号会先来到这里，然后才会到 Recruit。",
      "detail": "区间宽一百分,止于 1,199。Vanguard 从 1,200 开始。"
    },
    "rank-3-vanguard": {
      "stance": "Vanguard 是每个新账号的起点，1,200 Rating Points。从这里向上，才是天梯上真正的第一步。",
      "detail": "区间为 1,200 至 1,299。Specialist 从 1,300 开始。"
    },
    "rank-4-specialist": {
      "stance": "Specialist 是技艺段位。徽章上的水晶名称为 GOLD,天梯中保存的官方名称为 Specialist,二者是同一下限。",
      "detail": "区间为 1,300 至 1,399。Veteran 从 1,400 开始。"
    },
    "rank-5-veteran": {
      "stance": "Veteran 是中间标记。此下限之下有四个段位,之上有五个。",
      "detail": "区间为 1,400 至 1,499。Elite 从 1,500 开始。此徽章的水晶名称为 PLATINUM。"
    },
    "rank-6-elite": {
      "stance": "Elite 是引擎名称,DIAMOND 是同一徽章上的水晶名称。两者都不是第二个评分。",
      "detail": "区间为 1,500 至 1,599。Master 从 1,600 开始。"
    },
    "rank-7-master": {
      "stance": "Master 是第一个水晶名称与官方名称相同的段位。下限为 1,600。",
      "detail": "区间为 1,600 至 1,699。Grandmaster 从 1,700 开始。"
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster 是蓝宝石阶梯。下限为 1,700,宽度仍为一百分,Sovereign 在 1,800 等候。",
      "detail": "区间为 1,700 至 1,799。本页面上没有任何内容会消耗比赛来跨越它。"
    },
    "rank-9-sovereign": {
      "stance": "Sovereign 是 Legend 之前较宽的一级。水晶名称为 IMMORTAL,官方名称为 Sovereign。",
      "detail": "区间为 1,800 至 1,949,共 150 分而非 100 分。1,949 仍属于 Sovereign。Legend 从 1,950 开始。"
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend 是最后一个标记。水晶名称为 ACE ELITE,官方名称为 A.C.E. Legend。",
      "detail": "区间从 1,950 开始,止于引擎上限 3,000。没有第十一个段位。已保存的评分不能超过 3,000。"
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "什么是 A.C.E. 段位",
      "lede": "段位是包含你已保存评分的标记。十个标记覆盖整个天梯,从 Recruit 到 A.C.E. Legend。",
      "sections": [
        {
          "heading": "一个数值,一个标记",
          "paragraphs": [
            "账户保存一个竞技评分。天梯读取该数值,并返回该数值已达到下限的最高段位。你不会同时拥有两个段位。",
            "Recruit 为段位 1,A.C.E. Legend 为段位 10。官方名称即天梯中的名称,徽章上较短的词是同一段位的水晶名称。",
            "本典籍解释书面天梯规则。它不会计入比赛结果,也不会更改已保存的评分。"
          ]
        },
        {
          "heading": "下限如何分布",
          "paragraphs": [
            "Recruit 覆盖天梯的起点。Operative 从 1,100 开始。从 Vanguard 到 Grandmaster,每个新下限高 100 分:1,200、1,300、1,400、1,500、1,600,然后是 1,700。",
            "Sovereign 从 1,800 开始,一直持续到 1,949。A.C.E. Legend 从 1,950 开始。引擎上限为 3,000,因此 Legend 是最宽的区间。"
          ]
        },
        {
          "heading": "段位不是什么",
          "paragraphs": [
            "段位不是人数上限。Legend 是一个下限,而不是一千个账户的名单。",
            "段位不是奖品、皮肤或队列。公开网站可以显示标记,但不会运行写入新标记的比赛。"
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "官方名称与水晶名称",
      "lede": "每个段位都有两个名称。官方名称属于天梯,水晶名称是刻在徽章上的词。",
      "sections": [
        {
          "heading": "为何两者并存",
          "paragraphs": [
            "引擎和个人资料使用官方名称:Recruit、Operative、Vanguard、Specialist、Veteran、Elite、Master、Grandmaster、Sovereign、A.C.E. Legend。",
            "徽章还带有水晶名称:IRON、BRONZE、SILVER、GOLD、PLATINUM、DIAMOND、MASTER、GRANDMASTER、IMMORTAL、ACE ELITE。该名称属于美术,不会创造第十一个段位,也不会保存第二个数值。"
          ]
        },
        {
          "heading": "两者不同之处",
          "paragraphs": [
            "Specialist 的水晶名称为 GOLD,Veteran 为 PLATINUM,Elite 为 DIAMOND,Sovereign 为 IMMORTAL,A.C.E. Legend 为 ACE ELITE。在每种情况下,下限仍归属于官方名称。",
            "Master 和 Grandmaster 在两处使用相同的词。"
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "面板上的三个分级",
      "lede": "III、II、I 级是绘制在段位区间上的阅读辅助。账户不保存分级。",
      "sections": [
        {
          "heading": "保存的内容",
          "paragraphs": [
            "已登录账户保存段位等级和竞技评分。段位等级跟随评分变化。旁边没有分级字段。",
            "在段位面板上,所选段位的区间被分为三个显示阶段,便于直观看出该下限的底部、中部和顶部。III 级为区间低端,I 级为高端。"
          ]
        },
        {
          "heading": "标签是什么",
          "paragraphs": [
            "这些标签上的胜率和进度标记都是示例。它们不是第二个天梯,也不是你必须达成的目标。",
            "切换分级标签不会更改已保存的评分。只有已记录的结果才能做到,而本页面不会记录结果。"
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "什么无法改变段位",
      "lede": "标记跟随已保存的评分。网站上的其他任何内容都不会移动标记。",
      "sections": [
        {
          "heading": "引擎之外",
          "paragraphs": [
            "皮肤预览、商店卡片、订阅标签和装饰都不会增加评分。为方案付费不等于段位。",
            "打开段位面板、旋转徽章或阅读本典籍都不会计入比赛结果。",
            "举报、支持备注和赛事布局都不会改写已保存的评分。"
          ]
        },
        {
          "heading": "唯一途径",
          "paragraphs": [
            "书面途径是将已记录的比赛结果交由评分引擎处理。目前本网站没有任何公开页面会写入该结果。",
            "在结果出现之前,新账户保持初始评分,已有账户保留已保存的评分。"
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "什么是评分",
      "lede": "评分是保存在账户上的竞技数值。段位只是该数值所处的区间。",
      "sections": [
        {
          "heading": "保存的字段",
          "paragraphs": [
            "引擎版本为 {version}。新账户从 {startingRating} 分开始。保存的数值不会低于 {minRating},也不会高于 {maxRating}。",
            "登录后,个人资料和段位面板会读取此数值。未登录时,面板显示你所选徽章的定级下限。该下限只是示例,并非你的账户。"
          ]
        },
        {
          "heading": "该数值衡量什么",
          "paragraphs": [
            "引擎将你的评分与对方的平均评分进行比较。它不会为个人奖项、爆头率或道具使用单独计分。这些数据不属于此版本。",
            "数值越高,表示天梯预期你面对较低数值时胜率越高。段位名称是该尺度的公开解读。"
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "新账户的起点",
      "lede": "通过 Steam 登录会创建一个 1,200 Rating Points、第 3 段 Vanguard、无胜无负的账号。",
      "sections": [
        {
          "heading": "第一个标记",
          "paragraphs": [
            "1,200 是 Vanguard 的下限。Operative 和 Recruit 都在它下面，所以新账号从天梯前段的中间开始，而不是最底部。",
            "再次登录不会重置已保存的积分。记录的前 10 场比赛是定级赛：期间积分不能超过第 5 段。图鉴不会编造胜负记录。"
          ]
        },
        {
          "heading": "如何查看",
          "paragraphs": [
            "通过 Steam 登录后,控制面板和段位面板可以显示已保存的评分。如果数据库无法访问,页面会如实说明,而不是虚构一个数值。",
            "在记录的结果使积分离开 1,200–1,299 区间之前，起始段位一直是 Vanguard。本站目前不会写入此类结果。"
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "已记录的结果如何改变评分",
      "lede": "记录的胜负会以对方队伍的平均积分为基准衡量。对阵实力相当的队伍，胜利 +15，失败 −15。完整规则见段位页面。",
      "sections": [
        {
          "heading": "步长",
          "paragraphs": [
            "期望得分是引擎在比赛前仅根据双方积分给出的胜率。积分相同时为一半，所以胜利值 15 Rating Points，失败扣 15。",
            "对阵更高积分时，胜利超过 15，失败扣得更少；对阵更低积分时则相反。胜利始终获得 8 到 25，失败始终扣除 8 到 25。第 7–9 段胜利得分乘以 0.8，第 10 段乘以 0.7，因此登顶需要更久。积分保持在 100 到 3,000 之间。",
            "在团队结果中，每位玩家都以对方队伍的平均积分为基准衡量。计划在服务器记录击杀后推出 2 RP 的本场 MVP 奖励；在此之前不发放个人奖励。"
          ]
        },
        {
          "heading": "平局",
          "paragraphs": [
            "平局不改变任何东西：每位玩家保持原有积分。弃赛或中途退出无论结果如何都扣 50 RP。",
            "本页面的表格是引擎对示例输入的计算。这些行不是已保存的比赛,也不是你的账户。"
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "下限、上限与跳级",
      "lede": "保存的数值止于 100 和 3,000。段位始终跟随数值,因此无法通过按钮跳过段位。",
      "sections": [
        {
          "heading": "止点",
          "paragraphs": [
            "在 100 分时失败仍为 100。在 3,000 分时获胜仍为 3,000。天梯中 Recruit 的下限写为 0,但保存的数值从不使用 100 以下的部分。",
            "1,949 为 Sovereign,1,950 为 A.C.E. Legend。两者之间没有中间标记。"
          ]
        },
        {
          "heading": "不会跳级",
          "paragraphs": [
            "如果某个已记录的结果使数值从 1,050 跳到 1,260,账户将佩戴 Vanguard,因为 1,260 处于该区间内。中间段位不会作为单独的晋级排队处理,数值只读取一次。",
            "本网站没有任何页面会执行这种跳跃。此示例仅说明天梯如何读取数值。"
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "比赛链接会出现在哪里",
      "lede": "比赛链接是游戏服务器的地址。本网站不会发放此类链接。",
      "sections": [
        {
          "heading": "可以打开的服务台",
          "paragraphs": [
            "游戏页面显示十名玩家的布局和“寻找比赛”按钮。该按钮保持关闭,无法开启《反恐精英 2》服务器,也不会向任何人提供地址。",
            "网站上的人数并不等于游戏内的人数。比赛人数为 0。"
          ]
        },
        {
          "heading": "链接日后会放在哪里",
          "paragraphs": [
            "如果存在比赛服务器,地址及其密码将在十名玩家接受后显示在比赛服务台上,玩家通过 Steam 加入。本网站不保存任何地址,也不生成密码。",
            "Steam 登录用于绑定账户,不会把玩家送进地图。"
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "什么是排位服务台",
      "lede": "排位服务台是游戏页面上的 5v5 布局。它是一个关闭的服务台,而非开放的队列。",
      "sections": [
        {
          "heading": "显示的内容",
          "paragraphs": [
            "两方各五个席位,第一个席位标有队长。旁边的地图列表和聊天栏属于同一布局。",
            "该页面上的安全项目都标有状态。目前没有一项是正在运行的检查;路线图请参见 /anti-cheat。"
          ]
        },
        {
          "heading": "服务台不做什么",
          "paragraphs": [
            "“寻找比赛”不会搜索对手,也不会改变评分。账户的段位仍是已保存的数值,由本典籍中的天梯读取。",
            "Legend 之上没有单独的顶级队列。A.C.E. Legend 是最后一个标记,从 1,950 分开始。"
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "来自比赛服务台的帮助",
      "lede": "本网站的支持是书面服务台,不会在比赛中开启实时语音线路。",
      "sections": [
        {
          "heading": "支持页面的作用",
          "paragraphs": [
            "支持页面列出各服务台并提供工单按钮。选择该按钮不会创建案例,也不会在比赛中联系到工作人员,因为目前没有进行中的比赛。",
            "规则问题请查阅 /rules 的竞赛规则,天梯问题请查阅本典籍。"
          ]
        },
        {
          "heading": "比赛存在时的申诉",
          "paragraphs": [
            "书面规则规定,队长可以在下一张地图开始前提出申诉,注明地图、回合和条款。本网站不保存录像,也不运行游戏服务器,因此目前无处提交此类申诉。",
            "布局中的比分并非实际进行的比赛。工作人员只会在真实系列赛结束后记录系列赛结果。"
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "等待十名玩家",
      "lede": "竞技地图需要十名首发。目前服务台不负责这种等待。",
      "sections": [
        {
          "heading": "书面时钟",
          "paragraphs": [
            "当比赛公布开始时间后,每方五名首发须在开赛前 15 分钟到位。这句话出自竞赛规则。由于没有公布任何比赛,本网站上的时钟不会启动。",
            "游戏页面上显示的名称只是示例,并非正在排队的真人。"
          ]
        },
        {
          "heading": "你观看时不会发生的事",
          "paragraphs": [
            "页面不会预留服务器、发送推送或进行接受倒计时。离开页面不算放弃比赛,因为你并不在比赛中。"
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "服务台上的队长",
      "lede": "每方由一名队长代表。大厅角色将随竞技测试版启用。",
      "sections": [
        {
          "heading": "规则分配的职责",
          "paragraphs": [
            "队长负责禁选地图、暂停和申诉。其他首发负责比赛。替补只能在地图之间上场。",
            "单图赛制中,队长每次禁用一张地图,直到只剩一张。地图池为 Ancient、Anubis、Dust II、Inferno、Mirage、Nuke 和 Train。种子较高的一方为 A 队,并选择先禁或后禁;种子相同时以掷硬币决定。今天没有开放的禁选。"
          ]
        },
        {
          "heading": "暂停",
          "paragraphs": [
            "暂停仅在存在比赛服务器时适用。这里没有。成文规定为每队每张地图三次 30 秒战术暂停,加时赛再加一次,以及合计 10 分钟技术暂停。全文见 /rules。",
            "在战队页面上,队长也是可以发送阵容邀请的成员。该邀请与比赛大厅无关。"
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "当一方未准备好时",
      "lede": "竞赛规则规定了已公布开始时间的比赛的弃权判负。本网站不会作出此类判负。",
      "sections": [
        {
          "heading": "书面规则",
          "paragraphs": [
            "五名首发须在公布的开始时间前 15 分钟准备就绪。比赛存在时,开赛 15 分钟后仍缺人的一方将被判系列赛弃权负。如双方均缺席,双方都将被移除,由工作人员记录该席位。",
            "以少于五名合格首发开始一张地图且没有可上场替补的战队,将被判该地图弃权负。"
          ]
        },
        {
          "heading": "本网站不会做的事",
          "paragraphs": [
            "这里没有任何机制会监视大厅并自行记录弃权负。游戏页面上的按钮无法认输一张从未加载的地图。",
            "赛事树布局中的比分既不是实际进行的比赛,也不是弃权负。"
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "参加 100 支战队的淘汰赛",
      "lede": "赛事页面是一棵 100 支战队的对阵树。报名为 0 / 100,尚未开放报名。",
      "sections": [
        {
          "heading": "可以打开的内容",
          "paragraphs": [
            "点击对阵树上的战队可查看其阵容,然后打开玩家资料。空席位上的名称为示例,并非已接受的报名。",
            "对阵树不会分配服务器,也不会发送比赛链接。"
          ]
        },
        {
          "heading": "报名开放后的轮空",
          "paragraphs": [
            "针对未来报名的书面规则是:最先通过审核的 28 支战队跳过第一轮。该轮空不是奖品,在报名停留在 0 / 100 时也无法申领。",
            "系列赛长度、地图池和申诉详见 /rules 的竞赛规则。"
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "阵容如何组建",
      "lede": "队长邀请已有 A.C.E. 账户的玩家。没有公开的分享链接,也绝不会索要 Steam 密码。",
      "sections": [
        {
          "heading": "现有的邀请功能",
          "paragraphs": [
            "在战队页面上,已登录的队长粘贴 SteamID64 或 A.C.E. 账户 ID。该账户必须已通过 Steam OpenID 绑定。数据库接受后,服务器会写入一条待处理邀请。",
            "阵容包括队长在内共五名玩家。队长不能邀请自己的账户。已在阵容中的玩家会被拒绝。如果数据库宕机,邀请会失败且不会保存。"
          ]
        },
        {
          "heading": "邀请不是什么",
          "paragraphs": [
            "邀请不会寄送信件,不会开启私人大厅,也不会生成可发布的链接。它不会把战队放入淘汰赛。",
            "淘汰赛规则允许在报名成立后登记两名替补。目前尚未开放报名,因此这些席位不是你今天就能使用的资格。"
          ]
        }
      ]
    }
  }
};
