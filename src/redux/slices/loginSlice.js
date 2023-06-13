import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  secondPassword: '',
  name: '',
  surname: '',
  isLogged: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLogged: (state) => {
      state.isLogged = true;
    },
    setProperties: (state, action) => {
      switch (action.payload.property) {
        case 'email':
          state.email = action.payload.value;
          break;
        case 'password':
          state.password = action.payload.value;
          break;
        case 'password2':
          state.secondPassword = action.payload.value;
          break;
        case 'name':
          state.name = action.payload.value;
          break;
        case 'surname':
          state.surname = action.payload.value;
          break;
        default:
          break;
      }
    },
  },
});

export const { setIsLogged, setProperties } = loginSlice.actions;

export default loginSlice.reducer;
