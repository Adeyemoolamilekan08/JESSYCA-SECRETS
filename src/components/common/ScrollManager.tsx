import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to top on route change, or to the hash target when present. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}
