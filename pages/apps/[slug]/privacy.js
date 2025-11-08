import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { apps } from '../../../lib/data';
import { privacyPolicies } from '../../../lib/privacy';

export default function AppPrivacy(){
  const router = useRouter();
  const { slug } = router.query;
  const app = apps.find((a) => a.slug === slug);
  const policy = slug ? privacyPolicies[slug] : null;

  if (!app) {
    return (
      <div className="privacy-page">
        <div className="privacy-inner">
          <section className="privacy-hero">
            <h1>App not found</h1>
            <p>The app you’re looking for doesn’t exist. Head back to the apps list and try again.</p>
            <Link className="cta primary" href="/">Return to My Apps</Link>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="privacy-page">
      <Head>
        <title>{`${app.title} · Privacy Policy`}</title>
        <meta name="description" content={`Privacy policy and data handling practices for ${app.title}.`} />
      </Head>
      <div className="privacy-inner">
        <section className="privacy-hero">
          <h1>{app.title} Privacy Policy</h1>
          <p>How we handle your data, why certain permissions are required, and how you stay in control while using {app.title}.</p>
        </section>

        <article className="privacy-card">
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

          {policy?.overview ? (
            <>
              <p className="privacy-overview">{policy.overview}</p>
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
            </>
          ) : (
            <p className="privacy-overview">We’re preparing a detailed privacy disclosure for this app. In the meantime, the app does not collect personal data beyond what is necessary to operate on your device.</p>
          )}
        </article>

        <footer className="privacy-footnote">
          <p>
            Questions or feedback about privacy? Email <a href="mailto:fzero17@qq.com">fzero17@qq.com</a>.
            {' '}Return to <Link href={`/apps/${app.slug}`}>the {app.title} overview</Link> or browse <Link href="/privacy">all app policies</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
