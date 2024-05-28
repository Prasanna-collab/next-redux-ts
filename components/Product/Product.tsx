// "use client";
import React from 'react';
import { getAllProducts } from '@/actions/products';
import { type Product } from '@/types/interfaces/products';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {
    product:Product
}

const SingleProduct:React.FC<Props>=  ({product}) => {
 
    return <div className='bg-blue-50 py-8 px-8 min-h-screen' >
            <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <Image src="/test.avif" alt={product.title} width={275} height={200}  className='object-cover rounded'/>
                    <p className="font-semibold overflow-hidden line-clamp-1">{product.title}</p>
                    <p className='font-semibold text-sm py-2'>${product.price}</p>
                    <Button>Add to Cart</Button>
                </div>
            </div>

}

export default SingleProduct;