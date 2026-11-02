import { ShieldCheck, Award, Users, MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { businessData } from '../data/business';

export function AboutPage() {
  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F1] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Brand Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#FAF7F1] rounded-2xl px-4 py-2 shadow-lg mb-6 border border-[#E3C27A]/30">
            <img
              src="/images/logo.png"
              alt="Marwa Real Estate & Developers"
              className="h-[52px] w-auto object-contain mx-auto"
            />
          </div>
          <h1 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1]">
            {businessData.name}
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold mt-2">
            {businessData.tagline}
          </p>
          <p className="text-sm text-[#FAF7F1]/75 mt-4 leading-relaxed">
            A premier Pakistani real estate development company rooted in Lahore, establishing benchmarks in master-planned communities, high-yield vertical corporate towers, and luxury signature living.
          </p>
        </div>

        {/* Concept Demo Card for ORION IT SOLUTIONS */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#22201C] border border-[#E3C27A]/30 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E3C27A]">
                Digital Architecture &amp; Demo Concept
              </span>
              <h3 className="text-xl font-serif font-bold text-[#FAF7F1] mt-0.5">
                Engineered by ORION IT SOLUTIONS
              </h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#E3C27A]/40 text-xs text-[#E3C27A] font-semibold">
              Concept Demo
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-4 leading-relaxed">
            This digital platform was architected by <strong className="text-[#FAF7F1]">ORION IT SOLUTIONS</strong> as a premium presentation concept showcasing Marwa Real Estate &amp; Developers' flagship projects (Soul City Lahore, Marwa Tower One, and Marwa Signature). All business figures, hours, and project schedules are structured as sample concept content to be confirmed directly with Marwa executives.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-white/5">
            <ShieldCheck className="w-8 h-8 text-[#E3C27A] mb-3" />
            <h4 className="text-lg font-serif font-bold text-[#FAF7F1] mb-2">Registered Transparency</h4>
            <p className="text-xs text-[#FAF7F1]/70 leading-relaxed">
              Fully compliant developer registration protocols ensuring every plot transfer, file verification, and commercial allotment is legally sound and guaranteed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-white/5">
            <Award className="w-8 h-8 text-[#E3C27A] mb-3" />
            <h4 className="text-lg font-serif font-bold text-[#FAF7F1] mb-2">Prime Lahore Locations</h4>
            <p className="text-xs text-[#FAF7F1]/70 leading-relaxed">
              Strategic land assets focused on high-demand arteries including Sector C DHA Phase 6 and Jail Road Gulberg commercial strips.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-white/5">
            <Users className="w-8 h-8 text-[#E3C27A] mb-3" />
            <h4 className="text-lg font-serif font-bold text-[#FAF7F1] mb-2">Dedicated Client Care</h4>
            <p className="text-xs text-[#FAF7F1]/70 leading-relaxed">
              Direct access to senior property consultants across multiple sales lines and in-person boardroom presentations until 8:00 PM daily.
            </p>
          </div>
        </div>

        {/* Both Office Locations in Detail */}
        <div className="bg-[#1C1C1C] rounded-3xl border border-[#E3C27A]/25 p-8 mb-16">
          <h3 className="text-2xl font-serif font-bold text-[#FAF7F1] mb-6">
            Official Lahore Establishments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sales Office */}
            <div className="p-6 rounded-2xl bg-[#161616] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                  {businessData.offices.sales.title}
                </span>
                <span className="text-[11px] bg-white/5 px-2 py-0.5 rounded text-white/60">Lahore Central</span>
              </div>
              <p className="text-sm text-[#FAF7F1] font-medium leading-relaxed">
                {businessData.offices.sales.address}
              </p>
              <div className="pt-2 text-xs text-[#FAF7F1]/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E3C27A]" />
                <span>Hours: {businessData.hours}</span>
              </div>
              <div className="pt-3">
                <a
                  href={businessData.offices.sales.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E3C27A] hover:underline"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Head Office */}
            <div className="p-6 rounded-2xl bg-[#161616] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                  {businessData.offices.headOffice.title}
                </span>
                <span className="text-[11px] bg-white/5 px-2 py-0.5 rounded text-white/60">DHA Phase 6</span>
              </div>
              <p className="text-sm text-[#FAF7F1] font-medium leading-relaxed">
                {businessData.offices.headOffice.address}
              </p>
              <div className="pt-2 text-xs text-[#FAF7F1]/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E3C27A]" />
                <span>Hours: {businessData.hours}</span>
              </div>
              <div className="pt-3">
                <a
                  href={businessData.offices.headOffice.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E3C27A] hover:underline"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
