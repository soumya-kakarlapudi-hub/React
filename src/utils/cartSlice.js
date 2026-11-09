import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items : []
  },
  reducers: {
    addItem : (state, action) => {
      console.log(state);
      //mutating the state
       const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        console.log(state);
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
        console.log(state)
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //RTK says mutate the existing state or new state 
      //state.items.length = 0; - original state
      return {items: []};
    }
  }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;