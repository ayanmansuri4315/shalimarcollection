import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PERFUME_CATEGORIES } from '../../data/perfumeData';
import { PerfumeCategory } from '../../types';
import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveCard } from '../shared/InteractiveCard';

interface PerfumeCollectionsProps {
  onSelectCategory: (category: PerfumeCategory) => void;
}

export const PerfumeCollections: React.FC<PerfumeCollectionsProps> = ({
  onSelectCategory,
}) => {
  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#fbf9f5]"
      id="perfume-collections"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fragrance Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Our Collections
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            From concentrated French-oriental Extraits and rare single-origin Dehn Al Oud to pure botanical attars and aromatic bakhoor incense.
          </p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PERFUME_CATEGORIES.map((category) => (
            <InteractiveCard
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="bg-[#fcfaf7] border border-[#e8dfd3] hover:border-[#b38e44]/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              id={`perfume-category-${category.id}`}
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#eee5d8]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Count Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#241f1c]/75 backdrop-blur-xs text-[#f2ebd9] text-xs font-medium tracking-wide">
                  {category.itemCount}+ Blends
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6825] block">
                    {category.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-[#1f1a17] mt-1 group-hover:text-[#8a6825] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#6c625a] mt-1.5 line-clamp-3 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#f0e6d8] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3c342f] group-hover:text-[#8a6825] transition-colors flex items-center gap-1">
                    Explore Blends
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <span className="text-xs text-[#8a6825] font-medium">
                    Showroom
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
