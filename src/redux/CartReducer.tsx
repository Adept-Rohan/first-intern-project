import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/utils/FetchLocalStorage";


const myCart = getLocalStorage()
console.log(myCart)

const initialState : any = {
    cartData: myCart,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartData.find((item:any) => item.id === action.payload.title);
            
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartData.push({ ...action.payload, quantity: 1 });
              
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cartData.filter((item:any) => item.id !== action.payload);
            state.cartData = removeItem;
          },
          incrementQuantity: (state, action) => {
            const item = state.cartData.find((item:any) => item.id === action.payload);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.cartData.find((item:any) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          }
    }
})

export const { addToCart , removeItem , incrementQuantity , decrementQuantity } = cartSlice.actions
export default cartSlice.reducer