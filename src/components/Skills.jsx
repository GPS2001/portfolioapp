import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, Database, GitBranch, Layers3, Sparkles } from "lucide-react";

const groups = [
  { icon: <Sparkles />, title: "AI & agent systems", items: ["LangChain4j", "LangGraph4j", "LLM integration", "Agentic workflows", "Multi-agent systems", "Prompt engineering"] },
  { icon: <Code2 />, title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C / C++", "SQL"] },
  { icon: <Layers3 />, title: "Web & backend", items: ["React", "Node.js", "Express", "REST APIs", "HTML / CSS", "Spring fundamentals"] },
  { icon: <Database />, title: "Data & storage", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data modelling", "Analytics"] },
  { icon: <Cloud />, title: "Cloud & delivery", items: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "CI / CD", "GitHub Actions"] },
  { icon: <GitBranch />, title: "Engineering", items: ["Git", "System design", "Debugging", "Testing", "Agile collaboration", "Problem solving"] },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">My toolkit</span>
          <h2 className="section-title">Tools are just tools.<br /><em>Impact is the point.</em></h2>
          <p className="section-description">A growing set of technologies I use to move from idea to working software. The right tool depends on the problem.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group, i) => (
            <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: (i % 3) * .08 }}>
              <div className="skill-card-head"><span className="skill-icon">{group.icon}</span><span className="mono skill-number">0{i + 1}</span></div>
              <h3>{group.title}</h3>
              <div className="skill-pills">{group.items.map(item => <span className="pill" key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
