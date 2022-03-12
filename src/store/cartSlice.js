import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postCart, fetchCart } from "./cartApi";
export const getCart = createAsyncThunk("cart/getCart", fetchCart);

const cartSlice = createSlice({
  name: "cart",
  showCart: false,
  initialState: {
    cart: {},
  },

  reducers: {
    addProduct(state, action) {
      state.cart.items.push(action.payload);
      postCart(state.cart);
    },
    removeProduct(state, action) {
      const index = state.cart.items.findIndex(
        (cart) => cart.id === action.payload
      );
      state.cart.items.splice(index, 1);
      postCart(state.cart);
    },
    increase(state) {
      state.cart.items.map((item) => item.count++);
    },
    decrease(state) {
      state.cart.items.map((item) =>
        item.count > 0 ? item.count-- : item.count
      );
    },
  },
  extraReducers: {
    [getCart.fulfilled](state, action) {
      state.cart = action.payload;
    },
  },
});
export const { addProduct, removeProduct, decrease, increase } =
  cartSlice.actions;
export default cartSlice.reducer;
