import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Layout, Database, Wrench, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [Server, Layout, Database, Wrench, Layers];

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-tech-dots/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 04"
          tag="Technical Competence"
          title="Skills grounded in real architecture."
          description="Categorized by system domain and application context. No arbitrary percentage bars—just tools, frameworks, and engineering concepts applied in production code."
        />

        {/* Category Selector Tabs with WCAG tablist role */}
        <div
          role="tablist"
          aria-label="Skill domains"
          className="flex flex-wrap gap-2 pb-8 border-b border-white/[0.08]"
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all focus-ring min-h-[44px] ${
                  isSelected
                    ? 'bg-tech-cyan text-charcoal-950 font-bold shadow-md shadow-tech-cyan/10'
                    : 'bg-charcoal-900 text-ivory-400 hover:text-white border border-white/[0.06] hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix with WCAG tabpanel role */}
        <motion.div
          key={selectedCategory}
          id={`skill-panel-${selectedCategory}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedCategory}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8"
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-ivory-100">
                {SKILL_CATEGORIES[selectedCategory].title}
              </h3>
              <p className="text-xs font-mono text-ivory-400 mt-0.5">
                {SKILL_CATEGORIES[selectedCategory].subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-tech-cyan bg-tech-cyan/10 px-3 py-1 rounded-full border border-tech-cyan/20 w-fit">
              {SKILL_CATEGORIES[selectedCategory].skills.length} TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-charcoal-900/90 border border-white/[0.07] hover:border-tech-cyan/30 transition-all card-surface-hover flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-bold text-base text-ivory-100 tracking-tight">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-tech-lime border border-tech-lime/20 shrink-0">
                      {skill.level}
                    </span>
                  )}
                </div>

                {skill.description && (
                  <p className="text-xs font-mono text-ivory-400 leading-relaxed mt-1">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Stack Summary Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-charcoal-900 border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-tech-cyan uppercase tracking-wider block">
              Core Tech Stack Highlight
            </span>
            <p className="text-sm text-ivory-200">
              Java · Spring Boot · Spring Security · React · TypeScript · MySQL · REST APIs
            </p>
          </div>
          <div className="text-xs font-mono text-ivory-400">
            Committed to clean design patterns and production test coverage.
          </div>
        </div>
      </div>
    </section>
  );
};
