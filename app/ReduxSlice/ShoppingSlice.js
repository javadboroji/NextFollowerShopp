'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basketCounter:0,
    shoppingProducts:[]
  }
  
  export const shopingSlice = createSlice({
    name: 'shopingSlice',
    initialState,
    reducers: {
      increment:(state)=>{
        state.basketCounter +=1
      },
      decrement:(state)=>{
        state.basketCounter -=1
      },
      productToCart: (state, action) => {
        const index = state.shoppingProducts.findIndex(
          (product) => product.id === action.payload.id
        
        );  
        if (index !== -1) {
          state.shoppingProducts[index] += action.payload.counter;
        } else {
          state.shoppingProducts.push(action.payload);
        }
        localStorage.setItem('shoppingCart',JSON.stringify(state.shoppingProducts) );
      },
    },
  })

  export const { increment ,decrement,productToCart } = shopingSlice.actions

export default shopingSlice.reducer