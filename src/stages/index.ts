/**
 * 座標系:
 *   x: 画面左端 = 0, 右方向が正
 *   y: 地面上面 = 0, 上方向が正（Game.tsx側で画面座標に変換）
 *   w, h: 幅・高さ
 */
export interface Rect { x: number; y: number; w: number; h: number }

export interface BackgroundImage {
  src: string
  x: number
  y: number
  w: number
  h: number
}

/** 1画面分のデータ */
export interface Screen {
  backgrounds: BackgroundImage[]
  platforms: Rect[]
  hazards: Rect[]
  /** 最終画面のゴール（任意） */
  goal?: Rect
}

export interface StageData {
  id: number
  name: string
  screens: Screen[]
}

import { stage1 } from './stage1'
import { stage2 } from './stage2'
import { stage3 } from './stage3'
import { stage4 } from './stage4'
import { stage5 } from './stage5'

export const stages: StageData[] = [stage1, stage2, stage3, stage4, stage5]
