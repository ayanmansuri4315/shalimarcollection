import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, Calendar, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { SHOWROOM_INFO } from '../../data/showroomData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  portal: 'fabric' | 'perfumes';
  initialItemName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  portal,
  initialItemName = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(
    initialItemName
      ? 'Specific Item Cost'
      : portal === 'fabric'
      ? 'Fabric Cost Estimate'
      : 'Fragrance & Oud Cost Estimate'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState(
    initialItemName ? `Hello, I would like to book a cost estimate for ${initialItemName}.` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItemName) {
      setMessage(`Hello, I would like to enquire about the cost and availability for "${initialItemName}" from the ${portal === 'fabric' ? 'Fabric' : 'Perfumes & Oud'} Collection.`);
      setInquiryType('Specific Item Cost');
    }
  }, [initialItemName, portal]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Shalimar Collection — Book Cost Request*\n\n` +
      `*Department:* ${portal === 'fabric' ? 'Fabric Collection' : 'Perfumes & Oud'}\n` +
      `*Inquiry Type:* ${inquiryType}\n` +
      (initialItemName ? `*Item:* ${initialItemName}\n` : '') +
      `*Client Name:* ${name || 'Patron'}\n` +
      (phone ? `*Phone:* ${phone}\n` : '') +
      (preferredDate ? `*Preferred Date:* ${preferredDate}\n` : '') +
      (message ? `*Notes:* ${message}\n` : '') +
      `\n_Sent via Shalimar Collection Website_`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitted) return;

    setIsSubmitting(true);
    // Simulate swift one-time form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Clean form inputs
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setPreferredDate('');
    }, 450);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setPreferredDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs transition-opacity duration-300">
      <div 
        className="relative w-full max-w-lg bg-[#fcfaf7] border border-[#e4dcd2] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        id="enquiry-modal-container"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          id="close-enquiry-modal-btn"
          className="absolute top-4 right-4 p-2 text-[#73685e] hover:text-[#1f1a17] hover:bg-[#efe8df] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#eef7ee] text-[#2d6a4f] rounded-full flex items-center justify-center border border-[#b7e4c7] shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-[#1f1a17]">
              Request submitted successfully
            </h3>
            <p className="text-sm text-[#6c625a] leading-relaxed max-w-md mx-auto">
              Thank you for reaching out to Shalimar Collection. Our concierge team has logged your request and will contact you shortly with cost details.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SHOWROOM_INFO.primaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#241f1c] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3c342f] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call ({SHOWROOM_INFO.primaryPhone})</span>
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2.5 rounded-xl border border-[#d5c9bc] bg-[#fcfaf7] hover:bg-[#f2ece2] text-[#3c342f] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#8a6825] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Showroom Concierge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1f1a17]">
                Book Cost
              </h3>
              <p className="text-xs sm:text-sm text-[#73685e] mt-1">
                {portal === 'fabric'
                  ? 'Request a personalized fabric estimate, bespoke tailoring quotation, or swatch sample pricing.'
                  : 'Request private perfume pricing, custom gift coffret rates, or vintage oud sampling quotes.'}
              </p>
            </div>

            {/* Direct Message (WhatsApp) Quick Action Banner */}
            <div className="mb-5 p-3.5 rounded-xl bg-[#f2fcf4] border border-[#c3eed1] flex items-center justify-between gap-3">
              <div className="text-left">
                <span className="text-xs font-bold text-[#1f7a3f] uppercase tracking-wider block">
                  Instant Response
                </span>
                <span className="text-xs text-[#2b593a] font-medium">
                  Message showroom directly on WhatsApp
                </span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                id="modal-touch-to-message-btn"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Touch to Message</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                  Inquiry / Cost Type
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                >
                  {portal === 'fabric' ? (
                    <>
                      <option value="Fabric Cost Estimate">Fabric Roll & Meterage Cost Estimate</option>
                      <option value="Suiting & Shirting Drape">Suiting & Shirting Custom Tailoring Cost</option>
                      <option value="Wedding & Ethnic Textiles">Wedding & Ceremonial Fabric Packages</option>
                      <option value="Specific Item Cost">Specific Fabric Quotation</option>
                      <option value="General Showroom Query">General Showroom Query</option>
                    </>
                  ) : (
                    <>
                      <option value="Fragrance & Oud Cost Estimate">Fragrance & Pure Oud Quotation</option>
                      <option value="Vintage Dehn Al Oud">Vintage Dehn Al Oud Pricing</option>
                      <option value="Bespoke Gift Boxes">Custom Gifting & Corporate Box Rates</option>
                      <option value="Pure Attars & Oils">Pure Concentrated Attar Pricing</option>
                      <option value="Specific Item Cost">Specific Fragrance Quotation</option>
                    </>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mansoori"
                    className="w-full px-3.5 py-2 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] placeholder:text-[#a89d91] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9638202140"
                    className="w-full px-3.5 py-2 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] placeholder:text-[#a89d91] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] placeholder:text-[#a89d91] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                    Preferred Date (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#5c534b] uppercase tracking-wider mb-1">
                  Message / Particular Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the fabric type, meterage, quantity, or fragrance notes you are seeking..."
                  className="w-full px-3.5 py-2 bg-white border border-[#ded5c8] rounded-xl text-sm text-[#241f1c] placeholder:text-[#a89d91] focus:outline-hidden focus:border-[#b38e44] focus:ring-1 focus:ring-[#b38e44]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-enquiry-form-btn"
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#241f1c] text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#3d342f]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#c5a059]" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#c5a059]" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#8c8177] text-center pt-1">
                Showroom contact: <a href={`tel:${SHOWROOM_INFO.primaryPhone}`} className="underline text-[#5c534b] font-medium">{SHOWROOM_INFO.displayPrimaryPhone}</a> &middot; <a href={`tel:${SHOWROOM_INFO.secondaryPhone}`} className="underline text-[#5c534b] font-medium">{SHOWROOM_INFO.displaySecondaryPhone}</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

