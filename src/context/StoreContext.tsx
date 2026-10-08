import { createContext, useCallback, useMemo, useRef, useState, type ReactNode } from 'react';
import type { CartItem } from '../types/product';
import { getProduct } from '../data/products';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface Toast {
  id: number;
  message: string;
}

export interface StoreValue {
  items: CartItem[];
  cartCount: number;
  addToCart: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  toasts: Toast[];
  notify: (message: string) => void;
  dismissToast: (id: number) => void;
}

export const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [rawItems, setItems] = useLocalStorage<CartItem[]>('jessyca-cart', []);
  const [wishlist, setWishlist] = useLocalStorage<string[]>('jessyca-wishlist', []);
  const [cartOpen, setCartOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);

  // Drop anything that no longer exists in the catalogue
  const items = useMemo(() => rawItems.filter((i) => getProduct(i.id)), [rawItems]);

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const notify = useCallback(
    (message: string) => {
      const id = ++toastId.current;
      setToasts((t) => [...t.slice(-2), { id, message }]);
      window.setTimeout(() => dismissToast(id), 2800);
    },
    [dismissToast],
  );

  const addToCart = useCallback(
    (id: string, qty = 1) => {
      const product = getProduct(id);
      if (!product) return;
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing) {
          return prev.map((i) => (i.id === id ? { ...i, qty: Math.min(product.stock, i.qty + qty) } : i));
        }
        return [...prev, { id, qty: Math.min(product.stock, qty) }];
      });
      notify(`${product.name} added to your bag`);
    },
    [setItems, notify],
  );

  const setQty = useCallback(
    (id: string, qty: number) => {
      const product = getProduct(id);
      if (!product) return;
      const next = Math.max(1, Math.min(product.stock, qty));
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: next } : i)));
    },
    [setItems],
  );

  const removeFromCart = useCallback(
    (id: string) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [setItems],
  );

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const toggleWishlist = useCallback(
    (id: string) => {
      const product = getProduct(id);
      const has = wishlist.includes(id);
      setWishlist(has ? wishlist.filter((x) => x !== id) : [...wishlist, id]);
      if (product) notify(has ? `Removed ${product.name} from wishlist` : `Saved ${product.name} to wishlist`);
    },
    [wishlist, setWishlist, notify],
  );

  const cartCount = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);

  const value = useMemo<StoreValue>(
    () => ({
      items, cartCount, addToCart, setQty, removeFromCart, clearCart,
      cartOpen, setCartOpen, wishlist, toggleWishlist, toasts, notify, dismissToast,
    }),
    [items, cartCount, addToCart, setQty, removeFromCart, clearCart, cartOpen, wishlist, toggleWishlist, toasts, notify, dismissToast],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
