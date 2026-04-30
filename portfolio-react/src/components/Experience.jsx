import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "2024 - Present",
    role: "Full Stack AI Developer",
    company: "Freelance / Open Source",
    description: "Developing intelligent web applications using React, Python, and modern cloud infrastructure. Implementing machine learning models into interactive dashboards."
  },
  {
    year: "2023 - 2024",
    role: "Data Science & Analytics",
    company: "Academic Projects",
    description: "Built the Agri-Crop Recommender and Healthcare Prediction systems using predictive modeling, Python, and SQL databases."
  },
  {
    year: "2022 - Present",
    role: "B.Tech Computer Science",
    company: "University",
    description: "Pursuing rigorous coursework in data structures, algorithms, database management, and software engineering principles."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 bg-[#050505]/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-whiteText tracking-tighter mb-4">Experience Timeline</h2>
          <div className="w-20 h-1 bg-cyanGlow rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-6 pl-8 space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[#050505] border-2 border-cyanGlow rounded-full shadow-[0_0_10px_rgba(0,245,255,0.8)]"></div>
              
              <div className="glass-panel p-6 rounded-2xl hover:border-cyanGlow/30 transition-colors">
                <span className="text-cyanGlow font-bold text-sm tracking-widest uppercase block mb-2">{event.year}</span>
                <h3 className="text-2xl font-bold text-whiteText mb-1">{event.role}</h3>
                <h4 className="text-md text-softGray font-medium mb-4">{event.company}</h4>
                <p className="text-softGray leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
