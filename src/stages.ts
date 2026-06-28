export interface Rect { x: number; y: number; w: number; h: number }

export interface StageData {
  id: number
  name: string
  playerStart: { x: number; y: number }
  platforms: (groundY: number) => Rect[]
  hazards: (groundY: number) => Rect[]
  goal: (groundY: number) => Rect
}

export const stages: StageData[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]
