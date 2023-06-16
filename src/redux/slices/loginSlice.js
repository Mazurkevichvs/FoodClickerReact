import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userFullName: '',
  userNickname: '',
  isLogged: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userFullName = action.payload.userFullName
      state.userNickname = action.payload.userNickname
      state.isLogged = true;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    resetValues: (state) => {
      state.userName = ''
      state.userSurname = ''
    },
  },
});

export const { setIsLogged, setUserData, resetValues } = loginSlice.actions;

export default loginSlice.reducer;
