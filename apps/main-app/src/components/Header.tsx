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
            {/* Funky door with confetti SVG icon, now with more confetti, a striped awning, and a more prominent handle */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              {/* Awning */}
              <rect x="8" y="2.5" width="16" height="4" rx="1.5" fill="#fff" stroke="#22223B" strokeWidth="1.2"/>
              <rect x="8" y="2.5" width="3.2" height="4" fill="#EA4335"/>
              <rect x="11.2" y="2.5" width="3.2" height="4" fill="#FBBC05"/>
              <rect x="14.4" y="2.5" width="3.2" height="4" fill="#34A853"/>
              <rect x="17.6" y="2.5" width="3.2" height="4" fill="#4285F4"/>
              <rect x="20.8" y="2.5" width="3.2" height="4" fill="#EA4335"/>
              {/* Door */}
              <rect x="10" y="6" width="12" height="20" rx="2" fill="#F4B400" stroke="#22223B" strokeWidth="2"/>
              {/* Door knob (more prominent) */}
              <ellipse cx="19.5" cy="16" rx="1.5" ry="1.5" fill="#22223B" stroke="#fff" strokeWidth="0.5"/>
              {/* Confetti (more, larger, more colors) */}
              <circle cx="7.5" cy="8" r="1.5" fill="#EA4335" />
              <circle cx="24.5" cy="7" r="1.3" fill="#34A853" />
              <circle cx="26.5" cy="13" r="1.1" fill="#4285F4" />
              <circle cx="6.5" cy="20" r="1.2" fill="#FBBC05" />
              <circle cx="16" cy="4.5" r="1.1" fill="#34A853" />
              <circle cx="12" cy="26" r="1.2" fill="#EA4335" />
              <circle cx="22" cy="10" r="1.1" fill="#FBBC05" />
              <circle cx="10" cy="12" r="1" fill="#4285F4" />
              <circle cx="20" cy="22" r="1.1" fill="#34A853" />
            </svg>
            <div className="flex flex-col items-center justify-center">
              <a href="/" className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors" style={{ fontFamily: 'Inter, Arial, sans-serif', textDecoration: 'none' }}>Bodega</a>
            </div>
          </div>
          
          <div className="flex items-center flex-col">
            <button
              onClick={onAddBrand}
              className="ml-auto px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-xs font-medium transition-colors"
            >
              Missed one? Suggest a brand to us
            </button>
            <a
              href="/learn"
              className="mt-1 text-xs text-emerald-600 hover:underline"
              style={{ fontWeight: 400 }}
            >
              Learn What We're Eating & Drinking
            </a>
          </div>
        </div>
      </div>
      {/* Elegant description below header */}
      <div className="w-full text-center mt-2 mb-4">
        <div className="text-gray-600 text-base tracking-wide" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, lineHeight: 1.6 }}>
          <div className="mb-1">Every day, a new consumer brand is launched somewhere in the world.</div>
          <div className="mb-1">They're kinda dope & quirky, and we keep tabs of the best ones.</div>
          <div className="font-semibold text-gray-800" style={{ fontWeight: 600 }}>
            We curate, you browse.
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;