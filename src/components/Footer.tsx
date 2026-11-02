import { NavLink } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { businessData } from '../data/business';

export function Footer() {
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
    'Hello Marwa Real Estate & Developers, I am inquiring about your projects from your website.'
  )}`;

  return (
    <footer className="bg-[#141414] text-[#FAF7F1] border-t border-[#E3C27A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-4">
            <div className="inline-block self-start bg-[#FAF7F1] rounded-xl px-2.5 py-1.5 shadow-md border border-[#E3C27A]/30">
              <img
                src="/images/logo.png"
                alt="Marwa Real Estate & Developers"
                className="h-[44px] w-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-[#FAF7F1]">
                {businessData.name}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#E3C27A] font-medium mt-1">
                {businessData.tagline}
              </p>
            </div>
            <p className="text-sm text-[#FAF7F1]/70 leading-relaxed max-w-sm">
              Delivering premier master-planned residential communities, corporate landmarks, and bespoke luxury residences in Lahore's most prestigious corridors.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-[#222222] border border-[#E3C27A]/30 flex items-center justify-center text-[#E3C27A] hover:bg-[#E3C27A] hover:text-[#1A1A1A] transition-all"
                aria-label="Facebook Page"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-[#222222] border border-[#E3C27A]/30 flex items-center justify-center text-[#E3C27A] hover:bg-[#E3C27A] hover:text-[#1A1A1A] transition-all"
                aria-label="Instagram Page"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-3.5 py-2 rounded-full bg-[#222222] border border-[#E3C27A]/30 flex items-center gap-1.5 text-xs text-[#E3C27A] hover:bg-gold-gradient hover:text-[#1A1A1A] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Offices in Lahore */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E3C27A]">
              Lahore Offices
            </h3>
            
            {/* Sales Office */}
            <div className="bg-[#1C1C1C] p-3.5 rounded-lg border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold text-[#E3C27A]">
                <span>{businessData.offices.sales.title}</span>
                <a
                  href={businessData.offices.sales.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-0.5 text-[11px] text-white/60 hover:text-white"
                >
                  <span>Map</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <p className="text-xs text-[#FAF7F1]/80 leading-snug">
                {businessData.offices.sales.address}
              </p>
            </div>

            {/* Head Office (Soul City) */}
            <div className="bg-[#1C1C1C] p-3.5 rounded-lg border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold text-[#E3C27A]">
                <span>{businessData.offices.headOffice.title}</span>
                <a
                  href={businessData.offices.headOffice.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-0.5 text-[11px] text-white/60 hover:text-white"
                >
                  <span>Map</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <p className="text-xs text-[#FAF7F1]/80 leading-snug">
                {businessData.offices.headOffice.address}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#FAF7F1]/70">
              <Clock className="w-3.5 h-3.5 text-[#E3C27A]" />
              <span>Hours: {businessData.hours}</span>
            </div>
          </div>

          {/* Column 3: Direct Contacts & Instagram Lines */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E3C27A]">
              Connect &amp; Inquiries
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FAF7F1]/80">
              <li>
                <div className="text-[11px] text-white/50">Primary Direct Line</div>
                <a
                  href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-mono text-[#FAF7F1] hover:text-[#E3C27A] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>{businessData.phone}</span>
                </a>
              </li>
              <li>
                <div className="text-[11px] text-white/50">Official Email</div>
                <a
                  href={`mailto:${businessData.email}`}
                  className="text-xs text-[#FAF7F1] hover:text-[#E3C27A] flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span className="break-all">{businessData.email}</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div className="text-[11px] text-white/50 mb-1">Additional Sales Lines (Instagram)</div>
                {businessData.extraSalesLines.map((line) => (
                  <div key={line.number} className="flex items-center justify-between py-1">
                    <a
                      href={`tel:${line.number.replace(/\s+/g, '')}`}
                      className="font-mono text-xs text-[#FAF7F1]/90 hover:text-[#E3C27A] transition-colors"
                    >
                      {line.number}
                    </a>
                    <a
                      href={`https://wa.me/${line.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#E3C27A] hover:bg-white/10"
                    >
                      WhatsApp
                    </a>
                  </div>
                ))}
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Projects */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E3C27A]">
              Quick Access
            </h3>
            <nav className="flex flex-col space-y-2 text-xs text-[#FAF7F1]/70">
              <NavLink to="/" className="hover:text-[#E3C27A] transition-colors">
                Home Overview
              </NavLink>
              <NavLink to="/projects" className="hover:text-[#E3C27A] transition-colors">
                Featured Projects (Soul City, Tower One, Signature)
              </NavLink>
              <NavLink to="/explore" className="hover:text-[#E3C27A] transition-colors">
                Lahore Investment Corridors
              </NavLink>
              <NavLink to="/about" className="hover:text-[#E3C27A] transition-colors">
                About Marwa Real Estate &amp; Developers
              </NavLink>
              <NavLink to="/contact" className="hover:text-[#E3C27A] transition-colors">
                Schedule Private Consultation
              </NavLink>
            </nav>

            <div className="mt-2 p-3 rounded-lg bg-[#222222]/80 border border-[#E3C27A]/20">
              <span className="text-[11px] uppercase tracking-wider text-[#E3C27A] font-semibold block mb-1">
                Authorized Development
              </span>
              <p className="text-[11px] text-[#FAF7F1]/60 leading-relaxed">
                Registered Real Estate and Developers company operating in Lahore, Punjab, Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required ORION IT SOLUTIONS Demo Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F1]/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {businessData.name}. All rights reserved.
          </p>
          
          {/* Explicit Note Required by Prompt */}
          <div className="px-4 py-2 rounded-full bg-[#202020] border border-[#E3C27A]/30 text-center text-[#FAF7F1]/90">
            <span className="text-[#E3C27A] font-semibold">Note:</span> {businessData.footerNote}
          </div>
        </div>

      </div>
    </footer>
  );
}
