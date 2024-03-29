import { createSlice } from "@reduxjs/toolkit";



const initialState :any = {
    productInfo: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addData: (state, action) => {
            const myProduct = action.payload
            state.myProduct = myProduct
        }
    }
})

export const { addData } = productSlice.actions
export default productSlice.reducer