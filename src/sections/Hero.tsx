import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveSystemGraphic } from '../components/InteractiveSystemGraphic';

export const Hero: React.FC = () => {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden scroll-mt-24">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-tech-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 text-xs font-mono text-ivory-400"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-tech-cyan font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan"></span>
            <span>FULLSTACK DEVELOPER · VIETNAM</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-ivory-400">
            <MapPin className="w-3.5 h-3.5 text-ivory-500" />
            <span>Thu Duc, Ho Chi Minh City ({PERSONAL_INFO.coordinates})</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/10 text-ivory-400">
            <Code2 className="w-3.5 h-3.5 text-tech-lime" />
            <span>Java · Spring Boot · React</span>
          </div>
        </motion.div>

        {/* 2-Column Hero Grid: Editorial Typography Left, Technical Blueprint Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7">
            {/* Name identification */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-mono tracking-widest text-tech-cyan/90 uppercase mb-3 flex items-center gap-2"
            >
              <span>{PERSONAL_INFO.name}</span>
              <span className="w-8 h-[1px] bg-tech-cyan/40"></span>
              <span className="text-ivory-400">{PERSONAL_INFO.title}</span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-ivory-100 leading-[1.1] editorial-title"
            >
              I build web applications with a focus on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-tech-cyan to-ivory-200 underline decoration-tech-cyan/30 decoration-2 underline-offset-8">
                clean architecture
              </span>{' '}
              and{' '}
              <span className="italic font-serif font-normal text-ivory-200">
                meaningful user experiences.
              </span>
            </motion.h1>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-ivory-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* Focus Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-mono text-ivory-400 mr-2">CORE ENGINE:</span>
              {PERSONAL_INFO.coreStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-charcoal-850 border border-white/10 font-mono text-xs text-ivory-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group px-5 py-3 rounded-xl bg-tech-cyan text-charcoal-950 font-mono text-xs font-bold tracking-wide hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-tech-cyan/10 focus-ring min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-white/20 text-ivory-100 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-2 focus-ring min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5 text-tech-cyan" />
                <span>Get in Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-white/20 text-ivory-300 hover:text-white transition-all flex items-center gap-1.5 font-mono text-xs focus-ring min-h-[44px]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Abstract Architecture Blueprint Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <InteractiveSystemGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
