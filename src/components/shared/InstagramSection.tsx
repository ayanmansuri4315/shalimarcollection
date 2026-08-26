import React from 'react';
import { Instagram, Play, ExternalLink, Film, Sparkles } from 'lucide-react';
import { INSTAGRAM_REELS_FABRIC } from '../../data/fabricData';
import { INSTAGRAM_REELS_PERFUMES } from '../../data/perfumeData';
import { SHOWROOM_INFO } from '../../data/showroomData';
import { PortalType } from '../../types';

interface InstagramSectionProps {
  currentPortal: PortalType;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ currentPortal }) => {
  const reels = currentPortal === 'fabric' ? INSTAGRAM_REELS_FABRIC : INSTAGRAM_REELS_PERFUMES;

  return (
    <section className="py-20 bg-[#f7f3eb] border-y border-[#ede2d4]" id="instagram-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede1cf] border border-[#dcc9b0] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
            <span>Follow Us On Instagram</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            See Our Latest Reels
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            Watch short video reels of master-woven fabric drapes, tactile textures, aged oud extractions, and showroom walkthroughs.
          </p>
        </div>

        {/* Instagram Reels Showcase (9:16 Vertical Video Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.reelUrl || SHOWROOM_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-[#241f1c] border border-[#e2d5c3] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col aspect-9/16"
              id={`ig-reel-${reel.id}`}
            >
              {/* Thumbnail Background */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-95"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />

              {/* Top Reel Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                  <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                  <span>Reel</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[#ded3c5] text-xs font-mono">
                  {reel.duration}
                </span>
              </div>

              {/* Centered Play Pulse Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-115 group-hover:bg-[#c5a059] group-hover:text-[#1a1614] group-hover:border-[#c5a059] transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Video Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 z-10 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#c5a059] font-semibold uppercase tracking-wider line-clamp-1">
                    {reel.category || reel.tag}
                  </span>
                  <span className="text-white/75 text-xs font-medium shrink-0 ml-1">
                    {reel.views}
                  </span>
                </div>

                <h3 className="text-white font-serif font-medium text-sm line-clamp-2 leading-snug group-hover:text-[#c5a059] transition-colors">
                  {reel.title}
                </h3>

                <p className="text-xs text-[#bbb0a4] line-clamp-1 leading-normal font-light">
                  {reel.caption}
                </p>

                <div className="pt-1.5 flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-[#c5a059] transition-colors">
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={SHOWROOM_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            id="instagram-follow-profile-btn"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
          >
            <Instagram className="w-4 h-4 text-[#c5a059]" />
            <span>Follow {SHOWROOM_INFO.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

