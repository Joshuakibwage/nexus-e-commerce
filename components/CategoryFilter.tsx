'use client';

import { useQuery } from '@apollo/client/react';
import { getCategories } from '@/graphql/queries';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, clearFilters } from '@/store/slices/filterSlice';
import { RootState } from '@/store/store';
import { Category } from '@/types';



export default function CategoryFilter() {

  const { data, loading, error } = useQuery(getCategories);
  const dispatch = useDispatch();
  const { selectedCategory, sortOrder, searchQuery } = useSelector((state: RootState) => state.filters);

  const hasActiveFilters = selectedCategory !== null || sortOrder !== null || searchQuery !== '';

  if (loading) return <div className="p-4 text-gray-800">Loading categories...</div>;
  if (error) return <div className="p-4 text-red-600">Error loading categories</div>;

  const categories = data?.categories || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">

        <div className="flex justify-between items-center mb-3">

            <h3 className="font-semibold">Filter by Category</h3>
            {
                hasActiveFilters && (
                    <button
                        onClick={() => dispatch(clearFilters())}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Clear All
                    </button>
                )
            }
        </div>

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