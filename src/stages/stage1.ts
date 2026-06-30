import { StageData } from './index'

export const stage1: StageData = {
  id: 1,
  name: 'はじまりの丘',
  playerStart: { x: 0, y: 0 },
  platforms: (gy) => [
    { x: 400, y: gy - 60, w: 60, h: 60 },
    { x: 650, y: gy - 130, w: 80, h: 20 },
    { x: 900, y: gy - 100, w: 60, h: 100 },
    { x: 1150, y: gy - 160, w: 90, h: 20 },
    { x: 1400, y: gy - 50, w: 80, h: 50 },
    { x: 1650, y: gy - 180, w: 70, h: 20 },
    { x: 1900, y: gy - 80, w: 60, h: 80 },
    { x: 2200, y: gy - 140, w: 80, h: 20 },
  ],
  hazards: (gy) => [
    { x: 550, y: gy - 20, w: 20, h: 20 },
    { x: 1050, y: gy - 20, w: 20, h: 20 },
    { x: 1550, y: gy - 20, w: 20, h: 20 },
    { x: 2050, y: gy - 20, w: 20, h: 20 },
    { x: 2450, y: gy - 20, w: 20, h: 20 },
  ],
  goal: (gy) => ({ x: 2500, y: gy - 60, w: 30, h: 60 }),
}
