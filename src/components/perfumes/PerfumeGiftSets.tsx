import React from 'react';
import { Gift, Check, MessageSquare } from 'lucide-react';
import { PERFUME_GIFT_SETS } from '../../data/perfumeData';
import { SHOWROOM_INFO } from '../../data/showroomData';

export const PerfumeGiftSets: React.FC = () => {
  const handleDirectWhatsApp = (setName?: string) => {
    const text = encodeURIComponent(
      setName
        ? `Hello Shalimar Collection, I would like to inquire about "${setName}" for bespoke/corporate gifting.`
        : `Hello Shalimar Collection, I would like to inquire about custom corporate and wedding gifting sets.`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]" id="perfume-gift-sets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5" />
            <span>Ceremonial & Corporate Gifting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Our Gift Sets
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            Presented in velvet-lined lacquered timber and gold-embossed coffrets, crafted to express deep respect for wedding favors, executives, and cherished occasions.
          </p>
        </div>

        {/* Gift Sets Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERFUME_GIFT_SETS.map((gift) => (
            <div
              key={gift.id}
              className="bg-[#fcfaf7] border border-[#e4dacb] hover:border-[#b38e44]/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              id={`gift-set-${gift.id}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#eee5d8]">
                <img
                  src={gift.image}
                  alt={gift.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {gift.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#241f1c]/80 backdrop-blur-xs text-[#f2ebd9] text-xs font-semibold uppercase tracking-wider">
                    {gift.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-[#1f1a17]">
                    {gift.name}
                  </h3>
                  <p className="text-xs text-[#5c5249] leading-relaxed">
                    {gift.description}
                  </p>

                  {/* Included Items list */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8a6825] block">
                      Coffret Contents:
                    </span>
                    <ul className="space-y-1 text-xs text-[#4a413a]">
                      {gift.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#8a6825] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-[#8c8177] italic pt-1">
                    Box: {gift.packaging}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#ede3d5] space-y-2">
                  <button
                    type="button"
                    onClick={() => handleDirectWhatsApp(gift.name)}
                    id={`touch-message-gift-${gift.id}`}
                    className="w-full py-3 px-4 rounded-xl bg-[#241f1c] hover:bg-[#25d366] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-white" />
                    <span>Touch to Message</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => handleDirectWhatsApp()}
            id="view-all-gift-sets-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d5c8b6] bg-[#fcfaf7] hover:bg-[#ede2d2] text-[#241f1c] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#25d366]" />
            <span>Touch to Message for Bespoke Monogramming</span>
          </button>
        </div>

      </div>
    </section>
  );
};

