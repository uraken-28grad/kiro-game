import { StageData } from "./index";

export const stage4: StageData = {
  id: 4,
  name: "その他中予",
  playerImage: "/chu-yo/teki/eto_remake_ushi.png",
  playerSize: { w: 100, h: 100 },
  hazardImage: "/chu-yo/teki/koi_takinobori.png",
  hazardSize: { w: 200, h: 200 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 150, h: 150 },
  screens: [
    {
      background: "/chu-yo/botchan.jpg",
      platforms: [
        { x: 100, y: 200, w: 100, h: 20 },
        { x: 200, y: 250, w: 100, h: 20 },
        { x: 300, y: 300, w: 100, h: 20 },
        { x: 400, y: 350, w: 100, h: 20 },
        { x: 500, y: 400, w: 100, h: 20 },
        { x: 600, y: 450, w: 100, h: 20 },
        { x: 200, y: 50, w: 100, h: 20 },
        { x: 300, y: 100, w: 100, h: 20 },
        { x: 400, y: 150, w: 100, h: 20 },
        { x: 500, y: 200, w: 100, h: 20 },
        { x: 600, y: 250, w: 100, h: 20 },
        { x: 700, y: 300, w: 100, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        { x: 700, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "坊ちゃん劇場\n東温市にあるハイレベルなミュージカル劇場\n歴史や偉人をテーマにした作品を上演している",
    },
    {
      background: "/chu-yo/Shimonada.jpg",
      platforms: [
        { x: 20, y: 170, w: 300, h: 20 },
        { x: 260, y: 250, w: 30, h: 20 },
        { x: 420, y: 90, w: 60, h: 20 },
        { x: 450, y: 350, w: 60, h: 20 },
        { x: 700, y: 200, w: 150, h: 20 },
      ],
      hazards: [
        // { x: 160, y: 0, w: 25, h: 20 },
        // { x: 340, y: 0, w: 25, h: 20 },
        { x: 510, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "下灘駅\n松山駅から1時間、海を見ることができる駅\n数々のドラマや映画のロケ地として有名",
    },
    {
      background: "/chu-yo/kuma-kogen.jpg",
      platforms: [
        { x: 150, y: 80, w: 30, h: 20 },
        { x: 0, y: 160, w: 30, h: 20 },
        { x: 150, y: 250, w: 60, h: 20 },
        { x: 400, y: 300, w: 60, h: 20 },
        { x: 600, y: 80, w: 60, h: 20 },
        { x: 700, y: 180, w: 60, h: 20 },
        { x: 650, y: 350, w: 150, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 25, h: 20 },
        { x: 700, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "久万高原町にある日本三大カルストのひとつ\n美しい風景や高山植物を楽しむことができる",
    },
    {
      background: "/chu-yo/kumakougen_omogokei.jpg",
      platforms: [
        { x: 260, y: 80, w: 20, h: 20 },
        { x: 350, y: 150, w: 20, h: 20 },
        { x: 150, y: 200, w: 20, h: 20 },
        { x: 0, y: 280, w: 20, h: 20 },
        { x: 180, y: 370, w: 20, h: 20 },
        { x: 400, y: 300, w: 20, h: 20 },
        { x: 600, y: 350, w: 20, h: 20 },
        { x: 800, y: 420, w: 20, h: 20 },
        { x: 950, y: 300, w: 20, h: 20 },
      ],
      hazards: [
        { x: 500, y: 0, w: 25, h: 20 },
        { x: 800, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "久万高原町にある面河渓\n様々な四季が楽しめる\n川がとても透明で綺麗",
    },
    {
      background: "/chu-yo/masaki_darumayuhi.jpg",
      platforms: [
        { x: 120, y: 90, w: 55, h: 20 },
        { x: 200, y: 180, w: 55, h: 20 },
        { x: 300, y: 100, w: 20, h: 200 },
        { x: 500, y: 100, w: 20, h: 200 },
        { x: 520, y: 230, w: 55, h: 20 },
        { x: 600, y: 350, w: 55, h: 20 },
        { x: 800, y: 300, w: 200, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 25, h: 20 },
        { x: 870, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "松前町で運が良ければ見れるだるま夕日\n水平線に溶け込むロマンチックな夕日を恋人とご覧あれ",
      goal: { x: 950, y: 300 },
    },
  ],
};
