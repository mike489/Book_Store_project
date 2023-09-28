import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import booksReducer from "../Book/booksSlice"



const cartSlice = createSlice({
  
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { bookId, books } = action.payload;
      const bookToAdd = books.find((book) => book._id === bookId);

      console.log('bookToAdd:', bookToAdd);
    
      if (bookToAdd) {
        const existingCartItem = state.cartItems.find(
          (item) => item.book._id === bookId
        );
    
        if (existingCartItem) {
          existingCartItem.quantity++;
        } else {
          state.cartItems.push({ book: bookToAdd, quantity: 1 });
        }
    
        state.totalPrice += bookToAdd.price;
      }
    },
    
    removeFromCart: (state, action) => {
      const bookIdToRemove = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.book._id === bookIdToRemove
      );

      if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.book._id !== bookIdToRemove
          );
        } else {
          existingCartItem.quantity--;
        }

        state.totalPrice -= existingCartItem.book.price;
      }
    },
   
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
