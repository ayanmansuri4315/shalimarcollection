import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, Droplets, ChevronDown } from 'lucide-react';
import { PortalType } from '../../types';
import bespokeHeroImg from '../../assets/images/bespoke_fabric_hero_1787677124885.jpg';

interface FabricHeroProps {
  onSwitchPortal: (portal: PortalType) => void;
}

export const FabricHero: React.FC<FabricHeroProps> = ({
  onSwitchPortal,
}) => {
  const scrollToCollections = () => {
    const el = document.getElementById('fabric-collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToShowroom = () => {
    const el = document.getElementById('showroom-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#fbf9f5] via-[#f7f3eb] to-[#fbf9f5]"
      id="fabric-hero"
    >
      {/* Subtle Background Parallax Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#eee3d1]/35 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column with Staggered Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Department Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2e7d7] border border-[#e2d3bf] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#9b7832]" />
                <span>Bespoke Textile Showroom</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1f1a17] tracking-tight leading-[1.12]"
            >
              Premium Fabrics,<br />
              <span className="italic font-light text-[#8a6825]">Timeless Style</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[#5c5249] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Discover a wide range of premium quality fabrics crafted for elegance, comfort & tradition. Sourced from the finest global mills for bespoke connoisseurs.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                onClick={scrollToCollections}
                id="hero-explore-collection-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-[#fcfaf7] text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] group cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToShowroom}
                id="hero-visit-showroom-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f5ede2] hover:bg-[#ebdcc9] text-[#2c241f] border border-[#dccab3] text-xs font-semibold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#9b7832]" />
                <span>Visit Showroom</span>
              </button>
            </motion.div>

            {/* Subtle Portal Switch Card in Hero */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 border-t border-[#ebd9c7] max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-4 rounded-xl bg-[#f4ebd9]/80 border border-[#ded0bb] flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5c5249] font-semibold block">
                    Explore Our Other Collection
                  </span>
                  <span className="text-sm font-serif font-medium text-[#1f1a17]">
                    Oud & Perfumes Lounge
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onSwitchPortal('perfumes')}
                    id="hero-switch-discover-oud-btn"
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#241f1c] text-[#fcfaf7] text-xs font-semibold hover:bg-[#3d342f] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Droplets className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Discover Oud</span>
                  </button>
                  <button
                    onClick={() => onSwitchPortal('perfumes')}
                    id="hero-switch-discover-perfumes-btn"
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#f4ece1] text-[#8a6825] border border-[#e4d6c3] text-xs font-semibold hover:bg-[#ebdcc8] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8a6825]" />
                    <span>Perfumes</span>
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Image Composition with Subtle Parallax & Hover Zoom */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Main Editorial Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl border border-[#e2d5c3] bg-[#eae0d1] group">
                <motion.img
                  src={bespokeHeroImg}
                  alt="Bespoke Italian Suiting Fabric at Shalimar Collection"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1.0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Bottom Image Caption Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#fcfaf7]/95 backdrop-blur-md border border-[#e4d6c3] flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8a6825] font-semibold block">
                      Curated Textile Archives
                    </span>
                    <span className="text-sm font-serif font-medium text-[#1f1a17]">
                      Super 150s Merino Wool & Silk Blends
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#8a6825] uppercase tracking-wider">
                    In Showroom
                  </span>
                </div>
              </div>

              {/* Floating Secondary Mini Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#fcfaf7] border border-[#e2d5c3] shadow-xl items-center gap-3 max-w-[250px]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0e4d2] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#9b7832]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#1f1a17]">500+ Luxury Weaves</span>
                  <span className="block text-xs text-[#73685e]">Available for Bespoke Tailoring</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={scrollToCollections}
            id="scroll-to-collections-btn"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#8c8177] hover:text-[#241f1c] transition-colors cursor-pointer"
          >
            <span>Explore Collections</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
