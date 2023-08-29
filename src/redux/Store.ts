import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'

export const store = configureStore({
    reducer:{
        user : UserReducer,
        product : ProductReducer,
        cart : CartReducer
    }
})