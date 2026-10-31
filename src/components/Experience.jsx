import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const roles = [
  { date: "2026 — PRESENT", role: "AI Automation & Product Engineer", company: "Tata Consultancy Services", kind: "CURRENT ROLE", details: ["Developing AI-powered automation and agentic workflows for business problems.", "Exploring multi-agent patterns and LLM application development with Java and Python.", "Working across product engineering, analytics, and cloud-based systems."] },
  { date: "MAY — AUG 2025", role: "Summer Research Intern", company: "Indian Institute of Technology, Ropar", kind: "RESEARCH", details: ["Contributed to a research internship in a collaborative academic environment.", "Applied engineering and analytical thinking to technical exploration."] },
  { date: "JUN — AUG 2023", role: "Software Developer Intern", company: "Dandelion Networks", kind: "INTERNSHIP", details: ["Worked on software development tasks and practical engineering workflows.", "Built experience collaborating on implementation, debugging, and delivery."] },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">The journey so far</span>
          <h2 className="section-title">Experience that keeps<br /><em>compounding.</em></h2>
        </div>
        <div className="timeline">
          {roles.map((role, i) => (
            <motion.article className="timeline-item" key={role.company} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .08 }}>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-date mono">{role.date}</div>
              <div className="timeline-card">
                <div className="timeline-card-top"><span className="role-kind">{role.kind}</span><BriefcaseBusiness size={17} /></div>
                <h3>{role.role}</h3><h4>{role.company}</h4>
                <ul>{role.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
