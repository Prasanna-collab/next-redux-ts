"use client";
import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {handleDecrement, handelIncrement} from "@/store/slices/counterSlice"
import { RootState } from '@/store/store';
import { Product } from '@/types/interfaces/products';
import { ICartItem } from '@/store/slices/cartSlice';


interface Props {
  product: ICartItem
 }

const Counter:React.FC<Props> = ({product}:Props) => {

const dispatch = useDispatch();
const counterState = useSelector((state: RootState)=> state.counter);

  return <div className='max-w-3xl mx-auto text-white flex flex-col justify-center items-center'>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Redux Counter
    </h2>
    <div className="py-4">
      <div className="flex items-center">
        <button>
          <Minus className='w-8 h-8' onClick={()=>dispatch(handleDecrement())}/>
        </button>
        <p className='scroll-m-20 text-5xl font-semibold tracking-tight first:mt-0'>{counterState.counter}</p>
        <button>
          <Plus className='w-8 h-8' onClick={()=>dispatch(handelIncrement())}/>
        </button>
      </div>
    </div>
  </div>
}

export default Counter;