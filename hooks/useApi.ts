import { useState, useEffect } from 'react';
import { Category, Product } from '@/lib/api';


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
  const { getCategories } = await import('@/lib/api');
  return useApi(() => getCategories(), []);
};

export const useProducts = () => {
  const { getProducts } = await import('@/lib/api');
  return useApi(() => getProducts(), []);
};

export const useProduct = (id: string) => {
  const { getProduct } = await import('@/lib/api');
  return useApi(() => getProduct(id), [id]);
};