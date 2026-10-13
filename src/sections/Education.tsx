import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative border-t border-border bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h3 className="text-sm font-mono font-medium uppercase tracking-wider text-teal-700 flex items-center gap-2 mb-2">
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
                className="p-5 sm:p-6 rounded-xl bg-surface-subtle/70 border border-border hover:border-border-strong hover:bg-white transition-all shadow-subtle"
              >
                {/* University Header */}
                <div className="flex flex-wrap items-start justify-between gap-2.5 mb-2.5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-content tracking-tight">
                      {edu.institution}
                    </h4>
                    <div className="text-sm font-medium text-teal-700 mt-0.5">
                      {edu.major}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-content-secondary">
                    <span className="flex items-center gap-1.5 font-medium text-content">
                      <CalendarDays className="w-3.5 h-3.5 text-content-muted" aria-hidden="true" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-mono font-semibold border border-teal-200">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights in clean sans-serif */}
                {edu.highlights && (
                  <ul className="mt-3 pt-3 border-t border-border/80 space-y-1.5 text-xs sm:text-sm text-content-secondary leading-relaxed font-sans">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-teal-600 mt-0.5">·</span>
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
            <h3 className="text-sm font-mono font-medium uppercase tracking-wider text-teal-700 flex items-center gap-2 mb-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-5 sm:p-6 rounded-xl bg-surface-subtle/70 border border-border shadow-subtle"
            >
              <div className="mb-4 pb-3 border-b border-border">
                <h4 className="text-base font-bold text-content">
                  {CERTIFICATIONS[0].name}
                </h4>
              </div>

              {/* Clean List: Name on Left, Level on Right */}
              <div className="divide-y divide-border">
                {CERTIFICATIONS[0].topics.map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className="py-2.5 flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-content">
                      {item.title}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-content-secondary border border-border">
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
