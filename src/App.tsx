import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import FilterBar, { FilterState } from './components/FilterBar';
import BrandCard from './components/BrandCard';
import Stats from './components/Stats';
import Pagination from './components/Pagination';
import AddBrandForm from './components/AddBrandForm';
import { Brand, PaginationInfo } from './types/Brand';
import { sampleBrands } from './data/sampleBrands';
import { analyticsService } from './services/analyticsService';

const ITEMS_PER_PAGE = 20;

function App() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    pricePoint: '',
    minRating: 0,
    sortBy: 'hotScore',
    sortOrder: 'desc'
  });

  // Load sample data and initialize analytics
  useEffect(() => {
    const loadData = async () => {
      try {
        // Use sample data
        const brandsWithAnalytics = sampleBrands.map(brand => ({
          ...brand,
          analytics: analyticsService.getBrandAnalytics(brand.id) || 
                    analyticsService.generateSampleAnalytics(brand.id, brand.socialMedia.instagram)
        }));
        
        // Initialize analytics for all brands
        analyticsService.initializeSampleData(brandsWithAnalytics);
        
        setBrands(brandsWithAnalytics);
      } catch (error) {
        console.error('Error loading data:', error);
        setBrands(sampleBrands);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter and sort brands
  const filteredBrands = useMemo(() => {
    let filtered = brands.filter(brand => {
      const matchesSearch = !filters.search || 
        brand.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        brand.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        brand.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(filters.search.toLowerCase())
        );
      
      const matchesCategory = !filters.category || brand.category === filters.category;
      const matchesPricePoint = !filters.pricePoint || brand.pricePoint === filters.pricePoint;
      const matchesRating = brand.rating >= filters.minRating;
      
      return matchesSearch && matchesCategory && matchesPricePoint && matchesRating;
    });

    // Sort brands
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'hotScore':
          aValue = a.analytics?.hotScore || 0;
          bValue = b.analytics?.hotScore || 0;
          break;
        case 'launchYear':
          aValue = a.launchYear;
          bValue = b.launchYear;
          break;
        case 'followers':
          aValue = a.socialMedia.instagram;
          bValue = b.socialMedia.instagram;
          break;
        default:
          aValue = a.analytics?.hotScore || 0;
          bValue = b.analytics?.hotScore || 0;
      }
      
      if (filters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [brands, filters]);

  // Pagination
  const paginatedBrands = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBrands.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBrands, currentPage]);

  const pagination: PaginationInfo = {
    currentPage,
    totalPages: Math.ceil(filteredBrands.length / ITEMS_PER_PAGE),
    totalItems: filteredBrands.length,
    itemsPerPage: ITEMS_PER_PAGE
  };

  // Handle website click tracking
  const handleWebsiteClick = (brandId: string) => {
    analyticsService.trackWebsiteClick(brandId);
    
    // Update the brand's analytics in state
    setBrands(prevBrands => 
      prevBrands.map(brand => 
        brand.id === brandId 
          ? { ...brand, analytics: analyticsService.getBrandAnalytics(brandId) }
          : brand
      )
    );
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle filter changes
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle successful brand addition
  const handleBrandAdded = () => {
    // In a real app, this would refetch from the database
    // For now, we'll just close the form
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading brands...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        totalBrands={brands.length}
        filteredCount={filteredBrands.length}
        onAddBrand={() => setShowAddForm(true)}
      />
      
      <main className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <Stats brands={brands} filteredBrands={filteredBrands} />
        </div>
        
        <FilterBar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          totalBrands={brands.length}
          filteredCount={filteredBrands.length}
        />
        
        {/* Brands List */}
        <div className="bg-white shadow-sm">
          {/* Table Header */}
          <div className="hidden lg:flex items-center px-4 py-2 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="w-8 mr-3"></div>
            <div className="min-w-0 flex-1 max-w-xs">Brand</div>
            <div className="min-w-0 flex-1 max-w-xs px-2">Category</div>
            <div className="min-w-0 flex-1 max-w-xs px-2">Price</div>
            <div className="min-w-0 flex-1 max-w-xs px-2">Year</div>
            <div className="min-w-0 flex-1 max-w-xs px-2">Hot Score</div>
            <div className="min-w-0 flex-1 max-w-xs px-2">Social</div>
            <div className="ml-2">Actions</div>
          </div>
          
          {/* Brands */}
          <div className="divide-y divide-gray-200">
            {paginatedBrands.length > 0 ? (
              paginatedBrands.map((brand) => (
                <BrandCard
                  key={brand.id}
                  brand={brand}
                  onWebsiteClick={handleWebsiteClick}
                />
              ))
            ) : (
              <div className="px-4 py-12 text-center">
                <p className="text-gray-500">No brands found matching your criteria.</p>
                <button
                  onClick={() => setFilters({
                    search: '',
                    category: '',
                    pricePoint: '',
                    minRating: 0,
                    sortBy: 'hotScore',
                    sortOrder: 'desc'
                  })}
                  className="mt-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Pagination */}
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </main>

      {/* Add Brand Form Modal */}
      <AddBrandForm
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onSuccess={handleBrandAdded}
      />
    </div>
  );
}

export default App;