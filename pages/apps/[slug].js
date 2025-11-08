import { useRouter } from 'next/router';
import { apps } from '../../lib/data';

export default function AppDetail(){
  const router = useRouter();
  const { slug } = router.query;
  const app = apps.find(a => a.slug === slug) || apps[0];

  if (!app) {
    return null;
  }

  const hero = app.hero || {};
  const heroDescription = Array.isArray(hero.description) && hero.description.length
    ? hero.description
    : [app.description || app.short].filter(Boolean);
  const heroCtas = Array.isArray(hero.ctas) && hero.ctas.length
    ? hero.ctas
    : [{ label: 'Download', href: '#', kind: 'primary' }];
  const reviewsLabel = typeof app.rating === 'number'
    ? `${app.rating.toFixed(1)} • ${(app.reviewsCount || 0).toLocaleString()} reviews`
    : null;
  const featureSections = Array.isArray(app.featureSections) ? app.featureSections : [];
  const faqItems = Array.isArray(app.faq) ? app.faq : [];

  return (
    <div className="detail-page">
      <div className="detail-inner">
        <section className="app-hero">
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="hero-brand">
                <img src={app.icon} alt={`${app.title} icon`} className="hero-icon" />
                <div>
                  <p className="hero-app-name">{app.title}</p>
                  {reviewsLabel && <p className="hero-reviews">{reviewsLabel}</p>}
                </div>
              </div>
              {hero.badge && <span className="hero-badge">{hero.badge}</span>}
              <h1 className="hero-title">{hero.tagline || app.short || app.title}</h1>
              <div className="hero-description">
                {heroDescription.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="hero-ctas">
                {heroCtas.map((cta, index) => {
                  const href = cta.href || '#';
                  const isAppStore = href.includes('apps.apple.com');
                  const hasImage = Boolean(cta.image);
                  const classNames = ['cta'];
                  if (hasImage) {
                    classNames.push('appstore-badge');
                  } else if (cta.kind === 'ghost') {
                    classNames.push('ghost');
                  } else {
                    classNames.push('primary');
                  }

                  return (
                    <a
                      key={`${cta.label}-${index}`}
                      href={href}
                      className={classNames.join(' ')}
                      target={isAppStore ? '_blank' : undefined}
                      rel={isAppStore ? 'noopener noreferrer' : undefined}
                    >
                      {hasImage ? (
                        <img src={cta.image} alt={cta.alt || cta.label} />
                      ) : (
                        cta.label
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-media">
                <img src={app.screenshots?.[0]} alt={`${app.title} preview`} />
              </div>
            </div>
          </div>
        </section>

        <div className="detail-content">
          {featureSections.length > 0 && (
            <div className="feature-stack">
              {featureSections.map((section, index) => (
                <section
                  key={section.id || section.title || index}
                  className={`feature-section${section.align === 'right' ? ' feature-reverse' : ''}`}
                >
                  <div className="feature-copy">
                    <h2>{section.title}</h2>
                    {Array.isArray(section.paragraphs) && section.paragraphs.map((para, paraIndex) => (
                      <p key={paraIndex}>{para}</p>
                    ))}
                    {Array.isArray(section.bullets) && section.bullets.length > 0 && (
                      <ul>
                        {section.bullets.map((item, bulletIndex) => (
                          <li key={bulletIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {section.image && (
                    <div className="feature-media">
                      <div className="media-frame">
                        <img src={section.image} alt={section.imageAlt || section.title} />
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}

          <section className="section-block">
            <div className="section-header">
              <h2>Overview</h2>
              {app.short && <p>{app.short}</p>}
            </div>
            {app.description && <p className="section-body">{app.description}</p>}
          </section>

          {Array.isArray(app.whatsNew) && app.whatsNew.length > 0 && (
            <section className="section-block">
              <div className="section-header">
                <h2>What's New</h2>
                <p>Latest updates</p>
              </div>
              <ul className="list-bullets">
                {app.whatsNew.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {Array.isArray(app.screenshots) && app.screenshots.length > 0 && (
            <section className="section-block">
              <div className="section-header">
                <h2>Gallery</h2>
                <p>Scroll through interface highlights</p>
              </div>
              <div className="media-gallery">
                {app.screenshots.map((shot, index) => (
                  <figure className="gallery-item" key={shot || index}>
                    <img src={shot} alt={`${app.title} screenshot ${index + 1}`} />
                  </figure>
                ))}
              </div>
            </section>
          )}

          {app.info && (
            <section className="section-block info-block">
              <div className="section-header">
                <h2>App Information</h2>
              </div>
              <dl className="info-grid">
                {app.info.seller && (
                  <div>
                    <dt>Seller</dt>
                    <dd>{app.info.seller}</dd>
                  </div>
                )}
                {app.info.size && (
                  <div>
                    <dt>Size</dt>
                    <dd>{app.info.size}</dd>
                  </div>
                )}
                {app.info.category && (
                  <div>
                    <dt>Category</dt>
                    <dd>{app.info.category}</dd>
                  </div>
                )}
                {app.info.compatibility && (
                  <div>
                    <dt>Compatibility</dt>
                    <dd>{app.info.compatibility}</dd>
                  </div>
                )}
                {app.info.languages && (
                  <div>
                    <dt>Languages</dt>
                    <dd>{app.info.languages}</dd>
                  </div>
                )}
              </dl>
            </section>
          )}

          {faqItems.length > 0 && (
            <section className="section-block">
              <div className="section-header">
                <h2>FAQ</h2>
                <p>Answers to common questions</p>
              </div>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <details key={item.question || index} className="faq-item" open={index === 0}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="section-block privacy-cta">
            <div className="section-header">
              <h2>Privacy Policy</h2>
              <p>Learn how we handle data for this app.</p>
            </div>
            <a className="cta primary" href={`/apps/${app.slug}/privacy`}>View Privacy Details</a>
          </section>
        </div>
      </div>
    </div>
  )
}
