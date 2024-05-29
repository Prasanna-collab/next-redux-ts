// "use client";
import React from 'react';
import { getAllProducts } from '@/actions/products';
import { type Product } from '@/types/interfaces/products';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {
    product:Product
}

console.log(1)
//const SingleProduct:React.FC<{product:Product}> = ({product})=> {};
//const SingleProduct:React.FC = ({product}:Product)=> {}; //not valid. since we cannot destructure it from Products
//const SingleProduct = ({product}:{product:Product})=>{};

const SingleProduct:React.FC<Props>=  ({product}:Props) => {
    return <div >
                    <Image src={"/test.avif"} alt={product.title} width={275} height={200}  className='object-cover rounded'/>
                    <p className="font-semibold overflow-hidden line-clamp-1">{product.title}</p>
                    <p className='font-semibold text-sm py-2'>${product.price}</p>
                    <Button>Add to Cart</Button>
            </div>

}

export default SingleProduct;