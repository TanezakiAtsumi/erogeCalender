var activities = [{
    name: "喝维他奶",
    good: "喝完这盒还有三盒",
    bad: "OvO",
    weekend: true
}, {
    name: "入正",
    good: "买了痛三天，不买悔三年",
    bad: "ammp，汇率还是……",
    weekend: true
}, {
    name: "补旧作",
    good: "意外地对胃口",
    bad: "会踩雷",
    weekend: true
}, {
    name: "晾晒老婆（抱枕套）",
    good: "天気も晴れココロも晴れ",
    bad: "引发路人围观",
    weekend: true
}, {
    name: "不按攻略打",
    good: "",
    bad: "碰到BAD END",
    weekend: true
}, {
    name: "观赏CG包",
    good: "社保。",
    bad: "还是游戏有剧情",
    weekend: true
}, {
    name: "声明老婆主权",
    good: "都是老婆！对这些都是！",
    bad: "话说那木换姓了吗",
    weekend: true
}, {
    name: "研究黄油创作理论",
    good: "增进鉴赏水平",
    bad: "闲适玩家不需要这些",
    weekend: true
}, {
    name: "关心minori运营情况",
    good: "记得明年新作TRINOLINE",
    bad: "散月图库好像先倒闭了？",
    weekend: true
}, {
    name: "海购%b",
    good: "一路畅通",
    bad: "海关大盘查",
    weekend: true
}, {
    name: "继续推八神下海",
    good: "白……白丝！",
    bad: "对方仍然婉拒入水",
    weekend: true
}, {
    name: "暴露性癖",
    good: "会引来很多趣味相同的……",
    bad: "四斋蒸……",
    weekend: true
}, {
    name: "彻夜推土",
    good: "",
    bad: "注意护发/养肝",
    weekend: true
}, {
    name: "更新%t",
    good: "",
    bad: "会程序崩溃",
    weekend: true
}, {
    name: "施法",
    good: "",
    bad: "房间门关好了吗",
    weekend: true
}, {
    name: "上外网刷新作动态",
    good: "喜欢的画师发了新图",
    bad: "发现游戏跳票",
    weekend: true
}, {
    name: "同好面基",
    good: "有很多好康的，累了就抱团睡觉",
    bad: "",
    weekend: true
}, {
    name: "刷微博/Q群",
    good: "大佬在愉快地发黄图/发情",
    bad: "有人疯狂黑枪自己",
    weekend: true
}, {
    name: "打%m",
    good: "",
    bad: "",
    weekend: true
}, {
    name: "玩国产游戏",
    good: "最近作品还不错……？",
    bad: "还是有所欠缺",
    weekend: true
}, {
    name: "怂恿杏奈女装",
    good: "(*‘ω‘ *)",
    bad: "她会生气",
    weekend: true
}, {
    name: "下载试玩体验版",
    good: "",
    bad: "官网都连不上……",
    weekend: true
}, {
    name: "点燃人生希望",
    good: "有生之年系列还可以抢救下",
    bad: "离樱之刻发售还有9年5个月",
    weekend: true
}, {
    name: "上班打黄油",
    good: "愉快的摸鱼时间",
    bad: "老板 is watching you",
    weekend: false
}, {
    name: "速推",
    good: "life is short",
    bad: "精工出细活",
    weekend: true
}, {
    name: "撰写黄油感想",
    good: "锻炼文笔&记录心路历程",
    bad: "写出的东西可能有点傻",
    weekend: true
}, {
    name: "询问战舰子今天是周五吗",
    good: "……是吗？",
    bad: "湿帝周三就开始念叨了",
    weekend: false
}, {
    name: "回味玩过的作品",
    good: "重温感动",
    bad: "还是先看看新作",
    weekend: true
}, {
    name: "圣地巡礼",
    good: "仿佛自己变成黄油主人公",
    bad: "死宅还是别出门了",
    weekend: true
}, {
    name: "抱着女朋友睡觉",
    good: "",
    bad: "首先，你得有一个那木",
    weekend: true
}, {
    name: "出门走走",
    good: "宅久了要发霉",
    bad: "太陽が眩しすぎる",
    weekend: true
}, {
    name: "思考人生",
    good: "自己的幸福呢？",
    bad: "喵喵……喵？",
    weekend: true
}, {
    name: "空中观测",
    good: "看，有个魔女在天上飞！",
    bad: "咕咕咕",
    weekend: true
}, {
    name: "非实在性妄想",
    good: "带你进入淫靡的世界",
    bad: "洗洗睡吧",
    weekend: true
},{
    name:"消化積みゲー",
    good:"",
    bad:"",
    weekend:true
},{
    name:"撸猫",
    good:"啊……好爽",
    bad:"家里没有猫的洗洗睡吧",
    weekend:true
},{
    name:"黑枪",
    good:"素质不at",
    bad:"明天就轮到自己惹",
    weekend:true
},{
    name:"收听黄油电台",
    good:"dalao谈笑风生",
    bad:"没打过的作品会被剧透",
    weekend:true
},{
    name:"坑害萌新",
    good:"什么十二神器？",
    bad:"吃了这朵晴菜花！",
    weekend:true
}
];





//节日，记得改成只比对月日的
var setdaylist=[
{
    name:"FFF节",
    mdate:0214
},{
    name:"猫の日",
    mdate:0222
},{
    name:"オナニー日",
    mdate:0721
},{
    name:"弟の日",
    mdate:0306
},{
    name:"雏祭り",
    mdate:0303
},{
    name:"兄の日",
    mdate:0606
},{
    name:"萌えの日",
    mdate:1010
},{
    name:"ロリの日",
    mdate:1011
},{
    name:"いいおっぱいの日",
    mdate:1108
},{
    name:"姉の日",
    mdate:1206
},{
    name:"妹の日",
    mdate:0906
}
]



