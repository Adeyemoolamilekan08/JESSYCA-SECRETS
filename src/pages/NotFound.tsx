import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <div className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-5xl font-medium">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-charcoal/75">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn-primary mt-8">Back to Home</Link>
    </div>
  );
}
