import React from "react";
import { Button } from "antd";
import { ArrowDown, ArrowUpRight, Code2, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="hero-section grid-bg" id="home">
      <div className="container hero-layout">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
          <div className="availability"><span className="status-dot" /> OPEN TO BUILDING WHAT’S NEXT</div>
          <p className="hero-kicker mono">AI AUTOMATION · PRODUCT ENGINEERING</p>
          <h1>Software Engineer<br />Building <span>Scalable Products</span><br />&amp; Intelligent Systems</h1>
          <p className="hero-summary">I’m <strong>Gaurpad Shukla</strong>, an Information Technology graduate with software development internship and research experience. I build web applications and backend systems, with a focus on product engineering, automation, and cloud technologies.</p>
          <div className="hero-actions">
            <Button type="primary" size="large" href="#featured-project">View projects <ArrowUpRight size={17} /></Button>
            <Button size="large" href="/resume.pdf" className="secondary-button" download>Download résumé</Button>
            <Button type="text" size="large" href="#contact" className="tertiary-button">Contact me</Button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/GPS2001" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Globe2 size={16} /> LinkedIn</a>
            <span className="social-divider" />
            <span className="hero-location">Lucknow, India</span>
          </div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}>
          <div className="art-glow" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="core-card">
            <div className="core-top"><span className="core-dot" /><span className="mono">SYSTEM / 001</span><Sparkles size={15} /></div>
            <div className="core-symbol"><div className="symbol-ring ring-a" /><div className="symbol-ring ring-b" /><div className="symbol-center">G<span>.</span></div></div>
            <div className="core-bottom"><span>INTELLIGENCE</span><span className="core-line" /><span>IN MOTION</span></div>
          </div>
          <div className="float-tag tag-top"><span className="tag-icon">✳</span><span><b>Agentic AI</b><small>Autonomous workflows</small></span></div>
          <div className="float-tag tag-bottom"><span className="tag-icon tag-icon-alt">⌘</span><span><b>Product-minded</b><small>Built for real-world impact</small></span></div>
          <div className="art-caption mono">FIG 01. / HUMAN × MACHINE</div>
        </motion.div>
      </div>
      <a href="#featured-project" className="scroll-cue"><span className="scroll-line" /><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
    </section>
  );
}
