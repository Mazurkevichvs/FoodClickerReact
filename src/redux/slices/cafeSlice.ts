import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { getDocs, collection,DocumentData, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { MenuItemType, CafeItem } from '../../@types/types';

interface CafeSliceState {
  cafes: CafeItem[],
  status: 'loading' | 'success' | 'error'
}

export const fetchCafes = createAsyncThunk<CafeItem[]>('cafes/fetchCafes', async () => {
  const cafesCollectionRef = collection(db, 'restaurants');
  const cafesData:QuerySnapshot<DocumentData> = await getDocs(cafesCollectionRef);

  const cafePromises = cafesData.docs.map(async (cafeDoc) => {
    const cafeId = cafeDoc.id;
    const menuCollectionRef = collection(db, `restaurants/${cafeId}/menu`);
    const menuData:QuerySnapshot<DocumentData> = await getDocs(menuCollectionRef);
    const filteredMenu:MenuItemType[] = menuData.docs.map((menuDoc) => ({
      ...(menuDoc.data() as MenuItemType),
      id: menuDoc.id,
    }));

    return {
      ...(cafeDoc.data() as CafeItem),
      id: cafeDoc.id,
      menu: filteredMenu,
    } as CafeItem;
  });

  const cafes = await Promise.all(cafePromises);
  return cafes;
});


const initialState:CafeSliceState = {
    cafes: [],
    status: 'loading'
}

export const cafeSlice = createSlice({
    name: 'cafes',
    initialState,
    reducers: {
      setCafe: (state, action:PayloadAction<CafeItem[]>) => {
        state.cafes = action.payload
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCafes.pending, (state) => {
        state.status = 'loading';
        state.cafes = [];
      });
      builder.addCase(fetchCafes.fulfilled, (state, action) => {
        state.cafes = action.payload;
        state.status = 'success';
      });
      builder.addCase(fetchCafes.rejected, (state) => {
        state.status = 'error';
        state.cafes = [];
      });
    }
  })
  
  export const { setCafe } = cafeSlice.actions
  
  export default cafeSlice.reducer