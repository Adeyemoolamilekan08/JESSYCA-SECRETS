import type { Product } from '../../types/product';
import ProductVisual from './ProductVisual';

interface Props {
  product: Product;
  variant?: 0 | 1 | 2;
  className?: string;
  eager?: boolean;
}

/** Shows a real product photo when available, otherwise the illustrated tile. */
export default function ProductMedia({ product, variant = 0, className = '', eager }: Props) {
  const src = product.images?.[variant] ?? product.images?.[0];
  if (src) {
    return (
      <img
        src={src}
        alt={product.name}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return <ProductVisual spec={product.visual} variant={variant} className={className} />;
}
