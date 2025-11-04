import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="container">
          <nav className="nav">
            <Link href="/" className="active">My Apps</Link>
          </nav>
        </div>
      </header>
      <main className="container main-content">{children}</main>
      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Fzero. All rights reserved.</div>
      </footer>
    </div>
  );
}
