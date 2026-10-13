import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  description,
  align = 'left',
}) => {
  return (
    <div className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      {/* Index Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-3 font-mono text-xs text-tech-cyan tracking-wider ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-tech-cyan/70 font-semibold">{number}</span>
        <span className="w-6 h-[1px] bg-tech-cyan/30"></span>
        <span className="text-ivory-400 uppercase tracking-widest">{tag}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ivory-100 editorial-title"
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-ivory-400 font-normal leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
