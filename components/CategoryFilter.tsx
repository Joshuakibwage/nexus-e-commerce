'use client';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '@/graphql/queries';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/store/slices/filterSlice';
import { RootState } from '@/store/store';
import { Category } from '@/types';



export default function CategoryFilter() {

  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: RootState) => state.filters.selectedCategory);

  if (loading) return <div className="p-4">Loading categories...</div>;
  if (error) return <div className="p-4 text-red-600">Error loading categories</div>;

  const categories = data?.categories || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">

        <h3 className="font-semibold mb-3">Filter by Category</h3>

        <div className="space-y-2">
            <button
                onClick={() => dispatch(setCategory(null))}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                    selectedCategory === null
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                >
                All Categories
            </button>
            {   
                categories.map((category: Category) => (
                    <button
                        key={category.id}
                        onClick={() => dispatch(setCategory(category.id))}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-800'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {category.name}
                    </button>
                ))
            }
        </div>
    </div>
  );
}