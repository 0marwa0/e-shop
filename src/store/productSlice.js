import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const query = `
{
  category{
    name
  
    products{
      id
      name  
      brand
      gallery
       description
      attributes{
        name
        items{
          value
        }
      }
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
  async (id) => {
    return await axios
      .post("http://localhost:4000/", { query: query })
      .then(
        (res) =>
          res.data.data.category.products.filter((item) => item.id === id)[0]
      );
  }
);
const prodcutSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
  },

  extraReducers: {
    [fetchProduct.pending](state) {
      state.loading = true;
    },
    [fetchProduct.fulfilled](state, action) {
      state.product = action.payload;
      state.loading = false;
    },
  },
});
export const { getProductById } = prodcutSlice.actions;
export default prodcutSlice.reducer;
