const hybridItinerary = [
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

const driveItinerary = [
  {
    day: 1,
    date: "7/20",
    title: "上海 → 徐州",
    mode: "自驾",
    distance: "约 580 km / 6.5-7 小时",
    stay: "徐州/宿州中端酒店，¥250-450",
    food: "徐州烧烤、地锅鸡、羊肉汤",
    budget: "油费+通行费约 ¥650-850",
    coords: [
      [31.2304, 121.4737],
      [34.2618, 117.1848],
    ],
  },
  {
    day: 2,
    date: "7/21",
    title: "徐州 → 洛阳",
    mode: "自驾",
    distance: "约 430 km / 5-5.5 小时",
    stay: "洛阳龙门站/泉舜片区，¥350-650",
    food: "牛肉汤、洛阳水席、不翻汤",
    budget: "油费+通行费约 ¥480-650",
    coords: [
      [34.2618, 117.1848],
      [34.6197, 112.454],
    ],
  },
  {
    day: 3,
    date: "7/22",
    title: "洛阳一日：龙门石窟 + 洛阳博物馆",
    mode: "市内自驾",
    distance: "20-40 km",
    stay: "继续住洛阳，¥350-650",
    food: "牡丹燕菜、浆面条、羊肉汤",
    budget: "门票+停车约 ¥250-450/全家",
    coords: [
      [34.6197, 112.454],
      [34.5593, 112.4796],
      [34.62, 112.444],
    ],
  },
  {
    day: 4,
    date: "7/23",
    title: "洛阳 → 林州石板岩",
    mode: "自驾",
    distance: "约 270 km / 3.5-4 小时",
    stay: "石板岩民宿，¥250-600",
    food: "扁粉菜、皮渣、太行农家菜",
    budget: "油费+通行费约 ¥300-430",
    coords: [
      [34.6197, 112.454],
      [36.0895, 113.8529],
    ],
  },
  {
    day: 5,
    date: "7/24",
    title: "林州太行大峡谷",
    mode: "景区自驾",
    distance: "景区内 30-60 km",
    stay: "石板岩民宿，¥250-600",
    food: "柴鸡、手工面、山野菜",
    budget: "套票常见 ¥140-160/成人",
    coords: [[36.087, 113.851]],
  },
  {
    day: 6,
    date: "7/25",
    title: "林州 → 王莽岭/锡崖沟 → 晋城",
    mode: "山路自驾",
    distance: "约 200 km / 5 小时",
    stay: "晋城中端酒店，¥250-450",
    food: "高平烧豆腐、羊汤、饸饹面",
    budget: "油费+通行费+门票约 ¥650-950/全家",
    coords: [
      [36.087, 113.851],
      [35.6965, 113.583],
      [35.491, 112.852],
    ],
  },
  {
    day: 7,
    date: "7/26",
    title: "晋城/高平古建 → 长治",
    mode: "自驾",
    distance: "160-220 km / 3.5-4.5 小时",
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
    day: 8,
    date: "7/27",
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
    day: 9,
    date: "7/28",
    title: "长治 → 洪洞广胜寺 → 临汾",
    mode: "自驾",
    distance: "约 300 km / 4.5-5 小时",
    stay: "临汾中端酒店，¥250-450",
    food: "牛肉丸子面、羊杂割",
    budget: "油费+通行费约 ¥340-480",
    coords: [
      [36.191, 113.114],
      [36.278, 111.655],
      [36.088, 111.519],
    ],
  },
  {
    day: 10,
    date: "7/29",
    title: "临汾 → 小西天 → 壶口/吉县",
    mode: "自驾",
    distance: "约 260 km / 5 小时",
    stay: "吉县或临汾，¥250-600",
    food: "玉露香梨、黄河鲤鱼、饸饹面",
    budget: "油费+通行费+门票约 ¥650-950/全家",
    coords: [
      [36.088, 111.519],
      [36.6948, 110.9425],
      [36.145, 110.684],
    ],
  },
  {
    day: 11,
    date: "7/30",
    title: "吉县/临汾 → 平遥",
    mode: "自驾",
    distance: "300-340 km / 4.5-5.5 小时",
    stay: "平遥客栈/城外酒店，¥250-600",
    food: "平遥牛肉、碗托、栲栳栳",
    budget: "油费+通行费约 ¥360-520",
    coords: [
      [36.145, 110.684],
      [37.189, 112.176],
    ],
  },
  {
    day: 12,
    date: "7/31",
    title: "平遥周边 → 太原",
    mode: "自驾",
    distance: "120-180 km / 2-3 小时",
    stay: "太原柳巷/南站，¥350-700",
    food: "刀削面、头脑、羊杂割",
    budget: "双林寺/镇国寺/晋祠择二，约 ¥300-650/全家",
    coords: [
      [37.189, 112.176],
      [37.144, 112.135],
      [37.2905, 112.256],
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
    budget: "油费+通行费+景区约 ¥850-1,300/全家",
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
    budget: "油费+通行费+门票约 ¥700-1,100/全家",
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
    mode: "市内自驾",
    distance: "50-80 km",
    stay: "大同，¥300-650",
    food: "羊杂、烧麦、兔头",
    budget: "云冈+华严寺约 ¥450-700/全家",
    coords: [
      [40.076, 113.3],
      [40.1093, 113.1221],
      [40.0932, 113.294],
    ],
  },
  {
    day: 16,
    date: "8/4",
    title: "大同 → 赤峰",
    mode: "长途自驾",
    distance: "约 650 km / 7.5-8.5 小时",
    stay: "赤峰中端酒店，¥300-550",
    food: "对夹、蒙餐、羊肉烧麦",
    budget: "油费+通行费约 ¥750-1,000",
    coords: [
      [40.076, 113.3],
      [42.2578, 118.8889],
    ],
  },
  {
    day: 17,
    date: "8/5",
    title: "赤峰 → 乌兰浩特",
    mode: "长途自驾",
    distance: "约 620 km / 7-8 小时",
    stay: "乌兰浩特，¥300-550",
    food: "手把肉、奶茶、锅茶",
    budget: "油费+通行费约 ¥700-950",
    coords: [
      [42.2578, 118.8889],
      [46.077, 122.068],
    ],
  },
  {
    day: 18,
    date: "8/6",
    title: "乌兰浩特 → 阿尔山",
    mode: "自驾",
    distance: "280-330 km / 4-5 小时",
    stay: "阿尔山/伊尔施，¥500-1,200",
    food: "铁锅炖、牛羊肉、东北菜",
    budget: "油费+通行费约 ¥320-460",
    coords: [
      [46.077, 122.068],
      [47.177, 119.943],
    ],
  },
  {
    day: 19,
    date: "8/7",
    title: "阿尔山国家森林公园",
    mode: "自驾 + 景交",
    distance: "景区内 80-120 km",
    stay: "阿尔山，¥500-1,200",
    food: "山野菜、冷水鱼、蘑菇",
    budget: "门票+景交常见约 ¥275-285/成人",
    coords: [
      [47.177, 119.943],
      [47.292, 120.416],
    ],
  },
  {
    day: 20,
    date: "8/8",
    title: "阿尔山周边：白狼峰/森林轻徒步",
    mode: "自驾",
    distance: "100-180 km / 2-4 小时",
    stay: "阿尔山，¥500-1,200",
    food: "锅包肉、地三鲜、林区果品",
    budget: "周边景点+停车约 ¥300-700/全家",
    coords: [
      [47.177, 119.943],
      [47.06, 120.03],
    ],
  },
  {
    day: 21,
    date: "8/9",
    title: "阿尔山 → 通辽",
    mode: "长途自驾",
    distance: "560-620 km / 7-8 小时",
    stay: "通辽中端酒店，¥300-550",
    food: "科尔沁牛肉、蒙餐",
    budget: "油费+通行费约 ¥650-900",
    coords: [
      [47.177, 119.943],
      [43.617, 122.263],
    ],
  },
  {
    day: 22,
    date: "8/10",
    title: "通辽 → 秦皇岛/唐山",
    mode: "长途自驾",
    distance: "650-700 km / 7.5-8.5 小时",
    stay: "秦皇岛/唐山，¥350-700",
    food: "海鲜、棋子烧饼、饹馇",
    budget: "油费+通行费约 ¥750-1,050",
    coords: [
      [43.617, 122.263],
      [39.935, 119.6],
    ],
  },
  {
    day: 23,
    date: "8/11",
    title: "秦皇岛/唐山 → 淮安",
    mode: "长途自驾",
    distance: "700-760 km / 8.5-9 小时",
    stay: "淮安中端酒店，¥250-500",
    food: "淮扬菜、软兜长鱼、茶馓",
    budget: "油费+通行费约 ¥850-1,150",
    coords: [
      [39.935, 119.6],
      [33.6104, 119.0153],
    ],
  },
  {
    day: 24,
    date: "8/12",
    title: "淮安 → 上海",
    mode: "自驾",
    distance: "430-500 km / 5.5-6.5 小时",
    stay: "回家",
    food: "服务区简餐，回家吃顿舒服的",
    budget: "油费+通行费约 ¥500-700",
    coords: [
      [33.6104, 119.0153],
      [31.2304, 121.4737],
    ],
  },
];

const hybridPlaces = [
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

const driveDayByPlace = {
  上海虹桥站: "D1",
  龙门石窟: "D3",
  洛阳博物馆: "D3",
  石板岩镇: "D4-D5",
  林州太行大峡谷: "D5",
  "王莽岭/锡崖沟": "D6",
  泽州玉皇庙: "D7",
  高平铁佛寺: "D7",
  八泉峡: "D8",
  广胜寺: "D9",
  隰县小西天: "D10",
  壶口瀑布: "D10",
  平遥古城: "D11-D12",
  双林寺: "D12",
  镇国寺: "D12",
  晋祠: "D12",
  南禅寺: "D13",
  佛光寺: "D13",
  应县木塔: "D14",
  悬空寺: "D14",
  云冈石窟: "D15",
  华严寺: "D15",
  阿尔山市: "D18-D21",
  阿尔山国家森林公园: "D19",
  白狼峰: "D20",
  太原美食点: "D12",
  大同美食点: "D15",
};

const drivePlaces = [
  ...hybridPlaces
    .filter((place) => place.name !== "海拉尔机场")
    .map((place) => {
      const renamed =
        place.name === "上海虹桥站"
          ? {
              name: "上海出发",
              type: "自驾起点",
              coords: [31.2304, 121.4737],
              intro: "全程自驾从上海出发，第一天不进景区，目标是稳稳开到徐州。",
              ticket: "无",
              stay: "前一晚在家休息，车辆加油、检查轮胎和胎压",
              food: "车上备水、零食和孩子爱吃的简餐",
            }
          : {};
      return {
        ...place,
        ...renamed,
        day: driveDayByPlace[place.name] ?? place.day,
      };
    }),
  {
    name: "徐州中转",
    type: "住宿中转",
    category: "hotel",
    day: "D1",
    coords: [34.2618, 117.1848],
    intro: "上海到河南之间的舒适断点，第一天只负责把长途开顺。",
    ticket: "无",
    stay: "徐州/宿州中端酒店 ¥250-450",
    food: "徐州烧烤、地锅鸡、羊肉汤",
  },
  {
    name: "赤峰中转",
    type: "长途中转",
    category: "hotel",
    day: "D16",
    coords: [42.2578, 118.8889],
    intro: "大同北上阿尔山的第一段长途落脚点，建议不要再塞景区。",
    ticket: "无",
    stay: "赤峰中端酒店 ¥300-550",
    food: "对夹、蒙餐、羊肉烧麦",
  },
  {
    name: "乌兰浩特中转",
    type: "长途中转",
    category: "hotel",
    day: "D17",
    coords: [46.077, 122.068],
    intro: "进入阿尔山前的补给城市，适合洗衣、补水、检查车辆。",
    ticket: "无",
    stay: "乌兰浩特 ¥300-550",
    food: "手把肉、奶茶、锅茶",
  },
  {
    name: "通辽返程中转",
    type: "长途中转",
    category: "hotel",
    day: "D21",
    coords: [43.617, 122.263],
    intro: "阿尔山回上海的第一段返程落脚点，全天以赶路和休息为主。",
    ticket: "无",
    stay: "通辽中端酒店 ¥300-550",
    food: "科尔沁牛肉、蒙餐",
  },
  {
    name: "秦皇岛/唐山中转",
    type: "长途中转",
    category: "hotel",
    day: "D22",
    coords: [39.935, 119.6],
    intro: "返程第二个落脚点，可根据当天精神状态选择住秦皇岛或唐山。",
    ticket: "无",
    stay: "秦皇岛/唐山 ¥350-700",
    food: "海鲜、棋子烧饼、饹馇",
  },
  {
    name: "淮安中转",
    type: "返沪中转",
    category: "hotel",
    day: "D23",
    coords: [33.6104, 119.0153],
    intro: "最后一段返沪前的安全断点，比从华北一口气开回上海舒服很多。",
    ticket: "无",
    stay: "淮安中端酒店 ¥250-500",
    food: "淮扬菜、软兜长鱼、茶馓",
  },
];

const hybridRouteSegments = [
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
    coords: hybridItinerary
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

const driveRouteSegments = [
  {
    name: "上海至太行山自驾",
    type: "drive",
    coords: driveItinerary.slice(0, 6).flatMap((day) => day.coords).filter(Boolean),
  },
  {
    name: "山西古建主线自驾",
    type: "drive",
    coords: driveItinerary.slice(5, 15).flatMap((day) => day.coords).filter(Boolean),
  },
  {
    name: "北上阿尔山长途自驾",
    type: "drive",
    coords: driveItinerary.slice(15, 20).flatMap((day) => day.coords).filter(Boolean),
  },
  {
    name: "阿尔山返上海自驾",
    type: "drive",
    coords: driveItinerary.slice(20).flatMap((day) => day.coords).filter(Boolean),
  },
];

const tripPlans = {
  hybrid: {
    eyebrow: "2026.07.20 左右出发 · 舒适家庭版",
    title: ["上海 → 太行山", "山西古建 → 大兴安岭"],
    summary:
      "高铁和飞机负责长距离转场，河南、山西和阿尔山段租车自驾。适合想保留路上自由度，又不想把返程开到筋疲力尽的家庭旅行。",
    chips: ["山水", "古建", "林海", "慢一点"],
    metrics: [
      ["21 天", "建议总时长"],
      ["约 3,100 km", "租车自驾"],
      ["¥5-7.5 万", "全家预算"],
      ["3 段", "高铁/飞机转场"],
    ],
    legend: [
      ["rail", "高铁"],
      ["drive", "自驾"],
      ["flight", "飞机"],
    ],
    costs: [
      ["交通", "¥23,000-35,000"],
      ["住宿", "¥11,000-17,000"],
      ["餐饮", "¥7,000-10,000"],
      ["门票/景交", "¥5,000-8,000"],
    ],
    costNote:
      "价格是暑期中端舒适估算，正式订票前以 12306、航司、景区公众号和租车平台为准。",
    mapNoteTitle: "路线原则",
    mapNoteBody: "游玩日少开车，转场日不塞重景点；山西古建点位分散，租车最省心。",
    itinerary: hybridItinerary,
    places: hybridPlaces,
    routeSegments: hybridRouteSegments,
  },
  drive: {
    eyebrow: "2026.07.20 左右出发 · 全程自驾版",
    title: ["上海环线自驾", "太行山 → 山西 → 阿尔山"],
    summary:
      "全程开自己的车完成太行山、山西古建和阿尔山大兴安岭。24 天是紧凑可执行版，返程有多段 7-9 小时长途，想更舒服建议加 1-2 天机动。",
    chips: ["纯自驾", "24 天", "长途转场", "预算更低但更累"],
    metrics: [
      ["24 天", "紧凑总时长"],
      ["约 6,700 km", "全程自驾"],
      ["¥4.2-6.4 万", "全家预算"],
      ["8-9 天", "长途转场"],
    ],
    legend: [["drive", "自驾"]],
    costs: [
      ["车辆", "¥10,000-15,000"],
      ["住宿", "¥12,000-20,000"],
      ["餐饮", "¥8,000-12,000"],
      ["门票/景交", "¥5,000-8,000"],
      ["机动", "¥3,000-5,000"],
    ],
    costNote:
      "车辆预算按约 6,700 km、百公里 8-10L、92 号油约 ¥8-9/L、高速通行费约 ¥0.45-0.65/km 估算，含停车和保养预留，不含车辆折旧。",
    mapNoteTitle: "全自驾提醒",
    mapNoteBody:
      "大同北上阿尔山、阿尔山返沪是强度最高的部分。D16、D17、D21-D23 尽量只赶路和休息，不再叠加重景点。",
    itinerary: driveItinerary,
    places: drivePlaces,
    routeSegments: driveRouteSegments,
  },
};

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
  rail: { color: "#315fa2", weight: 7, dashArray: "10 8", opacity: 1 },
  drive: { color: "#0e7966", weight: 8, opacity: 1 },
  flight: { color: "#a44675", weight: 7, dashArray: "2 9", opacity: 1 },
};

let activePlanKey = window.location.hash === "#drive" ? "drive" : "hybrid";
let activePlan = tripPlans[activePlanKey];
let currentFilter = "all";
let routeLayers = [];
let markers = [];

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

const list = document.querySelector("#itinerary-list");
const metricGrid = document.querySelector("#metric-grid");
const legend = document.querySelector("#legend");
const costList = document.querySelector("#cost-list");
const tripEyebrow = document.querySelector("#trip-eyebrow");
const tripTitle = document.querySelector("#trip-title");
const tripSummary = document.querySelector("#trip-summary");
const tripChips = document.querySelector("#trip-chips");
const costNote = document.querySelector("#cost-note");
const mapNoteTitle = document.querySelector("#map-note-title");
const mapNoteBody = document.querySelector("#map-note-body");

function planBounds() {
  return L.latLngBounds(activePlan.places.map((place) => place.coords));
}

function fitActivePlan() {
  map.fitBounds(planBounds(), { padding: [36, 36] });
}

function renderPlanText() {
  tripEyebrow.textContent = activePlan.eyebrow;
  tripTitle.innerHTML = activePlan.title
    .map((line) => `<span>${escapeHtml(line)}</span>`)
    .join("");
  tripSummary.textContent = activePlan.summary;
  tripChips.innerHTML = activePlan.chips
    .map((chip) => `<span>${escapeHtml(chip)}</span>`)
    .join("");
  metricGrid.innerHTML = activePlan.metrics
    .map(
      ([value, label]) => `
        <div>
          <span>${escapeHtml(value)}</span>
          <small>${escapeHtml(label)}</small>
        </div>
      `,
    )
    .join("");
  legend.innerHTML = activePlan.legend
    .map(([type, label]) => `<span><i class="line ${type}"></i>${escapeHtml(label)}</span>`)
    .join("");
  costList.innerHTML = activePlan.costs
    .map(
      ([label, value]) => `
        <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>
      `,
    )
    .join("");
  costNote.textContent = activePlan.costNote;
  mapNoteTitle.textContent = activePlan.mapNoteTitle;
  mapNoteBody.textContent = activePlan.mapNoteBody;
}

function renderRoutes() {
  routeLayers.forEach((layer) => map.removeLayer(layer));
  routeLayers = activePlan.routeSegments.map((segment) => {
    const layer = L.polyline(segment.coords, routeStyles[segment.type]).addTo(map);
    layer.bindTooltip(segment.name, { sticky: true });
    layer.bringToFront();
    return layer;
  });
}

function applyMarkerFilter() {
  markers.forEach((marker) => {
    const shouldShow = currentFilter === "all" || marker.placeCategory === currentFilter;
    if (shouldShow && !map.hasLayer(marker)) {
      map.addLayer(marker);
    }
    if (!shouldShow && map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
}

function renderMarkers() {
  markers.forEach((marker) => map.removeLayer(marker));
  markers = activePlan.places.map((place) => {
    const marker = L.marker(place.coords, { icon: makeIcon(place) }).bindPopup(popupHtml(place));
    marker.placeCategory = place.category;
    return marker;
  });
  applyMarkerFilter();
}

function renderItinerary() {
  list.innerHTML = activePlan.itinerary
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
  document.querySelectorAll(".day-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".day-card.active").forEach((item) => {
        item.classList.remove("active");
      });
      card.classList.add("active");
      const day = activePlan.itinerary.find((item) => item.day === Number(card.dataset.day));
      const dayBounds = L.latLngBounds(day.coords);
      map.fitBounds(dayBounds, { padding: [80, 80], maxZoom: 9 });
    });
  });
}

function renderPlan() {
  activePlan = tripPlans[activePlanKey];
  document.querySelectorAll(".plan-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.plan === activePlanKey);
  });
  renderPlanText();
  renderRoutes();
  renderMarkers();
  renderItinerary();
  fitActivePlan();
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn.active").forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    applyMarkerFilter();
  });
});

document.querySelectorAll(".plan-btn").forEach((button) => {
  button.addEventListener("click", () => {
    activePlanKey = button.dataset.plan;
    document.querySelectorAll(".plan-btn.active").forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    window.history.replaceState(null, "", `#${activePlanKey}`);
    renderPlan();
  });
});

document.querySelector("#fit-route").addEventListener("click", () => {
  document.querySelectorAll(".day-card.active").forEach((item) => {
    item.classList.remove("active");
  });
  fitActivePlan();
});

renderPlan();

setTimeout(() => {
  map.invalidateSize();
  fitActivePlan();
}, 350);
