import { Award, HeartHandshake, MessageCircle, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Quality Products', text: 'Carefully selected beauty and personal-care products.' },
  { icon: HeartHandshake, title: 'Personal Service', text: 'Friendly support whenever you need help choosing a product.' },
  { icon: MessageCircle, title: 'Easy Ordering', text: 'Order directly through WhatsApp.' },
  { icon: ShieldCheck, title: 'Trusted Experience', text: 'A simple and convenient shopping experience.' },
];

export default function WhyShop() {
  return (
    <section className="bg-plum-900 py-20 text-white lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light">Why Jessyca Secrets</p>
          <h2 className="mt-4 text-[38px] font-medium leading-[1.05] text-white sm:text-5xl">
            Why shop <span className="italic text-gold-light">with us</span>
          </h2>
        </div>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5 border-t border-white/15 pt-6">
              <Icon size={24} strokeWidth={1.3} className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-2xl font-medium text-white">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
