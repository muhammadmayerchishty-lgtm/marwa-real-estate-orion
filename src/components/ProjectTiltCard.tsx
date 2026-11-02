import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProjectDetail } from '../data/projects';

interface ProjectTiltCardProps {
  project: ProjectDetail;
  onViewDetails: (project: ProjectDetail) => void;
}

export function ProjectTiltCard({ project, onViewDetails }: ProjectTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Framer Motion 3D tilt values with physics spring
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse offsets to max 6 degrees tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full flex flex-col justify-between rounded-3xl bg-[#1E1E1E] border border-[#E3C27A]/25 hover:border-[#E3C27A]/60 shadow-xl hover:shadow-2xl hover:shadow-[#A87B34]/15 transition-colors overflow-hidden group"
      >
        {/* CSS/SVG Gradient Cover (No Photos) */}
        <div 
          className="relative h-48 sm:h-52 w-full overflow-hidden flex flex-col justify-between p-5 border-b border-white/10"
          style={{
            background: `linear-gradient(135deg, ${project.gradientCover.from} 0%, ${project.gradientCover.via} 50%, ${project.gradientCover.to} 100%)`
          }}
        >
          {/* Stylized SVG Pattern Vectors */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {project.gradientCover.patternType === 'grid' && (
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`grid-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E3C27A" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                <line x1="0" y1="120" x2="400" y2="40" stroke="#E3C27A" strokeWidth="1.5" strokeDasharray="6 4" />
              </svg>
            )}

            {project.gradientCover.patternType === 'angles' && (
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,200 150,50 350,180 500,20" fill="none" stroke="#E3C27A" strokeWidth="1.2" />
                <polygon points="50,220 200,90 380,210" fill="none" stroke="#F5DE9C" strokeWidth="0.8" strokeDasharray="4 4" />
              </svg>
            )}

            {project.gradientCover.patternType === 'rings' && (
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70%" cy="40%" r="80" fill="none" stroke="#E3C27A" strokeWidth="1" />
                <circle cx="70%" cy="40%" r="130" fill="none" stroke="#E3C27A" strokeWidth="0.6" strokeDasharray="5 5" />
                <circle cx="70%" cy="40%" r="180" fill="none" stroke="#E3C27A" strokeWidth="0.4" />
              </svg>
            )}
          </div>

          {/* Top Status Chip */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md border border-[#E3C27A]/40 text-[#E3C27A]">
              {project.status}
            </span>
            <span className="text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded font-mono">
              3D Tilt View
            </span>
          </div>

          {/* Bottom Title on Gradient */}
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-[#E3C27A] font-semibold block mb-0.5">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F1] drop-shadow-md">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-start gap-2 text-xs text-[#FAF7F1]/75">
              <MapPin className="w-4 h-4 text-[#E3C27A] shrink-0 mt-0.5" />
              <span className="leading-snug">{project.location}</span>
            </div>

            {/* Highlights List */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#FAF7F1]/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E3C27A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action: "View details" button */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => onViewDetails(project)}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-gold-gradient hover:opacity-95 text-[#1A1A1A] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <span>View details</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
