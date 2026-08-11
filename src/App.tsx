import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { isScrolled } = useScrollPosition(40);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBFBFD] dark:bg-[#0A0A0C] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300">
      {/* Translucent Glass Navigation */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} isScrolled={isScrolled} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer isScrolled={isScrolled} />
    </div>
  );
};

export default App;
