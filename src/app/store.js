import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/User/UserSlice";
import booksReducer from "../features/Book/booksSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
    user: userReducer,
  },
});

export default store;
