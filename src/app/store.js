import { configureStore , combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/user/UserSlice";
import booksReducer from "../features/Book/booksSlice";
const rootReducer = combineReducers({
  cart: cartReducer, // Use "cart" as the key for the cart slice
  books: booksReducer, // Use "books" as the key for the books slice
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;



