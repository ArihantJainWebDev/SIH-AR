// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { FaHome, FaLandmark, FaMapMarkedAlt, FaInfoCircle, FaCube, FaBars } from "react-icons/fa";

import Home from "./pages/Home";
import AR from "./pages/AR";
import Sites from "./pages/Sites";
import SiteDetail from "./pages/SiteDetail";
import Map from "./pages/Map";
import About from "./pages/About";

import "./App.css";

// Sidebar component
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "AR", path: "/ar", icon: <FaCube /> },
    { name: "Sites", path: "/sites", icon: <FaLandmark /> },
    { name: "Map", path: "/map", icon: <FaMapMarkedAlt /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: sidebarOpen ? "220px" : "60px",
        height: "100%",
        backgroundColor: "#001f4d",
        color: "#fff",
        transition: "width 0.3s",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.5rem",
          cursor: "pointer",
          margin: "0 auto 30px auto",
        }}
      >
        <FaBars />
      </button>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: sidebarOpen ? "flex-start" : "center",
          paddingLeft: sidebarOpen ? "20px" : "0",
          gap: "15px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: sidebarOpen ? "15px" : "0",
              padding: "12px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: isActive ? "#003366" : "transparent",
              fontWeight: "500",
              transition: "all 0.2s",
              width: "100%",
              justifyContent: sidebarOpen ? "flex-start" : "center",
              cursor: "pointer",
            })}
          >
            {item.icon}
            {sidebarOpen && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

function AppWrapper() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isARPage = location.pathname === "/ar";

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Sidebar only if NOT AR page */}
      {!isARPage && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}

      {/* Overlay for mobile */}
      {!isARPage && sidebarOpen && isMobile && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 900,
          }}
        />
      )}

      {/* Main content */}
      <main
        style={{
          flex: 1,
          marginLeft: !isARPage ? (sidebarOpen ? "220px" : "60px") : "0",
          padding: !isARPage ? "20px" : "0",
          minHeight: "100vh",
          backgroundColor: isARPage ? "#000" : "#001f4d",
          color: "#fff",
          boxSizing: "border-box",
          overflow: isARPage ? "hidden" : "auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: isARPage ? "100%" : "1200px", margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ar" element={<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000 }}><AR /></div>} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/sites/:id" element={<SiteDetail />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
        <AppWrapper />
    </Router>
  );
}

export default App;