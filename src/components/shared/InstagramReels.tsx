import React, { useRef, useState } from 'react';
import { Instagram, Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FABRIC_REELS, PERFUME_REELS } from '../../data/reelsData';
import { SHOWROOM_INFO } from '../../data/showroomData';
import { PortalType } from '../../types';
import { AnimatedSection } from './AnimatedSection';

interface InstagramReelsProps {
  currentPortal: PortalType;
}

export const InstagramReels: React.FC<InstagramReelsProps> = ({ currentPortal }) => {
  const reels = currentPortal === 'fabric' ? FABRIC_REELS : PERFUME_REELS;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(2); // Center default on desktop (5 items: index 2)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]"
      id="instagram-reels-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
            <span>Follow {SHOWROOM_INFO.instagramHandle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            {currentPortal === 'fabric' ? 'Fabric Collection Reels' : 'Perfumes & Oud Reels'}
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            {currentPortal === 'fabric'
              ? 'Watch video reels of master-woven fabrics, new arrivals, tactile textures, showroom tours, and bespoke styling.'
              : 'Explore video reels of high-concentration perfumes, aged oud distillations, pure attars, atmospheric bakhoor, and gift coffrets.'}
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-20 pointer-events-none">
            <button
              onClick={() => scroll('left')}
              id="reels-carousel-prev-btn"
              aria-label="Previous reels"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#241f1c]/85 hover:bg-[#241f1c] text-white border border-[#c5a059]/40 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              id="reels-carousel-next-btn"
              aria-label="Next reels"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#241f1c]/85 hover:bg-[#241f1c] text-white border border-[#c5a059]/40 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Reel Track (Horizontal Snap Carousel) */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, idx) => {
              const isCenter = activeIndex === idx;
              return (
                <a
                  key={reel.id}
                  href={reel.reelUrl || SHOWROOM_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setActiveIndex(idx)}
                  aria-label={`Watch ${reel.title} on Instagram (${SHOWROOM_INFO.instagramHandle})`}
                  className={`group relative shrink-0 snap-center rounded-2xl overflow-hidden bg-[#241f1c] border border-[#e2d5c3] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col aspect-9/16 cursor-pointer w-[240px] sm:w-[260px] md:w-[275px] lg:w-[285px] ${
                    isCenter ? 'ring-2 ring-[#c5a059]/80 scale-[1.02]' : 'opacity-90 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                  id={`ig-reel-${reel.id}`}
                >
                  {/* Thumbnail Background */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-95"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40 pointer-events-none" />

                  {/* Top Reel Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                      <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                      <span>Reel</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[#ded3c5] text-xs font-mono">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Centered Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-[#1a1614] group-hover:border-[#c5a059] transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#c5a059] font-semibold uppercase tracking-wider line-clamp-1">
                        {reel.category || reel.tag}
                      </span>
                      <span className="text-white/80 text-xs font-medium shrink-0 ml-1">
                        {reel.views}
                      </span>
                    </div>

                    <h3 className="text-white font-serif font-medium text-sm line-clamp-2 leading-snug group-hover:text-[#c5a059] transition-colors">
                      {reel.title}
                    </h3>

                    <p className="text-xs text-[#bbb0a4] line-clamp-1 leading-normal font-light">
                      {reel.caption}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-white/95 group-hover:text-[#c5a059] transition-colors">
                      <span>Watch on Instagram</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Follow CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={SHOWROOM_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            id="instagram-reels-follow-btn"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group"
          >
            <Instagram className="w-4 h-4 text-[#c5a059]" />
            <span>Follow {SHOWROOM_INFO.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
};
