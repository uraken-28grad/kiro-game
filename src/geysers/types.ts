/** 間欠泉の配置データ（ステージデータで定義する） */
export interface GeyserDef {
  /** 噴出口のX座標 */
  x: number
  /** 噴出口のY座標（地面基準、上方向正） */
  y: number
  /** 噴出時の画像幅 */
  w: number
  /** 噴出時の画像高さ */
  h: number
  /** 噴出間隔（フレーム数）。デフォルト120 */
  interval?: number
  /** 噴出の持続時間（フレーム数）。デフォルト60 */
  duration?: number
  /** 初期遅延（フレーム数）。複数間欠泉の時差を作る */
  delay?: number
  /** プレイヤーのX座標がこの値を超えたら噴出を開始する（未指定時は時間経過で自動噴出） */
  triggerX?: number
}

/** 間欠泉の実行時状態 */
export interface GeyserState {
  def: GeyserDef
  /** 現在噴出中かどうか */
  active: boolean
  /** 現在のフレームカウンタ */
  timer: number
  /** トリガー済みかどうか（triggerX使用時） */
  triggered: boolean
}
