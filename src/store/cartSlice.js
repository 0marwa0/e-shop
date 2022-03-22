import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, fetchRequest } from "./cartApi";
export const getCart = createAsyncThunk("cart/getCart", fetchRequest);

const cartSlice = createSlice({
  name: "cart",
  showCart: false,
  initialState: {
    cart: { items: [] },
  },
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
      postRequest(state, "cart");
    },
    removeProduct(state, action) {
      const index = state.items.findIndex((cart) => cart.id === action.payload);
      state.items.splice(index, 1);
      postRequest(state, "cart");
    },
    increase(state, action) {
      state.items.map((item) => {
        if (action.payload === item.id) {
          item.count = item.count + 1;
        } else {
          return item;
        }
      });
      postRequest(state, "cart");
    },
    decrease(state, action) {
      state.items.map((item) => {
        if (action.payload === item.id && item.count > 1) {
          item.count = item.count - 1;
        } else {
          return item;
        }
      });
      postRequest(state, "cart");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      if (action.payload) return action.payload;
    });
  },
});
export const { addProduct, removeProduct, decrease, increase } =
  cartSlice.actions;
export default cartSlice.reducer;
