import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  cartItems: [],
  isClicked: false,
  amount: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
        const cartItem = action.payload
      const existingItem = state.cartItems.find((item) => item.id === cartItem.id)
      if(existingItem){
        state.amount += 1
        existingItem.amount = state.amount
      } else {
        // action.payload.push(state.amount)
        // console.log(action.payload)
        state.cartItems.push(cartItem)
        state.amount = 1
      }
    //   console.log(current(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
