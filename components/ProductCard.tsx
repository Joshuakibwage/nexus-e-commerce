'use client';

import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
        
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                {
                    product.images.length > 0 ? (
                        <Image
                        src={`https://project-nexus-backend-q5ai.onrender.com/images/${product.images[0].id}`}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <span className="text-gray-500">No Image</span>
                    )
                }
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                        {product.currency} {product.priceAmount}
                    </span>
                    
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {product.category.name}
                    </span>
                </div>
            </div>
        </div>

    </Link>
  );
}