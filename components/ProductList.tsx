'use client';

import { useProducts } from '@/hooks/useApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { useMemo } from 'react';

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProductList = () => {
  const { data: products, loading, error } = useProducts();
  const { selectedCategory, sortOrder, searchQuery } = useSelector((state: RootState) => state.filters);

  // Log the actual API response to see the structure
  console.log('📦 Products from API:', products);

  // Check for products with missing categories
  if (products) {
    const productsWithMissingCategories = products.filter(p => !p.category);
    if (productsWithMissingCategories.length > 0) {
      console.warn('⚠️ Products with missing categories:', productsWithMissingCategories);
    }
  }

  // Filter and sort products based on current filters
  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    // Log individual product structure
    if (products.length > 0) {
      console.log('🔍 Sample product structure:', products[0]);
      console.log('🔍 Product images:', products[0].images);
    }

    let filteredProducts = products.filter((product: Product) => {
      const categoryId = product.category?.id;
      const matchesCategory = !selectedCategory || categoryId === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort products by price
    if (sortOrder) {
      filteredProducts = filteredProducts.sort((a: Product, b: Product) => {
        return sortOrder === 'asc' 
          ? a.price_amount - b.price_amount 
          : b.price_amount - a.price_amount;
      });
    }

    return filteredProducts;
  }, [products, selectedCategory, sortOrder, searchQuery]);

  if (loading) return (
    <div>
      <div className="mb-4 h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
      <ProductGridSkeleton />
    </div>
  );
  
  if (error) return <div className="text-center py-8 text-red-600">Error loading products: {error}</div>;

  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredAndSortedProducts.length} products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ProductList;