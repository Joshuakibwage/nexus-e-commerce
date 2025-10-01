

export type Category = {
  id: string;
  name: string;
  description: string;
  parent?: string;
  children?: Category[];
};

export type ProductImage = {
  id: string;
  image: string; 
  alt_text?: string;
  product?: string; 
};


export type FilterState = {
  selectedCategory: string | null;
  sortOrder: 'asc' | 'desc' | null;
  searchQuery: string;
};

export interface CategoriesQuery {
  categories: Category[];
}


export interface Product {
  id: string;
  name: string;
  description?: string;
  price_amount: number;
  currency: string;
  images?: {
    id: string;
    image: string;
    alt_text?: string;
  }[];
  category?: { id: string; name: string };
  in_stock?: boolean;
  sku?: string;
  created_at?: string;
  updated_at?: string;
}



export interface GetProductQuery {
  product: Product;
}



export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
   total: number;      
  itemCount: number;
}