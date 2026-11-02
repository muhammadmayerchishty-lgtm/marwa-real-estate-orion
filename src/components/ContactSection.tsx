import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
import { businessData } from '../data/business';

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
    'Assalam-o-Alaikum Marwa Developers, I would like to inquire regarding your Lahore offices and project availability.'
  )}`;

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E3C27A]/20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold">
          Lahore Executive Presence
        </span>
        <h2 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1] mt-2">
          Contact Marwa Real Estate &amp; Developers
        </h2>
        <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
          Visit our sales center on Jail Road or our head office in DHA Phase 6. Senior advisors are available daily until 8:00 PM.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Stylised Map Block (SVG, No External Map) */}
        <div className="lg:col-span-6 bg-[#161616] rounded-3xl border border-[#E3C27A]/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl relative min-h-[460px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#E3C27A]" />
                <span className="text-xs uppercase tracking-wider text-[#FAF7F1] font-semibold">
                  Lahore Arterial Map Overview
                </span>
              </div>
              <span className="text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded font-mono">
                Stylised SVG Vector
              </span>
            </div>

            {/* Stylised SVG Map Representation of Lahore Ring Road & Corridors */}
            <div className="w-full h-64 sm:h-72 rounded-2xl bg-[#1F1F1F] border border-white/5 relative overflow-hidden flex items-center justify-center p-2">
              <svg viewBox="0 0 500 350" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="roadGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#A87B34" />
                    <stop offset="100%" stop-color="#E3C27A" />
                  </linearGradient>
                </defs>

                {/* Background grid */}
                <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E3C27A" stroke-opacity="0.05" stroke-width="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />

                {/* Lahore Ring Road (Curved Gold Line) */}
                <path
                  d="M 40 40 C 140 100, 260 80, 360 40 C 440 20, 470 120, 460 210 C 450 290, 370 320, 250 310 C 140 300, 60 260, 40 200"
                  stroke="url(#roadGold)"
                  stroke-width="3"
                  stroke-dasharray="6 4"
                  fill="none"
                />
                <text x="310" y="32" fill="#E3C27A" font-size="9" font-family="sans-serif" letter-spacing="1">
                  LAHORE RING ROAD (SL-3)
                </text>

                {/* Ferozepur Road & Jail Road Arteries */}
                <path d="M 120 40 L 290 320" stroke="#FAF7F1" stroke-opacity="0.25" stroke-width="2" />
                <text x="130" y="70" fill="#FAF7F1" font-size="8" opacity="0.6">Ferozepur Road</text>

                <path d="M 50 140 L 320 160" stroke="#FAF7F1" stroke-opacity="0.25" stroke-width="2" />
                <text x="60" y="132" fill="#FAF7F1" font-size="8" opacity="0.6">Jail Road / Gulberg</text>

                {/* Canal Road */}
                <path d="M 30 80 Q 200 130 460 90" stroke="#4A7599" stroke-opacity="0.4" stroke-width="2.5" />
                <text x="360" y="105" fill="#75A0C2" font-size="8">Lahore Canal</text>

                {/* Landmark 1: Sales Office (Jail Road / Lucky Center) */}
                <circle cx="160" cy="148" r="9" fill="#1A1A1A" stroke="#E3C27A" stroke-width="2" />
                <circle cx="160" cy="148" r="4" fill="#E3C27A" />
                <rect x="75" y="170" width="170" height="24" rx="4" fill="#1C1C1C" stroke="#E3C27A" stroke-width="1" />
                <text x="160" y="186" text-anchor="middle" fill="#FAF7F1" font-size="9" font-weight="bold">
                  Sales Office: Lucky Center, Jail Rd
                </text>

                {/* Landmark 2: Head Office (DHA Phase 6 CCA) */}
                <circle cx="390" cy="240" r="9" fill="#1A1A1A" stroke="#E3C27A" stroke-width="2" />
                <circle cx="390" cy="240" r="4" fill="#E3C27A" />
                <rect x="290" y="260" width="180" height="24" rx="4" fill="#1C1C1C" stroke="#E3C27A" stroke-width="1" />
                <text x="380" y="276" text-anchor="middle" fill="#FAF7F1" font-size="9" font-weight="bold">
                  Head Office: DHA Phase 6 CCA
                </text>

                {/* Landmark 3: Soul City Lahore (Jia Bagga / Halloki) */}
                <circle cx="210" cy="285" r="7" fill="#1A1A1A" stroke="#F5DE9C" stroke-width="1.5" />
                <circle cx="210" cy="285" r="3" fill="#F5DE9C" />
                <text x="210" y="305" text-anchor="middle" fill="#E3C27A" font-size="8">
                  Soul City (Jia Bagga / Halloki)
                </text>

                {/* Landmark 4: Marwa Tower One (Opp Expo Johar Town) */}
                <circle cx="230" cy="115" r="7" fill="#1A1A1A" stroke="#F5DE9C" stroke-width="1.5" />
                <circle cx="230" cy="115" r="3" fill="#F5DE9C" />
                <text x="230" y="105" text-anchor="middle" fill="#E3C27A" font-size="8">
                  Marwa Tower One (Johar Town)
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F1]/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E3C27A]" />
              <span>Hours: {businessData.hours}</span>
            </span>
            <div className="flex gap-3">
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E3C27A] hover:underline"
              >
                Facebook
              </a>
              <span className="text-white/30">·</span>
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E3C27A] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Office Cards & Directions */}
        <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
          
          {/* Sales Office Card */}
          <div className="bg-[#1C1C1C] rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                  {businessData.offices.sales.title}
                </span>
                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-white/60">Jail Road Hub</span>
              </div>
              <p className="text-sm text-[#FAF7F1] font-medium leading-relaxed mb-4">
                {businessData.offices.sales.address}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">Lahore 54000, Pakistan</span>
              <a
                href={businessData.offices.sales.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2 rounded-full bg-white/10 hover:bg-[#E3C27A] hover:text-[#1A1A1A] text-xs font-semibold text-[#FAF7F1] transition-all inline-flex items-center gap-1.5"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Head Office Card */}
          <div className="bg-[#1C1C1C] rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                  {businessData.offices.headOffice.title}
                </span>
                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-white/60">DHA Phase 6</span>
              </div>
              <p className="text-sm text-[#FAF7F1] font-medium leading-relaxed mb-4">
                {businessData.offices.headOffice.address}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">Soul City Corporate Corridor</span>
              <a
                href={businessData.offices.headOffice.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2 rounded-full bg-white/10 hover:bg-[#E3C27A] hover:text-[#1A1A1A] text-xs font-semibold text-[#FAF7F1] transition-all inline-flex items-center gap-1.5"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Hotline & Extra Sales Lines Strip */}
          <div className="bg-[#1F1F1F] rounded-2xl border border-[#E3C27A]/30 p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase text-white/50 block">Primary Direct Hotline (Tap to call)</span>
                <a
                  href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                  className="min-h-[44px] py-1 text-lg font-mono font-bold text-[#E3C27A] hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{businessData.phone}</span>
                </a>
              </div>
              <a
                href={`mailto:${businessData.email}`}
                className="min-h-[44px] py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#E3C27A] shrink-0" />
                <span className="break-all">{businessData.email}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] uppercase text-white/50 mb-1.5">
                Extra Sales Lines (Instagram Desk, to be confirmed)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {businessData.extraSalesLines.map((line) => (
                  <div key={line.number} className="flex items-center justify-between p-2.5 rounded-lg bg-[#141414]">
                    <a href={`tel:${line.number.replace(/\s+/g, '')}`} className="min-h-[44px] flex items-center font-mono text-white/90 hover:text-[#E3C27A]">
                      {line.number}
                    </a>
                    <a
                      href={`https://wa.me/${line.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3 rounded bg-white/5 hover:bg-white/10 text-xs text-[#E3C27A] hover:underline flex items-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
