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
            {/* Funky door with confetti SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              {/* Door */}
              <rect x="10" y="6" width="12" height="20" rx="2" fill="#F4B400" stroke="#22223B" strokeWidth="2"/>
              {/* Door knob */}
              <circle cx="20" cy="16" r="1" fill="#22223B" />
              {/* Confetti */}
              <circle cx="8" cy="8" r="1.2" fill="#EA4335" />
              <circle cx="24" cy="7" r="1" fill="#34A853" />
              <circle cx="26" cy="12" r="0.8" fill="#4285F4" />
              <circle cx="7" cy="20" r="0.9" fill="#FBBC05" />
              <circle cx="16" cy="4.5" r="0.7" fill="#34A853" />
              <circle cx="12" cy="26" r="0.8" fill="#EA4335" />
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
          Discover the right products to fuel your lifestyle
        </p>
      </div>
    </header>
  );
};

export default Header;