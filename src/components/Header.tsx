import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { businessData } from '../data/business';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
    'Hello Marwa Real Estate & Developers, I would like to inquire about your premium projects.'
  )}`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#1A1A1A]/90 border-b border-[#E3C27A]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo with rounded ivory chip (#FAF7F1) and height 44px */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3C27A]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="bg-[#FAF7F1] rounded-xl px-2.5 py-1.5 inline-flex items-center justify-center shadow-md border border-[#E3C27A]/30 transition-transform group-hover:scale-[1.02]">
              <img
                src="/images/logo.png"
                alt="Marwa Real Estate & Developers"
                className="h-[44px] w-auto object-contain"
                loading="eager"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#E3C27A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E3C27A]'
                      : 'text-[#FAF7F1]/80 hover:text-[#FAF7F1]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Primary Action Button: Gold "WhatsApp Us" Pill */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="hidden lg:inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-[#FAF7F1]/90 hover:text-[#E3C27A] px-3 py-2 transition-colors"
              >
                Book Visit
              </button>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient hover:opacity-95 text-[#1A1A1A] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-[#A87B34]/30 transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button with >= 44px touch targets */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-gold-gradient text-[#1A1A1A] flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 text-[#FAF7F1] hover:text-[#E3C27A] transition-colors focus:outline-none flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden bg-[#1A1A1A]/80 backdrop-blur-md flex justify-end transition-opacity"
        >
          <div className="w-full max-w-xs bg-[#1A1A1A] border-l border-[#E3C27A]/25 h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="bg-[#FAF7F1] rounded-xl px-2 py-1 shadow">
                  <img
                    src="/images/logo.png"
                    alt="Marwa Logo"
                    className="h-[38px] w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-serif tracking-wide py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                        isActive ? 'text-[#E3C27A] font-semibold' : 'text-[#FAF7F1]/80 hover:text-[#FAF7F1]'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              {onOpenBooking && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-lg border border-[#E3C27A]/40 text-[#E3C27A] text-sm font-semibold hover:bg-[#E3C27A]/10 transition-colors"
                >
                  Book a Visit
                </button>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gold-gradient text-[#1A1A1A] text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                className="text-center text-xs text-[#FAF7F1]/60 flex items-center justify-center gap-1.5 pt-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#E3C27A]" />
                <span>{businessData.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
