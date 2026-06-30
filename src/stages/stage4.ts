import { StageData } from './index'

export const stage4: StageData = {
  id: 4,
  name: '溶岩地帯',
  playerStart: { x: 0, y: 0 },
  platforms: (gy) => [
    { x: 300, y: gy - 70, w: 50, h: 70 },
    { x: 500, y: gy - 140, w: 60, h: 20 },
    { x: 750, y: gy - 100, w: 70, h: 100 },
    { x: 1000, y: gy - 180, w: 50, h: 20 },
    { x: 1200, y: gy - 110, w: 60, h: 110 },
    { x: 1450, y: gy - 200, w: 70, h: 20 },
    { x: 1700, y: gy - 90, w: 50, h: 90 },
    { x: 1950, y: gy - 160, w: 60, h: 20 },
    { x: 2200, y: gy - 220, w: 80, h: 20 },
  ],
  hazards: (gy) => [
    { x: 400, y: gy - 20, w: 30, h: 20 },
    { x: 650, y: gy - 20, w: 30, h: 20 },
    { x: 880, y: gy - 20, w: 30, h: 20 },
    { x: 1100, y: gy - 20, w: 30, h: 20 },
    { x: 1350, y: gy - 20, w: 30, h: 20 },
    { x: 1600, y: gy - 20, w: 30, h: 20 },
    { x: 1850, y: gy - 20, w: 30, h: 20 },
  ],
  goal: (gy) => ({ x: 2500, y: gy - 60, w: 30, h: 60 }),
}
