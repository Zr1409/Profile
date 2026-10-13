import React, { useState, useCallback } from 'react';
import { 
  Sparkles, 
  Volume2, 
  RotateCw, 
  ShieldCheck, 
  Truck, 
  Bot 
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'minlish') {
    return <MinlishMockup />;
  }
  if (projectId === 'talenthub') {
    return <TalentHubMockup />;
  }
  return <BookNestMockup />;
};

/* 01. MinLish Interactive Flashcard & SM-2 Mockup */
const MinlishMockup: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(2);

  const handlePronounce = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('resilient');
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleToggleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-border p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-xs">
            M
          </div>
          <span className="font-bold text-sm tracking-tight text-content">MinLish</span>
          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-mono border border-teal-200">
            SM-2 ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-3 text-content-secondary text-xs">
          <span className="hidden sm:inline font-mono">Streak: 14d</span>
          <span className="text-teal-700 font-semibold">84/120 Reviewed</span>
        </div>
      </div>

      {/* Main Flashcard */}
      <div 
        role="button"
        tabIndex={0}
        aria-label={`Vocabulary flashcard. Front: resilient. Click or press Enter to flip. Currently showing ${flipped ? 'Vietnamese translation' : 'English term'}.`}
        onClick={handleToggleFlip}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggleFlip();
          }
        }}
        className="relative group cursor-pointer min-h-[210px] sm:min-h-[230px] rounded-xl bg-surface-subtle/80 border border-border p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-teal-400 hover:shadow-subtle focus-ring select-none"
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            {flipped ? 'TRANSLATION & CONTEXT' : 'TARGET VOCABULARY'}
          </span>
          <div className="flex items-center gap-1 text-xs text-content-muted group-hover:text-teal-700 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="text-xs">Click to flip</span>
          </div>
        </div>

        {!flipped ? (
          <div className="my-auto py-3 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h4 className="text-2xl sm:text-3xl font-bold text-content tracking-tight">
                resilient
              </h4>
              <button 
                onClick={handlePronounce}
                className="p-1.5 rounded-full hover:bg-white text-teal-700 transition-colors focus-ring"
                aria-label="Listen to pronunciation of resilient"
                title="Pronounce resilient"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-content-muted font-mono">/rɪˈzɪl.jənt/ · adjective</div>
            <p className="mt-3 text-xs sm:text-sm text-content-secondary italic max-w-md mx-auto font-sans">
              "The distributed system architecture is highly resilient against network partition failures."
            </p>
          </div>
        ) : (
          <div className="my-auto py-3 text-center animate-fade-in">
            <h4 className="text-xl sm:text-2xl font-bold text-teal-800 mb-2">
              Có khả năng phục hồi nhanh chóng
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary max-w-md mx-auto font-sans">
              Able to withstand or recover quickly from difficult conditions, failures, or disruptions.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-content-muted">
              <span className="px-2 py-0.5 rounded bg-white border border-border">Synonym: robust</span>
              <span className="px-2 py-0.5 rounded bg-white border border-border">CEFR: C1</span>
            </div>
          </div>
        )}

        {/* Algorithm Metrics footer */}
        <div className="pt-2.5 border-t border-border flex items-center justify-between text-xs font-mono text-content-muted">
          <span>Repetition: 3</span>
          <span className="text-teal-700 font-semibold">Interval: +6 days</span>
          <span>Easiness: 2.50</span>
        </div>
      </div>

      {/* SM-2 Feedback Buttons */}
      <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
        {[
          { label: 'Again', time: '<1 min', color: 'hover:border-red-300 hover:bg-red-50 text-red-700' },
          { label: 'Hard', time: '1 day', color: 'hover:border-amber-300 hover:bg-amber-50 text-amber-700' },
          { label: 'Good', time: '6 days', color: 'hover:border-teal-300 hover:bg-teal-50 text-teal-700' },
          { label: 'Easy', time: '14 days', color: 'hover:border-emerald-300 hover:bg-emerald-50 text-emerald-700' },
        ].map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => setSelectedGrade(idx)}
            aria-pressed={selectedGrade === idx}
            aria-label={`Mark recall as ${btn.label}, next in ${btn.time}`}
            className={`py-2 px-1 rounded-lg border transition-all focus-ring ${
              selectedGrade === idx
                ? 'border-teal-500 bg-teal-50 font-bold text-teal-800'
                : 'border-border bg-white text-content-secondary'
            } ${btn.color}`}
          >
            <div className="text-xs font-semibold">{btn.label}</div>
            <div className="text-[10px] opacity-75 font-mono">{btn.time}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* 02. TalentHub Freelancer Platform Mockup */
const TalentHubMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-white border border-border p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-xs">
            TH
          </div>
          <span className="font-bold text-sm tracking-tight text-content">TalentHub</span>
          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-mono border border-teal-200 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-state-green" />
            2FA AUTH
          </span>
        </div>
        <div className="text-content-secondary text-xs">
          <span className="text-state-green font-medium">● Employer Portal</span>
        </div>
      </div>

      {/* Main Job Listing Card */}
      <div className="rounded-xl bg-surface-subtle/80 border border-border p-4 mb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="text-xs font-mono text-content-muted">JOB #8204 · FULLSTACK DEV</div>
            <h4 className="text-base font-bold text-content tracking-tight mt-0.5">
              Spring Boot & React Developer for FinTech Portal
            </h4>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-state-greenLight text-state-green font-mono text-xs font-semibold whitespace-nowrap">
            $1,200 - $1,800
          </span>
        </div>

        <p className="text-xs text-content-secondary leading-relaxed line-clamp-2">
          Seeking a developer with hands-on experience in Spring Boot, Spring Security JWT authentication, and React interfaces.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {['Spring Boot', 'Spring Security', 'React', 'MySQL', 'REST API'].map((tag) => (
            <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-content-secondary border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Applicant Proposal & AI Assistant Drawer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Applicant item */}
        <div className="p-3 rounded-lg bg-white border border-border flex items-center justify-between shadow-subtle">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-bold text-teal-700">
              VD
            </div>
            <div>
              <div className="text-xs font-bold text-content">Van Du Tran</div>
              <div className="text-[10px] text-state-green font-medium">98% Skill Match</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-subtle border border-border text-[10px] text-content-secondary">
            Interview Set
          </span>
        </div>

        {/* AI Assistant Chat preview */}
        <div className="p-3 rounded-lg bg-teal-50/70 border border-teal-200 flex items-start gap-2">
          <Bot className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div className="text-[11px] text-teal-900 leading-snug">
            <span className="text-teal-800 font-semibold block">AI Screening Bot:</span>
            "Candidate matches Spring Security & relational JPA requirements."
          </div>
        </div>
      </div>
    </div>
  );
};

/* 03. BookNest Bookstore with GHN Logistics Mockup */
const BookNestMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-white border border-border p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-xs">
            BN
          </div>
          <span className="font-bold text-sm tracking-tight text-content">BookNest</span>
          <span className="px-2 py-0.5 rounded-full bg-state-greenLight text-state-green text-[11px] font-mono border border-emerald-200">
            LOGISTICS LIVE
          </span>
        </div>
        <div className="text-content-secondary text-xs font-mono">
          <span>Order #BN-9021</span>
        </div>
      </div>

      {/* Book Item Card */}
      <div className="rounded-xl bg-surface-subtle/80 border border-border p-4 mb-3">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-16 rounded bg-white border border-border flex flex-col items-center justify-center p-1 text-center shrink-0 shadow-subtle">
            <span className="text-[7px] font-mono text-teal-700 font-bold">SYSTEMS</span>
            <span className="text-[8px] font-bold text-content leading-tight mt-1">CLEAN ARCH</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-content truncate">
                  Clean Architecture: A Craftsman's Guide
                </h4>
                <div className="text-xs text-content-muted font-sans">Robert C. Martin · Software Eng</div>
              </div>
              <span className="text-xs font-mono font-bold text-state-green shrink-0">295,000 VND</span>
            </div>

            {/* GHN Shipping Tracker Strip */}
            <div className="mt-2.5 p-2 rounded-lg bg-white border border-border shadow-subtle">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="flex items-center gap-1.5 text-teal-700 font-medium">
                  <Truck className="w-3.5 h-3.5 shrink-0" />
                  <span>GHN Tracking: GHN88294</span>
                </span>
                <span className="text-state-green text-xs font-medium">In Transit</span>
              </div>
              <div className="w-full bg-surface-subtle h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full w-3/4 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-content-muted mt-1 font-sans">
                <span>Warehouse (HCMC)</span>
                <span>Sorting Center</span>
                <span className="text-state-green font-medium">Out for Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini AI Recommendation Bar */}
      <div className="p-3 rounded-lg bg-teal-50/70 border border-teal-200 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
        <div className="text-[11px] text-teal-900 leading-snug">
          <span className="text-teal-800 font-semibold">Gemini AI Book Assistant: </span>
          "Readers who studied Clean Architecture also found value in 'Designing Data-Intensive Applications'."
        </div>
      </div>
    </div>
  );
};
