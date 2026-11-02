import { PERSONAL_INFO } from '../data/portfolioData';
import { Database, Layers, Users } from 'lucide-react';

const FOCUS_AREAS = [
  { icon: Database, title: 'A solid backend foundation', description: 'Java and Spring Boot REST APIs, relational database design, JPA/Hibernate and authentication with Spring Security.' },
  { icon: Layers, title: 'A connected product experience', description: 'React and TypeScript interfaces connected to application APIs, with experience in AngularJS and third-party integrations.' },
  { icon: Users, title: 'Ownership and collaboration', description: 'Solo development on MinLish, leadership in two-person project teams, and practical collaboration through internships.' },
];

export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="section about-section">
    <div className="site-shell">
      <div className="about-layout" data-scroll-reveal="split">
        <figure className="about-photo" data-reveal-item data-reveal-from="left">
          <img
            src="/images/portraits/standing-560.webp"
            srcSet="/images/portraits/standing-560.webp 560w, /images/portraits/standing-840.webp 840w"
            sizes="(max-width:760px) min(360px, calc(100vw - 40px)), 400px"
            alt="Tran Van Du outdoors at night"
            width={1086}
            height={1448}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="about-body" data-reveal-item data-reveal-from="right">
          <div>
            <h2 id="about-heading" data-reveal-title>About me</h2>
            <p className="about-lead" data-reveal-copy>{PERSONAL_INFO.manifesto}</p>
          </div>
          <p className="body-copy">My background spans aeronautical engineering and software development. Today, I focus on Java and Spring Boot, with React on the frontend.</p>
          <p className="body-copy">I've applied that foundation to learning, recruitment and e-commerce applications. For MinLish, I worked independently across system design, the database, backend and interface. On TalentHub and BookNest, I led two-person teams while contributing as a fullstack developer.</p>
          <p className="body-copy">My internships gave me practical experience building Java APIs, integrating frontend features and checking application behavior with JUnit, Mockito and Postman. I'm now looking for a full-time Java or Fullstack role where I can contribute, learn from feedback and keep improving my craft.</p>
        </div>
      </div>
      <div className="about-focus" aria-label="What I bring to a development team">
        {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="content-frame" data-scroll-reveal>
          <article data-reveal-item>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);
