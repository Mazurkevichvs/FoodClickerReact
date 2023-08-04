import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserDataObject {
  userFullName: string,
  userNickname: string
}

interface LoginSliceState {
  userFullName: string,
  userNickname: string,
  isLogged: boolean,
  isVisiblePopup: boolean
}

const initialState: LoginSliceState = {
  userFullName: '',
  userNickname: '',
  isLogged: false,
  isVisiblePopup : false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action:PayloadAction<UserDataObject>) => {
      state.userFullName = action.payload.userFullName
      state.userNickname = action.payload.userNickname
      state.isLogged = true;
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setVisiblePopup: (state) => {
      state.isVisiblePopup = !state.isVisiblePopup
    }
  },
});

export const { setIsLogged, setUserData, setVisiblePopup } = loginSlice.actions;

export default loginSlice.reducer;
