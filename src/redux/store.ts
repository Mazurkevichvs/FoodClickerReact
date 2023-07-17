import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import loginSlice from './slices/loginSlice';
import cafeSlice from './slices/cafeSlice';
import { useDispatch } from 'react-redux';


export const store = configureStore({
    reducer: {
        basketSlice,
        loginSlice,
        cafeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()