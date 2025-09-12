import React, { useEffect, useState } from "react";

const Home = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#001f4d", // match sidebar/site color
        overflow: "hidden",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          maxWidth: "900px",
          lineHeight: "1.2",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(60px)",
          transition: "all 1s ease-out",
          textShadow: "0 5px 20px rgba(0,0,0,0.6)",
        }}
      >
        Welcome to AR Explorer
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "700px",
          marginTop: "20px",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.5s ease-out",
          textShadow: "0 3px 15px rgba(0,0,0,0.5)",
        }}
      >
        Dive into India’s ancient monuments, forts, and temples in augmented reality. Experience history like never before.
      </p>
      <button
        style={{
          marginTop: "40px",
          padding: "15px 40px",
          fontSize: "1.2rem",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#ff6f61",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08) translateY(-3px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) translateY(0)")}
      >
        Start Exploring
      </button>

      {/* subtle floating dots for ambience */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        {[...Array(30)].map((_, i) => (
          <span key={i} style={{
            position: "absolute",
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.7)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float${i} ${5 + Math.random() * 10}s linear infinite`,
          }} />
        ))}
      </div>

      <style>
        {`
          ${[...Array(30)].map((_, i) => `
            @keyframes float${i} {
              0% { transform: translateY(0) }
              50% { transform: translateY(-20px) }
              100% { transform: translateY(0) }
            }
          `).join("\n")}
        `}
      </style>
    </div>
  );
};

export default Home;
