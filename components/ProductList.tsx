'use client';

import { useQuery } from '@apollo/client';
import { GetProducts, GetCategories } from '@/graphql/queries';
import { Product, Category } from '@/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ProductItem from './ProductItem';
import { useMemo, useState, useEffect } from 'react';
import Pagination from './Pagination';


const ITEMS_PER_PAGE = 10;


const ProductList = () => {

    const { data: productsData, loading: productsLoading, error: productsError } = useQuery(GetProducts);
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useQuery(GetCategories);

    const { selectedCategory, sortOrder } = useSelector((state: RootState) => state.filters);

    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when filters or sort change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortOrder]);

    // If we are loading, show a loading message
    if (productsLoading || categoriesLoading) return <p>Loading...</p>;
    if (productsError) return <p>Error: {productsError.message}</p>;
    if (categoriesError) return <p>Error: {categoriesError.message}</p>;

    const products: Product[] = productsData?.products || [];
    const categories: Category[] = categoriesData?.categories || [];

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {

        let filtered = products;
        if (selectedCategory) {
            filtered = filtered.filter(product => product.category.id === selectedCategory);
        }

        if (sortOrder) {
            filtered = [...filtered].sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.priceAmount - b.priceAmount;
                } else {
                    return b.priceAmount - a.priceAmount;
                }
            });
        }

        return filtered;
    }, [products, selectedCategory, sortOrder]);

    // Calculate the products for the current page
    const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    currentProducts.map(product => (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                        />
                    ))
                }
            </div>
            
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ProductList;