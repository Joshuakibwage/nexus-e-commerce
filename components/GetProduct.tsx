'use client';

import { useQuery } from '@apollo/client/react';
import { getProducts } from '@/graphql/queries';
import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl, formatPrice } from '@/lib/utils';


interface GetProductProps {
  productId: string;
}


export function GetProduct({ productId }: GetProductProps) {

  const { data, loading, error } = useQuery(getProducts, {
    variables: { id: productId },
  });

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <ProductError error={error.message} />;
  if (!data?.product) return <ProductNotFound />;

  return <ProductDetail product={data.product} />;
}

function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          ← Back to Products
        </Link>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              {
                product.images.length > 0 ? (
                  <Image
                    src={getImageUrl(product.images[0].id)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )
              }
            </div>
            
            {/* Thumbnail Gallery */}
            {
              product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {
                    product.images.map((image) => (
                      <div
                        key={image.id}
                        className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500"
                      >
                        <Image
                          src={getImageUrl(product.images[0].id)}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium mb-2">
                {product.category.name}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-auto">

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.priceAmount, product.currency)}
                </span>
              </div>

              <div className="space-y-4">

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Add to Cart
                </button>
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Category: {product.category.name}</li>
                      <li>• Product ID: {product.id}</li>
                      <li>• Available for immediate purchase</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto animate-pulse">
      <div className="mb-6 h-4 bg-gray-200 rounded w-24"></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          </div>

          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            <div className="h-8 bg-gray-200 rounded w-32 mt-8"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

function ProductError({ error }: { error: string }) {
  return (
    <div className="max-w-6xl mx-auto text-center py-12">

      <div className="text-red-600 text-lg mb-4">Error loading product</div>
      <p className="text-gray-600 mb-6">{error}</p>

      <Link 
        href="/" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Products
      </Link>

    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12">

      <div className="text-gray-600 text-lg mb-4">Product not found</div>

      <Link 
        href="/" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Products
      </Link>

    </div>
  );
}