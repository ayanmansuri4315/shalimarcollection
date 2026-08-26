import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FABRIC_CATEGORIES } from '../../data/fabricData';
import { FabricCategory } from '../../types';

interface FabricCollectionsProps {
  onSelectCategory: (category: FabricCategory) => void;
}

export const FabricCollections: React.FC<FabricCollectionsProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="py-20 bg-[#fbf9f5]" id="fabric-collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Mill Weaves</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Our Collections
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            From the structured gravitas of Italian wools to the ethereal breeze of French flax and opulent ceremonial silks, explore textiles curated for the discerning wardrobe.
          </p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FABRIC_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="group bg-[#fcfaf7] border border-[#e8dfd3] hover:border-[#b38e44]/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              id={`fabric-category-${category.id}`}
            >
              {/* Image Container */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#eee5d8]">
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Count Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#241f1c]/70 backdrop-blur-xs text-[#f2ebd9] text-[11px] font-medium tracking-wide">
                  {category.itemCount}+ Weaves
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8a6825] block">
                    {category.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] mt-1">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6c625a] mt-2 line-clamp-3 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-2 border-t border-[#f0e6d8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(category);
                    }}
                    id={`view-details-fabric-cat-${category.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#3c342f] group-hover:text-[#8a6825] transition-colors flex items-center gap-1"
                  >
                    <span>Explore Weaves</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6825] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] text-[#8a6825] font-medium">
                    Showroom Archive
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
