import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    menuItems: []
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      setMenu: (state, action) => {
        state.menuItems = action.payload.menuItems
      }
    },
  })
  
  export const { setMenu } = menuSlice.actions
  
  export default menuSlice.reducer