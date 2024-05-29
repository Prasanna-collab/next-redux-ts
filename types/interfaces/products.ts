
interface Category {
    id: number;
    name: string;
    image: string;
}

//Interface for the Product.

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category:Category;
}

