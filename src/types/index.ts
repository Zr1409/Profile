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

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface CertificationTopic {
  title: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  topics: CertificationTopic[];
}
