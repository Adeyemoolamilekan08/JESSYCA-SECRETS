import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '../../data/products';
import { formatNaira } from '../../utils/format';
import { useOverlay } from '../../hooks/useOverlay';
import ProductMedia from '../common/ProductMedia';

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useOverlay(open, onClose);

  useEffect(() => {
    if (open) {
      setQ('');
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(term)).slice(0, 5);
  }, [q]);

  if (!open) return null;

  const go = () => {
    const term = q.trim();
    navigate(term ? `/shop?q=${encodeURIComponent(term)}` : '/shop');
    onClose();
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    go();
  };

  return (
    <div className="fixed inset-0 z-[60] animate-fade" role="dialog" aria-modal="true" aria-label="Search products">
      <button type="button" className="absolute inset-0 bg-ink/50" onClick={onClose} aria-label="Close search" tabIndex={-1} />
      <div className="relative bg-ivory shadow-drawer">
        <div className="container-x py-5 sm:py-7">
          <form onSubmit={submit} className="flex items-center gap-3 border-b border-plum-800 pb-3" role="search">
            <Search size={20} className="shrink-0 text-plum-800" aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <input
              id="site-search"
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search serums, lipsticks, body butter"
              className="w-full bg-transparent font-serif text-xl text-ink placeholder:text-charcoal/50 focus:outline-none sm:text-2xl"
              autoComplete="off"
            />
            <button type="button" onClick={onClose} aria-label="Close search" className="p-1 text-charcoal hover:text-magenta">
              <X size={22} />
            </button>
          </form>

          <div className="min-h-[3rem] pt-4">
            {q.trim() && results.length === 0 && (
              <p className="text-sm text-charcoal/70">No products match &ldquo;{q.trim()}&rdquo;. Try a different word.</p>
            )}
            {results.length > 0 && (
              <ul className="divide-y divide-charcoal/10">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link to={`/product/${p.id}`} onClick={onClose} className="flex items-center gap-4 py-3 hover:bg-cream/60">
                      <span className="block h-14 w-12 shrink-0 overflow-hidden">
                        <ProductMedia product={p} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-medium text-ink">{p.name}</span>
                        <span className="block text-xs capitalize text-charcoal/70">{p.category.replace('-', ' ')}</span>
                      </span>
                      <span className="text-sm font-medium">{formatNaira(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {q.trim() && (
              <button type="button" onClick={go} className="mt-3 text-sm font-medium text-plum-800 link-underline">
                See all results for &ldquo;{q.trim()}&rdquo;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
