import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    order: [],
    totalSum: 0
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      setOrder: (state, action) => {
        if(state.order.length > 0) {
          const sameName = state.order.find(el => el.name === action.payload.name
          )
          console.log(sameName)
          if(sameName !== undefined) {
            sameName.count = action.payload.count
          } else state.order.push(action.payload)
          
        } else {
          state.order.push(action.payload)
          state.totalSum += action.payload.price* action.payload.count
        }
      },
      setItemCount: (state, action) => {
        state.order.forEach(el => {
          if(el.name === action.payload.name) el.count = action.payload.count} )
          state.totalSum = state.order.reduce((sum, item) => sum + item.count*item.price, 0);
      },
    },
  })
  
  export const { setOrder, setItemCount } = basketSlice.actions
  
  export default basketSlice.reducer