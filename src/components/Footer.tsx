import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isScrolled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isScrolled }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-black/5 dark:border-white/10 text-center relative bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B] dark:text-[#A1A1A6]">
        {/* Footer Copyright requested by prompt */}
        <p className="tracking-tight">
          © {currentYear} {PERSONAL_INFO.name}. Built with care.
        </p>

        {/* Location / Tech Tagline */}
        <div className="flex items-center gap-4">
          <span>Kozhikode, Kerala, India</span>
          <span>•</span>
          <span>GEC Wayanad</span>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 dark:bg-[#161618]/90 text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/10 dark:border-white/15 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Back to Top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
