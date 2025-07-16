import React from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';

export interface FilterState {
  search: string;
  category: string;
  pricePoint: string;
  minRating: number;
  sortBy: 'name' | 'hotScore' | 'launchYear' | 'followers';
  sortOrder: 'asc' | 'desc';
}

interface FilterBarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  totalBrands: number;
  filteredCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filters, 
  onFiltersChange, 
  totalBrands, 
  filteredCount 
}) => {
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search brands, descriptions, ingredients..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Supplements">Supplements</option>
                <option value="Condiments">Condiments</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>

            <select
              value={filters.pricePoint}
              onChange={(e) => handleFilterChange('pricePoint', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">All Price Points</option>
              <option value="Low">Low</option>
              <option value="Mid">Mid</option>
              <option value="Premium">Premium</option>
            </select>

            <div className="flex items-center space-x-1">
              <SortAsc className="h-4 w-4 text-gray-500" />
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value as FilterState['sortBy'])}
                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="hotScore">Hot Score</option>
                <option value="name">Name</option>
                <option value="launchYear">Launch Year</option>
                <option value="followers">Followers</option>
              </select>
            </div>

            <select
              value={filters.sortOrder}
              onChange={(e) => handleFilterChange('sortOrder', e.target.value as 'asc' | 'desc')}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="desc">High to Low</option>
              <option value="asc">Low to High</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-2 text-xs text-gray-500">
          Showing {filteredCount} of {totalBrands} brands
        </div>
      </div>
    </div>
  );
};

export default FilterBar;