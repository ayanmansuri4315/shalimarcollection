import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Droplet, Layers, Sparkles, Instagram, ArrowUp } from 'lucide-react';
import { SHOWROOM_INFO } from '../../data/showroomData';
import { PortalType } from '../../types';

interface FooterProps {
  currentPortal: PortalType;
  onSwitchPortal: (portal: PortalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPortal,
  onSwitchPortal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fabricCollections = [
    'Italian & English Suiting',
    'Egyptian & Giza Shirting',
    'Pure Organic Cottons',
    'European Flax Linen',
    'Cashmere & Silk Blends',
    'Ceremonial & Wedding Jacquards',
    'Traditional Ethnic Weaves',
  ];

  const perfumeCollections = [
    'Shalimar Imperial Extrait',
    'Vintage Dehn Al Oud',
    'Pure Concentrated Attars',
    'Royal Scented Bakhoor',
    'Bespoke Gifting Coffrets',
    'Amber & Musk Formulations',
    'Private Oud Scenting Bar',
  ];

  const currentCategories = currentPortal === 'fabric' ? fabricCollections : perfumeCollections;

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Shalimar Collection, I would like to inquire about showroom visiting hours and appointments.');
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#1f1a17] text-[#ded3c5] pt-16 pb-12 border-t border-[#38302b]" id="contact-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#362e29]">
          
          {/* Column 1: Brand & Department Switch (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="block font-display text-2xl font-bold tracking-[0.2em] text-white">
                SHALIMAR
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-[#c5a059] uppercase -mt-0.5">
                COLLECTION
              </span>
            </div>

            <p className="text-xs text-[#bbb0a4] leading-relaxed font-light">
              A premier luxury destination bringing together master-milled bespoke fabrics and sacred, aged agarwoods & Haute Parfumerie under one timeless house in Siddhpur, Patan.
            </p>

            {/* Department Switcher Card */}
            <div className="p-4 rounded-xl bg-[#2a231f] border border-[#443a34] space-y-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#c5a059] block">
                Explore Other Department
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white font-medium">
                  {currentPortal === 'fabric' ? 'Perfumes & Oud Lounge' : 'Fabric Atelier & Weaves'}
                </span>
                <button
                  onClick={() => onSwitchPortal(currentPortal === 'fabric' ? 'perfumes' : 'fabric')}
                  id="footer-switch-portal-btn"
                  className="px-3.5 py-1.5 rounded-xl bg-[#c5a059] text-[#1a1614] text-xs font-semibold hover:bg-[#b38e44] transition-colors flex items-center gap-1"
                >
                  {currentPortal === 'fabric' ? <Droplet className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                  <span>{currentPortal === 'fabric' ? 'Switch to Oud' : 'Switch to Fabric'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Department Collections (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-medium text-lg text-white">
              {currentPortal === 'fabric' ? 'Fabric Collections' : 'Fragrance Collections'}
            </h4>
            <ul className="space-y-2 text-xs text-[#bbb0a4]">
              {currentCategories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={currentPortal === 'fabric' ? '#fabric-collections' : '#perfume-collections'}
                    className="hover:text-[#c5a059] transition-colors text-left block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Showroom Hours (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-medium text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#bbb0a4]">
              <li>
                <a href={currentPortal === 'fabric' ? '#fabric-hero' : '#perfume-hero'} className="hover:text-[#c5a059] transition-colors">
                  Showroom Home
                </a>
              </li>
              <li>
                <a href="#showroom-section" className="hover:text-[#c5a059] transition-colors">
                  Visit Showroom
                </a>
              </li>
              <li>
                <a href="#google-map-section" className="hover:text-[#c5a059] transition-colors">
                  Find On Map
                </a>
              </li>
              <li>
                <a href="#customer-reviews" className="hover:text-[#c5a059] transition-colors">
                  Patron Reviews
                </a>
              </li>
              <li>
                <a href={SHOWROOM_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#c5a059] transition-colors flex items-center gap-1">
                  <Instagram className="w-3 h-3 text-[#c5a059]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="hover:text-[#25d366] transition-colors text-left flex items-center gap-1 text-[#25d366]"
                >
                  <MessageSquare className="w-3 h-3 fill-current" />
                  <span>Touch to Message</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Showroom Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-medium text-lg text-white">
              Showroom Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-[#bbb0a4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{SHOWROOM_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${SHOWROOM_INFO.primaryPhone}`} className="hover:text-white transition-colors">
                    Primary: {SHOWROOM_INFO.displayPrimaryPhone}
                  </a>
                  <a href={`tel:${SHOWROOM_INFO.secondaryPhone}`} className="hover:text-white transition-colors text-[#a89d91]">
                    Secondary: {SHOWROOM_INFO.displaySecondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25d366] shrink-0" />
                <a 
                  href={`https://wa.me/${SHOWROOM_INFO.whatsapp}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {SHOWROOM_INFO.displayWhatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a 
                  href={`mailto:${SHOWROOM_INFO.email}`} 
                  className="hover:text-white transition-colors"
                >
                  {SHOWROOM_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-white">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-[#c5a059]">Sunday: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f8377]">
          <p>© {new Date().getFullYear()} Shalimar Collection. All rights reserved. Non-ecommerce showroom.</p>
          
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1 text-[#bbb0a4] hover:text-[#c5a059] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
