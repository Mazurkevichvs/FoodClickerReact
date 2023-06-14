import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
    const restaurantsCollectionRef = collection(db, 'restaurants');
    const data = await getDocs(restaurantsCollectionRef);
    const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return filteredData
})

const initialState = {
    restaurants: [],
    status: 'loading'
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
      setRestaurants: (state, action) => {
        state.restaurants = action.payload
      }
    },
    extraReducers: {
      [fetchRestaurants.pending]: (state) => {
        state.status = 'loading'
        state.restaurants = []
      },
      [fetchRestaurants.fulfilled]: (state, action) => {
        state.restaurants = action.payload
        state.status = 'success'
      },
      [fetchRestaurants.rejected]: (state) => {
        state.status = 'error'
        state.restaurants = []
      }
    }
  })
  
  export const { setRestaurants } = restaurantsSlice.actions
  
  export default restaurantsSlice.reducer