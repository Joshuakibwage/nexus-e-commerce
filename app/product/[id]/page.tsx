import { GetProduct } from '@/components/GetProduct';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <GetProduct productId={params.id} />;
}