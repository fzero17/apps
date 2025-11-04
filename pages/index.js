import { apps } from '../lib/data';
import AppCard from '../components/AppCard';

export default function Home(){
  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-title">Make something useful.</h1>
        <p className="hero-subtitle">A collection of apps I've designed and developed.</p>
      </div>
      <div className="apps-section">
        <div className="grid">
          {apps.map(a=> (
            <AppCard key={a.slug} app={a} />
          ))}
        </div>
      </div>
    </div>
  )
}
