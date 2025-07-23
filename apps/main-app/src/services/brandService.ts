import { supabase } from '../lib/supabase';
import { Brand } from '../types/Brand';

export interface CreateBrandData {
  name: string;
  description: string;
  category: 'Food' | 'Beverages' | 'Snacks' | 'Supplements' | 'Condiments' | 'Desserts';
  pricePoint: 'Low' | 'Mid' | 'Premium';
  launchYear: number;
  website: string;
  socialMedia: {
    instagram: number;
    twitter?: number;
  };
  influencers: string[];
  retailStores: string[];
  rating: number;
  logoUrl: string;
  ingredients: string[];
  targetAudience: {
    demographics: string;
    lifestyle: string;
    values: string;
    nutshell: string;
  };
}

export class BrandService {
  async getAllBrands(): Promise<Brand[]> {
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }

    const { data, error } = await supabase
      .from('brands')
      .select('*, instagram_growth_7d')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch brands: ${error.message}`);
    }

    return data.map((row: any) => this.transformFromDatabase(row));
  }

  async createBrand(brandData: CreateBrandData): Promise<Brand> {
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }

    const dbData = this.transformToDatabase(brandData);

    const { data, error } = await supabase
      .from('brands')
      .insert([dbData])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create brand: ${error.message}`);
    }

    return this.transformFromDatabase(data);
  }

  async updateBrand(id: string, brandData: Partial<CreateBrandData>): Promise<Brand> {
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }

    const dbData = this.transformToDatabase(brandData);

    const { data, error } = await supabase
      .from('brands')
      .update(dbData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update brand: ${error.message}`);
    }

    return this.transformFromDatabase(data);
  }

  async deleteBrand(id: string): Promise<void> {
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }

    const { error } = await supabase
      .from('brands')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to delete brand: ${error.message}`);
    }
  }

  async searchBrands(query: string): Promise<Brand[]> {
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }

    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .textSearch('name,description', query)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to search brands: ${error.message}`);
    }

    return data.map((row: any) => this.transformFromDatabase(row));
  }

  private transformFromDatabase(dbBrand: any): Brand {
    return {
      id: dbBrand.id,
      name: dbBrand.name,
      description: dbBrand.description,
      category: dbBrand.category,
      pricePoint: dbBrand.price_point,
      launchYear: dbBrand.launch_year,
      website: dbBrand.website,
      socialMedia: dbBrand.social_media,
      instagramHandle: dbBrand.instagram_handle || "",
      influencers: dbBrand.influencers || [],
      retailStores: dbBrand.retail_stores || [],
      rating: parseFloat(dbBrand.rating),
      logoUrl: dbBrand.logo_url,
      ingredients: dbBrand.ingredients || [],
      targetAudience: dbBrand.target_audience,
      createdAt: dbBrand.created_at,
      updatedAt: dbBrand.updated_at,
      instagram_growth_7d: dbBrand.instagram_growth_7d
    };
  }

  private transformToDatabase(brandData: Partial<CreateBrandData>): any {
    const dbData: any = {};

    if (brandData.name) dbData.name = brandData.name;
    if (brandData.description) dbData.description = brandData.description;
    if (brandData.category) dbData.category = brandData.category;
    if (brandData.pricePoint) dbData.price_point = brandData.pricePoint;
    if (brandData.launchYear) dbData.launch_year = brandData.launchYear;
    if (brandData.website) dbData.website = brandData.website;
    if (brandData.socialMedia) dbData.social_media = brandData.socialMedia;
    if (brandData.influencers) dbData.influencers = brandData.influencers;
    if (brandData.retailStores) dbData.retail_stores = brandData.retailStores;
    if (brandData.rating !== undefined) dbData.rating = brandData.rating;
    if (brandData.logoUrl) dbData.logo_url = brandData.logoUrl;
    if (brandData.ingredients) dbData.ingredients = brandData.ingredients;
    if (brandData.targetAudience) dbData.target_audience = brandData.targetAudience;

    return dbData;
  }
}

export const brandService = new BrandService();