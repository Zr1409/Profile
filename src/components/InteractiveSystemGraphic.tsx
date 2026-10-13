import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Database, Cpu, Activity, CheckCircle2, Server } from 'lucide-react';

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
      color: 'text-tech-cyan',
      borderColor: 'border-tech-cyan/40',
      bgColor: 'bg-tech-cyan/5',
      badge: 'SPA CLIENT',
      detail: 'State-driven UI, async data fetching, type safety, responsive component composition.'
    },
    {
      id: 2,
      title: 'Security & Auth',
      subtitle: 'Spring Security · JWT · OAuth2',
      icon: Shield,
      color: 'text-amber-400',
      borderColor: 'border-amber-400/40',
      bgColor: 'bg-amber-400/5',
      badge: 'FILTER CHAIN',
      detail: 'Stateless token authentication, BCrypt hashing, role-based authorization (RBAC).'
    },
    {
      id: 3,
      title: 'Application Core',
      subtitle: 'Spring Boot · RESTful APIs · Services',
      icon: Cpu,
      color: 'text-tech-lime',
      borderColor: 'border-tech-lime/40',
      bgColor: 'bg-tech-lime/5',
      badge: 'BUSINESS LOGIC',
      detail: 'Clean architecture, DTO mapping, transactional services, SM-2 algorithm, GHN & Gemini APIs.'
    },
    {
      id: 4,
      title: 'Persistence & DB',
      subtitle: 'Spring Data JPA · Hibernate · MySQL / SQL Server',
      icon: Database,
      color: 'text-blue-400',
      borderColor: 'border-blue-400/40',
      bgColor: 'bg-blue-400/5',
      badge: 'DATA LAYER',
      detail: 'Relational entity modeling, query optimization, indexing, ACID transactions.'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl bg-charcoal-900/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
      {/* Blueprint Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <span className="font-mono text-xs text-ivory-400 pl-2">architecture-spec.v2</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-tech-lime bg-tech-lime/10 px-2.5 py-0.5 rounded-full border border-tech-lime/20">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>PIPELINE: ACTIVE</span>
        </div>
      </div>

      {/* Layer Nodes */}
      <div className="space-y-3 relative">
        {/* Connecting Data Line */}
        <div className="absolute left-[26px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-tech-cyan/50 via-tech-lime/50 to-blue-400/50 pointer-events-none hidden sm:block"></div>

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
              className={`relative z-10 transition-all duration-200 rounded-xl p-3.5 sm:p-4 border cursor-pointer focus-ring ${
                isSelected
                  ? `${layer.borderColor} ${layer.bgColor} shadow-lg scale-[1.01]`
                  : 'border-white/[0.06] bg-charcoal-850/60 hover:border-white/15 hover:bg-charcoal-850'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? `${layer.color} ${layer.borderColor} bg-white/5`
                        : 'text-ivory-300 border-white/10 bg-charcoal-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-ivory-100 tracking-tight">
                        {layer.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-ivory-400 border border-white/5">
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-ivory-400 mt-0.5">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center text-ivory-500">
                  <CheckCircle2
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? layer.color : 'text-ivory-600'
                    }`}
                  />
                </div>
              </div>

              {/* Detail tooltip drawer */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2.5 pt-2.5 border-t border-white/[0.06] text-xs text-ivory-300 font-mono leading-relaxed"
                >
                  <span className="text-tech-cyan">↳ </span>
                  {layer.detail}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Terminal Telemetry Footer */}
      <div className="mt-5 pt-4 border-t border-white/[0.08] font-mono text-[11px] text-ivory-400 space-y-1">
        <div className="flex items-center justify-between text-ivory-500">
          <span className="flex items-center gap-1.5">
            <Server className="w-3 h-3 text-tech-cyan" />
            <span>RUNTIME TELEMETRY</span>
          </span>
          <span className="text-tech-lime">STATUS: 200 OK (18ms)</span>
        </div>
        <div className="bg-charcoal-950 p-2.5 rounded-lg border border-white/[0.05] overflow-x-auto text-[10px] leading-relaxed text-ivory-400">
          <div className="text-tech-cyan">GET /api/v1/projects · Authorization: Bearer eyJhbGciOi...</div>
          <div className="text-ivory-500">↳ SpringSecurity: validated claims (sub: du.tran, role: DEV)</div>
          <div className="text-tech-lime">↳ Hibernate: 3 query executions cached | Connection pool: healthy</div>
        </div>
      </div>
    </div>
  );
};
