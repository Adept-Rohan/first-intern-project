import { createSlice } from "@reduxjs/toolkit";


const initialState : any = {
    cartData: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartData.find((item:any) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartData.push({ ...action.payload, quantity: 1 });
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cartData.filter((item:any) => item.id !== action.payload);
            state.cartData = removeItem;
          }
    }




})

export const { addToCart , removeItem } = cartSlice.actions
export default cartSlice.reducer