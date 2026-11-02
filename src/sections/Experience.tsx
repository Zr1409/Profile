import { EXPERIENCES } from '../data/portfolioData';

export const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="section experience-section">
    <div className="site-shell">
      <div className="section-intro" data-heading-reveal><h2 id="experience-heading">Experience</h2><p data-reveal-copy>Hands-on experience in Java, APIs and fullstack development</p></div>
      <div className="timeline">
        {EXPERIENCES.map(item => (
          <article key={item.id} className="timeline-row" data-scroll-reveal>
            <p className="timeline-date" data-reveal-item data-reveal-from="left">{item.period}</p>
            <div className="timeline-main" data-reveal-item data-reveal-from="right">
              <div className="timeline-heading">
                <div><h3>{item.position}</h3><p>{item.company}</p></div>
                <span>{item.type}</span>
              </div>
              <ul>{item.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul>
              <div className="inline-stack">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
