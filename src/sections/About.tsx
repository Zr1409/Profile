import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Database, Cpu, Compass, Award } from 'lucide-react';

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
    <section id="about" className="py-20 sm:py-28 relative border-t border-border bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="About Me"
          title="Bridging backend discipline with modern frontend craft."
          description="A software developer focused on building reliable, maintainable web systems from relational database design to responsive browser clients."
        />

        {/* Editorial Profile Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Text (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-content-secondary leading-relaxed text-base"
          >
            <p className="text-xl sm:text-2xl font-serif italic text-content leading-snug border-l-2 border-teal-600 pl-5 my-2">
              "Software engineering is about designing systems that are predictable, secure, and resilient under real-world constraints."
            </p>

            <p>
              I am a Fresher Fullstack Developer based in Ho Chi Minh City, Vietnam. My technical foundation began with four years of training in Aeronautical Engineering at <strong className="text-content font-semibold">HCMUT (2015–2019)</strong>, where I developed disciplined analytical thinking, numerical problem-solving, and attention to detail.
            </p>

            <p>
              Driven by a deep interest in software architecture, I redirected my path into Software Development at <strong className="text-content font-semibold">HCMUTE</strong>, maintaining a <strong className="text-teal-700 font-semibold">GPA of 3.63 / 4.0</strong>. Over the past several years, I have concentrated on mastering <strong className="text-content font-semibold">Java, Spring Boot, Spring Security, RESTful APIs, and relational databases (MySQL, SQL Server)</strong>, while pairing this with <strong className="text-content font-semibold">React and TypeScript</strong> to deliver complete applications.
            </p>

            <p>
              In practical project environments—including internship roles at HCMUTE and SCS Company—I have built and tested REST services with JUnit/Mockito and Postman, integrated third-party logistics APIs (GHN) and AI services (Gemini), and managed database persistence with JPA/Hibernate.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200/70 text-teal-800 font-medium">
                <Award className="w-4 h-4 text-teal-600" aria-hidden="true" />
                <span>HCMUTE GPA: 3.63 / 4.0</span>
              </div>
            </div>
          </motion.div>

          {/* Technical Pillars (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 gap-3.5"
          >
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-surface-subtle/70 border border-border hover:border-border-strong hover:bg-white transition-all shadow-subtle"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white border border-border text-teal-700 shadow-subtle">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-base text-content">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-sans">
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
