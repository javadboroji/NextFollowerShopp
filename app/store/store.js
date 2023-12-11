'use client'
import { configureStore } from '@reduxjs/toolkit'
import ShoppingSlice from '../ReduxSlice/ShoppingSlice'
export const store = configureStore({
  reducer: {shopp:ShoppingSlice},
})