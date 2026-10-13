import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Wrench, ShieldCheck, Users, Calendar } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Auto-focus the close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-charcoal-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close case study modal"
            className="absolute top-5 right-5 p-2 rounded-lg bg-charcoal-800 text-ivory-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors focus-ring min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-12">
            <div className="flex items-center gap-3 font-mono text-xs text-tech-cyan mb-2">
              <span>PROJECT // {project.number}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" aria-hidden="true"></span>
              <span className="text-ivory-400">{project.category}</span>
            </div>

            <h3
              id="case-study-title"
              className="text-2xl sm:text-3xl font-extrabold text-ivory-100 tracking-tight"
            >
              {project.title} — {project.subtitle}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-ivory-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-charcoal-850 border border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-ivory-500 block mb-1">ROLE</span>
              <span className="text-ivory-200 font-semibold">{project.role}</span>
            </div>
            {project.teamSize && (
              <div>
                <span className="text-ivory-500 block mb-1">TEAM SIZE</span>
                <span className="text-ivory-200 font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-tech-cyan" />
                  {project.teamSize}
                </span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-ivory-500 block mb-1">TIMELINE</span>
                <span className="text-ivory-200 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-tech-lime" />
                  {project.timeline}
                </span>
              </div>
            )}
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="my-6">
              <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-tech-cyan font-bold mb-3">
                <Cpu className="w-4 h-4" />
                <span>Architecture & Engineering Design</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-charcoal-850/70 border border-white/[0.06] hover:border-white/10 transition-colors"
                  >
                    <div className="text-xs font-bold text-ivory-200 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" aria-hidden="true"></span>
                      {arch.layer}
                    </div>
                    <p className="text-xs text-ivory-400 leading-relaxed font-mono">
                      {arch.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge and Solution */}
          {project.challengeAndSolution && (
            <div className="my-6 p-4 rounded-xl bg-charcoal-850/50 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                <span>Technical Challenge & Engineering Solution</span>
              </h4>
              <div className="text-xs text-ivory-300 space-y-2 leading-relaxed">
                <div>
                  <span className="font-semibold text-ivory-200 font-mono">Challenge: </span>
                  {project.challengeAndSolution.challenge}
                </div>
                <div>
                  <span className="font-semibold text-tech-lime font-mono">Resolution: </span>
                  {project.challengeAndSolution.solution}
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="my-6">
            <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-tech-lime font-bold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Implemented Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-ivory-300 p-2.5 rounded-lg bg-charcoal-850/40 border border-white/[0.04]"
                >
                  <CheckCircle2 className="w-4 h-4 text-tech-lime shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="my-6">
            <span className="text-xs font-mono uppercase text-ivory-400 block mb-2">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-charcoal-800 border border-white/10 text-xs font-mono text-ivory-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-white/10 hover:border-white/20 text-xs font-mono font-semibold text-ivory-100 transition-colors focus-ring min-h-[44px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code (GitHub)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-tech-cyan hover:bg-white text-charcoal-950 text-xs font-mono font-bold transition-colors shadow-sm focus-ring min-h-[44px]"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-ivory-400 hover:text-ivory-200 transition-colors focus-ring py-2 px-3 rounded-lg min-h-[44px]"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
