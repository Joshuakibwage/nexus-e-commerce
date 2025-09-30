import { useState, useEffect } from 'react';
import { getCategories, getProducts, getProduct, Category, Product } from '@/lib/api';

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


export const useCategories = () => {
  return useApi(() => getCategories(), []);
};

export const useProducts = () => {
  return useApi(() => getProducts(), []);
};

export const useProduct = (id: string) => {
  return useApi(() => getProduct(id), [id]);
};