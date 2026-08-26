import React from 'react';
import { Sparkles, Layers, Compass, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import { FABRIC_EXPERIENCE_POINTS } from '../../data/fabricData';
import { SHOWROOM_INFO } from '../../data/showroomData';

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
    <section className="py-20 bg-[#fbf9f5]" id="fabric-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Fabric Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c3] bg-[#ece2d3]">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
                  alt="Pure woven linen texture at Shalimar Collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Decorative Label */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl bg-[#fcfaf7] border border-[#e2d5c3] shadow-md max-w-xs space-y-1">
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Textile Craftsmanship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
                The Fabric Experience
              </h2>
              <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
                We believe exceptional clothing begins with uncompromised raw materials. Our showroom curates textiles that marry traditional master weaving with modern tailoring performance.
              </p>
            </div>

            {/* 4 Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FABRIC_EXPERIENCE_POINTS.map((point) => (
                <div 
                  key={point.title}
                  className="p-5 rounded-xl bg-[#fcfaf7] border border-[#e8ded1] space-y-2 hover:border-[#b38e44]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f5ede2] flex items-center justify-center">
                    {getIcon(point.icon)}
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1f1a17]">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#6c625a] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Touch to Message */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                id="experience-touch-to-message-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#25d366]" />
                <span>Touch to Message Showroom</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

