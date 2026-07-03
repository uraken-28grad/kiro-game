/** 雫トラップの配置データ（ステージデータで定義する） */
export interface DripDef {
  /** 雫の発生X座標 */
  x: number
  /** 雫の発生Y座標（地面基準、上方向正） */
  y: number
  /** 雫の画像幅 */
  w: number
  /** 雫の画像高さ */
  h: number
  /** 雫の発生周期（フレーム数）。デフォルト90 */
  period?: number
  /** 落下速度（px/frame）。デフォルト4 */
  speed?: number
  /** 初期遅延（フレーム数）。複数雫の時差を作る */
  delay?: number
}

/** 落下中の個別の雫インスタンス */
export interface DripInstance {
  /** 発生元のDripDefインデックス */
  defIndex: number
  /** 現在のX座標（画面座標） */
  x: number
  /** 現在のY座標（画面座標） */
  y: number
  /** 幅 */
  w: number
  /** 高さ */
  h: number
  /** 落下速度 */
  speed: number
}
