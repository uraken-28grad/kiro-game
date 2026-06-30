import { StageData } from './index'

export const stage2: StageData = {
  id: 2,
  name: '地下洞窟',
  playerStart: { x: -100, y: 0 },
  platforms: (gy) => [
    { x: 300, y: gy - 80, w: 80, h: 20 },
    { x: 550, y: gy - 150, w: 60, h: 20 },
    { x: 800, y: gy - 90, w: 100, h: 90 },
    { x: 1100, y: gy - 170, w: 70, h: 20 },
    { x: 1350, y: gy - 120, w: 60, h: 120 },
    { x: 1600, y: gy - 200, w: 80, h: 20 },
    { x: 1850, y: gy - 60, w: 60, h: 60 },
    { x: 2100, y: gy - 160, w: 90, h: 20 },
  ],
  hazards: (gy) => [
    { x: 450, y: gy - 20, w: 20, h: 20 },
    { x: 700, y: gy - 20, w: 20, h: 20 },
    { x: 1000, y: gy - 20, w: 20, h: 20 },
    { x: 1250, y: gy - 20, w: 20, h: 20 },
    { x: 1750, y: gy - 20, w: 20, h: 20 },
    { x: 2000, y: gy - 20, w: 20, h: 20 },
  ],
  goal: (gy) => ({ x: 2400, y: gy - 60, w: 30, h: 60 }),
}
