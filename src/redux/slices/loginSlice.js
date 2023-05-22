import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLogged: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setIsLogged: (state) => {
        state.isLogged = true
      }
    },
  })
  
  export const { setIsLogged } = loginSlice.actions
  
  export default loginSlice.reducer