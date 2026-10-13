import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative border-t border-white/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 03"
          tag="Work History"
          title="Practical engineering and team collaboration."
          description="Internship and fresher experience delivering functional REST APIs, database persistence layers, and frontend interfaces in structured development cycles."
        />

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-charcoal-950 border-2 border-tech-cyan shadow-[0_0_10px_rgba(0,229,255,0.4)] flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan"></span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-charcoal-900/80 border border-white/[0.08] p-6 sm:p-8 hover:border-white/15 transition-all card-surface-hover">
                {/* Meta Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-tech-cyan bg-tech-cyan/10 px-2.5 py-0.5 rounded border border-tech-cyan/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ivory-100 tracking-tight mt-2">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-ivory-300 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-tech-lime shrink-0" aria-hidden="true" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-ivory-400">
                    <div className="flex items-center gap-1.5 text-tech-lime font-medium">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-ivory-400">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-ivory-400 block mb-2">
                    Key Responsibilities & Deliverables:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-ivory-300">
                      <CheckCircle2 className="w-4 h-4 text-tech-cyan shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-ivory-400 mr-2">TECH:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-charcoal-850 border border-white/10 text-xs font-mono text-ivory-300"
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
