import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import loginSlice from './slices/loginSlice';
import cafeSlice from './slices/cafeSlice';


export const store = configureStore({
    reducer: {
        basketSlice,
        loginSlice,
        cafeSlice,
    }
})