import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const fetchCafes = createAsyncThunk('cafes/fetchCafes', async () => {
  const cafesCollectionRef = collection(db, 'restaurants');
  const cafesData = await getDocs(cafesCollectionRef);

  const cafePromises = cafesData.docs.map(async (cafeDoc) => {
    const cafeId = cafeDoc.id;
    const menuCollectionRef = collection(db, `restaurants/${cafeId}/menu`);
    const menuData = await getDocs(menuCollectionRef);
    const filteredMenu = menuData.docs.map((menuDoc) => ({
      ...menuDoc.data(),
      id: menuDoc.id,
    }));

    return {
      ...cafeDoc.data(),
      id: cafeDoc.id,
      menu: filteredMenu,
    };
  });

  const cafes = await Promise.all(cafePromises);
  return cafes;
});


const initialState = {
    cafes: [],
    status: 'loading'
}

export const cafeSlice = createSlice({
    name: 'cafes',
    initialState,
    reducers: {
      setCafe: (state, action) => {
        state.cafes = action.payload
      }
    },
    extraReducers: {
      [fetchCafes.pending]: (state) => {
        state.status = 'loading'
        state.cafes = []
      },
      [fetchCafes.fulfilled]: (state, action) => {
        state.cafes = action.payload
        state.status = 'success'
      },
      [fetchCafes.rejected]: (state) => {
        state.status = 'error'
        state.cafes = []
      }
    }
  })
  
  export const { setCafe } = cafeSlice.actions
  
  export default cafeSlice.reducer