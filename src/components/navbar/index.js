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
  state = {
    defaultCategory: this.props.category.category || [],
  };
  componentDidMount() {
    this.props.getCategories();
    this.props.getCategory();
    this.props.setCategory(this.state.defaultCategory);
  }
  render() {
    let categories = this.props.products.products["categories"] || [];
    let currentCatName = this.props.category.category["category"] || "";
    console.log(currentCatName["name"]);

    return (
      <div className="navbar-holder">
        <span className="tabs">
          {categories.map((category) => (
            <span
              onClick={() => this.props.setCategory(category)}
              className={
                currentCatName.name === category.name ? "activeTab" : ""
              }
            >
              {/* {currentCatName} */}
              {category.name}
            </span>
          ))}
        </span>
        <img src={Logo} />
        <div className="flex">
          <DropDown />
          <span>$</span>
          <img src={Cart} />
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
    setCategory: (data) => dispatch(setCategory(data)),
    getCategory: () => dispatch(fetchCategory()),
    getCategories: () => dispatch(fetchProduct()),
  };
};

export default connect(data, dispatch)(Navbar);
