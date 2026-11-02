import { useState } from 'react';
import { X, Calendar, Clock, MapPin, Building, MessageCircle, CheckCircle } from 'lucide-react';
import { businessData, featuredProjects } from '../data/business';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export function BookingModal({ isOpen, onClose, defaultProject }: BookingModalProps) {
  const [selectedProject, setSelectedProject] = useState(defaultProject || featuredProjects[0].title);
  const [selectedOffice, setSelectedOffice] = useState<'Sales' | 'HeadOffice'>('HeadOffice');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('14:00');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const officeName = selectedOffice === 'HeadOffice' 
      ? businessData.offices.headOffice.title 
      : businessData.offices.sales.title;

    const bookingRecord = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      fullName,
      phone,
      project: selectedProject,
      office: officeName,
      preferredDate,
      preferredTime,
      notes,
    };

    try {
      const existing = localStorage.getItem('marwa_visit_bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.push(bookingRecord);
      localStorage.setItem('marwa_visit_bookings', JSON.stringify(parsed));
    } catch (err) {
      console.warn('Unable to persist booking to localStorage:', err);
    }

    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const officeName = selectedOffice === 'HeadOffice' 
      ? businessData.offices.headOffice.title 
      : businessData.offices.sales.title;

    const text = `*Site Visit Booking Request - Marwa Real Estate*\n` +
      `*Client:* ${fullName || 'Valued Investor'}\n` +
      `*Contact:* ${phone || 'Provided via Web'}\n` +
      `*Project:* ${selectedProject}\n` +
      `*Office Venue:* ${officeName}\n` +
      `*Date:* ${preferredDate || 'Earliest Available'}\n` +
      `*Time:* ${preferredTime}\n` +
      (notes ? `*Notes:* ${notes}` : '');

    const url = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-[#1C1C1C] rounded-2xl border border-[#E3C27A]/30 p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FAF7F1]/60 hover:text-[#FAF7F1] min-h-[44px] min-w-[44px] p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E3C27A]/20 text-[#E3C27A] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#FAF7F1] font-bold">
              Visit Request Received
            </h3>
            <p className="text-sm text-[#FAF7F1]/70 max-w-md mx-auto">
              Thank you, <span className="text-[#E3C27A] font-semibold">{fullName || 'Valued Client'}</span>. Your appointment details have been logged. To confirm immediately with our client executive, click below to send directly to WhatsApp.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendToWhatsApp}
                className="bg-gold-gradient text-[#1A1A1A] font-semibold text-sm px-6 py-3 min-h-[48px] rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:brightness-105 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 min-h-[44px] rounded-full border border-white/20 text-[#FAF7F1]/80 hover:text-white text-sm flex items-center justify-center"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                VIP Private Consultation
              </span>
              <h3 className="text-2xl font-serif text-[#FAF7F1] font-bold mt-1">
                Book a Visit or Presentation
              </h3>
              <p className="text-xs text-[#FAF7F1]/70 mt-1">
                Meet our senior development team at DHA Phase 6 Head Office or Jail Road Sales Center.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Project Selection */}
              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>Select Project of Interest</span>
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                >
                  {featuredProjects.map((p) => (
                    <option key={p.id} value={p.title} className="bg-[#1C1C1C]">
                      {p.title} ({p.location.split(',')[0]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Office Venue Selection */}
              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>Meeting Venue</span>
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedOffice('HeadOffice')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      selectedOffice === 'HeadOffice'
                        ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                        : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium text-xs">Head Office (Soul City)</div>
                    <div className="text-[10px] opacity-70 truncate">Sector C DHA Phase 6</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedOffice('Sales')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      selectedOffice === 'Sales'
                        ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                        : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium text-xs">Sales Office</div>
                    <div className="text-[10px] opacity-70 truncate">Lucky Center, Jail Road</div>
                  </button>
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-lg px-3 py-2 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-lg px-3 py-2 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E3C27A]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-lg px-3 py-2 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#E3C27A]" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-lg px-3 py-2 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                  >
                    <option value="11:00 AM">11:00 AM (Morning Session)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:30 PM">04:30 PM (Evening)</option>
                    <option value="07:00 PM">07:00 PM (Before 8 PM Close)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                  Specific Requirements or Unit Preference
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in 10 Marla plot or commercial floor details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-lg px-3 py-2 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3 rounded-full bg-gold-gradient hover:opacity-95 text-[#1A1A1A] font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Schedule Appointment</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
