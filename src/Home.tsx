import { useNavigate } from "react-router-dom";
import { stages } from "./stages";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 16,
      }}
    >
      <h1>愛媛県へようこそ！</h1>
      <h2>あれ、観光名所の様子が...?</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "min(90vw, calc(80vh * 4 / 3))",
          height: "min(80vh, calc(90vw * 3 / 4))",
          gap: 16,
          backgroundImage: "url(/home-back.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {stages.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/play/${s.id}`)}
              style={{
                padding: "10px 32px",
                fontSize: 16,
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                borderRadius: 4,
                backdropFilter: "blur(4px)",
              }}
            >
              Stage {s.id}: {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
