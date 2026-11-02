import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'projects',
      'experience',
      'skills',
      'education',
      'achievements',
      'contact'
    ];
    const sections = sectionIds.map((id) => document.getElementById(id));
    let animationFrame = 0;

    const updateActiveSection = () => {
      // Keep the active link aligned with the reading area beneath the header.
      const readingLine = Math.min(220, Math.max(120, window.innerHeight * 0.24));
      let nextSection = sectionIds[0];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i]!.getBoundingClientRect().top <= readingLine) {
          nextSection = sectionIds[i];
          break;
        }
      }
      setActiveSection(nextSection);
      animationFrame = 0;
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    updateActiveSection();
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
      <div className="app-shell">

        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded-lg bg-blue-600 text-white font-sans text-xs font-bold shadow-lg focus-ring"
        >
          Skip to main content
        </a>

        {/* Top Fixed Header & Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Primary Semantic Landmark */}
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer Landmark */}
        <Footer />

      </div>
  );
};

export default App;
