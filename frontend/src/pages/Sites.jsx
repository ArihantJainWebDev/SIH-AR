// src/pages/Sites.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sitesData } from "../data/sitesData";

const Sites = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "#001f4d",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "2.8rem",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease-out",
        }}
      >
        Famous Sites of Madhya Pradesh
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(50px)",
          transition: "all 1.2s ease-out",
        }}
      >
        {sitesData.map((site) => (
          <div
            key={site.id}
            onClick={() => navigate("/ar", { state: { siteId: site.id } })}
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              backgroundColor: "#fff",
              color: "#001f4d",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
            }}
          >
            <div style={{ position: "relative", height: "220px" }}>
              <img
                src={site.images[0]}
                alt={site.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "60%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                }}
              />
            </div>
            <div style={{ padding: "25px" }}>
              <h3 style={{ color: "#ff6f61", marginBottom: "12px", fontSize: "1.4rem" }}>
                {site.name}
              </h3>
              <p style={{ color: "#333", lineHeight: "1.6" }}>{site.history.slice(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sites;
