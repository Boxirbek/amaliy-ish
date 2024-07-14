import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        filters: filtersReducer,
    },
});

export default store;
