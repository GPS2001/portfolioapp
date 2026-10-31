import React from "react";
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="section featured-section" id="featured-project">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Featured project · Proof of work</span>
          <h2 className="section-title">Built to solve a problem.<br /><em>Designed to be useful.</em></h2>
          <p className="section-description">A closer look at a selected project: the problem, the engineering choices, and what the implementation demonstrates.</p>
        </div>
        <motion.article className="featured-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5 }}>
          <div className="featured-visual" aria-label="Abstract CodeBuddy project preview" role="img">
            <div className="featured-window"><div className="window-dots"><i /><i /><i /></div><div className="featured-terminal mono"><span className="terminal-muted"></span><br /><span className="terminal-green">const</span> workflow = <span className="terminal-purple">"build → test → learn"</span>;<br /><span className="terminal-green">await</span> makeSomethingUseful();<br /><span className="terminal-cursor">▍</span></div></div>
            <span className="featured-visual-caption mono"><Sparkles size={14} /> DEVELOPER TOOLING / CONCEPT PREVIEW</span>
          </div>
          <div className="featured-details">
            <div className="project-meta mono"><span>01 / FEATURED</span><span className="featured-badge">Developer tooling</span></div>
            <h3>CodeBuddy</h3>
            <p className="featured-lead">A developer-focused companion designed to make coding workflows more approachable, organized, and productive.</p>
            <div className="case-block"><h4>The problem</h4><p>Developer workflows can become fragmented across tools, tasks, and reference material.</p></div>
            <div className="case-block"><h4>The solution</h4><p>CodeBuddy brings its core developer-support experience into one focused interface. Update this summary to reflect the features implemented in your repository.</p></div>
            <div className="case-block"><h4>Engineering focus</h4><p>Component-driven UI, clear interaction states, and a maintainable application structure.</p></div>
            <div className="project-stack"><span className="pill">React</span><span className="pill">Node.js</span><span className="pill">JavaScript</span></div>
            <div className="project-links"><a href="https://github.com/GPS2001" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub profile <ArrowUpRight size={14} /></a><span className="project-link-note"><ExternalLink size={14} /> Add the CodeBuddy repository URL</span></div>
            <p className="proof-note">No usage or performance metrics are claimed until verified. Replace this note with measured outcomes when available.</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
