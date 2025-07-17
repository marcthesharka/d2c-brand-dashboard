import React from 'react';
// Removed lucide-react icons

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
            {/* Minimalist black leaf SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black">
              <path d="M16 4C10 12 4 20 16 28C28 20 22 12 16 4Z" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Bodega</h1>
              <p className="text-xs text-gray-500 leading-tight font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
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
      {/* Elegant description below header */}
      <div className="w-full text-center mt-2 mb-4">
        <p className="italic text-gray-600 text-base tracking-wide" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
          Sana (Latin for "healthy") - discover brands that ...
        </p>
      </div>
    </header>
  );
};

export default Header;