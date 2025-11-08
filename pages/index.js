import { apps } from '../lib/data';
import AppCard from '../components/AppCard';

export default function Home(){
  return (
    <div className="home-page">
      <div className="home-inner">
        <section className="home-hero">
          <div className="hero-section">
            <h1 className="hero-title">Make something useful.</h1>
            <p className="hero-subtitle">A collection of apps I've designed and developed.</p>
          </div>
        </section>
        <section className="apps-section">
          <div className="grid">
            {apps.map(a=> (
              <AppCard key={a.slug} app={a} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
