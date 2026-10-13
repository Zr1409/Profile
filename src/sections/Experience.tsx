import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-border bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="Work History"
          title="Practical engineering and team collaboration."
          description="Internship experience delivering functional REST APIs, database persistence layers, and frontend interfaces in structured development cycles."
        />

        <div className="relative border-l border-border ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
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
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-teal-600 shadow-subtle flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              </div>

              {/* Card Container */}
              <div className="rounded-xl bg-surface-subtle/70 border border-border p-5 sm:p-7 hover:border-border-strong hover:bg-white transition-all shadow-subtle">
                {/* Meta Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3.5">
                  <div>
                    <span className="text-xs font-medium text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-content tracking-tight mt-2">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-teal-700 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-content-secondary">
                    <div className="flex items-center gap-1.5 font-medium text-content">
                      <CalendarDays className="w-3.5 h-3.5 text-content-muted" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-content-muted">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-4 space-y-2">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-content-muted block mb-1">
                    Key Deliverables:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed font-sans">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-content-muted mr-1">TECH:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white border border-border text-xs font-mono text-content-secondary shadow-subtle"
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
