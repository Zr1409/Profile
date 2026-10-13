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
    <section id="projects" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-tech-dots/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 02"
          tag="Selected Works"
          title="Architected from database to interface."
          description="A showcase of fullstack systems built with Java, Spring Boot, React, TypeScript, and relational databases. Each project reflects end-to-end design, security constraints, and practical feature execution."
        />

        {/* Editorial Project Showcase: Each project with individualized asymmetric layout */}
        <div className="space-y-24 sm:space-y-32">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl bg-charcoal-950/70 border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md overflow-hidden"
              >
                {/* Background index watermark */}
                <span className="absolute -top-6 -right-4 text-8xl sm:text-9xl font-mono font-extrabold text-white/[0.02] pointer-events-none select-none">
                  {project.number}
                </span>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Visual Preview Mockup Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group">
                      <ProjectMockup projectId={project.id} />
                      <div className="mt-3 flex items-center justify-between text-xs font-mono text-ivory-500 px-1">
                        <span>Interactive Preview & Telemetry</span>
                        <span className="text-tech-cyan">Live Component State</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 font-mono text-xs text-tech-cyan mb-2">
                      <span className="font-bold">PROJECT {project.number}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" aria-hidden="true"></span>
                      <span className="text-ivory-400">{project.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ivory-100 tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm font-mono text-ivory-400 mt-1">
                      {project.subtitle}
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-sm sm:text-base text-ivory-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Role Tag */}
                    <div className="mt-4 p-3 rounded-lg bg-charcoal-900 border border-white/[0.06] text-xs font-mono">
                      <span className="text-ivory-500 block mb-0.5">ROLE & RESPONSIBILITY</span>
                      <span className="text-tech-lime font-semibold">{project.role}</span>
                    </div>

                    {/* Key Features Bullets (Top 3 for quick scanning) */}
                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-mono text-ivory-400 block uppercase tracking-wider">Key Highlights:</span>
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-ivory-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tech-cyan shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-charcoal-850 border border-white/10 text-xs font-mono text-ivory-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View Case Study, GitHub, Live Demo */}
                    <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        aria-label={`View full technical case study for ${project.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-tech-cyan/40 text-xs font-mono font-semibold text-ivory-100 transition-all shadow-sm focus-ring min-h-[44px]"
                      >
                        <FileCode2 className="w-4 h-4 text-tech-cyan" />
                        <span>View Case Study</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-850 border border-white/10 hover:border-white/20 text-xs font-mono text-ivory-300 hover:text-white transition-all focus-ring min-h-[44px]"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Launch live demo for ${project.title} (opens in new tab)`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tech-cyan hover:bg-white text-charcoal-950 text-xs font-mono font-bold transition-all shadow-sm focus-ring min-h-[44px]"
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
