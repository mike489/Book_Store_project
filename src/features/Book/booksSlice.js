import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const books_url = 'https://yenetta-bookstore.onrender.com/api/books';

export const fetchbooks = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get(books_url);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

const initialState = {
    books: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addbook: (state, action) => {
            const newbook = action.payload;
            state.books.push(newbook);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchbooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchbooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.books = action.payload;
            })
            .addCase(fetchbooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addProduct } = booksSlice.actions;
export default booksSlice.reducer;
