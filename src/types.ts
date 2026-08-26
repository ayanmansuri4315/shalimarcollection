export type PortalType = 'fabric' | 'perfumes';

export interface FabricItem {
  id: string;
  name: string;
  category: string;
  weave?: string;
  composition: string;
  description: string;
  image: string;
  tag?: string;
  idealFor?: string;
  origin?: string;
  colorPalette?: string[];
}

export interface FabricCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface PerfumeItem {
  id: string;
  name: string;
  collection: string;
  type: string; // e.g. "Extrait de Parfum", "Pure Dehn Al Oud", "Attar Concentrate"
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  description: string;
  image: string;
  size?: string;
  origin?: string;
  bestSeller?: boolean;
}

export interface PerfumeCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface OudCategory {
  id: string;
  name: string;
  origin: string;
  aging: string;
  scentProfile: string;
  description: string;
  image: string;
}

export interface GiftSet {
  id: string;
  name: string;
  includes: string[];
  packaging: string;
  description: string;
  image: string;
  badge?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Fabrics' | 'Textures' | 'Showroom' | 'Ethnic';
  image: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface InstagramReel {
  id: string;
  category?: string;
  title: string;
  caption: string;
  views: string;
  duration: string;
  thumbnail: string;
  reelUrl?: string;
  tag: string;
}

export interface ShowroomInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  pincode: string;
  fullAddress: string;
  landmark?: string;
  primaryPhone: string;
  displayPrimaryPhone: string;
  secondaryPhone: string;
  displaySecondaryPhone: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  openingHours: {
    monSat: string;
    sunday: string;
    weekdays?: string;
    saturday?: string;
  };
  mapEmbedUrl: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
