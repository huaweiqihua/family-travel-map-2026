const itinerary = [
  {
    day: 1,
    date: "7/20",
    title: "上海虹桥 → 洛阳龙门",
    mode: "高铁",
    distance: "约 6.5 小时",
    stay: "洛阳龙门站/泉舜片区，¥350-650",
    food: "牛肉汤、洛阳水席、不翻汤",
    budget: "车票约 ¥520+/成人",
    coords: [
      [31.1943, 121.3181],
      [34.5937, 112.4599],
    ],
  },
  {
    day: 2,
    date: "7/21",
    title: "洛阳一日：龙门石窟 + 洛阳博物馆",
    mode: "市内",
    distance: "20-40 km",
    stay: "继续住洛阳，¥350-650",
    food: "牛肉汤、牡丹燕菜、浆面条",
    budget: "龙门石窟约 ¥90/成人",
    coords: [[34.5593, 112.4796]],
  },
  {
    day: 3,
    date: "7/22",
    title: "洛阳 → 林州石板岩",
    mode: "自驾",
    distance: "约 270 km / 3.5 小时",
    stay: "石板岩民宿，¥250-600",
    food: "扁粉菜、皮渣、太行农家菜",
    budget: "租车+油费过路费约 ¥900-1,300/日均",
    coords: [
      [34.6197, 112.454],
      [36.0895, 113.8529],
    ],
  },
  {
    day: 4,
    date: "7/23",
    title: "林州太行大峡谷",
    mode: "自驾",
    distance: "景区内 30-60 km",
    stay: "石板岩民宿，¥250-600",
    food: "柴鸡、手工面、山野菜",
    budget: "套票常见 ¥140-160/成人",
    coords: [[36.087, 113.851]],
  },
  {
    day: 5,
    date: "7/24",
    title: "林州 → 王莽岭/锡崖沟 → 晋城",
    mode: "自驾",
    distance: "约 200 km / 5 小时",
    stay: "晋城中端酒店，¥250-450",
    food: "高平烧豆腐、羊汤、饸饹面",
    budget: "王莽岭套票约 ¥120-170/成人",
    coords: [
      [36.087, 113.851],
      [35.6965, 113.583],
      [35.491, 112.852],
    ],
  },
  {
    day: 6,
    date: "7/25",
    title: "晋城/高平古建 → 长治",
    mode: "自驾",
    distance: "160-220 km / 3-4 小时",
    stay: "长治中端酒店，¥250-500",
    food: "炒饼、羊汤、和子饭",
    budget: "小景点多为 ¥20-50/成人",
    coords: [
      [35.491, 112.852],
      [35.5764, 112.894],
      [35.8011, 112.923],
      [36.191, 113.114],
    ],
  },
  {
    day: 7,
    date: "7/26",
    title: "长治 ↔ 八泉峡",
    mode: "自驾",
    distance: "160-200 km / 3-4 小时",
    stay: "长治或壶关，¥250-500",
    food: "农家炖土鸡、太行菌菇",
    budget: "综合票常见 ¥180-300/成人",
    coords: [
      [36.191, 113.114],
      [36.1645, 113.5633],
    ],
  },
  {
    day: 8,
    date: "7/27",
    title: "长治 → 洪洞广胜寺 → 临汾",
    mode: "自驾",
    distance: "约 300 km / 4.5 小时",
    stay: "临汾中端酒店，¥250-450",
    food: "牛肉丸子面、羊杂割",
    budget: "广胜寺约 ¥70/成人",
    coords: [
      [36.191, 113.114],
      [36.278, 111.655],
      [36.088, 111.519],
    ],
  },
  {
    day: 9,
    date: "7/28",
    title: "临汾 → 隰县小西天 → 壶口/吉县",
    mode: "自驾",
    distance: "约 260 km / 5 小时",
    stay: "吉县或临汾，¥250-600",
    food: "玉露香梨、黄河鲤鱼、饸饹面",
    budget: "小西天约 ¥35；壶口约 ¥100+",
    coords: [
      [36.088, 111.519],
      [36.6948, 110.9425],
      [36.145, 110.684],
    ],
  },
  {
    day: 10,
    date: "7/29",
    title: "吉县/临汾 → 平遥",
    mode: "自驾",
    distance: "300-340 km / 4.5-5.5 小时",
    stay: "平遥客栈/城外酒店，¥250-600",
    food: "平遥牛肉、碗托、栲栳栳",
    budget: "平遥古城通票约 ¥125/成人",
    coords: [
      [36.145, 110.684],
      [37.189, 112.176],
    ],
  },
  {
    day: 11,
    date: "7/30",
    title: "平遥周边：双林寺 + 镇国寺",
    mode: "自驾",
    distance: "40-80 km / 1-2 小时",
    stay: "平遥，¥250-600",
    food: "过油肉、泡油糕",
    budget: "双林寺约 ¥35；镇国寺约 ¥25",
    coords: [
      [37.189, 112.176],
      [37.144, 112.135],
      [37.2905, 112.256],
    ],
  },
  {
    day: 12,
    date: "7/31",
    title: "平遥 → 太原",
    mode: "自驾",
    distance: "约 120 km / 2 小时",
    stay: "太原柳巷/南站，¥350-700",
    food: "刀削面、头脑、羊杂割",
    budget: "晋祠约 ¥80/成人",
    coords: [
      [37.189, 112.176],
      [37.7066, 112.441],
      [37.871, 112.549],
    ],
  },
  {
    day: 13,
    date: "8/1",
    title: "太原 → 南禅寺/佛光寺 → 五台山",
    mode: "自驾",
    distance: "约 330 km / 5-6 小时",
    stay: "台怀镇，¥450-900",
    food: "素斋、台蘑炖鸡",
    budget: "五台山景区约 ¥135/成人",
    coords: [
      [37.871, 112.549],
      [38.7255, 113.167],
      [38.8647, 113.315],
      [39.005, 113.596],
    ],
  },
  {
    day: 14,
    date: "8/2",
    title: "五台山 → 应县木塔 → 悬空寺 → 大同",
    mode: "自驾",
    distance: "约 320 km / 5-6 小时",
    stay: "大同古城/南站，¥300-650",
    food: "浑源凉粉、大同刀削面",
    budget: "木塔约 ¥50；悬空寺登临另约 ¥100",
    coords: [
      [39.005, 113.596],
      [39.554, 113.19],
      [39.66, 113.707],
      [40.076, 113.3],
    ],
  },
  {
    day: 15,
    date: "8/3",
    title: "大同：云冈石窟 + 古城寺庙",
    mode: "市内",
    distance: "50-80 km",
    stay: "大同，¥300-650",
    food: "羊杂、烧麦、兔头",
    budget: "云冈约 ¥120；华严寺约 ¥50",
    coords: [
      [40.1093, 113.1221],
      [40.0932, 113.294],
    ],
  },
  {
    day: 16,
    date: "8/4",
    title: "大同 → 北京 → 海拉尔/乌兰浩特",
    mode: "高铁 + 飞机",
    distance: "高铁约 2.5 小时，飞行约 2 小时",
    stay: "海拉尔或乌兰浩特，¥300-650",
    food: "手把肉、奶茶、俄式西餐",
    budget: "机票暑期约 ¥700-1,600/人",
    coords: [
      [40.076, 113.3],
      [40.0799, 116.6031],
      [49.205, 119.825],
    ],
  },
  {
    day: 17,
    date: "8/5",
    title: "海拉尔/乌兰浩特 → 阿尔山",
    mode: "自驾",
    distance: "280-330 km / 4-5 小时",
    stay: "阿尔山/伊尔施，¥500-1,200",
    food: "铁锅炖、牛羊肉、东北菜",
    budget: "阿尔山段 SUV 租车约 ¥600-1,200/日",
    coords: [
      [49.205, 119.825],
      [47.177, 119.943],
    ],
  },
  {
    day: 18,
    date: "8/6",
    title: "阿尔山国家森林公园",
    mode: "自驾 + 景交",
    distance: "景区内 80-120 km",
    stay: "阿尔山，¥500-1,200",
    food: "山野菜、冷水鱼、蘑菇",
    budget: "门票+景交常见约 ¥275-285/成人",
    coords: [[47.292, 120.416]],
  },
  {
    day: 19,
    date: "8/7",
    title: "阿尔山周边：白狼峰/森林轻徒步",
    mode: "自驾",
    distance: "100-180 km / 2-4 小时",
    stay: "阿尔山，¥500-1,200",
    food: "锅包肉、地三鲜、林区果品",
    budget: "白狼峰等按开放票价购买",
    coords: [
      [47.177, 119.943],
      [47.06, 120.03],
    ],
  },
  {
    day: 20,
    date: "8/8",
    title: "阿尔山 → 海拉尔/乌兰浩特还车",
    mode: "自驾",
    distance: "280-330 km / 4-5 小时",
    stay: "机场城市，¥300-650",
    food: "烤羊排、奶皮子、牛肉干",
    budget: "还车前加满油，留出异地还车费",
    coords: [
      [47.177, 119.943],
      [49.205, 119.825],
    ],
  },
  {
    day: 21,
    date: "8/9",
    title: "飞回上海",
    mode: "飞机",
    distance: "直飞或中转，约 3-6 小时",
    stay: "回家",
    food: "机场简餐",
    budget: "暑期约 ¥900-2,000/人",
    coords: [
      [49.205, 119.825],
      [31.1443, 121.8083],
    ],
  },
];

