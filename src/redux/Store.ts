import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  product: ProductReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
