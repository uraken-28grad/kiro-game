import { StageData } from './index'

export const stage3: StageData = {
  id: 3,
  name: '空中回廊',
  playerStart: { x: 0, y: 0 },
  platforms: (gy) => [
    { x: 350, y: gy - 120, w: 70, h: 20 },
    { x: 550, y: gy - 200, w: 60, h: 20 },
    { x: 800, y: gy - 150, w: 80, h: 20 },
    { x: 1050, y: gy - 220, w: 60, h: 20 },
    { x: 1300, y: gy - 170, w: 70, h: 20 },
    { x: 1550, y: gy - 240, w: 80, h: 20 },
    { x: 1800, y: gy - 130, w: 60, h: 20 },
    { x: 2100, y: gy - 190, w: 90, h: 20 },
    { x: 2400, y: gy - 250, w: 70, h: 20 },
  ],
  hazards: (gy) => [
    { x: 480, y: gy - 20, w: 20, h: 20 },
    { x: 950, y: gy - 20, w: 20, h: 20 },
    { x: 1200, y: gy - 20, w: 20, h: 20 },
    { x: 1700, y: gy - 20, w: 20, h: 20 },
    { x: 1950, y: gy - 20, w: 20, h: 20 },
    { x: 2300, y: gy - 20, w: 20, h: 20 },
  ],
  goal: (gy) => ({ x: 2700, y: gy - 60, w: 30, h: 60 }),
}
