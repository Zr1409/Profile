import { Project, ExperienceItem, EducationItem, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'TRAN VAN DU',
  title: 'Fresher Fullstack Developer',
  location: 'Thu Duc, Ho Chi Minh City, Vietnam',
  coordinates: '10.8499° N, 106.7716° E',
  email: 'tranvandu1409@gmail.com',
  phone: '0358768117',
  github: 'https://github.com/Zr1409',
  cvPath: '/files/CV_TRAN_VAN_DU.pdf',
  status: 'Available for Full-time Opportunities',
  bioHeadline: 'I build web applications with a focus on clean architecture and meaningful user experiences.',
  shortBio: 'Fullstack Developer focused on Java, Spring Boot, React and building reliable web applications from database design to user interface.',
  coreStack: ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'MySQL'],
};

export const PROJECTS: Project[] = [
  {
    id: 'minlish',
    number: '01',
    title: 'MinLish',
    subtitle: 'English Learning Platform with Spaced Repetition',
    category: 'Fullstack Web Application',
    summary: 'A fullstack English vocabulary learning platform designed around flashcards, spaced repetition (SM-2 algorithm), and learning progress tracking. Built with decoupled architecture, JWT/OAuth2 security, and a responsive interface.',
    role: 'Fullstack Developer · System Designer · UI & Database Designer',
    teamSize: '1 person',
    timeline: '02/2026 – 03/2026',
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA/Hibernate',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'MySQL',
      'RESTful API',
      'JWT',
      'OAuth2'
    ],
    keyFeatures: [
      'User authentication with JWT & Google OAuth2 integration',
      'Vocabulary set management (CRUD) and interactive flashcard study sessions',
      'SM-2 spaced repetition algorithm for optimal memory retention scheduling',
      'CSV/XLSX import and export for rapid vocabulary set ingestion',
      'Learning dashboard with retention tracking and progress curves',
      'In-app notifications and email reminder preferences',
      'Modern responsive UI optimized for mobile and desktop viewports'
    ],
    githubUrl: 'https://github.com/Zr1409/Minlish_Fullstack',
    liveUrl: 'https://minlish-websites.vercel.app',
    architectureHighlights: [
      {
        layer: 'Frontend Client',
        details: 'React 18 + TypeScript + Vite with Tailwind CSS. Modular state management and flashcard flip micro-interactions.'
      },
      {
        layer: 'API & Security Gateway',
        details: 'Spring Security with stateless JWT token validation and Google OAuth2 login pipeline.'
      },
      {
        layer: 'Core Business Logic',
        details: 'Algorithmic SM-2 interval calculations taking review grade (0-5) to predict optimal recall intervals.'
      },
      {
        layer: 'Data Persistence',
        details: 'MySQL with Spring Data JPA. Optimized queries for vocabulary sets, user learning history, and retention metrics.'
      }
    ],
    challengeAndSolution: {
      challenge: 'Accurately scheduling review dates across large decks without triggering redundant database operations.',
      solution: 'Implemented the SM-2 formula inside a dedicated domain service with batch updates and indexed database lookups on due dates.'
    }
  },
  {
    id: 'talenthub',
    number: '02',
    title: 'TalentHub',
    subtitle: 'Two-Sided Freelancer Marketplace Platform',
    category: 'Freelance & Recruitment System',
    summary: 'A freelancer job-finding platform connecting employers and freelancers through job listings, applications, secure transactions, real-time messaging, and online interviews. Engineered with reusable UI components and an AI chatbot assistant.',
    role: 'Team Leader · Fullstack Developer · UI & Database Designer',
    teamSize: '2 people',
    timeline: '03/2025 – 06/2025',
    techStack: [
      'Spring Boot',
      'Spring Security',
      'JPA/Hibernate',
      'React',
      'JavaScript',
      'Bootstrap',
      'MySQL'
    ],
    keyFeatures: [
      'User registration & authentication with Spring Security and BCrypt password encryption',
      'Two-Factor Authentication (2FA) for heightened account security',
      'Multi-parameter job search filtering by skills, category, salary range, and location',
      'Freelancer profiles, CV/portfolio uploads, and proposal submission tracking',
      'Employer job management, applicant pipeline review, and hiring workflows',
      'Online interview (video call integration) and messaging with real-time notifications',
      'Administrative dashboard for platform users, jobs, and transaction monitoring',
      'AI Chatbot integration to assist users during job search and hiring inquiries'
    ],
    githubUrl: 'https://github.com/Zr1409/Project_Freelancer',
    architectureHighlights: [
      {
        layer: 'Leadership & Design',
        details: 'Spearheaded system architecture, relational database normalization, and coordinated sprints between 2 engineers.'
      },
      {
        layer: 'Security Model',
        details: 'Implemented 2FA multi-step verification and fine-grained Role-Based Access Control (RBAC: Admin, Employer, Freelancer).'
      },
      {
        layer: 'Communication Layer',
        details: 'WebRTC / video call integration combined with real-time notification polling.'
      },
      {
        layer: 'Database Architecture',
        details: 'Multi-entity MySQL schema handling user credentials, job postings, bids, and contracts with foreign key integrity.'
      }
    ],
    challengeAndSolution: {
      challenge: 'Handling distinct permission boundaries and workflows for both Employers and Freelancers within a unified codebase.',
      solution: 'Architected granular Spring Security authorization filters and segregated REST endpoints with dedicated DTOs.'
    }
  },
  {
    id: 'booknest',
    number: '03',
    title: 'BookNest',
    subtitle: 'Online Bookstore with Logistics & AI Integration',
    category: 'E-Commerce Platform',
    summary: 'An online bookstore supporting end-to-end product discovery, shopping cart management, ordering, online payments, delivery tracking via Giao Hang Nhanh (GHN) API, and AI Gemini recommendations for intelligent product guidance.',
    role: 'Team Leader · Fullstack Developer · UI & Database Designer',
    teamSize: '2 people',
    timeline: '12/2024 – 02/2025',
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA/Hibernate',
      'AngularJS',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'SQL Server',
      'RESTful API',
      'GHN API',
      'Gemini API'
    ],
    keyFeatures: [
      'User account management and role-based access control',
      'Catalog search & filtering by category, author, and price tiers',
      'Shopping cart lifecycle and real-time order status tracking',
      'Automated order confirmation emails via JavaMailSender',
      'Multiple online payment options and wallet refund workflows',
      'GHN API (Fast Delivery) integration for dynamic shipping fee calculation and parcel tracking',
      'Gemini AI Chatbot integration for customized book recommendations',
      'Daily and monthly revenue statistics with administrative analytics'
    ],
    githubUrl: 'https://github.com/Zr1409/BookNest',
    architectureHighlights: [
      {
        layer: 'Third-Party Integration',
        details: 'Integrated GHN (Giao Hang Nhanh) logistics API for real-time postal rate calculation and delivery parcel webhooks.'
      },
      {
        layer: 'AI Integration',
        details: 'Integrated Google Gemini API to analyze user reading preferences and provide contextual book suggestions.'
      },
      {
        layer: 'Order Processing',
        details: 'Transactional order processing with SQL Server, rollback safety, and transactional email dispatch.'
      },
      {
        layer: 'Client Interface',
        details: 'Modular AngularJS components handling dynamic cart state, checkout validation, and interactive tracking.'
      }
    ],
    challengeAndSolution: {
      challenge: 'Synchronizing third-party shipping fee calculations dynamically during checkout without degrading page response time.',
      solution: 'Cached regional shipping fee tables and dispatched asynchronous GHN API calls with fallback rate estimation.'
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'hcmute-intern',
    position: 'Backend Developer Intern & Fresher',
    company: 'Ho Chi Minh City University of Technology and Education (HCMUTE)',
    period: '06/2025 – 10/2025',
    location: 'Ho Chi Minh City, Vietnam',
    type: 'Internship & Fresher',
    responsibilities: [
      'Developed high-performance RESTful APIs using Java and Spring Framework for university department software.',
      'Implemented data persistence layers using Spring Data JPA and Hibernate with relational database modeling.',
      'Built core CRUD features, modular service business logic, and REST controllers.',
      'Integrated backend APIs smoothly with frontend engineering teams (Angular).',
      'Implemented secure authentication, session management, and role-based access control (RBAC) with Spring Security.',
      'Wrote unit and integration tests using JUnit and Mockito; tested API endpoints using Postman with sample datasets.',
      'Collaborated effectively in team sprints, debugged system defects, and delivered milestones as assigned.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JUnit', 'Mockito', 'Postman', 'MySQL']
  },
  {
    id: 'scs-intern',
    position: 'Fullstack Developer Intern',
    company: 'SCS Company',
    period: '10/2024 – 02/2025',
    location: 'Ho Chi Minh City, Vietnam',
    type: 'Internship',
    responsibilities: [
      'Developed and refined frontend client features using AngularJS and modern web standards.',
      'Built backend RESTful services and business endpoints with Java.',
      'Integrated user interfaces with relational databases and external REST APIs.',
      'Created reusable UI components and backend service abstractions, reducing turnaround time for new features.',
      'Supported relational data persistence and query optimization with Hibernate/JPA and SQL Server.',
      'Analyzed, debugged, and resolved software defects to ensure application stability in staging and production.'
    ],
    technologies: ['Java', 'AngularJS', 'Spring Boot', 'Hibernate', 'SQL Server', 'REST APIs', 'Bootstrap']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Ho Chi Minh City University of Technology and Education (HCMUTE)',
    degree: 'Software Development',
    major: 'Software Development',
    period: '12/2022 – Present',
    gpa: '3.63 / 4.0',
    highlights: [
      'Strong foundation in Object-Oriented Programming, Data Structures, Relational Database Systems, and Web Application Architecture.',
      'Hands-on fullstack engineering focusing on Spring Boot backend micro-modules and React client interfaces.'
    ]
  },
  {
    institution: 'Ho Chi Minh City University of Technology (HCMUT)',
    degree: 'Aeronautical Engineering',
    major: 'Aeronautical Engineering',
    period: '10/2015 – 10/2019',
    highlights: [
      'Extensive training in advanced applied mathematics, fluid mechanics, analytical problem-solving, and structural systems.',
      'Cultivated disciplined engineering thinking, systematic debugging capability, and tenacity when tackling complex architectural problems.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    subtitle: 'Architecture, APIs, and Data Management',
    skills: [
      { name: 'Java', level: 'Core', description: 'OOP, Collections, Streams, Multithreading' },
      { name: 'Spring Boot', level: 'Core', description: 'Application setup, Auto-configuration, Starters' },
      { name: 'Spring MVC', level: 'Core', description: 'Controllers, Request handling, Model mapping' },
      { name: 'Spring Security', level: 'Proficient', description: 'JWT, Filter Chains, RBAC, OAuth2' },
      { name: 'Spring Data JPA', level: 'Core', description: 'Repositories, Custom Queries, Pagination' },
      { name: 'Hibernate', level: 'Core', description: 'ORM mapping, Lazy/Eager loading, Caching' },
      { name: 'RESTful APIs', level: 'Core', description: 'Stateless design, HTTP verbs, Error handling' }
    ]
  },
  {
    title: 'Frontend Development',
    subtitle: 'User Interfaces, Types, and Responsiveness',
    skills: [
      { name: 'ReactJS', level: 'Core', description: 'Hooks, Component lifecycle, State management' },
      { name: 'TypeScript', level: 'Core', description: 'Strict typing, Generics, Interfaces' },
      { name: 'JavaScript (ES6+)', level: 'Core', description: 'Async/Await, Promises, Closures' },
      { name: 'AngularJS', level: 'Experienced', description: 'Directives, Controllers, Services' },
      { name: 'Tailwind CSS', level: 'Proficient', description: 'Utility-first styling, Responsive layouts' },
      { name: 'HTML5 & CSS3', level: 'Core', description: 'Semantic markup, Flexbox, CSS Grid' },
      { name: 'Bootstrap', level: 'Experienced', description: 'Grid system, Utility classes' }
    ]
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Relational Modeling & Query Execution',
    skills: [
      { name: 'MySQL', level: 'Core', description: 'Schema design, Indexes, Joins, Transactions' },
      { name: 'SQL Server', level: 'Proficient', description: 'Stored procedures, T-SQL, Views' },
      { name: 'MongoDB', level: 'Familiar', description: 'Document stores, Aggregations' }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    subtitle: 'Development Environment & Quality',
    skills: [
      { name: 'Git & GitHub', level: 'Core', description: 'Branching, PRs, Merge conflict resolution' },
      { name: 'GitLab', level: 'Proficient', description: 'Version control and collaboration' },
      { name: 'Postman', level: 'Core', description: 'API testing, Collections, Environment variables' },
      { name: 'Docker', level: 'Familiar', description: 'Containerization, Dockerfile, Container runs' },
      { name: 'IntelliJ IDEA', level: 'Daily Driver', description: 'Java/Spring debugging, Profiling' },
      { name: 'VS Code', level: 'Daily Driver', description: 'React, TypeScript, Frontend tooling' }
    ]
  },
  {
    title: 'Core Concepts & Architecture',
    subtitle: 'Engineering Principles & Paradigms',
    skills: [
      { name: 'OOP', level: 'Core', description: 'Encapsulation, Inheritance, Polymorphism, Abstraction' },
      { name: 'MVC Architecture', level: 'Core', description: 'Model-View-Controller separation of concerns' },
      { name: 'JWT Authentication', level: 'Proficient', description: 'Stateless authorization tokens & expiration handling' },
      { name: 'OAuth2 Integration', level: 'Proficient', description: 'Third-party sign-in workflows (Google)' },
      { name: 'Role-Based Authorization', level: 'Core', description: 'Method-level and URL-level security rules' },
      { name: 'API Integration', level: 'Core', description: 'Third-party payment, logistics (GHN), and AI (Gemini)' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'HackerRank Certifications',
    issuer: 'HackerRank',
    topics: [
      { title: 'Java', level: 'Basic' },
      { title: 'Problem Solving', level: 'Basic' },
      { title: 'Rest API', level: 'Intermediate' },
      { title: 'SQL', level: 'Intermediate' },
      { title: 'SQL', level: 'Advanced' }
    ]
  }
];
