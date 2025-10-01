import { useState, useEffect } from 'react';
import { 
  fetchCategories, 
  fetchProductsWithImages, 
  fetchProductWithImages,
  Category, 
  Product 
} from '@/lib/api';

// Generic API hook
export const useApi = <T,>(fetcher: () => Promise<T>, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetcher();
        if (mounted) {
          setData(result);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, loading, error };
};

// Specific hooks for each endpoint
export const useCategories = () => {
  return useApi(() => fetchCategories(), []);
};

// Use the enhanced version that includes images
export const useProducts = () => {
  return useApi(() => fetchProductsWithImages(), []);
};

// Use the enhanced version for single product
export const useProduct = (id: string) => {
  return useApi(() => fetchProductWithImages(id), [id]);
};