import { SKILL_SHOWCASE } from '../data/portfolioData';

export const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="section">
    <div className="site-shell">
      <div className="section-intro" data-heading-reveal>
        <h2 id="skills-heading">My skills</h2>
        <p data-reveal-copy>A practical toolkit for building web applications, from the backend to the browser.</p>
      </div>
      <div className="skill-showcase-grid">
        {SKILL_SHOWCASE.map(category => (
          <div key={category.title} className="content-frame" data-scroll-reveal>
          <article className="skill-showcase motion-card" data-reveal-item>
            <header>
              <h3>{category.title}</h3>
              <p>{category.context}</p>
            </header>
            <div className="skill-showcase-body">
              <ul className="skill-tags" aria-label={category.title + ' technologies'}>
                {category.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
              {category.familiarTools && (
                <div className="skill-exposure">
                  <span>Also explored</span>
                  <ul className="skill-tags">{category.familiarTools.map(tool => <li key={tool}>{tool}</li>)}</ul>
                </div>
              )}
            </div>
          </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);
