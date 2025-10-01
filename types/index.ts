

export type Category = {
  id: string;
  name: string;
  description: string;
  parent?: string;
  children?: Category[];
};

export type ProductImage = {
  id: string;
  image: string; // URL string
  alt_text?: string;
  product?: string; // Product ID this image belongs to
};

export type Product = {
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
};

export type FilterState = {
  selectedCategory: string | null;
  sortOrder: 'asc' | 'desc' | null;
  searchQuery: string;
};

export type FilterState = {
  selectedCategory: string | null;
  sortOrder: 'asc' | 'desc' | null;
  searchQuery: string;
};


// types
export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface CategoriesQuery {
  categories: Category[];
}


export interface Product {
  id: string;
  name: string;
  description?: string;
  priceAmount: number;
  currency: string;
  images?: { id: string }[];
  category?: { id: string; name: string };
}


export interface GetProductQuery {
  product: Product;
}
