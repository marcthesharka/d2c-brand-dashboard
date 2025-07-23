import { useState } from 'react';

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="w-full border-t border-gray-200 py-4 mt-8 text-center text-sm text-gray-500">
      <button onClick={() => setOpen(true)} className="underline hover:text-black">Affiliate Disclosure</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="font-bold mb-2">Affiliate Disclosure</h2>
            <p className="mb-4">Some links on Bodega may be affiliate links. We may earn a commission if you click and make a purchase, at no extra cost to you.</p>
            <button onClick={() => setOpen(false)} className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
} 