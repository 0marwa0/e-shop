import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postCart, fetchCart } from "./cartApi";
export const getCart = createAsyncThunk("cart/getCart", fetchCart);

const cartSlice = createSlice({
  name: "cart",
  showCart: false,
  initialState: {
    cart: { items: [] },
  },

  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
      postCart(state, "my-cart");
      console.log("when added", state.items);
    },
    removeProduct(state, action) {
      const index = state.items.findIndex((cart) => cart.id === action.payload);
      state.items.splice(index, 1);
      postCart(state);
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

  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      // console.log(action.payload, "should get the obg form log");
      if (action.payload) return action.payload;
    });
  },

  // extraReducers: {
  //   [getCart.fulfilled](state, action) {
  //     // console.log("api fulfilled", action.payload);
  //     const isEmpty = Object.keys(action.payload).length === 0;
  //     console.log(isEmpty, "type of actio");
  //     if (isEmpty) {
  //       state.cart = JSON.stringify({ items: [] });
  //     }
  //     //state.cart = action.payload;
  //   },
  //   [getCart.pending](state, action) {
  //     console.log("api pending", action.payload);
  //     state.cart = action.payload;
  //   },
  //   [getCart.rejected](state, action) {
  //     console.log("api fulfilled", action.payload);
  //     state.cart.items = [];
  //   },
  // },
});
export const { addProduct, removeProduct, decrease, increase } =
  cartSlice.actions;
export default cartSlice.reducer;
