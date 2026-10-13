import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Layout, Database, Wrench, Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [Server, Layout, Database, Wrench, Code2];

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-border bg-page scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="flex flex-wrap gap-2 pb-6 border-b border-border"
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
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors focus-ring min-h-[40px] ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-subtle'
                    : 'bg-white text-content-secondary hover:text-content hover:bg-surface-subtle border border-border'
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
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
          className="mt-6"
        >
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-content">
                {SKILL_CATEGORIES[selectedCategory].title}
              </h3>
              <p className="text-xs text-content-secondary mt-0.5 font-sans">
                {SKILL_CATEGORIES[selectedCategory].subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 w-fit">
              {SKILL_CATEGORIES[selectedCategory].skills.length} TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-white border border-border hover:border-border-strong transition-all shadow-subtle flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-semibold text-sm text-content">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 shrink-0">
                      {skill.level}
                    </span>
                  )}
                </div>

                {skill.description && (
                  <p className="text-xs text-content-secondary leading-relaxed font-sans mt-0.5">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Stack Summary Strip */}
        <div className="mt-12 p-5 rounded-xl bg-white border border-border shadow-subtle flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-medium text-teal-700 uppercase tracking-wider block">
              Core Tech Stack Highlight
            </span>
            <p className="text-sm font-medium text-content">
              Java · Spring Boot · Spring Security · React · TypeScript · MySQL · REST APIs
            </p>
          </div>
          <div className="text-xs text-content-muted font-sans">
            Committed to clean design patterns and production test coverage.
          </div>
        </div>
      </div>
    </section>
  );
};
