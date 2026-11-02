import Head from 'next/head';
import Link from 'next/link';

export default function AwwgDocument({ title, description, path, children }) {
  return (
    <article className="awwg-document" lang="zh-Hans">
      <Head>
        <title>{`${title} · Awwg`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://apps.fzero17.com/awwg/${path}`} />
        <link rel="icon" type="image/png" href="/images/awwg-icon.png" />
      </Head>
      <header>
        <Link className="brand" href="/awwg/support">
          <img src="/images/awwg-icon.png" width="48" height="48" alt="" />
          <span>Awwg</span>
        </Link>
        <nav aria-label="Awwg">
          <Link href="/awwg/support" aria-current={path === 'support' ? 'page' : undefined}>帮助与反馈</Link>
          <Link href="/awwg/privacy" aria-current={path === 'privacy' ? 'page' : undefined}>隐私政策</Link>
        </nav>
      </header>
      <h1>{title}</h1>
      {children}
      <style jsx>{`
        .awwg-document { max-width: 720px; margin: 0 auto; padding: 32px 0 64px; color: #25221f; line-height: 1.85; overflow-wrap: anywhere; }
        header { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 48px; }
        .awwg-document :global(.brand) { display: inline-flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 650; color: #25221f; text-decoration: none; }
        img { border-radius: 12px; }
        nav { display: flex; flex-wrap: wrap; gap: 20px; }
        h1 { font-size: clamp(30px, 5vw, 40px); line-height: 1.25; letter-spacing: -0.03em; margin: 0 0 20px; }
        .awwg-document :global(h2) { font-size: 21px; margin: 36px 0 10px; line-height: 1.5; }
        .awwg-document :global(p) { margin: 10px 0; }
        .awwg-document :global(a) { color: #ad3c31; text-underline-offset: 4px; }
        .awwg-document :global(a:focus-visible) { outline: 2px solid #ad3c31; outline-offset: 5px; border-radius: 3px; }
        nav :global(a) { font-size: 14px; text-decoration: none; padding: 8px 0; }
        nav :global(a[aria-current='page']) { color: #25221f; text-decoration: underline; }
        .awwg-document :global(.updated) { font-size: 14px; color: #6a615b; }
        .awwg-document :global(.contact) { padding: 22px 24px; margin: 24px 0 32px; background: #fff3eb; border-radius: 18px; }
        .awwg-document :global(.contact a) { font-size: 20px; font-weight: 600; }
        .awwg-document :global(ul) { padding-left: 22px; }
        @media (max-width: 520px) { header { align-items: flex-start; flex-direction: column; gap: 14px; margin-bottom: 32px; } }
      `}</style>
    </article>
  );
}
