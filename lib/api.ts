// Base API URL
const API_BASE_URL = 'https://project-nexus-backend-q5ai.onrender.com';

// Types based on the actual API responses
export interface Category {
  id: string;
  name: string;
  description: string;
  parent?: string;
  children?: Category[];
}

export interface ProductImage {
  id: string;
  image: string; // URL to the image
  alt_text?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price_amount: number;
  currency: string;
  images: ProductImage[];
  category: Category;
  in_stock?: boolean;
  sku?: string;
  created_at?: string;
  updated_at?: string;
}

// Helper function for REST API calls
const fetchRestApi = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    console.log('📡 Making REST API request to:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    console.log('📡 Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('📡 REST API Response:', data);
    
    return data;
  } catch (error) {
    console.error('📡 REST API call failed:', error);
    throw error;
  }
};

// Exact REST API functions with correct endpoints
export const fetchCategories = async (): Promise<Category[]> => {
  const data = await fetchRestApi('/api/v1/products/public/categories/', { method: 'GET' });
  
  // Handle different response formats
  if (Array.isArray(data)) {
    return data;
  } else if (data.results && Array.isArray(data.results)) {
    return data.results;
  } else {
    return data;
  }
};

export const fetchCategoryById = async (id: string): Promise<Category> => {
  return await fetchRestApi(`/api/v1/products/public/categories/${id}/`, { method: 'GET' });
};

export const fetchProducts = async (): Promise<Product[]> => {
  const data = await fetchRestApi('/api/v1/products/public/products/', { method: 'GET' });
  
  // Handle different response formats
  if (Array.isArray(data)) {
    return data;
  } else if (data.results && Array.isArray(data.results)) {
    return data.results;
  } else {
    return data;
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  return await fetchRestApi(`/api/v1/products/public/products/${id}/`, { method: 'GET' });
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const data = await fetchRestApi(`/api/v1/products/public/products/search/?q=${encodeURIComponent(query)}`, { 
    method: 'GET' 
  });
  
  if (Array.isArray(data)) {
    return data;
  } else if (data.results && Array.isArray(data.results)) {
    return data.results;
  } else {
    return data;
  }
};