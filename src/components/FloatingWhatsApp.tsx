import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { PortalType } from '../types';

interface FloatingWhatsAppProps {
  currentPortal?: PortalType;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentPortal = 'fabric' }) => {
  const handleClick = () => {
    const defaultText = currentPortal === 'fabric'
      ? 'Hello Shalimar Collection, I would like to inquire about your fabric collections at the Siddhpur showroom.'
      : 'Hello Shalimar Collection, I would like to inquire about your perfumes and oud collection at the Siddhpur showroom.';
    const encoded = encodeURIComponent(defaultText);
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <button
        type="button"
        onClick={handleClick}
        id="fixed-floating-whatsapp-btn"
        aria-label="Chat directly with Shalimar Collection on WhatsApp (9638202140)"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:bg-[#20ba5a] active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white transform group-hover:scale-105 transition-transform"
          aria-hidden="true"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A11.5 11.5 0 1 1 27.5 16 11.5 11.5 0 0 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.5.2-.4.3-.6 0-.4 0-.6-.8-2-.9-2.7c-.2-.7-.5-.6-.8-.6h-.6a1.3 1.3 0 0 0-1 .5 4.1 4.1 0 0 0-1.3 3.1 7.2 7.2 0 0 0 1.5 3.8 16.5 16.5 0 0 0 6.3 5.6 21.6 21.6 0 0 0 2.1.8 5.1 5.1 0 0 0 2.3.1 3.8 3.8 0 0 0 2.5-1.7 3.1 3.1 0 0 0 .2-1.8c-.1-.2-.4-.3-.7-.5z" />
        </svg>

        {/* Small Online Status Indicator Ring */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />

        {/* Subtle Tooltip on Desktop */}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-lg bg-[#1f1a17] text-white text-xs font-medium whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#1f1a17]" />
        </span>
      </button>
    </aside>
  );
};
