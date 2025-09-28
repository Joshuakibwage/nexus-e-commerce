'use client';

import ProductList from '@/components/ProductList';
import CategoryFilter from '@/components/CategoryFilter';
import Sorting from '@/components/Sorting';

export default function Home() {
    return (
        <div className="container mx-auto px-4">

            <h1 className="text-2xl font-bold my-4">Product Catalog</h1>

            <div className="flex flex-col md:flex-row gap-4">

                <div className="w-full md:w-1/4">
                    <CategoryFilter />
                    <Sorting />
                </div>
                
                <div className="w-full md:w-3/4">
                    <ProductList />
                </div>

            </div>
        </div>
    );
}