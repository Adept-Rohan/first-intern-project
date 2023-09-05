import { createSlice } from "@reduxjs/toolkit";

interface Address {
  address: string;
}

interface AddressType {
  address: Address | null;
}

const initialState: AddressType = {
  address: null,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAdress: (state, action) => {
      const address = action.payload;
      state.address = address;
      console.log(address);
    },
    removeAdress: (state) => {
      state.address = null;
    },
  },
});

export const { setAdress, removeAdress } = addressSlice.actions;
export default addressSlice.reducer;
