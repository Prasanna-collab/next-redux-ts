import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ICartItem {
    id:number;
    name:string;
    price:number;
    image:string;
    quantity:number;
}
interface ICart {
    cartItems:ICartItem[];
    
    // cartTotal:number;
}
const initialState: ICart = {
    cartItems:[],

    // cartTotal:0
};


const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart: (state, action:PayloadAction<ICartItem>)=> {
            state.cartItems.push(action.payload);
        },
        removeFromCart:(state, action:PayloadAction<number>)=>{
            state.cartItems = state.cartItems.filter(
                (product)=> product.id !== action.payload
            )
        },
        counterIncrease:(state, action:PayloadAction<number>)=> {
            const item = state.cartItems.find(product => product.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        counterDecrease:(state, action:PayloadAction<number>)=> {
            const item = state.cartItems.find(product => product.id === action.payload);
            if (item && item.quantity>1) {
                item.quantity += 1;
            }else{
                state.cartItems = state.cartItems.filter(
                    (product)=> product.id !== action.payload
                )
            }
        },
        resetCart:(state)=>{
            state.cartItems= initialState.cartItems;
        }
    }
})

export const {addToCart,removeFromCart,resetCart} = cartSlice.actions;
 
export default cartSlice.reducer;