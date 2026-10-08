import { useCallback, useState } from 'react';
import type { Product } from '../../types/product';
import ProductCard from './ProductCard';
import QuickView from './QuickView';

export default function ProductGrid({ products }: { products: Product[] }) {
  const [quick, setQuick] = useState<Product | null>(null);
  const open = useCallback((p: Product) => setQuick(p), []);
  const close = useCallback(() => setQuick(null), []);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-3.5 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:gap-y-12 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onQuickView={open} />
        ))}
      </div>
      {quick && <QuickView product={quick} onClose={close} />}
    </>
  );
}
