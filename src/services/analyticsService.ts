// Analytics service for tracking brand performance and calculating hot scores

export interface AnalyticsData {
  websiteClicks: number;
  instagramFollowersLastWeek: number;
  instagramGrowthWoW: number;
  hotScore: number;
  lastUpdated: string;
}

class AnalyticsService {
  private storageKey = 'brand_analytics';

  // Get analytics data from localStorage
  getAnalyticsData(): Record<string, AnalyticsData> {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Error loading analytics data:', error);
      return {};
    }
  }

  // Save analytics data to localStorage
  saveAnalyticsData(data: Record<string, AnalyticsData>): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving analytics data:', error);
    }
  }

  // Track website click for a brand
  trackWebsiteClick(brandId: string): void {
    const analytics = this.getAnalyticsData();
    
    if (!analytics[brandId]) {
      analytics[brandId] = this.createDefaultAnalytics();
    }
    
    analytics[brandId].websiteClicks += 1;
    analytics[brandId].hotScore = this.calculateHotScore(analytics[brandId]);
    analytics[brandId].lastUpdated = new Date().toISOString();
    
    this.saveAnalyticsData(analytics);
  }

  // Update Instagram followers and calculate growth
  updateInstagramFollowers(brandId: string, currentFollowers: number): void {
    const analytics = this.getAnalyticsData();
    
    if (!analytics[brandId]) {
      analytics[brandId] = this.createDefaultAnalytics();
      analytics[brandId].instagramFollowersLastWeek = currentFollowers;
    }
    
    // Calculate week-over-week growth
    const lastWeekFollowers = analytics[brandId].instagramFollowersLastWeek;
    if (lastWeekFollowers > 0) {
      analytics[brandId].instagramGrowthWoW = 
        ((currentFollowers - lastWeekFollowers) / lastWeekFollowers) * 100;
    }
    
    analytics[brandId].hotScore = this.calculateHotScore(analytics[brandId]);
    analytics[brandId].lastUpdated = new Date().toISOString();
    
    this.saveAnalyticsData(analytics);
  }

  // Calculate hot score based only on Instagram growth
  calculateHotScore(analytics: AnalyticsData): number {
    // Normalize Instagram growth (10% growth = 50 points max)
    const growthScore = Math.min((analytics.instagramGrowthWoW / 10) * 100, 100);
    return growthScore;
  }

  // Create default analytics object
  createDefaultAnalytics(): AnalyticsData {
    return {
      websiteClicks: 0,
      instagramFollowersLastWeek: 0,
      instagramGrowthWoW: 0,
      hotScore: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  // Generate sample analytics data for demo purposes
  generateSampleAnalytics(brandId: string, currentFollowers: number): AnalyticsData {
    const baseClicks = Math.floor(Math.random() * 500) + 50;
    const baseGrowth = (Math.random() - 0.5) * 20; // -10% to +10%
    const lastWeekFollowers = Math.floor(currentFollowers / (1 + baseGrowth / 100));
    
    const analytics: AnalyticsData = {
      websiteClicks: baseClicks,
      instagramFollowersLastWeek: lastWeekFollowers,
      instagramGrowthWoW: baseGrowth,
      hotScore: 0,
      lastUpdated: new Date().toISOString()
    };
    
    analytics.hotScore = Math.max(this.calculateHotScore(analytics), 0);
    return analytics;
  }

  // Initialize analytics for all brands (for demo)
  initializeSampleData(brands: any[]): void {
    const analytics = this.getAnalyticsData();
    let hasNewData = false;
    
    brands.forEach(brand => {
      if (!analytics[brand.id]) {
        analytics[brand.id] = this.generateSampleAnalytics(brand.id, brand.socialMedia.instagram);
        hasNewData = true;
      }
    });
    
    if (hasNewData) {
      this.saveAnalyticsData(analytics);
    }
  }

  // Get analytics for a specific brand
  getBrandAnalytics(brandId: string): AnalyticsData | null {
    const analytics = this.getAnalyticsData();
    return analytics[brandId] || null;
  }

  // Get all brands sorted by hot score
  getHotRankings(): Array<{ brandId: string; hotScore: number }> {
    const analytics = this.getAnalyticsData();
    return Object.entries(analytics)
      .map(([brandId, data]) => ({ brandId, hotScore: data.hotScore }))
      .sort((a, b) => b.hotScore - a.hotScore);
  }
}

export const analyticsService = new AnalyticsService();