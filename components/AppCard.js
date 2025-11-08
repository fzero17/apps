import Link from 'next/link';

export default function AppCard({ app }){
  return (
    <Link href={`/apps/${app.slug}`} className="card">
      <div className="art"><img src={app.cardImage || app.icon} alt={app.title} /></div>
      <div className="meta">
        <h3>{app.title}</h3>
        <p className="short">{app.short}</p>
      </div>
    </Link>
  )
}
