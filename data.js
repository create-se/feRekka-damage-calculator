// ユニットデータ
const units = [
    {id:1,name:'エリウッド',gender:'男',level:1,hp:18,power:5,skill:5,speed:7,luck:7,defense:5,magicDef:0,class:'ロード(e)',ccClass:'ロードナイト',hpGrowth:0.8,powerGrowth:0.45,skillGrowth:0.5,speedGrowth:0.4,luckGrowth:0.45,defenseGrowth:0.3,magicDefGrowth:0.35,ccFlag:1,attribute:7,body:7},
    {id:2,name:'ロウエン',gender:'男',level:2,hp:23,power:7,skill:5,speed:7,luck:3,defense:7,magicDef:0,class:'ソシアルナイト',ccClass:'パラディン(男)',hpGrowth:0.9,powerGrowth:0.3,skillGrowth:0.3,speedGrowth:0.3,luckGrowth:0.5,defenseGrowth:0.4,magicDefGrowth:0.3,ccFlag:1,attribute:1,body:10},
    {id:3,name:'マーカス',gender:'男',level:1,hp:31,power:15,skill:15,speed:11,luck:8,defense:10,magicDef:8,class:'パラディン(男)',ccClass:'パラディン(男)',hpGrowth:0.65,powerGrowth:0.3,skillGrowth:0.5,speedGrowth:0.25,luckGrowth:0.3,defenseGrowth:0.15,magicDefGrowth:0.35,ccFlag:0,attribute:4,body:11},
    {id:4,name:'レベッカ',gender:'女',level:1,hp:17,power:4,skill:5,speed:6,luck:4,defense:3,magicDef:1,class:'アーチャー(女)',ccClass:'スナイパー',hpGrowth:0.6,powerGrowth:0.4,skillGrowth:0.5,speedGrowth:0.6,luckGrowth:0.5,defenseGrowth:0.15,magicDefGrowth:0.3,ccFlag:1,attribute:1,body:5},
    {id:5,name:'ドルカス',gender:'男',level:3,hp:30,power:7,skill:7,speed:6,luck:3,defense:3,magicDef:0,class:'戦士',ccClass:'ウォーリアー',hpGrowth:0.8,powerGrowth:0.6,skillGrowth:0.4,speedGrowth:0.2,luckGrowth:0.45,defenseGrowth:0.25,magicDefGrowth:0.15,ccFlag:1,attribute:1,body:14},
    {id:6,name:'バアトル',gender:'男',level:2,hp:29,power:9,skill:5,speed:3,luck:4,defense:4,magicDef:0,class:'戦士',ccClass:'ウォーリアー',hpGrowth:0.85,powerGrowth:0.5,skillGrowth:0.35,speedGrowth:0.4,luckGrowth:0.3,defenseGrowth:0.3,magicDefGrowth:0.25,ccFlag:1,attribute:2,body:13},
    {id:7,name:'ヘクトル',gender:'男',level:1,hp:19,power:7,skill:4,speed:5,luck:3,defense:8,magicDef:0,class:'ロード(h)',ccClass:'グレートロード',hpGrowth:0.9,powerGrowth:0.6,skillGrowth:0.45,speedGrowth:0.35,luckGrowth:0.3,defenseGrowth:0.5,magicDefGrowth:0.25,ccFlag:1,attribute:2,body:13},
    {id:8,name:'オズイン',gender:'男',level:9,hp:28,power:13,skill:9,speed:5,luck:3,defense:13,magicDef:3,class:'アーマーナイト',ccClass:'ジェネラル',hpGrowth:0.9,powerGrowth:0.4,skillGrowth:0.3,speedGrowth:0.3,luckGrowth:0.35,defenseGrowth:0.55,magicDefGrowth:0.3,ccFlag:1,attribute:7,body:14},
    {id:9,name:'セーラ',gender:'女',level:1,hp:17,power:2,skill:5,speed:8,luck:6,defense:2,magicDef:5,class:'シスター',ccClass:'司祭(女)',hpGrowth:0.5,powerGrowth:0.5,skillGrowth:0.3,speedGrowth:0.4,luckGrowth:0.6,defenseGrowth:0.15,magicDefGrowth:0.55,ccFlag:1,attribute:2,body:4},
    {id:10,name:'マシュー',gender:'男',level:2,hp:18,power:4,skill:4,speed:11,luck:2,defense:3,magicDef:0,class:'盗賊',ccClass:'アサシン',hpGrowth:0.75,powerGrowth:0.3,skillGrowth:0.4,speedGrowth:0.7,luckGrowth:0.5,defenseGrowth:0.25,magicDefGrowth:0.2,ccFlag:1,attribute:3,body:7},
    {id:11,name:'ギィ',gender:'男',level:3,hp:21,power:6,skill:11,speed:11,luck:5,defense:5,magicDef:0,class:'剣士',ccClass:'ソードマスター(男)',hpGrowth:0.75,powerGrowth:0.3,skillGrowth:0.5,speedGrowth:0.7,luckGrowth:0.45,defenseGrowth:0.15,magicDefGrowth:0.25,ccFlag:1,attribute:1,body:5},
    {id:12,name:'マリナス',gender:'男',level:5,hp:18,power:0,skill:4,speed:5,luck:12,defense:5,magicDef:2,class:'輸送隊',ccClass:'輸送隊',hpGrowth:1.2,powerGrowth:0,skillGrowth:0.9,speedGrowth:0.9,luckGrowth:1,defenseGrowth:0.3,magicDefGrowth:0.15,ccFlag:1,attribute:6,body:25},
    {id:13,name:'エルク',gender:'男',level:1,hp:17,power:5,skill:6,speed:7,luck:3,defense:2,magicDef:4,class:'魔道士(男)',ccClass:'賢者(男)',hpGrowth:0.65,powerGrowth:0.4,skillGrowth:0.4,speedGrowth:0.5,luckGrowth:0.3,defenseGrowth:0.2,magicDefGrowth:0.4,ccFlag:1,attribute:2,body:5},
    {id:14,name:'プリシラ',gender:'女',level:3,hp:16,power:6,skill:6,speed:8,luck:7,defense:3,magicDef:6,class:'トルバドール',ccClass:'ヴァルキュリア',hpGrowth:0.45,powerGrowth:0.4,skillGrowth:0.5,speedGrowth:0.4,luckGrowth:0.65,defenseGrowth:0.15,magicDefGrowth:0.5,ccFlag:1,attribute:3,body:4},
    {id:15,name:'リン',gender:'女',level:4,hp:18,power:5,skill:10,speed:11,luck:5,defense:2,magicDef:0,class:'ロード(l)',ccClass:'ブレイドロード',hpGrowth:0.7,powerGrowth:0.4,skillGrowth:0.6,speedGrowth:0.6,luckGrowth:0.55,defenseGrowth:0.2,magicDefGrowth:0.3,ccFlag:1,attribute:3,body:5},
    {id:16,name:'ウィル',gender:'男',level:4,hp:21,power:6,skill:5,speed:6,luck:7,defense:5,magicDef:1,class:'アーチャー(男)',ccClass:'スナイパー',hpGrowth:0.75,powerGrowth:0.5,skillGrowth:0.5,speedGrowth:0.4,luckGrowth:0.4,defenseGrowth:0.2,magicDefGrowth:0.25,ccFlag:1,attribute:3,body:6},
    {id:17,name:'ケント',gender:'男',level:5,hp:23,power:8,skill:7,speed:8,luck:4,defense:6,magicDef:1,class:'ソシアルナイト',ccClass:'パラディン(男)',hpGrowth:0.85,powerGrowth:0.4,skillGrowth:0.5,speedGrowth:0.45,luckGrowth:0.2,defenseGrowth:0.25,magicDefGrowth:0.25,ccFlag:1,attribute:7,body:9},
    {id:18,name:'セイン',gender:'男',level:4,hp:22,power:9,skill:5,speed:7,luck:5,defense:7,magicDef:0,class:'ソシアルナイト',ccClass:'パラディン(男)',hpGrowth:0.8,powerGrowth:0.6,skillGrowth:0.35,speedGrowth:0.4,luckGrowth:0.35,defenseGrowth:0.2,magicDefGrowth:0.2,ccFlag:1,attribute:3,body:9},
    {id:19,name:'フロリーナ',gender:'女',level:3,hp:18,power:6,skill:8,speed:9,luck:8,defense:4,magicDef:5,class:'ペガサスナイト',ccClass:'ファルコンナイト',hpGrowth:0.6,powerGrowth:0.4,skillGrowth:0.5,speedGrowth:0.55,luckGrowth:0.5,defenseGrowth:0.15,magicDefGrowth:0.35,ccFlag:1,attribute:5,body:4},
    {id:20,name:'レイヴァン',gender:'男',level:5,hp:25,power:8,skill:11,speed:13,luck:2,defense:5,magicDef:1,class:'傭兵',ccClass:'勇者',hpGrowth:0.85,powerGrowth:0.55,skillGrowth:0.4,speedGrowth:0.45,luckGrowth:0.35,defenseGrowth:0.25,magicDefGrowth:0.15,ccFlag:1,attribute:4,body:8},
    {id:21,name:'ルセア',gender:'男',level:3,hp:18,power:7,skill:6,speed:10,luck:2,defense:1,magicDef:6,class:'修道士',ccClass:'司祭(男)',hpGrowth:0.55,powerGrowth:0.6,skillGrowth:0.5,speedGrowth:0.4,luckGrowth:0.2,defenseGrowth:0.1,magicDefGrowth:0.6,ccFlag:1,attribute:5,body:6},
    {id:22,name:'カナス',gender:'男',level:8,hp:21,power:10,skill:9,speed:8,luck:7,defense:5,magicDef:8,class:'シャーマン',ccClass:'ドルイド',hpGrowth:0.7,powerGrowth:0.45,skillGrowth:0.4,speedGrowth:0.35,luckGrowth:0.25,defenseGrowth:0.25,magicDefGrowth:0.45,ccFlag:1,attribute:7,body:7},
    {id:23,name:'ダーツ',gender:'男',level:8,hp:34,power:12,skill:8,speed:8,luck:3,defense:6,magicDef:1,class:'海賊',ccClass:'狂戦士',hpGrowth:0.7,powerGrowth:0.65,skillGrowth:0.2,speedGrowth:0.6,luckGrowth:0.35,defenseGrowth:0.2,magicDefGrowth:0.15,ccFlag:1,attribute:1,body:10},
    {id:24,name:'フィオーラ',gender:'女',level:7,hp:21,power:8,skill:11,speed:13,luck:6,defense:6,magicDef:7,class:'ペガサスナイト',ccClass:'ファルコンナイト',hpGrowth:0.7,powerGrowth:0.35,skillGrowth:0.6,speedGrowth:0.5,luckGrowth:0.3,defenseGrowth:0.2,magicDefGrowth:0.5,ccFlag:1,attribute:3,body:5},
    {id:25,name:'ラガルト',gender:'男',level:12,hp:26,power:8,skill:11,speed:15,luck:10,defense:8,magicDef:3,class:'盗賊',ccClass:'アサシン',hpGrowth:0.6,powerGrowth:0.25,skillGrowth:0.45,speedGrowth:0.6,luckGrowth:0.6,defenseGrowth:0.25,magicDefGrowth:0.25,ccFlag:1,attribute:4,body:9},
    {id:26,name:'ニニアン',gender:'女',level:1,hp:14,power:0,skill:0,speed:12,luck:10,defense:5,magicDef:4,class:'バード/踊り子',ccClass:'バード/踊り子',hpGrowth:0.85,powerGrowth:0.05,skillGrowth:0.05,speedGrowth:0.7,luckGrowth:0.8,defenseGrowth:0.3,magicDefGrowth:0.7,ccFlag:0,attribute:4,body:4},
    {id:27,name:'イサドラ',gender:'女',level:1,hp:28,power:13,skill:12,speed:16,luck:10,defense:8,magicDef:6,class:'パラディン',ccClass:'パラディン',hpGrowth:0.75,powerGrowth:0.3,skillGrowth:0.35,speedGrowth:0.5,luckGrowth:0.45,defenseGrowth:0.2,magicDefGrowth:0.25,ccFlag:0,attribute:6,body:6},
    {id:28,name:'ヒース',gender:'男',level:7,hp:28,power:11,skill:8,speed:7,luck:7,defense:10,magicDef:1,class:'ドラゴンナイト',ccClass:'ドラゴンマスター(男)',hpGrowth:0.8,powerGrowth:0.5,skillGrowth:0.5,speedGrowth:0.45,luckGrowth:0.2,defenseGrowth:0.3,magicDefGrowth:0.2,ccFlag:1,attribute:2,body:9},
    {id:29,name:'ラス',gender:'男',level:9,hp:27,power:9,skill:10,speed:11,luck:5,defense:8,magicDef:2,class:'遊牧民',ccClass:'遊牧騎兵',hpGrowth:0.8,powerGrowth:0.5,skillGrowth:0.4,speedGrowth:0.5,luckGrowth:0.3,defenseGrowth:0.1,magicDefGrowth:0.25,ccFlag:1,attribute:6,body:7},
    {id:30,name:'ホークアイ',gender:'男',level:4,hp:50,power:18,skill:14,speed:11,luck:13,defense:14,magicDef:10,class:'狂戦士',ccClass:'狂戦士',hpGrowth:0.5,powerGrowth:0.4,skillGrowth:0.3,speedGrowth:0.25,luckGrowth:0.4,defenseGrowth:0.2,magicDefGrowth:0.35,ccFlag:0,attribute:3,body:16},
    {id:31,name:'ガイツ',gender:'男',level:3,hp:40,power:17,skill:12,speed:13,luck:10,defense:11,magicDef:3,class:'ウォーリアー',ccClass:'ウォーリアー',hpGrowth:0.85,powerGrowth:0.5,skillGrowth:0.3,speedGrowth:0.4,luckGrowth:0.4,defenseGrowth:0.2,magicDefGrowth:0.2,ccFlag:0,attribute:2,body:13},
    {id:32,name:'ワレス',gender:'男',level:12,hp:30,power:13,skill:7,speed:5,luck:10,defense:15,magicDef:2,class:'アーマーナイト',ccClass:'ジェネラル',hpGrowth:0.7,powerGrowth:0.45,skillGrowth:0.4,speedGrowth:0.2,luckGrowth:0.3,defenseGrowth:0.35,magicDefGrowth:0.35,ccFlag:0,attribute:2,body:13},
    {id:33,name:'パント',gender:'男',level:6,hp:33,power:18,skill:21,speed:17,luck:14,defense:11,magicDef:16,class:'賢者',ccClass:'賢者',hpGrowth:0.5,powerGrowth:0.3,skillGrowth:0.2,speedGrowth:0.4,luckGrowth:0.4,defenseGrowth:0.3,magicDefGrowth:0.35,ccFlag:0,attribute:4,body:8},
    {id:34,name:'ルイーズ',gender:'女',level:1,hp:28,power:12,skill:14,speed:17,luck:16,defense:9,magicDef:12,class:'スナイパー',ccClass:'スナイパー',hpGrowth:0.6,powerGrowth:0.4,skillGrowth:0.4,speedGrowth:0.4,luckGrowth:0.3,defenseGrowth:0.2,magicDefGrowth:0.3,ccFlag:0,attribute:5,body:6},
    {id:35,name:'カレル',gender:'男',level:8,hp:31,power:16,skill:23,speed:20,luck:15,defense:13,magicDef:12,class:'ソードマスター(男)',ccClass:'ソードマスター(男)',hpGrowth:0.7,powerGrowth:0.3,skillGrowth:0.5,speedGrowth:0.5,luckGrowth:0.3,defenseGrowth:0.1,magicDefGrowth:0.15,ccFlag:0,attribute:5,body:9},
    {id:36,name:'ハーケン',gender:'男',level:8,hp:38,power:21,skill:20,speed:17,luck:12,defense:15,magicDef:10,class:'勇者',ccClass:'勇者',hpGrowth:0.8,powerGrowth:0.35,skillGrowth:0.3,speedGrowth:0.4,luckGrowth:0.2,defenseGrowth:0.3,magicDefGrowth:0.25,ccFlag:0,attribute:1,body:11},
    {id:37,name:'ニノ',gender:'女',level:5,hp:19,power:7,skill:8,speed:11,luck:10,defense:4,magicDef:7,class:'魔道士(女)',ccClass:'賢者(女)',hpGrowth:0.55,powerGrowth:0.5,skillGrowth:0.55,speedGrowth:0.6,luckGrowth:0.45,defenseGrowth:0.15,magicDefGrowth:0.5,ccFlag:1,attribute:1,body:3},
    {id:38,name:'ジャファル',gender:'男',level:13,hp:34,power:19,skill:25,speed:24,luck:10,defense:15,magicDef:11,class:'アサシン',ccClass:'アサシン',hpGrowth:0.65,powerGrowth:0.15,skillGrowth:0.4,speedGrowth:0.35,luckGrowth:0.2,defenseGrowth:0.3,magicDefGrowth:0.3,ccFlag:0,attribute:4,body:8},
    {id:39,name:'ヴァイダ',gender:'女',level:9,hp:43,power:20,skill:19,speed:13,luck:11,defense:21,magicDef:6,class:'ドラゴンマスター(女)',ccClass:'ドラゴンマスター(女)',hpGrowth:0.6,powerGrowth:0.45,skillGrowth:0.25,speedGrowth:0.4,luckGrowth:0.3,defenseGrowth:0.25,magicDefGrowth:0.15,ccFlag:0,attribute:1,body:12},
    {id:40,name:'ニルス',gender:'男',level:1,hp:14,power:0,skill:0,speed:12,luck:10,defense:5,magicDef:4,class:'バード/踊り子',ccClass:'バード/踊り子',hpGrowth:0.85,powerGrowth:0.05,skillGrowth:0.05,speedGrowth:0.7,luckGrowth:0.8,defenseGrowth:0.3,magicDefGrowth:0.7,ccFlag:0,attribute:4,body:3},
    {id:41,name:'レナート',gender:'男',level:16,hp:43,power:12,skill:22,speed:20,luck:10,defense:15,magicDef:18,class:'司祭(男)',ccClass:'司祭(男)',hpGrowth:0.6,powerGrowth:0.4,skillGrowth:0.3,speedGrowth:0.35,luckGrowth:0.15,defenseGrowth:0.2,magicDefGrowth:0.4,ccFlag:0,attribute:7,body:9},
    {id:42,name:'アトス',gender:'男',level:20,hp:40,power:30,skill:24,speed:20,luck:25,defense:20,magicDef:28,class:'大賢者',ccClass:'大賢者',hpGrowth:0,powerGrowth:0,skillGrowth:0,speedGrowth:0,luckGrowth:0,defenseGrowth:0,magicDefGrowth:0,ccFlag:0,attribute:7,body:9},
    {id:43,name:'ファリナ',gender:'女',level:12,hp:24,power:10,skill:13,speed:14,luck:10,defense:10,magicDef:12,class:'ペガサスナイト',ccClass:'ファルコンナイト',hpGrowth:0.75,powerGrowth:0.5,skillGrowth:0.4,speedGrowth:0.45,luckGrowth:0.45,defenseGrowth:0.25,magicDefGrowth:0.3,ccFlag:1,attribute:7,body:5},
    {id:44,name:'カアラ',gender:'女',level:5,hp:29,power:14,skill:21,speed:18,luck:16,defense:11,magicDef:12,class:'ソードマスター(女)',ccClass:'ソードマスター(女)',hpGrowth:0.6,powerGrowth:0.25,skillGrowth:0.45,speedGrowth:0.55,luckGrowth:0.4,defenseGrowth:0.1,magicDefGrowth:0.2,ccFlag:0,attribute:6,body:7}
];

