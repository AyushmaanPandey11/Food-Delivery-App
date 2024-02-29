import {  createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : "cart",
        initialState:
        {
            items:[]
        },
        reducers:{
            addItems : (state,action) => {
                state.items.push(action.payload);
                console.log(current(state.items))
            },
            removeItems:(state)=> {
                state.items.pop();
                console.log(current(state.items))

            },
            clearCart: (state) => {
                state.items.length = 0;
            }
        }
    }
);
export  const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;