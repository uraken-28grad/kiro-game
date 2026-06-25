import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Kiro Game</h1>
      <button onClick={() => navigate('/play')} style={{ padding: '12px 32px', fontSize: 18, cursor: 'pointer' }}>
        プレイ
      </button>
    </div>
  )
}

export default Home
