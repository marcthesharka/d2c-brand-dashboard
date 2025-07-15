/*
  # Populate database with sample brands

  1. Data Import
    - Insert 8 sample brands with complete data
    - Includes all categories: Food, Beverages, Snacks, Supplements, Condiments, Desserts
    - Full ingredient lists, target audience data, social media metrics
    - Retail store information and influencer partnerships

  2. Data Coverage
    - Mix of new and established brands (2022-2024 launch years)
    - Various price points: Low, Mid, Premium
    - Ratings from 4.4 to 4.9
    - Complete target audience profiles with demographics, lifestyle, values, pain points
*/

-- Insert sample brands data
INSERT INTO brands (
  name, description, category, price_point, launch_year, website, 
  social_media, influencers, retail_stores, rating, logo_url, 
  ingredients, target_audience, is_new
) VALUES 
(
  'Wellness Greens',
  'Premium superfood powder blend featuring organic kale, spirulina, and adaptogenic herbs for daily wellness.',
  'Supplements',
  'Premium',
  2023,
  'wellnessgreens.com',
  '{"instagram": 45000, "twitter": 12000}'::jsonb,
  ARRAY['@fitnessguru', '@healthylifestyle', '@wellnesswarrior'],
  ARRAY['Whole Foods', 'Target', 'Thrive Market'],
  4.8,
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Organic Kale Powder', 'Spirulina', 'Chlorella', 'Ashwagandha Root Extract', 'Rhodiola Rosea', 'Organic Wheatgrass', 'Barley Grass', 'Alfalfa Leaf', 'Natural Vanilla Flavor', 'Stevia Leaf Extract'],
  '{"demographics": "Health-conscious millennials and Gen Z, ages 25-40, primarily female", "lifestyle": "Busy professionals seeking convenient nutrition, fitness enthusiasts, wellness-focused individuals", "values": "Sustainability, clean eating, holistic health, transparency in ingredients", "painPoints": ["Lack of time for proper nutrition", "Energy crashes", "Difficulty getting enough greens", "Stress management"]}'::jsonb,
  true
),
(
  'Artisan Oat Co.',
  'Hand-crafted oat milk made from Scottish oats with zero additives and sustainably sourced ingredients.',
  'Beverages',
  'Mid',
  2024,
  'artisanoatco.com',
  '{"instagram": 28000, "twitter": 8500}'::jsonb,
  ARRAY['@plantbasedlife', '@sustainableeats', '@oatmilklover'],
  ARRAY['Sprouts', 'Fresh Market', 'Local Co-ops'],
  4.6,
  'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Organic Scottish Oats', 'Filtered Water', 'Sea Salt'],
  '{"demographics": "Environmentally conscious consumers, ages 28-45, mixed gender with slight female skew", "lifestyle": "Plant-based dieters, coffee enthusiasts, sustainability advocates, artisan food lovers", "values": "Environmental responsibility, minimal processing, quality craftsmanship, ethical sourcing", "painPoints": ["Dairy intolerance", "Environmental guilt from dairy consumption", "Desire for premium plant-based options"]}'::jsonb,
  true
),
(
  'Spice House Blends',
  'Small-batch spice blends inspired by global cuisine, sourced directly from farmers worldwide.',
  'Condiments',
  'Mid',
  2022,
  'spicehouseblends.com',
  '{"instagram": 67000, "twitter": 15000}'::jsonb,
  ARRAY['@spicequeen', '@globalflavors', '@cookingwithspice'],
  ARRAY['Williams Sonoma', 'Sur La Table', 'Amazon'],
  4.9,
  'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Organic Turmeric', 'Cumin Seeds', 'Coriander Seeds', 'Cardamom Pods', 'Cinnamon Bark', 'Black Peppercorns', 'Fennel Seeds', 'Star Anise', 'Cloves', 'Bay Leaves'],
  '{"demographics": "Culinary enthusiasts, ages 30-55, higher income households, food bloggers", "lifestyle": "Home cooking enthusiasts, travel lovers, cultural food explorers, entertaining hosts", "values": "Authenticity, cultural appreciation, quality ingredients, culinary adventure", "painPoints": ["Bland home cooking", "Expensive restaurant dining", "Limited spice knowledge", "Desire for authentic flavors"]}'::jsonb,
  false
),
(
  'Crunch Factory',
  'Innovative vegetable chips made from upcycled produce, creating zero-waste snacking solutions.',
  'Snacks',
  'Mid',
  2023,
  'crunchfactory.com',
  '{"instagram": 52000, "twitter": 19000}'::jsonb,
  ARRAY['@zerowastechef', '@sustainablesnacks', '@veggielover'],
  ARRAY['Kroger', 'Safeway', 'Trader Joes'],
  4.4,
  'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Upcycled Sweet Potato', 'Upcycled Beets', 'Upcycled Carrots', 'Sunflower Oil', 'Sea Salt', 'Natural Rosemary Extract'],
  '{"demographics": "Eco-conscious snackers, ages 25-40, urban professionals, parents seeking healthy options", "lifestyle": "Zero-waste advocates, health-conscious snackers, busy professionals, environmentally aware parents", "values": "Sustainability, waste reduction, healthy snacking, environmental impact", "painPoints": ["Guilt about food waste", "Unhealthy snack options", "Environmental concerns", "Convenience vs. health trade-offs"]}'::jsonb,
  false
),
(
  'Pure Hydration',
  'Electrolyte-enhanced water with natural minerals and pH balance, perfect for active lifestyles.',
  'Beverages',
  'Premium',
  2024,
  'purehydration.com',
  '{"instagram": 89000, "twitter": 34000}'::jsonb,
  ARRAY['@fitnessinfluencer', '@athletelife', '@hydrationstation'],
  ARRAY['CVS', 'Walgreens', 'GNC'],
  4.7,
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Purified Water', 'Natural Electrolytes (Sodium, Potassium, Magnesium)', 'Himalayan Pink Salt', 'Calcium Chloride', 'Natural pH Enhancers'],
  '{"demographics": "Active individuals, athletes, ages 20-45, fitness enthusiasts, health-conscious consumers", "lifestyle": "Regular exercisers, athletes, outdoor enthusiasts, wellness-focused individuals", "values": "Peak performance, natural ingredients, optimal hydration, active lifestyle support", "painPoints": ["Dehydration during workouts", "Electrolyte imbalance", "Artificial sports drink ingredients", "Recovery optimization"]}'::jsonb,
  true
),
(
  'Midnight Treats',
  'Artisanal dark chocolate bars infused with exotic flavors like lavender honey and sea salt caramel.',
  'Desserts',
  'Premium',
  2023,
  'midnighttreats.com',
  '{"instagram": 76000, "twitter": 23000}'::jsonb,
  ARRAY['@chocolateconnoisseur', '@dessertlover', '@sweettoothlife'],
  ARRAY['Nordstrom', 'Dean & DeLuca', 'Gourmet Markets'],
  4.8,
  'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Organic Dark Chocolate (70% Cacao)', 'Organic Cane Sugar', 'Cocoa Butter', 'Lavender Extract', 'Wildflower Honey', 'Sea Salt', 'Vanilla Bean', 'Sunflower Lecithin'],
  '{"demographics": "Luxury food enthusiasts, ages 30-60, higher disposable income, gift buyers", "lifestyle": "Gourmet food lovers, special occasion celebrators, luxury seekers, artisan product collectors", "values": "Quality craftsmanship, unique experiences, indulgence, artisanal production", "painPoints": ["Mass-produced chocolate disappointment", "Desire for unique flavors", "Gift-giving challenges", "Special occasion treats"]}'::jsonb,
  false
),
(
  'Farm Fresh Bowls',
  'Ready-to-eat grain bowls featuring locally sourced vegetables and house-made dressings.',
  'Food',
  'Mid',
  2024,
  'farmfreshbowls.com',
  '{"instagram": 41000, "twitter": 11000}'::jsonb,
  ARRAY['@healthybowls', '@farmtotable', '@quickmeals'],
  ARRAY['Whole Foods', 'Fresh Direct', 'Local Markets'],
  4.5,
  'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['Organic Quinoa', 'Local Kale', 'Roasted Sweet Potato', 'Chickpeas', 'Avocado', 'Pumpkin Seeds', 'Tahini', 'Lemon Juice', 'Olive Oil', 'Garlic', 'Sea Salt'],
  '{"demographics": "Busy professionals, health-conscious consumers, ages 25-40, urban dwellers", "lifestyle": "Time-pressed workers, meal prep enthusiasts, health-focused eaters, convenience seekers", "values": "Convenience without compromise, local sourcing, nutritional balance, time efficiency", "painPoints": ["Lack of time for meal prep", "Unhealthy fast food options", "Expensive healthy meals", "Inconsistent nutrition"]}'::jsonb,
  true
),
(
  'Buzz Coffee Co.',
  'Single-origin coffee beans roasted in small batches, delivered fresh within 48 hours of roasting.',
  'Beverages',
  'Mid',
  2022,
  'buzzcoffeeco.com',
  '{"instagram": 93000, "twitter": 45000}'::jsonb,
  ARRAY['@coffeelover', '@morningbuzz', '@baristalife'],
  ARRAY['Starbucks Reserve', 'Local Coffee Shops', 'Blue Bottle'],
  4.9,
  'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  ARRAY['100% Arabica Coffee Beans', 'Single-Origin Ethiopian Beans', 'Natural Processing Method'],
  '{"demographics": "Coffee enthusiasts, ages 25-50, urban professionals, specialty coffee drinkers", "lifestyle": "Coffee connoisseurs, work-from-home professionals, morning ritual enthusiasts, quality seekers", "values": "Quality over quantity, artisanal craftsmanship, freshness, ethical sourcing", "painPoints": ["Stale coffee from grocery stores", "Inconsistent coffee quality", "Desire for cafe-quality at home", "Supporting small businesses"]}'::jsonb,
  false
)
ON CONFLICT (name) DO NOTHING;