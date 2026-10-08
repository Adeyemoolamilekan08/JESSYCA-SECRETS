import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Logo from '../common/Logo';
import { site } from '../../data/site';
import { generalMessage, whatsappLink } from '../../utils/whatsapp';

const linkCls = 'text-sm text-white/75 transition-colors hover:text-gold-light';

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{site.tagline}</p>
          <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-light mt-6">
            <MessageCircle size={16} /> Chat with us
          </a>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            <li><Link className={linkCls} to="/">Home</Link></li>
            <li><Link className={linkCls} to="/shop">Shop</Link></li>
            <li><Link className={linkCls} to="/#categories">Categories</Link></li>
            <li><Link className={linkCls} to="/about">About</Link></li>
            <li><Link className={linkCls} to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light">Customer Support</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a className={linkCls} href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li><Link className={linkCls} to="/contact">Contact</Link></li>
            <li><a className={linkCls} href={site.phoneHref}>{site.phoneDisplay}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light">Opening Hours</h2>
          <p className="mt-4 text-sm text-white/75">{site.days}</p>
          <p className="text-sm text-white/75">{site.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60">© 2026 Jessyca Secrets. All rights reserved.</div>
      </div>
    </footer>
  );
}
