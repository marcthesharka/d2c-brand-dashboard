import React, { useState } from 'react';
import { X, Plus, Minus, Upload } from 'lucide-react';
import { brandService, CreateBrandData } from '../services/brandService';

interface AddBrandFormProps {
  onClose: () => void;
  onBrandAdded: () => void;
}

const AddBrandForm: React.FC<AddBrandFormProps> = ({ onClose, onBrandAdded }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<CreateBrandData>({
    name: '',
    description: '',
    category: 'Food',
    pricePoint: 'Mid',
    launchYear: new Date().getFullYear(),
    website: '',
    socialMedia: {
      instagram: 0,
      twitter: 0
    },
    influencers: [],
    retailStores: [],
    rating: 4.0,
    logoUrl: '',
    ingredients: [],
    targetAudience: {
      demographics: '',
      lifestyle: '',
      values: '',
      painPoints: []
    }
  });

  const [tempInputs, setTempInputs] = useState({
    ingredient: '',
    influencer: '',
    retailStore: '',
    painPoint: ''
  });

  const handleInputChange = (field: keyof CreateBrandData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedInputChange = (parent: keyof CreateBrandData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const addArrayItem = (field: keyof CreateBrandData, value: string) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...(prev[field] as string[]), value.trim()]
      }));
    }
  };

  const removeArrayItem = (field: keyof CreateBrandData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (!formData.name.trim()) throw new Error('Brand name is required');
      if (!formData.description.trim()) throw new Error('Description is required');
      if (!formData.website.trim()) throw new Error('Website is required');
      if (!formData.logoUrl.trim()) throw new Error('Logo URL is required');

      // Clean website URL
      let website = formData.website.trim();
      if (!website.startsWith('http://') && !website.startsWith('https://')) {
        website = website.replace(/^https?:\/\//, '');
      }

      const brandData: CreateBrandData = {
        ...formData,
        website,
        name: formData.name.trim(),
        description: formData.description.trim(),
        logoUrl: formData.logoUrl.trim(),
        influencers: formData.influencers.filter(i => i.trim()),
        retailStores: formData.retailStores.filter(s => s.trim()),
        ingredients: formData.ingredients.filter(i => i.trim()),
        targetAudience: {
          ...formData.targetAudience,
          painPoints: formData.targetAudience.painPoints.filter(p => p.trim())
        }
      };

      await brandService.createBrand(brandData);
      onBrandAdded();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create brand');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add New Brand</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website *
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Point *
              </label>
              <select
                value={formData.pricePoint}
                onChange={(e) => handleInputChange('pricePoint', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="Low">Low</option>
                <option value="Mid">Mid</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Launch Year *
              </label>
              <input
                type="number"
                value={formData.launchYear}
                onChange={(e) => handleInputChange('launchYear', parseInt(e.target.value))}
                min="1900"
                max={new Date().getFullYear() + 5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (0-5) *
              </label>
              <input
                type="number"
                value={formData.rating}
                onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
                min="0"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          {/* Logo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo URL *
            </label>
            <input
              type="url"
              value={formData.logoUrl}
              onChange={(e) => handleInputChange('logoUrl', e.target.value)}
              placeholder="https://example.com/logo.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Followers
                </label>
                <input
                  type="number"
                  value={formData.socialMedia.instagram}
                  onChange={(e) => handleNestedInputChange('socialMedia', 'instagram', parseInt(e.target.value) || 0)}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter Followers
                </label>
                <input
                  type="number"
                  value={formData.socialMedia.twitter || 0}
                  onChange={(e) => handleNestedInputChange('socialMedia', 'twitter', parseInt(e.target.value) || 0)}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Array Fields */}
          {[
            { key: 'ingredients', label: 'Ingredients', tempKey: 'ingredient' },
            { key: 'influencers', label: 'Influencer Partners', tempKey: 'influencer' },
            { key: 'retailStores', label: 'Retail Stores', tempKey: 'retailStore' }
          ].map(({ key, label, tempKey }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tempInputs[tempKey as keyof typeof tempInputs]}
                  onChange={(e) => setTempInputs(prev => ({ ...prev, [tempKey]: e.target.value }))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder={`Add ${label.toLowerCase().slice(0, -1)}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    addArrayItem(key as keyof CreateBrandData, tempInputs[tempKey as keyof typeof tempInputs]);
                    setTempInputs(prev => ({ ...prev, [tempKey]: '' }));
                  }}
                  className="px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {(formData[key as keyof CreateBrandData] as string[]).map((item, index) => (
                  <span key={index} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {item}
                    <button
                      type="button"
                      onClick={() => removeArrayItem(key as keyof CreateBrandData, index)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Target Audience */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Target Audience</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Demographics
                </label>
                <input
                  type="text"
                  value={formData.targetAudience.demographics}
                  onChange={(e) => handleNestedInputChange('targetAudience', 'demographics', e.target.value)}
                  placeholder="e.g., Health-conscious millennials, ages 25-40"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lifestyle
                </label>
                <input
                  type="text"
                  value={formData.targetAudience.lifestyle}
                  onChange={(e) => handleNestedInputChange('targetAudience', 'lifestyle', e.target.value)}
                  placeholder="e.g., Busy professionals seeking convenient nutrition"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Values
                </label>
                <input
                  type="text"
                  value={formData.targetAudience.values}
                  onChange={(e) => handleNestedInputChange('targetAudience', 'values', e.target.value)}
                  placeholder="e.g., Sustainability, clean eating, transparency"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pain Points
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tempInputs.painPoint}
                    onChange={(e) => setTempInputs(prev => ({ ...prev, painPoint: e.target.value }))}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Add pain point"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (tempInputs.painPoint.trim()) {
                        handleNestedInputChange('targetAudience', 'painPoints', [
                          ...formData.targetAudience.painPoints,
                          tempInputs.painPoint.trim()
                        ]);
                        setTempInputs(prev => ({ ...prev, painPoint: '' }));
                      }
                    }}
                    className="px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.targetAudience.painPoints.map((painPoint, index) => (
                    <span key={index} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {painPoint}
                      <button
                        type="button"
                        onClick={() => {
                          handleNestedInputChange('targetAudience', 'painPoints', 
                            formData.targetAudience.painPoints.filter((_, i) => i !== index)
                          );
                        }}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Creating...' : 'Create Brand'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrandForm;