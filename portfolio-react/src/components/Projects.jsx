import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Agri-Crop Recommender",
    description: "A machine learning-based system to recommend the most suitable crops based on environmental conditions and soil metrics.",
    tech: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/Ojast01/Agri-Crop-Recommender-master"
  },
  {
    title: "Financial Dashboard",
    description: "An interactive analytics dashboard built to visualize financial metrics, cash flows, and profitability trends.",
    tech: ["Power BI", "Excel", "Data Analytics"],
    github: "https://github.com/Ojast01/Financial-Dashboard-master"
  },
  {
    title: "Healthcare Prediction",
    description: "Predictive analytics platform utilizing patient data to forecast potential health risks and improve outcomes.",
    tech: ["Python", "Predictive Modeling", "Healthcare"],
    github: "https://github.com/Ojast01/Healthcare-pridiction"
  },
  {
    title: "SQL Analytics Engine",
    description: "A robust SQL-based analytics engine designed to process and analyze large datasets efficiently.",
    tech: ["SQL", "MySQL", "Database Design"],
    github: "https://github.com/Ojast01/SQL-Analytics-Engine-master"
  },
  {
    title: "Real-Time Chat Application",
    description: "Architected a robust client-server chat system enabling multiple users to communicate reliably and simultaneously via TCP/IP socket programming. Engineered a concurrent, multithreaded backend architecture preventing data races and dropped connections.",
    tech: ["C++", "POSIX Sockets", "Multithreading"],
    github: "https://github.com/Ojast01"
  },
  {
    title: "Stock Trading & Portfolio Simulator",
    description: "Designed an automated algorithmic trading bot utilizing a Moving Average strategy to autonomously detect trends and execute mathematically driven decisions. Optimized core logic with encapsulated, modular data structures for fast transaction validation and balance tracking.",
    tech: ["C++", "Object-Oriented Design", "DSA"],
    github: "https://github.com/Ojast01"
  },
  {
    title: "Gym Locator",
    description: "Built a location-based gym discovery platform with real-time search and filtering capabilities and enhanced user decision-making by integrating ratings, reviews, and facility comparisons. Built a responsive UI using modern React practices for a seamless experience.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Geolocation API"],
    github: "https://github.com/Ojast01"
  },
  {
    title: "Student Performance Predictor",
    description: "Developed a predictive model using Python and Pandas to analyze and forecast student academic performance based on historical data. Built a responsive web interface with HTML5 and CSS3 for data visualization and intuitive user interaction.",
    tech: ["Python", "Pandas", "HTML5", "CSS3"],
    github: "https://github.com/Ojast01"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-[#050505]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-whiteText tracking-tighter mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyanGlow rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-whiteText group-hover:text-cyanGlow transition-colors">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-softGray hover:text-cyanGlow transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-softGray mb-8 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-bold text-cyanGlow tracking-wider uppercase">
                    {t}
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
