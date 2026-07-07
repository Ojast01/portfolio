import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectCategories = [
  {
    title: "🚀 Full-Stack Engineering & Machine Learning",
    projects: [
      {
        title: "Scribble.oi Clone",
        description: "A real-time multiplayer drawing and guessing game clone of Skribbl.io. Features live synchronized drawing canvases, real-time chat, and seamless game state management.",
        tech: ["TypeScript", "React", "Node.js", "WebSockets"],
        github: "https://github.com/Ojast01/Scribble.oi",
        demo: "https://scribble-oi.vercel.app"
      },
      {
        title: "Healthcare Prediction System",
        description: "Engineered a full-stack healthcare prediction platform processing 5+ clinical parameters across 3 risk categories, integrating an XGBoost machine learning model to deliver real-time predictions.",
        tech: ["React", "Node.js", "MongoDB", "Python", "XGBoost", "REST APIs"],
        github: "https://github.com/Ojast01/Healthcare-Pridiction1",
        demo: "https://healthcare-pridiction1-3721mk9m2-ojas-projects3.vercel.app/"
      },
      {
        title: "Agri-Crop Recommender System",
        description: "Trained an ML-based crop recommendation model on 7 environmental and soil parameters. Deployed a Flask-based user-facing interface with end-to-end data preprocessing and real-time prediction.",
        tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/Ojast01/Agri-Crop-Recommender-master",
        demo: "https://agri-crop-recommender-master-h4ae2kq4m-ojas-projects3.vercel.app/"
      }
    ]
  },
  {
    title: "💻 Frontend & API Integration",
    projects: [
      {
        title: "Gym Locator",
        description: "Launched a location-based gym discovery platform integrating the Geolocation API, enabling real-time search and filtering across multiple facility attributes including ratings, reviews, and amenities.",
        tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Geolocation API"],
        github: "https://github.com/Ojast01",
        demo: ""
      }
    ]
  },
  {
    title: "🗄️ Backend Architecture & Database Management",
    projects: [
      {
        title: "SQL Analytics Engine",
        description: "Designed and implemented a scalable analytics engine with 5+ normalized relational tables, applying indexing strategies and stored procedures to optimize query performance on large datasets.",
        tech: ["SQL", "MySQL", "Database Design", "Query Optimization", "Indexing"],
        github: "https://github.com/Ojast01/Analytics-Engine",
        demo: ""
      }
    ]
  },
  {
    title: "🔧 Additional Projects",
    projects: [
      {
        title: "Financial Dashboard",
        description: "An interactive analytics dashboard built to visualize financial metrics, cash flows, and profitability trends.",
        tech: ["Power BI", "Excel", "Data Analytics"],
        github: "https://github.com/Ojast01/Financial-Dashboard-master"
      },
      {
        title: "Real-Time Chat Application",
        description: "Architected a robust client-server chat system enabling multiple users to communicate reliably and simultaneously via TCP/IP socket programming.",
        tech: ["C++", "POSIX Sockets", "Multithreading"],
        github: "https://github.com/Ojast01"
      },
      {
        title: "Stock Trading & Portfolio Simulator",
        description: "Designed an automated algorithmic trading bot utilizing a Moving Average strategy to autonomously detect trends and execute mathematically driven decisions.",
        tech: ["C++", "Object-Oriented Design", "DSA"],
        github: "https://github.com/Ojast01"
      },
      {
        title: "Student Performance Predictor",
        description: "Developed a predictive model using Python and Pandas to analyze and forecast student academic performance based on historical data.",
        tech: ["Python", "Pandas", "HTML5", "CSS3"],
        github: "https://github.com/Ojast01"
      }
    ]
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

        <div className="flex flex-col gap-16">
          {projectCategories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-whiteText mb-8 border-b border-whiteText/10 pb-4 flex items-center gap-3"
              >
                {category.title}
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel p-8 rounded-2xl flex flex-col h-full group border border-whiteText/5 hover:border-cyanGlow/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-whiteText group-hover:text-cyanGlow transition-colors leading-tight">{project.title}</h4>
                    </div>
                    
                    <p className="text-softGray mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold text-cyanGlow tracking-widest uppercase px-2 py-1 bg-cyanGlow/5 rounded-full border border-cyanGlow/20">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 text-xs font-bold text-whiteText bg-white/5 hover:bg-white/10 py-2.5 rounded-lg transition-colors border border-white/10">
                            <FaGithub size={16} />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 text-xs font-bold text-[#050505] bg-cyanGlow hover:bg-[#00e5e5] py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
