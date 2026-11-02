/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExplorePage } from './pages/ExplorePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProject, setBookingProject] = useState<string | undefined>(undefined);

  const handleOpenBooking = (projectTitle?: string) => {
    setBookingProject(projectTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingProject(undefined);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#1A1A1A] text-[#FAF7F1] flex flex-col font-sans selection:bg-[#A87B34]/30 selection:text-[#E3C27A]">
        
        {/* Sticky Glass Bar with Logo Ivory Chip and WhatsApp Us Pill */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/projects" element={<ProjectsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/explore" element={<ExplorePage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Footer with Logo Chip, Offices, Hours & ORION IT SOLUTIONS Demo Note */}
        <Footer />

        {/* Floating WhatsApp Action Button on Every Page */}
        <FloatingWhatsApp />

        {/* Interactive Site Visit / Presentation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          defaultProject={bookingProject}
        />

      </div>
    </HashRouter>
  );
}
