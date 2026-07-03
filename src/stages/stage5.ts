import { StageData } from "./index";

export const stage5: StageData = {
  id: 5,
  name: "その他南予",
  playerImage: "/nan-yo/fruit_orange.png",
  playerSize: { w: 70, h: 70 },
  hazardImage: "/nan-yo/teki/setsubun_oni_kowai.png",
  hazardSize: { w: 90, h: 90 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 100, h: 100 },
  screens: [
    {
      background: "/nan-yo/Uchikoza.jpg",
      platforms: [
        { x: 200, y: 80, w: 55, h: 20 },
        { x: 400, y: 160, w: 50, h: 20 },
        { x: 600, y: 80, w: 55, h: 20 },
        { x: 800, y: 160, w: 55, h: 20 },
      ],
      hazards: [{ x: 470, y: 0, w: 25, h: 20 }],
      deathMessage: "内子座\n内子町にある、大正5年に建てた芝居小屋",
    },
    {
      background: "/nan-yo/nyohoji5.jpg",
      platforms: [
        { x: 200, y: 80, w: 55, h: 20 },
        { x: 400, y: 160, w: 50, h: 20 },
        { x: 600, y: 80, w: 55, h: 20 },
        { x: 800, y: 160, w: 55, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 25, h: 20 },
        { x: 600, y: 0, w: 25, h: 20 },
        { x: 900, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "如法寺\n大洲市にある臨済宗妙心寺派の寺院\n大洲藩主、加藤泰興の開墓\n三大道場の一つ",
    },
    {
      background: "/nan-yo/Ozu_Castle,_tenshu-1.jpg",
      platforms: [
        { x: 200, y: 80, w: 55, h: 20 },
        { x: 350, y: 160, w: 50, h: 20 },
        { x: 500, y: 250, w: 55, h: 20 },
        { x: 600, y: 100, w: 55, h: 20 },
        { x: 800, y: 160, w: 55, h: 20 },
      ],
      hazards: [
        { x: 370, y: 0, w: 25, h: 20 },
        { x: 560, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "大洲城\n鎌倉時代末期に築城され、平成に木造天守が復元された。",
    },
    {
      background: "/nan-yo/Sadamisaki_hantou_01.jpg",
      platforms: [
        { x: 150, y: 80, w: 50, h: 20 },
        { x: 300, y: 160, w: 50, h: 20 },
        { x: 500, y: 80, w: 50, h: 20 },
        { x: 800, y: 80, w: 100, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 25, h: 20 },
        { x: 500, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "佐田岬半島\n八幡浜市に属する日本一細長い半島\n先端には佐田岬と佐田岬灯台がある",
    },
    {
      background: "/nan-yo/Meijihasi_yawatahamasi.jpg",
      platforms: [
        { x: 150, y: 80, w: 20, h: 20 },
        { x: 250, y: 160, w: 20, h: 20 },
        { x: 350, y: 80, w: 20, h: 20 },
        { x: 450, y: 160, w: 20, h: 20 },
        { x: 530, y: 80, w: 20, h: 20 },
        { x: 600, y: 160, w: 20, h: 20 },
        { x: 700, y: 80, w: 20, h: 20 },
        { x: 800, y: 160, w: 20, h: 20 },
        { x: 950, y: 80, w: 20, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 25, h: 20 },
        { x: 500, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "明治橋\n鉄筋コンクリート路式アーチ橋で、この形式の橋では現役最古\n初代明治橋のたもとで二宮忠八翁が自作の凧をあげて見せ、その凧で整形を立てていた",
    },
    {
      background: "/nan-yo/Unomachi_town_b.jpg",
      platforms: [
        { x: 80, y: 80, w: 50, h: 20 },
        { x: 260, y: 160, w: 50, h: 20 },
        { x: 440, y: 80, w: 50, h: 20 },
      ],
      hazards: [{ x: 170, y: 0, w: 25, h: 20 }],
      deathMessage:
        "卯之町\n宇和島藩の栄えていた佇まいを現代にとどめる町並み\n国の重要伝統的建造物保存地区に選定されている",
      goal: { x: 620, y: 0 },
    },
  ],
};
