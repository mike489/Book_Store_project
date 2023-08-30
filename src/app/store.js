import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/cartSlice';
import booksReducer from '../features/Book/booksSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
  },
});

export default store;