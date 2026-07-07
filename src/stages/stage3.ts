import { StageData } from "./index";

export const stage3: StageData = {
  id: 3,
  name: "お祭り",
  playerImage: "/festival/jiki_mikoshi.png",
  playerSize: { w: 150, h: 150 },
  hazardSize: { w: 100, h: 150 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 150, h: 150 },

  destination: "嘉母神社",
  waypoints: [
    "港記念公園",
    "新居浜市 一宮神社",
    "宇和津彦神社",
    "道後温泉駅前広場",
  ],

  screens: [
    {
      background: "/festival/iyo_mishima.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 300, y: 80, w: 80, h: 20 },
        { x: 550, y: 180, w: 80, h: 20 },
        { x: 750, y: 180, w: 80, h: 20 },
      ],
      hazards: [{ x: 750, y: 200, w: 20, h: 20 }],
      deathMessage:
        "伊予三島秋祭り\n四国中央市で10/20〜10/23に行われる\n三島太鼓台統一寄せが見物(だと思う)",
    },
    {
      background: "/festival/taiko.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_girl.png",
      platforms: [
        { x: 150, y: 80, w: 70, h: 20 },
        { x: 260, y: 160, w: 70, h: 20 },
        { x: 500, y: 200, w: 70, h: 60 },
        { x: 650, y: 100, w: 70, h: 20 },
        { x: 750, y: 300, w: 70, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 20, h: 20 },
        { x: 360, y: 0, w: 20, h: 20 },
        { x: 650, y: 120, w: 20, h: 20 },
      ],
      deathMessage:
        "新居浜太鼓祭り\n新居浜市で10/16～10/18に行われる\nとてつもない迫力があり素晴らしい。夜太鼓もとても綺麗",
    },
    {
      background: "/festival/uwajima_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 100, y: 400, w: 70, h: 20 },
        { x: 280, y: 80, w: 70, h: 20 },
        { x: 400, y: 180, w: 70, h: 20 },
        { x: 700, y: 180, w: 70, h: 20 },
      ],
      hazards: [
        { x: 100, y: 420, w: 20, h: 20 },
        { x: 380, y: 0, w: 20, h: 20 },
        { x: 700, y: 200, w: 20, h: 20 },
      ],
      deathMessage:
        "宇和島秋祭り\n宇和島市で10/ 29日に行われる\n牛鬼や八つ鹿踊りなどが市内を練り歩き、巫女さんの舞なども見ることができる",
    },
    {
      background: "/festival/matsuyama_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_girl.png",
      platforms: [
        { x: 100, y: 90, w: 70, h: 20 },
        { x: 300, y: 160, w: 70, h: 20 },
        { x: 500, y: 220, w: 70, h: 20 },
        { x: 700, y: 280, w: 70, h: 20 },
        { x: 200, y: 500, w: 70, h: 20 },
        { x: 800, y: 500, w: 70, h: 20 },
      ],
      hazards: [
        { x: 200, y: 520, w: 20, h: 20 },
        { x: 250, y: 0, w: 20, h: 20 },
        { x: 420, y: 0, w: 20, h: 20 },
        { x: 800, y: 520, w: 20, h: 20 },
      ],
      deathMessage:
        "道後松山秋祭り\n松山市で10/5～10/7に行われる\n「鉢合わせ」と呼ばれる神輿同士のぶつかり合いが有名",
    },
    {
      background: "/festival/saijou_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 120, y: 80, w: 70, h: 20 },
        { x: 300, y: 180, w: 70, h: 20 },
        { x: 600, y: 170, w: 70, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
        { x: 450, y: 0, w: 20, h: 20 },
      ],
      deathMessage:
        "西条祭り\n西条市で10/15～10/17に行われる\n深夜に集まるだんじりや神輿、太鼓台がとても綺麗",
      goal: { x: 800, y: 0 },
    },
  ],
};
