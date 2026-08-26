import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Calendar, Mail, Instagram } from 'lucide-react';
import { SHOWROOM_INFO, SHOWROOM_IMAGES_FABRIC, SHOWROOM_IMAGES_PERFUME } from '../../data/showroomData';
import { PortalType } from '../../types';

interface ShowroomSectionProps {
  currentPortal: PortalType;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  currentPortal,
}) => {
  const images = currentPortal === 'fabric' ? SHOWROOM_IMAGES_FABRIC : SHOWROOM_IMAGES_PERFUME;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*Hello Shalimar Collection Showroom*\n` +
      `I would like to inquire about visiting your showroom at Siddhpur for a ${currentPortal === 'fabric' ? 'Fabric' : 'Fragrance & Oud'} consultation.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#fbf9f5]" id="showroom-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Showroom Destination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Visit Our Showroom
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            Experience our curated collections in an atmosphere of serene hospitality, bespoke consultation tables, and expert guidance.
          </p>
        </div>

        {/* Main Grid: Details + Showroom Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#fcfaf7] border border-[#e8ded1] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8a6825] font-semibold block">
                Flagship Destination
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1f1a17] mt-1">
                {SHOWROOM_INFO.name}
              </h3>
              <p className="text-xs text-[#73685e] mt-1">
                {SHOWROOM_INFO.tagline}
              </p>
            </div>

            {/* Address */}
            <div className="space-y-2 pt-2 border-t border-[#f0e6d8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9b7832] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#4a413a]">
                  <p className="font-semibold text-[#1f1a17]">{SHOWROOM_INFO.fullAddress}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2 pt-2 border-t border-[#f0e6d8]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#9b7832] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#4a413a] space-y-1">
                  <p className="font-semibold text-[#1f1a17]">Opening Hours</p>
                  <p className="text-xs text-[#5c5249] flex items-center justify-between">
                    <span className="font-medium text-[#3c342f]">Monday – Saturday:</span>
                    <span>9:00 AM – 8:00 PM</span>
                  </p>
                  <p className="text-xs text-[#8a6825] font-medium flex items-center justify-between bg-[#f8f2e9] px-2 py-1 rounded-md">
                    <span>Sunday:</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Contact Lines */}
            <div className="space-y-2.5 pt-2 border-t border-[#f0e6d8] text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#73685e]">Primary Number:</span>
                <a href={`tel:${SHOWROOM_INFO.primaryPhone}`} className="font-semibold text-[#1f1a17] hover:text-[#8a6825] transition-colors">
                  {SHOWROOM_INFO.displayPrimaryPhone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#73685e]">Secondary Number:</span>
                <a href={`tel:${SHOWROOM_INFO.secondaryPhone}`} className="font-medium text-[#1f1a17] hover:text-[#8a6825] transition-colors">
                  {SHOWROOM_INFO.displaySecondaryPhone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#73685e]">Email Concierge:</span>
                <a href={`mailto:${SHOWROOM_INFO.email}`} className="font-medium text-[#1f1a17] hover:text-[#8a6825] transition-colors">
                  {SHOWROOM_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#73685e]">Instagram:</span>
                <a href={SHOWROOM_INFO.instagramUrl} target="_blank" rel="noreferrer" className="font-medium text-[#8a6825] hover:underline">
                  {SHOWROOM_INFO.instagramHandle}
                </a>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-[#f0e6d8] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${SHOWROOM_INFO.primaryPhone}`}
                id="showroom-call-us-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call ({SHOWROOM_INFO.primaryPhone})</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsApp}
                id="showroom-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Touch to Message</span>
              </button>

              <a
                href={SHOWROOM_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                id="showroom-directions-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#d8c8b4] bg-[#f5ede2] hover:bg-[#ebdcc8] text-[#241f1c] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#8a6825]" />
                <span>Get Directions</span>
              </a>

              <a
                href={SHOWROOM_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="showroom-instagram-action-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#d8c8b4] bg-[#f5ede2] hover:bg-[#ebdcc8] text-[#241f1c] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#8a6825]" />
                <span>Instagram</span>
              </a>
            </div>

          </div>

          {/* Right Showroom Architecture Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#e2d5c3] bg-[#eae0d1]">
              <img
                src={images[0].url}
                alt={images[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.slice(1, 3).map((img, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-xs border border-[#e2d5c3] bg-[#eae0d1]"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 flex items-end">
                    <span className="text-white text-xs font-serif font-medium drop-shadow-xs">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
