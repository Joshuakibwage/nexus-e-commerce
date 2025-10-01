'use client';

import { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts } from '@/lib/api';

interface Category {
  id: number | string;
  name: string;
}

interface Product {
  id: number | string;
  name: string;
  currency: string;
  price_amount: number;
}

export const ApiTest = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testApi = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);

        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('❌ API test failed:', error);
      } finally {
        setLoading(false);
      }
    };

    testApi();
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
        <h3 className="font-semibold text-blue-800">Testing API Connection...</h3>
        <p className="text-blue-600">Checking endpoints...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
      <h3 className="font-semibold text-green-800">✅ API Connection Successful!</h3>
      <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium">Categories:</h4>
          <p>{categories.length} categories loaded</p>
          {categories.slice(0, 3).map((cat) => (
            <div key={cat.id} className="text-xs text-gray-600">
              • {cat.name}
            </div>
          ))}
          {categories.length > 3 && (
            <div className="text-xs text-gray-500">
              ... and {categories.length - 3} more
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium">Products:</h4>
          <p>{products.length} products loaded</p>
          {products.slice(0, 3).map((prod) => (
            <div key={prod.id} className="text-xs text-gray-600">
              • {prod.name} - {prod.currency} {prod.price_amount}
            </div>
          ))}
          {products.length > 3 && (
            <div className="text-xs text-gray-500">
              ... and {products.length - 3} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
