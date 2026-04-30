import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-softGray border-t border-white/10 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ojas Tyagi. Built with React, Tailwind & Three.js.
        </p>
      </div>
    </footer>
  );
}
