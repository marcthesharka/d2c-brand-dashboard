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
  };
  instagramHandle: string;
  influencers: string[];
  retailStores: string[];
  rating: number;
  logoUrl: string;
  ingredients: string[];
  targetAudience: {
    demographics: string;
    lifestyle: string;
    values: string;
    nutshell: string;
  };
  createdAt: string;
  updatedAt: string;
  analytics?: AnalyticsData;
  instagram_growth_7d?: number;
  affiliate_url?: string;
}

export interface AnalyticsData {
  websiteClicks: number;
  instagramFollowersLastWeek: number;
  instagramGrowthWoW: number;
  hotScore: number;
  lastUpdated: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface FilterState {
  search: string;
  category: string;
  pricePoint: string;
  minRating: number;
  sortBy: 'name' | 'hotScore' | 'launchYear' | 'followers';
  sortOrder: 'asc' | 'desc';
}