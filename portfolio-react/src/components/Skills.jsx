import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["C / C++", "Python", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
  { category: "Backend & Data", items: ["Node.js", "MySQL", "Power BI", "Excel"] }
];

export default function Skills() {
  return (
    <section id="expertise" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-whiteText tracking-tighter mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-cyanGlow rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-cyanGlow mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-whiteText group-hover:border-cyanGlow/50 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
