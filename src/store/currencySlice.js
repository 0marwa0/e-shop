import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { postRequest } from "./cartApi";
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
    selectedCurrency: localStorage.getItem("currency") ?? "$",
    loading: true,
  },

  reducers: {
    setCurrency(state, action) {
      state.selectedCurrency = action.payload;
      localStorage.setItem("currency", action.payload);
    },
  },
  extraReducers: {
    [fetchCurrency.fulfilled](state, action) {
      state.currencies = action.payload;
    },
  },
});
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
