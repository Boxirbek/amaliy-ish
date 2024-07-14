import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://headphones-server.onrender.com/products');
    const data = await response.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default productsSlice.reducer;
