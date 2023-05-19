import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    order: [],
    count: 0
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      setCategory: (state, action) => {
        state.order = action.payload
      },
      
    },
  })
  
  export const { setCategory } = menuSlice.actions
  
  export default menuSlice.reducer