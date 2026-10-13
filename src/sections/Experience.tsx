import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/95 scroll-mt-24 overflow-hidden bg-section-mesh">
      {/* Ambient background light */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="03"
          tag="Work History"
          title="Practical engineering and team collaboration."
          description="Internship experience delivering functional REST APIs, database persistence layers, and frontend interfaces in structured development cycles."
        />

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 shadow-sm flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 hover:border-blue-400/80 dark:hover:border-blue-600/80 transition-all card-glow">
                {/* Meta Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-200 dark:border-blue-800/80">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2.5">
                      {exp.position}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-100">
                      <CalendarDays className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-4 space-y-2">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
                    Key Deliverables:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed font-sans">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">TECH:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