const places = [
  {
    name: "上海虹桥站",
    type: "transport",
    category: "transport",
    day: "D1",
    coords: [31.1943, 121.3181],
    intro: "全程从高铁开始，避免第一天 1000 公里长途驾驶。",
    ticket: "上海虹桥至洛阳龙门二等座约 ¥520+/成人",
    stay: "前一晚住上海家中即可",
    food: "上车前准备水和简餐",
  },
  {
    name: "龙门石窟",
    type: "古建/石窟",
    category: "heritage",
    day: "D2",
    coords: [34.5593, 112.4796],
    intro: "北魏至唐代石窟艺术代表，适合作为全程第一处大体量文化景点。",
    ticket: "约 ¥90/成人，旺季建议预约",
    stay: "洛阳龙门站或泉舜片区 ¥350-650",
    food: "牛肉汤、洛阳水席、不翻汤",
  },
  {
    name: "洛阳博物馆",
    type: "博物馆",
    category: "heritage",
    day: "D2",
    coords: [34.62, 112.444],
    intro: "用半天补齐洛阳历史脉络，适合孩子理解后续古建和石窟。",
    ticket: "免费预约",
    stay: "洛阳 ¥350-650",
    food: "牡丹燕菜、浆面条",
  },
  {
    name: "石板岩镇",
    type: "住宿基地",
    category: "hotel",
    day: "D3-D4",
    coords: [36.0895, 113.8529],
    intro: "林州太行大峡谷核心住宿点，适合把山路车程降到最低。",
    ticket: "无",
    stay: "民宿/山景客栈 ¥250-600",
    food: "扁粉菜、皮渣、太行农家菜",
  },
  {
    name: "林州太行大峡谷",
    type: "山水",
    category: "nature",
    day: "D4",
    coords: [36.087, 113.851],
    intro: "桃花谷玩水、太行天路看峡谷，亲子体感比单纯赶路好很多。",
    ticket: "套票常见 ¥140-160/成人",
    stay: "石板岩 ¥250-600",
    food: "柴鸡、手工面、山野菜",
  },
  {
    name: "王莽岭/锡崖沟",
    type: "山水/挂壁公路",
    category: "nature",
    day: "D5",
    coords: [35.6965, 113.583],
    intro: "太行山脊和挂壁公路体验，山路耗时会明显大于直线距离。",
    ticket: "套票约 ¥120-170/成人",
    stay: "晋城 ¥250-450",
    food: "羊汤、饸饹面",
  },
  {
    name: "泽州玉皇庙",
    type: "黑悟空古建",
    category: "heritage",
    day: "D6",
    coords: [35.5764, 112.894],
    intro: "晋东南古建代表，二十八宿彩塑辨识度很高，是山西古建段的精彩开场。",
    ticket: "常见 ¥20-50/成人，出发前以景区为准",
    stay: "长治 ¥250-500",
    food: "高平烧豆腐",
  },
  {
    name: "高平铁佛寺",
    type: "黑悟空古建",
    category: "heritage",
    day: "D6",
    coords: [35.8011, 112.923],
    intro: "小而精的古建点，适合和玉皇庙、崇庆寺组合成晋东南古建日。",
    ticket: "常见 ¥20-50/成人，需确认开放",
    stay: "长治 ¥250-500",
    food: "高平烧豆腐、烧麦",
  },
  {
    name: "八泉峡",
    type: "山水/玩水",
    category: "nature",
    day: "D7",
    coords: [36.1645, 113.5633],
    intro: "峡谷、栈道、游船、索道组合，适合把太行山的玩水需求放足。",
    ticket: "综合票常见 ¥180-300/成人",
    stay: "长治或壶关 ¥250-500",
    food: "农家炖土鸡、菌菇",
  },
  {
    name: "广胜寺",
    type: "古建",
    category: "heritage",
    day: "D8",
    coords: [36.278, 111.655],
    intro: "飞虹塔和水神庙壁画很值得停留，是临汾段的高质量古建点。",
    ticket: "约 ¥70/成人",
    stay: "临汾 ¥250-450",
    food: "牛肉丸子面",
  },
  {
    name: "隰县小西天",
    type: "黑悟空古建",
    category: "heritage",
    day: "D9",
    coords: [36.6948, 110.9425],
    intro: "明代悬塑密度极高，是本次黑悟空取景地主题的核心点。",
    ticket: "约 ¥35/成人，实名预约",
    stay: "吉县或临汾 ¥250-600",
    food: "玉露香梨、饸饹面",
  },
  {
    name: "壶口瀑布",
    type: "山水",
    category: "nature",
    day: "D9",
    coords: [36.145, 110.684],
    intro: "黄河大景观，适合与小西天组成同日，但当天会比较满。",
    ticket: "约 ¥100+小交通",
    stay: "吉县或临汾 ¥250-600",
    food: "黄河鲤鱼、吉县苹果",
  },
  {
    name: "平遥古城",
    type: "古城",
    category: "heritage",
    day: "D10-D11",
    coords: [37.189, 112.176],
    intro: "夜景、票号、县衙和城墙适合慢逛，建议住一晚。",
    ticket: "通票约 ¥125/成人",
    stay: "客栈/城外酒店 ¥250-600",
    food: "平遥牛肉、碗托、栲栳栳",
  },
  {
    name: "双林寺",
    type: "彩塑古建",
    category: "heritage",
    day: "D11",
    coords: [37.144, 112.135],
    intro: "彩塑密集且观赏性强，孩子也容易被造像吸引。",
    ticket: "约 ¥35/成人",
    stay: "平遥 ¥250-600",
    food: "碗托、过油肉",
  },
  {
    name: "镇国寺",
    type: "古建",
    category: "heritage",
    day: "D11",
    coords: [37.2905, 112.256],
    intro: "五代木构价值很高，和双林寺一起构成平遥周边半日古建线。",
    ticket: "约 ¥25/成人",
    stay: "平遥 ¥250-600",
    food: "泡油糕",
  },
  {
    name: "晋祠",
    type: "古建园林",
    category: "heritage",
    day: "D12",
    coords: [37.7066, 112.441],
    intro: "太原最值得留给家庭慢看的古建园林，水系和殿宇组合很舒服。",
    ticket: "约 ¥80/成人",
    stay: "太原 ¥350-700",
    food: "刀削面、头脑、羊杂割",
  },
  {
    name: "南禅寺",
    type: "唐代木构",
    category: "heritage",
    day: "D13",
    coords: [38.7255, 113.167],
    intro: "中国现存早期木构代表之一，体量不大但历史分量极重。",
    ticket: "以现场为准",
    stay: "台怀镇 ¥450-900",
    food: "台蘑、素斋",
  },
  {
    name: "佛光寺",
    type: "唐代木构",
    category: "heritage",
    day: "D13",
    coords: [38.8647, 113.315],
    intro: "山西古建高光，建议请讲解或提前做功课。",
    ticket: "以现场为准",
    stay: "台怀镇 ¥450-900",
    food: "台蘑炖鸡",
  },
  {
    name: "应县木塔",
    type: "古建",
    category: "heritage",
    day: "D14",
    coords: [39.554, 113.19],
    intro: "辽代木塔，结构和视觉冲击都很强，是北上大同途中必停。",
    ticket: "约 ¥50/成人",
    stay: "大同 ¥300-650",
    food: "浑源凉粉",
  },
  {
    name: "悬空寺",
    type: "古建/山体",
    category: "heritage",
    day: "D14",
    coords: [39.66, 113.707],
    intro: "建筑贴附崖壁，登临票限量，旺季一定早到或提前预约。",
    ticket: "入园低价，登临另约 ¥100",
    stay: "大同 ¥300-650",
    food: "浑源凉粉",
  },
  {
    name: "云冈石窟",
    type: "石窟",
    category: "heritage",
    day: "D15",
    coords: [40.1093, 113.1221],
    intro: "北魏石窟艺术重镇，建议上午去，避开午后暴晒。",
    ticket: "约 ¥120/成人，线上实名预约",
    stay: "大同 ¥300-650",
    food: "大同刀削面、羊杂",
  },
  {
    name: "华严寺",
    type: "古建",
    category: "heritage",
    day: "D15",
    coords: [40.0932, 113.294],
    intro: "大同古城内的辽金古建代表，和云冈形成一日文化密度。",
    ticket: "约 ¥50/成人",
    stay: "大同 ¥300-650",
    food: "烧麦、兔头",
  },
  {
    name: "海拉尔机场",
    type: "交通转场",
    category: "transport",
    day: "D16/D20",
    coords: [49.205, 119.825],
    intro: "进入大兴安岭/阿尔山段的航班和租车节点，实际可按票价改为乌兰浩特。",
    ticket: "暑期机票约 ¥700-1,600/人起",
    stay: "海拉尔 ¥300-650",
    food: "手把肉、奶茶、俄式西餐",
  },
  {
    name: "阿尔山市",
    type: "住宿基地",
    category: "hotel",
    day: "D17-D20",
    coords: [47.177, 119.943],
    intro: "大兴安岭西南麓的林区小城，适合作为森林公园和周边自驾基地。",
    ticket: "无",
    stay: "阿尔山/伊尔施 ¥500-1,200",
    food: "铁锅炖、牛羊肉、东北菜",
  },
  {
    name: "阿尔山国家森林公园",
    type: "大兴安岭森林",
    category: "nature",
    day: "D18",
    coords: [47.292, 120.416],
    intro: "火山地貌、湖泊和森林组合，是 21 天内最现实的大兴安岭深度体验。",
    ticket: "门票+景交常见约 ¥275-285/成人",
    stay: "阿尔山 ¥500-1,200",
    food: "山野菜、冷水鱼、蘑菇",
  },
  {
    name: "白狼峰",
    type: "森林徒步",
    category: "nature",
    day: "D19",
    coords: [47.06, 120.03],
    intro: "作为阿尔山周边第二天轻徒步选择，给大兴安岭段留出足够呼吸感。",
    ticket: "按开放票价购买",
    stay: "阿尔山 ¥500-1,200",
    food: "锅包肉、地三鲜、林区果品",
  },
  {
    name: "太原美食点",
    type: "美食",
    category: "food",
    day: "D12",
    coords: [37.8706, 112.56],
    intro: "太原适合作为补给和休整城市，晚上吃面食最稳。",
    ticket: "人均 ¥50-100",
    stay: "太原 ¥350-700",
    food: "刀削面、头脑、羊杂割、剔尖",
  },
  {
    name: "大同美食点",
    type: "美食",
    category: "food",
    day: "D15",
    coords: [40.087, 113.304],
    intro: "古城内外选择多，云冈日结束后适合好好吃一顿。",
    ticket: "人均 ¥60-120",
    stay: "大同 ¥300-650",
    food: "刀削面、羊杂、烧麦、浑源凉粉",
  },
];

