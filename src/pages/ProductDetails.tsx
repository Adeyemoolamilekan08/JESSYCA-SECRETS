import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, ChevronRight, Heart, MessageCircle } from 'lucide-react';
import { getProduct, products } from '../data/products';
import { getCategory } from '../data/categories';
import { discountPercent, formatNaira } from '../utils/format';
import { productMessage, whatsappLink } from '../utils/whatsapp';
import { useStore } from '../hooks/useCart';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ProductMedia from '../components/common/ProductMedia';
import QuantityControl from '../components/common/QuantityControl';
import Stars from '../components/common/Stars';
import ProductGrid from '../components/products/ProductGrid';

export default function ProductDetails() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [view, setView] = useState<0 | 1 | 2>(0);

  useDocumentTitle(product?.name);

  if (!product) return <Navigate to="/shop" replace />;

  const category = getCategory(product.category);
  const discount = discountPercent(product.price, product.oldPrice);
  const saved = wishlist.includes(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const lowStock = product.stock <= 10;

  return (
    <div className="container-x py-8 lg:py-12" key={product.id}>
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-charcoal/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/shop" className="hover:text-magenta">Shop</Link></li>
          <li aria-hidden="true"><ChevronRight size={12} /></li>
          <li><Link to={`/shop/${product.category}`} className="hover:text-magenta">{category?.name}</Link></li>
          <li aria-hidden="true"><ChevronRight size={12} /></li>
          <li aria-current="page" className="text-ink">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="grid gap-3 sm:grid-cols-[88px_1fr] sm:gap-4">
          <div className="order-2 grid grid-cols-3 gap-3 sm:order-1 sm:grid-cols-1 sm:content-start" role="group" aria-label="Product views">
            {([0, 1, 2] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                aria-label={`Show view ${v + 1} of ${product.name}`}
                className={`aspect-[4/5] overflow-hidden border-2 ${view === v ? 'border-plum-800' : 'border-transparent hover:border-charcoal/30'}`}
              >
                <ProductMedia product={product} variant={v} />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-cream sm:order-2">
            <ProductMedia product={product} variant={view} eager />
          </div>
        </div>

        <div>
          <p className="eyebrow">{category?.name}</p>
          <h1 className="mt-2 text-4xl font-medium leading-[1.08] sm:text-5xl">{product.name}</h1>
          <div className="mt-4"><Stars rating={product.rating} /></div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-ink">{formatNaira(product.price)}</span>
            {product.oldPrice && <span className="text-lg text-charcoal/60 line-through">{formatNaira(product.oldPrice)}</span>}
            {discount && <span className="bg-plum-800 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">Save {discount}%</span>}
          </div>

          <p className="mt-6 text-base leading-relaxed text-charcoal/85">{product.description}</p>

          <h2 className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal">Benefits</h2>
          <ul className="mt-3 space-y-2.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[15px] text-charcoal/90">
                <Check size={17} className="mt-0.5 shrink-0 text-magenta" aria-hidden="true" /> {b}
              </li>
            ))}
          </ul>

          <p className={`mt-7 text-sm ${lowStock ? 'text-magenta' : 'text-charcoal/75'}`}>
            {lowStock ? `Only ${product.stock} left in stock` : `${product.stock} available`}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <QuantityControl label={product.name} value={qty} max={product.stock} onChange={setQty} />
            <button type="button" className="btn-primary min-w-[170px] flex-1 sm:flex-none" onClick={() => addToCart(product.id, qty)}>
              Add to cart
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={saved}
              aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
              className="flex h-[46px] w-[46px] items-center justify-center border border-charcoal/25 bg-white text-plum-800 hover:text-magenta"
            >
              <Heart size={19} className={saved ? 'fill-magenta text-magenta' : ''} />
            </button>
          </div>

          <a
            href={whatsappLink(productMessage(product.name, qty))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa mt-3 w-full sm:w-auto"
          >
            <MessageCircle size={17} /> Buy via WhatsApp
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-charcoal/10 pt-14" aria-labelledby="related-title">
          <h2 id="related-title" className="mb-8 text-3xl font-medium sm:text-4xl">You may also like</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