var speciallist = [
{
    mdate: 20021230,
    name: " 睡蓮 "
}, {
    mdate: 20030613,
    name: " 朱 -Aka- "
}, {
    mdate: 20060728,
    name: " ぶらばん! ～The bonds of melody～ "
}, {
    mdate: 20111028,
    name: " 翠の海 -midori no umi- "
}, {
    mdate: 20110527,
    name: "処女回路"
}, {
    mdate: 20111125,
    name: " 春季限定ポコ・ア・ポコ。 "
}, {
    mdate: 20110930,
    name: " 鬼ごっこ。ファンディスク "
}, {
    mdate: 20110624,
    name: " 眠れる花は春を待つ"
}, {
    mdate: 20110331,
    name: " 鬼ごっこ。"
}, {
    mdate: 20120831,
    name: " イモウトノカタチ "
}, {
    mdate: 20120727,
    name: " 終わる世界とバースデイ "
}, {
    mdate: 20130625,
    name: " 大図書館の羊飼い"
}, {
    mdate: 20130812,
    name: " fault -milestone one-"
}, {
    mdate: 20130228,
    name: " ハピメア "
}, {
    mdate: 20130222,
    name: " 星彩のレゾナンス "
}, {
    mdate: 20141128,
    name: " 蒼の彼方のフォーリズム "
}, {
    mdate: 20140827,
    name: " 空飛ぶ羊と真夏の花 -When girls wish upon a star.- "
}, {
    mdate: 20141230,
    name: " 相思相愛ロリータ "
}, {
    mdate: 20140307,
    name: " ひと目惚れ "
}, {
    mdate: 20151023,
    name: " サクラノ詩 －櫻の森の上を舞う－ "
}, {
    mdate: 20150327,
    name: " シロガネ×スピリッツ。 "
}, {
    mdate: 20150626,
    name: " スクイの小夜曲 "
}, {
    mdate: 19050707,
    name: " ナルキッソス -スミレ- "
}, {
    mdate: 20160428,
    name: " ISLAND "
}, {
    mdate: 20160624,
    name: " ラムネーション。 "
},  {
    mdate: 20160226,
    name: " ワールド・エレクション "
}, {
    mdate: 20160428,
    name: " ワガママハイスペック "
}, {
    mdate: 20160624,
    name: " 虜ノ鎖 ～処女たちを穢す淫らな楔～"
}, {
    mdate: 20160729,
    name: " 千恋＊万花"
}, {
    mdate: 20160729,
    name: " 少女マイノリティ-慰めの愛- "
}, {
    mdate: 20160522,
    name: " 她和他和她的澎湖灣"
}, {
    mdate: 20160930,
    name: " 夏の魔女のパレード"
}, {
    mdate: 19950707,
    name: " 攫ノ雌 "
}, {
    mdate: 19951001,
    name: " ときめきメモリアル 〜forever with you〜 "
}, {
    mdate: 19951122,
    name: " EVE～bursterror～ "
}, {
    mdate: 19960101,
    name: " Only You -世紀末のジュリエット達- "
}, {
    mdate: 19960126,
    name: " 雫"
}, {
    mdate: 19960726,
    name: " 痕 ～きずあと～ "
}, {
    mdate: 19961219,
    name: " 鬼畜王ランス "
}, {
    mdate: 19961226,
    name: " この世の果てで恋を唄う少女YU-NO "
}, {
    mdate: 19970523,
    name: " To Heart "
}, {
    mdate: 19971121,
    name: " MOON. MOON. "
}, {
    mdate: 19971219,
    name: " アトラク゠ナクア "
}, {
    mdate: 19980404,
    name: " サクラ大戦2 〜君、死にたもうことなかれ〜"
}, {
    mdate: 19980501,
    name: "  WHITE ALBUM "
}, {
    mdate: 19980529,
    name: " ONE～輝く季節へ～ "
}, {
    mdate: 19980731,
    name: " 好き好き大好き。 "
}, {
    mdate: 19981203,
    name: " 久遠の絆"
}, {
    mdate: 19990128,
    name: " 街 ~運命の交差点~ "
}, {
    mdate: 19990409,
    name: " 終末の過ごし方 "
}, {
    mdate: 19990604,
    name: " Kanon"
}, {
    mdate: 19990625,
    name: " 加奈～いもうと～ "
}, {
    mdate: 19990723,
    name: " フロレアール ～すきすきだいすき～"
}, {
    mdate: 19990827,
    name: " 終ノ空 "
}, {
    mdate: 19990930,
    name: " メモリーズオフ "
}, {
    mdate: 20000225,
    name: " Phantom～Phantomofinferno～"
}, {
    mdate: 20000225,
    name: " 幻灵地狱 Phantom -PHANTOM OF INFERNO-"
}, {
    mdate: 20000323,
    name: " Never7 -the end of infinity- "
}, {
    mdate: 20000630,
    name: " 果てしなく青い、この空の下で…。 "
}, {
    mdate: 20000715,
    name: " 書淫、或いは失われた夢の物語。 "
}, {
    mdate: 20000804,
    name: " 想い出の彼方 "
}, {
    mdate: 20000908,
    name: " AIR "
}, {
    mdate: 20001130,
    name: " 二重影 "
}, {
    mdate: 20001222,
    name: " 顔のない月 "
}, {
    mdate: 20001229,
    name: " 月姫 "
}, {
    mdate: 20010112,
    name: " 家族計画 "
}, {
    mdate: 20010118,
    name: " 風雨来記 "
}, {
    mdate: 20010119,
    name: " 天使协奏曲 エンジェリック・コンサート "
}, {
    mdate: 20010202,
    name: " おかえりっ!〜夕凪色の恋物語〜 "
}, {
    mdate: 20010302,
    name: " さよならを教えて 〜comment te dire adieu〜 "
}, {
    mdate: 20010419,
    name: " 想いのかけら -Close to-"
}, {
    mdate: 20010420,
    name: " 蒼ざめた月の光 "
}, {
    mdate: 20010525,
    name: " 21-Two One- "
}, {
    mdate: 20010727,
    name: " 秋桜の空に"
}, {
    mdate: 20010727,
    name: " 水夏 "
}, {
    mdate: 20010803,
    name: " 君が望む永遠 "
}, {
    mdate: 20010831,
    name: " BITTERSWEET FOOLS"
}, {
    mdate: 20010927,
    name: " メモリーズオフ 2nd "
}, {
    mdate: 20010928,
    name: " Crescendo ～永遠だと思っていたあの頃～ "
}, {
    mdate: 20011005,
    name: " ジサツのための101の方法"
}, {
    mdate: 20011019,
    name: " 月陽炎 ～つきかげろう～ "
}, {
    mdate: 20011122,
    name: " 蜜柑 "
}, {
    mdate: 20011130,
    name: " 大惡司 "
}, {
    mdate: 20011130,
    name: " 二重箱 "
}, {
    mdate: 20020201,
    name: " 雨に歌う譚詩曲 "
}, {
    mdate: 20020208,
    name: " 腐り姫～euthanasia～ "
}, {
    mdate: 20020301,
    name: " 月陽炎 千秋恋歌 "
}, {
    mdate: 20020329,
    name: " 天使小夜曲 AS～エンジェリックセレナーデ"
}, {
    mdate: 20020419,
    name: " Wind -a breath of heart "
}, {
    mdate: 20020426,
    name: " うたわれるもの "
}, {
    mdate: 20020426,
    name: " もみじ- ワタシ…人形じゃありません… "
}, {
    mdate: 20020426,
    name: " 世界ノ全テ"
}, {
    mdate: 20020426,
    name: " 水月 -すいげつ-"
}, {
    mdate: 20020621,
    name: " 結い橋 "
}, {
    mdate: 20020628,
    name: " D.C. "
}, {
    mdate: 20020705,
    name: " 白詰草話 "
}, {
    mdate: 20020809,
    name: " それは舞い散る桜のように "
}, {
    mdate: 20020809,
    name: " みずのかけら "
}, {
    mdate: 20020829,
    name: " Ever17 "
}, {
    mdate: 20021101,
    name: " BALDR FORCE "
}, {
    mdate: 20021115,
    name: " 蝉時雨 "
}, {
    mdate: 20021129,
    name: " 神無ノ鳥 "
}, {
    mdate: 20021227,
    name: " そよかぜのおくりもの "
}, {
    mdate: 20030124,
    name: " BALDR FORCE EXE "
}, {
    mdate: 20030124,
    name: " てのひらを、たいように "
}, {
    mdate: 20030221,
    name: " 薔薇ノ木ニ薔薇ノ花咲ク "
}, {
    mdate: 20030227,
    name: " Iris 〜イリス〜"
}, {
    mdate: 20030228,
    name: " Stay ever…～約束なんてできない～"
}, {
    mdate: 20030228,
    name: " マブラヴ "
}, {
    mdate: 20030228,
    name: " 永遠となった留守番 ～パパは帰らない～ "
}, {
    mdate: 20030327,
    name: " Memories Off Duet"
}, {
    mdate: 20030404,
    name: " ショコラ ～maid cafe "
}, {
    mdate: 20030425,
    name: " 斬魔大聖デモンベイン "
}, {
    mdate: 20030530,
    name: " あした出逢った少女"
}, {
    mdate: 20030530,
    name: " 青い涙 "
}, {
    mdate: 20030731,
    name: " SAKURA ～雪月華～ "
}, {
    mdate: 20030828,
    name: " 夏夢夜話 "
}, {
    mdate: 20030831,
    name: " 終末によせて "
}, {
    mdate: 20030905,
    name: " 海からくるもの "
}, {
    mdate: 20030919,
    name: " 天使恋曲 ASDVD 生まれたばかりのLoveSong "
}, {
    mdate: 20030926,
    name: " CROSS†CHANNEL"
}, {
    mdate: 20030926,
    name: " めぐり、ひとひら。"
}, {
    mdate: 20030926,
    name: " 月は東に日は西に 〜Operation Sanctuary〜 "
}, {
    mdate: 20031003,
    name: " てんしのかけら "
}, {
    mdate: 20031010,
    name: " 身代わりの館 "
}, {
    mdate: 20031128,
    name: " 雪桜 ～ゆきざくら～ "
}, {
    mdate: 20031208,
    name: " Petit Fleur～風吹く街のメロディ～ "
}, {
    mdate: 20031212,
    name: " こなたよりかなたまで "
}, {
    mdate: 20031219,
    name: " ゆきうた "
}, {
    mdate: 20031219,
    name: " 大番长BigBangAge"
}, {
    mdate: 20031226,
    name: " 沙耶の唄 "
}, {
    mdate: 20031228,
    name: " 花帰葬 "
}, {
    mdate: 20031228,
    name: " 夏音 —Overture—"
}, {
    mdate: 20040130,
    name: " Fatestaynight"
}, {
    mdate: 20040130,
    name: " SHUFFLE。 "
}, {
    mdate: 20040213,
    name: " Forest "
}, {
    mdate: 20040213,
    name: " Forest "
}, {
    mdate: 20040318,
    name: "  Remember11 -the age of infinity- "
}, {
    mdate: 20040326,
    name: " シンフォニック=レイン "
}, {
    mdate: 20040423,
    name: " Quartett!"
}, {
    mdate: 20040423,
    name: " 蒼色輪廻 "
}, {
    mdate: 20040428,
    name: " CLANNAD－クラナド－"
}, {
    mdate: 20040514,
    name: " CARNIVAL "
}, {
    mdate: 20040528,
    name: " P.C. D.C.P.C."
}, {
    mdate: 20040606,
    name: " 夏の燈火 "
}, {
    mdate: 20040624,
    name: " メモリーズオフ ～それから～ "
}, {
    mdate: 20040625,
    name: " 3days～満ちてゆく刻の彼方で～ "
}, {
    mdate: 20040625,
    name: " ぼくのたいせつなもの "
}, {
    mdate: 20040625,
    name: " 巣作りドラゴン "
}, {
    mdate: 20040625,
    name: " 何処へ行くの、あの日 "
}, {
    mdate: 20040723,
    name: " はるのあしおと "
}, {
    mdate: 20040730,
    name: " ラムネ "
}, {
    mdate: 20040805,
    name: " 零 〜紅い蝶〜 "
}, {
    mdate: 20040813,
    name: " ひぐらしのなく頃に"
}, {
    mdate: 20040815,
    name: " 想瞬譜 —そうしゅんふ— "
}, {
    mdate: 20040827,
    name: " RanceVI－ゼス崩壊－"
}, {
    mdate: 20040924,
    name: " 神樹の館 "
}, {
    mdate: 20041012,
    name: " 虫姫さま "
}, {
    mdate: 20041021,
    name: " アカイイト"
}, {
    mdate: 20041029,
    name: " 死妹人形 "
}, {
    mdate: 20041121,
    name: " EndlessRain "
}, {
    mdate: 20041126,
    name: " あの空の向こう側 "
}, {
    mdate: 20041126,
    name: " 杜氏の郷 "
}, {
    mdate: 20041126,
    name: " 巫女舞～ただ一つの願い～ "
}, {
    mdate: 20041223,
    name: " ショコラ～maidcafe”curio”～Re-order"
}, {
    mdate: 20041224,
    name: " ひとがたルイン "
}, {
    mdate: 20041228,
    name: " ToHeart2 ToHeart2"
}, {
    mdate: 20050121,
    name: " 蝶ノ夢 "
}, {
    mdate: 20050127,
    name: " メモリーズオフ After Rain "
}, {
    mdate: 20050325,
    name: " ANGEL TYPE "
}, {
    mdate: 20050325,
    name: " ゆのはな "
}, {
    mdate: 20050428,
    name: " カルタグラ～ツキ狂イノ病～"
}, {
    mdate: 20050428,
    name: " 鬼神楽 "
}, {
    mdate: 20050428,
    name: " 僕は天使じゃないよ"
}, {
    mdate: 20050527,
    name: " プリンセスうぃっちぃず "
}, {
    mdate: 20050527,
    name: " スイセンカ "
}, {
    mdate: 20050624,
    name: " あやかしびと "
}, {
    mdate: 20050706,
    name: " 陽射しの中のリアル"
}, {
    mdate: 20050729,
    name: " As you like～星降る夜にロマンスを～ "
}, {
    mdate: 20050729,
    name: " SWAN SONG"
}, {
    mdate: 20050729,
    name: " リトルウィッチロマネスク "
}, {
    mdate: 20050805,
    name: " さくらむすび "
}, {
    mdate: 20050812,
    name: " 最果てのイマ "
}, {
    mdate: 20050826,
    name: " つよきす "
}, {
    mdate: 20050826,
    name: "A Dream of Summer ヒトナツの夢"
}, {
    mdate: 20050826,
    name: " 羊の方舟 "
}, {
    mdate: 20050916,
    name: " 夢幻廻廊 "
}, {
    mdate: 20050922,
    name: " 鎖 -クサリ- "
}, {
    mdate: 20050922,
    name: " 夜明け前より瑠璃色な "
}, {
    mdate: 20050930,
    name: " 群青の空を越えて "
}, {
    mdate: 20051024,
    name: " Cloud"
}, {
    mdate: 20051027,
    name: " メモリーズオフ#5 とぎれたフィルム "
}, {
    mdate: 20051028,
    name: " Fatehollowataraxia "
}, {
    mdate: 20051028,
    name: " はじめてのおてつだい～りにゅーある～ "
}, {
    mdate: 20051125,
    name: " 車輪の国、向日葵の少女 "
}, {
    mdate: 20051125,
    name: " 恋もも "
}, {
    mdate: 20051125,
    name: " 智代アフター～It'saWonderfulLife～ "
}, {
    mdate: 20051209,
    name: " ToHeart2 XRATED "
}, {
    mdate: 20051222,
    name: " パルフェ～chocolatsecondbrew～Re-order "
}, {
    mdate: 20051222,
    name: " ユメミルクスリ "
}, {
    mdate: 20051225,
    name: " 忘れものと落とし物"
}, {
    mdate: 20060120,
    name: " ゴア・スクリーミング・ショウ "
}, {
    mdate: 20060127,
    name: " よつのは "
}, {
    mdate: 20060224,
    name: " Muv-Luv Alternative マブラヴ オルタネイティヴ"
}, {
    mdate: 20060224,
    name: " もしも明日が晴れならば "
}, {
    mdate: 20060227,
    name: " 不思議の国のカノジョ "
}, {
    mdate: 20060323,
    name: " メモリーズオフ ～それからagain～ "
}, {
    mdate: 20060324,
    name: " その横顔を見つめてしまう ～A Profile 完全版～ "
}, {
    mdate: 20060324,
    name: " 雪影 -setsuei- "
}, {
    mdate: 20060331,
    name: " true tears ～トゥルーティアーズ～ "
}, {
    mdate: 20060331,
    name: " この青空に约束を-"
}, {
    mdate: 20060331,
    name: " はるのあしおと "
}, {
    mdate: 20060414,
    name: " わんことくらそう "
}, {
    mdate: 20060421,
    name: " 青空の見える丘 "
}, {
    mdate: 20060428,
    name: " Triptych "
}, {
    mdate: 20060428,
    name: " 天使憑きの少女～Related with“Present for you”～ "
}, {
    mdate: 20060526,
    name: " D.C.II～ダ・カーポII～ "
}, {
    mdate: 20060526,
    name: " Scarlett ～スカーレット～"
}, {
    mdate: 20060623,
    name: " H2O ～FOOTPRINTS IN THE SAND～ "
}, {
    mdate: 20060623,
    name: " Summer Days "
}, {
    mdate: 20060623,
    name: " 彼女たちの流儀 "
}, {
    mdate: 20060727,
    name: " We Are* "
}, {
    mdate: 20060813,
    name: " 去人たちⅠ／Ⅱ "
}, {
    mdate: 20060929,
    name: " PP -ピアニッシモ- 操リ人形ノ輪舞 "
}, {
    mdate: 20061027,
    name: " EXTRAVAGANZA～蟲愛でる少女～ "
}, {
    mdate: 20061124,
    name: " 遥かに仰ぎ、麗しの"
}, {
    mdate: 20061215,
    name: " 戦国ランス"
}, {
    mdate: 20061222,
    name: " ef -the first tale "
}, {
    mdate: 20061222,
    name: " Fossette - Cafe au Le Ciel Bleu - フォセット - Cafe au Le Ciel Bleu - "
}, {
    mdate: 20061222,
    name: " フォセット～CafeauLeCielBleu～ "
}, {
    mdate: 20070126,
    name: " いつか、届く、あの空に。 "
}, {
    mdate: 20070126,
    name: " カタハネ "
}, {
    mdate: 20070126,
    name: " 車輪の国、悠久の少年少女 "
}, {
    mdate: 20070126,
    name: " 夏めろ "
}, {
    mdate: 20070217,
    name: " 送電塔のミメイ "
}, {
    mdate: 20070406,
    name: " 和み匣 "
}, {
    mdate: 20070427,
    name: " アメサラサ"
}, {
    mdate: 20070427,
    name: " Lamento -BEYOND THE VOID- "
}, {
    mdate: 20070515,
    name: " narcissu-SIDE2nd-"
}, {
    mdate: 20070525,
    name: " つくとり "
}, {
    mdate: 20070601,
    name: " E×E "
}, {
    mdate: 20070612,
    name: " Dream Chronicles "
}, {
    mdate: 20070712,
    name: " メモリーズオフ#5 encore "
}, {
    mdate: 20070727,
    name: " LIttle Busters! リトルバスターズ。"
}, {
    mdate: 20070727,
    name: " あかね色に染まる坂"
}, {
    mdate: 20070817,
    name: " いたずラブ ひと気のない公園で少女と愛を育もう "
}, {
    mdate: 20070824,
    name: " Clear－クリア－ "
}, {
    mdate: 20070824,
    name: " Purely ～その狭い青空を見上げて～ "
}, {
    mdate: 20070831,
    name: " テレビの消えた日 "
}, {
    mdate: 20071026,
    name: " √after and another "
}, {
    mdate: 20071122,
    name: " キラ☆キラ"
}, {
    mdate: 20071122,
    name: " そして明日の世界より-- "
}, {
    mdate: 20071122,
    name: " 赫炎のインガノック-Whatabeautifulpeople- "
}, {
    mdate: 20071122,
    name: " 世界でいちばんNGな恋 "
}, {
    mdate: 20071130,
    name: " 明日の君と逢うために "
}, {
    mdate: 20071220,
    name: " Myself ; Yourself"
}, {
    mdate: 20071221,
    name: " Clover Point "
}, {
    mdate: 20071231,
    name: " ひまわり "
}, {
    mdate: 20071231,
    name: " 悪の教科書 Textbook Of Evil "
}, {
    mdate: 20080125,
    name: " FORTUNEARTERIAL "
}, {
    mdate: 20080125,
    name: " Garden "
}, {
    mdate: 20080125,
    name: " さくらシュトラッセ"
}, {
    mdate: 20080131,
    name: " 放課後少年"
}, {
    mdate: 20080313,
    name: " 12RIVEN -the Ψcliminal of integral- "
}, {
    mdate: 20080327,
    name: " 暁の護衛 "
}, {
    mdate: 20080328,
    name: " 君が望む永遠 ～Latest Edition～ "
}, {
    mdate: 20080328,
    name: " 媚肉の香り～ネトリネトラレヤリヤラレ～ "
}, {
    mdate: 20080425,
    name: " 11eyes－罪と罰と贖いの少女－"
}, {
    mdate: 20080425,
    name: " CHAOS;HEAD "
}, {
    mdate: 20080503,
    name: " Clear～クリスタルストーリーズ～ "
}, {
    mdate: 20080503,
    name: " 缸底 鉢の底 "
}, {
    mdate: 20080523,
    name: " 夏空カナタ"
}, {
    mdate: 20080529,
    name: " G線上の魔王 "
}, {
    mdate: 20080530,
    name: " ef -the latter tale "
}, {
    mdate: 20080613,
    name: " 戦女神ZERO "
}, {
    mdate: 20080626,
    name: " るいは智を呼ぶ "
}, {
    mdate: 20080711,
    name: " タユタマ-Kiss on my Deity- "
}, {
    mdate: 20080725,
    name: " Little Busters! EX リトルバスターズ。エクスタシー "
}, {
    mdate: 20080725,
    name: " リトルバスターズ。エクスタシー "
}, {
    mdate: 20080725,
    name: " 飼育白書～鎖に繋がれた同級生～ "
}, {
    mdate: 20080725,
    name: " 霞外籠逗留記 "
}, {
    mdate: 20080731,
    name: " 春色桜瀬 "
}, {
    mdate: 20080816,
    name: " MYTH "
}, {
    mdate: 20080829,
    name: " 水平線まで何マイル?-Deep Blue Sky & Pure White Wings- "
}, {
    mdate: 20080925,
    name: " AQUANAUT'S HOLIDAY ~隠された記録~ "
}, {
    mdate: 20080926,
    name: " スマガ-StarMineGirl "
}, {
    mdate: 20081024,
    name: " みちくさ ～Loitering on the way～ "
}, {
    mdate: 20081128,
    name: " 坂上台风 さかあがりハリケーン "
}, {
    mdate: 20081204,
    name: " 428 ～被封锁的涩谷～ 428 ～封鎖された渋谷で～ "
}, {
    mdate: 20081226,
    name: " D.C.II P.C. "
}, {
    mdate: 20081226,
    name: " 星歌 ほしうた "
}, {
    mdate: 20090130,
    name: " Flyable Heart"
}, {
    mdate: 20090130,
    name: " 俺たちに翼はない "
}, {
    mdate: 20090214,
    name: " キナナキノ森 "
}, {
    mdate: 20090227,
    name: " 夜明け前より瑠璃色な -Brighter than dawning blue-（PC) "
}, {
    mdate: 20090227,
    name: " 夜明け前より瑠璃色な-Moonlight Cradle- "
}, {
    mdate: 20090319,
    name: " アマガミ "
}, {
    mdate: 20090327,
    name: " BALDR SKY Dive1 "

}, {
    mdate: 20090327,
    name: " 星空のメモリア－Wish upon a shooting star－ "
}, {
    mdate: 20090424,
    name: " Phantom INTEGRATION "
}, {
    mdate: 20090427,
    name: " narcissu 3rd -Die Driette Welt- "
}, {
    mdate: 20090528,
    name: " メモリーズオフ6 ~T-Wave~"
}, {
    mdate: 20090529,
    name: " タユタマ -It’s happy days- "
}, {
    mdate: 20090529,
    name: " と乙女に祝福を "
}, {
    mdate: 20090529,
    name: " 天神乱漫 -LUCKY or UNLUCKY!?-"
}, {
    mdate: 20090626,
    name: " D.C.II To You"
}, {
    mdate: 20090626,
    name: " さくらさくら "
}, {
    mdate: 20090626,
    name: " 鬼うた。 "
}, {
    mdate: 20090626,
    name: " 夢幻廻廊2 "
}, {
    mdate: 20090724,
    name: " きっと、澄みわたる朝色よりも、 "
}, {
    mdate: 20090724,
    name: " 紅殻町博物誌 "
}, {
    mdate: 20090724,
    name: " 終わりなき夏 永遠なる音律"
}, {
    mdate: 20090731,
    name: " あの蒼い海より "
}, {
    mdate: 20090731,
    name: " ナツユメナギサ "
}, {
    mdate: 20090731,
    name: " 夏梦渚 ナツユメナギサ "
}, {
    mdate: 20090827,
    name: " メモリーズオフ6 Next Relation "
}, {
    mdate: 20090828,
    name: " 真剣で私に恋しなさい! "
}, {
    mdate: 20090903,
    name: " ラブプラス"
}, {
    mdate: 20090918,
    name: " eden*"
}, {
    mdate: 20090918,
    name: " LOVE×EVOLUTION "
}, {
    mdate: 20090918,
    name: " 恋文ロマンチカ "
}, {
    mdate: 20090924,
    name: " おね～さまイジメ "
}, {
    mdate: 20090925,
    name: " 夏ノ雨 "
}, {
    mdate: 20090925,
    name: " ハルカナソラ "
}, {
    mdate: 20091015,
    name: " Steins;Gate "
}, {
    mdate: 20091030,
    name: " キスと魔王と紅茶 ～Kiss×Lord×Darjeeling～ "
}, {
    mdate: 20091030,
    name: " ましろ色シンフォニー -Love is Pure White- "
}, {
    mdate: 20091030,
    name: " 幼なじみは大統領 "
}, {
    mdate: 20091030,
    name: " 装甲悪鬼村正 "
}, {
    mdate: 20091120,
    name: " 白光のヴァルーシア～What a beautiful hopes～"
}, {
    mdate: 20091127,
    name: " BALDR SKY Dive2 "
}, {
    mdate: 20091127,
    name: " Dark Blue"
}, {
    mdate: 20091211,
    name: " しろくまベルスターズ♪ "
}, {
    mdate: 20091211,
    name: " 白雪~七凭之祭 クロウカシス 七憑キノ贄 "
}, {
    mdate: 20091218,
    name: " D.C.II Fall in Love "
}, {
    mdate: 20091218,
    name: " 花鳥風月～恋ニヲチタル花園ノ姫～ "
}, {
    mdate: 20091221,
    name: " And Everything Started to Fall "
}, {
    mdate: 20091225,
    name: " Diesirae～ActaestFabula～ "
}, {
    mdate: 20091225,
    name: " ヴィザルの日記 "
}, {
    mdate: 20091225,
    name: " 神怒之日 ～剧终～ Dies irae 〜Acta est Fabula〜"
}, {
    mdate: 20100129,
    name: " はるかぜどりに、とまりぎを。2nd Story ～月の扉と海の欠片～ "
}, {
    mdate: 20100129,
    name: " 鬼まり。 "
}, {
    mdate: 20100129,
    name: " 星空のメモリア Eternal Heart"
}, {
    mdate: 20100129,
    name: " 月染の枷鎖 -the end of scarlet luna- "
}, {
    mdate: 20100211,
    name: " 麻衣ちゃんの誘惑 "
}, {
    mdate: 20100219,
    name: " Rain memory－あまやどり－ "
}, {
    mdate: 20100306,
    name: " 星空不在的梦境 "
}, {
    mdate: 20100319,
    name: " Cross Days "
}, {
    mdate: 20100325,
    name: " 天神乱漫 Happy Go Lucky。。"
}, {
    mdate: 20100326,
    name: " WHITE ALBUM2 -introductory chapter- "
}, {
    mdate: 20100326,
    name: " 恋色空模様"
}, {
    mdate: 20100326,
    name: " 素晴らしき日々～不连続存在～ "
}, {
    mdate: 20100422,
    name: " ひまわり -Pebble in the Sky- Portable"
}, {
    mdate: 20100423,
    name: " 戦女神VERITA"
}, {
    mdate: 20100504,
    name: " Humanity "
}, {
    mdate: 20100522,
    name: " モミジは紅く其の身を染めて"
}, {
    mdate: 20100528,
    name: " PrismRhythm -プリズムリズム-"
}, {
    mdate: 20100528,
    name: " うたてめぐり "
}, {
    mdate: 20100528,
    name: " ぜったい遵守☆強制子作り許可証!!"
}, {
    mdate: 20100528,
    name: " リアル妹がいる大泉くんのばあい "
}, {
    mdate: 20100528,
    name: " 君の名残は静かに揺れて "
}, {
    mdate: 20100624,
    name: " WHITE ALBUM -綴られる冬の想い出- "
}, {
    mdate: 20100624,
    name: " ラブプラス+ "
}, {
    mdate: 20100624,
    name: " 光輪の町、ラベンダーの少女"
}, {
    mdate: 20100625,
    name: " クドわふたー "
}, {
    mdate: 20100630,
    name: " 暗い部屋 "
}, {
    mdate: 20100721,
    name: " Limbo "
}, {
    mdate: 20100722,
    name: " your diary "
}, {
    mdate: 20100722,
    name: " 黄昏のシンセミア "
}, {
    mdate: 20100723,
    name: " ゴスデリ "
}, {
    mdate: 20100723,
    name: " 信天翁航海録 "
}, {
    mdate: 20100729,
    name: " セカンドノベル ～彼女の夏、15分の記憶～"
}, {
    mdate: 20100729,
    name: " メモリーズオフ ゆびきりの記憶 "
}, {
    mdate: 20100730,
    name: " 星空へ架かる橋 "
}, {
    mdate: 20100807,
    name: " 滅び朽ちる世界に追憶の花束を "
}, {
    mdate: 20100814,
    name: " ひまわり アクアアフター "
}, {
    mdate: 20100814,
    name: " 少女と世界とお菓子の剣～Route of NANA～ "
}, {
    mdate: 20100819,
    name: " 超次元ゲイム ネプテューヌ "
}, {
    mdate: 20100917,
    name: " リア獣ハンター優子"
}, {
    mdate: 20100917,
    name: " 天使の日曜日 "
}, {
    mdate: 20101008,
    name: " ぼくのゆめみるみらい "
}, {
    mdate: 20101029,
    name: " 恋と選挙とチョコレート "
}, {
    mdate: 20101029,
    name: " 恋神 -ラブカミ-"
}, {
    mdate: 20101029,
    name: " 如月金★星 キサラギGOLD★STAR "
}, {
    mdate: 20101125,
    name: " 恋爱蜡笔 空之艺术"
}, {
    mdate: 20101126,
    name: " らぶデス555。～ν-Realtime Lovers～ "
}, {
    mdate: 20101126,
    name: " 失われた未来を求めて "
}, {
    mdate: 20101126,
    name: " 紫影のソナーニル～What a beautiful memories～ "
}, {
    mdate: 20101217,
    name: " Hello,good-bye "
}, {
    mdate: 20101224,
    name: " のーぶる☆わーくす"
}, {
    mdate: 20110128,
    name: " AQUA "
}, {
    mdate: 20110128,
    name: " BLOODY†RONDO "
}, {
    mdate: 20110225,
    name: " Flyable CandyHeart "
}, {
    mdate: 20110225,
    name: " グリザイアの果実 "
}, {
    mdate: 20110225,
    name: " ラブラブル～Lover Able～"
}, {
    mdate: 20110325,
    name: " すれちがいMii広場 "
}, {
    mdate: 20110330,
    name: " 神学校 -Noli me tangere-"
}, {
    mdate: 20110422,
    name: " Marguerite Sphere -マーガレット スフィア- "
}, {
    mdate: 20110422,
    name: " sisters～夏の最後の日～ "
}, {
    mdate: 20110422,
    name: " 神採りアルケミーマイスター"
}, {
    mdate: 20110428,
    name: " 穢翼のユースティア"
}, {
    mdate: 20110428,
    name: " 手毬花 "
}, {
    mdate: 20110428,
    name: " 最後の約束の物語 "
}, {
    mdate: 20110501,
    name: " ねがいごとがかなったら "
}, {
    mdate: 20110520,
    name: " CURE GIRL"
}, {
    mdate: 20110527,
    name: " 鬼哭街 -涙尽鈴音響 "
}, {
    mdate: 20110527,
    name: " 恋ではなく ――It’s not love, but so where near."
}, {
    mdate: 20110603,
    name: " 夏雪～summer_snow～ "
}, {
    mdate: 20110610,
    name: " キミとボクとエデンの林檎 "
}, {
    mdate: 20110619,
    name: " 孤独に効く百合 "
}, {
    mdate: 20110624,
    name: " euphoria "
}, {
    mdate: 20110624,
    name: " LOVELY×CATION"
}, {
    mdate: 20110624,
    name: " Rewrite "
}, {
    mdate: 20110624,
    name: " すきま桜とうその都会 "
}, {
    mdate: 20110630,
    name: " ましろ色シンフォニー *mutsu-no-hana"
}, {
    mdate: 20110728,
    name: " 死神と少女"
}, {
    mdate: 20110729,
    name: " いきなりあなたに恋している"
}, {
    mdate: 20110729,
    name: " 天使の羽根を踏まないでっ "
}, {
    mdate: 20110729,
    name: " 戦国天使ジブリール"
}, {
    mdate: 20110812,
    name: " EDGE "
}, {
    mdate: 20110813,
    name: " WORLD END ECONOMiCA Episode.1"
}, {
    mdate: 20110813,
    name: " グリーフシンドローム "
}, {
    mdate: 20110813,
    name: " 鍵っ子少女 ～陽射しの中のおるすばん～ "
}, {
    mdate: 20110813,
    name: " 誰が殺したコマドリを "
}, {
    mdate: 20110814,
    name: " 妹調教日記～こんなツンデレが俺の妹なわけない。～ "
}, {
    mdate: 20110826,
    name: " 兰斯8 ランス・クエスト "
}, {
    mdate: 20110902,
    name: " 未来ノスタルジア "
}, {
    mdate: 20110930,
    name: " SuGirly Wish "
}, {
    mdate: 20110930,
    name: " 姉はカノジョで専属メイド "
}, {
    mdate: 20111006,
    name: " 次の犠牲者をオシラセシマス -君とこの果てることない暗闇を- "
}, {
    mdate: 20111021,
    name: " 叙事曲 "
}, {
    mdate: 20111028,
    name: " 恋愛0キロメートル "
}, {
    mdate: 20111030,
    name: " NOeSIS-嘘を吐いた記憶の物語- "
}, {
    mdate: 20111125,
    name: " Strawberry Nauts -ストロベリーノーツ- "
}, {
    mdate: 20111125,
    name: " 花散峪山人考 "
}, {
    mdate: 20111125,
    name: " 晴れときどきお天気雨 "
}, {
    mdate: 20111125,
    name: " 無限煉姦～淫辱にまみれし不死姫の輪舞～ "
}, {
    mdate: 20111125,
    name: " 揺り籠より天使まで"
}, {
    mdate: 20111222,
    name: " WHITE ALBUM2 -closing chapter- "
}, {
    mdate: 20111222,
    name: " 花咲く乙女と恋の魔導書 "
}, {
    mdate: 20111222,
    name: " 七つのふしぎの終わるとき "
}, {
    mdate: 20111223,
    name: " Зимняя Сказка"
}, {
    mdate: 20111229,
    name: " すぴぱら NICE TO MEET YOU。 "
}, {
    mdate: 20120104,
    name: " かたわ少女"
}, {
    mdate: 20120113,
    name: " Train of Afterlife "
}, {
    mdate: 20120202,
    name: " フォトカノ"
}, {
    mdate: 20120214,
    name: " NEWラブプラス "
}, {
    mdate: 20120224,
    name: " グリザイアの迷宮 "
}, {
    mdate: 20120224,
    name: " はつゆきさくら "
}, {
    mdate: 20120224,
    name: " ホチキス "
}, {
    mdate: 20120224,
    name: " ツクモノツキ "
}, {
    mdate: 20120330,
    name: " DRACU-RIOT! "
}, {
    mdate: 20120330,
    name: " 屋上の百合霊さん "
}, {
    mdate: 20120330,
    name: " 乙女が紡ぐ恋のキャンバス "
}, {
    mdate: 20120412,
    name: " 魔法使いの夜 "
}, {
    mdate: 20120427,
    name: " 星空へ架かる橋AA "
}, {
    mdate: 20120427,
    name: " D.C.III ～ダ・カーポIII～ "
}, {
    mdate: 20120427,
    name: " はるまで、くるる。"
}, {
    mdate: 20120427,
    name: " ゆきいろ ～空に六花の住む町～ "
}, {
    mdate: 20120518,
    name: " すぴぱら STORY #01 - Spring Has Come。"
}, {
    mdate: 20120525,
    name: " この大空に、翼を広げて "
}, {
    mdate: 20120527,
    name: " 朱红前传·赤印 "
}, {
    mdate: 20120628,
    name: " 零 〜眞紅の蝶〜 "
}, {
    mdate: 20120629,
    name: " 1/2 summer "
}, {
    mdate: 20120629,
    name: " アステリズム -Astraythem- "
}, {
    mdate: 20120629,
    name: " 初恋1/1"
}, {
    mdate: 20120712,
    name: " タイムトラベラーズ "
}, {
    mdate: 20120713,
    name: " 花は折りたし梢は高し "
}, {
    mdate: 20120727,
    name: " Rewrite Harvest festa! "
}, {
    mdate: 20120727,
    name: " 古色迷宮輪舞曲 ～HISTOIRE DE DESTIN～ "
}, {
    mdate: 20120727,
    name: " 時をかける処女 ～破瓜永久連鎖～ "
}, {
    mdate: 20120824,
    name: " さくら、咲きました。 "
}, {
    mdate: 20120831,
    name: " 中の人などいない。 トーキョー・ヒーロー・プロジェクト "
}, {
    mdate: 20120928,
    name: " ピュアガール "
}, {
    mdate: 20120928,
    name: " 彼女はオレからはなれない "
}, {
    mdate: 20121024,
    name: " NOeSIS02-羽化- "
}, {
    mdate: 20121026,
    name: " 花色ヘプタグラム "
}, {
    mdate: 20121026,
    name: " 月に寄りそう乙女の作法 "
}, {
    mdate: 20121026,
    name: " 祝福の鐘の音は、桜色の風と共に "
}, {
    mdate: 20121029,
    name: " ガールフレンド(仮) "
}, {
    mdate: 20121122,
    name: " 乙女が紡ぐ恋のキャンバス 二人のギャラリー"
}, {
    mdate: 20121130,
    name: " あえて無視するキミとの未来 ～Relay broadcast～ "
}, {
    mdate: 20121130,
    name: " この世界の向こうで"
}, {
    mdate: 20121130,
    name: " ないしょのないしょ。 "
}, {
    mdate: 20121210,
    name: " 狂父 マッドファーザー "
}, {
    mdate: 20121214,
    name: " いますぐお兄ちゃんに妹だっていいたい。 "
}, {
    mdate: 20121214,
    name: " 黄昏の先にのぼる明日 -あっぷりけFanDisc-"
}, {
    mdate: 20121220,
    name: " 水平線まで何マイル？-ORIGINAL FLIGHT- "
}, {
    mdate: 20121220,
    name: " 天作之合 "
}, {
    mdate: 20121221,
    name: " 夏空のペルセウス "
}, {
    mdate: 20121221,
    name: " キミへ贈る、ソラの花 "
}, {
    mdate: 20121225,
    name: " Color of White "
}, {
    mdate: 20121231,
    name: " ファタモルガーナの館 "
}, {
    mdate: 20121231,
    name: " 背徳せんせーしょん"
}, {
    mdate: 20130123,
    name: " お兄ちゃんにはぜったい言えないたいせつなこと。 "
}, {
    mdate: 20130125,
    name: " この大空に、翼をひろげて FLIGHT DIARY"
}, {
    mdate: 20130125,
    name: " マテリアルブレイブ　イグニッション"
}, {
    mdate: 20130125,
    name: " 時計仕掛けのレイライン －残影の夜が明ける時－ "
}, {
    mdate: 20130125,
    name: " 夏の終わりのニルヴァーナ"
}, {
    mdate: 20130208,
    name: " 虚ノ少女 "
}, {
    mdate: 20130214,
    name: " さくら荘のペットな彼女 "
}, {
    mdate: 20130222,
    name: " 木洩れ陽のノスタルジーカ -Raggio di sole nostalgico- "
}, {
    mdate: 20130329,
    name: " 流星☆キセキ -SHOOTING PROBE- "
}, {
    mdate: 20130329,
    name: " 向日葵の教会と長い夏休み "
}, {
    mdate: 20130404,
    name: " 清明节的鬼很萌 "
}, {
    mdate: 20130406,
    name: " セブンスコート "
}, {
    mdate: 20130426,
    name: " LOVELY×CATION2 "
}, {
    mdate: 20130426,
    name: " 少女神域∽少女天獄"
}, {
    mdate: 20130426,
    name: " 運命予報をお知らせします "
}, {
    mdate: 20130502,
    name: " Punisher "
}, {
    mdate: 20130524,
    name: " D.C.III R〜ダ・カーポIII アール〜 "
}, {
    mdate: 20130524,
    name: " グリザイアの楽園 "
}, {
    mdate: 20130524,
    name: " 逃避行GAME "
}, {
    mdate: 20130531,
    name: " Magical Charming!"
}, {
    mdate: 20130531,
    name: " レミニセンス "
}, {
    mdate: 20130531,
    name: " 風雨来記3 "
}, {
    mdate: 20130628,
    name: " Berry's "
}, {
    mdate: 20130628,
    name: " ずっとすきして たくさんすきして "
}, {
    mdate: 20130628,
    name: " フレラバ "
}, {
    mdate: 20130628,
    name: " 双子座的paradox 双子座のパラドクス"
}, {
    mdate: 20130628,
    name: " 夏日云悠悠 なつくもゆるる"
}, {
    mdate: 20130701,
    name: " ふたりぐらしの事情 ～芽衣の日常編～ "
}, {
    mdate: 20130726,
    name: " つるぺた×NTR 幼なじみ彼女の3年間の調教記録 "
}, {
    mdate: 20130726,
    name: " 聖娼女 ～性奴育成学園～ "
}, {
    mdate: 20130726,
    name: " 天色＊アイルノーツ"
}, {
    mdate: 20130726,
    name: " 乙女理論とその周辺-Ecole de Paris-"
}, {
    mdate: 20130726,
    name: " 雨音（あまね）スイッチ ～やまない雨と病んだ彼女そして俺～"
}, {
    mdate: 20130810,
    name: " 大図書館の羊飼い～放課後しっぽデイズ～ "
}, {
    mdate: 20130811,
    name: " パコられ "
}, {
    mdate: 20130830,
    name: " PriministAr "
}, {
    mdate: 20130830,
    name: " ラブesエム "
}, {
    mdate: 20130927,
    name: " Magical Marriage Lunatics!! "
}, {
    mdate: 20130927,
    name: " カルマルカ＊サークル "
}, {
    mdate: 20130927,
    name: " 夏の幼馴染と、冬のカノジョ"
}, {
    mdate: 20131025,
    name: " ものべの -happy end- "
}, {
    mdate: 20131025,
    name: " 小小的她的小夜曲 ちいさな彼女の小夜曲 "
}, {
    mdate: 20131129,
    name: " あまたらすリドルスター "
}, {
    mdate: 20131204,
    name: " Starbound"
}, {
    mdate: 20131220,
    name: " あやめの町とお姫様"
}, {
    mdate: 20131221,
    name: " Бесконечное лето"
}, {
    mdate: 20131221,
    name: " 大海原と大海原 "
}, {
    mdate: 20131225,
    name: " 冬のさざなみ "
}, {
    mdate: 20140131,
    name: " 12の月のイヴ "
}, {
    mdate: 20140131,
    name: " キスアト "
}, {
    mdate: 20140131,
    name: " コトバの消えた日～心まで裸にする純愛調教～"
}, {
    mdate: 20140131,
    name: " 桃色恋恋（れんげ）"
}, {
    mdate: 20140217,
    name: " SummerGirl-夏之少女与我- Summer Girl-夏の少女とボク- "
}, {
    mdate: 20140228,
    name: " ハピメア Fragmentation Dream "
}, {
    mdate: 20140328,
    name: " Clover Day's "
}, {
    mdate: 20140328,
    name: " ひこうき雲の向こう側 "
}, {
    mdate: 20140328,
    name: " 大図書館の羊飼い -Dreaming Sheep-"
}, {
    mdate: 20140418,
    name: " FLOWERS -Le volume sur printemps-"
}, {
    mdate: 20140425,
    name: " 13人の麗しきケダモノ "
}, {
    mdate: 20140425,
    name: " D.C.III P.P. ～ダ・カーポIII プラチナパートナー～"
}, {
    mdate: 20140425,
    name: " Love Sweets "
}, {
    mdate: 20140425,
    name: " PRETTY×CATION"
}, {
    mdate: 20140426,
    name: " 第七号列车"
}, {
    mdate: 20140530,
    name: " Golden Marriage "
}, {
    mdate: 20140530,
    name: " your diary ＋H"
}, {
    mdate: 20140530,
    name: " はるかかなた "
}, {
    mdate: 20140530,
    name: " 放課後の不適格者 "
}, {
    mdate: 20140530,
    name: " 妹寝取り ～身も心もお兄ちゃんのモノ～ "
}, {
    mdate: 20140530,
    name: " 魔女こいにっき "
}, {
    mdate: 20140627,
    name: " しゅきしゅきだいしゅき "
}, {
    mdate: 20140627,
    name: " 恋がさくころ桜どき"
}, {
    mdate: 20140720,
    name: " 高考恋爱100天 "
}, {
    mdate: 20140725,
    name: " アストラエアの白き永遠 "
}, {
    mdate: 20140725,
    name: " この大空に、翼をひろげて SNOW PRESENTS "
}, {
    mdate: 20140725,
    name: " ひとりのクオリア "
}, {
    mdate: 20140725,
    name: " ふたりのクオリア "
}, {
    mdate: 20140725,
    name: " 星織ユメミライ "
}, {
    mdate: 20140725,
    name: " 友爱 フラテルニテ"
}, {
    mdate: 20140817,
    name: " さよなら、うつつ。"
}, {
    mdate: 20140819,
    name: " 山桂 "
}, {
    mdate: 20140823,
    name: " 雨港基隆 "
}, {
    mdate: 20140829,
    name: " PRIMAL×HEARTS"
}, {
    mdate: 20140829,
    name: " サツコイ～悠久なる恋の歌～"
}, {
    mdate: 20140829,
    name: " できない私が、くり返す。 "
}, {
    mdate: 20140829,
    name: " 晴のちきっと菜の花びより "
}, {
    mdate: 20140926,
    name: " あの晴れわたる空より高く "
}, {
    mdate: 20140926,
    name: " お兄ちゃん、右手の使用を禁止します。 "
}, {
    mdate: 20140926,
    name: " なないろリンカネーション "
}, {
    mdate: 20140926,
    name: " 南十字星恋歌 "
}, {
    mdate: 20141024,
    name: " 輪舞曲Duo -夜明けのフォルテシモ- "
}, {
    mdate: 20141031,
    name: " 迷える2人とセカイのすべて"
}, {
    mdate: 20141031,
    name: " 箱庭ロジック "
}, {
    mdate: 20141128,
    name: " キミのとなりで恋してる。 "
}, {
    mdate: 20141128,
    name: " 恋する彼女の不器用な舞台 "
}, {
    mdate: 20141128,
    name: " 憑夜ノ村 "
}, {
    mdate: 20141128,
    name: " 夏色蜜汗 ～えっちな少女としたたる匂い～ "
}, {
    mdate: 20141128,
    name: " 乙女が奏でる恋のアリア "
}, {
    mdate: 20141128,
    name: " 蛍火ノ少女"
}, {
    mdate: 20141219,
    name: " 彼女のセイイキ "
}, {
    mdate: 20141219,
    name: " 紙の上の魔法使い "
}, {
    mdate: 20141226,
    name: " ヒマワリと恋の記憶"
}, {
    mdate: 20141230,
    name: " 雨のマージナル "
}, {
    mdate: 20150129,
    name: " 黒蝶のサイケデリカ"
}, {
    mdate: 20150130,
    name: " ハルキス "
}, {
    mdate: 20150130,
    name: " 時計仕掛けのレイライン-朝霧に散る花- "
}, {
    mdate: 20150130,
    name: " 夏の色のノスタルジア "
}, {
    mdate: 20150220,
    name: " 幼すぎる幼妻 "
}, {
    mdate: 20150227,
    name: " エロ本を捨ててから兄の様子がおかしい "
}, {
    mdate: 20150227,
    name: " サノバウィッチ "
}, {
    mdate: 20150227,
    name: " ソレヨリノ前奏诗 "
}, {
    mdate: 20150227,
    name: " ぼくの一人戦争 "
}, {
    mdate: 20150327,
    name: " ゆきこいめると "
}, {
    mdate: 20150327,
    name: " 花の野に咲くうたかたの "
}, {
    mdate: 20150327,
    name: " 花咲ワークスプリング。 "
}, {
    mdate: 20150417,
    name: " FLOWERS - Le volume sur été -"
}, {
    mdate: 20150424,
    name: " クロノクロック "
}, {
    mdate: 20150424,
    name: " 神のラプソディ "
}, {
    mdate: 20150424,
    name: " 夏娃年代记 Evenicle -イブニクル- "
}, {
    mdate: 20150430,
    name: " 白衣性愛情依存症 "
}, {
    mdate: 20150509,
    name: " 五月茉莉 Episode01 何谓神？ "
}, {
    mdate: 20150529,
    name: " すみれ "
}, {
    mdate: 20150529,
    name: " ピュア×コネクト "
}, {
    mdate: 20150529,
    name: " 恋想リレーション "
}, {
    mdate: 20150529,
    name: " 少女アクティビティ"
}, {
    mdate: 20150529,
    name: " 円交少女 ～陸上部ゆっきーの場合～"
}, {
    mdate: 20150626,
    name: " LOVEREC. "
}, {
    mdate: 20150626,
    name: " 妹ニート更正調教 "
}, {
    mdate: 20150724,
    name: " ソーサリージョーカーズ "
}, {
    mdate: 20150816,
    name: " 箱庭の学園"
}, {
    mdate: 20150828,
    name: " トラベリングスターズ "
}, {
    mdate: 20150828,
    name: " 妹のセイイキ "
}, {
    mdate: 20150828,
    name: " 妻色少女 ～ふうふせいかつ、始めます～ "
}, {
    mdate: 20150828,
    name: " 天気雨 "
}, {
    mdate: 20150924,
    name: " うたわれるもの 偽りの仮面"
}, {
    mdate: 20150925,
    name: " 僕と恋するポンコツアクマ。"
}, {
    mdate: 20151030,
    name: " PRIMAL×HEARTS2 "
}, {
    mdate: 20151030,
    name: " こころリスタ。 "
}, {
    mdate: 20151030,
    name: " 恋×シンアイ彼女 "
}, {
    mdate: 20151030,
    name: " 天ノ空レトロスペクト "
}, {
    mdate: 20151127,
    name: " キミのとなりで恋してる。 -THE RESPECTIVE HAPPINESS- "
}, {
    mdate: 20151127,
    name: " ちんくる★ツインクル フェスティバル。 "
}, {
    mdate: 20151127,
    name: " ハルウソ-Passing Memories"
}, {
    mdate: 20151127,
    name: " 果つることなき未来ヨリ "
}, {
    mdate: 20151127,
    name: " 嫁探しが捗りすぎてヤバい。"
}, {
    mdate: 20151127,
    name: " 恋する気持ちのかさねかた "
}, {
    mdate: 20151127,
    name: " 乱れ雪月華!! ～儚く散る細雪～ "
}, {
    mdate: 20151127,
    name: " 蜥蜴の尻尾切り "
}, {
    mdate: 20151210,
    name: " STEINS;GATE 0"
}, {
    mdate: 20151218,
    name: " ソラコイ "
}, {
    mdate: 20151218,
    name: " 見上げてごらん、夜空の­星を "
}, {
    mdate: 20151224,
    name: " 魔女こいにっき Dragon×Caravan "
}, {
    mdate: 20151225,
    name: " アマカノ～Second Season～ "
}, {
    mdate: 20151225,
    name: " 天文時計のアリア "
}, {
    mdate: 20151231,
    name: " ゆびきり婚約ロリイタ "
}, {
    mdate: 20160129,
    name: " 祝姫 "
}, {
    mdate: 20160223,
    name: " Crescent －新月－"
}, {
    mdate: 20160226,
    name: " ノラと皇女と野良猫ハート "
}, {
    mdate: 20160226,
    name: " 甘えかたは彼女なりに。 "
}, {
    mdate: 20160226,
    name: " 間宮くんちの五つ子事情 "
}, {
    mdate: 20160226,
    name: " 罪ノ光ランデヴー "
}, {
    mdate: 20160314,
    name: " 十二色的季节 Season of 12 Colors "
}, {
    mdate: 20160325,
    name: " オモカゲ "
}, {
    mdate: 20160325,
    name: " まいてつ "
}, {
    mdate: 20160325,
    name: " 少女たちは荒野を目指す "
}, {
    mdate: 20160325,
    name: " 時を紡ぐ約束 "
}, {
    mdate: 20160331,
    name: " この大空に、翼をひろげて CRUISE SIGN "
}, {
    mdate: 20160404,
    name: " 清明节的鬼不太萌 "
}, {
    mdate: 20160422,
    name: " ナツウソ-Ahead of the reminiscence- "
}, {
    mdate: 20160428,
    name: " D.S. -Dal Segno- "
}, {
    mdate: 20160428,
    name: " Punch Line パンチライン "
}, {
    mdate: 20160428,
    name: " この恋、青春により。"
}, {
    mdate: 20160428,
    name: " りりくる Rainbow Stage!!!"
}, {
    mdate: 20160428,
    name: " 夏の孤島の闇の声 "
}, {
    mdate: 20160428,
    name: " 夏ノ鎖 "
}, {
    mdate: 20160430,
    name: " 彼方木棉 "
}, {
    mdate: 20160527,
    name: " FLOWERS - Le volume sur AUTOMNE- "
}, {
    mdate: 20160527,
    name: " サクラノモリ†ドリーマーズ"
}, {
    mdate: 20160527,
    name: " そして初恋が妹になる "
}, {
    mdate: 20160527,
    name: " ナツイロココロログ"
}, {
    mdate: 20160527,
    name: " 見上げてごらん、夜空の星を FINE DAYS "
}, {
    mdate: 20160527,
    name: " 琉璃的牢笼 瑠璃の檻-ルリ・ノ・イエ- "
}, {
    mdate: 20160527,
    name: " 聖鍵遣いの命題 "
}, {
    mdate: 20160527,
    name: " 乙女理論とその後の周辺 -Belle Epoque- "
}, {
    mdate: 20160609,
    name: " 第九日-The 9th Day- "
}, {
    mdate: 20160609,
    name: " 神明的一天世界 "
}, {
    mdate: 20160616,
    name: " 方根书简 √LETTER "
}, {
    mdate: 20160624,
    name: " オトメ＊ドメイン "
}, {
    mdate: 20160624,
    name: " 手垢塗れの天使 "
}, {
    mdate: 20160628,
    name: " KARAKARA "
}, {
    mdate: 20160721,
    name: " 虹色旋律 "
}, {
    mdate: 20160729,
    name: " アマツツミ"
}, {
    mdate: 20160729,
    name: " フローラル・フローラブ "
}, {
    mdate: 20160729,
    name: " 死に逝く君、館に芽吹く憎悪"
}, {
    mdate: 20160804,
    name: " 相思相愛ロリータの生活 "
}, {
    mdate: 20160826,
    name: " BALDR HEART "
}, {
    mdate: 20160826,
    name: " Corona Blossom vol.1 Gift From the Galaxy"
}, {
    mdate: 20160826,
    name: " 乱れ雪月華 ～月夜の淫舞、狂気の契り～ "
}, {
    mdate: 20160826,
    name: " 銀色、遥か "
}, {
    mdate: 20160923,
    name: " Harmonia -ハルモニア- "
}, {
    mdate: 20160923,
    name: " 千の刃濤、桃花染の皇姬 "
}, {
    mdate: 20160930,
    name: " アキウソ-The only neat thing to do- "
}, {
    mdate: 20160930,
    name: " 面影レイルバック "
}, {
    mdate: 19991224,
    name: " 天使のお仕事 "
}, {
    mdate: 20060615,
    name: " TRUE REMEMBRANCE "
}, {
    mdate: 20160711,
    name: " 第九日 "
}, {
    mdate: 20080303,
    name: " 刻痕 "
}, {
    mdate: 20081024,
    name: " 明日の七海と逢うために "
}, {
    mdate: 20141001,
    name: " 真恋~寄语枫秋~ "
}, {
    mdate: 20160302,
    name: " 去人たちZERO -prologue- "
}, {
    mdate: 20160826,
    name: " 生命のスペア "
}, {
    mdate: 20141119,
    name: " Everlasting Summer "
}, {
    mdate: 20050429,
    name: " サナララ "
}, {
    mdate: 20151222,
    name: " 回忆忘却之匣 "
}, {
    mdate: 20110501,
    name: " 末期、少女病 -Lyrical pop world's end- "
}, {
    mdate: 20160609,
    name: " 且听琴语GR "
}, {
    mdate: 20150509,
    name: " 五月茉莉 Episode01 何谓神？"
}, {
    mdate: 20110723,
    name: " 雾之本境 "
}, {
    mdate: 20111021,
    name: " 叙事曲 "
}, {
    mdate: 20100523,
    name: " 雪之本境 "
}, {
    mdate: 20031128,
    name: " 永遠のアセリア "
}, {
    mdate: 20140823,
    name: " 雨港基隆    "
}, {
    mdate: 20160624,
    name: " 赤印 "
}, {
    mdate: 20160729,
    name: " 末日素描 "
}, {
    mdate: 20160115,
    name: " 颢梦  "
}, {
    mdate: 20040723,
    name: " 黒よりも昏い青 "
}, {
    mdate: 20160923,
    name: " タユタマ2 -you're the only one- "
}, {
    mdate: 20080107,
    name: " ノルカソルカ "
}, {
    mdate: 20080731,
    name: " 東京アリス "
}, {
    mdate: 20031128,
    name: " Clover Heart's "
}, {
    mdate: 20110930,
    name: " NEW 恋騎士 Purely★Kiss "
}, {
    mdate: 20121214,
    name: " 彼女と俺と恋人と。 "
}, {
    mdate: 20121026,
    name: " 恋色マリアージュ "
}, {
    mdate: 20080125,
    name: " FORTUNE ARTERIAL "
}, {
    mdate: 20160129,
    name: " LOVEREC. -ミニシアターズ- "
}, {
    mdate: 20160129,
    name: " 凍京NECRO "
}, {
    mdate: 20160129,
    name: " 妻みぐい3 "
}, {
    mdate: 20160129,
    name: " はにかみCLOVER "
}, {
    mdate: 20140228,
    name: " イノセントガール "
}, {
    mdate: 20150529,
    name: " 迷える2人とセカイのすべて LOVE HEAVEN 300％ "
}, {
    mdate: 20160304,
    name: " グリザイアの旋律 "
}, {
    mdate: 20151225,
    name: " グリザイアの残光  "
}, {
    mdate: 20140131,
    name: " 世界と世界の真ん中で "
}, {
    mdate: 20141031,
    name: " 運命線上のΦ "
}, {
    mdate: 20140328,
    name: " ももいろ性癖開放宣言！ "
},{
    mdate:"20110729",
    name:" 闇色のスノードロップス "
}
,{
    mdate:"20060127",
    name:" 波の間に間に ～さざなみ診療所～ "
},{
    mdate:"20060130",
    name:" 火树银花 "
},{
    mdate:"20110501",
    name:" 紫罗兰·里 Season2 -Reflection in the water- "
},{
    mdate:"20091101",
    name:" 鸑鷟：镜花水月 "
},{
    mdate:"20121226",
    name:" 苍蓝眼瞳的人偶 "
},{
    mdate:"20080726",
    name:" 穿过春天的魔法师 "
},{
    mdate:"20160611",
    name:" 且听琴语 Grobda Remix "
},{
    mdate:"20151223",
    name:" Once' "
},{
    mdate:"20160104",
    name:" 颢梦 "
},{
    mdate:"20151113",
    name:" 叙事曲2：星空下的诺言 "
},{
    mdate:"20160303",
    name:" 亿万年的星光 -Stars of the fairy tale "
},{
    mdate:"20130727",
    name:" 與死神渡過的七日～LastDay～ "
},{
    mdate:"20160129",
    name:" 女装してお嬢様学校に潜入しようとしたら、間違えて隣の底辺男子校に入ってしまったボク "
},{
    mdate:"20160228",
    name:" 迎接春天的魔法师 "
},{
    mdate:"20150501",
    name:" 忆夏之铃 "
},{
    mdate:"20120727",
    name:"  時計仕掛けのレイライン -黄昏時の境界線- "
},{
    mdate:"20150130",
    name:"  時計仕掛けのレイライン-朝霧に散る花- "
},{
    mdate:"20161001",
    name:"  緋のない所に烟は立たない "
},{
    mdate:"20161001",
    name:" 月影のシミュラクル "
},{
    mdate:"20140228",
    name:"  相州戦神館學園 八命陣R "
},{
    mdate:"20090828",
    name:" メモリア "
},{
    mdate:"20141126",
    name:" ピエタ～幸せの青い鳥～ "
},{
    mdate:"20160826",
    name:" Triangle Love -アプリコットフィズ- "
}
];

