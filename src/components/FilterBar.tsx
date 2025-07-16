import React from 'react';
import { Search, Filter, SortAsc, SortDesc, Flame } from 'lucide-react';
import { BrandFilters } from '../types/Brand';

interface FilterBarProps {
  filters: BrandFilters;
  setFilters: (filters: BrandFilters) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
  const categories = ['All', 'Food', 'Beverages', 'Snacks', 'Supplements', 'Condiments', 'Desserts'];
  const pricePoints = ['All', 'Low', 'Mid', 'Premium'];
  const launchYears = ['All', '2024', '2023', '2022', '2021', '2020'];
  const sortOptions = [
    { value: 'hot', label: 'Hot 🔥', icon: Flame },
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'launchYear', label: 'Launch Year' },
    { value: 'followers', label: 'Followers' }
  ];

  const updateFilter = (key: keyof BrandFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search brands, ingredients, or descriptions..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* Filters */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm min-w-32"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={filters.pricePoint}
            onChange={(e) => updateFilter('pricePoint', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm min-w-24"
          >
            {pricePoints.map(price => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
          
          <select
            value={filters.launchYear}
            onChange={(e) => updateFilter('launchYear', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm min-w-20"
          >
            {launchYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        
        {/* Sort */}
        <div className="flex items-center space-x-2 border-l border-gray-300 pl-3">
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm min-w-28"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <button
            onClick={() => updateFilter('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            title={`Sort ${filters.sortOrder === 'asc' ? 'ascending' : 'descending'}`}
          >
            {filters.sortOrder === 'asc' ? 
              <SortAsc className="h-4 w-4 text-gray-600" /> : 
              <SortDesc className="h-4 w-4 text-gray-600" />
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;