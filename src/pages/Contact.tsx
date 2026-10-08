import { useState, type FormEvent } from 'react';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { site } from '../data/site';
import { generalMessage, whatsappLink } from '../utils/whatsapp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello Jessyca Secrets, my name is ${name.trim()}.\n\n${message.trim()}`;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  const rowIcon = 'mt-0.5 shrink-0 text-plum-700';

  return (
    <div className="container-x py-12 lg:py-20">
      <SectionHeading as="h1" eyebrow="Contact" title="Talk to Jessyca Secrets" intro="Questions about a product, availability or an order? Message us and we will get back to you." />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="font-serif text-3xl font-medium">Jessyca Secrets</h2>
          <p className="mt-1 text-charcoal/75">{site.tagline}</p>

          <ul className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
            <li className="flex gap-4 py-5">
              <Phone size={19} className={rowIcon} aria-hidden="true" />
              <div>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">Phone</h3>
                <a href={site.phoneHref} className="mt-1 block text-[15px] hover:text-magenta">{site.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <Clock size={19} className={rowIcon} aria-hidden="true" />
              <div>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">Opening Hours</h3>
                <p className="mt-1 text-[15px]">{site.days}</p>
                <p className="text-[15px]">{site.hours}</p>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <MapPin size={19} className={rowIcon} aria-hidden="true" />
              <div>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">Location</h3>
                <p className="mt-1 text-[15px]">{site.addressNote}</p>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <MessageCircle size={19} className={rowIcon} aria-hidden="true" />
              <div>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">WhatsApp</h3>
                <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[15px] link-underline">Chat with us</a>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={send} className="border border-charcoal/10 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-3xl font-medium">Send a message</h2>
          <p className="mt-2 text-sm text-charcoal/75">This opens WhatsApp with your message ready to send.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium">Your name</label>
              <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} className="field" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="c-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="field resize-y" />
            </div>
          </div>

          <button type="submit" className="btn-wa mt-6 w-full sm:w-auto">
            <MessageCircle size={17} /> Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
