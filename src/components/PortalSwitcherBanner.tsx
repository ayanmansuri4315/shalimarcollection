import React from 'react';
import { Sparkles, Droplets, Layers, ArrowRight, Compass } from 'lucide-react';
import { PortalType } from '../types';
import { AnimatedSection } from './shared/AnimatedSection';

interface PortalSwitcherBannerProps {
  currentPortal: PortalType;
  onSwitchPortal: (portal: PortalType) => void;
}

export const PortalSwitcherBanner: React.FC<PortalSwitcherBannerProps> = ({
  currentPortal,
  onSwitchPortal,
}) => {
  if (currentPortal === 'fabric') {
    return (
      <AnimatedSection
        direction="right"
        className="py-14 bg-[#f4ece1]/70 border-y border-[#ebd8c7] relative overflow-hidden"
        id="fabric-portal-switch"
      >
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8dac6]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#decaba]/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#fcfaf7] border border-[#e2d5c3] rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Description */}
              <div className="max-w-2xl text-center lg:text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7c5e20] text-xs font-semibold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Shalimar Fragrance Lounge</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-[#1f1a17]">
                  Explore Our Other Collection: <span className="italic text-[#9b7832]">Oud & Perfumes</span>
                </h3>
                <p className="text-sm text-[#6c625a] leading-relaxed font-light">
                  Immerse yourself in our sensory chamber of rare aged agarwoods, royal French-Arabian perfumes, authentic non-alcoholic attars, and luxury gift coffrets.
                </p>
              </div>

              {/* Action Buttons / Visual Cards */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => onSwitchPortal('perfumes')}
                  id="portal-switch-discover-oud-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] group cursor-pointer"
                >
                  <Droplets className="w-4 h-4 text-[#c5a059]" />
                  <span>Discover Oud</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSwitchPortal('perfumes')}
                  id="portal-switch-discover-perfumes-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#ede2d2] hover:bg-[#e4d4bf] text-[#2c241f] border border-[#d8c5ad] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#9b7832]" />
                  <span>Discover Perfumes</span>
                  <ArrowRight className="w-4 h-4 text-[#9b7832] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // When on Perfume Portal, allow switching to Fabric Portal
  return (
    <AnimatedSection
      direction="left"
      className="py-14 bg-[#f4ece1]/70 border-y border-[#ebd8c7] relative overflow-hidden"
      id="perfumes-portal-switch"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#fcfaf7] border border-[#e2d5c3] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7c5e20] text-xs font-semibold uppercase tracking-wider shadow-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>The Shalimar Textile Atelier</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-[#1f1a17]">
                Explore Our Other Collection: <span className="italic text-[#9b7832]">Bespoke Fabrics</span>
              </h3>
              <p className="text-sm text-[#6c625a] leading-relaxed font-light">
                Discover Italian worsted wools, long-staple Egyptian Giza cottons, French flax linens, and ceremonial silk jacquards tailored for timeless distinction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onSwitchPortal('fabric')}
                id="portal-switch-discover-fabrics-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <span>Explore Fabric Collection</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
