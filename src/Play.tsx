import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Application, extend } from '@pixi/react'
import { Container, Graphics } from 'pixi.js'
import { Game } from './Game'
import { stages } from './stages'

extend({ Container, Graphics })

function calcSize() {
  const maxW = window.innerWidth * 0.9
  const maxH = window.innerHeight * 0.8
  // 4:3 横画面比率
  let w = maxW
  let h = w * 3 / 4
  if (h > maxH) {
    h = maxH
    w = h * 4 / 3
  }
  return { w: Math.floor(w), h: Math.floor(h) }
}

function Play() {
  const { stageId } = useParams()
  const navigate = useNavigate()
  const stage = stages.find(s => s.id === Number(stageId)) ?? stages[0]
  const [size, setSize] = useState(calcSize)
  const [key, setKey] = useState(0)
  const [cleared, setCleared] = useState(false)
  const [deathCount, setDeathCount] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const startTimeRef = useRef<number>(Date.now())

  // ステージが変わったときのみタイマーをリセット
  useEffect(() => {
    startTimeRef.current = Date.now()
    setElapsedTime(0)
  }, [stageId])

  const handleClear = useCallback(() => {
    setElapsedTime((Date.now() - startTimeRef.current) / 1000)
    setCleared(true)
  }, [])
  const handleDeath = useCallback(() => setDeathCount(c => c + 1), [])

  useEffect(() => {
    const onResize = () => setSize(calcSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // リアルタイムタイマー表示用
  const [displayTime, setDisplayTime] = useState(0)
  useEffect(() => {
    if (cleared) return
    const id = setInterval(() => {
      setDisplayTime((Date.now() - startTimeRef.current) / 1000)
    }, 10)
    return () => clearInterval(id)
  }, [cleared])

  const handleRetry = () => { setCleared(false); setKey(k => k + 1) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <p style={{ margin: '0 0 8px' }}>Stage {stage.id}: {stage.name} | 💀 {deathCount} | ⏱ {displayTime.toFixed(2)}秒</p>
      <div style={{ position: 'relative' }}>
        <Application width={size.w} height={size.h} background={0x87ceeb}>
          <Game key={key} width={size.w} height={size.h} stage={stage} onClear={handleClear} onDeath={handleDeath} />
        </Application>
        {cleared && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(0,0,0,0.6)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#ffd700', fontSize: 36, fontWeight: 'bold', margin: '0 0 12px' }}>
                GOAL!<br />Congratulations!
              </p>
              {stage.screens.find(s => s.goal)?.clearMessage && (
                <p style={{ color: '#fff', fontSize: 18, margin: '0 0 12px' }}>
                  {stage.screens.find(s => s.goal)?.clearMessage}
                </p>
              )}
              <p style={{ color: '#fff', fontSize: 20, margin: '0 0 8px' }}>
                Stage {stage.id}: {stage.name}
              </p>
              <p style={{ color: '#fff', fontSize: 20, margin: '0 0 8px' }}>
                💀 死亡数: {deathCount}
              </p>
              <p style={{ color: '#fff', fontSize: 20, margin: '0 0 16px' }}>
                ⏱ タイム: {elapsedTime.toFixed(2)}秒
              </p>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`【愛媛県へようこそ！ 〜あれ、観光名所の様子が...？〜】\nステージ${stage.id}「${stage.name}」を死亡数${deathCount}回、タイム${elapsedTime.toFixed(2)}秒でクリアしました！`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#1da1f2',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  borderRadius: 6,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                結果をツイートする
              </a>
            </div>
          </div>
        )}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
        <button onClick={handleRetry} style={{ padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}>
          やり直し
        </button>
        <button onClick={() => navigate('/')} style={{ padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}>
          ステージ選択
        </button>
      </div>
    </div>
  )
}

export default Play
