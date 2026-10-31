import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Foundations</span>
          <h2 className="section-title">Learn deeply.<br /><em>Keep moving.</em></h2>
        </div>
        <div className="education-grid">
          <motion.article className="education-card education-main" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="education-icon"><GraduationCap size={22} /></div><span className="mono education-date">2021 — 2025</span>
            <h3>Bachelor of Technology</h3><p className="education-subtitle">Information Technology</p>
            <p className="education-school">Kamla Nehru Institute of Technology, Sultanpur</p>
            <div className="education-score"><span className="mono">ACADEMIC SCORE</span><strong>8.19 <small>/ 10 CGPA</small></strong></div>
          </motion.article>
          <motion.article className="education-card education-highlight" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: .1 }}>
            <div className="education-icon"><Trophy size={22} /></div><span className="mono education-date">ACHIEVEMENT</span>
            <h3>Cloud Computing</h3><p className="education-subtitle">NPTEL Gold Medal</p><p className="education-school">A milestone in cloud fundamentals and distributed systems.</p>
            <div className="education-badge"><Award size={16} /> Gold medal</div>
          </motion.article>
          <motion.article className="education-card education-community" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: .2 }}>
            <div className="education-icon"><GraduationCap size={22} /></div><span className="mono education-date">COMMUNITY</span>
            <h3>Peer learning & mentorship</h3><p className="education-school">Programming club secretary; mentored 500+ students and helped build a culture of collaborative learning.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