const routeSegments = [
  {
    name: "上海至洛阳高铁",
    type: "rail",
    coords: [
      [31.1943, 121.3181],
      [34.5937, 112.4599],
    ],
  },
  {
    name: "河南与山西自驾",
    type: "drive",
    coords: itinerary
      .slice(2, 15)
      .flatMap((day) => day.coords)
      .filter(Boolean),
  },
  {
    name: "大同至北京高铁",
    type: "rail",
    coords: [
      [40.076, 113.3],
      [40.0799, 116.6031],
    ],
  },
  {
    name: "北京至海拉尔飞机",
    type: "flight",
    coords: [
      [40.0799, 116.6031],
      [49.205, 119.825],
    ],
  },
  {
    name: "阿尔山大兴安岭自驾",
    type: "drive",
    coords: [
      [49.205, 119.825],
      [47.177, 119.943],
      [47.292, 120.416],
      [47.06, 120.03],
      [47.177, 119.943],
      [49.205, 119.825],
    ],
  },
  {
    name: "海拉尔返上海飞机",
    type: "flight",
    coords: [
      [49.205, 119.825],
      [31.1443, 121.8083],
    ],
  },
];

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
}).setView([39.6, 115.8], 5);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const routeStyles = {
  rail: { color: "#4169a8", weight: 6, dashArray: "9 9", opacity: 0.95 },
  drive: { color: "#1f7a6d", weight: 7, opacity: 0.95 },
  flight: { color: "#9b4b78", weight: 6, dashArray: "2 10", opacity: 0.95 },
};