// 敵データ
const enemies = [
    {name:'ファーガス(16章外)',level:18,hp:58,power:24,skill:15,speed:14,luck:15,defense:18,resistance:17,constitution:15,weapon:'キラーアクス',class:'狂戦士',difficulty:'エリノー'},
    {name:'ダミアン(16章外)',level:5,hp:34,power:12,skill:7,speed:5,luck:2,defense:14,resistance:13,constitution:11,weapon:'キルソード',class:'パラディン',difficulty:'エリノー'},
    {name:'ロイド(23章)',level:12,hp:41,power:19,skill:21,speed:22,luck:16,defense:9,resistance:16,constitution:9,weapon:'ひかりの剣(近接)',class:'ソードマスター',difficulty:'エリノー'},
    {name:'ライナス(23章)',level:12,hp:45,power:22,skill:20,speed:15,luck:14,defense:15,resistance:13,constitution:14,weapon:'ぎんの大剣',class:'勇者',difficulty:'エリノー'},
    {name:'ヴァイダ(24章)',level:10,hp:60,power:25,skill:23,speed:22,luck:0,defense:25,resistance:20,constitution:12,weapon:'スレンドスピア',class:'ドラゴンマスター(女)',difficulty:'エリノー'},
    {name:'ケネス(25章)',level:13,hp:41,power:20,skill:18,speed:16,luck:6,defense:10,resistance:22,constitution:10,weapon:'アルジローレ',class:'司祭',difficulty:'エリノー'},
    {name:'ジュルメ(25章)',level:13,hp:46,power:19,skill:20,speed:20,luck:10,defense:11,resistance:15,constitution:6,weapon:'ひかりの剣(近接)',class:'アサシン',difficulty:'エリノー'},
    {name:'ウルスラ(26章)',level:15,hp:36,power:18,skill:19,speed:22,luck:12,defense:12,resistance:28,constitution:7,weapon:'エルファイアー',class:'ヴァルキュリア',difficulty:'エリノー'},
    {name:'マクシム(26章)',level:6,hp:40,power:15,skill:14,speed:16,luck:5,defense:10,resistance:16,constitution:11,weapon:'ぎんのやり',class:'パラディン',difficulty:'エリノー'},
    {name:'ソーニャ(26章外)',level:17,hp:44,power:20,skill:20,speed:21,luck:0,defense:20,resistance:24,constitution:7,weapon:'フィンブル',class:'賢者(女)',difficulty:'エリノー'},
    {name:'ロイド(27章)',level:18,hp:52,power:21,skill:25,speed:24,luck:16,defense:16,resistance:20,constitution:9,weapon:'ルーンソード',class:'ソードマスター',difficulty:'エリノー'},
    {name:'ライナス(27章)',level:18,hp:58,power:25,skill:22,speed:18,luck:14,defense:20,resistance:16,constitution:14,weapon:'ルーンソード',class:'勇者',difficulty:'エリノー'},
    {name:'ゲオルク(28章)',level:15,hp:60,power:28,skill:19,speed:16,luck:0,defense:19,resistance:21,constitution:15,weapon:'トマホーク',class:'狂戦士',difficulty:'エリノー'},
    {name:'リムステラ(30章)',level:20,hp:68,power:25,skill:22,speed:20,luck:0,defense:25,resistance:28,constitution:7,weapon:'フィンブル',class:'賢者(女)',difficulty:'エリノー'},
    {name:'ファーガス(17章外)',level:18,hp:58,power:24,skill:15,speed:14,luck:15,defense:18,resistance:17,constitution:15,weapon:'ぎんのおの',class:'狂戦士',difficulty:'ヘクノー'},
    {name:'ダミアン(16章外)',level:5,hp:34,power:12,skill:7,speed:5,luck:2,defense:14,resistance:13,constitution:11,weapon:'はがねの剣',class:'パラディン',difficulty:'ヘクノー'},
    {name:'ロイド(24章)',level:12,hp:41,power:19,skill:21,speed:22,luck:16,defense:9,resistance:16,constitution:9,weapon:'ぎんの剣',class:'ソードマスター',difficulty:'ヘクノー'},
    {name:'ライナス(24章)',level:12,hp:45,power:22,skill:20,speed:15,luck:14,defense:15,resistance:13,constitution:14,weapon:'ぎんの大剣',class:'勇者',difficulty:'ヘクノー'},
    {name:'ヴァイダ(26章)',level:10,hp:60,power:25,skill:23,speed:22,luck:0,defense:25,resistance:20,constitution:12,weapon:'スレンドスピア',class:'ドラゴンマスター(女)',difficulty:'ヘクノー'},
    {name:'ケネス(27章)',level:13,hp:41,power:20,skill:18,speed:16,luck:6,defense:10,resistance:22,constitution:10,weapon:'アルジローレ',class:'司祭',difficulty:'ヘクノー'},
    {name:'ジュルメ(27章)',level:13,hp:46,power:19,skill:20,speed:20,luck:10,defense:11,resistance:15,constitution:6,weapon:'ひかりの剣(近接)',class:'アサシン',difficulty:'ヘクノー'},
    {name:'ウルスラ(28章)',level:15,hp:36,power:18,skill:19,speed:22,luck:12,defense:12,resistance:28,constitution:7,weapon:'エルファイアー',class:'ヴァルキュリア',difficulty:'ヘクノー'},
    {name:'マクシム(28章)',level:6,hp:40,power:15,skill:14,speed:16,luck:5,defense:10,resistance:16,constitution:11,weapon:'ぎんのやり',class:'パラディン',difficulty:'ヘクノー'},
    {name:'ソーニャ(28章外)',level:17,hp:44,power:20,skill:20,speed:21,luck:0,defense:20,resistance:24,constitution:7,weapon:'フィンブル',class:'賢者(女)',difficulty:'ヘクノー'},
    {name:'ロイド(29章)',level:18,hp:52,power:21,skill:25,speed:24,luck:16,defense:16,resistance:20,constitution:9,weapon:'ルーンソード',class:'ソードマスター',difficulty:'ヘクノー'},
    {name:'ライナス(29章)',level:18,hp:58,power:25,skill:22,speed:18,luck:14,defense:20,resistance:16,constitution:14,weapon:'ルーンソード',class:'勇者',difficulty:'ヘクノー'},
    {name:'カイム(30章)',level:16,hp:60,power:21,skill:20,speed:18,luck:0,defense:16,resistance:22,constitution:15,weapon:'トマホーク',class:'狂戦士',difficulty:'ヘクノー'},
    {name:'リムステラ(32章)',level:20,hp:68,power:25,skill:22,speed:20,luck:0,defense:25,resistance:28,constitution:7,weapon:'フィンブル',class:'賢者(女)',difficulty:'ヘクノー'}
];

