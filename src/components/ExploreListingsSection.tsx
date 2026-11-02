import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, CalendarCheck, Filter, RotateCcw, CheckCircle, Tag, MapPin } from 'lucide-react';
import { sampleListings, SampleListing } from '../data/projects';
import { businessData } from '../data/business';

interface ExploreListingsSectionProps {
  onEnquire: (listing: SampleListing) => void;
}

export function ExploreListingsSection({ onEnquire }: ExploreListingsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(300); // 300 Lacs (3 Crore)
  const [selectedSize, setSelectedSize] = useState<string>('All');

  // Extract unique sizes
  const availableSizes = useMemo(() => {
    const set = new Set<string>();
    sampleListings.forEach((item) => set.add(item.size.replace(' (Sample)', '')));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredListings = useMemo(() => {
    return sampleListings.filter((item) => {
      if (selectedProject !== 'All' && item.project !== selectedProject) return false;
      if (selectedType !== 'All' && item.type !== selectedType) return false;
      if (selectedSize !== 'All' && !item.size.includes(selectedSize)) return false;
      if (item.priceNumeric > maxPrice) return false;
      return true;
    });
  }, [selectedProject, selectedType, selectedSize, maxPrice]);

  const handleResetFilters = () => {
    setSelectedProject('All');
    setSelectedType('All');
    setSelectedSize('All');
    setMaxPrice(300);
  };

  return (
    <section id="explore-listings" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E3C27A]/20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242424] border border-[#E3C27A]/30 text-xs font-semibold text-[#E3C27A] mb-3">
          <Tag className="w-3.5 h-3.5" />
          <span>Interactive Portfolio Explorer</span>
        </div>
        <h2 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1]">
          Explore Listings
        </h2>
        <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
          Filter through 12 illustrative sample inventory units across Soul City Lahore, Marwa Tower One, and Marwa Signature.
        </p>
        <div className="mt-3 inline-block px-3 py-1 rounded-md bg-[#221F18] border border-[#E3C27A]/30 text-[11px] text-[#E3C27A]">
          Notice: All listing prices, sizes, and installments shown are <strong>Sample data</strong> to be confirmed with Marwa.
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="bg-[#1F1F1F] rounded-2xl border border-white/10 p-5 sm:p-6 mb-10 shadow-xl">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#FAF7F1]">
            <Filter className="w-4 h-4 text-[#E3C27A]" />
            <span>Refine Sample Inventory</span>
            <span className="text-[11px] text-white/50">({filteredListings.length} matching)</span>
          </div>
          <button
            onClick={handleResetFilters}
            className="text-xs text-[#E3C27A] hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Project Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
              Project
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full bg-[#141414] border border-white/15 rounded-xl px-3 py-2 text-xs text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
            >
              <option value="All">All Projects</option>
              <option value="Soul City Lahore">Soul City Lahore</option>
              <option value="Marwa Tower One">Marwa Tower One</option>
              <option value="Marwa Signature">Marwa Signature</option>
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
              Property Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[#141414] border border-white/15 rounded-xl px-3 py-2 text-xs text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="Residential Plot">Residential Plot</option>
              <option value="Commercial Plot">Commercial Plot</option>
              <option value="Shop">Shop</option>
              <option value="Office">Office</option>
            </select>
          </div>

          {/* Size Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
              Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full bg-[#141414] border border-white/15 rounded-xl px-3 py-2 text-xs text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
            >
              {availableSizes.map((s) => (
                <option key={s} value={s}>
                  {s === 'All' ? 'All Sizes' : s}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/60">
                Max Price (Sample)
              </label>
              <span className="text-xs font-mono text-[#E3C27A] font-semibold">
                Up to {maxPrice >= 100 ? `${(maxPrice / 100).toFixed(2)} Cr` : `${maxPrice} Lacs`}
              </span>
            </div>
            <input
              type="range"
              min="35"
              max="300"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#E3C27A] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-white/40 mt-1">
              <span>35 Lacs</span>
              <span>1.5 Cr</span>
              <span>3.0 Cr</span>
            </div>
          </div>

        </div>
      </div>

      {/* 12 Sample Listings Cards Grid (with Framer Motion live animated layout) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredListings.map((listing) => {
            const waText = encodeURIComponent(
              `Hello Marwa Real Estate, I am inquiring regarding ${listing.title} at ${listing.project}.`
            );
            const waUrl = `https://wa.me/${businessData.whatsapp}?text=${waText}`;

            return (
              <motion.div
                key={listing.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="bg-[#1C1C1C] rounded-2xl border border-white/10 hover:border-[#E3C27A]/50 p-6 flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1"
              >
                <div>
                  {/* Top Header Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#E3C27A] px-2.5 py-0.5 rounded-full bg-[#E3C27A]/10 border border-[#E3C27A]/25">
                      {listing.project}
                    </span>
                    <span className="text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded font-mono">
                      Sample data
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#FAF7F1]">
                    {listing.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-white/60 mt-2 mb-4">
                    <span className="text-white/80 font-medium">{listing.type}</span>
                    <span>·</span>
                    <span className="font-mono text-[#E3C27A]">{listing.size}</span>
                  </div>

                  <div className="flex items-start gap-1.5 text-xs text-[#FAF7F1]/70 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#E3C27A] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{listing.location}</span>
                  </div>

                  {/* Feature highlights */}
                  <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-[#141414] border border-white/5">
                    {listing.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#FAF7F1]/80">
                        <CheckCircle className="w-3 h-3 text-[#E3C27A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Action Buttons */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-[10px] uppercase text-white/50">Sample Price:</span>
                    <span className="text-base font-serif font-bold text-[#E3C27A]">
                      {listing.samplePrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[44px] py-2.5 px-3 rounded-full bg-gold-gradient text-[#1A1A1A] text-xs font-bold flex items-center justify-center gap-1.5 hover:brightness-105 shadow transition-all active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onEnquire(listing)}
                      className="flex-1 min-h-[44px] py-2.5 px-3 rounded-full border border-[#E3C27A]/40 text-[#FAF7F1] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#E3C27A]/10 transition-all active:scale-98"
                    >
                      <CalendarCheck className="w-4 h-4 text-[#E3C27A] shrink-0" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredListings.length === 0 && (
        <div className="text-center py-12 bg-[#1C1C1C] rounded-2xl border border-white/10">
          <p className="text-sm text-[#FAF7F1]/70">
            No sample listings match your filter parameters.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-3 px-4 py-2 rounded-full bg-gold-gradient text-[#1A1A1A] font-semibold text-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </section>
  );
}
