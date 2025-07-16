import React from 'react';
import { TrendingUp, Users, Star, Flame } from 'lucide-react';
import { Brand } from '../types/Brand';

interface StatsProps {
  brands: Brand[];
  filteredBrands: Brand[];
}

const Stats: React.FC<StatsProps> = ({ brands, filteredBrands }) => {
  // Calculate if a brand is "new" (within past 30 days)
  const isNewBrand = (createdAt: string) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(createdAt) > thirtyDaysAgo;
  };

  const newBrandsCount = filteredBrands.filter(brand => isNewBrand(brand.createdAt)).length;
  const avgRating = filteredBrands.length > 0 
    ? (filteredBrands.reduce((sum, brand) => sum + brand.rating, 0) / filteredBrands.length).toFixed(1)
    : '0.0';
  
  const hotBrandsCount = filteredBrands.filter(brand => 
    brand.analytics && brand.analytics.hotScore > 75
  ).length;

  const totalFollowers = filteredBrands.reduce((sum, brand) => 
    sum + brand.socialMedia.instagram, 0
  );

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">New Brands (30 days)</p>
            <p className="text-2xl font-semibold text-gray-900">{newBrandsCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Star className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Avg Rating</p>
            <p className="text-2xl font-semibold text-gray-900">{avgRating}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Flame className="h-6 w-6 text-red-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Hot Brands</p>
            <p className="text-2xl font-semibold text-gray-900">{hotBrandsCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Users className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Total Followers</p>
            <p className="text-2xl font-semibold text-gray-900">{formatNumber(totalFollowers)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;