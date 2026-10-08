import { useMemo, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { categories, getCategory } from '../data/categories';
import ProductGrid from '../components/products/ProductGrid';
import SectionHeading from '../components/common/SectionHeading';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { generalMessage, whatsappLink } from '../utils/whatsapp';

type SortKey = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
type PriceKey = 'any' | 'under-8' | '8-15' | 'over-15';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const priceOptions: { value: PriceKey; label: string; test: (n: number) => boolean }[] = [
  { value: 'any', label: 'Any price', test: () => true },
  { value: 'under-8', label: 'Under ₦8,000', test: (n) => n < 8000 },
  { value: '8-15', label: '₦8,000 – ₦15,000', test: (n) => n >= 8000 && n <= 15000 },
  { value: 'over-15', label: 'Over ₦15,000', test: (n) => n > 15000 },
];

export default function Shop() {
  const { category } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState<SortKey>('featured');
  const [price, setPrice] = useState<PriceKey>('any');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const q = params.get('q') ?? '';
  const activeCategory = category ? getCategory(category) : undefined;

  useDocumentTitle(activeCategory ? activeCategory.name : 'Shop');

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const priceTest = priceOptions.find((o) => o.value === price)?.test ?? (() => true);
    const list = products.filter(
      (p) =>
        (!activeCategory || p.category === activeCategory.slug) &&
        priceTest(p.price) &&
        (!term || `${p.name} ${p.category.replace('-', ' ')} ${p.description}`.toLowerCase().includes(term)),
    );
    const sorted = [...list];
    switch (sort) {
      case 'newest': sorted.sort((a, b) => b.addedOrder - a.addedOrder); break;
      case 'price-asc': sorted.sort((a, b) => a.price - b.price); break;
      case 'price-desc': sorted.sort((a, b) => b.price - a.price); break;
      case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
      default: sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.addedOrder - a.addedOrder);
    }
    return sorted;
  }, [activeCategory, price, q, sort]);

  if (category && !activeCategory) return <Navigate to="/shop" replace />;

  const setQuery = (value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set('q', value);
    else next.delete('q');
    setParams(next, { replace: true });
  };

  const hasFilters = Boolean(q || price !== 'any' || activeCategory);
  const clearAll = () => {
    setPrice('any');
    setSort('featured');
    navigate('/shop', { replace: true });
  };

  const catLink = (active: boolean) =>
    `block border-l-2 py-2 pl-3 text-[15px] transition-colors ${
      active ? 'border-plum-800 font-medium text-plum-800' : 'border-transparent text-charcoal/80 hover:text-magenta'
    }`;

  return (
    <div className="container-x py-10 lg:py-14">
      <SectionHeading
        as="h1"
        eyebrow="Shop"
        title={activeCategory ? activeCategory.name : 'The Collection'}
        intro={activeCategory ? activeCategory.blurb : 'Beauty, cosmetic and personal-care products, all in one place.'}
      />

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end lg:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((o) => !o)}
          aria-expanded={filtersOpen}
          aria-controls="filters-panel"
          className="btn-outline justify-between sm:min-w-[160px]"
        >
          <span className="inline-flex items-center gap-2"><SlidersHorizontal size={15} /> Filters</span>
        </button>
      </div>

      <div className="mt-6 grid gap-10 lg:mt-12 lg:grid-cols-[240px_1fr] lg:gap-14">
        <aside id="filters-panel" aria-label="Product filters" className={`${filtersOpen ? 'block' : 'hidden'} space-y-7 lg:block`}>
          <div>
            <label htmlFor="shop-search" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal">Search</label>
            <div className="relative">
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/60" aria-hidden="true" />
              <input
                id="shop-search"
                type="search"
                value={q}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="field pl-9"
              />
            </div>
          </div>

          <nav aria-label="Categories">
            <h2 className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal">Category</h2>
            <ul>
              <li>
                <Link to={{ pathname: '/shop', search }} className={catLink(!activeCategory)} aria-current={!activeCategory ? 'page' : undefined}>
                  All products
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={{ pathname: `/shop/${c.slug}`, search }}
                    className={catLink(activeCategory?.slug === c.slug)}
                    aria-current={activeCategory?.slug === c.slug ? 'page' : undefined}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <label htmlFor="shop-price" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal">Price</label>
            <select id="shop-price" value={price} onChange={(e) => setPrice(e.target.value as PriceKey)} className="field">
              {priceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {hasFilters && (
            <button type="button" onClick={clearAll} className="inline-flex items-center gap-1.5 text-sm font-medium text-plum-800 link-underline">
              <X size={14} /> Clear filters
            </button>
          )}
        </aside>

        <section aria-label="Products">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-charcoal/10 pb-4">
            <p className="text-sm text-charcoal/80" aria-live="polite">
              {results.length} {results.length === 1 ? 'product' : 'products'}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="shop-sort" className="text-sm text-charcoal/80">Sort by</label>
              <select id="shop-sort" value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="field w-auto py-2.5 pr-8">
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {results.length > 0 ? (
            <ProductGrid products={results} />
          ) : (
            <div className="border border-charcoal/10 bg-white px-6 py-14 text-center">
              <h2 className="font-serif text-3xl font-medium">No products found</h2>
              <p className="mx-auto mt-3 max-w-sm text-[15px] text-charcoal/75">
                Try a different search or clear the filters. You can also ask us on WhatsApp.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={clearAll} className="btn-primary">Clear filters</button>
                <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-outline">Ask on WhatsApp</a>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
