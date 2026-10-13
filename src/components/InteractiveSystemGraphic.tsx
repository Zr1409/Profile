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
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-white border border-border p-5 sm:p-6 shadow-card">
      {/* Blueprint Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
        <div>
          <span className="text-xs font-mono font-medium text-teal-700 uppercase tracking-wider block">
            System Architecture
          </span>
          <h3 className="text-sm font-bold text-content mt-0.5">
            Fullstack Request & Data Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-state-greenLight text-state-green text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-state-green"></span>
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
                  ? 'border-teal-300 bg-teal-50/70 shadow-subtle'
                  : 'border-border bg-surface-subtle/60 hover:bg-white hover:border-border-strong'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'border-teal-200 bg-white text-teal-700'
                        : 'border-border bg-white text-content-secondary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-content">
                        {layer.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-content-secondary border border-border">
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-content-secondary mt-0.5 font-sans">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <CheckCircle2
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isSelected ? 'text-teal-600' : 'text-content-muted'
                  }`}
                />
              </div>

              {/* Detail drawer */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2.5 pt-2.5 border-t border-border/80 text-xs text-content-secondary leading-relaxed font-sans"
                >
                  <span className="text-teal-700 font-medium">Spec: </span>
                  {layer.detail}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Clean Telemetry Footer */}
      <div className="mt-4 pt-3.5 border-t border-border">
        <div className="flex items-center justify-between text-xs text-content-muted mb-2 font-mono">
          <span className="flex items-center gap-1.5 text-content-secondary">
            <Server className="w-3.5 h-3.5 text-teal-600" />
            <span>Endpoint Lifecycle</span>
          </span>
          <span className="text-state-green font-medium">HTTP 200 OK (24ms)</span>
        </div>
        <div className="bg-surface-subtle p-2.5 rounded-lg border border-border text-[11px] font-mono text-content-secondary space-y-0.5">
          <div className="text-teal-700 font-medium">GET /api/v1/projects · Auth: Bearer JWT</div>
          <div className="text-content-muted">↳ SpringSecurity: validated user role (USER)</div>
          <div className="text-content-muted">↳ Hibernate: database query cached</div>
        </div>
      </div>
    </div>
  );
};
