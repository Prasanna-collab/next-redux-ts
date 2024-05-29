"use client";
import { useAppSelector } from '@/store/hooks/hooks';
import React from 'react'
import Counter from '../Counter/Counter';

interface Props {}

const Cart = () => {
    const cartItems = useAppSelector(state=> state.cart.cartItems)
    console.log(cartItems)
  return <div>
    <h2>Shopping Cart</h2>

    {cartItems.map((product, index)=> {
        return <div key={product.id}>
        {product.name}
        {product.price}
        <Counter product={product} key={product.id}/>
        </div>
    })}
  </div>
}

export default Cart