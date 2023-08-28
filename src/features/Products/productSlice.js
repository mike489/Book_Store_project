import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        const newProduct = action.payload;
        state.products.push(newProduct);
      },
  },
});

export default productsSlice.reducer;
