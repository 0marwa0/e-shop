import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const query = `
{
  category{
    name
    products{
      id
      name
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
const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    category: [],
    loading: true,
  },

  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [fetchCategory.pending](state) {
      state.loading = true;
    },
    [fetchCategory.fulfilled](state, action) {
      state.category = action.payload;
      state.loading = false;
    },
  },
});
export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
