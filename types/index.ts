export type Category = {
    id: string;
    name: string;
    description: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    priceAmount: number;
    currency: string;
    images: { id: string }[];
    category: Category;
};