import React from "react";
import Products from "./pages/products";
import ProductInfo from "./pages/products/productInfo";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
class App extends React.Component {
  //  constructor(props) {
  //   super(props);
  //  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/product:id" element={<ProductInfo />} exact />
        </Routes>
      </div>
    );
  }
}

export default App;
