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
export const fetchCategory = createAsyncThunk(
  "productStore/fetchCategory",
  async () => {
    return await axios
      .post("http://localhost:4000/", { query: query })
      .then((res) => res.data.data);
  }
);
const CategorisSlice = createSlice({
  name: "Category",
  initialState: {
    categories: [],
    currentCategory: [],
    loading: true,
  },

  reducers: {
    setCategory(state, action) {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchCategory.pending](state) {
      state.loading = true;
    },
    [fetchCategory.fulfilled](state, action) {
      state.categories = action.payload.categories;
      state.currentCategory = action.payload.categories[0];
      state.loading = false;
    },
  },
});
export const { setCategory } = CategorisSlice.actions;
export default CategorisSlice.reducer;
