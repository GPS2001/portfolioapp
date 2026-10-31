import React, { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("portfolio-theme", mode);
  }, [mode]);
  const isDark = mode === "dark";
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? "#a3ff12" : "#e07a5f",
          colorBgBase: isDark ? "#0b0f12" : "#f9f6f0",
          colorTextBase: isDark ? "#f5f7fa" : "#2b3e50",
          borderRadius: 12,
          fontFamily: '"Inter", "Segoe UI", sans-serif',
        },
      }}
    >
      <div className={`portfolio-app theme-${mode}`}><a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar mode={mode} onToggleTheme={() => setMode(isDark ? "light" : "dark")} />
        <main id="main-content">
          <Hero />
          <FeaturedProject />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="site-footer">
          <a className="footer-mark" href="#home" aria-label="Back to top">GS<span>.</span></a>
          <p>Designed & built with care.</p>
          <a href="#home" className="back-top">Back to top ↑</a>
          <small>© {new Date().getFullYear()} Gaurpad Shukla</small>
        </footer>
      </div>
    </ConfigProvider>
  );
}
