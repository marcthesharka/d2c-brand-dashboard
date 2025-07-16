import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AddBrandFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddBrandForm: React.FC<AddBrandFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Food',
    pricePoint: 'Mid',
    launchYear: new Date().getFullYear(),
    website: '',
    instagramFollowers: 0,
    instagramHandle: '',
    rating: 4.0,
    logoUrl: '',
    ingredients: [''],
    influencers: [''],
    retailStores: [''],
    targetAudience: {
      demographics: '',
      lifestyle: '',
      values: '',
      painPoints: ['']
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleTargetAudienceChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      targetAudience: {
        ...prev.targetAudience,
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabase) {
      alert('Supabase is not configured. Please set up your environment variables.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Clean up arrays (remove empty strings)
      const cleanedData = {
        ...formData,
        ingredients: formData.ingredients.filter(item => item.trim() !== ''),
        influencers: formData.influencers.filter(item => item.trim() !== ''),
        retail_stores: formData.retailStores.filter(item => item.trim() !== ''),
        social_media: {
          instagram: formData.instagramFollowers
        },
        instagram_handle: formData.instagramHandle,
        logo_url: formData.logoUrl,
        launch_year: formData.launchYear,
        price_point: formData.pricePoint,
        target_audience: {
          ...formData.targetAudience,
          painPoints: formData.targetAudience.painPoints.filter(item => item.trim() !== '')
        }
      };

      // Remove form-specific fields
      const { instagramFollowers, instagramHandle, logoUrl, retailStores, ...dbData } = cleanedData;

      const { error } = await supabase
        .from('brands')
        .insert([dbData]);

      if (error) {
        throw error;
      }

      onSuccess();
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        category: 'Food',
        pricePoint: 'Mid',
        launchYear: new Date().getFullYear(),
        website: '',
        instagramFollowers: 0,
        instagramHandle: '',
        rating: 4.0,
        logoUrl: '',
        ingredients: [''],
        influencers: [''],
        retailStores: [''],
        targetAudience: {
          demographics: '',
          lifestyle: '',
          values: '',
          painPoints: ['']
        }
      });

    } catch (error) {
      console.error('Error adding brand:', error);
      alert('Failed to add brand. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Add New Brand</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
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
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="Food">Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Supplements">Supplements</option>
                <option value="Condiments">Condiments</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Point *
              </label>
              <select
                value={formData.pricePoint}
                onChange={(e) => handleInputChange('pricePoint', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="Low">Low</option>
                <option value="Mid">Mid</option>
                <option value="Premium">Premium</option>
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
                value={formData.launchYear}
                onChange={(e) => handleInputChange('launchYear', parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating *
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
              value={formData.logoUrl}
              onChange={(e) => handleInputChange('logoUrl', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram Followers *
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.instagramFollowers}
                onChange={(e) => handleInputChange('instagramFollowers', parseInt(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram Handle *
              </label>
              <input
                type="text"
                required
                placeholder="brandname"
                value={formData.instagramHandle}
                onChange={(e) => handleInputChange('instagramHandle', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Dynamic Arrays */}
          {[
            { field: 'ingredients', label: 'Ingredients' },
            { field: 'influencers', label: 'Influencer Partners' },
            { field: 'retailStores', label: 'Retail Stores' }
          ].map(({ field, label }) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
              {formData[field as keyof typeof formData].map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
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
                      className="text-red-600 hover:text-red-800"
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
          ))}

          {/* Target Audience */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Target Audience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Demographics
                </label>
                <input
                  type="text"
                  value={formData.targetAudience.demographics}
                  onChange={(e) => handleTargetAudienceChange('demographics', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="e.g., Health-conscious millennials, ages 25-40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lifestyle
                </label>
                <input
                  type="text"
                  value={formData.targetAudience.lifestyle}
                  onChange={(e) => handleTargetAudienceChange('lifestyle', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="e.g., Busy professionals seeking convenience"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Values
              </label>
              <input
                type="text"
                value={formData.targetAudience.values}
                onChange={(e) => handleTargetAudienceChange('values', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., Sustainability, clean eating, transparency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pain Points
              </label>
              {formData.targetAudience.painPoints.map((painPoint: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={painPoint}
                    onChange={(e) => handleTargetAudienceChange('painPoints', 
                      formData.targetAudience.painPoints.map((item: string, i: number) => 
                        i === index ? e.target.value : item
                      )
                    )}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter pain point"
                  />
                  {formData.targetAudience.painPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleTargetAudienceChange('painPoints',
                        formData.targetAudience.painPoints.filter((_: string, i: number) => i !== index)
                      )}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleTargetAudienceChange('painPoints', 
                  [...formData.targetAudience.painPoints, '']
                )}
                className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 text-sm"
              >
                <Plus className="h-4 w-4" />
                <span>Add Pain Point</span>
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Adding...' : 'Add Brand'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrandForm;