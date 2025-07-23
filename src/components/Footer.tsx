import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showDisclosure, setShowDisclosure] = useState(false);

  return (
    <footer className="w-full text-center text-xs text-gray-400 py-2 border-t border-gray-100 mt-8">
      <button
        className="text-emerald-600 hover:underline bg-transparent border-none cursor-pointer p-0"
        style={{ fontWeight: 400 }}
        onClick={() => setShowDisclosure(true)}
      >
        Disclosure
      </button>
      {showDisclosure && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-gray-700">
            <h2 className="text-lg font-semibold mb-2">Affiliate Disclosure</h2>
            <p>Some links may be affiliate links. We may earn a commission if you make a purchase.</p>
            <button
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              onClick={() => setShowDisclosure(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 