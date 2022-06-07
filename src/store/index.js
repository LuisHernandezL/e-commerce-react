import { configureStore } from '@reduxjs/toolkit'
import  products  from './slices/products.slices'
import purchases from './slices/purchases.slice'

export default configureStore({
    reducer: {
        products,
        purchases
    }
})

