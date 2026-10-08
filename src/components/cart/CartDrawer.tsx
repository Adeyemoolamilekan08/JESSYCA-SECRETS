import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useOverlay } from '../../hooks/useOverlay';
import { formatNaira } from '../../utils/format';
import { orderMessage, whatsappLink } from '../../utils/whatsapp';
import ProductMedia from '../common/ProductMedia';
import QuantityControl from '../common/QuantityControl';

export default function CartDrawer() {
  const { cartOpen, setCartOpen, lines, subtotal, setQty, removeFromCart, clearCart, cartCount } = useCart();
  const close = () => setCartOpen(false);
  useOverlay(cartOpen, close);

  if (!cartOpen) return null;

  const orderHref = whatsappLink(
    orderMessage(lines.map((l) => ({ name: l.product.name, qty: l.qty, price: l.product.price }))),
  );

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button type="button" className="absolute inset-0 animate-fade bg-ink/50" onClick={close} aria-label="Close shopping bag" tabIndex={-1} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[420px] animate-slideLeft flex-col bg-ivory shadow-drawer">
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <h2 className="font-serif text-2xl font-medium">
            Your Bag <span className="font-sans text-sm text-charcoal/60">({cartCount})</span>
          </h2>
          <button type="button" onClick={close} aria-label="Close shopping bag" className="p-2 text-charcoal hover:text-magenta">
            <X size={22} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag size={34} strokeWidth={1.2} className="text-plum-700" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-charcoal/70">Browse the collection and add something you like.</p>
            <Link to="/shop" onClick={close} className="btn-primary mt-6">Shop Collection</Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-charcoal/10 overflow-y-auto px-5">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <Link to={`/product/${product.id}`} onClick={close} className="block h-28 w-24 shrink-0 overflow-hidden">
                    <ProductMedia product={product} />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/product/${product.id}`} onClick={close} className="text-[15px] font-medium leading-snug text-ink hover:text-magenta">
                        {product.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.name} from bag`}
                        className="p-1 text-charcoal/60 hover:text-magenta"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="mt-0.5 text-sm text-charcoal/70">{formatNaira(product.price)}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <QuantityControl compact label={product.name} value={qty} max={product.stock} onChange={(n) => setQty(product.id, n)} />
                      <span className="text-sm font-medium">{formatNaira(product.price * qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-charcoal/10 bg-white px-5 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-charcoal/80">Estimated subtotal</span>
                <span className="font-serif text-2xl font-semibold text-ink">{formatNaira(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-charcoal/60">Delivery and final total are confirmed on WhatsApp.</p>
              <a href={orderHref} target="_blank" rel="noopener noreferrer" className="btn-wa mt-4 w-full">
                <MessageCircle size={17} /> Order via WhatsApp
              </a>
              <button type="button" onClick={clearCart} className="mt-3 w-full text-center text-sm text-charcoal/70 link-underline">
                Clear bag
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
