import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  ExternalLink,
  CheckCircle,
  Building
} from 'lucide-react';
import { businessData, featuredProjects } from '../data/business';

export function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState<'HeadOffice' | 'Sales'>('HeadOffice');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState(featuredProjects[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const officeName = selectedOffice === 'HeadOffice' 
      ? businessData.offices.headOffice.title 
      : businessData.offices.sales.title;

    const contactPayload = {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      fullName,
      phone,
      email,
      project,
      office: officeName,
      message,
    };

    try {
      const existing = localStorage.getItem('marwa_contact_inquiries');
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.push(contactPayload);
      localStorage.setItem('marwa_contact_inquiries', JSON.stringify(parsed));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*Website Inquiry - Marwa Real Estate*\n` +
      `*Name:* ${fullName || 'Client'}\n` +
      `*Contact:* ${phone || 'Website visitor'}\n` +
      `*Project:* ${project}\n` +
      `*Venue Preference:* ${selectedOffice === 'HeadOffice' ? 'Head Office DHA Phase 6' : 'Sales Office Jail Road'}\n` +
      (message ? `*Message:* ${message}` : '');

    const url = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F1] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#E3C27A] font-semibold">
            Inquiries &amp; Consultations
          </span>
          <h1 className="text-fluid-h2 font-serif font-bold text-[#FAF7F1] mt-2">
            Connect with Marwa Real Estate &amp; Developers
          </h1>
          <p className="text-sm text-[#FAF7F1]/70 mt-3 leading-relaxed">
            Our real estate portfolio specialists are at your disposal at our DHA Phase 6 Head Office and Jail Road Sales Office in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Office Hubs (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Hotline Card */}
            <div className="p-6 rounded-2xl bg-[#202020] border border-[#E3C27A]/30">
              <span className="text-[11px] uppercase tracking-wider text-[#E3C27A] font-semibold block mb-1">
                Direct Client Hotline
              </span>
              <a
                href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                className="text-2xl font-mono font-bold text-[#FAF7F1] hover:text-[#E3C27A] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-6 h-6 text-[#E3C27A]" />
                <span>{businessData.phone}</span>
              </a>
              <p className="text-xs text-[#FAF7F1]/60 mt-2">
                Available daily for plot booking, corporate suites, and file verification.
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`https://wa.me/${businessData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`mailto:${businessData.email}`}
                  className="flex-1 py-2 rounded-full border border-white/20 text-[#FAF7F1] text-xs flex items-center justify-center gap-1.5 hover:bg-white/5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E3C27A]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Additional Instagram Sales Lines Card */}
            <div className="p-6 rounded-2xl bg-[#202020] border border-white/10 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#E3C27A] font-semibold block">
                Additional Sales Lines (Instagram Desk)
              </span>
              <div className="space-y-3 text-xs">
                {businessData.extraSalesLines.map((line) => (
                  <div key={line.number} className="flex items-center justify-between p-3 rounded-lg bg-[#161616] border border-white/5">
                    <div>
                      <div className="font-mono text-sm font-semibold text-[#FAF7F1]">{line.number}</div>
                      <div className="text-[10px] text-white/50">{line.note}</div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${line.number.replace(/\s+/g, '')}`}
                        className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80 text-[11px]"
                      >
                        Call
                      </a>
                      <a
                        href={`https://wa.me/${line.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-[#E3C27A]/20 text-[#E3C27A] text-[11px] font-semibold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offices & Working Hours */}
            <div className="p-6 rounded-2xl bg-[#202020] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#E3C27A] font-semibold">
                  Working Hours &amp; Locations
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#E3C27A]" />
                  <span>{businessData.hours}</span>
                </span>
              </div>

              {/* Head Office */}
              <div className="p-3.5 rounded-xl bg-[#161616] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-[#FAF7F1]">{businessData.offices.headOffice.title}</div>
                <div className="text-xs text-[#FAF7F1]/70">{businessData.offices.headOffice.address}</div>
                <a
                  href={businessData.offices.headOffice.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#E3C27A] hover:underline pt-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Sales Office */}
              <div className="p-3.5 rounded-xl bg-[#161616] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-[#FAF7F1]">{businessData.offices.sales.title}</div>
                <div className="text-xs text-[#FAF7F1]/70">{businessData.offices.sales.address}</div>
                <a
                  href={businessData.offices.sales.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#E3C27A] hover:underline pt-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-4 text-xs">
                <a
                  href={businessData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#E3C27A] flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Facebook Profile</span>
                </a>
                <a
                  href={businessData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#E3C27A] flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Instagram Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Consultation Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#202020] rounded-3xl border border-[#E3C27A]/25 p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-[#E3C27A]/20 text-[#E3C27A] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#FAF7F1]">
                  Message Successfully Dispatched
                </h3>
                <p className="text-sm text-[#FAF7F1]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#E3C27A] font-semibold">{fullName}</span>. Your inquiry regarding <span className="text-[#FAF7F1] font-semibold">{project}</span> has been documented. Our senior sales advisor will respond promptly.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-3 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-3 rounded-full border border-white/20 text-xs text-white/80 hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#E3C27A] font-semibold">
                    Schedule or Inquire
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#FAF7F1] mt-1">
                    Send Direct Property Inquiry
                  </h2>
                  <p className="text-xs text-[#FAF7F1]/70 mt-1">
                    Receive verified unit availability, payment brochures, and boardroom appointment slots.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Venue Preference */}
                  <div>
                    <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5">
                      Preferred Office Venue
                    </label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <button
                        type="button"
                        onClick={() => setSelectedOffice('HeadOffice')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedOffice === 'HeadOffice'
                            ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                            : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                        }`}
                      >
                        <div className="font-semibold text-xs">Head Office (Soul City)</div>
                        <div className="text-[10px] text-white/50">Sector C DHA Phase 6</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedOffice('Sales')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedOffice === 'Sales'
                            ? 'border-[#E3C27A] bg-[#E3C27A]/15 text-[#E3C27A] font-semibold'
                            : 'border-white/10 bg-[#141414] text-[#FAF7F1]/70 hover:border-white/20'
                        }`}
                      >
                        <div className="font-semibold text-xs">Sales Office</div>
                        <div className="text-[10px] text-white/50">Lucky Center, Jail Road</div>
                      </button>
                    </div>
                  </div>

                  {/* Project */}
                  <div>
                    <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1.5">
                      Interested Development
                    </label>
                    <select
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none"
                    >
                      {featuredProjects.map((p) => (
                        <option key={p.id} value={p.title} className="bg-[#1C1C1C]">
                          {p.title} ({p.category} - {p.location.split(',')[0]})
                        </option>
                      ))}
                      <option value="General Property Consultation" className="bg-[#1C1C1C]">
                        General Property Consultation (Lahore)
                      </option>
                    </select>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asad Ullah Khan"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                        WhatsApp / Contact Number *
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

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#FAF7F1]/80 mb-1">
                      Inquiry Details or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please share specific requirements, plot sizes (5, 10 Marla, 1 Kanal) or commercial floor requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF7F1] focus:border-[#E3C27A] focus:outline-none placeholder:text-white/30"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gold-gradient text-[#1A1A1A] font-bold text-sm shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