const routeLayers = routeSegments.map((segment) => {
  const layer = L.polyline(segment.coords, routeStyles[segment.type]).addTo(map);
  layer.bindTooltip(segment.name, { sticky: true });
  return layer;
});

const bounds = L.latLngBounds(routeSegments.flatMap((segment) => segment.coords));
map.fitBounds(bounds, { padding: [28, 28] });

const markers = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeIcon(place) {
  const className = `number-marker ${place.category}`;
  return L.divIcon({
    className: "",
    html: `<div class="${className}">${escapeHtml(place.day)}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -14],
  });
}

function popupHtml(place) {
  return `
    <article class="popup">
      <span class="type">${escapeHtml(place.type)} · ${escapeHtml(place.day)}</span>
      <h3>${escapeHtml(place.name)}</h3>
      <p>${escapeHtml(place.intro)}</p>
      <dl>
        <div><dt>门票</dt><dd>${escapeHtml(place.ticket)}</dd></div>
        <div><dt>住宿</dt><dd>${escapeHtml(place.stay)}</dd></div>
        <div><dt>美食</dt><dd>${escapeHtml(place.food)}</dd></div>
      </dl>
    </article>
  `;
}

places.forEach((place) => {
  const marker = L.marker(place.coords, { icon: makeIcon(place) })
    .bindPopup(popupHtml(place))
    .addTo(map);
  marker.placeCategory = place.category;
  markers.push(marker);
});

const list = document.querySelector("#itinerary-list");

function renderItinerary() {
  list.innerHTML = itinerary
    .map(
      (day) => `
      <button class="day-card" type="button" data-day="${day.day}">
        <span class="day-top">
          <span class="day-number">D${day.day}</span>
          <span class="day-date">${escapeHtml(day.date)}</span>
        </span>
        <span class="day-title">${escapeHtml(day.title)}</span>
        <span class="day-meta">
          <span class="pill">${escapeHtml(day.mode)}</span>
          <span class="pill">${escapeHtml(day.distance)}</span>
        </span>
        <span class="day-tags">
          <span class="pill">住：${escapeHtml(day.stay)}</span>
          <span class="pill">吃：${escapeHtml(day.food)}</span>
          <span class="pill">费：${escapeHtml(day.budget)}</span>
        </span>
      </button>
    `,
    )
    .join("");
}

renderItinerary();

document.querySelectorAll(".day-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".day-card.active").forEach((item) => {
      item.classList.remove("active");
    });
    card.classList.add("active");
    const day = itinerary.find((item) => item.day === Number(card.dataset.day));
    const dayBounds = L.latLngBounds(day.coords);
    map.fitBounds(dayBounds, { padding: [80, 80], maxZoom: 9 });
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-btn.active").forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    markers.forEach((marker) => {
      const shouldShow = filter === "all" || marker.placeCategory === filter;
      if (shouldShow && !map.hasLayer(marker)) {
        map.addLayer(marker);
      }
      if (!shouldShow && map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    });
  });
});

document.querySelector("#fit-route").addEventListener("click", () => {
  document.querySelectorAll(".day-card.active").forEach((item) => {
    item.classList.remove("active");
  });
  map.fitBounds(bounds, { padding: [28, 28] });
});

setTimeout(() => {
  map.invalidateSize();
  map.fitBounds(bounds, { padding: [28, 28] });
}, 350);
