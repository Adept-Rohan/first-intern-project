import { createSlice } from "@reduxjs/toolkit";


const initialState : any = {
    cartProduct: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartProduct.find((product: any) => product.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.cartProduct.push(action.payload)
            }
        }
    }




})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer