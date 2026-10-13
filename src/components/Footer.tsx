import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white border-t border-border text-content-secondary text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-content font-sans tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-content-muted">·</span>
              <span className="text-sm text-content-secondary">
                {PERSONAL_INFO.title}
              </span>
            </div>
            <p className="text-xs text-content-muted mt-1">
              {PERSONAL_INFO.location}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border hover:border-teal hover:text-teal text-content-secondary text-xs font-medium transition-colors bg-page hover:bg-white focus-ring"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-muted">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-content-muted/80">
            Engineered with modern web standards & clean architecture.
          </p>
        </div>
      </div>
    </footer>
  );
};

