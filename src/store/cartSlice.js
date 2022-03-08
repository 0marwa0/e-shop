import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("my-cart")
      ? JSON.parse(localStorage.getItem("my-cart"))
      : [],
  },
  reducers: {
    addProduct(state, action) {
      let item = action.payload;
      state.cart.push(item);

      localStorage.setItem("my-cart", JSON.stringify(state.cart));
    },
    removeProduct(state, action) {
      const index = state.cart.findIndex((cart) => cart.id === action.payload);
      state.cart.splice(index, 1);
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
