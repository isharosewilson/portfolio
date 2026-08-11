import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Ultra-Minimalist Soft Subtle Ambient Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#0071E3]/5 to-transparent dark:from-[#2997FF]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status / Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs md:text-sm font-medium text-[#86868B] dark:text-[#A1A1A6] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
          <span>GEC Wayanad • Kozhikode, Kerala</span>
        </motion.div>

        {/* Large Apple Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.05]"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Minimalist Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#0071E3] dark:text-[#2997FF]"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#86868B] dark:text-[#A1A1A6] max-w-2xl leading-relaxed font-normal"
        >
          {PERSONAL_INFO.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Apple Pill Primary CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1D1D1F] hover:bg-black dark:bg-[#F5F5F7] dark:hover:bg-white text-white dark:text-[#1D1D1F] font-medium text-base tracking-tight shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Text Secondary CTA with Arrow */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group px-6 py-3.5 text-base font-medium text-[#0071E3] dark:text-[#2997FF] hover:opacity-80 transition-opacity flex items-center gap-1.5 tracking-tight"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#86868B] dark:text-[#A1A1A6] cursor-pointer"
        onClick={() => {
          const target = document.querySelector('#about');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-60">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
