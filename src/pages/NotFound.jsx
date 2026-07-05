import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '120px 32px' }}>
      <SEO title="404 — Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <h1 style={{ fontSize: '96px', fontWeight: 900, color: 'var(--accent)', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </main>
  );
}
