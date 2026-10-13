import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900 dark:text-white font-sans tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {PERSONAL_INFO.title}
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">
              {PERSONAL_INFO.location}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-600 dark:text-slate-300 text-xs font-medium transition-colors bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 focus-ring"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            Engineered with modern web standards & clean architecture.
          </p>
        </div>
      </div>
    </footer>
  );
};
