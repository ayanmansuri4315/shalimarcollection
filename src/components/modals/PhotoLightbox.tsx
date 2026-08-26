import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { LookbookItem } from '../../types';
import { SHOWROOM_INFO } from '../../data/showroomData';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LookbookItem[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
}) => {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % items.length);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Shalimar Collection, I am looking at "${currentItem.title}" from your Lookbook.`);
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#1e1b19] border border-[#423933] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        id="lightbox-container"
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between p-4 border-b border-[#362e29] bg-[#141211]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
              Lookbook • {currentItem.category}
            </span>
            <h4 className="text-white text-sm sm:text-base font-serif font-medium truncate max-w-md">
              {currentItem.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            id="close-lightbox-btn"
            className="p-1.5 rounded-full text-[#a89d91] hover:text-white hover:bg-[#2d2723] transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[65vh] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            id="prev-lightbox-btn"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            id="next-lightbox-btn"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Caption & Action */}
        <div className="p-4 bg-[#141211] border-t border-[#362e29] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-[#a89d91] text-center sm:text-left">
            {currentItem.caption}
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              id="whatsapp-from-lightbox-btn"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Touch to Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
