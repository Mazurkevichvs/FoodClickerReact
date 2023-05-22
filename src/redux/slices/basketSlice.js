import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    order: [],
    count: 0
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      setOrder: (state, action) => {
        state.order.push(action.payload)
      },
      increaseCount: (state) => {
        state.count++
      },
      decreaseCount: (state) => {
        if (state.count === 0) return;
        state.count--
      }
    },
  })
  
  export const { setOrder, increaseCount, decreaseCount } = basketSlice.actions
  
  export default basketSlice.reducer