import { useState } from 'react';
import { projectsData, ProjectDetail } from '../data/projects';
import { ProjectTiltCard } from '../components/ProjectTiltCard';
import { ProjectDetailDrawer } from '../components/ProjectDetailDrawer';
import { ExploreListingsSection } from '../components/ExploreListingsSection';
import { Calculator } from 'lucide-react';
import { businessData } from '../data/business';

interface ProjectsPageProps {
  onOpenBooking: (projectTitle?: string) => void;
}

export function ProjectsPage({ onOpenBooking }: ProjectsPageProps) {
  const [selectedDrawerProject, setSelectedDrawerProject] = useState<ProjectDetail | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Quick Installment Calculator State (Sample Estimator)
  const [calcAmount, setCalcAmount] = useState<number>(5000000); // 50 Lacs
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(3);

  const calculatedDownPayment = Math.round(calcAmount * (downPaymentPct / 100));
  const remainingBalance = calcAmount - calculatedDownPayment;
  const quarterlyInstallmentsCount = tenureYears * 4;
  const estimatedQuarterly = Math.round(remainingBalance / quarterlyInstallmentsCount);

  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F1] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold">
            Registered Portfolio
          </span>
          <h1 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1] mt-2">
            Signature Real Estate Projects
          </h1>
          <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
            Hover over any project card for 3D perspective inspection. Click &ldquo;View details&rdquo; to review key facts, sample amenities, and sample installment structures.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-md bg-[#221F18] border border-[#E3C27A]/30 text-[11px] text-[#E3C27A]">
            Notice: All legal status, prices, and sizes beyond established project descriptions are marked as <strong>Sample</strong>.
          </div>
        </div>

        {/* 3 Tilting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectTiltCard
              key={project.id}
              project={project}
              onViewDetails={(p) => {
                setSelectedDrawerProject(p);
                setIsDrawerOpen(true);
              }}
            />
          ))}
        </div>

        {/* Explore Listings (12 Sample Listings) */}
        <ExploreListingsSection onEnquire={(listing) => onOpenBooking(`${listing.title} (${listing.project})`)} />

        {/* Interactive Sample Payment Plan Calculator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-[#E3C27A]/30">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold flex items-center gap-1.5">
              <Calculator className="w-4 h-4" />
              <span>Investment Estimation Tool</span>
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#FAF7F1] mt-1">
              Sample Installment Plan Calculator
            </h3>
            <p className="text-xs text-[#FAF7F1]/70 mt-1">
              Sample illustrative calculator. Official verified schedules are issued by Marwa sales desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-2">
                Unit Value (PKR): <span className="text-[#E3C27A] font-mono">{(calcAmount / 100000).toFixed(1)} Lacs (Sample)</span>
              </label>
              <input
                type="range"
                min="3500000"
                max="25000000"
                step="500000"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Number(e.target.value))}
                className="w-full accent-[#E3C27A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/50 mt-1">
                <span>35 Lacs</span>
                <span>1.25 Cr</span>
                <span>2.50 Cr</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-2">
                Down Payment: <span className="text-[#E3C27A] font-mono">{downPaymentPct}% {downPaymentPct === 20 ? '(Marwa Tower One Option)' : ''}</span>
              </label>
              <input
                type="range"
                min="10"
                max="40"
                step="5"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-[#E3C27A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/50 mt-1">
                <span>10%</span>
                <span>20% (Tower One)</span>
                <span>40%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-2">
                Installment Period: <span className="text-[#E3C27A] font-mono">{tenureYears} Years (Sample)</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTenureYears(yr)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      tenureYears === yr
                        ? 'border-[#E3C27A] bg-[#E3C27A]/20 text-[#E3C27A]'
                        : 'border-white/10 bg-[#141414] text-white/70'
                    }`}
                  >
                    {yr} Yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
              <span className="text-[11px] text-white/50 block">Initial Down Payment (Sample)</span>
              <span className="text-xl font-serif font-bold text-[#FAF7F1]">
                PKR {calculatedDownPayment.toLocaleString()}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
              <span className="text-[11px] text-white/50 block">Quarterly Installment ({quarterlyInstallmentsCount} Quarters, Sample)</span>
              <span className="text-xl font-serif font-bold text-[#E3C27A]">
                PKR {estimatedQuarterly.toLocaleString()}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#141414] border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-white/50 block">Get Official Schedule</span>
                <span className="text-xs text-[#FAF7F1]/80">From Marwa sales desk</span>
              </div>
              <a
                href={`https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(
                  `Hello Marwa Real Estate, I calculated a unit value of PKR ${(calcAmount/100000).toFixed(1)} Lacs on your concept demo and would like official schedules.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold text-xs"
              >
                Send
              </a>
            </div>
          </div>
        </div>

        {/* Project Detail Drawer */}
        <ProjectDetailDrawer
          project={selectedDrawerProject}
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setSelectedDrawerProject(null);
          }}
          onBookVisit={(title) => onOpenBooking(title)}
        />

      </div>
    </div>
  );
}
