import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import loginSlice from './slices/loginSlice';


export const store = configureStore({
    reducer: {
        basketSlice,
        loginSlice
    }
})