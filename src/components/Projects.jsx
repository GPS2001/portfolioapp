import React from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { number: "01", name: "CodeBuddy", type: "DEVELOPER TOOLING", description: "Problem: developer workflows can feel fragmented. Solution: a focused companion interface for coding support. Add verified implementation details before publishing.", stack: ["React", "Node.js", "JavaScript"], tone: "project-lime", mark: "{" },
  { number: "02", name: "Study Hub", type: "LEARNING PLATFORM", description: "Problem: study material can be scattered. Solution: a structured learning hub for bringing resources together. Add verified features and outcomes before publishing.", stack: ["React", "Express", "MongoDB"], tone: "project-violet", mark: "↗" },
  { number: "03", name: "DevProfileViewer", type: "OPEN SOURCE / WEB", description: "Problem: developer details are spread across profile pages. Solution: a unified interface for exploring developer profiles. Add the APIs and error-handling details you implemented.", stack: ["React", "REST API", "CSS"], tone: "project-blue", mark: "</>" },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <div className="section-heading">
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">A few things<br />I’ve <em>put into the world.</em></h2>
          </div>
          <p className="section-description projects-intro">A selection of projects that reflect how I approach problems: start with the user, keep the system clear, and iterate toward something useful.</p>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article className="project-row" key={project.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .5 }}>
              <div className={`project-visual ${project.tone}`}><span className="project-visual-number mono">PROJECT / {project.number}</span><span className="project-mark">{project.mark}</span><div className="project-visual-bottom"><Code2 size={16} /><span className="mono">BUILD · LEARN · ITERATE</span></div></div>
              <div className="project-content">
                <div className="project-meta mono"><span>{project.type}</span><span>{project.number} / 03</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="project-stack">{project.stack.map(item => <span className="pill" key={item}>{item}</span>)}</div>
                <div className="project-links"><a href="https://github.com/GPS2001" target="_blank" rel="noreferrer"><Code2 size={16} /> Source code <ArrowUpRight size={14} /></a><span className="project-link-note"><ExternalLink size={14} /> Update with the exact repository URL</span></div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="projects-footnote"><span className="mono">MORE IN PROGRESS</span><span>Good work is never really finished.</span></div>
      </div>
    </section>
  );
}
