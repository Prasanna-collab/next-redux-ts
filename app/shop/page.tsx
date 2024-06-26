import React from 'react';
import { getAllProducts } from '@/actions/products';
// import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SingleProduct from '@/components/Product/Product';
 

interface Props { }

const Products = async () => {

    let products = await getAllProducts();
    products = products?.slice(0,10); //slice doesn't modify the original array.
    //splice modify the original array. remove from the index. 
    //products?.splice(1,10);//it removes 10 items from the specified point.
    return <div className='bg-blue-400 py-8 px-8 min-h-screen' >
        <h2 className="px-16 font-bold text-xl">
            Products List
        </h2>
    {/* <Link href="/cart">View Cart</Link> */}
        {products && products.length > 0 ? (
            <div
                className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {products.map((val) => (<div key={val.id} className="flex flex-col">
                <SingleProduct product={val} key={val.id}/>
                </div>))}
            </div>) : <div className="py-8 grid grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto">
            No Product Found
        </div>}

    </div>
}

export default Products;