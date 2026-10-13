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
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {/* Category Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className={`flex items-center gap-2 mb-3 text-xs font-mono font-medium text-teal-700 tracking-wider ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span>{number}</span>
        <span className="text-border-strong">/</span>
        <span className="uppercase text-content-secondary tracking-widest">{tag}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content leading-tight"
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-3 text-base text-content-secondary leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
