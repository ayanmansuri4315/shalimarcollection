import React from 'react';
import { Sparkles, History, Compass, Users } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export const FabricStory: React.FC = () => {
  return (
    <AnimatedSection
      direction="right"
      className="py-20 bg-[#fbf9f5]"
      id="fabric-story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Heritage & Devotion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
              Our Story
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5c5249] font-light leading-relaxed">
              <p>
                Founded on an unwavering passion for textile mastery, <strong className="text-[#1f1a17] font-semibold">Shalimar Collection</strong> began as a boutique sanctuary for sartorial purists who appreciate the tactile poetry of fine fabrics.
              </p>
              <p>
                Over decades of curating mill rolls across Biella, Como, Cairo, and Varanasi, we have remained true to a singular principle: never compromise on raw fiber authenticity, yarn tension, or ethical sourcing.
              </p>
              <p>
                Today, our showroom stands as a meeting ground for bespoke tailors, wedding families, and gentlemen of style who seek fabrics that transcend seasonal fads and mature with distinction.
              </p>
            </div>

            {/* Heritage Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ebd8c7]">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#8a6825]">
                  <History className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Heritage</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] block">30+ Yrs</span>
                <span className="text-xs text-[#73685e] block">Textile Legacy</span>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#8a6825]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sourcing</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] block">100%</span>
                <span className="text-xs text-[#73685e] block">Certified Mills</span>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#8a6825]">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Patrons</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] block">10k+</span>
                <span className="text-xs text-[#73685e] block">Bespoke Clients</span>
              </div>
            </div>

          </div>

          {/* Right Editorial Image Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c3] bg-[#ece2d3] group">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
                  alt="Tailored suit detail at Shalimar Collection"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c3] bg-[#ece2d3] mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury textile rolls in showroom"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
