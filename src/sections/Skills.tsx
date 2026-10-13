import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Layout, Database, Wrench, Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [Server, Layout, Database, Wrench, Code2];

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#070A10] scroll-mt-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="04"
          tag="Technical Competence"
          title="Skills grounded in real architecture."
          description="Categorized by system domain and application context. No arbitrary percentage bars—just tools, frameworks, and engineering concepts applied in production code."
        />

        {/* Category Selector Tabs with WCAG tablist role */}
        <div
          role="tablist"
          aria-label="Skill domains"
          className="flex flex-wrap gap-2.5 pb-6 border-b border-slate-200 dark:border-slate-800"
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Server;
            const isSelected = selectedCategory === idx;

            return (
              <button
                key={cat.title}
                role="tab"
                id={`skill-tab-${idx}`}
                aria-selected={isSelected}
                aria-controls={`skill-panel-${idx}`}
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all focus-ring min-h-[42px] ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md font-semibold scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <motion.div
          key={selectedCategory}
          id={`skill-panel-${selectedCategory}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedCategory}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {SKILL_CATEGORIES[selectedCategory].title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
                {SKILL_CATEGORIES[selectedCategory].subtitle}
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 w-fit">
              {SKILL_CATEGORIES[selectedCategory].skills.length} TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
                      {skill.level}
                    </span>
                  )}
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-0.5">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Stack Summary Strip */}
        <div className="mt-12 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
              Core Tech Stack Highlight
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Java · Spring Boot · Spring Security · React · TypeScript · MySQL · REST APIs
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
            Committed to clean design patterns and production test coverage.
          </div>
        </div>
      </div>
    </section>
  );
};
