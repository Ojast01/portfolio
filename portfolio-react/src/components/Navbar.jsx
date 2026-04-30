import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Expertise', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-whiteText">
          OJAS<span className="text-cyanGlow">.</span>
        </a>
        
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="text-softGray hover:text-cyanGlow transition-colors duration-300 text-sm tracking-wide uppercase font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
