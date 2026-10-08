import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Hero from '../components/hero/Hero';
import Marquee from '../components/common/Marquee';
import CategoryGrid from '../components/categories/CategoryGrid';
import ProductGrid from '../components/products/ProductGrid';
import WhyShop from '../components/common/WhyShop';
import HowToOrder from '../components/common/HowToOrder';
import { products } from '../data/products';
import { generalMessage, whatsappLink } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const featured = products.filter((p) => p.featured).slice(0, 8);

export default function Home() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <Marquee />

      <section className="container-x py-20 text-center lg:py-28" aria-labelledby="intro-title">
        <p className="eyebrow">Welcome</p>
        <h2 id="intro-title" className="mx-auto mt-5 max-w-3xl text-[34px] font-medium leading-[1.12] sm:text-5xl lg:text-[56px]">
          Beauty, Care <span className="italic text-plum-700">&amp;</span> Confidence
        </h2>
        <span className="mx-auto mt-8 block h-px w-16 bg-gold" aria-hidden="true" />
        <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.8] text-charcoal/85 sm:text-lg">
          Jessyca Secrets offers a carefully selected range of beauty, cosmetic and personal-care products for everyday
          use. We want you to feel good in your own skin, and to find products that suit you. Not sure what to pick?
          Message us on WhatsApp and we will help you choose.
        </p>
      </section>

      <section id="categories" className="container-x scroll-mt-28 pb-20 lg:pb-28" aria-labelledby="categories-title">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Browse</p>
            <h2 id="categories-title" className="text-[34px] font-medium leading-[1.05] sm:text-5xl">Shop by category</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-1.5 text-sm font-medium text-plum-800 link-underline sm:inline-flex">
            All products <ArrowRight size={15} />
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section className="bg-cream/70 py-20 lg:py-28" aria-labelledby="favorites-title">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between gap-6 lg:mb-14">
            <div>
              <p className="eyebrow mb-3">Selected for you</p>
              <h2 id="favorites-title" className="text-[34px] font-medium leading-[1.05] sm:text-5xl">Shop Our Favorites</h2>
            </div>
            <Link to="/shop" className="hidden items-center gap-1.5 text-sm font-medium text-plum-800 link-underline sm:inline-flex">
              View all <ArrowRight size={15} />
            </Link>
          </div>
          <ProductGrid products={featured} />
          <div className="mt-10 text-center sm:hidden">
            <Link to="/shop" className="btn-outline w-full">View all products</Link>
          </div>
        </div>
      </section>

      <WhyShop />
      <HowToOrder />

      <section className="container-x pb-20 lg:pb-28" aria-labelledby="cta-title">
        <div className="relative overflow-hidden bg-plum-800 px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-3 border border-gold/50" aria-hidden="true" />
          <p className="relative text-[11px] font-medium uppercase tracking-[0.25em] text-gold-light">Need help?</p>
          <h2 id="cta-title" className="relative mx-auto mt-4 max-w-2xl text-[34px] font-medium leading-[1.08] text-white sm:text-5xl">
            Talk to <span className="italic text-gold-light">Jessyca Secrets</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/80">
            Ask about a product, check availability or place an order. We reply Monday to Saturday, 9:00 AM to 6:00 PM.
          </p>
          <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn relative mt-8 bg-ivory text-plum-900 hover:bg-gold-light">
            <MessageCircle size={17} /> Chat with Us
          </a>
        </div>
      </section>
    </>
  );
}
