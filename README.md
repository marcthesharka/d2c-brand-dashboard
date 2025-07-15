# Cool Eats & Drinks - DTC Brand Directory

A comprehensive directory platform for discovering new Direct-to-Consumer (DTC) food and beverage brands. Built with React, TypeScript, Tailwind CSS, and Notion API.

## Features

### 🔍 Discovery & Search
- **Advanced Search**: Search by brand name, description, or ingredients
- **Smart Filtering**: Filter by category, price point, launch year, and rating
- **Sorting Options**: Sort by name, rating, launch year, or social media followers
- **Pagination**: Efficient browsing of large brand catalogs

### 📊 Brand Information
- **Comprehensive Profiles**: Detailed brand information including description, category, and pricing
- **Social Metrics**: Instagram and Twitter follower counts
- **Retail Presence**: Store availability and distribution channels
- **Consumer Ratings**: User-generated ratings and reviews

### 🧪 Detailed Product Data
- **Full Ingredient Lists**: Complete ingredient transparency
- **AI-Generated Audience Profiles**: Target demographics, lifestyle, values, and pain points
- **Influencer Partnerships**: Connected influencer and brand ambassador information
- **Launch Timeline**: Brand establishment and growth tracking

### 🎨 User Experience
- **Compact Design**: Optimized for browsing hundreds of brands
- **Logo-First Approach**: Brand recognition through logo display
- **Expandable Details**: Click to reveal detailed ingredient and audience information
- **Responsive Design**: Optimized for desktop and mobile devices

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Optimized for Vercel

## Vercel Deployment

This project is optimized for Vercel deployment with:
- Automatic build detection
- Environment variable support
- Edge function compatibility
- Static site generation

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. **Deploy** - Vercel will automatically detect the build settings

## Notion Database Setup

### Required Notion Database Properties

Create a Notion database with the following properties:

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Name** | Title | Brand name |
| **Description** | Text | Brand description |
| **Category** | Select | Food, Beverages, Snacks, Supplements, Condiments, Desserts |
| **Price Point** | Select | Low, Mid, Premium |
| **Launch Year** | Number | Year established |
| **Website** | Text | Website URL |
| **Social Media** | Text | JSON: `{"instagram": 45000, "twitter": 12000}` |
| **Influencers** | Multi-select | Influencer handles |
| **Retail Stores** | Multi-select | Store names |
| **Rating** | Number | 0-5 scale |
| **Logo** | Files & media | Brand logo image |
| **Ingredients** | Multi-select | Full ingredient list |
| **Target Audience** | Text | JSON: `{"demographics": "...", "lifestyle": "...", "values": "...", "painPoints": [...]}` |
| **Is New** | Checkbox | New brand flag |

## Getting Started

### Prerequisites
- Node.js 18+
- Notion account with integration setup
- Environment variables configured

### Installation
```bash
npm install
```

### Notion Integration Setup

1. **Create a Notion Integration**:
   - Go to https://www.notion.so/my-integrations
   - Click "New integration"
   - Give it a name and select your workspace
   - Copy the "Internal Integration Token"

2. **Share Database with Integration**:
   - Open your Notion database
   - Click "Share" → "Invite"
   - Search for your integration name and invite it

3. **Get Database ID**:
   - Copy the database URL: `https://notion.so/workspace/DATABASE_ID?v=...`
   - Extract the DATABASE_ID (32-character string)

### Environment Setup
Create a `.env` file:
```
VITE_NOTION_TOKEN=your_notion_integration_token
VITE_NOTION_DATABASE_ID=your_notion_database_id
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Notion Database Management

### Adding New Brands
1. Open your Notion database
2. Click "New" to create a new page
3. Fill in all the required properties
4. The website will automatically fetch and display the new brand

### Data Format Examples

**Social Media** (Text field with JSON):
```json
{"instagram": 45000, "twitter": 12000}
```

**Target Audience** (Text field with JSON):
```json
{
  "demographics": "Health-conscious millennials, ages 25-40",
  "lifestyle": "Busy professionals seeking convenient nutrition",
  "values": "Sustainability, clean eating, transparency",
  "painPoints": ["Lack of time for proper nutrition", "Energy crashes"]
}
```

## Scaling Considerations

### Performance Optimization
- **Pagination**: 20 brands per page for optimal loading
- **Lazy Loading**: Images and detailed content loaded on demand
- **Efficient Queries**: Indexed database queries for fast filtering
- **Caching**: Browser caching for static assets

### Data Management
- **Notion Database**: Easy content management through familiar Notion interface
- **Bulk Import**: Use Notion's CSV import for large brand datasets
- **Collaborative Editing**: Multiple team members can manage brand data
- **Version History**: Notion's built-in version control for all changes

### Future Enhancements
- **AI-Powered Recommendations**: Personalized brand suggestions
- **User Accounts**: Favorites, reviews, and personalized feeds
- **Brand Verification**: Verified brand profiles and official accounts
- **Advanced Analytics**: Market trends and brand performance insights
- **Mobile App**: Native iOS/Android applications
- **Notion Automation**: Use Notion's API for automated data processing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please open an issue on GitHub or contact the development team.