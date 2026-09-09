
import { CheckIcon, LinkIcon } from './PortfolioIcons.jsx';

export default function CaseStudyCard({ study }) {
  const {
    variant, tags, title, summary, stats,
    brief, research, delivered, screenshot, screenshotAlt, links,
  } = study;

  return (
    <article className="pf-case-card">
      <header className={`pf-case-banner ${variant}`}>
        <div className="pf-case-tags">
          {tags.map((t) => (
            <span className="pf-case-tag" key={t}>{t}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </header>

      <div className="pf-case-body">
        {stats?.length > 0 && (
          <div className="pf-case-stats">
            {stats.map((s) => (
              <div className="pf-case-stat" key={s.label}>
                <span className="pf-case-stat-num">{s.num}</span>
                <span className="pf-case-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pf-case-grid">
          <div className="pf-case-block">
            <h4>The Brief</h4>
            <p>{brief}</p>
            {research && (
              <div className="pf-case-research">
                <h4>{research.source}</h4>
                <p>{research.body}</p>
              </div>
            )}
          </div>

          <div className="pf-case-block">
            <h4>What We Delivered</h4>
            <ul className="pf-case-delivered">
              {delivered.map((d) => (
                <li key={d}>
                  <span className="pf-check"><CheckIcon /></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {screenshot && (
          <img src={screenshot} alt={screenshotAlt} className="pf-case-screenshot" loading="lazy" />
        )}

        {links?.length > 0 && (
          <div className="pf-case-links">
            {links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-link-btn"
              >
                <LinkIcon name={l.icon} />
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
