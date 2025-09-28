'use client';

import { useQuery } from '@apollo/client/react';
import { getProducts } from '@/graphql/queries';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import { useMemo } from 'react';

export default function ProductList() {

  const { data, loading, error } = useQuery(getProducts);
  const { selectedCategory, sortOrder, searchQuery } = useSelector((state: RootState) => state.filters);

  // Filtering and sorting products based on current filters
  const filteredAndSortedProducts = useMemo(() => {

    if (!data?.products) return [];

    let products = data.products.filter((product: Product) => {
      const matchesCategory = !selectedCategory || product.category.id === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting products by price
    if (sortOrder) {

      products = products.sort((a: Product, b: Product) => {
        return sortOrder === 'asc' 
          ? a.priceAmount - b.priceAmount 
          : b.priceAmount - a.priceAmount;
      });
    }

    return products;
  }, [data?.products, selectedCategory, sortOrder, searchQuery]);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error loading products: {error.message}</div>;

  return (
    <div>
        <div className="mb-4 text-sm text-gray-600">
            Showing {filteredAndSortedProducts.length} products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                filteredAndSortedProducts.map((product: Product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                ))
            }
        </div>
        {
            filteredAndSortedProducts.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No products found matching your criteria.
                </div>
            )
        }
    </div>
  );
}