// 武器データ
const weapons = [
    {name:'ほそみの剣',type:'剣',power:3,hitRate:100,criticalRate:5,weight:2,attribute:'剣',effectiveAgainst:'-'},
    {name:'てつの剣',type:'剣',power:5,hitRate:90,criticalRate:0,weight:5,attribute:'剣',effectiveAgainst:'-'},
    {name:'はがねの剣',type:'剣',power:8,hitRate:75,criticalRate:0,weight:10,attribute:'剣',effectiveAgainst:'-'},
    {name:'ぎんの剣',type:'剣',power:13,hitRate:80,criticalRate:0,weight:8,attribute:'剣',effectiveAgainst:'-'},
    {name:'てつの大剣',type:'剣',power:9,hitRate:70,criticalRate:0,weight:12,attribute:'剣',effectiveAgainst:'-'},
    {name:'はがねの大剣',type:'剣',power:11,hitRate:65,criticalRate:0,weight:14,attribute:'剣',effectiveAgainst:'-'},
    {name:'ぎんの大剣',type:'剣',power:14,hitRate:60,criticalRate:0,weight:13,attribute:'剣',effectiveAgainst:'-'},
    {name:'長柄刀',type:'剣',power:6,hitRate:85,criticalRate:0,weight:11,attribute:'剣',effectiveAgainst:'騎馬'},
    {name:'アーマーキラー',type:'剣',power:8,hitRate:80,criticalRate:0,weight:11,attribute:'剣',effectiveAgainst:'重装'},
    {name:'ドラゴンキラー',type:'剣',power:7,hitRate:75,criticalRate:0,weight:5,attribute:'剣',effectiveAgainst:'竜'},
    {name:'キルソード',type:'剣',power:9,hitRate:75,criticalRate:30,weight:7,attribute:'剣',effectiveAgainst:'-'},
    {name:'ひかりの剣(近接)',type:'剣',power:9,hitRate:70,criticalRate:0,weight:9,attribute:'剣',effectiveAgainst:'-'},
    {name:'ひかりの剣(間接)',type:'光',power:9,hitRate:70,criticalRate:0,weight:9,attribute:'光',effectiveAgainst:'-'},
    {name:'ルーンソード',type:'闇',power:12,hitRate:65,criticalRate:0,weight:11,attribute:'闇',effectiveAgainst:'-'},
    {name:'ランスバスター',type:'剣',power:9,hitRate:75,criticalRate:5,weight:9,attribute:'斧',effectiveAgainst:'-'},
    {name:'ゆうしゃの剣',type:'剣',power:9,hitRate:75,criticalRate:0,weight:12,attribute:'剣',effectiveAgainst:'-'},
    {name:'リガルブレイド',type:'剣',power:20,hitRate:85,criticalRate:0,weight:9,attribute:'剣',effectiveAgainst:'-'},
    {name:'倭刀',type:'剣',power:8,hitRate:75,criticalRate:35,weight:5,attribute:'剣',effectiveAgainst:'-'},
    {name:'レイピア',type:'剖',power:7,hitRate:95,criticalRate:10,weight:5,attribute:'剣',effectiveAgainst:'騎馬重装'},
    {name:'デュランダル',type:'剖',power:17,hitRate:90,criticalRate:0,weight:16,attribute:'剣',effectiveAgainst:'竜'},
    {name:'マーニ・カティ',type:'剣',power:8,hitRate:80,criticalRate:20,weight:3,attribute:'剣',effectiveAgainst:'騎馬重装'},
    {name:'ソール・カティ',type:'剣',power:12,hitRate:95,criticalRate:25,weight:14,attribute:'剣',effectiveAgainst:'竜'},
    {name:'ほそみのやり',type:'槍',power:4,hitRate:85,criticalRate:5,weight:4,attribute:'槍',effectiveAgainst:'-'},
    {name:'てつのやり',type:'槍',power:7,hitRate:80,criticalRate:0,weight:8,attribute:'槍',effectiveAgainst:'-'},
    {name:'はがねのやり',type:'槍',power:10,hitRate:70,criticalRate:0,weight:13,attribute:'槍',effectiveAgainst:'-'},
    {name:'ぎんのやり',type:'槍',power:14,hitRate:75,criticalRate:0,weight:10,attribute:'槍',effectiveAgainst:'-'},
    {name:'てやり',type:'槍',power:6,hitRate:65,criticalRate:0,weight:11,attribute:'槍',effectiveAgainst:'-'},
    {name:'ホースキラー',type:'槍',power:7,hitRate:70,criticalRate:0,weight:13,attribute:'槍',effectiveAgainst:'騎馬'},
    {name:'つらぬきのやり',type:'槍',power:9,hitRate:70,criticalRate:0,weight:14,attribute:'槍',effectiveAgainst:'重装'},
    {name:'ショートスピア',type:'槍',power:9,hitRate:60,criticalRate:0,weight:12,attribute:'槍',effectiveAgainst:'-'},
    {name:'キラーランス',type:'槍',power:10,hitRate:70,criticalRate:30,weight:9,attribute:'槍',effectiveAgainst:'-'},
    {name:'アクスバスター',type:'槍',power:10,hitRate:70,criticalRate:5,weight:11,attribute:'剣',effectiveAgainst:'-'},
    {name:'ゆうしゃのやり',type:'槍',power:10,hitRate:70,criticalRate:0,weight:14,attribute:'槍',effectiveAgainst:'-'},
    {name:'スレンドスピア',type:'槍',power:12,hitRate:70,criticalRate:5,weight:10,attribute:'槍',effectiveAgainst:'-'},
    {name:'レークスハスタ',type:'槍',power:21,hitRate:80,criticalRate:0,weight:11,attribute:'槍',effectiveAgainst:'-'},
    {name:'てつのおの',type:'斧',power:8,hitRate:75,criticalRate:0,weight:10,attribute:'斧',effectiveAgainst:'-'},
    {name:'はがねのおの',type:'斧',power:11,hitRate:65,criticalRate:0,weight:15,attribute:'斧',effectiveAgainst:'-'},
    {name:'ぎんのおの',type:'斧',power:15,hitRate:70,criticalRate:0,weight:12,attribute:'斧',effectiveAgainst:'-'},
    {name:'ておの',type:'斧',power:7,hitRate:60,criticalRate:0,weight:12,attribute:'斧',effectiveAgainst:'-'},
    {name:'デビルアクス',type:'斧',power:18,hitRate:55,criticalRate:0,weight:18,attribute:'斧',effectiveAgainst:'-'},
    {name:'ハルベルト',type:'斧',power:10,hitRate:60,criticalRate:0,weight:15,attribute:'斧',effectiveAgainst:'騎馬'},
    {name:'ハンマー',type:'斧',power:10,hitRate:55,criticalRate:0,weight:15,attribute:'斧',effectiveAgainst:'重装'},
    {name:'キラーアクス',type:'斧',power:11,hitRate:65,criticalRate:30,weight:11,attribute:'斧',effectiveAgainst:'-'},
    {name:'ソードバスター',type:'斧',power:11,hitRate:65,criticalRate:5,weight:13,attribute:'剣',effectiveAgainst:'-'},
    {name:'ソードキラー',type:'斧',power:11,hitRate:80,criticalRate:5,weight:13,attribute:'剣',effectiveAgainst:'剣士'},
    {name:'ゆうしゃのおの',type:'斧',power:10,hitRate:65,criticalRate:0,weight:16,attribute:'斧',effectiveAgainst:'-'},
    {name:'トマホーク',type:'斧',power:13,hitRate:65,criticalRate:0,weight:14,attribute:'斧',effectiveAgainst:'-'},
    {name:'バシリコス',type:'斧',power:22,hitRate:75,criticalRate:0,weight:13,attribute:'斧',effectiveAgainst:'-'},
    {name:'ヴォルフバイル',type:'斧',power:10,hitRate:75,criticalRate:5,weight:10,attribute:'斧',effectiveAgainst:'騎馬重装'},
    {name:'アルマーズ',type:'斧',power:18,hitRate:85,criticalRate:0,weight:18,attribute:'斧',effectiveAgainst:'竜'},
    {name:'てつの弓',type:'弓',power:6,hitRate:85,criticalRate:0,weight:5,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'はがねの弓',type:'弓',power:9,hitRate:70,criticalRate:0,weight:9,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'ぎんの弓',type:'弓',power:13,hitRate:75,criticalRate:0,weight:6,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'短弓',type:'弓',power:5,hitRate:85,criticalRate:10,weight:3,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'長弓',type:'弓',power:5,hitRate:65,criticalRate:0,weight:10,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'キラーボウ',type:'弓',power:9,hitRate:75,criticalRate:30,weight:7,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'ゆうしゃの弓',type:'弓',power:10,hitRate:70,criticalRate:0,weight:12,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'リヤンフレチェ',type:'弓',power:20,hitRate:80,criticalRate:0,weight:7,attribute:'弓',effectiveAgainst:'飛行'},
    {name:'ファイアー',type:'理',power:5,hitRate:90,criticalRate:0,weight:4,attribute:'理',effectiveAgainst:'-'},
    {name:'サンダー',type:'理',power:8,hitRate:80,criticalRate:5,weight:6,attribute:'理',effectiveAgainst:'-'},
    {name:'エルファイアー',type:'理',power:10,hitRate:85,criticalRate:0,weight:10,attribute:'理',effectiveAgainst:'-'},
    {name:'サンダーストーム',type:'理',power:12,hitRate:60,criticalRate:0,weight:20,attribute:'理',effectiveAgainst:'-'},
    {name:'フィンブル',type:'理',power:13,hitRate:80,criticalRate:0,weight:12,attribute:'理',effectiveAgainst:'-'},
    {name:'ギガスカリバー',type:'理',power:18,hitRate:90,criticalRate:10,weight:13,attribute:'理',effectiveAgainst:'-'},
    {name:'フォルブレイズ',type:'理',power:14,hitRate:85,criticalRate:5,weight:11,attribute:'理',effectiveAgainst:'竜'},
    {name:'ライトニング',type:'光',power:4,hitRate:95,criticalRate:5,weight:6,attribute:'光',effectiveAgainst:'-'},
    {name:'シャイン',type:'光',power:6,hitRate:90,criticalRate:8,weight:8,attribute:'光',effectiveAgainst:'-'},
    {name:'ディヴァイン',type:'光',power:8,hitRate:85,criticalRate:10,weight:12,attribute:'光',effectiveAgainst:'-'},
    {name:'パージ',type:'光',power:10,hitRate:75,criticalRate:5,weight:20,attribute:'光',effectiveAgainst:'-'},
    {name:'アルジローレ',type:'光',power:12,hitRate:85,criticalRate:15,weight:15,attribute:'光',effectiveAgainst:'-'},
    {name:'アーリアル',type:'光',power:15,hitRate:90,criticalRate:5,weight:14,attribute:'光',effectiveAgainst:'竜'},
    {name:'ルーチェ',type:'光',power:16,hitRate:95,criticalRate:25,weight:16,attribute:'光',effectiveAgainst:'-'},
    {name:'ミィル',type:'闇',power:7,hitRate:80,criticalRate:0,weight:8,attribute:'闇',effectiveAgainst:'-'},
    {name:'ルナ',type:'闇',power:0,hitRate:95,criticalRate:20,weight:12,attribute:'闇',effectiveAgainst:'-'},
    {name:'リザイア',type:'闇',power:10,hitRate:70,criticalRate:0,weight:14,attribute:'闇',effectiveAgainst:'-'},
    {name:'イクリプス',type:'闇',power:0,hitRate:30,criticalRate:0,weight:12,attribute:'闇',effectiveAgainst:'-'},
    {name:'ノスフェラート',type:'闇',power:15,hitRate:70,criticalRate:0,weight:18,attribute:'闇',effectiveAgainst:'-'},
    {name:'ゲスペンスト',type:'闇',power:23,hitRate:80,criticalRate:0,weight:20,attribute:'闇',effectiveAgainst:'-'},
    {name:'エレシュキガル',type:'闇',power:20,hitRate:95,criticalRate:0,weight:12,attribute:'闇',effectiveAgainst:'-'}
];

