import { useRouter } from 'next/router';
import { apps } from '../../lib/data';

export default function AppDetail(){
  const router = useRouter();
  const { slug } = router.query;
  const app = apps.find(a => a.slug === slug) || apps[0];

  return (
    <div>
      <div className="detail-head">
        <img src={app.icon} alt="icon" className="icon" />
        <div>
          <h1>{app.title}</h1>
          <p className="short">{app.short}</p>
          <div className="buttons">
            <button className="primary">Download for ...</button>
            <button className="muted">View Demo</button>
          </div>
        </div>
      </div>

      <h3>Screenshots</h3>
      <div className="shots">
        {app.screenshots.map((s,i)=>(<img src={s} key={i} alt={`s${i}`} />))}
      </div>

      <h3>Description</h3>
      <p className="desc">{app.description}</p>

      {app.whatsNew && (
        <section>
          <h3>What's New</h3>
          <ul>
            {app.whatsNew.map((w,i)=>(<li key={i}>{w}</li>))}
          </ul>
        </section>
      )}

      <h3>Ratings & Reviews</h3>
      <div className="rating">{app.rating} out of 5 — {app.reviewsCount || 0} Ratings</div>

      {app.info && (
        <section>
          <h3>Information</h3>
          <table className="info">
            <tbody>
              <tr><td>Seller</td><td>{app.info.seller}</td></tr>
              <tr><td>Size</td><td>{app.info.size}</td></tr>
              <tr><td>Category</td><td>{app.info.category}</td></tr>
              <tr><td>Compatibility</td><td>{app.info.compatibility}</td></tr>
              <tr><td>Languages</td><td>{app.info.languages}</td></tr>
            </tbody>
          </table>
        </section>
      )}


    </div>
  )
}
