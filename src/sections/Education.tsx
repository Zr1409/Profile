import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/95 scroll-mt-24 overflow-hidden bg-section-mesh">
      {/* Soft ambient corner light */}
      <div className="absolute top-0 left-0 w-[500px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="05"
          tag="Academic Background"
          title="Education & Certifications."
          description="Academic training in software engineering coupled with foundational engineering discipline."
        />

        {/* 2-Column Editorial Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Universities Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Higher Education</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-blue-400/80 dark:hover:border-blue-600/80 transition-all card-glow"
              >
                {/* University Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {edu.institution}
                    </h4>
                    <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.major}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-100">
                      <CalendarDays className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-semibold border border-blue-200 dark:border-blue-800">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights in clean sans-serif */}
                {edu.highlights && (
                  <ul className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/80 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Column (Right) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-5 sm:p-6 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="mb-4 pb-3 border-b border-slate-200 dark:border-slate-700/80">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {CERTIFICATIONS[0].name}
                </h4>
              </div>

              {/* Clean List: Name on Left, Level on Right */}
              <div className="divide-y divide-slate-200 dark:divide-slate-700/80">
                {CERTIFICATIONS[0].topics.map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className="py-2.5 flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-slate-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
