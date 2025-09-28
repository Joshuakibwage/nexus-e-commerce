'use client';

import { useQuery } from '@apollo/client';
import { getProducts } from '@/graphql/queries';
import { useParams } from 'next/navigation';
import { Product } from '@/types';
import Image from 'next/image';
import { getImageUrl, formatPrice } from '@/lib/utils';



const ProductDetail = () => {

    const params = useParams();
    const id = params.id as string;

    const { data, loading, error } = useQuery(getProducts, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const product: Product = data?.product;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <Image
                        src={getImageUrl(product.images[0].id)}
                        alt={product.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 mt-4">{product.description}</p>
                    <p className="text-2xl font-bold mt-4">  {formatPrice(product.priceAmount, product.currency)}</p>
                    <p className="mt-2">Category: {product.category.name}</p>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;