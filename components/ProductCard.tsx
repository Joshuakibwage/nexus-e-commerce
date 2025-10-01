'use client';

import { Product } from '@/types';
import Link from 'next/link';
import { getImageUrl, formatPrice } from '@/lib/utils';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // Safely handle images - use optional chaining and provide fallback
  const images = product.images || [];
  const mainImage = images.length > 0 ? images[0] : null;
  const imageUrl = mainImage?.image ? getImageUrl(mainImage.image) : null;

  // Safely handle category
  const category = product.category || { id: '', name: 'Uncategorized', description: '' };
  const categoryName = category.name || 'Uncategorized';

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={mainImage?.alt_text || product.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                // If image fails to load, show placeholder
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.removeAttribute('style');
              }}
            />
          ) : (
            <span className="text-gray-500">No Image Available</span>
          )}
          {/* Hidden placeholder that shows if image fails */}
          <span 
            className="text-gray-500 hidden" 
            style={{ display: imageUrl ? 'none' : 'block' }}
          >
            No Image Available
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-black">{product.name}</h3>
          <p className="text-black text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600">
              {formatPrice(product.price_amount, product.currency)}
            </span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-black">
              {categoryName}
            </span>
          </div>
          {product.in_stock !== undefined && (
            <div className="mt-2">
              <span className={`text-xs px-2 py-1 rounded ${
                product.in_stock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;