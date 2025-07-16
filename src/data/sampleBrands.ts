import { Brand } from '../types/Brand';

export const sampleBrands: Brand[] = [
  {
    id: '1',
    name: 'Wellness Greens',
    description: 'Organic superfood powder blends designed to boost energy and support overall wellness with premium ingredients.',
    category: 'Supplements',
    pricePoint: 'Premium',
    launchYear: 2022,
    website: 'wellnessgreens.com',
    socialMedia: {
      instagram: 45000
    },
    instagramHandle: 'wellnessgreens',
    influencers: ['@healthyguru', '@fitnessmom', '@cleaneatclub'],
    retailStores: ['Whole Foods', 'Target', 'Amazon'],
    rating: 4.7,
    logoUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Spirulina', 'Chlorella', 'Wheatgrass', 'Moringa', 'Ashwagandha'],
    targetAudience: {
      demographics: 'Health-conscious millennials, ages 25-40',
      lifestyle: 'Busy professionals seeking convenient nutrition',
      values: 'Sustainability, clean eating, transparency',
      painPoints: ['Lack of time for proper nutrition', 'Energy crashes', 'Digestive issues']
    },
    createdAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Craft Cola Co',
    description: 'Small-batch artisanal cola made with real cane sugar and natural botanicals for a premium soda experience.',
    category: 'Beverages',
    pricePoint: 'Premium',
    launchYear: 2023,
    website: 'craftcolaco.com',
    socialMedia: {
      instagram: 28000
    },
    instagramHandle: 'craftcolaco',
    influencers: ['@sodaconnoisseur', '@craftbeverage', '@premiumdrinks'],
    retailStores: ['Whole Foods', 'Local Markets', 'Specialty Stores'],
    rating: 4.5,
    logoUrl: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Cane Sugar', 'Natural Cola Extract', 'Citrus Oils', 'Vanilla', 'Caramel'],
    targetAudience: {
      demographics: 'Premium beverage enthusiasts, ages 30-50',
      lifestyle: 'Quality-focused consumers who appreciate craft products',
      values: 'Authenticity, quality ingredients, supporting small business',
      painPoints: ['Artificial ingredients in mass market sodas', 'Lack of premium options', 'High fructose corn syrup']
    },
    createdAt: '2024-11-20T14:30:00Z',
    updatedAt: '2024-11-20T14:30:00Z'
  },
  {
    id: '3',
    name: 'Protein Bites',
    description: 'Delicious protein-packed snack bites made with clean ingredients to fuel your active lifestyle.',
    category: 'Snacks',
    pricePoint: 'Mid',
    launchYear: 2021,
    website: 'proteinbites.com',
    socialMedia: {
      instagram: 67000
    },
    instagramHandle: 'proteinbites',
    influencers: ['@fitnesssnacks', '@proteinpower', '@gymfuel'],
    retailStores: ['GNC', 'Dick\'s Sporting Goods', 'Amazon', 'Target'],
    rating: 4.3,
    logoUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Whey Protein', 'Almonds', 'Dates', 'Coconut Oil', 'Dark Chocolate'],
    targetAudience: {
      demographics: 'Fitness enthusiasts and athletes, ages 20-45',
      lifestyle: 'Active individuals who need convenient protein sources',
      values: 'Performance, convenience, clean nutrition',
      painPoints: ['Inconvenient protein sources', 'Artificial protein bars', 'Post-workout hunger']
    },
    createdAt: '2024-10-05T09:15:00Z',
    updatedAt: '2024-10-05T09:15:00Z'
  },
  {
    id: '4',
    name: 'Spice Masters',
    description: 'Gourmet spice blends and hot sauces crafted by chef experts to elevate your home cooking experience.',
    category: 'Condiments',
    pricePoint: 'Premium',
    launchYear: 2020,
    website: 'spicemasters.com',
    socialMedia: {
      instagram: 34000
    },
    instagramHandle: 'spicemasters',
    influencers: ['@cheflife', '@spicelovers', '@homecooking'],
    retailStores: ['Williams Sonoma', 'Sur La Table', 'Local Gourmet Stores'],
    rating: 4.8,
    logoUrl: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Organic Spices', 'Sea Salt', 'Herbs', 'Chili Peppers', 'Garlic'],
    targetAudience: {
      demographics: 'Home cooking enthusiasts, ages 30-60',
      lifestyle: 'Food lovers who enjoy experimenting with flavors',
      values: 'Quality ingredients, culinary excellence, authenticity',
      painPoints: ['Bland store-bought spices', 'Limited flavor options', 'Expensive restaurant dining']
    },
    createdAt: '2024-08-12T16:45:00Z',
    updatedAt: '2024-08-12T16:45:00Z'
  },
  {
    id: '5',
    name: 'Clean Treats',
    description: 'Guilt-free desserts made with natural sweeteners and wholesome ingredients for health-conscious sweet tooths.',
    category: 'Desserts',
    pricePoint: 'Mid',
    launchYear: 2024,
    website: 'cleantreats.com',
    socialMedia: {
      instagram: 19000
    },
    instagramHandle: 'cleantreats',
    influencers: ['@healthydesserts', '@cleaneating', '@guiltfreetreats'],
    retailStores: ['Whole Foods', 'Sprouts', 'Online Only'],
    rating: 4.4,
    logoUrl: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Almond Flour', 'Coconut Sugar', 'Organic Cocoa', 'Stevia', 'Vanilla Extract'],
    targetAudience: {
      demographics: 'Health-conscious dessert lovers, ages 25-45',
      lifestyle: 'People following clean eating or special diets',
      values: 'Health without sacrifice, natural ingredients, dietary inclusivity',
      painPoints: ['High sugar content in regular desserts', 'Limited healthy dessert options', 'Artificial sweeteners']
    },
    createdAt: '2024-12-20T11:20:00Z',
    updatedAt: '2024-12-20T11:20:00Z'
  },
  {
    id: '6',
    name: 'Farm Fresh Bowls',
    description: 'Ready-to-eat grain bowls featuring locally sourced vegetables and proteins for busy health-conscious consumers.',
    category: 'Food',
    pricePoint: 'Mid',
    launchYear: 2023,
    website: 'farmfreshbowls.com',
    socialMedia: {
      instagram: 52000
    },
    instagramHandle: 'farmfreshbowls',
    influencers: ['@mealprep', '@healthylunch', '@farmtotable'],
    retailStores: ['Whole Foods', 'Fresh Market', 'Local Co-ops'],
    rating: 4.6,
    logoUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Quinoa', 'Kale', 'Sweet Potato', 'Chickpeas', 'Tahini', 'Lemon'],
    targetAudience: {
      demographics: 'Busy professionals and health enthusiasts, ages 25-40',
      lifestyle: 'Time-pressed individuals who prioritize nutrition',
      values: 'Convenience, local sourcing, balanced nutrition',
      painPoints: ['No time for meal prep', 'Limited healthy fast food options', 'Expensive healthy meals']
    },
    createdAt: '2024-09-08T13:10:00Z',
    updatedAt: '2024-09-08T13:10:00Z'
  },
  {
    id: '7',
    name: 'Kombucha Craft',
    description: 'Small-batch fermented kombucha with unique flavor combinations and live probiotics for gut health.',
    category: 'Beverages',
    pricePoint: 'Premium',
    launchYear: 2022,
    website: 'kombuchacraft.com',
    socialMedia: {
      instagram: 41000
    },
    instagramHandle: 'kombuchacraft',
    influencers: ['@guthealth', '@fermentedfoods', '@probioticlife'],
    retailStores: ['Whole Foods', 'Natural Grocers', 'Local Health Stores'],
    rating: 4.5,
    logoUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Organic Tea', 'SCOBY', 'Ginger', 'Turmeric', 'Fruit Extracts'],
    targetAudience: {
      demographics: 'Health-conscious consumers interested in gut health, ages 25-50',
      lifestyle: 'Wellness-focused individuals seeking functional beverages',
      values: 'Gut health, natural fermentation, functional nutrition',
      painPoints: ['Digestive issues', 'Lack of probiotic options', 'Expensive health supplements']
    },
    createdAt: '2024-07-15T08:30:00Z',
    updatedAt: '2024-07-15T08:30:00Z'
  },
  {
    id: '8',
    name: 'Nutty Crunch',
    description: 'Artisanal nut and seed mixes with bold flavors and superfoods for the ultimate healthy snacking experience.',
    category: 'Snacks',
    pricePoint: 'Low',
    launchYear: 2021,
    website: 'nuttycrunch.com',
    socialMedia: {
      instagram: 23000
    },
    instagramHandle: 'nuttycrunch',
    influencers: ['@healthysnacking', '@nutlover', '@trailmix'],
    retailStores: ['Trader Joe\'s', 'Costco', 'Amazon', 'Local Markets'],
    rating: 4.2,
    logoUrl: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    ingredients: ['Almonds', 'Walnuts', 'Pumpkin Seeds', 'Dried Cranberries', 'Sea Salt'],
    targetAudience: {
      demographics: 'Snack lovers and outdoor enthusiasts, ages 20-50',
      lifestyle: 'Active individuals who need portable, healthy snacks',
      values: 'Natural ingredients, affordability, convenience',
      painPoints: ['Expensive healthy snacks', 'Limited portable options', 'Artificial ingredients in packaged snacks']
    },
    createdAt: '2024-06-22T15:45:00Z',
    updatedAt: '2024-06-22T15:45:00Z'
  }
];

'force commit to main'