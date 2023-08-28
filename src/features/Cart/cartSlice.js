import { createSlice } from "@reduxjs/toolkit";
import { booksData } from '../../TempData';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      books: booksData,
      cartItems: [], 
      totalPrice: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        const bookId = action.payload;
        const bookToAdd = state.books.find(book => book.id === bookId);
        if (bookToAdd) {
          const existingCartItem = state.cartItems.find(item => item.book.id === bookId);
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
    const existingCartItem = state.cartItems.find(item => item.book.id === bookIdToRemove);

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.book.id !== bookIdToRemove);
      } else {
        existingCartItem.quantity--;
      }

      state.totalPrice -= existingCartItem.book.price;
    }
    
      }
    },
  });
  
  

export const { addToCart  , removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
