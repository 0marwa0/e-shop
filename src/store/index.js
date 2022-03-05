import { configureStore } from "@reduxjs/toolkit";
import prodcutSlice from "./productSlice";
import currencySlice from "./currencySlice";
import cartSlice from "./cartSlice";
import categoriesSlice from "./categoriesSlice";
const store = configureStore({
  reducer: {
    products: prodcutSlice,
    currencies: currencySlice,
    cart: cartSlice,
    categories: categoriesSlice,
  },
});
export default store;
