import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full flex flex-col items-start z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-softGray tracking-widest uppercase text-sm mb-4">Welcome to my digital space</p>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-6xl md:text-8xl font-black text-whiteText tracking-tighter mb-2"
        >
          Ojas Tyagi
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl font-medium text-cyanGlow text-glow mb-6"
        >
          Full Stack Developer + AI Explorer
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-softGray max-w-2xl mb-10 leading-relaxed"
        >
          Crafting intelligent systems and modern digital experiences using AI, React, Python, and Cloud. 
          Dedicated to pushing the boundaries of web development with premium aesthetics.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#050505] bg-cyanGlow rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">View Projects <ArrowRight size={18} /></span>
          </a>
          
          <a href="https://github.com/Ojast01" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-cyanGlow border border-cyanGlow rounded-full transition-all hover:bg-cyanGlow/10 hover:scale-105">
            <Github size={18} className="mr-2" /> GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
