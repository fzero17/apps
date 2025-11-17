import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;
  const isDetailRoute = pathname?.startsWith('/apps/');

  return (
    <div className="layout">
      <header className="site-header">
        <div className="container">
          <nav className="nav">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>My Apps</Link>
          </nav>
        </div>
      </header>
      <main className={`${isDetailRoute ? 'detail-main' : 'container'} main-content`}>{children}</main>
      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Fzero. All rights reserved.</div>
      </footer>
    </div>
  );
}
