// export type Category = {
//   id: string;
//   name: string;
//   description: string;
// };

// export type Product = {
//   id: string;
//   name: string;
//   description: string;
//   priceAmount: number;
//   currency: string;
//   images: { id: string }[];
//   category: Category;
// };

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
