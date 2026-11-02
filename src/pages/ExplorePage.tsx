import { MapPin, TrendingUp, ShieldCheck, Compass, CheckCircle2, MessageCircle } from 'lucide-react';
import { businessData, lahoreLocations } from '../data/business';

interface ExplorePageProps {
  onOpenBooking: () => void;
}

export function ExplorePage({ onOpenBooking }: ExplorePageProps) {
  const comparisonData = [
    {
      corridor: "Soul City Lahore (Sector C 31 CCA)",
      type: "Master Planned Community",
      growthPotential: "15% - 20% p.a.",
      rentalYield: "7% - 9%",
      idealInvestor: "Long-term Capital Growth & Home Builders",
      connectivity: "Direct Ring Road & DHA Phase 6 Link"
    },
    {
      corridor: "Jail Road / Lucky Center",
      type: "Prime Commercial Vertical",
      growthPotential: "10% - 14% p.a.",
      rentalYield: "9% - 12% Immediate",
      idealInvestor: "Corporate Showrooms & High-Yield Renters",
      connectivity: "Central Heart of Gulberg & Main Boulevard"
    },
    {
      corridor: "DHA Phase 6 Luxury Corridor",
      type: "Ultra-Luxury Residential",
      growthPotential: "12% - 16% p.a.",
      rentalYield: "8% - 10%",
      idealInvestor: "High Net Worth & Executive Overseas Buyers",
      connectivity: "Bedian Road, Ring Road & Lahore Airport"
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F1] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Market Intelligence</span>
          </span>
          <h1 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1] mt-2">
            Explore Lahore's Strategic Growth Vectors
          </h1>
          <p className="text-sm text-[#FAF7F1]/70 mt-3 leading-relaxed">
            Gain data-backed clarity into the infrastructure projects and high-capital corridors shaping property appreciation across Punjab's financial capital.
          </p>
        </div>

        {/* 3 Interactive Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {lahoreLocations.map((loc, i) => (
            <div
              key={loc.title}
              className="p-8 rounded-2xl bg-[#202020] border border-[#E3C27A]/25 flex flex-col justify-between hover:border-[#E3C27A]/60 transition-all shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E3C27A]/15 text-[#E3C27A] flex items-center justify-center font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#FAF7F1] mb-2">{loc.title}</h3>
                <p className="text-xs text-[#E3C27A] font-semibold mb-3">{loc.yield}</p>
                <p className="text-sm text-[#FAF7F1]/70 leading-relaxed mb-6">{loc.description}</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#FAF7F1]/80">
                <MapPin className="w-3.5 h-3.5 text-[#E3C27A]" />
                <span>{loc.distance}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corridor Comparison Matrix */}
        <div className="bg-[#1C1C1C] rounded-3xl border border-[#E3C27A]/25 p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-[#FAF7F1]">
              Corridor Investment Comparison Matrix
            </h3>
            <p className="text-xs text-[#FAF7F1]/60 mt-1">
              Comparative analysis across Marwa key operational hubs in Lahore.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#FAF7F1]/80">
              <thead>
                <tr className="border-b border-[#E3C27A]/20 text-[#E3C27A] text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4">Location Sector</th>
                  <th className="py-3 px-4">Development Profile</th>
                  <th className="py-3 px-4">Capital Growth</th>
                  <th className="py-3 px-4">Target Rental Yield</th>
                  <th className="py-3 px-4">Target Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row) => (
                  <tr key={row.corridor} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#FAF7F1]">
                      {row.corridor}
                    </td>
                    <td className="py-4 px-4 text-[#FAF7F1]/70">
                      {row.type}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#E3C27A]">
                      {row.growthPotential}
                    </td>
                    <td className="py-4 px-4 font-mono text-[#FAF7F1]">
                      {row.rentalYield}
                    </td>
                    <td className="py-4 px-4 text-xs text-white/60">
                      {row.idealInvestor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Lahore Now Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#24201A] to-[#1A1A1A] border border-[#E3C27A]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold">
              Strategic Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F1] mt-1">
              Have Questions Regarding Title Deeds or Sector Approvals?
            </h3>
            <p className="text-sm text-[#FAF7F1]/75 mt-3 leading-relaxed">
              Our registered documentation team provides verified transparent scrutiny for all land registry, NOC status, and possession milestones.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold text-sm shadow-xl hover:brightness-105"
            >
              Book an Advisory Session
            </button>
            <a
              href={`https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
                'Hello Marwa Real Estate, I would like to consult on Lahore investment corridors and documentation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-[#E3C27A]/40 text-[#FAF7F1] text-sm font-semibold hover:bg-white/5 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#E3C27A]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
