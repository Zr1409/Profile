import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative border-t border-white/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 05"
          tag="Academic Foundation"
          title="Education & Verified Credentials."
          description="Academic excellence in software development coupled with classical engineering training."
        />

        {/* 2-Column: Education Cards & HackerRank Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Universities Column */}
          <div className="lg:col-span-7 space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-charcoal-900 border border-white/[0.08] hover:border-white/15 transition-all card-surface-hover"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-tech-cyan mb-1">
                      <GraduationCap className="w-4 h-4" aria-hidden="true" />
                      <span>{edu.degree}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ivory-100 tracking-tight">
                      {edu.institution}
                    </h3>
                    <div className="text-xs font-mono text-ivory-400 mt-0.5">
                      {edu.major}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
                    <span className="text-tech-lime font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-tech-cyan/10 text-tech-cyan font-bold border border-tech-cyan/20">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {edu.note && (
                  <div className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-[11px] font-mono text-ivory-300 border border-white/5 my-2">
                    {edu.note}
                  </div>
                )}

                {edu.highlights && (
                  <ul className="mt-3 space-y-1.5 text-xs text-ivory-300 leading-relaxed">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-tech-cyan" aria-hidden="true">↳</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900 border border-white/[0.08] hover:border-white/15 transition-all card-surface-hover"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 mb-2">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>VERIFIED SKILL ASSESSMENTS</span>
              </div>

              <h3 className="text-lg font-bold text-ivory-100 mb-1">
                HackerRank Certifications
              </h3>
              <p className="text-xs text-ivory-400 mb-5 font-mono">
                Assessed algorithmic problem solving, REST services, and SQL query execution.
              </p>

              <div className="space-y-2.5">
                {CERTIFICATIONS[0].topics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center justify-between p-3 rounded-lg bg-charcoal-850 border border-white/[0.06] hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-mono text-ivory-200">
                      <CheckCircle2 className="w-4 h-4 text-tech-lime shrink-0" aria-hidden="true" />
                      <span>{topic}</span>
                    </div>
                    <span className="text-[10px] font-mono text-ivory-500 uppercase">
                      Verified
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] text-center text-xs font-mono text-ivory-400">
                <span>Continuously honing data structures & system performance.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
