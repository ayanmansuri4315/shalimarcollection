import React from 'react';
import { Sparkles, ShieldCheck, UserCheck, Gift, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERFUME_WHY_CHOOSE_US } from '../../data/perfumeData';
import { SHOWROOM_INFO } from '../../data/showroomData';

export const PerfumeWhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#9b7832]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9b7832]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#9b7832]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#9b7832]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#9b7832]" />;
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Shalimar Collection, I would like to inquire about booking a fragrance consultation at your Siddhpur showroom.');
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#fbf9f5]" id="perfume-why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Fragrance Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c3] bg-[#ece2d3]">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80"
                  alt="Precious Aged Agarwood and Crystal Flacons at Shalimar Collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Decorative Label */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl bg-[#fcfaf7] border border-[#e2d5c3] shadow-md max-w-xs space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#8a6825] font-semibold block">
                  Purity Guarantee
                </span>
                <p className="text-xs text-[#5c5249] font-medium leading-snug">
                  Every batch of Dehn Al Oud undergoes laboratory GC-MS testing for zero synthetic additives or synthetic boosters.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Informational Points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unrivaled Authenticity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
                Why Choose Us?
              </h2>
              <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
                In an era of diluted formulations, Shalimar Collection remains staunchly dedicated to pure, high-potency fragrance extracts distilled according to ancient traditions.
              </p>
            </div>

            {/* 4 Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PERFUME_WHY_CHOOSE_US.map((point) => (
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

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                id="perfume-why-us-consultation-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#25d366] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs group"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a059] group-hover:text-white" />
                <span>Touch to Message Showroom</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
