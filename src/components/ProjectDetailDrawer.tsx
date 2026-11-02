import { useEffect } from 'react';
import { X, MessageCircle, CalendarCheck, MapPin, CheckCircle, ShieldAlert, FileText, ArrowRight } from 'lucide-react';
import { ProjectDetail } from '../data/projects';
import { businessData } from '../data/business';

interface ProjectDetailDrawerProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: (projectTitle: string) => void;
}

export function ProjectDetailDrawer({ project, isOpen, onClose, onBookVisit }: ProjectDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum Marwa Developers, I would like to inquire about ${project.title} (${project.location}).`
  );
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#1C1C1C] border-l border-[#E3C27A]/30 text-[#FAF7F1] shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* Top Bar */}
          <div>
            <div className="sticky top-0 z-10 bg-[#1C1C1C]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                  Project Details
                </span>
                <span className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                  {project.status}
                </span>
              </div>
              <button
                onClick={onClose}
                className="min-h-[44px] min-w-[44px] p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Drawer Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Header Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F1]">
                  {project.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#FAF7F1]/70 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E3C27A] shrink-0" />
                  <span>{project.location}</span>
                </div>
                <p className="text-sm text-[#E3C27A] font-medium mt-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#FAF7F1]/80 leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Mandatory Legal & Approval Note */}
              <div className="p-4 rounded-xl bg-[#24201A] border border-[#E3C27A]/40 flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#E3C27A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#E3C27A] uppercase tracking-wider">
                    Documentation Notice
                  </div>
                  <div className="text-xs font-semibold text-[#FAF7F1] mt-0.5">
                    {project.legalNote}
                  </div>
                  <p className="text-[11px] text-[#FAF7F1]/60 mt-1">
                    All legal status, registry documents, approvals, and official master plans are provided upon direct appointment with Marwa Real Estate &amp; Developers.
                  </p>
                </div>
              </div>

              {/* Key Facts */}
              <div>
                <h3 className="text-sm font-serif font-bold text-[#FAF7F1] uppercase tracking-wider mb-3">
                  Key Facts &amp; Overview
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFacts.map((fact) => (
                    <div key={fact.label} className="p-3 rounded-lg bg-[#141414] border border-white/5">
                      <div className="text-[10px] uppercase tracking-wider text-white/50">{fact.label}</div>
                      <div className="text-xs font-semibold text-[#FAF7F1] mt-0.5">{fact.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Amenities List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-serif font-bold text-[#FAF7F1] uppercase tracking-wider">
                    Amenities &amp; Features
                  </h3>
                  <span className="text-[11px] text-[#E3C27A] font-mono">(Sample)</span>
                </div>
                <div className="space-y-2">
                  {project.sampleAmenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#FAF7F1]/80 p-2.5 rounded-lg bg-[#161616]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E3C27A] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample, to be confirmed Payment-Plan Table */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-serif font-bold text-[#FAF7F1] uppercase tracking-wider">
                    Payment Plan Schedule
                  </h3>
                  <span className="text-[11px] text-[#E3C27A] font-mono">Sample, to be confirmed</span>
                </div>
                <p className="text-[11px] text-[#FAF7F1]/60 mb-3">
                  The schedule below is for concept illustrative purposes. Official schedules are issued by Marwa sales desks.
                </p>

                <div className="rounded-xl border border-white/10 overflow-hidden bg-[#141414]">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-[#242424] text-[#E3C27A] text-[11px] uppercase tracking-wider border-b border-white/10">
                        <th className="py-2.5 px-3">Milestone</th>
                        <th className="py-2.5 px-3">Share</th>
                        <th className="py-2.5 px-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[#FAF7F1]/80">
                      {project.samplePaymentPlan.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 px-3 font-medium">{row.milestone}</td>
                          <td className="py-2.5 px-3 font-mono text-[#E3C27A]">{row.percentage}</td>
                          <td className="py-2.5 px-3 font-mono">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          {/* Sticky Drawer Action Footer: WhatsApp & Book a Visit */}
          <div className="sticky bottom-0 bg-[#141414] border-t border-white/10 p-5 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full bg-gold-gradient text-[#1A1A1A] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookVisit(project.title);
              }}
              className="flex-1 py-3 px-4 rounded-full border border-[#E3C27A]/50 hover:border-[#E3C27A] text-[#FAF7F1] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-[#E3C27A]" />
              <span>Book a Visit</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
