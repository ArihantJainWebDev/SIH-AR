import React, { useEffect, useState } from "react";

const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Our Mission",
      content:
        "To bring India’s rich cultural heritage to life through augmented reality, making history immersive, interactive, and unforgettable.",
    },
    {
      title: "Our Vision",
      content:
        "Empower people to explore, learn, and experience historical monuments and temples in ways never seen before, bridging technology and tradition.",
    },
    {
      title: "Why AR Explorer?",
      content:
        "Because we believe history should be experienced, not just read. Explore, interact, and travel back in time with just a tap.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#001f4d", // navy blue
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Hero section */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          marginBottom: "50px",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease-out",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>About AR Explorer</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          AR Explorer is your gateway to India’s most iconic monuments, forts, and temples through cutting-edge augmented reality. We aim to make history interactive, engaging, and unforgettable.
        </p>
      </div>

      {/* Sections */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {sections.map((sec, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#fff",
              color: "#001f4d",
              borderRadius: "15px",
              padding: "30px",
              flex: "1 1 300px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(50px)",
              transition: `all 0.6s ease-out ${idx * 0.2}s`,
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>{sec.title}</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{sec.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
