import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectMockup } from '../components/ProjectMockup';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, ArrowUpRight, CheckCircle2, FileCode2 } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-border bg-page scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="Selected Works"
          title="Architected from database to interface."
          description="A showcase of fullstack systems built with Java, Spring Boot, React, TypeScript, and relational databases. Each project reflects end-to-end design, security constraints, and practical feature execution."
        />

        {/* Editorial Project Showcase */}
        <div className="space-y-16 sm:space-y-20">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl bg-white border border-border p-6 sm:p-8 lg:p-9 shadow-card overflow-hidden"
              >
                {/* Subtle index watermark */}
                <span className="absolute -top-4 -right-2 text-8xl sm:text-9xl font-mono font-extrabold text-content/[0.03] pointer-events-none select-none">
                  {project.number}
                </span>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Visual Preview Mockup Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ProjectMockup projectId={project.id} />
                  </div>

                  {/* Project Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Index & Category */}
                    <div className="flex items-center gap-2 font-mono text-xs text-teal-700 mb-1.5 font-medium">
                      <span>PROJECT {project.number}</span>
                      <span className="text-border-strong">/</span>
                      <span className="text-content-secondary uppercase tracking-wider">{project.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-content tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-teal-700 mt-0.5">
                      {project.subtitle}
                    </div>

                    {/* Summary */}
                    <p className="mt-3.5 text-sm sm:text-base text-content-secondary leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Role Tag */}
                    <div className="mt-4 p-3 rounded-lg bg-surface-subtle border border-border text-xs">
                      <span className="text-content-muted font-mono block mb-0.5 uppercase tracking-wider text-[11px]">Role & Responsibility</span>
                      <span className="text-content font-medium">{project.role}</span>
                    </div>

                    {/* Key Features Bullets (Top 3 for quick scanning) */}
                    <div className="mt-4 space-y-2">
                      <span className="text-xs font-mono font-medium text-content-muted block uppercase tracking-wider">Key Highlights:</span>
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-content-secondary">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-surface-subtle border border-border text-xs font-mono text-content-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View Case Study, GitHub, Live Demo */}
                    <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        aria-label={`View full technical case study for ${project.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-subtle hover:bg-surface-hover border border-border text-xs font-medium text-content transition-colors focus-ring min-h-[40px]"
                      >
                        <FileCode2 className="w-4 h-4 text-teal-700" />
                        <span>View Case Study</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-surface-subtle border border-border text-xs font-medium text-content-secondary hover:text-content transition-colors focus-ring min-h-[40px]"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-content-muted" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Launch live demo for ${project.title} (opens in new tab)`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium transition-colors shadow-subtle focus-ring min-h-[40px]"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
