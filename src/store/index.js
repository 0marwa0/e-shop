import { configureStore } from "@reduxjs/toolkit";
import prodcutSlice from "./productSlice";
import currencySlice from "./currencySlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
const store = configureStore({
  reducer: {
    products: prodcutSlice,
    currencies: currencySlice,
    cart: cartSlice,
    category: categorySlice,
  },
});
export default store;
