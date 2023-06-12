// eslint-disable-next-line no-unused-vars
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

const store = configureStore({
  reducer:{
    cart:cartSlice,
  }
}
  )

export default store