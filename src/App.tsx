import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { PortalSwitcherBanner } from './components/PortalSwitcherBanner';
import { FabricHero } from './components/fabric/FabricHero';
import { FabricCollections } from './components/fabric/FabricCollections';
import { FabricNewArrivals } from './components/fabric/FabricNewArrivals';
import { FabricExperience } from './components/fabric/FabricExperience';
import { FabricLookbook } from './components/fabric/FabricLookbook';
import { FabricStory } from './components/fabric/FabricStory';
import { PerfumeHero } from './components/perfumes/PerfumeHero';
import { PerfumeCollections } from './components/perfumes/PerfumeCollections';
import { PerfumeBestSellers } from './components/perfumes/PerfumeBestSellers';
import { WorldOfOud } from './components/perfumes/WorldOfOud';
import { PerfumeWhyChooseUs } from './components/perfumes/PerfumeWhyChooseUs';
import { PerfumeGiftSets } from './components/perfumes/PerfumeGiftSets';
import { ShowroomSection } from './components/shared/ShowroomSection';
import { GoogleMapSection } from './components/shared/GoogleMapSection';
import { CustomerReviews } from './components/shared/CustomerReviews';
import { InstagramReels } from './components/shared/InstagramReels';
import { Footer } from './components/shared/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollProgress } from './components/shared/ScrollProgress';
import { EnquiryModal } from './components/modals/EnquiryModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { PhotoLightbox } from './components/modals/PhotoLightbox';
import { FabricCategory, FabricItem, LookbookItem, PerfumeCategory, PerfumeItem, PortalType } from './types';

