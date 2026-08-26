import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Droplet, Layers, PhoneCall, ChevronRight } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { PortalType } from '../types';

interface NavbarProps {
  currentPortal: PortalType;
  onSwitchPortal: (portal: PortalType) => void;
  onOpenEnquiry: (itemName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPortal,
  onSwitchPortal,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fabricNavLinks = [
    { label: 'Home', href: '#fabric-hero' },
    { label: 'Collections', href: '#fabric-collections' },
    { label: 'New Arrivals', href: '#fabric-new-arrivals' },
    { label: 'Lookbook', href: '#fabric-lookbook' },
    { label: 'About Us', href: '#fabric-story' },
    { label: 'Visit Us', href: '#showroom-section' },
    { label: 'Contact', href: '#contact-footer' },
  ];

  const perfumeNavLinks = [
    { label: 'Home', href: '#perfume-hero' },
    { label: 'Collections', href: '#perfume-collections' },
    { label: 'Best Sellers', href: '#perfume-best-sellers' },
    { label: 'World of Oud', href: '#perfume-oud-world' },
    { label: 'Gift Sets', href: '#perfume-gift-sets' },
    { label: 'Visit Us', href: '#showroom-section' },
    { label: 'Contact', href: '#contact-footer' },
  ];

  const currentLinks = currentPortal === 'fabric' ? fabricNavLinks : perfumeNavLinks;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Department Switch Ribbon */}
      <div className="bg-[#1f1a17] text-[#ded3c5] text-xs py-2 px-4 border-b border-[#362e29] sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="text-[#a89d91]">Showroom Portals:</span>
            <div className="inline-flex rounded-full bg-[#2c2521] p-0.5 border border-[#443a34]">
              <button
                onClick={() => onSwitchPortal('fabric')}
                id="top-switch-fabric-btn"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  currentPortal === 'fabric'
                    ? 'bg-[#c5a059] text-[#1a1614] shadow-xs font-semibold'
                    : 'text-[#bbb0a4] hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Fabric Collection</span>
              </button>
              <button
                onClick={() => onSwitchPortal('perfumes')}
                id="top-switch-perfumes-btn"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  currentPortal === 'perfumes'
                    ? 'bg-[#c5a059] text-[#1a1614] shadow-xs font-semibold'
                    : 'text-[#bbb0a4] hover:text-white hover:bg-white/5'
                }`}
              >
                <Droplet className="w-3 h-3" />
                <span>Perfumes & Oud</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-[#a89d91]">
            <span className="hidden md:inline text-[#c5a059] font-normal">
              Mon–Sat: 9 AM–8 PM | Sun: 9 AM–2 PM
            </span>
            <a 
              href={`tel:${SHOWROOM_INFO.primaryPhone}`} 
              className="hover:text-[#c5a059] transition-colors flex items-center gap-1 font-medium text-[#ded3c5]"
            >
              <PhoneCall className="w-3 h-3 text-[#c5a059]" />
              <span>{SHOWROOM_INFO.displayPrimaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-[37px] sm:top-[33px] z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fcfaf7]/95 backdrop-blur-md shadow-sm border-b border-[#ebd8c7]'
            : 'bg-[#fcfaf7] border-b border-[#f0e6da]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                id="brand-logo-btn"
                className="text-left group cursor-pointer"
              >
                <span className="block font-display text-xl sm:text-2xl lg:text-2xl font-bold tracking-[0.2em] text-[#1f1a17] group-hover:text-[#8a6825] transition-colors">
                  SHALIMAR
                </span>
                <span className="block text-[10px] tracking-[0.35em] text-[#73685e] uppercase -mt-0.5">
                  COLLECTION
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {currentLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium uppercase tracking-wider text-[#4a413a] hover:text-[#8a6825] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b38e44] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Area */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Portal Switch Button */}
              {currentPortal === 'fabric' ? (
                <button
                  onClick={() => onSwitchPortal('perfumes')}
                  id="nav-switch-to-perfumes-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f4ece1] border border-[#e4d6c3] text-[#8a6825] hover:bg-[#ebdcc8] text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <Droplet className="w-3.5 h-3.5 text-[#8a6825]" />
                  <span>Perfumes & Oud</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#8a6825]" />
                </button>
              ) : (
                <button
                  onClick={() => onSwitchPortal('fabric')}
                  id="nav-switch-to-fabric-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f4ece1] border border-[#e4d6c3] text-[#8a6825] hover:bg-[#ebdcc8] text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5 text-[#8a6825]" />
                  <span>Fabric Collection</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#8a6825]" />
                </button>
              )}

              {/* Book Cost CTA */}
              <button
                onClick={() => onOpenEnquiry()}
                id="nav-book-cost-btn"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#241f1c] hover:bg-[#3d342f] text-[#fcfaf7] text-xs font-semibold uppercase tracking-wider shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Book Cost</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => onOpenEnquiry()}
                id="mobile-book-cost-btn"
                className="px-3 py-1.5 rounded-lg bg-[#241f1c] text-white text-xs font-medium uppercase tracking-wider cursor-pointer"
              >
                Book Cost
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-hamburger-btn"
                className="p-2 rounded-xl text-[#3c342f] hover:bg-[#eee6da] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fcfaf7] border-b border-[#e4d6c3] px-6 pt-4 pb-6 space-y-4 shadow-lg">
            <div className="p-3 rounded-xl bg-[#f4ece1] border border-[#e2d5c3] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#73685e] block">Switch Department</span>
                <span className="text-sm font-serif font-medium text-[#1f1a17]">
                  {currentPortal === 'fabric' ? 'Explore Fragrance Lounge' : 'Explore Textile Collection'}
                </span>
              </div>
              <button
                onClick={() => {
                  onSwitchPortal(currentPortal === 'fabric' ? 'perfumes' : 'fabric');
                  setMobileMenuOpen(false);
                }}
                id="mobile-drawer-portal-switch-btn"
                className="px-3 py-1.5 rounded-lg bg-[#241f1c] text-[#fcfaf7] text-xs font-medium cursor-pointer"
              >
                {currentPortal === 'fabric' ? 'Open Fragrance' : 'Open Fabric'}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              {currentLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 px-3 rounded-lg text-sm font-medium text-[#3c342f] hover:bg-[#eee6da] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#a89d91]" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                id="mobile-drawer-book-cost-btn"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#241f1c] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                <span>Book Cost</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
