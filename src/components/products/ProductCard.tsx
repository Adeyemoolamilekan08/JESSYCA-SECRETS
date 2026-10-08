import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import type { Product } from '../../types/product';
import { discountPercent, formatNaira } from '../../utils/format';
import { useStore } from '../../hooks/useCart';
import ProductMedia from '../common/ProductMedia';
import Stars from '../common/Stars';

interface Props {
  product: Product;
  onQuickView: (product: Product) => void;
}

function ProductCard({ product, onQuickView }: Props) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const saved = wishlist.includes(product.id);
  const discount = discountPercent(product.price, product.oldPrice);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} className="block h-full w-full" aria-label={`View ${product.name}`}>
          <ProductMedia product={product} className="transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
        </Link>

        {discount && (
          <span className="absolute left-0 top-3 bg-plum-800 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-plum-800 transition-colors hover:bg-white hover:text-magenta"
        >
          <Heart size={17} className={saved ? 'fill-magenta text-magenta' : ''} />
        </button>

        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-white/95 py-3 text-xs font-medium uppercase tracking-[0.14em] text-plum-800 opacity-0 transition duration-300 hover:bg-white focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 max-lg:hidden"
        >
          <Eye size={15} /> Quick view
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-magenta">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="mt-1.5 font-sans text-[15px] font-medium leading-snug text-ink">
          <Link to={`/product/${product.id}`} className="hover:text-magenta">{product.name}</Link>
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[15px] font-semibold text-ink">{formatNaira(product.price)}</span>
          {product.oldPrice && <span className="text-sm text-charcoal/60 line-through">{formatNaira(product.oldPrice)}</span>}
        </div>
        <div className="mt-1.5"><Stars rating={product.rating} /></div>

        <button
          type="button"
          onClick={() => addToCart(product.id)}
          className="btn-outline mt-4 w-full min-h-[42px] px-3 text-[12px]"
        >
          <ShoppingBag size={15} /> Add to cart
        </button>
      </div>
    </article>
  );
}

export default memo(ProductCard);
