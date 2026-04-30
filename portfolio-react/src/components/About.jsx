import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-whiteText tracking-tighter mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyanGlow rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-2xl"
        >
          <p className="text-lg md:text-xl text-softGray leading-relaxed mb-6">
            I am a passionate <strong className="text-cyanGlow font-bold">B.Tech CSE student</strong> dedicated to the intersection of artificial intelligence and modern web architectures. With a strong foundation in algorithmic problem solving and system design, I strive to build applications that don't just work, but feel like the future.
          </p>
          <p className="text-lg md:text-xl text-softGray leading-relaxed">
            My philosophy revolves around crafting clean, scalable code and pairing it with high-end, immersive user interfaces. Whether I am architecting a machine learning pipeline or designing a fluid React interface, my goal is to deliver digital experiences that resonate with a professional, cutting-edge aesthetic.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
