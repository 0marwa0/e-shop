import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  showCart: false,
  initialState: {
    cart: localStorage.getItem("my-cart")
      ? JSON.parse(localStorage.getItem("my-cart"))
      : { total: 0, items: [] },
  },
  reducers: {
    addProduct(state, action) {
      let item = action.payload;

      state.cart.items.push(item);
      state.total += 20;
      localStorage.setItem("my-cart", JSON.stringify(state.cart));
    },
    removeProduct(state, action) {
      const index = state.cart.items.findIndex(
        (cart) => cart.id === action.payload
      );
      state.cart.items.splice(index, 1);

      localStorage.setItem("my-cart", JSON.stringify(state.cart));
    },

    increase(state) {
      console.log("should increas by one");
      state.cart.items.map((item) => item.count++);
    },
    decrease(state) {
      state.cart.items.map((item) =>
        item.count > 0 ? item.count-- : item.count
      );
    },
  },
});
export const { addProduct, removeProduct, decrease, increase } =
  cartSlice.actions;
export default cartSlice.reducer;
