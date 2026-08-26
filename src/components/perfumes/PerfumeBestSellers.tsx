import React from 'react';
import { Eye, Sparkles, Info, Droplet } from 'lucide-react';
import { BEST_SELLING_PERFUMES } from '../../data/perfumeData';
import { PerfumeItem } from '../../types';
import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveCard } from '../shared/InteractiveCard';

interface PerfumeBestSellersProps {
  onViewItem: (item: PerfumeItem) => void;
}

export const PerfumeBestSellers: React.FC<PerfumeBestSellersProps> = ({
  onViewItem,
}) => {
  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#f7f3eb] border-y border-[#ede3d5]"
      id="perfume-best-sellers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patron Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
              Best Selling Perfumes
            </h2>
            <p className="text-sm sm:text-base text-[#6b6158] font-light max-w-xl mt-2">
              Our signature Extrait de Parfums and vintage Dehn Al Oud flacons celebrated for longevity and royal projection.
            </p>
          </div>

          <span className="self-start md:self-auto px-4 py-2 rounded-xl border border-[#d8c8b4] bg-[#fcfaf7] text-xs font-semibold uppercase tracking-wider text-[#5c5249]">
            Showroom Sampler Lounge
          </span>
        </div>

        {/* Product Cards Grid (Non-Ecommerce) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLING_PERFUMES.map((perfume) => (
            <InteractiveCard
              key={perfume.id}
              onClick={() => onViewItem(perfume)}
              className="bg-[#fcfaf7] border border-[#e4dacb] hover:border-[#b38e44]/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              id={`best-seller-${perfume.id}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#eee5d8]">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#241f1c]/80 backdrop-blur-xs text-[#f2ebd9] text-xs font-semibold uppercase tracking-wider">
                  Best Seller
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#241f1c] text-xs font-semibold shadow-md">
                    <Eye className="w-4 h-4 text-[#8a6825]" />
                    <span>Inspect Notes</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8a6825] font-semibold uppercase tracking-wider">
                    <span>{perfume.collection}</span>
                    <span className="text-[#8c8177] font-normal flex items-center gap-0.5">
                      <Droplet className="w-3 h-3 text-[#8a6825]" />
                      Concentrate
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1f1a17] mt-1 line-clamp-1 group-hover:text-[#8a6825] transition-colors">
                    {perfume.name}
                  </h3>
                  <p className="text-xs text-[#5c5249] font-medium mt-0.5">
                    {perfume.type}
                  </p>
                  <p className="text-xs text-[#5c5249] mt-1.5 line-clamp-2 leading-relaxed font-light">
                    {perfume.description}
                  </p>
                </div>

                {/* Bottom Showroom Action */}
                <div className="pt-3 border-t border-[#ede3d5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewItem(perfume);
                    }}
                    id={`view-fragrance-item-${perfume.id}`}
                    className="text-xs font-semibold text-[#241f1c] group-hover:text-[#8a6825] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#8a6825]" />
                    <span>Olfactory Notes</span>
                  </button>

                  <span className="text-xs text-[#8a6825] font-medium">
                    Available in Store
                  </span>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
