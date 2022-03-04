import React from "react";
import Logo from "../../assetes/Icons/cart-logo.svg";
import Cart from "../../assetes/Icons/cart.svg";
import DropDown from "../dropdown";
import { connect } from "react-redux";
import { fetchProduct } from "../../store/productSlice";
import { setCategory, fetchCategory } from "../../store/categorySlice";
import "./index.css";
import "../../App.css";
class Navbar extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getCategory();
  }
  render() {
    let categories = this.props.products.products["categories"] || [];
    console.log(this.props.category.category.name);
    let categoryName = this.props.category.category.name;
    return (
      <div className="navbar-holder">
        <span className="tabs">
          {categories.map((category) => (
            <span
              onClick={() => this.props.changeCategory(category)}
              className={categoryName === category.name ? "activeTab" : ""}
            >
              {category.name}
            </span>
          ))}
        </span>
        <img src={Logo} alt="product" />
        <div className="flex">
          <DropDown />

          <img src={Cart} alt="product" />
        </div>
      </div>
    );
  }
}
const data = function (state) {
  return {
    products: state.products,
    category: state.category,
    cart: state.cart,
  };
};

const dispatch = (dispatch) => {
  return {
    changeCategory: (data) => dispatch(setCategory(data)),
    getCategory: () => dispatch(fetchCategory()),
    getCategories: () => dispatch(fetchProduct()),
  };
};

export default connect(data, dispatch)(Navbar);
