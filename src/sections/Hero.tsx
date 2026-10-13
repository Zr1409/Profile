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
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-24 flex flex-col justify-center overflow-hidden scroll-mt-24 bg-ambient-spotlight">
      {/* Decorative Atmospheric Glow Orbs */}
      <div className="absolute -top-10 left-1/4 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-400/25 via-sky-300/20 to-indigo-300/15 dark:from-blue-600/25 dark:via-blue-500/15 dark:to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[550px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-blue-400/15 to-indigo-400/15 dark:from-indigo-600/20 dark:to-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Light Grid Texture */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-6 text-xs"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 font-semibold shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            <span>FULLSTACK DEVELOPER · VIETNAM</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-sans text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
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
              className="text-xs sm:text-sm font-sans font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-3"
            >
              Hi, I'm {PERSONAL_INFO.name}
            </motion.div>

            {/* Unified Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
            >
              I build web applications with a focus on{' '}
              <span className="text-blue-600 dark:text-blue-400">
                clean architecture
              </span>{' '}
              and{' '}
              <span className="text-slate-600 dark:text-slate-400 font-extrabold">
                meaningful user experiences.
              </span>
            </motion.h1>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
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
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mr-1">CORE STACK:</span>
              {PERSONAL_INFO.coreStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm"
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
                className="group px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm focus-ring min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm font-medium transition-colors flex items-center gap-2 shadow-sm focus-ring min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm shadow-sm focus-ring min-h-[44px]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
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
