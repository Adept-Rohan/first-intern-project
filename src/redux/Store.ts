import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer'
import ProductReducer from './ProductReducer'

export const store = configureStore({
    reducer:{
        user : UserReducer,
        product : ProductReducer
    }
})