import { MessageCircle } from 'lucide-react';
import { generalMessage, whatsappLink } from '../../utils/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jessyca Secrets on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-wa text-white shadow-soft transition-colors hover:bg-[#10613A] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
    >
      <MessageCircle size={20} />
      <span className="hidden text-[13px] font-medium sm:inline">Chat with us</span>
    </a>
  );
}
