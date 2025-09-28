'use client';

import { setSortOrder } from '@/store/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';


const Sorting = () => {
    
    const dispatch = useDispatch();
    const sortOrder = useSelector((state: RootState) => state.filters.sortOrder);

    return (
        <div>
            <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700">Sort by Price</label>
            <select
                id="sort-select"
                value={sortOrder || ''}
                onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc' | null))}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">Default</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
};

export default Sorting;