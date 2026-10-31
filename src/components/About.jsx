import React from "react";
import { ArrowUpRight, BrainCircuit, Boxes, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { icon: <BrainCircuit />, title: "Applied AI", text: "Building useful AI experiences with LLMs, agents, and structured reasoning." },
  { icon: <Workflow />, title: "Automation", text: "Designing workflows that reduce repetitive work and make processes smarter." },
  { icon: <Boxes />, title: "Product engineering", text: "Connecting thoughtful UX, reliable systems, and measurable outcomes." },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">A little about me</span>
          <h2 className="section-title">Engineering with <em>curiosity.</em><br />Building with purpose.</h2>
        </div>
        <div className="about-layout">
          <motion.div className="about-story" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55 }}>
            <p className="about-lead">I enjoy working where software engineering meets intelligence.</p>
            <p>My work spans AI automation, agentic systems, and full-stack product development. I like taking a messy, real-world problem, finding the underlying pattern, and turning it into a solution people can actually use.</p>
            <p>From experimenting with multi-agent architectures to shipping web applications, I bring a practical mindset, a bias for learning, and an eye for the details that make products feel complete.</p>
            <a className="text-link" href="#experience">Explore my journey <ArrowUpRight size={16} /></a>
          </motion.div>
          <div className="about-cards">
            {cards.map((card, i) => (
              <motion.article className="about-card" key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
                <div className="about-card-icon">{card.icon}</div><div><h3>{card.title}</h3><p>{card.text}</p></div><span className="card-index mono">0{i + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="stats-row">
          <div><strong>400<span>+</span></strong><small>Problems solved</small></div>
          <div><strong>500<span>+</span></strong><small>Learners mentored</small></div>
          <div><strong>3<span>+</span></strong><small>Projects shipped</small></div>
          <div><strong>∞</strong><small>Things to explore</small></div>
        </div>
      </div>
    </section>
  );
}
