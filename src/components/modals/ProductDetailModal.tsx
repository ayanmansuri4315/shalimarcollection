import React from 'react';
import { X, Sparkles, MessageSquare, Compass, ShieldCheck, Layers, Droplets } from 'lucide-react';
import { FabricItem, PerfumeItem } from '../../types';
import { SHOWROOM_INFO } from '../../data/showroomData';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FabricItem | PerfumeItem | null;
  type: 'fabric' | 'perfume';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  item,
  type,
}) => {
  if (!isOpen || !item) return null;

  const isFabric = type === 'fabric';
  const fabricItem = isFabric ? (item as FabricItem) : null;
  const perfumeItem = !isFabric ? (item as PerfumeItem) : null;

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `*Shalimar Collection — Showroom Item Inquiry*\n\n` +
      `Hello, I would like more information on:\n` +
      `*Item:* ${item.name}\n` +
      `*Department:* ${isFabric ? 'Fabric Collection' : 'Perfumes & Oud'}\n` +
      `*Details:* ${isFabric ? fabricItem?.composition : perfumeItem?.type}\n\n` +
      `Is this available for viewing at the Siddhpur showroom?`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      <div 
        className="relative w-full max-w-2xl bg-[#fcfaf7] border border-[#e4dcd2] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        id="product-detail-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-product-detail-btn"
          className="absolute top-4 right-4 z-10 p-2 text-[#73685e] hover:text-[#1f1a17] bg-[#fcfaf7]/80 hover:bg-[#efe8df] backdrop-blur-xs rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden aspect-4/5 bg-[#ede4d8] border border-[#e2d6c6]">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {(fabricItem?.tag || perfumeItem?.bestSeller) && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#241f1c]/80 backdrop-blur-xs text-[#e8dfd3] text-xs font-medium tracking-wider uppercase shadow-xs">
                  {fabricItem?.tag || (perfumeItem?.bestSeller ? 'Best Seller' : 'Reserve')}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9b7832] font-semibold">
                  {isFabric ? fabricItem?.category : perfumeItem?.collection}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1f1a17] mt-1 leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#73685e] mt-1">
                  {isFabric ? `Origin: ${fabricItem?.origin || 'Master Mills'}` : `Type: ${perfumeItem?.type}`}
                </p>
              </div>

              <p className="text-sm text-[#5a5047] leading-relaxed font-light">
                {item.description}
              </p>

              {/* Fabric Specs */}
              {isFabric && fabricItem && (
                <div className="space-y-2.5 pt-2 border-t border-[#ebd8c7]/60 text-xs">
                  <div className="flex items-center gap-2 text-[#4a413a]">
                    <Layers className="w-4 h-4 text-[#9b7832]" />
                    <span className="font-semibold text-[#241f1c]">Composition:</span>
                    <span>{fabricItem.composition}</span>
                  </div>
                  {fabricItem.weave && (
                    <div className="flex items-center gap-2 text-[#4a413a]">
                      <Sparkles className="w-4 h-4 text-[#9b7832]" />
                      <span className="font-semibold text-[#241f1c]">Weave:</span>
                      <span>{fabricItem.weave}</span>
                    </div>
                  )}
                  {fabricItem.idealFor && (
                    <div className="flex items-center gap-2 text-[#4a413a]">
                      <Compass className="w-4 h-4 text-[#9b7832]" />
                      <span className="font-semibold text-[#241f1c]">Tailoring:</span>
                      <span>{fabricItem.idealFor}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Perfume Notes Pyramid */}
              {!isFabric && perfumeItem && (
                <div className="space-y-2 pt-2 border-t border-[#ebd8c7]/60 text-xs">
                  <div className="flex items-center gap-1.5 text-[#9b7832] font-semibold uppercase tracking-wider mb-1">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Olfactory Pyramid</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#f4ece1] border border-[#e5d8c6] space-y-1.5 text-[11px]">
                    <div>
                      <span className="font-semibold text-[#241f1c]">Top Notes: </span>
                      <span className="text-[#5a5047]">{perfumeItem.notes.top}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#241f1c]">Heart Notes: </span>
                      <span className="text-[#5a5047]">{perfumeItem.notes.heart}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#241f1c]">Base Notes: </span>
                      <span className="text-[#5a5047]">{perfumeItem.notes.base}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions (Direct WhatsApp + Call) */}
              <div className="pt-3 space-y-2">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  id="direct-whatsapp-item-btn"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25d366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba5a] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Touch to Message (WhatsApp)</span>
                </button>
                <a
                  href={`tel:${SHOWROOM_INFO.primaryPhone}`}
                  id="call-showroom-item-btn"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#241f1c] text-white font-medium text-xs sm:text-sm hover:bg-[#3c342f] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Call Showroom ({SHOWROOM_INFO.displayPrimaryPhone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
