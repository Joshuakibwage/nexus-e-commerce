'use client';

import { useQuery } from '@apollo/client';
import { GetCategories } from '@/graphql/queries';
import { setCategory } from '@/store/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';


const CategoryFilter = () => {

    const { data, loading, error } = useQuery(GetCategories);
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.filters.selectedCategory);

    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const categories = data?.categories || [];

    return (
        <div>
            <label 
                htmlFor="category-select" 
                className="block text-sm font-medium text-gray-700">
                    Filter by Category
            </label>
            <select
                id="category-select"
                value={selectedCategory || ''}
                onChange={(e) => dispatch(setCategory(e.target.value || null))}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">All Categories</option>
                {
                    categories.map((category: any) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default CategoryFilter;