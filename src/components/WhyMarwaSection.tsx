import { ShieldCheck, MapPin, CreditCard, Headphones, Sparkles } from 'lucide-react';
import { whyMarwaCards, sampleCountUpMetrics } from '../data/projects';

export function WhyMarwaSection() {
  const icons = [
    <ShieldCheck className="w-8 h-8 text-[#E3C27A]" key="shield" />,
    <MapPin className="w-8 h-8 text-[#E3C27A]" key="map" />,
    <CreditCard className="w-8 h-8 text-[#E3C27A]" key="card" />,
    <Headphones className="w-8 h-8 text-[#E3C27A]" key="headphone" />,
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E3C27A]/20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242424] border border-[#E3C27A]/30 text-xs font-semibold text-[#E3C27A] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Development Strengths</span>
        </div>
        <h2 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1]">
          Why Marwa Real Estate &amp; Developers
        </h2>
        <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
          Committed to delivering Lahore's premier master planned communities and commercial vertical landmarks with uncompromised integrity.
        </p>
      </div>

      {/* 4 Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {whyMarwaCards.map((card, idx) => (
          <div
            key={card.id}
            className="p-6 sm:p-7 rounded-3xl bg-[#1F1F1F]/70 backdrop-blur-md border border-[#E3C27A]/20 hover:border-[#E3C27A]/60 shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                {icons[idx]}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#E3C27A] font-semibold block mb-1">
                {card.subtitle}
              </span>
              <h3 className="text-xl font-serif font-bold text-[#FAF7F1] mb-3">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F1]/70 leading-relaxed">
                {card.description}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-[#E3C27A] font-mono">
              0{idx + 1} · Excellence Standard
            </div>
          </div>
        ))}
      </div>

      {/* Count-Up Metric Strip (Labelled Sample) */}
      <div className="rounded-3xl bg-gradient-to-r from-[#201D18] via-[#1B1B1B] to-[#201D18] border border-[#E3C27A]/30 p-8 sm:p-10 shadow-2xl">
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#E3C27A] font-semibold">
            Institutional Track Record
          </span>
          <h3 className="text-xl font-serif font-bold text-[#FAF7F1] mt-1">
            Performance Overview at a Glance
          </h3>
          <span className="text-[10px] text-white/50">(Sample numbers, to be confirmed)</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {sampleCountUpMetrics.map((metric, i) => (
            <div key={i} className={`text-center ${i > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#FAF7F1] mt-1">
                {metric.label}
              </div>
              <div className="text-[10px] text-white/50 mt-0.5 font-mono">
                {metric.note}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
