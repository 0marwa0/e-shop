import React from "react";
import Products from "./pages/products";
import ProductInfo from "./pages/products/productInfo";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 50px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products {...this.props} />} exact />
          <Route path="/cart" element={<Cart {...this.props} />} exact />
          <Route path="/product/:id" element={<ProductInfo />} exact />
        </Routes>
      </div>
    );
  }
}

export default App;
