import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import loginSlice from './slices/loginSlice';
import menuSlice from './slices/menuSlice';


export const store = configureStore({
    reducer: {
        basketSlice,
        loginSlice,
        menuSlice
    }
})