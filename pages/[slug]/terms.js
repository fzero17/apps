import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { apps } from '../../lib/data';
import { terms } from '../../lib/terms';

export default function AppTerms(){
  const router = useRouter();
  const { slug } = router.query;
  const app = apps.find((a) => a.slug === slug);
  const appTerms = slug ? terms[slug] : null;

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
        <title>{`${app.title} · Terms of Use`}</title>
        <meta
          name="description"
          content={`Terms of Use, subscription details, and auto-renewal information for ${app.title}.`}
        />
      </Head>
      <div className="privacy-inner">
        <section className="privacy-hero">
          <h1>{app.title} Terms of Use</h1>
          <p>Review the subscription details, renewal rules, and usage guidelines required for downloading {app.title} from the Mac App Store.</p>
        </section>

        <article className="privacy-card">
          <header className="privacy-card-header">
            <div className="privacy-card-brand">
              <img src={app.icon} alt={`${app.title} icon`} />
              <div>
                <h2>{app.title}</h2>
                {appTerms?.updated && <p className="privacy-updated">Last updated {appTerms.updated}</p>}
              </div>
            </div>
            <span className="privacy-platform">macOS</span>
          </header>

          {appTerms ? (
            <>
              <p className="privacy-overview">{appTerms.overview}</p>
              {appTerms.subscription && (
                <section className="privacy-section">
                  <h3>{appTerms.subscription.title}</h3>
                  <ul className="list-bullets">
                    {appTerms.subscription.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              <div className="privacy-sections">
                {appTerms.sections.map((section) => (
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
            <p className="privacy-overview">A dedicated Terms of Use disclosure is being prepared. Until then, this app follows the Apple Standard Licensed Application End User License Agreement.</p>
          )}
        </article>

        <article className="privacy-card">
          <header className="privacy-card-header">
            <h3>Standard Apple Terms of Use</h3>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="cta ghost">View Standard EULA</a>
          </header>
          <p className="privacy-overview">If you do not agree to both these Terms of Use and Apple’s Standard EULA, do not download or continue using {app.title}.</p>
        </article>

        <footer className="privacy-footnote">
          <p>
            Questions about these terms? Email <a href="mailto:fzero17@qq.com">fzero17@qq.com</a>.
            {' '}Return to <Link href={`/${app.slug}`}>the {app.title} overview</Link> · Review the <Link href={`/${app.slug}/privacy`}>Privacy Policy</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
