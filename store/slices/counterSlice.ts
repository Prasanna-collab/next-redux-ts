import { createSlice } from "@reduxjs/toolkit"


export interface CounterState{
    counter: number;
}

const initialState : CounterState = {
    counter:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        handelIncrement: (state)=> {
            //state immutability is the main concept of redux.
            // direct mutation of the state refers to modifying the state object
            //directly rather than creating a new state object with the desired changes.
            //it will create issues like (unpredictable state changes, debugging difficulties.)
            // but redx toolkit copies the state object automatically. so we can mutate. it will not create any issue. 
            state.counter++;
        },
        handleDecrement:(state)=> {
            state.counter--;
        }
    }
})

export const {handelIncrement, handleDecrement}= counterSlice.actions;

export default  counterSlice.reducer;