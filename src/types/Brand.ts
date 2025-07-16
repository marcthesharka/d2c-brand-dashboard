export interface Brand {
  id: string;
  name: string;
  description: string;
  category: 'Food' | 'Beverages' | 'Snacks' | 'Supplements' | 'Condiments' | 'Desserts';
  pricePoint: 'Low' | 'Mid' | 'Premium';
  launchYear: number;
  website: string;
  socialMedia: {
    instagram: number;
    twitter: number;
  };
  influencers: string[];
  retailStores: string[];
  rating: number;
  logoUrl: string;
  ingredients: string[];
  targetAudience: {
    demographics: string;
    lifestyle: string;
    values: string;
    painPoints: string[];
  };
  isNew?: boolean;
  createdAt?: string;
  updatedAt?: string;
  analytics?: {
    websiteClicks: number;
    instagramFollowersLastWeek: number;
    instagramGrowthWoW: number;
    hotScore: number;
    lastUpdated: string;
  };
}

export interface BrandFilters {
  search: string;
  category: string;
  pricePoint: string;
  launchYear: string;
  rating: number;
  sortBy: 'name' | 'rating' | 'launchYear' | 'followers' | 'hot';
  sortOrder: 'asc' | 'desc';
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}