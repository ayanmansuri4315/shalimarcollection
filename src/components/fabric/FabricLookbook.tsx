import React, { useState } from 'react';
import { Sparkles, ZoomIn } from 'lucide-react';
import { FABRIC_LOOKBOOK } from '../../data/fabricData';
import { LookbookItem } from '../../types';

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
    <section className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]" id="fabric-lookbook">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
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
              className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#241f1c] text-[#fcfaf7] shadow-xs'
                  : 'bg-[#fcfaf7] text-[#5a5047] hover:bg-[#ede2d2] border border-[#e4dacb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(filteredItems, idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#eae0d1] border border-[#e2d5c3] cursor-pointer aspect-4/3 shadow-xs hover:shadow-lg transition-all duration-300"
              id={`lookbook-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e8dfd3] font-semibold block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif font-medium text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
