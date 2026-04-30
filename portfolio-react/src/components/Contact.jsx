import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-whiteText tracking-tighter mb-6 text-glow">Let's Connect</h2>
          <p className="text-lg text-softGray max-w-2xl mb-10">
            I'm currently looking for new opportunities, internships, and exciting projects. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <a href="mailto:ojastyagi1825@gmail.com" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-[#050505] bg-cyanGlow rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] mb-16">
            Say Hello <Mail className="ml-2" size={20} />
          </a>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full glass-panel p-8 rounded-2xl">
            <a href="mailto:ojastyagi1825@gmail.com" className="flex items-center gap-3 text-softGray hover:text-cyanGlow transition-colors">
              <Mail size={24} />
              <span>ojastyagi1825@gmail.com</span>
            </a>
            
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            
            <a href="https://www.linkedin.com/in/ojas-tyagi-218427315" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-softGray hover:text-cyanGlow transition-colors">
              <Linkedin size={24} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
