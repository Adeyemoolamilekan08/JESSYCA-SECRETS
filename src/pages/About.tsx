import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ProductVisual from '../components/common/ProductVisual';
import WhyShop from '../components/common/WhyShop';
import { site } from '../data/site';
import { generalMessage, whatsappLink } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About');
  return (
    <>
      <section className="container-x py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading as="h1" eyebrow="About us" title="Beauty that starts with how you feel" />
            <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-charcoal/85">
              <p>
                Jessyca Secrets is a beauty, cosmetic and personal-care business. We select products for everyday self-care,
                from skincare and makeup to hair care, fragrance and body care.
              </p>
              <p>
                We believe that looking after yourself should be simple and enjoyable. That is why we focus on quality
                products, honest advice and friendly service, so every customer feels confident about what they choose.
              </p>
              <p>
                If you need help picking the right product, send us a message. We are happy to guide you.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="btn-primary">Shop Collection</Link>
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <MessageCircle size={16} /> Chat with Us
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-xl grid-cols-5 grid-rows-[auto_auto] gap-3">
            {site.aboutImage ? (
              <img src={site.aboutImage} alt="Jessyca Secrets" className="col-span-5 aspect-[4/3] w-full object-cover" />
            ) : (
              <>
                <div className="col-span-3 row-span-2 aspect-[3/4] overflow-hidden">
                  <ProductVisual spec={{ kind: 'dropper', bg: '#F1E4EC', color: '#6B2A74' }} variant={1} />
                </div>
                <div className="col-span-2 aspect-square overflow-hidden">
                  <ProductVisual spec={{ kind: 'lipstick', bg: '#F5E6DC', color: '#A23E8B' }} variant={1} />
                </div>
                <div className="col-span-2 aspect-square overflow-hidden">
                  <ProductVisual spec={{ kind: 'jar', bg: '#F6EAD9', color: '#B5733A' }} variant={1} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <WhyShop />
    </>
  );
}
