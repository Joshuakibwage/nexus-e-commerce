import Link from 'next/link';
import { Product } from '@/types';
import Image from 'next/image';


interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <Link href={`/product/${product.id}`}>
                <div>
                    <Image
                        src={`https://project-nexus-backend-q5ai.onrender.com/images/${product.images[0]?.id}`} 
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-800 font-bold">{product.priceAmount} {product.currency}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;