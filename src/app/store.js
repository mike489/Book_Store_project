import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/user/UserSlice";
import booksReducer from "../features/Book/booksSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    books: booksReducer

  },
});

export default store;