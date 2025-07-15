import React from 'react';
import { Search, Filter, Sparkles, SortAsc, SortDesc } from 'lucide-react';
import { BrandFilters } from '../types/Brand';

interface HeaderProps {
  filters: BrandFilters;
  setFilters: (filters: BrandFilters) => void;
  totalBrands: number;
  filteredCount: number;
}

const Header: React.FC<HeaderProps> = ({ filters, setFilters, totalBrands, filteredCount }) => {
  const categories = ['All', 'Food', 'Beverages', 'Snacks', 'Supplements', 'Condiments', 'Desserts'];
  const pricePoints = ['All', 'Low', 'Mid', 'Premium'];
  const launchYears = ['All', '2024', '2023', '2022', '2021', '2020'];
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'launchYear', label: 'Launch Year' },
    { value: 'followers', label: 'Followers' }
  ];

  const updateFilter = (key: keyof BrandFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cool Eats & Drinks</h1>
              <p className="text-xs text-gray-500 leading-tight">
                Showing {filteredCount} of {totalBrands} brands
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search brands..."
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
                className="pl-10 pr-4 py-1.5 w-48 border border-gray-300 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-1">
              <Filter className="h-4 w-4 text-gray-500" />
              
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-emerald-500 focus:border-transparent text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={filters.pricePoint}
                onChange={(e) => updateFilter('pricePoint', e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-emerald-500 focus:border-transparent text-sm"
              >
                {pricePoints.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
              
              <select
                value={filters.launchYear}
                onChange={(e) => updateFilter('launchYear', e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-emerald-500 focus:border-transparent text-sm"
              >
                {launchYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            {/* Sort */}
            <div className="flex items-center space-x-1 border-l border-gray-300 pl-2">
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:ring-1 focus:ring-emerald-500 focus:border-transparent text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              
              <button
                onClick={() => updateFilter('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-1 focus:ring-emerald-500 focus:border-transparent"
              >
                {filters.sortOrder === 'asc' ? 
                  <SortAsc className="h-4 w-4 text-gray-600" /> : 
                  <SortDesc className="h-4 w-4 text-gray-600" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;