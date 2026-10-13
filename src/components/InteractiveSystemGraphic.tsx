import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Database, Cpu, CheckCircle2, Server } from 'lucide-react';

export const InteractiveSystemGraphic: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const toggleLayer = (id: number) => {
    setActiveLayer(prev => (prev === id ? null : id));
  };

  const layers = [
    {
      id: 1,
      title: 'Client Layer',
      subtitle: 'React 18 · TypeScript · Tailwind CSS',
      icon: Layers,
      color: 'text-teal-600',
      badge: 'FRONTEND',
      detail: 'State-driven UI, async data fetching, type safety, responsive component composition.'
    },
    {
      id: 2,
      title: 'Security & Auth',
      subtitle: 'Spring Security · JWT · OAuth2',
      icon: Shield,
      color: 'text-amber-600',
      badge: 'SECURITY',
      detail: 'Stateless token authentication, BCrypt password encryption, role-based authorization.'
    },
    {
      id: 3,
      title: 'Application Core',
      subtitle: 'Spring Boot · RESTful APIs · Services',
      icon: Cpu,
      color: 'text-teal-700',
      badge: 'BUSINESS LOGIC',
      detail: 'Clean architecture, DTO mapping, transactional services, SM-2 algorithm, GHN & Gemini APIs.'
    },
    {
      id: 4,
      title: 'Persistence & DB',
      subtitle: 'Spring Data JPA · Hibernate · MySQL / SQL Server',
      icon: Database,
      color: 'text-blue-600',
      badge: 'PERSISTENCE',
      detail: 'Relational entity modeling, query optimization, indexing, ACID transactions.'
    }
  ];

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-card">
      {/* Blueprint Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
            System Architecture
          </span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
            Fullstack Request & Data Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800/70">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Active Pipeline</span>
        </div>
      </div>

      {/* Layer Nodes */}
      <div className="space-y-2.5">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === layer.id;

          return (
            <motion.div
              key={layer.id}
              role="button"
              tabIndex={0}
              aria-expanded={isSelected}
              aria-label={`${layer.title}: ${layer.subtitle}. Click to toggle architecture details.`}
              onClick={() => toggleLayer(layer.id)}
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleLayer(layer.id);
                }
              }}
              className={`rounded-xl p-3 sm:p-3.5 border transition-all cursor-pointer focus-ring ${
                isSelected
                  ? 'border-blue-400 dark:border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">
                        {layer.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <CheckCircle2
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'
                  }`}
                />
              </div>

              {/* Detail drawer */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Spec: </span>
                  {layer.detail}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Clean Telemetry Footer */}
      <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
          <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Endpoint Lifecycle</span>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">HTTP 200 OK (24ms)</span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400 space-y-0.5">
          <div className="text-blue-600 dark:text-blue-400 font-medium">GET /api/v1/projects · Auth: Bearer JWT</div>
          <div className="text-slate-500 dark:text-slate-500">↳ SpringSecurity: validated user role (USER)</div>
          <div className="text-slate-500 dark:text-slate-500">↳ Hibernate: database query cached</div>
        </div>
      </div>
    </div>
  );
};
