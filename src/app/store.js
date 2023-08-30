<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/cartSlice';
import booksReducer from '../features/Book/booksSlice';
=======
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/user/UserSlice";
>>>>>>> e5b61f33538eb00940d1ad14a11633ebdad22ecd

const store = configureStore({
  reducer: {
    cart: cartReducer,
<<<<<<< HEAD
    books: booksReducer,
=======
    user: userReducer,
>>>>>>> e5b61f33538eb00940d1ad14a11633ebdad22ecd
  },
});

export default store;
