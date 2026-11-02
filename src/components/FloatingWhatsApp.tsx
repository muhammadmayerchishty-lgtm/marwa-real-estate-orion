import { MessageCircle } from 'lucide-react';
import { businessData } from '../data/business';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
    'Assalam-o-Alaikum Marwa Developers, I would like to inquire about your property developments in Lahore.'
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact with Marwa Developers"
        className="group relative flex items-center justify-center gap-2.5 min-h-[48px] min-w-[48px] p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold shadow-2xl hover:shadow-[#A87B34]/40 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3C27A]"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
          WhatsApp Us
        </span>
        
        {/* Subtle Online Pulse Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3C27A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#A87B34] border-2 border-[#1A1A1A]"></span>
        </span>
      </a>
    </aside>
  );
}
