import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDarkMode, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#top' || href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-[#0A0A0C]/85 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] group-hover:scale-125 transition-transform duration-300" />
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm tracking-tight transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#0071E3] dark:text-[#2997FF] font-medium'
                        : 'text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0071E3] dark:bg-[#2997FF] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/15" />

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Day / Night Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-[#1D1D1F] dark:text-[#F5F5F7] bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 flex items-center gap-2 px-3 text-xs font-medium"
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1D1D1F]" />}
                </motion.div>
              </AnimatePresence>
              <span>{isDark ? 'Day' : 'Night'}</span>
            </button>

            {/* GitHub Fast Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/20 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 flex items-center gap-1 group"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center gap-1.5 text-xs font-medium"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1D1D1F]" />}
            <span>{isDark ? 'Day' : 'Night'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0A0A0C]/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-[#1D1D1F] dark:text-[#F5F5F7] py-2 border-b border-black/5 dark:border-white/5 flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-xs text-[#86868B]">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={toggleDarkMode}
                  className="w-full text-center text-sm font-medium py-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center justify-center gap-2"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1D1D1F]" />}
                  <span>Switch to {isDark ? 'Day (Light)' : 'Night (Dark)'} Mode</span>
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-medium py-2.5 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] transition-colors"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
