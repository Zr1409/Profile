export interface CertificateDocument {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  category?: string;
  levelBadge?: string;
  description?: string;
  previewSrc: string;
  pdfSrc: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  teamSize?: string;
  timeline?: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  context?: string;
  contributions?: string[];
  highlights?: string[];
  workflows?: { title: string; steps: string[] }[];
  architectureHighlights?: {
    layer: string;
    details: string;
  }[];
  challengeAndSolution?: {
    challenge: string;
    solution: string;
  };
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  highlights?: string[];
}

export interface SkillShowcase {
  title: string;
  context: string;
  tools: string[];
  familiarTools?: string[];
}

export interface ProjectScreenshot {
  src: string;
  previewSrc: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  source: string;
}
