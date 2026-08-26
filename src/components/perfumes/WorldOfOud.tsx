import React from 'react';
import { Sparkles, Globe, MessageSquare } from 'lucide-react';
import { WORLD_OF_OUD_CATEGORIES } from '../../data/perfumeData';
import { SHOWROOM_INFO } from '../../data/showroomData';

export const WorldOfOud: React.FC = () => {
  const handleDirectWhatsApp = (oudName?: string) => {
    const text = encodeURIComponent(
      oudName
        ? `Hello Shalimar Collection, I would like to inquire about sampling "${oudName}" at your Siddhpur showroom.`
        : `Hello Shalimar Collection, I would like to inquire about visiting your showroom for an Oud tasting session.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#241f1c] text-[#f7f2ea] relative overflow-hidden" id="perfume-oud-world">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38302b] border border-[#52453d] text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Distillations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white">
            Experience The World Of Oud
          </h2>
          <p className="text-sm sm:text-base text-[#bbb0a4] font-light leading-relaxed">
            Rich, deep and unforgettable. Our ouds are carefully selected from the finest sources around the world.
          </p>
        </div>

        {/* Oud Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLD_OF_OUD_CATEGORIES.map((oud) => (
            <div
              key={oud.id}
              className="bg-[#2c2622] border border-[#443a34] hover:border-[#c5a059]/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group"
              id={`oud-card-${oud.id}`}
            >
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#1b1715]">
                <img
                  src={oud.image}
                  alt={oud.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2622] via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#c5a059] text-xs font-semibold tracking-wider uppercase">
                  {oud.aging}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a059] font-medium">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Origin: {oud.origin}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-white">
                    {oud.name}
                  </h3>
                  <p className="text-xs text-[#bbb0a4] leading-relaxed">
                    {oud.description}
                  </p>
                </div>

                {/* Scent Profile Pill */}
                <div className="p-3 rounded-xl bg-[#221d1a] border border-[#3b322d] text-xs text-[#ded3c5] space-y-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#c5a059] block">
                    Olfactory Character
                  </span>
                  <p className="text-xs text-[#ded3c5]">
                    {oud.scentProfile}
                  </p>
                </div>

                {/* Action */}
                <button
                  type="button"
                  onClick={() => handleDirectWhatsApp(oud.name)}
                  id={`touch-message-oud-${oud.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#3c342e] hover:bg-[#25d366] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Touch to Message</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Showroom Tasting Invite */}
        <div className="mt-14 p-8 rounded-2xl bg-[#2c2622] border border-[#443a34] text-center max-w-2xl mx-auto space-y-3">
          <h4 className="text-xl font-serif font-medium text-white">
            Schedule a Private Scent Ritual
          </h4>
          <p className="text-xs sm:text-sm text-[#bbb0a4]">
            Experience how pure Dehn Al Oud adapts and warms against your skin at our dedicated showroom scent bar.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleDirectWhatsApp()}
              id="book-oud-ritual-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Touch to Message Showroom</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

