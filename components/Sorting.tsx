'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '@/store/slices/filterSlice';
import { RootState } from '@/store/store';

export default function Sorting() {

  const dispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.filters.sortOrder);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">

        <h3 className="font-semibold mb-3">Sort by Price</h3>
        
        <select
            value={sortOrder || ''}
            onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc' | null))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  );
}