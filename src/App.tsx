import React, { useState, useEffect } from 'react';
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
import { InstagramSection } from './components/shared/InstagramSection';
import { Footer } from './components/shared/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
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

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#241f1c]">
      {/* Universal Luxury Navigation */}
      <Navbar
        currentPortal={currentPortal}
        onSwitchPortal={handleSwitchPortal}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPortal === 'fabric' ? (
          /* ======================================= */
          /* PORTAL 1: FABRIC COLLECTION (PRIMARY)   */
          /* ======================================= */
          <div key="fabric-portal" className="transition-opacity duration-300">
            {/* 1. Fabric Hero */}
            <FabricHero
              onSwitchPortal={handleSwitchPortal}
            />

            {/* 2. Fabric Collections Grid */}
            <FabricCollections
              onSelectCategory={(cat: FabricCategory) => handleOpenEnquiry(cat.name)}
            />

            {/* 3. New Arrivals */}
            <FabricNewArrivals
              onViewItem={handleViewFabric}
            />

            {/* 4. The Fabric Experience */}
            <FabricExperience />

            {/* 5. Portal Switcher Banner */}
            <PortalSwitcherBanner
              currentPortal={currentPortal}
              onSwitchPortal={handleSwitchPortal}
            />

            {/* 6. Lookbook / Gallery */}
            <FabricLookbook onOpenLightbox={handleOpenLightbox} />

            {/* 7. Our Story */}
            <FabricStory />

            {/* 8. Visit Our Showroom */}
            <ShowroomSection
              currentPortal={currentPortal}
            />

            {/* 9. Interactive Google Map */}
            <GoogleMapSection />

            {/* 10. Customer Reviews */}
            <CustomerReviews
              currentPortal={currentPortal}
            />

            {/* 11. Follow Us On Instagram */}
            <InstagramSection currentPortal={currentPortal} />
          </div>
        ) : (
          /* ======================================= */
          /* PORTAL 2: PERFUMES & OUD COLLECTION    */
          /* ======================================= */
          <div key="perfumes-portal" className="transition-opacity duration-300">
            {/* 1. Perfume Hero */}
            <PerfumeHero
              onSwitchPortal={handleSwitchPortal}
            />

            {/* 2. Perfume Collections Grid */}
            <PerfumeCollections
              onSelectCategory={(cat: PerfumeCategory) => handleOpenEnquiry(cat.name)}
            />

            {/* 3. Best Selling Perfumes */}
            <PerfumeBestSellers
              onViewItem={handleViewPerfume}
            />

            {/* 4. Experience The World Of Oud */}
            <WorldOfOud />

            {/* 5. Why Choose Us */}
            <PerfumeWhyChooseUs />

            {/* 6. Portal Switcher Banner */}
            <PortalSwitcherBanner
              currentPortal={currentPortal}
              onSwitchPortal={handleSwitchPortal}
            />

            {/* 7. Gift Sets */}
            <PerfumeGiftSets />

            {/* 8. Showroom (Perfume/Oud) */}
            <ShowroomSection
              currentPortal={currentPortal}
            />

            {/* 9. Interactive Google Map */}
            <GoogleMapSection />

            {/* 10. Customer Reviews */}
            <CustomerReviews
              currentPortal={currentPortal}
            />

            {/* 11. Follow Us On Instagram */}
            <InstagramSection currentPortal={currentPortal} />
          </div>
        )}
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
