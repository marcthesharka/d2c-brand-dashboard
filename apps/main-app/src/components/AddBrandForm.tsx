import React, { useState } from 'react';
import { X, Plus, Minus, Upload } from 'lucide-react';
import { brandService, CreateBrandData } from '../services/brandService';

interface AddBrandFormProps {
  onClose: () => void;
  onBrandAdded?: () => void;
}

const AddBrandForm: React.FC<AddBrandFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    instagramHandle: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/send-brand-suggestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send suggestion');
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send suggestion');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-lg font-semibold mb-2">Thank you!</h2>
          <p className="mb-4">Your brand suggestion has been sent.</p>
          <button
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <form
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-semibold mb-4">Suggest a Brand</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Optional"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Instagram Handle</label>
          <input
            type="text"
            name="instagramHandle"
            value={formData.instagramHandle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Optional"
          />
        </div>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={onClose}
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandForm;