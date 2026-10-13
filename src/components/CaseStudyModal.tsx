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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-slate-900 dark:text-slate-100"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close case study modal"
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors focus-ring min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-12">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400 mb-1.5 font-semibold">
              <span>PROJECT // {project.number}</span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="text-slate-500 dark:text-slate-400 uppercase">{project.category}</span>
            </div>

            <h3
              id="case-study-title"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              {project.title} — {project.subtitle}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {project.summary}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-xs">
            <div>
              <span className="text-slate-400 dark:text-slate-400 font-mono block mb-1 uppercase text-[11px]">Role</span>
              <span className="text-slate-900 dark:text-white font-semibold">{project.role}</span>
            </div>
            {project.teamSize && (
              <div>
                <span className="text-slate-400 dark:text-slate-400 font-mono block mb-1 uppercase text-[11px]">Team Size</span>
                <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {project.teamSize}
                </span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-slate-400 dark:text-slate-400 font-mono block mb-1 uppercase text-[11px]">Timeline</span>
                <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {project.timeline}
                </span>
              </div>
            )}
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="my-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Architecture & Engineering Design</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      {arch.layer}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {arch.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge and Solution */}
          {project.challengeAndSolution && (
            <div className="my-5 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 space-y-2.5">
              <h4 className="text-xs font-semibold text-blue-900 dark:text-blue-200 flex items-center gap-2 uppercase tracking-wide">
                <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Technical Challenge & Engineering Resolution</span>
              </h4>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed font-sans">
                <div>
                  <strong className="text-slate-900 dark:text-white">Challenge: </strong>
                  {project.challengeAndSolution.challenge}
                </div>
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">Resolution: </strong>
                  {project.challengeAndSolution.solution}
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="my-5">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Key Implemented Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="my-5">
            <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-400 block mb-2 uppercase tracking-wider">Technologies Used</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-slate-100 transition-colors focus-ring min-h-[40px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code (GitHub)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors shadow-sm focus-ring min-h-[40px]"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus-ring py-2 px-3 rounded-lg min-h-[40px]"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
