import { EDUCATION } from '../data/portfolioData';

export const Education = () => (
  <section id="education" aria-labelledby="education-heading" className="section education-section">
    <div className="site-shell">
      <div className="section-intro" data-heading-reveal><h2 id="education-heading">Education</h2></div>
      <div className="education-list">
        {EDUCATION.map(education => (
          <article className="education-row" key={education.institution} data-scroll-reveal>
            <p className="education-period" data-reveal-item data-reveal-from="left">{education.period}</p>
            <div className="education-main" data-reveal-item data-reveal-from="right">
              <div className="education-title">
                <div><h3>{education.degree}</h3><p>{education.institution}</p></div>
                {education.gpa && <span>GPA {education.gpa}</span>}
              </div>
              {education.highlights?.map(highlight => <p className="education-detail" key={highlight}>{highlight}</p>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
