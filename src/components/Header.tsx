import React from 'react';
import { Sparkles, Plus } from 'lucide-react';

interface HeaderProps {
  totalBrands: number;
  filteredCount: number;
  onAddBrand: () => void;
}

const Header: React.FC<HeaderProps> = ({ totalBrands, filteredCount, onAddBrand }) => {

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
          
          <div className="flex items-center">
            <button
              onClick={onAddBrand}
              className="ml-auto px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-xs font-medium transition-colors"
            >
              Missed one? Suggest a brand to us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;