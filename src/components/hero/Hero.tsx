import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { site } from '../../data/site';
import { generalMessage, whatsappLink } from '../../utils/whatsapp';
import ProductVisual from '../common/ProductVisual';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum-900" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(70% 90% at 78% 40%, rgba(162,62,139,0.38) 0%, rgba(42,12,47,0) 70%)' }}
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="animate-fadeUp text-[11px] font-medium uppercase tracking-[0.28em] text-gold-light">
            Beauty &bull; Care &bull; Confidence
          </p>
          <h1 id="hero-title" className="mt-5 animate-fadeUp text-[46px] font-medium leading-[0.98] text-white sm:text-6xl lg:text-[84px]">
            Beauty That
            <br />
            Feels <span className="italic text-gold-light">Like You</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            Skincare, makeup, hair care, fragrance and everyday personal-care products, carefully selected by Jessyca
            Secrets. Browse the collection and order through WhatsApp whenever you are ready.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="btn bg-ivory text-plum-900 hover:bg-gold-light sm:min-w-[200px]">Shop Collection</Link>
            <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-light sm:min-w-[200px]">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:order-2 lg:max-w-[460px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-gold/60 p-2.5 sm:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-t-[999px] bg-gradient-to-b from-[#F7EEF2] to-[#E6D3E3]">
              {site.heroImage ? (
                <img src={site.heroImage} alt="Jessyca Secrets beauty products" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-x-0 bottom-0 flex h-[78%] items-end justify-center gap-1 px-4">
                  <div className="h-[66%] w-[28%]"><ProductVisual bare fit="meet" spec={{ kind: 'jar', bg: '#EAD9E8', color: '#B5733A' }} /></div>
                  <div className="h-full w-[38%]"><ProductVisual bare fit="meet" spec={{ kind: 'dropper', bg: '#F1E4EC', color: '#6B2A74' }} /></div>
                  <div className="h-[78%] w-[28%]"><ProductVisual bare fit="meet" spec={{ kind: 'bottle', bg: '#F3EDE4', color: '#A23E8B' }} /></div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute -bottom-4 left-0 bg-ivory px-5 py-3.5 shadow-soft sm:-left-6">
            <p className="font-serif text-lg font-semibold leading-none text-plum-800">Order on WhatsApp</p>
            <p className="mt-1.5 text-xs text-charcoal/75">{site.days}, {site.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
