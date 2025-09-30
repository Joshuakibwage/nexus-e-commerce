// Base API URL
const API_BASE_URL = 'https://project-nexus-backend-q5ai.onrender.com';

// Types
export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface ProductImage {
  id: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  priceAmount: number;
  currency: string;
  images: ProductImage[];
  category: Category;
}

// Helper function for API calls
const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// API functions
export const getCategories = async (): Promise<Category[]> => {
  const data = await fetchApi('/graphql/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetCategories {
          categories {
            id
            name
            description
          }
        }
      `,
    }),
  });
  
  return data.data.categories;
};

export const getProducts = async (): Promise<Product[]> => {
  const data = await fetchApi('/graphql/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetProducts {
          products {
            id
            name
            description
            priceAmount
            currency
            images {
              id
            }
            category {
              id
              name
            }
          }
        }
      `,
    }),
  });
  
  return data.data.products;
};

export const getProduct = async (id: string): Promise<Product> => {
  const data = await fetchApi('/graphql/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetProduct($id: ID!) {
          product(id: $id) {
            id
            name
            description
            priceAmount
            currency
            images {
              id
            }
            category {
              id
              name
            }
          }
        }
      `,
      variables: { id },
    }),
  });
  
  return data.data.product;
};