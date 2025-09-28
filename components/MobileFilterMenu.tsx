'use client';

import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import SearchBar from './SearchBar';

export default function MobileFilterMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
        {/* Mobile Filter Button */}
        <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white border border-gray-300 rounded-lg p-3 font-medium text-gray-700 mb-4 flex items-center justify-center gap-2"
        >
            <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" 
                />
            </svg>
            Filters & Sort
        </button>

        {/* Mobile Filter Overlay */}
        {
            isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto">
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Filters</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            <SearchBar />
                            <CategoryFilter />
                            <Sorting />
                            
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
    </div>
  );
}