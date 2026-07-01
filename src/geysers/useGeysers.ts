import { useCallback, useEffect, useRef, useState } from 'react'
import { GeyserDef, GeyserState } from './types'

const DEFAULT_INTERVAL = 120
const DEFAULT_DURATION = 60

/** 間欠泉の初期状態を生成 */
function initStates(defs: GeyserDef[]): GeyserState[] {
  return defs.map(def => ({
    def,
    active: false,
    timer: -(def.delay ?? 0), // 負の値で初期遅延を表現
    triggered: def.triggerX == null, // triggerX未設定なら最初からトリガー済み
  }))
}

/**
 * 間欠泉のロジックを管理するhook。
 * 毎フレーム tick(playerX) を呼ぶことで噴出サイクルを更新する。
 */
export function useGeysers(defs: GeyserDef[]) {
  const statesRef = useRef<GeyserState[]>([])
  const [activeGeysers, setActiveGeysers] = useState<GeyserState[]>([])

  // defs が変わったら状態をリセット
  useEffect(() => {
    statesRef.current = initStates(defs)
    setActiveGeysers([])
  }, [defs])

  /** 毎フレーム呼び出すtick関数。playerXでトリガー判定する */
  const tick = useCallback((playerX: number) => {
    const states = statesRef.current
    if (states.length === 0) return

    let changed = false
    for (const s of states) {
      // triggerX が設定されていて、まだトリガーされていない場合
      if (!s.triggered) {
        if (playerX >= s.def.triggerX!) {
          // トリガー発動：ここからタイマー開始
          s.triggered = true
          s.timer = -(s.def.delay ?? 0)
        } else {
          // まだトリガーされていないので何もしない
          continue
        }
      }

      s.timer++
      const interval = s.def.interval ?? DEFAULT_INTERVAL
      const duration = s.def.duration ?? DEFAULT_DURATION
      const cycle = interval + duration

      if (s.timer < 0) {
        // まだ初期遅延中
        if (s.active) {
          s.active = false
          changed = true
        }
        continue
      }

      const phase = s.timer % cycle
      const shouldBeActive = phase >= interval

      if (shouldBeActive !== s.active) {
        s.active = shouldBeActive
        changed = true
      }
    }

    if (changed) {
      setActiveGeysers(states.filter(s => s.active))
    }
  }, [])

  /**
   * プレイヤーとの当たり判定。
   * groundY: 地面の画面Y座標
   * 戻り値: 当たっていたら true
   */
  const checkCollision = useCallback((
    playerX: number,
    playerY: number,
    playerW: number,
    playerH: number,
    groundY: number,
  ): boolean => {
    for (const s of statesRef.current) {
      if (!s.active) continue
      const { x, y, w, h } = s.def
      // ステージ座標 → 画面座標に変換
      const screenY = groundY - y - h
      const overlapX = playerX + playerW > x && playerX < x + w
      const overlapY = playerY + playerH > screenY && playerY < screenY + h
      if (overlapX && overlapY) return true
    }
    return false
  }, [])

  return { activeGeysers, tick, checkCollision }
}
