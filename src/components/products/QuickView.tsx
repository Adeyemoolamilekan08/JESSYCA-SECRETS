import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import type { Product } from '../../types/product';
import { useStore } from '../../hooks/useCart';
import { useOverlay } from '../../hooks/useOverlay';
import { formatNaira } from '../../utils/format';
import ProductMedia from '../common/ProductMedia';
import QuantityControl from '../common/QuantityControl';
import Stars from '../common/Stars';

export default function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  useOverlay(true, onClose);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={`Quick view: ${product.name}`}>
      <button type="button" className="absolute inset-0 animate-fade bg-ink/50" onClick={onClose} aria-label="Close quick view" tabIndex={-1} />
      <div className="relative grid max-h-[92vh] w-full max-w-3xl animate-fadeUp overflow-y-auto bg-ivory sm:grid-cols-2">
        <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[420px]">
          <ProductMedia product={product} />
        </div>
        <div className="p-6 sm:p-8">
          <button type="button" onClick={onClose} aria-label="Close quick view" className="absolute right-3 top-3 bg-ivory/90 p-2 text-charcoal hover:text-magenta">
            <X size={20} />
          </button>
          <p className="eyebrow">{product.category.replace('-', ' ')}</p>
          <h2 className="mt-2 text-3xl font-medium leading-tight">{product.name}</h2>
          <div className="mt-3"><Stars rating={product.rating} /></div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-xl font-semibold">{formatNaira(product.price)}</span>
            {product.oldPrice && <span className="text-charcoal/60 line-through">{formatNaira(product.oldPrice)}</span>}
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/85">{product.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <QuantityControl label={product.name} value={qty} max={product.stock} onChange={setQty} />
            <button
              type="button"
              className="btn-primary flex-1"
              onClick={() => {
                addToCart(product.id, qty);
                onClose();
              }}
            >
              Add to cart
            </button>
          </div>
          <Link to={`/product/${product.id}`} onClick={onClose} className="mt-5 inline-block text-sm font-medium text-plum-800 link-underline">
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
}
