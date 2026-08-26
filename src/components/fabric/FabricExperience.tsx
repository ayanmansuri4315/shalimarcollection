import React from 'react';
import { Sparkles, Layers, Compass, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import { FABRIC_EXPERIENCE_POINTS } from '../../data/fabricData';
import { SHOWROOM_INFO } from '../../data/showroomData';
import { AnimatedSection } from '../shared/AnimatedSection';

export const FabricExperience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9b7832]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#9b7832]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#9b7832]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#9b7832]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#9b7832]" />;
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Shalimar Collection, I would like to inquire about visiting the showroom for a fabric consultation.');
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#fbf9f5]"
      id="fabric-experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Fabric Photography with Zoom */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none group">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-[#e2d5c3] bg-[#ece2d3]">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
                  alt="Pure woven linen texture at Shalimar Collection"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Decorative Label */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl bg-[#fcfaf7] border border-[#e2d5c3] shadow-lg max-w-xs space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#8a6825] font-semibold block">
                  Artisanal Integrity
                </span>
                <p className="text-xs text-[#5c5249] font-medium leading-snug">
                  Every bolt is evaluated for weave uniformity, GSM weight balance, and hand-feel softness.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Informational Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Showroom Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
                The Fabric Experience
              </h2>
              <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
                Choosing high-grade fabric requires more than visual inspection. Our master consultation tables allow you to feel drape, observe light refraction, and test crease recovery in person.
              </p>
            </div>

            {/* Experience Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FABRIC_EXPERIENCE_POINTS.map((pt) => (
                <div 
                  key={pt.title}
                  className="p-5 rounded-2xl bg-[#fcfaf7] border border-[#e8dfd3] shadow-xs space-y-2 hover:border-[#b38e44]/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f4ece1] flex items-center justify-center">
                    {getIcon(pt.icon)}
                  </div>
                  <h3 className="text-base font-serif font-medium text-[#1f1a17]">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#5c5249] leading-relaxed font-light">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            {/* In-Showroom Touchpoints CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsApp}
                id="fabric-experience-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a059]" />
                <span>Book Fabric Consultation</span>
              </button>
              
              <span className="text-xs text-[#73685e]">
                In-person fabric touch & drape testing available daily
              </span>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
