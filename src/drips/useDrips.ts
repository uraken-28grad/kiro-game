import { useCallback, useEffect, useRef, useState } from 'react'
import { DripDef, DripInstance } from './types'

const DEFAULT_PERIOD = 90
const DEFAULT_SPEED = 4

/**
 * 雫トラップのロジックを管理するhook。
 * 毎フレーム tick(groundY) を呼ぶことで雫の生成・落下を更新する。
 */
export function useDrips(defs: DripDef[], groundY: number) {
  const dripsRef = useRef<DripInstance[]>([])
  const timersRef = useRef<number[]>([])
  const [fallingDrips, setFallingDrips] = useState<DripInstance[]>([])

  // defs が変わったら状態をリセット
  useEffect(() => {
    dripsRef.current = []
    timersRef.current = defs.map(def => -(def.delay ?? 0))
    setFallingDrips([])
  }, [defs])

  /** 毎フレーム呼び出すtick関数 */
  const tick = useCallback(() => {
    if (defs.length === 0) return

    const timers = timersRef.current
    const instances = dripsRef.current
    let changed = false

    // タイマー更新 & 新しい雫を生成
    for (let i = 0; i < defs.length; i++) {
      timers[i]++
      if (timers[i] <= 0) continue // まだ初期遅延中

      const period = defs[i].period ?? DEFAULT_PERIOD
      if (timers[i] % period === 0) {
        // 新しい雫を生成
        const def = defs[i]
        const speed = def.speed ?? DEFAULT_SPEED
        instances.push({
          defIndex: i,
          x: def.x,
          y: groundY - def.y - def.h, // ステージ座標→画面座標
          w: def.w,
          h: def.h,
          speed,
        })
        changed = true
      }
    }

    // 落下中の雫を更新
    for (let i = instances.length - 1; i >= 0; i--) {
      instances[i].y += instances[i].speed
      changed = true

      // 地面を超えたら削除
      if (instances[i].y > groundY) {
        instances.splice(i, 1)
      }
    }

    if (changed) {
      setFallingDrips([...instances])
    }
  }, [defs, groundY])

  /**
   * プレイヤーとの当たり判定。
   * 戻り値: 当たっていたら true
   */
  const checkCollision = useCallback((
    playerX: number,
    playerY: number,
    playerW: number,
    playerH: number,
  ): boolean => {
    for (const drip of dripsRef.current) {
      const overlapX = playerX + playerW > drip.x && playerX < drip.x + drip.w
      const overlapY = playerY + playerH > drip.y && playerY < drip.y + drip.h
      if (overlapX && overlapY) return true
    }
    return false
  }, [])

  return { fallingDrips, tick, checkCollision }
}
