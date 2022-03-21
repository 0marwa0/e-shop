import React from "react";
import Products from "./pages/products";
import ProductInfo from "./pages/products/productInfo";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import AppWrapper from "./app-wrapper";
class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Products {...this.props} />} exact />
          <Route path="/cart" element={<Cart {...this.props} />} exact />
          <Route path="/product/:id" element={<ProductInfo />} exact />
        </Routes>
      </AppWrapper>
    );
  }
}

export default App;
