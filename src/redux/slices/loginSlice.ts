import { createSlice } from '@reduxjs/toolkit';

interface LoginSliceState {
  userFullName: string,
  userNickname: string,
  isLogged: boolean,
}

const initialState: LoginSliceState = {
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
    }
  },
});

export const { setIsLogged, setUserData } = loginSlice.actions;

export default loginSlice.reducer;
