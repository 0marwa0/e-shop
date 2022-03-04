import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const query = `
{
  currencies{
    label
    symbol
  }
}
`;
export const fetchCurrency = createAsyncThunk(
  "productStore/fetchCurrencies",
  async () => {
    return await axios
      .post("http://localhost:4000/", { query: query })
      .then((res) => res.data.data.currencies);
  }
);
const currencySlice = createSlice({
  name: "currencies",
  initialState: {
    currencies: [],
    selectedCurrency: "$",
    loading: true,
  },

  reducers: {
    setCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrency.pending](state) {
      state.loading = true;
    },
    [fetchCurrency.fulfilled](state, action) {
      state.currencies = action.payload;
      state.loading = false;
    },
  },
});
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
