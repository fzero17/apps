import { apps } from '../lib/data';
import AppCard from '../components/AppCard';

export default function Home(){
  return (
    <div>
      <h1 className="page-title">My Apps</h1>
      <p className="lead">A collection of apps I've designed and developed.</p>
      <div className="grid">
        {apps.map(a=> (
          <AppCard key={a.slug} app={a} />
        ))}
      </div>
    </div>
  )
}
