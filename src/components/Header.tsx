
import { Cpu, Package, Zap, Box } from "lucide-react"; // Icons for ts, npm, vite, bs

const Header = () => {
  const parts = [
    { label: "ts", icon: <Cpu size={28} color="#ff6b6b" /> },
    { label: "npm", icon: <Package size={28} color="#4ecdc4" /> },
    { label: "vite", icon: <Zap size={28} color="#f9ca24" /> },
    { label: "bs", icon: <Box size={28} color="#6c5ce7" /> },
  ];

  const colors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24",
    "#f0932b", "#eb4d4b", "#6c5ce7", "#a29bfe",
    "#fd79a8", "#00b894",
  ];

  const getCharStyle = (index: number) => {
    const color = colors[index % colors.length];
    return {
      color,
      textShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
      animationDelay: `${index * 0.1}s`,
    };
  };

  return (
    <div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .float-char {
            animation: float 2s ease-in-out infinite;
          }
          .header-bg {
            background: radial-gradient(circle at center, #1e1e2f 0%, #0f0f1f 100%);
          }
        `}
      </style>

      <header
        className="header-bg"
        style={{
          textAlign: "center",
          padding: "40px 0",
          boxShadow: "0 0 50px rgba(0, 0, 0, 0.4)",
          borderBottom: "2px solid #ffffff22",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {parts.map((part, pIdx) => (
            <div
              key={pIdx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {part.icon}
              {part.label.split("").map((char, cIdx) => (
                <span
                  key={cIdx}
                  className="float-char"
                  style={{
                    ...getCharStyle(cIdx),
                    fontSize: "32px",
                    fontWeight: "bold",
                    display: "inline-block",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  {char}
                </span>
              ))}
              {pIdx < parts.length - 1 && (
                <span
                  style={{
                    margin: "0 8px",
                    color: "#999",
                    fontSize: "28px",
                    fontWeight: "lighter",
                  }}
                >
                  -
                </span>
              )}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
