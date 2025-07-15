import React, { useState } from 'react';
import { X, Plus, Minus, Save, Loader2 } from 'lucide-react';

interface AddBrandFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddBrandForm: React.FC<AddBrandFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Food' as const,
    price_point: 'Mid' as const,
    launch_year: new Date().getFullYear(),
    website: '',
    instagram_followers: 0,
    twitter_followers: 0,
    rating: 4.0,
    logo_url: '',
    ingredients: [''],
    influencers: [''],
    retail_stores: [''],
    demographics: '',
    lifestyle: '',
    values: '',
    pain_points: ['']
  });

  const categories = ['Food', 'Beverages', 'Snacks', 'Supplements', 'Condiments', 'Desserts'];
  const pricePoints = ['Low', 'Mid', 'Premium'];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if Supabase is configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        alert('Supabase is not configured. Please add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
        return;
      }

      // Dynamic import of supabase client
      const { supabase } = await import('../lib/supabase');
      
      // Filter out empty strings from arrays
      const cleanedData = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price_point: formData.price_point,
        launch_year: formData.launch_year,
        website: formData.website,
        social_media: {
          instagram: formData.instagram_followers,
          twitter: formData.twitter_followers
        },
        rating: formData.rating,
        logo_url: formData.logo_url,
        ingredients: formData.ingredients.filter(item => item.trim() !== ''),
        influencers: formData.influencers.filter(item => item.trim() !== ''),
        retail_stores: formData.retail_stores.filter(item => item.trim() !== ''),
        target_audience: {
          demographics: formData.demographics,
          lifestyle: formData.lifestyle,
          values: formData.values,
          painPoints: formData.pain_points.filter(item => item.trim() !== '')
        }
      };

      const { error } = await supabase
        .from('brands')
        .insert([cleanedData]);

      if (error) throw error;

      // Reset form
      setFormData({
        name: '',
        description: '',
        category: 'Food',
        price_point: 'Mid',
        launch_year: new Date().getFullYear(),
        website: '',
        instagram_followers: 0,
        twitter_followers: 0,
        rating: 4.0,
        logo_url: '',
        ingredients: [''],
        influencers: [''],
        retail_stores: [''],
        demographics: '',
        lifestyle: '',
        values: '',
        pain_points: ['']
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error adding brand:', error);
      alert('Error adding brand. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add New Brand</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website *
              </label>
              <input
                type="text"
                required
                placeholder="example.com"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Point *
              </label>
              <select
                required
                value={formData.price_point}
                onChange={(e) => handleInputChange('price_point', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {pricePoints.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Launch Year *
              </label>
              <input
                type="number"
                required
                min="1900"
                max={new Date().getFullYear() + 5}
                value={formData.launch_year}
                onChange={(e) => handleInputChange('launch_year', parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (0-5) *
              </label>
              <input
                type="number"
                required
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Logo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo URL *
            </label>
            <input
              type="url"
              required
              placeholder="https://example.com/logo.jpg"
              value={formData.logo_url}
              onChange={(e) => handleInputChange('logo_url', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram Followers
              </label>
              <input
                type="number"
                min="0"
                value={formData.instagram_followers}
                onChange={(e) => handleInputChange('instagram_followers', parseInt(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter Followers
              </label>
              <input
                type="number"
                min="0"
                value={formData.twitter_followers}
                onChange={(e) => handleInputChange('twitter_followers', parseInt(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Dynamic Arrays */}
          {[
            { field: 'ingredients', label: 'Ingredients', required: true },
            { field: 'influencers', label: 'Influencer Partners', required: false },
            { field: 'retail_stores', label: 'Retail Stores', required: false },
            { field: 'pain_points', label: 'Target Audience Pain Points', required: false }
          ].map(({ field, label, required }) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && '*'}
              </label>
              <div className="space-y-2">
                {formData[field as keyof typeof formData].map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(field, index, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder={`Enter ${label.toLowerCase().slice(0, -1)}`}
                    />
                    {formData[field as keyof typeof formData].length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem(field, index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem(field)}
                  className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 text-sm"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add {label.slice(0, -1)}</span>
                </button>
              </div>
            </div>
          ))}

          {/* Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Demographics
              </label>
              <textarea
                rows={3}
                value={formData.demographics}
                onChange={(e) => handleInputChange('demographics', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Age, gender, income level..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lifestyle
              </label>
              <textarea
                rows={3}
                value={formData.lifestyle}
                onChange={(e) => handleInputChange('lifestyle', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Busy professionals, fitness enthusiasts..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Values
              </label>
              <textarea
                rows={3}
                value={formData.values}
                onChange={(e) => handleInputChange('values', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Sustainability, health, quality..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Adding...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Add Brand</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrandForm;