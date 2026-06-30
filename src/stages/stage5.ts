import { StageData } from './index'

export const stage5: StageData = {
  id: 5,
  name: '最終試練',
  playerStart: { x: 0, y: 0 },
  platforms: (gy) => [
    { x: 250, y: gy - 100, w: 50, h: 20 },
    { x: 450, y: gy - 180, w: 50, h: 20 },
    { x: 700, y: gy - 130, w: 50, h: 20 },
    { x: 900, y: gy - 220, w: 50, h: 20 },
    { x: 1150, y: gy - 160, w: 50, h: 20 },
    { x: 1400, y: gy - 250, w: 50, h: 20 },
    { x: 1650, y: gy - 140, w: 50, h: 20 },
    { x: 1900, y: gy - 200, w: 50, h: 20 },
    { x: 2150, y: gy - 270, w: 50, h: 20 },
    { x: 2400, y: gy - 180, w: 50, h: 20 },
  ],
  hazards: (gy) => [
    { x: 350, y: gy - 20, w: 25, h: 20 },
    { x: 580, y: gy - 20, w: 25, h: 20 },
    { x: 800, y: gy - 20, w: 25, h: 20 },
    { x: 1050, y: gy - 20, w: 25, h: 20 },
    { x: 1280, y: gy - 20, w: 25, h: 20 },
    { x: 1530, y: gy - 20, w: 25, h: 20 },
    { x: 1780, y: gy - 20, w: 25, h: 20 },
    { x: 2050, y: gy - 20, w: 25, h: 20 },
    { x: 2300, y: gy - 20, w: 25, h: 20 },
  ],
  goal: (gy) => ({ x: 2700, y: gy - 60, w: 30, h: 60 }),
}
