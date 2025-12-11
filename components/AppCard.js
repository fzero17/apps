import Link from 'next/link';

export default function AppCard({ app }){
  return (
    <Link href={`/${app.slug}`} className="card">
      <div className="app-icon"><img src={app.icon} alt={app.title} /></div>
      <div className="meta">
        {app.platform && <span className="badge platform">{app.platform}</span>}
        <h3>{app.title}</h3>
        <p className="short">{app.short}</p>
      </div>
    </Link>
  )
}
