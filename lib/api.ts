// Base API URL
const API_BASE_URL = 'https://project-nexus-backend-q5ai.onrender.com';

// Types based on the actual API responses
export interface ProductImage {
  id: string;
  image: string; // URL to the image
  alt_text?: string;
  product?: string; // Product ID this image belongs to
}

export interface Category {
  id: string;
  name: string;
  description: string;
  parent?: string;
  children?: Category[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price_amount: number;
  currency: string;
  images?: ProductImage[];
  category?: Category;
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

// Function to fetch product images by product ID
export const fetchProductImages = async (productId: string): Promise<ProductImage[]> => {
  const data = await fetchRestApi(`/api/v1/products/product-images/?product=${productId}`, { 
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

// Function to fetch all product images (for batch processing)
export const fetchAllProductImages = async (): Promise<ProductImage[]> => {
  const data = await fetchRestApi('/api/v1/products/product-images/', { 
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

// Enhanced product fetching that includes images and ensures categories
export const fetchProductsWithImages = async (): Promise<Product[]> => {
  // First fetch products
  const productsData = await fetchRestApi('/api/v1/products/public/products/', { method: 'GET' });
  
  let products: Product[] = [];
  
  if (Array.isArray(productsData)) {
    products = productsData;
  } else if (productsData.results && Array.isArray(productsData.results)) {
    products = productsData.results;
  } else {
    products = productsData;
  }

  // Then fetch all product images
  const allImages = await fetchAllProductImages();
  
  // Group images by product ID
  const imagesByProductId: { [key: string]: ProductImage[] } = {};
  allImages.forEach(image => {
    if (image.product) {
      if (!imagesByProductId[image.product]) {
        imagesByProductId[image.product] = [];
      }
      imagesByProductId[image.product].push(image);
    }
  });
  
  // Attach images to products and ensure category exists
  return products.map(product => ({
    ...product,
    images: imagesByProductId[product.id] || [],
    category: product.category || { id: '', name: 'Uncategorized', description: '' }
  }));
};

export const fetchProductWithImages = async (id: string): Promise<Product> => {
  // First fetch the product
  const product = await fetchRestApi(`/api/v1/products/public/products/${id}/`, { method: 'GET' });
  
  // Then fetch its images
  const images = await fetchProductImages(id);
  
  return {
    ...product,
    images,
    category: product.category || { id: '', name: 'Uncategorized', description: '' }
  };
};

// Original functions for backward compatibility
export const fetchCategories = async (): Promise<Category[]> => {
  const data = await fetchRestApi('/api/v1/products/public/categories/', { method: 'GET' });
  
  if (Array.isArray(data)) {
    return data;
  } else if (data.results && Array.isArray(data.results)) {
    return data.results;
  } else {
    return data;
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  const data = await fetchRestApi('/api/v1/products/public/products/', { method: 'GET' });
  
  let products: Product[] = [];
  
  if (Array.isArray(data)) {
    products = data;
  } else if (data.results && Array.isArray(data.results)) {
    products = data.results;
  } else {
    products = data;
  }

  // Ensure each product has at least a default category
  return products.map(product => ({
    ...product,
    category: product.category || { id: '', name: 'Uncategorized', description: '' }
  }));
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const product = await fetchRestApi(`/api/v1/products/public/products/${id}/`, { method: 'GET' });
  
  // Ensure the product has at least a default category
  return {
    ...product,
    category: product.category || { id: '', name: 'Uncategorized', description: '' }
  };
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