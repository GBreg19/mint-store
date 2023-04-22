import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isClicked: false,
  amount: 1,
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );
      if (existingItem !== -1) {
        state.cartItems[existingItem].quantity += 1;
      } else {
        state.cartItems.push({ ...cartItem, quantity: 1 });
      }
      const cartItemQuantity = state.cartItems.map((item) => item.quantity);
      state.totalQuantity = cartItemQuantity.reduce(
        (total, num) => total + num,
        0
      );
    },
    toggleCart: (state, action) => {
      state.isClicked = action.payload;
    },
    increment: (state, action) => {
      const cartItemId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );
      existingItem.quantity += 1;
      const x = state.cartItems.map((item) => item.quantity);
      state.totalQuantity = x.reduce((total, num) => total + num, 0);
    },
    decrement: (state, action) => {
      const cartItemId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItemId
        );
      }
      const itemQuantity = state.cartItems.map((item) => item.quantity);
      state.totalQuantity = itemQuantity.reduce((total, num) => total + num, 0);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity = state.cartItems.length
    },
    calculateTotal: (state) => {
      const total = state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      state.totalAmount = total.toFixed(2);
    },
  },
});

export const {
  addToCart,
  toggleCart,
  increment,
  decrement,
  removeFromCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
