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
          const findItem = state.order.find(el => el.menuItemName === action.payload.menuItemName && el.cafeName === action.payload.cafeName
          )
          if(findItem !== undefined) {
            findItem.count = action.payload.count
            findItem.itemSum = action.payload.count* action.payload.price
            state.totalSum = state.order.reduce((sum, el) => sum + el.itemSum ,0)
          } else {
            state.order.push(action.payload)
            state.totalSum += action.payload.itemSum
          }  
        } else {
          state.order.push(action.payload)
          state.totalSum += action.payload.itemSum
        }
      },
      increaseItemCount: (state, action) => {
        const findItem = state.order.find(el => el.menuItemName === action.payload.menuItemName && el.cafeName === action.payload.cafeName)
        if (findItem) {          
          findItem.count++
          findItem.itemSum += findItem.price
          state.totalSum += findItem.price
        }
      },
      decreaseItemCount: (state, action) => {
        const findItem = state.order.find(el => el.menuItemName === action.payload.menuItemName && el.cafeName === action.payload.cafeName)
        if (findItem && findItem.count !== 1) {          
          findItem.count--
          findItem.itemSum -= findItem.price
          state.totalSum -= findItem.price
        }
      },
      removeItem: (state, action) => {
        const index = state.order.findIndex(el => el.menuItemName === action.payload.menuItemName && el.cafeName === action.payload.cafeName)
        if (index !== -1) {
          state.totalSum -= state.order[index].itemSum
          state.order.splice(index, 1);
        } else return
      }
    },
  })
  
  export const selectBasket = (state) => state.basketSlice

  export const { setOrder, increaseItemCount, decreaseItemCount, removeItem } = basketSlice.actions
  
  export default basketSlice.reducer