import React from "react";
import Products from "./pages/products";
import ProductInfo from "./pages/products/productInfo";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import { connect } from "react-redux";
import { closeDropdown } from "./store/dropdownSlice";
class App extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("my-cart")) {
      localStorage.setItem("my-cart", JSON.stringify({ items: [] }));
    }
  }
  render() {
    return (
      <div style={{ margin: "0 50px" }} onClick={this.props.hideDropdown}>
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
const dispatch = (dispatch) => {
  return {
    hideDropdown: () => dispatch(closeDropdown()),
  };
};
export default connect(null, dispatch)(App);