// クラスデータ
const unitClasses = [
    {className:'ロード(e)',classRank:0,bonusHp:4,bonusPower:2,bonusSkill:0,bonusSpeed:1,bonusLuck:0,bonusDefence:1,bonusMagicDef:3,bonusBody:2,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ロード(h)',classRank:0,bonusHp:3,bonusPower:0,bonusSkill:2,bonusSpeed:3,bonusLuck:0,bonusDefence:1,bonusMagicDef:5,bonusBody:2,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ロード(l)',classRank:0,bonusHp:3,bonusPower:2,bonusSkill:2,bonusSpeed:0,bonusLuck:0,bonusDefence:3,bonusMagicDef:5,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'剣士',classRank:0,bonusHp:5,bonusPower:2,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:2,bonusMagicDef:1,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'傭兵',classRank:0,bonusHp:4,bonusPower:0,bonusSkill:2,bonusSpeed:2,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ソシアルナイト',classRank:0,bonusHp:2,bonusPower:1,bonusSkill:1,bonusSpeed:1,bonusLuck:0,bonusDefence:2,bonusMagicDef:1,bonusBody:2,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ペガサスナイト',classRank:0,bonusHp:5,bonusPower:2,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ドラゴンナイト',classRank:0,bonusHp:4,bonusPower:0,bonusSkill:2,bonusSpeed:2,bonusLuck:0,bonusDefence:0,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'海賊',classRank:0,bonusHp:4,bonusPower:1,bonusSkill:1,bonusSpeed:1,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:3,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'戦士',classRank:0,bonusHp:3,bonusPower:1,bonusSkill:2,bonusSpeed:0,bonusLuck:0,bonusDefence:3,bonusMagicDef:3,bonusBody:2,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'アーマーナイト',classRank:0,bonusHp:4,bonusPower:2,bonusSkill:2,bonusSpeed:3,bonusLuck:0,bonusDefence:2,bonusMagicDef:3,bonusBody:2,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'盗賊',classRank:0,bonusHp:3,bonusPower:1,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:0,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'アーチャー(男)',classRank:0,bonusHp:3,bonusPower:1,bonusSkill:2,bonusSpeed:2,bonusLuck:0,bonusDefence:2,bonusMagicDef:3,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'アーチャー(女)',classRank:0,bonusHp:4,bonusPower:3,bonusSkill:1,bonusSpeed:1,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'遊牧民',classRank:0,bonusHp:3,bonusPower:2,bonusSkill:1,bonusSpeed:1,bonusLuck:0,bonusDefence:3,bonusMagicDef:3,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'シスター',classRank:0,bonusHp:3,bonusPower:1,bonusSkill:2,bonusSpeed:1,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'トルバドール',classRank:0,bonusHp:3,bonusPower:2,bonusSkill:1,bonusSpeed:0,bonusLuck:0,bonusDefence:2,bonusMagicDef:3,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'魔道士(男)',classRank:0,bonusHp:4,bonusPower:1,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:3,bonusMagicDef:3,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'魔道士(女)',classRank:0,bonusHp:3,bonusPower:1,bonusSkill:1,bonusSpeed:0,bonusLuck:0,bonusDefence:3,bonusMagicDef:3,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'修道士',classRank:0,bonusHp:3,bonusPower:2,bonusSkill:1,bonusSpeed:0,bonusLuck:0,bonusDefence:3,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'シャーマン',classRank:0,bonusHp:4,bonusPower:0,bonusSkill:0,bonusSpeed:3,bonusLuck:0,bonusDefence:2,bonusMagicDef:2,bonusBody:1,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ロードナイト',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:27,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:23,maxMagicDef:25},
    {className:'グレートロード',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:30,maxSkill:24,maxSpeed:24,maxLuck:30,maxDefence:29,maxMagicDef:20},
    {className:'ブレイドロード',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:24,maxSkill:29,maxSpeed:30,maxLuck:30,maxDefence:22,maxMagicDef:22},
    {className:'ソードマスター(男)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:24,maxSkill:29,maxSpeed:30,maxLuck:30,maxDefence:22,maxMagicDef:23},
    {className:'ソードマスター(女)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:22,maxSkill:29,maxSpeed:30,maxLuck:30,maxDefence:22,maxMagicDef:25},
    {className:'勇者',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:30,maxSpeed:26,maxLuck:30,maxDefence:25,maxMagicDef:22},
    {className:'パラディン(男)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:25,maxMagicDef:25},
    {className:'パラディン(女)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:23,maxSkill:27,maxSpeed:25,maxLuck:30,maxDefence:24,maxMagicDef:26},
    {className:'ファルコンナイト',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:23,maxSkill:25,maxSpeed:28,maxLuck:30,maxDefence:23,maxMagicDef:26},
    {className:'ドラゴンマスター(男)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:27,maxSkill:25,maxSpeed:23,maxLuck:30,maxDefence:28,maxMagicDef:22},
    {className:'ドラゴンマスター(女)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:27,maxMagicDef:23},
    {className:'狂戦士',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:30,maxSkill:29,maxSpeed:28,maxLuck:30,maxDefence:23,maxMagicDef:21},
    {className:'ウォーリアー',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:30,maxSkill:28,maxSpeed:26,maxLuck:30,maxDefence:26,maxMagicDef:22},
    {className:'ジェネラル',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:29,maxSkill:27,maxSpeed:24,maxLuck:30,maxDefence:30,maxMagicDef:25},
    {className:'アサシン',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:20,maxSkill:30,maxSpeed:30,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'スナイパー',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:30,maxSpeed:28,maxLuck:30,maxDefence:25,maxMagicDef:23},
    {className:'遊牧騎兵',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:28,maxSpeed:30,maxLuck:30,maxDefence:24,maxMagicDef:23},
    {className:'司祭(男)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:22,maxMagicDef:30},
    {className:'司祭(女)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:25,maxSpeed:26,maxLuck:30,maxDefence:21,maxMagicDef:30},
    {className:'ヴァルキュリア',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:24,maxSpeed:25,maxLuck:30,maxDefence:24,maxMagicDef:28},
    {className:'賢者(男)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:28,maxSkill:30,maxSpeed:26,maxLuck:30,maxDefence:21,maxMagicDef:25},
    {className:'賢者(女)',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:30,maxSkill:28,maxSpeed:26,maxLuck:30,maxDefence:21,maxMagicDef:25},
    {className:'ドルイド',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:29,maxSkill:26,maxSpeed:26,maxLuck:30,maxDefence:21,maxMagicDef:28},
    {className:'大賢者',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:30,maxSkill:30,maxSpeed:25,maxLuck:30,maxDefence:20,maxMagicDef:30},
    {className:'バード/踊り子',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:10,maxSkill:10,maxSpeed:30,maxLuck:30,maxDefence:24,maxMagicDef:26},
    {className:'輸送隊',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:20,maxSkill:20,maxSpeed:20,maxLuck:30,maxDefence:20,maxMagicDef:20},
    {className:'ソードマスター',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:24,maxSkill:29,maxSpeed:30,maxLuck:30,maxDefence:22,maxMagicDef:23},
    {className:'パラディン',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:25,maxMagicDef:25},
    {className:'賢者',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:28,maxSkill:30,maxSpeed:26,maxLuck:30,maxDefence:21,maxMagicDef:25},
    {className:'司祭',classRank:1,bonusHp:0,bonusPower:0,bonusSkill:0,bonusSpeed:0,bonusLuck:0,bonusDefence:0,bonusMagicDef:0,bonusBody:0,maxHp:60,maxPower:25,maxSkill:26,maxSpeed:24,maxLuck:30,maxDefence:22,maxMagicDef:30}
];

// クラス別使用可能武器データ
// weaponTypes: 使用可能な武器属性（剣、槍、斧、弓、理、光、闇）
// specialWeapons: そのクラス専用の特殊武器名
const classWeapons = {
    // === 下級クラス ===
    'ロード(e)': { weaponTypes: ['剣'], specialWeapons: ['レイピア', 'デュランダル'] },
    'ロード(h)': { weaponTypes: ['斧'], specialWeapons: ['ヴォルフバイル', 'アルマーズ'] },
    'ロード(l)': { weaponTypes: ['剣'], specialWeapons: ['マーニ・カティ', 'ソール・カティ'] },
    '剣士': { weaponTypes: ['剣'], specialWeapons: [] },
    '傭兵': { weaponTypes: ['剣'], specialWeapons: [] },
    'ソシアルナイト': { weaponTypes: ['剣', '槍'], specialWeapons: [] },
    'ペガサスナイト': { weaponTypes: ['槍'], specialWeapons: [] },
    'ドラゴンナイト': { weaponTypes: ['槍'], specialWeapons: [] },
    '海賊': { weaponTypes: ['斧'], specialWeapons: [] },
    '戦士': { weaponTypes: ['斧'], specialWeapons: [] },
    'アーマーナイト': { weaponTypes: ['槍'], specialWeapons: [] },
    '盗賊': { weaponTypes: ['剣'], specialWeapons: [] },
    'アーチャー(男)': { weaponTypes: ['弓'], specialWeapons: [] },
    'アーチャー(女)': { weaponTypes: ['弓'], specialWeapons: [] },
    '遊牧民': { weaponTypes: ['弓'], specialWeapons: [] },
    'シスター': { weaponTypes: [], specialWeapons: [] }, // 杖のみ（攻撃不可）
    'トルバドール': { weaponTypes: [], specialWeapons: [] }, // 杖のみ（攻撃不可）
    '魔道士(男)': { weaponTypes: ['理'], specialWeapons: [] },
    '魔道士(女)': { weaponTypes: ['理'], specialWeapons: [] },
    '修道士': { weaponTypes: ['光'], specialWeapons: [] },
    'シャーマン': { weaponTypes: ['闇'], specialWeapons: [] },

    // === 上級クラス ===
    'ロードナイト': { weaponTypes: ['剣', '槍'], specialWeapons: ['レイピア', 'デュランダル'] },
    'グレートロード': { weaponTypes: ['斧', '剣'], specialWeapons: ['ヴォルフバイル', 'アルマーズ'] },
    'ブレイドロード': { weaponTypes: ['剣', '弓'], specialWeapons: ['マーニ・カティ', 'ソール・カティ'] },
    'ソードマスター(男)': { weaponTypes: ['剣'], specialWeapons: [] },
    'ソードマスター(女)': { weaponTypes: ['剣'], specialWeapons: [] },
    'ソードマスター': { weaponTypes: ['剣'], specialWeapons: [] },
    '勇者': { weaponTypes: ['剣', '斧'], specialWeapons: [] },
    'パラディン(男)': { weaponTypes: ['剣', '槍'], specialWeapons: [] },
    'パラディン(女)': { weaponTypes: ['剣', '槍'], specialWeapons: [] },
    'パラディン': { weaponTypes: ['剣', '槍'], specialWeapons: [] },
    'ファルコンナイト': { weaponTypes: ['槍', '剣'], specialWeapons: [] },
    'ドラゴンマスター(男)': { weaponTypes: ['槍', '斧'], specialWeapons: [] },
    'ドラゴンマスター(女)': { weaponTypes: ['槍', '斧'], specialWeapons: [] },
    '狂戦士': { weaponTypes: ['斧'], specialWeapons: [] },
    'ウォーリアー': { weaponTypes: ['斧', '弓'], specialWeapons: [] },
    'ジェネラル': { weaponTypes: ['槍', '斧'], specialWeapons: [] },
    'アサシン': { weaponTypes: ['剣'], specialWeapons: [] },
    'スナイパー': { weaponTypes: ['弓'], specialWeapons: [] },
    '遊牧騎兵': { weaponTypes: ['弓', '剣'], specialWeapons: [] },
    '司祭(男)': { weaponTypes: ['光'], specialWeapons: [] },
    '司祭(女)': { weaponTypes: ['光'], specialWeapons: [] },
    '司祭': { weaponTypes: ['光'], specialWeapons: [] },
    'ヴァルキュリア': { weaponTypes: ['理'], specialWeapons: [] },
    '賢者(男)': { weaponTypes: ['理', '光'], specialWeapons: [] },
    '賢者(女)': { weaponTypes: ['理', '光'], specialWeapons: [] },
    '賢者': { weaponTypes: ['理', '光'], specialWeapons: [] },
    'ドルイド': { weaponTypes: ['闘', '光'], specialWeapons: [] },
    '大賢者': { weaponTypes: ['理', '光', '闇'], specialWeapons: [] },
    'バード/踊り子': { weaponTypes: [], specialWeapons: [] }, // 攻撃不可
    '輸送隊': { weaponTypes: [], specialWeapons: [] } // 攻撃不可
};

// クラスに応じた使用可能武器を取得する関数
function getAvailableWeapons(className, isClassChange, ccClassName) {
    // クラスチェンジ後の場合はCC後のクラス名を使用
    const targetClass = isClassChange && ccClassName ? ccClassName : className;
    const classWeapon = classWeapons[targetClass];
    
    if (!classWeapon) {
        console.warn(`クラス "${targetClass}" の武器データが見つかりません`);
        return weapons; // 見つからない場合は全武器を返す
    }
    
    // 使用可能な武器をフィルタリング
    return weapons.filter(weapon => {
        // 特殊武器の場合
        if (classWeapon.specialWeapons.includes(weapon.name)) {
            return true;
        }
        
        // 他のクラスの専用武器は除外
        const allSpecialWeapons = ['レイピア', 'デュランダル', 'ヴォルフバイル', 'アルマーズ', 'マーニ・カティ', 'ソール・カティ'];
        if (allSpecialWeapons.includes(weapon.name) && !classWeapon.specialWeapons.includes(weapon.name)) {
            return false;
        }
        
        // 武器属性がクラスの使用可能タイプに含まれるか
        return classWeapon.weaponTypes.includes(weapon.attribute);
    });
}

