/**
 * 座標系:
 *   x: 画面左端 = 0, 右方向が正
 *   y: 地面上面 = 0, 上方向が正（Game.tsx側で画面座標に変換）
 *   w, h: 幅・高さ
 */
export interface Rect { x: number; y: number; w: number; h: number }

/** 1画面分のデータ */
export interface Screen {
  /** 背景画像パス（4:3画像を全面表示） */
  background?: string
  platforms: Rect[]
  hazards: Rect[]
  /** 間欠泉の配置（任意） */
  geysers?: import('../geysers').GeyserDef[]
  /** 雫トラップの配置（任意） */
  drips?: import('../drips').DripDef[]
  /** この画面のハザード画像パス（未指定時はステージのhazardImageを使用） */
  hazardImage?: string
  /** この画面のハザード描画サイズ（未指定時はステージのhazardSizeを使用） */
  hazardSize?: { w: number; h: number }
  /** ゲームオーバー時に表示するメッセージ（未指定時はデフォルトメッセージ） */
  deathMessage?: string
  /** AI アシスト用の追加プロンプト（未指定時は送信しない） */
  aiAssistPrompt?: string
  /** ゴール時に表示するメッセージ（未指定時は空） */
  clearMessage?: string
  /** 最終画面のゴール座標（任意。サイズはStageData.goalSizeで指定） */
  goal?: { x: number; y: number }
}

export interface StageData {
  id: number
  name: string
  screens: Screen[]
  /** ステージ固有のプレイヤー画像パス（未指定時はデフォルト画像を使用） */
  playerImage?: string
  /** ステージ固有のプレイヤーサイズ（未指定時はデフォルト 30x40） */
  playerSize?: { w: number; h: number }
  /** ステージ固有のハザード画像パス（未指定時はデフォルト画像を使用） */
  hazardImage?: string
  /** ステージ固有のハザード描画サイズ（未指定時は各hazardのw,hをそのまま使用） */
  hazardSize?: { w: number; h: number }
  /** ステージ固有のゴール画像パス（未指定時は金色矩形で描画） */
  goalImage?: string
  /** ステージ固有のゴール描画サイズ（未指定時はデフォルト 30x60） */
  goalSize?: { w: number; h: number }
  /** 間欠泉画像パス（geysers使用時） */
  geyserImage?: string
  /** 雫トラップ画像パス（drips使用時） */
  dripImage?: string
  /** クリア時にGoogle Mapsで表示する目的地（地名や住所、または緯度,経度） */
  destination?: string
  /** Google Mapsで表示する経由地（地名や住所、または緯度,経度の配列） */
  waypoints?: string[]
}

import { stage1 } from './stage1' //四国中央 新居浜
import { stage2 } from './stage2' //今治 西条
import { stage3 } from './stage3' //お祭り
import { stage4 } from './stage4' //その他中予
import { stage5 } from './stage5' //その他南予
import { stage6 } from './stage6' //宇和島 愛南
import { stage7 } from './stage7' //道後温泉
import { stage8 } from './stage8' //松山城

export const stages: StageData[] = [stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8]
