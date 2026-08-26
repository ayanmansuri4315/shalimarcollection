import React, { useState } from 'react';
import { Sparkles, ZoomIn } from 'lucide-react';
import { FABRIC_LOOKBOOK } from '../../data/fabricData';
import { LookbookItem } from '../../types';
import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveCard } from '../shared/InteractiveCard';

interface FabricLookbookProps {
  onOpenLightbox: (items: LookbookItem[], index: number) => void;
}

export const FabricLookbook: React.FC<FabricLookbookProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fabrics' | 'Textures' | 'Showroom' | 'Ethnic'>('All');

  const categories = ['All', 'Fabrics', 'Textures', 'Showroom', 'Ethnic'] as const;

  const filteredItems = activeCategory === 'All'
    ? FABRIC_LOOKBOOK
    : FABRIC_LOOKBOOK.filter((item) => item.category === activeCategory);

  return (
    <AnimatedSection
      direction="left"
      className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]"
      id="fabric-lookbook"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Archives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Lookbook & Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            A visual showcase of tailored garments, tactile close-up textures, and our showroom ambiance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`lookbook-tab-${cat.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#241f1c] text-[#fcfaf7] shadow-sm hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-[#fcfaf7] text-[#5a5047] hover:bg-[#ede2d2] hover:-translate-y-0.5 border border-[#e4dacb] active:translate-y-0'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <InteractiveCard
              key={item.id}
              onClick={() => onOpenLightbox(filteredItems, idx)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#e2d5c3] bg-[#ece2d3] cursor-pointer"
              id={`lookbook-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Tag */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Center Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base font-serif font-medium text-white group-hover:text-[#c5a059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#ded3c5] line-clamp-1 mt-0.5 font-light">
                  {item.caption}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
