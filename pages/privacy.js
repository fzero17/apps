import Head from 'next/head';
import { apps } from '../lib/data';
import { privacyPolicies } from '../lib/privacy';

export default function Privacy(){
  return (
    <div className="privacy-page">
      <Head>
        <title>Privacy Policy · AppFolio</title>
        <meta name="description" content="Privacy information for the apps showcased on AppFolio." />
      </Head>
      <div className="privacy-inner">
        <section className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>We build lightweight, privacy-respecting tools. Every app listed below is described with the data it touches, why those permissions are needed, and how you stay in control.</p>
        </section>

        <div className="privacy-grid">
          {apps.map((app) => {
            const policy = privacyPolicies[app.slug];
            return (
              <article key={app.slug} className="privacy-card">
                <header className="privacy-card-header">
                  <div className="privacy-card-brand">
                    <img src={app.icon} alt={`${app.title} icon`} />
                    <div>
                      <h2>{app.title}</h2>
                      {policy?.updated && <p className="privacy-updated">Last updated {policy.updated}</p>}
                    </div>
                  </div>
                  <span className="privacy-platform">{policy?.platform || app.platform || 'macOS'}</span>
                </header>
                {policy?.overview && <p className="privacy-overview">{policy.overview}</p>}
                {policy?.sections && (
                  <div className="privacy-sections">
                    {policy.sections.map((section) => (
                      <section key={section.title} className="privacy-section">
                        <h3>{section.title}</h3>
                        {section.body.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </section>
                    ))}
                  </div>
                )}
                {!policy && (
                  <p className="privacy-overview">Detailed privacy information for this app is coming soon.</p>
                )}
                <a className="cta primary" href={`/${app.slug}/privacy`}>View full privacy policy</a>
              </article>
            );
          })}
        </div>

        <footer className="privacy-footnote">
          <p>Have a privacy question that is not covered here? Email <a href="mailto:fzero17@qq.com">fzero17@qq.com</a> and we’ll reply within three business days.</p>
        </footer>
      </div>
    </div>
  );
}
