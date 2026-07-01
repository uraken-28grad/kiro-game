import { StageData } from './index'

export const stage3: StageData = {
  id: 3,
  name: '道後温泉',
  geyserImage: '/matsuyama-dogo/teki/kanketu.png',
  screens: [
    {
      backgrounds: [],
      platforms: [
        { x: 120, y: 80, w: 80, h: 20 },
        { x: 320, y: 140, w: 80, h: 20 },
        { x: 530, y: 80, w: 80, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
      ],
      geysers: [
        { x: 400, y: 0, w: 40, h: 80, interval: 120, duration: 60, delay: 0 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 80, y: 100, w: 70, h: 20 },
        { x: 260, y: 160, w: 70, h: 20 },
        { x: 440, y: 100, w: 70, h: 20 },
        { x: 600, y: 160, w: 70, h: 20 },
      ],
      hazards: [
        { x: 170, y: 0, w: 20, h: 20 },
        { x: 360, y: 0, w: 20, h: 20 },
      ],
      geysers: [
        { x: 200, y: 0, w: 40, h: 80, interval: 100, duration: 50, delay: 0 },
        { x: 500, y: 0, w: 40, h: 80, interval: 100, duration: 50, delay: 50 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 120, w: 70, h: 20 },
        { x: 280, y: 180, w: 70, h: 20 },
        { x: 460, y: 120, w: 70, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 20, h: 20 },
        { x: 380, y: 0, w: 20, h: 20 },
      ],
      geysers: [
        { x: 150, y: 0, w: 40, h: 100, interval: 90, duration: 60, delay: 30 },
        { x: 400, y: 0, w: 40, h: 100, interval: 90, duration: 60, delay: 0 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 90, w: 70, h: 20 },
        { x: 300, y: 160, w: 70, h: 20 },
        { x: 500, y: 220, w: 70, h: 20 },
      ],
      hazards: [
        { x: 210, y: 0, w: 20, h: 20 },
        { x: 420, y: 0, w: 20, h: 20 },
      ],
      geysers: [
        // 初見殺し: 下ルートをある程度進む(x=120超え)と即噴出
        { x: 150, y: 0, w: 40, h: 80, interval: 1, duration: 9999, delay: 0, triggerX: 120 },
        { x: 250, y: 0, w: 40, h: 80, interval: 1, duration: 9999, delay: 0, triggerX: 120 },
        { x: 350, y: 0, w: 40, h: 80, interval: 1, duration: 9999, delay: 0, triggerX: 120 },
        { x: 450, y: 0, w: 40, h: 80, interval: 1, duration: 9999, delay: 0, triggerX: 120 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 120, y: 100, w: 70, h: 20 },
        { x: 320, y: 170, w: 70, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
        { x: 450, y: 0, w: 20, h: 20 },
      ],
      geysers: [
        { x: 350, y: 0, w: 40, h: 100, interval: 90, duration: 55, delay: 20 },
      ],
      goal: { x: 580, y: 0, w: 30, h: 60 },
    },
  ],
}
