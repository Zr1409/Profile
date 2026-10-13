import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
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
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden scroll-mt-24">
      {/* Subtle Light Grid Texture */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-6 text-xs"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>FULLSTACK DEVELOPER · VIETNAM</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-content-secondary font-sans">
            <MapPin className="w-3.5 h-3.5 text-content-muted" />
            <span>Thu Duc, Ho Chi Minh City</span>
          </div>
        </motion.div>

        {/* 2-Column Hero Grid: Editorial Typography Left, System Blueprint Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7">
            {/* Name identification */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-sm font-semibold tracking-wide text-teal-700 mb-3"
            >
              {PERSONAL_INFO.name}
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-content leading-[1.12]"
            >
              I build web applications with a focus on{' '}
              <span className="text-teal-700 underline decoration-teal-200 decoration-2 underline-offset-8">
                clean architecture
              </span>{' '}
              and{' '}
              <span className="italic font-serif font-normal text-content-secondary">
                meaningful user experiences.
              </span>
            </motion.h1>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* Focus Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-mono font-medium text-content-muted mr-1">CORE STACK:</span>
              {PERSONAL_INFO.coreStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white border border-border text-xs font-medium text-content shadow-subtle"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-subtle focus-ring min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-surface-subtle border border-border text-content text-sm font-medium transition-colors flex items-center gap-2 shadow-subtle focus-ring min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                <span>Get in Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white hover:bg-surface-subtle border border-border text-content-secondary hover:text-content transition-colors flex items-center gap-1.5 text-sm shadow-subtle focus-ring min-h-[44px]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-content-muted" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architecture Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <InteractiveSystemGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
