import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Database, Cpu, Compass, Award, GitBranch } from 'lucide-react';

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      icon: Cpu,
      title: 'Backend First Mindset',
      description: 'Disciplined REST API development with Java and Spring Boot. Focus on separation of concerns, stateless controllers, and service layer testability.'
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'Hands-on experience implementing Spring Security filter chains, BCrypt encryption, JWT token authorization, and 2FA authentication.'
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Relational data modeling, schema normalization, JPA/Hibernate mapping, and transaction boundaries across MySQL and SQL Server.'
    },
    {
      icon: Compass,
      title: 'Engineering Rigor',
      description: 'Transitioning from Aeronautical Engineering at HCMUT to Software Development at HCMUTE (GPA 3.63), bringing systematic problem-solving and tenacity.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 01"
          tag="Engineering Profile"
          title="Bridging robust backend architecture with modern frontend craft."
          description="A software developer focused on building reliable, maintainable web systems from relational database design to responsive browser clients."
        />

        {/* Editorial Profile Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-ivory-300 leading-relaxed text-base sm:text-lg"
          >
            <p className="text-xl sm:text-2xl font-normal text-ivory-100 leading-snug tracking-tight font-serif italic border-l-2 border-tech-cyan pl-6 my-2">
              "Software engineering is about designing systems that are predictable, secure, and resilient under real-world constraints."
            </p>

            <p>
              I am a Fresher Fullstack Developer based in Ho Chi Minh City, Vietnam. My technical journey began with four years of rigorous training in Aeronautical Engineering at <strong className="text-ivory-100">HCMUT (2015–2019)</strong>, where I developed disciplined analytical thinking, numerical problem-solving, and attention to detail.
            </p>

            <p>
              Driven by a deep interest in software architecture, I redirected my path into Software Development at <strong className="text-ivory-100">HCMUTE</strong>, earning a <strong className="text-tech-lime">GPA of 3.63</strong>. Over the past several years, I have concentrated on mastering <strong className="text-ivory-100">Java, Spring Boot, Spring Security, RESTful APIs, and relational databases (MySQL, SQL Server)</strong>, while pairing this with <strong className="text-ivory-100">React and TypeScript</strong> to deliver end-to-end applications.
            </p>

            <p>
              In real-world project settings—including intern experience at HCMUTE and SCS Company—I have built and tested REST services with JUnit/Mockito and Postman, integrated third-party logistics APIs (GHN) and AI services (Gemini), and managed database persistence with JPA/Hibernate.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-ivory-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-850 border border-white/[0.08]">
                <Award className="w-4 h-4 text-tech-cyan" aria-hidden="true" />
                <span>HCMUTE GPA: 3.63 / 4.0</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-850 border border-white/[0.08]">
                <GitBranch className="w-4 h-4 text-tech-lime" aria-hidden="true" />
                <span>Academic & Team Lead Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Technical Pillars (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-charcoal-900 border border-white/[0.08] hover:border-white/15 transition-all card-surface-hover"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-charcoal-850 border border-white/10 text-tech-cyan">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-base text-ivory-100 tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed font-mono">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
