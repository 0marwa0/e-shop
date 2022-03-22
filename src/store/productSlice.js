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
        type
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
      let attributes = action.payload.attributes.map((product) => ({
        ...product,
        selected: product.items[0].value,
      }));
      let product = { ...action.payload, attributes };

      state.product = product;

      state.loading = false;
    },
  },
});
export const { getProductById } = prodcutSlice.actions;
export default prodcutSlice.reducer;
