import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { navLinks } from './navLinks';
import { site } from '../../data/site';
import { generalMessage, whatsappLink } from '../../utils/whatsapp';
import { useOverlay } from '../../hooks/useOverlay';
import Logo from '../common/Logo';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useOverlay(open, onClose);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Main menu">
      <button type="button" className="absolute inset-0 animate-fade bg-ink/50" onClick={onClose} aria-label="Close menu" tabIndex={-1} />
      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm animate-slideLeft flex-col bg-ivory shadow-drawer">
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <Logo />
          <button type="button" onClick={onClose} aria-label="Close menu" className="p-2 text-charcoal">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <ul>
            {navLinks.map((item) => (
              <li key={item.label} className="border-b border-charcoal/10">
                {item.to.includes('#') ? (
                  <Link to={item.to} onClick={onClose} className="block py-4 font-serif text-2xl text-ink">
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block py-4 font-serif text-2xl ${isActive ? 'text-magenta' : 'text-ink'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-charcoal/10 px-5 py-5">
          <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-wa w-full">
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
          <p className="mt-4 text-center text-xs text-charcoal/70">
            {site.days}, {site.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
