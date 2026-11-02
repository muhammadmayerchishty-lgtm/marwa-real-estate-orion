import { useState } from 'react';
import { Calendar, Clock, MapPin, Building, MessageCircle, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business';

interface BookVisitSectionProps {
  preselectedProject?: string;
}

export function BookVisitSection({ preselectedProject }: BookVisitSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState(preselectedProject || 'Soul City Lahore');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [preferredOffice, setPreferredOffice] = useState<'Sales' | 'HeadOffice'>('HeadOffice');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !preferredDate) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');

    const bookingPayload = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      project,
      office: preferredOffice === 'HeadOffice' ? businessData.offices.headOffice.title : businessData.offices.sales.title,
      preferredDate,
      message: message.trim()
    };

    try {
      const stored = localStorage.getItem('marwa_visit_requests');
      const list = stored ? JSON.parse(stored) : [];
      list.push(bookingPayload);
      localStorage.setItem('marwa_visit_requests', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setIsSuccess(true);
  };

  const handleSendOnWhatsApp = () => {
    const officeLabel = preferredOffice === 'HeadOffice' 
      ? businessData.offices.headOffice.title 
      : businessData.offices.sales.title;

    const text = `*Site Visit Booking Request - Marwa Real Estate*\n` +
      `*Name:* ${name || 'Valued Client'}\n` +
      `*Phone:* ${phone || 'Provided via form'}\n` +
      `*Project Interest:* ${project}\n` +
      `*Preferred Office:* ${officeLabel}\n` +
      `*Preferred Date:* ${preferredDate || 'Earliest slot'}\n` +
      (message ? `*Notes:* ${message}` : '');

    const url = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book-a-visit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#E3C27A]/20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold">
          VIP In-Person Consultation
        </span>
        <h2 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1] mt-2">
          Book a Visit
        </h2>
        <p className="text-xs sm:text-sm text-[#FAF7F1]/70 mt-2 leading-relaxed">
          Schedule a private boardroom presentation or physical site tour at our DHA Phase 6 Head Office or Jail Road Sales Center.
        </p>
      </div>

      <div className="bg-[#1C1C1C] rounded-3xl border border-[#E3C27A]/30 p-6 sm:p-10 shadow-2xl">
        {isSuccess ? (
          <div className="text-center py-12 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#E3C27A]/20 text-[#E3C27A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-[#FAF7F1]">
              Appointment Request Logged
            </h3>

            {/* Required exact success state phrase */}
            <div className="p-3.5 rounded-xl bg-[#24211A] border border-[#E3C27A]/40 text-xs text-[#E3C27A] font-semibold">
              Demo: request stored in this browser only
            </div>

            <p className="text-xs text-[#FAF7F1]/75 leading-relaxed">
              Thank you, <strong className="text-[#FAF7F1]">{name}</strong>. Your requested date for <span className="text-[#E3C27A]">{project}</span> has been noted. To dispatch these details instantly to Marwa's senior sales executive on WhatsApp, click below:
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              {/* Required "Also send on WhatsApp" button using business.ts */}
              <button
                onClick={handleSendOnWhatsApp}
                className="py-3 px-6 rounded-full bg-gold-gradient text-[#1A1A1A] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Also send on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="py-3 px-5 rounded-full border border-white/20 text-xs text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                Schedule Another Visit
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs text-center">
                {errorMsg}
              </div>
            )}

            {/* Office Choice */}
            <div>
              <label className="block text-xs font-semibold text-[#FAF7F1]/80 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E3C27A]" />
                <span>Choose Office Venue</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setPreferredOffice('HeadOffice')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    preferredOffice === 'HeadOffice'
                      ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                      : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                  }`}
                >
                  <div className="font-semibold">{businessData.offices.headOffice.title}</div>
                  <div className="text-[11px] text-white/50">{businessData.offices.headOffice.address}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferredOffice('Sales')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    preferredOffice === 'Sales'
                      ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                      : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                  }`}
                >
                  <div className="font-semibold">{businessData.offices.sales.title}</div>
                  <div className="text-[11px] text-white/50">{businessData.offices.sales.address}</div>
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Malik Muhammad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 312 7453245"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>Project Interest</span>
                </label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                >
                  <option value="Soul City Lahore">Soul City Lahore (Jia Bagga / Halloki)</option>
                  <option value="Marwa Tower One">Marwa Tower One (Johar Town Expo Center)</option>
                  <option value="Marwa Signature">Marwa Signature (Details to be confirmed)</option>
                  <option value="General Portfolio Consultation">General Portfolio Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>Preferred Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5">
                Message / Specific Property Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Mention desired plot size, commercial requirements, or investment horizon..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gold-gradient hover:opacity-95 text-[#1A1A1A] font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Visit Request</span>
              </button>
            </div>

          </form>
        )}
      </div>

    </section>
  );
}
