import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, Menu, Search, ShoppingBag } from 'lucide-react';
import { navLinks } from './navLinks';
import { useCart } from '../../hooks/useCart';
import { generalMessage, whatsappLink } from '../../utils/whatsapp';
import { site } from '../../data/site';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();

  const iconBtn = 'relative flex h-10 w-10 items-center justify-center text-plum-800 transition-colors hover:text-magenta';

  return (
    <>
      <div className="bg-plum-900 px-4 py-2 text-center text-[11px] tracking-[0.12em] text-white/85 sm:text-xs">
        Order via WhatsApp &nbsp;|&nbsp; {site.days}, {site.hours}
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur">
        <div className="container-x flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
          <Logo />

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-9">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.to.includes('#') ? (
                    <Link to={item.to} className="text-[13px] font-medium uppercase tracking-[0.14em] text-charcoal hover:text-magenta">
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        `border-b pb-1 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          isActive ? 'border-gold text-plum-800' : 'border-transparent text-charcoal hover:text-magenta'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" className={iconBtn} onClick={() => setSearchOpen(true)} aria-label="Search products">
              <Search size={20} />
            </button>
            <button type="button" className={iconBtn} onClick={() => setCartOpen(true)} aria-label={`Open shopping bag, ${cartCount} items`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-magenta px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2 hidden min-h-[40px] px-4 lg:inline-flex"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <button type="button" className={`${iconBtn} lg:hidden`} onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-haspopup="dialog">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
