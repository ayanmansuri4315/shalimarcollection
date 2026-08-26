import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Sparkles } from 'lucide-react';
import { SHOWROOM_INFO } from '../../data/showroomData';
import { AnimatedSection } from './AnimatedSection';

export const GoogleMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SHOWROOM_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]"
      id="google-map-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Find Us On Map
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            Visit our showroom at JamliPure, Siddhpur, Patan. Open Monday to Saturday until 8:00 PM and Sunday until 2:00 PM.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#ded0bf] shadow-md bg-[#eae0d1]">
          
          {/* Real Responsive Embed */}
          <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px]">
            <iframe
              src={SHOWROOM_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shalimar Collection Showroom Map Location"
              className="w-full h-full grayscale-20 contrast-105"
            />
          </div>

          {/* Floating Location Card */}
          <div className="sm:absolute sm:top-6 sm:left-6 m-4 sm:m-0 max-w-sm bg-[#fcfaf7]/95 backdrop-blur-md border border-[#e2d5c3] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#8a6825] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Showroom Location
              </span>
              <span className="text-xs text-[#2d6a4f] bg-[#eef7ee] px-2.5 py-0.5 rounded-full font-medium border border-[#c7eccb]">
                Open Today
              </span>
            </div>

            <div>
              <h3 className="font-serif font-medium text-lg text-[#1f1a17]">
                {SHOWROOM_INFO.name}
              </h3>
              <p className="text-xs text-[#5c5249] mt-1 font-normal leading-relaxed">
                {SHOWROOM_INFO.fullAddress}
              </p>
            </div>

            {/* Quick Hours */}
            <div className="pt-2 border-t border-[#ebd8c7] text-xs text-[#73685e] space-y-1">
              <div className="flex items-center justify-between">
                <span>Mon – Sat:</span>
                <span className="font-medium text-[#241f1c]">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-[#8a6825] font-medium">
                <span>Sunday:</span>
                <span>9:00 AM – 2:00 PM</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 border-t border-[#ebd8c7] flex items-center gap-2">
              <a
                href={SHOWROOM_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                id="map-open-google-maps-btn"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] shadow-xs cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                id="map-copy-address-btn"
                className="px-3.5 py-2.5 rounded-xl border border-[#d5c8b6] bg-[#f5ede2] hover:bg-[#ebdcc8] text-[#241f1c] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center gap-1 cursor-pointer"
                title="Copy Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#2d6a4f]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
