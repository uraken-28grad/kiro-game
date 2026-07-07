import { StageData } from "./index";

export const stage2: StageData = {
  id: 2,
  name: "今治・西条",
  playerImage: "/imabari/jiki_AItaoru_clear.png",
  playerSize: { w: 100, h: 100 },
  hazardSize: { w: 200, h: 200 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 100, h: 100 },

  destination: "来島海峡第三大橋",
  waypoints: ["石鎚神社 奥宮 頂上社", "石鎚山", "今治城"],

  screens: [
    {
      background: "/imabari/saijou_jinja.jpg",
      hazardImage: "/imabari/teki/hune2.png",
      hazardSize: { w: 200, h: 200 },
      platforms: [
        { x: 150, y: 180, w: 50, h: 20 },
        { x: 350, y: 80, w: 50, h: 20 },
        { x: 400, y: 200, w: 150, h: 20 },
        { x: 700, y: 250, w: 150, h: 20 },
        { x: 900, y: 250, w: 90, h: 20 },
      ],
      hazards: [
        { x: 800, y: 0, w: 200, h: 200 },
        { x: 500, y: 0, w: 200, h: 200 },
      ],
      deathMessage: "西条市にある石鎚神社\n石鎚山を神体山とする神社",
    },
    {
      background: "/imabari/saijou_yama.jpg",
      hazardImage: "/imabari/teki/hune2.png",
      platforms: [
        { x: 180, y: 80, w: 50, h: 20 },
        { x: 0, y: 180, w: 50, h: 20 },
        { x: 180, y: 270, w: 50, h: 20 },
        { x: 250, y: 350, w: 50, h: 20 },
        { x: 520, y: 90, w: 90, h: 20 },
        { x: 600, y: 200, w: 90, h: 20 },
        { x: 850, y: 200, w: 90, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
        { x: 700, y: 0, w: 20, h: 20 },
      ],
      deathMessage:
        "西条市と久万高原町の間に位置する日本七霊山の一つの石鎚山\n私はおばあちゃんの愛媛は石鎚山に守られているという話を今でも信じている",
    },
    {
      background: "/imabari/imabari_shiro.jpg",
      hazardImage: "/imabari/teki/yakitori_mise.png",
      platforms: [
        { x: 120, y: 80, w: 40, h: 20 },
        { x: 150, y: 170, w: 40, h: 20 },
        { x: 200, y: 250, w: 40, h: 20 },
        { x: 250, y: 350, w: 40, h: 20 },
        { x: 300, y: 450, w: 40, h: 20 },
        { x: 350, y: 550, w: 40, h: 20 },
        { x: 400, y: 650, w: 40, h: 20 },
        { x: 700, y: 350, w: 80, h: 20 },
        { x: 900, y: 350, w: 80, h: 20 },
      ],
      hazards: [{ x: 230, y: 0, w: 20, h: 20 }],
      deathMessage:
        "今治市にある今治城\n5層6階の天守閣や、海水を引き入れた堀など\n特異な構造を持った海浜に位置する海城",
    },
    {
      background: "/imabari/shimanami_tenboudai.jpg",
      hazardImage: "/imabari/teki/yakitori_mise.png",
      platforms: [
        { x: 100, y: 60, w: 80, h: 20 },
        { x: 150, y: 150, w: 80, h: 20 },
        { x: 180, y: 250, w: 80, h: 20 },
        { x: 300, y: 130, w: 80, h: 20 },
        { x: 400, y: 250, w: 80, h: 20 },
        { x: 600, y: 250, w: 80, h: 20 },
        { x: 800, y: 250, w: 80, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 20, h: 20 },
        { x: 420, y: 0, w: 20, h: 20 },
        { x: 650, y: 0, w: 20, h: 20 },
        { x: 900, y: 0, w: 20, h: 20 },
      ],
      deathMessage:
        "今治市、しまなみ海道の来島海峡大橋\n夕暮れ時の幻想的な景色が綺麗らしい\n展望館から渦潮が見下ろせる",
      goal: { x: 850, y: 270 },
    },
  ],
};
