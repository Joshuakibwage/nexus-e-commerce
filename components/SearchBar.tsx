'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/store/slices/filterSlice';
import { RootState } from '@/store/store';


export default function SearchBar() {

  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.filters.searchQuery);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">

        <h3 className="font-semibold mb-3 text-gray-500">Search Products</h3>
        
        <input
            type="text"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-black"
        />
    </div>
  );
}