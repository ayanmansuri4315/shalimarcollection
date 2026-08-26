import React from 'react';
import { Sparkles, History, Compass, Users } from 'lucide-react';

export const FabricStory: React.FC = () => {
  return (
    <section className="py-20 bg-[#fbf9f5]" id="fabric-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
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
                <span className="text-[11px] text-[#73685e] block">Textile Legacy</span>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#8a6825]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sourcing</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] block">100%</span>
                <span className="text-[11px] text-[#73685e] block">Certified Mills</span>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#8a6825]">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Patrons</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#1f1a17] block">10k+</span>
                <span className="text-[11px] text-[#73685e] block">Bespoke Clients</span>
              </div>
            </div>

          </div>

          {/* Right Showroom Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c3] bg-[#ece2d3]">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
                alt="Shalimar Collection Showroom Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 p-4 rounded-xl bg-[#f5ede2] border border-[#e4d6c3] flex items-center justify-between">
              <span className="text-xs text-[#5c5249] italic">
                “True luxury is not loud; it is felt in the thread count, the drape, and the confidence it imparts.”
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
