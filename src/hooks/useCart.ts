import { useContext, useMemo } from 'react';
import { StoreContext, type StoreValue } from '../context/StoreContext';
import { getProduct } from '../data/products';
import type { Product } from '../types/product';

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
}

export interface CartLine {
  product: Product;
  qty: number;
}

export function useCart() {
  const store = useStore();
  const lines = useMemo<CartLine[]>(
    () =>
      store.items.flatMap((i) => {
        const product = getProduct(i.id);
        return product ? [{ product, qty: i.qty }] : [];
      }),
    [store.items],
  );
  const subtotal = useMemo(() => lines.reduce((s, l) => s + l.product.price * l.qty, 0), [lines]);
  return { ...store, lines, subtotal };
}
