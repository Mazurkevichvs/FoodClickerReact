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
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
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
    resetValues: (state) => {
      state.email = ''
      state.password = ''
      state.secondPassword = ''
      state.name = ''
      state.surname = ''
    },
  },
});

export const { setIsLogged, setProperties, resetValues } = loginSlice.actions;

export default loginSlice.reducer;