export default function App() {
  // Step 1: User enters the website on the Fabric Collection portal FIRST
  const [currentPortal, setCurrentPortal] = useState<PortalType>('fabric');

  // Modal States
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryItemName, setEnquiryItemName] = useState<string>('');

  const [selectedProduct, setSelectedProduct] = useState<FabricItem | PerfumeItem | null>(null);
  const [selectedProductType, setSelectedProductType] = useState<'fabric' | 'perfume'>('fabric');
  const [productDetailOpen, setProductDetailOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<LookbookItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync portal switch with browser history / hash if needed
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes('perfumes') || window.location.pathname.includes('perfumes')) {
        setCurrentPortal('perfumes');
      }
    };
    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const handleSwitchPortal = (portal: PortalType) => {
    setCurrentPortal(portal);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFabricCategory = (_category: FabricCategory) => {
    const el = document.getElementById('fabric-new-arrivals');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPerfumeCategory = (category: PerfumeCategory) => {
    let targetId = 'perfume-best-sellers';
    if (category.id === 'oud-collection') {
      targetId = 'perfume-oud-world';
    } else if (category.id === 'gift-sets') {
      targetId = 'perfume-gift-sets';
    }
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEnquiry = (itemName?: string) => {
    setEnquiryItemName(itemName || '');
    setEnquiryModalOpen(true);
  };

  const handleViewFabric = (fabric: FabricItem) => {
    setSelectedProduct(fabric);
    setSelectedProductType('fabric');
    setProductDetailOpen(true);
  };

  const handleViewPerfume = (perfume: PerfumeItem) => {
    setSelectedProduct(perfume);
    setSelectedProductType('perfume');
    setProductDetailOpen(true);
  };

  const handleOpenLightbox = (items: LookbookItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const portalVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#241f1c] selection:bg-[#c5a059]/30 selection:text-[#1f1a17]">
      {/* Premium Top Smooth Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Universal Luxury Navigation */}
      <Navbar
        currentPortal={currentPortal}
        onSwitchPortal={handleSwitchPortal}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area with Smooth Portal Transition */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {currentPortal === 'fabric' ? (
            /* ======================================= */
            /* PORTAL 1: FABRIC COLLECTION (PRIMARY)   */
            /* ======================================= */
            <motion.div
              key="fabric-portal"
              variants={portalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {/* 1. Fabric Hero */}
              <FabricHero
                onSwitchPortal={handleSwitchPortal}
              />

              {/* 2. Fabric Collections Grid (RIGHT ➡️) */}
              <FabricCollections
                onSelectCategory={handleSelectFabricCategory}
              />

              {/* 3. New Arrivals (LEFT ⬅️) */}
              <FabricNewArrivals
                onViewItem={handleViewFabric}
              />

              {/* 4. The Fabric Experience (RIGHT ➡️) */}
              <FabricExperience />

              {/* 5. Portal Switcher Banner (RIGHT ➡️) */}
              <PortalSwitcherBanner
                currentPortal={currentPortal}
                onSwitchPortal={handleSwitchPortal}
              />

              {/* 6. Lookbook / Gallery (LEFT ⬅️) */}
              <FabricLookbook onOpenLightbox={handleOpenLightbox} />

              {/* 7. Our Story (RIGHT ➡️) */}
              <FabricStory />

              {/* 8. Visit Our Showroom (LEFT ⬅️) */}
              <ShowroomSection
                currentPortal={currentPortal}
              />

              {/* 9. Interactive Google Map (RIGHT ➡️) */}
              <GoogleMapSection />

              {/* 10. Customer Reviews (LEFT ⬅️) */}
              <CustomerReviews
                currentPortal={currentPortal}
              />

              {/* 11. Follow Us On Instagram (Reels) (RIGHT ➡️) */}
              <InstagramReels currentPortal={currentPortal} />
            </motion.div>
          ) : (
            /* ======================================= */
            /* PORTAL 2: PERFUMES & OUD COLLECTION    */
            /* ======================================= */
            <motion.div
              key="perfumes-portal"
              variants={portalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {/* 1. Perfume Hero */}
              <PerfumeHero
                onSwitchPortal={handleSwitchPortal}
              />

              {/* 2. Perfume Collections Grid (RIGHT ➡️) */}
              <PerfumeCollections
                onSelectCategory={handleSelectPerfumeCategory}
              />

              {/* 3. Experience The World Of Oud (LEFT ⬅️) */}
              <WorldOfOud />

              {/* 4. Best Selling Perfumes (RIGHT ➡️) */}
              <PerfumeBestSellers
                onViewItem={handleViewPerfume}
              />

              {/* 5. Why Choose Us (LEFT ⬅️) */}
              <PerfumeWhyChooseUs />

              {/* 6. Portal Switcher Banner (LEFT ⬅️) */}
              <PortalSwitcherBanner
                currentPortal={currentPortal}
                onSwitchPortal={handleSwitchPortal}
              />

              {/* 7. Gift Sets (RIGHT ➡️) */}
              <PerfumeGiftSets />

              {/* 8. Showroom (LEFT ⬅️) */}
              <ShowroomSection
                currentPortal={currentPortal}
              />

              {/* 9. Interactive Google Map (RIGHT ➡️) */}
              <GoogleMapSection />

              {/* 10. Customer Reviews (LEFT ⬅️) */}
              <CustomerReviews
                currentPortal={currentPortal}
              />

              {/* 11. Follow Us On Instagram (Reels) (RIGHT ➡️) */}
              <InstagramReels currentPortal={currentPortal} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Luxury Footer */}
      <Footer
        currentPortal={currentPortal}
        onSwitchPortal={handleSwitchPortal}
      />

      {/* ONE Fixed Floating WhatsApp Action Button */}
      <FloatingWhatsApp currentPortal={currentPortal} />

      {/* Showroom & WhatsApp Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        portal={currentPortal}
        initialItemName={enquiryItemName}
      />

      {/* Product Deep-Dive Modal (Non-Ecommerce) */}
      <ProductDetailModal
        isOpen={productDetailOpen}
        onClose={() => setProductDetailOpen(false)}
        item={selectedProduct}
        type={selectedProductType}
      />

      {/* Lookbook Lightbox Modal */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}
