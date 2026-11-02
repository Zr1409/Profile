import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import logoLight from '../../assets/branding/vandu-logo-light.webp';
import logoDark from '../../assets/branding/vandu-logo-dark.webp';

interface LogoProps {
  className?: string;
}

/** The official VD + VanDu artwork, including its original gradient and spacing. */
export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const { theme } = useTheme();

  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={theme === 'dark' ? logoDark : logoLight}
      alt="VD VanDu"
      width={932}
      height={200}
      decoding="async"
      draggable={false}
    />
  );
};
