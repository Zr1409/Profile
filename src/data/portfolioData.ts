import type { Project, ExperienceItem, EducationItem, SkillShowcase } from '../types/portfolio';

// Source of truth: public/files/CV_TRAN_VAN_DU.pdf.
export const PERSONAL_INFO = {
  name: 'Tran Van Du', firstName: 'Tran Van', lastName: 'Du', title: 'Fresher Fullstack Developer',
  location: 'Thu Duc, Ho Chi Minh City, Vietnam', coordinates: '',
  email: 'tranvandu1409@gmail.com', phone: '0358768117', displayPhone: '(+84) 358 768 117',
  github: 'https://github.com/Zr1409', linkedin: 'https://www.linkedin.com/in/tranvandu291097/', facebook: '', cvPath: '/files/CV_TRAN%20VAN%20DU.pdf',
  status: 'Available for full-time opportunities',
  bioHeadline: 'From the data model to the final detail.',
  manifesto: 'I like understanding how the pieces fit together — and making them work for the person using them.',
  shortBio: 'I build web applications with Java, Spring Boot and React — connecting thoughtful database design, secure APIs and clear, usable interfaces.',
  coreStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL'],
};

export const PROJECTS: Project[] = [
  {
    id: 'minlish', number: '01', title: 'MinLish', subtitle: 'A little practice. A lasting vocabulary.',
    category: 'English learning platform',
    summary: 'An English vocabulary platform that brings flashcards, spaced repetition and learning progress into one study workflow.',
    role: 'Fullstack Developer · System Designer · UI & Database Designer',
    teamSize: 'Solo project', timeline: '02/2026 – 03/2026',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Vite'],
    keyFeatures: ['Registration and login with JWT and Google OAuth2.', 'Vocabulary set management, flashcards and study sessions.', 'SM-2 spaced repetition for review scheduling.', 'CSV/XLSX vocabulary import and export.', 'Learning statistics, retention tracking, in-app notifications and email reminder settings.'],
    githubUrl: 'https://github.com/Zr1409/Minlish_Fullstack', liveUrl: 'https://minlish-websites.vercel.app',
    context: 'Vocabulary study involves more than collecting words. This personal project brings creating sets, reviewing words and checking progress into a single application.',
    contributions: ['Designed and built the application as a solo developer.', 'Designed the system, database and user interface.', 'Connected the React client to the Spring Boot backend.'],
    highlights: ['Flashcards and SM-2 review scheduling', 'JWT/Google OAuth2, CSV/XLSX import and export'],
    workflows: [
      { title: 'A study session', steps: ['Choose a vocabulary set', 'Study with flashcards', 'Review with spaced repetition', 'Check learning progress'] },
      { title: 'Managing vocabulary', steps: ['Create or edit a set', 'Add words or import a file', 'Export vocabulary as CSV/XLSX'] },
    ],
    architectureHighlights: [
      { layer: 'Client', details: 'React and TypeScript with Tailwind CSS for a responsive study interface.' },
      { layer: 'Authentication', details: 'Spring Security, JWT authentication and Google OAuth2 sign-in.' },
      { layer: 'Study workflow', details: 'SM-2 review scheduling alongside flashcards and progress tracking.' },
      { layer: 'Persistence', details: 'MySQL data storage through Spring Data JPA and Hibernate.' },
    ],
  },
  {
    id: 'talenthub', number: '02', title: 'TalentHub', subtitle: 'Connecting people with their next opportunity.',
    category: 'Freelancer platform',
    summary: 'A two-sided platform for freelancers and employers, covering job discovery, applications, messaging and online interviews.',
    role: 'Team Leader · Fullstack Developer · UI & Database Designer', teamSize: '2-person team', timeline: '03/2025 – 06/2025',
    techStack: ['Spring Boot', 'Spring Security', 'JPA/Hibernate', 'React', 'Bootstrap', 'MySQL'],
    keyFeatures: ['Account registration, encrypted passwords, role-based access and two-factor authentication.', 'Job search by skills, category, salary and location.', 'Freelancer profiles, CV/portfolio uploads and applications.', 'Employer job posting, application management and applicant review.', 'Messaging, online interviews and real-time notifications.', 'Administrative management of users, jobs and transactions; AI chatbot support.'],
    githubUrl: 'https://github.com/Zr1409/TalentHub_Freelancer_Platform',
    context: 'Employers and freelancers need different paths through the same product. This team project brings both sides of the hiring workflow together.',
    contributions: ['Led a two-person project team.', 'Worked across frontend and backend development.', 'Designed the user interface and database, and built reusable UI components.'],
    highlights: ['Job discovery, applications and employer workflows', 'Role-based access, 2FA, messaging and online interviews'],
    workflows: [
      { title: 'For freelancers', steps: ['Create a profile and upload a CV', 'Search for relevant jobs', 'Submit an application', 'Message and interview with employers'] },
      { title: 'For employers', steps: ['Publish a job', 'Manage and review applicants', 'Contact candidates', 'Arrange an online interview'] },
    ],
    architectureHighlights: [
      { layer: 'Client', details: 'React and Bootstrap for job discovery, profiles and application workflows.' },
      { layer: 'Security', details: 'Spring Security for authentication and role-based access, with two-factor authentication.' },
      { layer: 'Communication', details: 'Messaging and online interview features support the hiring workflow.' },
      { layer: 'Persistence', details: 'MySQL with JPA/Hibernate for application data.' },
    ],
  },
  {
    id: 'booknest', number: '03', title: 'BookNest', subtitle: 'From the next good read to your doorstep.',
    category: 'Online bookstore',
    summary: 'An online bookstore connecting book discovery, checkout and delivery tracking, with GHN shipping and a Gemini product guidance chatbot.',
    role: 'Team Leader · Fullstack Developer · UI & Database Designer', teamSize: '2-person team', timeline: '12/2024 – 02/2025',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'AngularJS', 'SQL Server', 'GHN API', 'Gemini API'],
    keyFeatures: ['Account management and role-based access.', 'Book search and filtering by category, author and price.', 'Shopping cart, orders, online payment and confirmation emails.', 'GHN integration for shipping fees and delivery tracking.', 'Gemini chatbot for product guidance.', 'Administration, revenue statistics, product returns and e-wallet refunds.'],
    githubUrl: 'https://github.com/Zr1409/BookNest',
    context: 'A bookstore needs a connected journey from finding a title to receiving an order. This project combines shopping with shipping and product guidance integrations.',
    contributions: ['Led a two-person project team.', 'Developed fullstack features and designed the user interface.', 'Designed the database for the bookstore application.'],
    highlights: ['Book discovery, checkout and order management', 'GHN delivery tracking and Gemini product guidance'],
    workflows: [
      { title: 'The shopping journey', steps: ['Search and filter books', 'Add titles to the cart', 'Place and pay for an order', 'Track delivery through GHN'] },
      { title: 'Store administration', steps: ['Manage products and orders', 'Review revenue statistics', 'Handle returns and refunds'] },
    ],
    architectureHighlights: [
      { layer: 'Client', details: 'AngularJS with HTML, CSS and Bootstrap for the storefront.' },
      { layer: 'Backend', details: 'Java, Spring Boot and Spring Security for APIs and role-based access.' },
      { layer: 'Integrations', details: 'GHN for shipping fees and tracking; Gemini for chatbot product guidance.' },
      { layer: 'Persistence', details: 'SQL Server with JPA/Hibernate.' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  { id: 'hcmute-backend', position: 'Backend Developer', company: 'HCMUTE', period: '06/2025 – 10/2025', location: 'Ho Chi Minh City, Vietnam', type: 'Intern & Fresher',
    responsibilities: ['Built Java/Spring REST APIs, including CRUD features, services and controllers.', 'Implemented persistence with JPA/Hibernate and login, roles and sessions with Spring Security.', 'Integrated backend APIs with the Angular frontend team.', 'Wrote tests with JUnit and Mockito; checked endpoints with Postman and fixed defects.'],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'JUnit', 'Mockito', 'Postman'] },
  { id: 'scs-intern', position: 'Fullstack Developer Intern', company: 'SCS Company', period: '10/2024 – 02/2025', location: 'Ho Chi Minh City, Vietnam', type: 'Internship',
    responsibilities: ['Developed AngularJS frontend features and Java backend APIs.', 'Connected interfaces with databases and REST services.', 'Built reusable UI components and backend services.', 'Worked with Hibernate/JPA and SQL Server; debugged application defects.'],
    technologies: ['Java', 'AngularJS', 'Hibernate/JPA', 'SQL Server'] },
];
export const EDUCATION: EducationItem[] = [
  { institution: 'HCMUTE', degree: 'Software Development', major: 'Software Development', period: '12/2022 – Present', gpa: '3.63', highlights: ['Ho Chi Minh City University of Technology and Education'] },
  { institution: 'HCMUT', degree: 'Aeronautical Engineering', major: 'Aeronautical Engineering', period: '10/2015 – 10/2019', highlights: ['Ho Chi Minh City University of Technology'] },
];
export const SKILL_SHOWCASE: SkillShowcase[] = [
  { title: 'Java & Spring Boot', context: 'Backend development', tools: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs'] },
  { title: 'Authentication & access', context: 'Application security', tools: ['Spring Security', 'JWT', 'Google OAuth2', 'Role-based access', '2FA'] },
  { title: 'Data persistence', context: 'From models to storage', tools: ['Spring Data JPA', 'Hibernate', 'Relational mapping'] },
  { title: 'React & TypeScript', context: 'Modern frontend development', tools: ['React', 'TypeScript', 'JavaScript', 'Vite'] },
  { title: 'Web interfaces', context: 'Responsive user interfaces', tools: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Angular & integration', context: 'Project and internship experience', tools: ['AngularJS', 'Angular API integration', 'REST services'] },
  { title: 'Databases', context: 'Relational database design', tools: ['MySQL', 'SQL Server', 'SQL'], familiarTools: ['MongoDB'] },
  { title: 'Testing & debugging', context: 'Checking application behavior', tools: ['JUnit', 'Mockito', 'Postman', 'API testing'] },
  { title: 'Development workflow', context: 'Tools for building together', tools: ['Git', 'GitHub', 'GitLab', 'IntelliJ IDEA', 'VS Code'], familiarTools: ['Docker'] },
];
