import type { CertificateDocument } from '../types/portfolio';

export const CERTIFICATES: CertificateDocument[] = [
  {
    id: 'java-basic', title: 'Java (Basic)', slug: 'hackerrank-java-basic', category: 'Programming',
    description: 'A Java credential alongside my hands-on work with Spring Boot, REST APIs and backend application development.',
  },
  {
    id: 'problem-solving-basic', title: 'Problem Solving (Basic)', slug: 'hackerrank-problem-solving-basic', category: 'Problem solving',
    description: 'A problem-solving credential that complements the practical application logic I build in personal and team projects.',
  },
  {
    id: 'rest-api-intermediate', title: 'REST API (Intermediate)', slug: 'hackerrank-rest-api-intermediate', category: 'Web APIs',
    description: 'An API credential alongside internship experience building Java REST services and connecting them to frontend applications.',
  },
  {
    id: 'sql-intermediate', title: 'SQL (Intermediate)', slug: 'hackerrank-sql-intermediate', category: 'Databases',
    description: 'A SQL credential alongside project experience designing and working with MySQL and SQL Server databases.',
  },
  {
    id: 'sql-advanced', title: 'SQL (Advanced)', slug: 'hackerrank-sql-advanced', category: 'Databases',
    description: 'An advanced-level SQL credential supporting my continued learning in relational data and database-backed applications.',
  },
].map(({slug, ...certificate}) => ({
  ...certificate, issuer: 'HackerRank',
  previewSrc: `/images/certificates/${slug}.webp`,
  pdfSrc: `/files/certificates/${slug}.pdf`,
}));

