import { Brand } from '../types/Brand';

export const sampleBrands: Brand[] = [
  {
    id: '1',
    name: 'Wellness Greens',
    description: 'Premium superfood powder blend featuring organic kale, spirulina, and adaptogenic herbs for daily wellness.',
    category: 'Supplements',
    pricePoint: 'Premium',
    launchYear: 2023,
    website: 'wellnessgreens.com',
    socialMedia: {
      instagram: 45000,
      twitter: 12000
    },
    influencers: ['@fitnessguru', '@healthylifestyle', '@wellnesswarrior'],
    retailStores: ['Whole Foods', 'Target', 'Thrive Market'],
    rating: 4.8,
    logoUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Organic Kale Powder',
      'Spirulina',
      'Chlorella',
      'Ashwagandha Root Extract',
      'Rhodiola Rosea',
      'Organic Wheatgrass',
      'Barley Grass',
      'Alfalfa Leaf',
      'Natural Vanilla Flavor',
      'Stevia Leaf Extract'
    ],
    targetAudience: {
      demographics: 'Health-conscious millennials and Gen Z, ages 25-40, primarily female',
      lifestyle: 'Busy professionals seeking convenient nutrition, fitness enthusiasts, wellness-focused individuals',
      values: 'Sustainability, clean eating, holistic health, transparency in ingredients',
      painPoints: ['Lack of time for proper nutrition', 'Energy crashes', 'Difficulty getting enough greens', 'Stress management']
    },
    isNew: true,
    analytics: {
      websiteClicks: 342,
      instagramFollowersLastWeek: 43200,
      instagramGrowthWoW: 4.2,
      hotScore: 78.5,
      lastUpdated: '2025-01-15T10:30:00Z'
    }
  },
  {
    id: '2',
    name: 'Artisan Oat Co.',
    description: 'Hand-crafted oat milk made from Scottish oats with zero additives and sustainably sourced ingredients.',
    category: 'Beverages',
    pricePoint: 'Mid',
    launchYear: 2024,
    website: 'artisanoatco.com',
    socialMedia: {
      instagram: 28000,
      twitter: 8500
    },
    influencers: ['@plantbasedlife', '@sustainableeats', '@oatmilklover'],
    retailStores: ['Sprouts', 'Fresh Market', 'Local Co-ops'],
    rating: 4.6,
    logoUrl: 'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Organic Scottish Oats',
      'Filtered Water',
      'Sea Salt'
    ],
    targetAudience: {
      demographics: 'Environmentally conscious consumers, ages 28-45, mixed gender with slight female skew',
      lifestyle: 'Plant-based dieters, coffee enthusiasts, sustainability advocates, artisan food lovers',
      values: 'Environmental responsibility, minimal processing, quality craftsmanship, ethical sourcing',
      painPoints: ['Dairy intolerance', 'Environmental guilt from dairy consumption', 'Desire for premium plant-based options']
    },
    isNew: true
  },
  {
    id: '3',
    name: 'Spice House Blends',
    description: 'Small-batch spice blends inspired by global cuisine, sourced directly from farmers worldwide.',
    category: 'Condiments',
    pricePoint: 'Mid',
    launchYear: 2022,
    website: 'spicehouseblends.com',
    socialMedia: {
      instagram: 67000,
      twitter: 15000
    },
    influencers: ['@spicequeen', '@globalflavors', '@cookingwithspice'],
    retailStores: ['Williams Sonoma', 'Sur La Table', 'Amazon'],
    rating: 4.9,
    logoUrl: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Organic Turmeric',
      'Cumin Seeds',
      'Coriander Seeds',
      'Cardamom Pods',
      'Cinnamon Bark',
      'Black Peppercorns',
      'Fennel Seeds',
      'Star Anise',
      'Cloves',
      'Bay Leaves'
    ],
    targetAudience: {
      demographics: 'Culinary enthusiasts, ages 30-55, higher income households, food bloggers',
      lifestyle: 'Home cooking enthusiasts, travel lovers, cultural food explorers, entertaining hosts',
      values: 'Authenticity, cultural appreciation, quality ingredients, culinary adventure',
      painPoints: ['Bland home cooking', 'Expensive restaurant dining', 'Limited spice knowledge', 'Desire for authentic flavors']
    }
  },
  {
    id: '4',
    name: 'Crunch Factory',
    description: 'Innovative vegetable chips made from upcycled produce, creating zero-waste snacking solutions.',
    category: 'Snacks',
    pricePoint: 'Mid',
    launchYear: 2023,
    website: 'crunchfactory.com',
    socialMedia: {
      instagram: 52000,
      twitter: 19000
    },
    influencers: ['@zerowastechef', '@sustainablesnacks', '@veggielover'],
    retailStores: ['Kroger', 'Safeway', 'Trader Joes'],
    rating: 4.4,
    logoUrl: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Upcycled Sweet Potato',
      'Upcycled Beets',
      'Upcycled Carrots',
      'Sunflower Oil',
      'Sea Salt',
      'Natural Rosemary Extract'
    ],
    targetAudience: {
      demographics: 'Eco-conscious snackers, ages 25-40, urban professionals, parents seeking healthy options',
      lifestyle: 'Zero-waste advocates, health-conscious snackers, busy professionals, environmentally aware parents',
      values: 'Sustainability, waste reduction, healthy snacking, environmental impact',
      painPoints: ['Guilt about food waste', 'Unhealthy snack options', 'Environmental concerns', 'Convenience vs. health trade-offs']
    }
  },
  {
    id: '5',
    name: 'Pure Hydration',
    description: 'Electrolyte-enhanced water with natural minerals and pH balance, perfect for active lifestyles.',
    category: 'Beverages',
    pricePoint: 'Premium',
    launchYear: 2024,
    website: 'purehydration.com',
    socialMedia: {
      instagram: 89000,
      twitter: 34000
    },
    influencers: ['@fitnessinfluencer', '@athletelife', '@hydrationstation'],
    retailStores: ['CVS', 'Walgreens', 'GNC'],
    rating: 4.7,
    logoUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Purified Water',
      'Natural Electrolytes (Sodium, Potassium, Magnesium)',
      'Himalayan Pink Salt',
      'Calcium Chloride',
      'Natural pH Enhancers'
    ],
    targetAudience: {
      demographics: 'Active individuals, athletes, ages 20-45, fitness enthusiasts, health-conscious consumers',
      lifestyle: 'Regular exercisers, athletes, outdoor enthusiasts, wellness-focused individuals',
      values: 'Peak performance, natural ingredients, optimal hydration, active lifestyle support',
      painPoints: ['Dehydration during workouts', 'Electrolyte imbalance', 'Artificial sports drink ingredients', 'Recovery optimization']
    },
    isNew: true
  },
  {
    id: '6',
    name: 'Midnight Treats',
    description: 'Artisanal dark chocolate bars infused with exotic flavors like lavender honey and sea salt caramel.',
    category: 'Desserts',
    pricePoint: 'Premium',
    launchYear: 2023,
    website: 'midnighttreats.com',
    socialMedia: {
      instagram: 76000,
      twitter: 23000
    },
    influencers: ['@chocolateconnoisseur', '@dessertlover', '@sweettoothlife'],
    retailStores: ['Nordstrom', 'Dean & DeLuca', 'Gourmet Markets'],
    rating: 4.8,
    logoUrl: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Organic Dark Chocolate (70% Cacao)',
      'Organic Cane Sugar',
      'Cocoa Butter',
      'Lavender Extract',
      'Wildflower Honey',
      'Sea Salt',
      'Vanilla Bean',
      'Sunflower Lecithin'
    ],
    targetAudience: {
      demographics: 'Luxury food enthusiasts, ages 30-60, higher disposable income, gift buyers',
      lifestyle: 'Gourmet food lovers, special occasion celebrators, luxury seekers, artisan product collectors',
      values: 'Quality craftsmanship, unique experiences, indulgence, artisanal production',
      painPoints: ['Mass-produced chocolate disappointment', 'Desire for unique flavors', 'Gift-giving challenges', 'Special occasion treats']
    }
  },
  {
    id: '7',
    name: 'Farm Fresh Bowls',
    description: 'Ready-to-eat grain bowls featuring locally sourced vegetables and house-made dressings.',
    category: 'Food',
    pricePoint: 'Mid',
    launchYear: 2024,
    website: 'farmfreshbowls.com',
    socialMedia: {
      instagram: 41000,
      twitter: 11000
    },
    influencers: ['@healthybowls', '@farmtotable', '@quickmeals'],
    retailStores: ['Whole Foods', 'Fresh Direct', 'Local Markets'],
    rating: 4.5,
    logoUrl: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      'Organic Quinoa',
      'Local Kale',
      'Roasted Sweet Potato',
      'Chickpeas',
      'Avocado',
      'Pumpkin Seeds',
      'Tahini',
      'Lemon Juice',
      'Olive Oil',
      'Garlic',
      'Sea Salt'
    ],
    targetAudience: {
      demographics: 'Busy professionals, health-conscious consumers, ages 25-40, urban dwellers',
      lifestyle: 'Time-pressed workers, meal prep enthusiasts, health-focused eaters, convenience seekers',
      values: 'Convenience without compromise, local sourcing, nutritional balance, time efficiency',
      painPoints: ['Lack of time for meal prep', 'Unhealthy fast food options', 'Expensive healthy meals', 'Inconsistent nutrition']
    },
    isNew: true
  },
  {
    id: '8',
    name: 'Buzz Coffee Co.',
    description: 'Single-origin coffee beans roasted in small batches, delivered fresh within 48 hours of roasting.',
    category: 'Beverages',
    pricePoint: 'Mid',
    launchYear: 2022,
    website: 'buzzcoffeeco.com',
    socialMedia: {
      instagram: 93000,
      twitter: 45000
    },
    influencers: ['@coffeelover', '@morningbuzz', '@baristalife'],
    retailStores: ['Starbucks Reserve', 'Local Coffee Shops', 'Blue Bottle'],
    rating: 4.9,
    logoUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    ingredients: [
      '100% Arabica Coffee Beans',
      'Single-Origin Ethiopian Beans',
      'Natural Processing Method'
    ],
    targetAudience: {
      demographics: 'Coffee enthusiasts, ages 25-50, urban professionals, specialty coffee drinkers',
      lifestyle: 'Coffee connoisseurs, work-from-home professionals, morning ritual enthusiasts, quality seekers',
      values: 'Quality over quantity, artisanal craftsmanship, freshness, ethical sourcing',
      painPoints: ['Stale coffee from grocery stores', 'Inconsistent coffee quality', 'Desire for cafe-quality at home', 'Supporting small businesses']
    }
  }
];