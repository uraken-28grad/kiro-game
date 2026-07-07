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
  const [loading, setLoading] = useState(true)
  const [deathCount, setDeathCount] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const startTimeRef = useRef<number>(0)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const [aiAdvice, setAiAdvice] = useState<string | null>(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [isDead, setIsDead] = useState(false)

  // ステージが変わったときのみタイマーをリセット＆ローディング状態に戻す
  useEffect(() => {
    startTimeRef.current = 0
    setElapsedTime(0)
    setLoading(true)
  }, [stageId])

  const handleReady = useCallback(() => {
    startTimeRef.current = Date.now()
    setLoading(false)
  }, [])

  const handleClear = useCallback(() => {
    setElapsedTime((Date.now() - startTimeRef.current) / 1000)
    setCleared(true)
  }, [])
  const sendScreenshot = useCallback(() => {
    const container = canvasContainerRef.current
    if (!container) return
    const canvas = container.querySelector('canvas')
    if (!canvas) return
    const dataUrl = canvas.toDataURL('image/png')

    // 現在の画面のハザード画像パスを取得
    const hazardImage = stage.hazardImage ?? '/animal.png'

    setAiAdvice(null)
    setAiLoading(true)

    fetch('https://bh1o2885xk.execute-api.ap-northeast-1.amazonaws.com/prod/screenshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: dataUrl,
        stageId: stage.id,
        stageName: stage.name,
        hazardImage,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.advice) {
          setAiAdvice(result.advice)
          console.log(`[AI Advice] Stage ${stage.id} "${stage.name}":`, result.advice)
        }
      })
      .catch(error => console.error('Screenshot send failed:', error))
      .finally(() => setAiLoading(false))
  }, [stage])

  const handleDeath = useCallback(() => {
    setDeathCount(c => c + 1)
    setIsDead(true)
    // ゲームオーバー時に自動でスクリーンショットを送信
    setTimeout(() => sendScreenshot(), 100)
  }, [sendScreenshot])

  useEffect(() => {
    const onResize = () => setSize(calcSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // リアルタイムタイマー表示用
  const [displayTime, setDisplayTime] = useState(0)
  useEffect(() => {
    if (loading || cleared) return
    const id = setInterval(() => {
      setDisplayTime((Date.now() - startTimeRef.current) / 1000)
    }, 10)
    return () => clearInterval(id)
  }, [loading, cleared])

  const handleRetry = () => { setCleared(false); setIsDead(false); setAiAdvice(null); setKey(k => k + 1) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <p style={{ margin: '0 0 8px' }}>Stage {stage.id}: {stage.name} | 💀 {deathCount} | ⏱ {displayTime.toFixed(2)}秒</p>
      <div style={{ position: 'relative' }} ref={canvasContainerRef}>
        <Application width={size.w} height={size.h} background={0x87ceeb} preserveDrawingBuffer={true}>
          <Game key={key} width={size.w} height={size.h} stage={stage} onClear={handleClear} onDeath={handleDeath} onReady={handleReady} paused={loading} />
        </Application>
        {loading && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 10,
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#fff', fontSize: 28, fontWeight: 'bold', margin: '0 0 12px' }}>
                Now Loading...
              </p>
              <p style={{ color: '#ccc', fontSize: 16, margin: 0 }}>
                Stage {stage.id}: {stage.name}
              </p>
            </div>
          </div>
        )}
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
        {isDead && (aiLoading || aiAdvice) && (
          <div style={{
            position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
            width: '80%', maxHeight: '35%', overflowY: 'auto',
            padding: '10px 16px',
            backgroundColor: 'rgba(26, 26, 46, 0.95)',
            borderRadius: 8,
            border: '1px solid #4a4a6a',
            zIndex: 5,
          }}>
            <p style={{ color: '#ffd700', fontSize: 13, fontWeight: 'bold', margin: '0 0 4px' }}>
              🤖 AIアドバイス
            </p>
            {aiLoading ? (
              <p style={{ color: '#ccc', fontSize: 13, margin: 0 }}>分析中...</p>
            ) : (
              <p style={{ color: '#fff', fontSize: 13, margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>
                {aiAdvice}
              </p>
            )}
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
