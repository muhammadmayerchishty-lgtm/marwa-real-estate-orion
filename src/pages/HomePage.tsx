import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CalendarCheck
} from 'lucide-react';
import { businessData } from '../data/business';
import { projectsData, ProjectDetail, SampleListing } from '../data/projects';
import { AmbientHeroLight } from '../components/AmbientHeroLight';
import { Hero3DWrapper } from '../components/Hero3DWrapper';
import { ProjectTiltCard } from '../components/ProjectTiltCard';
import { ProjectDetailDrawer } from '../components/ProjectDetailDrawer';
import { ExploreListingsSection } from '../components/ExploreListingsSection';
import { WhyMarwaSection } from '../components/WhyMarwaSection';
import { BookVisitSection } from '../components/BookVisitSection';
import { ContactSection } from '../components/ContactSection';
import { RevealOnScroll } from '../components/RevealOnScroll';

interface HomePageProps {
  onOpenBooking: (projectTitle?: string) => void;
}

export function HomePage({ onOpenBooking }: HomePageProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [selectedDrawerProject, setSelectedDrawerProject] = useState<ProjectDetail | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [preselectedBookingProject, setPreselectedBookingProject] = useState<string>('Soul City Lahore');

  // Scroll-linked parallax using Framer Motion (useScroll)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const ambientLightY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textLayerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sceneLayerY = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const metricsLayerY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const handleOpenDrawer = (proj: ProjectDetail) => {
    setSelectedDrawerProject(proj);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedDrawerProject(null);
  };

  const handleEnquireListing = (listing: SampleListing) => {
    setPreselectedBookingProject(listing.project);
    onOpenBooking(`${listing.title} (${listing.project})`);
  };

  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F1] overflow-x-hidden w-full max-w-full">
      
      {/* HERO SECTION (Full Screen Charcoal, 3D plain Three.js scene, scroll parallax) */}
      <section 
        ref={heroRef}
        className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-[#1A1A1A] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden w-full"
      >
        {/* Parallax Layer 1: Ambient Golden Light */}
        <motion.div style={{ y: ambientLightY }} className="absolute inset-0 pointer-events-none">
          <AmbientHeroLight />
        </motion.div>

        {/* Mobile Background 3D Scene Layer (Behind text with reduced opacity) */}
        <motion.div 
          style={{ y: sceneLayerY }}
          className="lg:hidden absolute inset-0 z-0 opacity-30 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <div className="w-[120%] h-[120%] max-w-[650px] max-h-[650px]">
            <Hero3DWrapper />
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Parallax Layer 2: Left Content Column */}
            <motion.div 
              style={{ y: textLayerY }}
              className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left pt-4 lg:pt-0 max-w-full"
            >
              
              {/* Registered Developer Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#E3C27A]/30 text-xs tracking-wider uppercase text-[#E3C27A] mb-6 shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{businessData.tagline}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-fluid-hero font-serif font-bold text-[#FAF7F1] tracking-tight break-words"
              >
                Premium residential &amp; commercial projects across{' '}
                <span className="text-gold-gradient underline decoration-[#A87B34]/30 decoration-wavy underline-offset-8">
                  Pakistan.
                </span>
              </motion.h1>

              {/* Subline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-sm sm:text-base md:text-xl text-[#FAF7F1]/90 font-sans tracking-wide font-medium break-words"
              >
                Soul City Lahore <span className="text-[#E3C27A] font-bold">·</span> Marwa Tower One <span className="text-[#E3C27A] font-bold">·</span> Marwa Signature
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-3 text-xs sm:text-sm text-[#FAF7F1]/70 max-w-xl leading-relaxed"
              >
                Distinguished real estate development firm in Lahore providing master-planned communities, high-yield commercial hubs, and transparent property ownership in Sector C DHA Phase 6 and Jail Road.
              </motion.p>

              {/* Action Buttons: "Explore Projects" & "Book a Visit" (Mobile >= 44px min-height) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                <a
                  href="#projects-section"
                  className="px-8 py-3.5 min-h-[48px] rounded-full bg-gold-gradient hover:opacity-95 text-[#1A1A1A] font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-[#A87B34]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="#book-a-visit"
                  className="px-8 py-3.5 min-h-[48px] rounded-full border border-[#E3C27A]/50 hover:border-[#E3C27A] bg-[#222222]/80 hover:bg-[#2A2A2A] text-[#FAF7F1] font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all shadow-md text-center"
                >
                  <CalendarCheck className="w-4 h-4 text-[#E3C27A] shrink-0" />
                  <span>Book a Visit</span>
                </a>
              </motion.div>

            </motion.div>

            {/* Parallax Layer 3: Desktop Right Column 3D Scene Viewport */}
            <motion.div 
              style={{ y: sceneLayerY }}
              className="hidden lg:flex lg:col-span-6 xl:col-span-6 relative w-full h-[520px] xl:h-[580px] items-center justify-center"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden border border-[#E3C27A]/15 bg-gradient-to-b from-[#1C1C1C]/40 to-[#141414]/60 backdrop-blur-sm shadow-2xl">
                <Hero3DWrapper />
                <div className="absolute bottom-3 right-4 pointer-events-none text-[10px] font-mono tracking-widest uppercase text-[#E3C27A]/60 bg-[#161616]/70 px-2.5 py-1 rounded-md border border-[#E3C27A]/15 backdrop-blur-sm">
                  Interactive 3D Skyline · Drag to Rotate
                </div>
              </div>
            </motion.div>

          </div>

          {/* Parallax Layer 4: Full-Width 4-Column Metric Strip */}
          <motion.div
            style={{ y: metricsLayerY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left w-full"
          >
            <div className="bg-[#1C1C1C]/60 p-4 rounded-xl border border-white/5">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#E3C27A]">Registered</div>
              <div className="text-xs text-[#FAF7F1]/60">Developer Standards</div>
            </div>
            <div className="bg-[#1C1C1C]/60 p-4 rounded-xl border border-white/5">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F1]">2 Prime</div>
              <div className="text-xs text-[#FAF7F1]/60">Lahore Office Locations</div>
            </div>
            <div className="bg-[#1C1C1C]/60 p-4 rounded-xl border border-white/5">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#E3C27A]">3 Flagship</div>
              <div className="text-xs text-[#FAF7F1]/60">Major Developments</div>
            </div>
            <div className="bg-[#1C1C1C]/60 p-4 rounded-xl border border-white/5">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F1]">8:00 PM</div>
              <div className="text-xs text-[#FAF7F1]/60">Daily Desk (to be confirmed)</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 1. PROJECTS SECTION WITH REVEAL ON SCROLL */}
      <RevealOnScroll className="w-full">
        <section id="projects-section" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E3C27A]/20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242424] border border-[#E3C27A]/30 text-xs font-semibold text-[#E3C27A] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Development Portfolio</span>
            </div>
            <h2 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1]">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
              Hover over cards for 3D perspective inspection. Click &ldquo;View details&rdquo; to review key facts, sample amenities, and sample installment structures.
            </p>
          </div>

          {/* 3 Tilting Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {projectsData.map((project) => (
              <ProjectTiltCard
                key={project.id}
                project={project}
                onViewDetails={handleOpenDrawer}
              />
            ))}
          </div>

        </section>
      </RevealOnScroll>

      {/* 2. EXPLORE LISTINGS SECTION (Reveal on scroll) */}
      <RevealOnScroll className="w-full">
        <ExploreListingsSection onEnquire={handleEnquireListing} />
      </RevealOnScroll>

      {/* 3. WHY MARWA SECTION (Reveal on scroll) */}
      <RevealOnScroll className="w-full">
        <WhyMarwaSection />
      </RevealOnScroll>

      {/* 4. BOOK A VISIT SECTION (Reveal on scroll) */}
      <RevealOnScroll className="w-full">
        <BookVisitSection preselectedProject={preselectedBookingProject} />
      </RevealOnScroll>

      {/* 5. CONTACT SECTION (Reveal on scroll) */}
      <RevealOnScroll className="w-full">
        <ContactSection />
      </RevealOnScroll>

      {/* Detail Drawer Component */}
      <ProjectDetailDrawer
        project={selectedDrawerProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onBookVisit={(title) => {
          setPreselectedBookingProject(title);
          onOpenBooking(title);
        }}
      />

    </div>
  );
}
