import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const query = `
{
  categories{
    name
    products{
      id
      name
      gallery
      prices{
        currency{
          symbol
          label
        }
        amount
      }
    }
  }
}

`;
export const fetchProduct = createAsyncThunk(
  "productStore/fetchProdcut",
  async () => {
    return await axios
      .post("http://localhost:4000/", { query: query })
      .then((res) => res.data.data);
  }
);
const prodcutSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
  },

  extraReducers: {
    [fetchProduct.pending](state) {
      state.loading = true;
    },
    [fetchProduct.fulfilled](state, action) {
      state.products = action.payload;
      state.loading = false;
    },
  },
});
export const { getCurrentCurrency } = prodcutSlice.actions;
export default prodcutSlice.reducer;
