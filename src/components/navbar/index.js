import React from "react";
import Logo from "../../assetes/Icons/cart-logo.svg";
import Cart from "../../assetes/Icons/cart.svg";
import DropDown from "../dropdown";
import { connect } from "react-redux";
import CartModal from "../dropdown/CartModal";
import { setCategory, fetchCategory } from "../../store/categoriesSlice";
import "./index.css";
import "../../App.css";
class Navbar extends React.Component {
  state = {
    currentCategory: this.props.currentCategory.name || "all",
  };
  componentDidMount() {
    this.props.getCategories();
  }
  updateCategory = (category) => {
    this.props.changeCategory(category);
    this.setState(() => ({
      currentCategory: category.name,
    }));
    console.log(this.props.history);
  };
  render() {
    let categories = this.props.categories || [];
    return (
      <div className="navbar-holder">
        <span className="tabs">
          {categories.map((category, i) => (
            <span
              key={i}
              onClick={() => this.updateCategory(category)}
              className={
                this.state.currentCategory === category.name ? "activeTab" : ""
              }
            >
              {category.name}
            </span>
          ))}
        </span>
        <img src={Logo} alt="logo" />
        <div className="flex">
          <DropDown />
          <CartModal />
        </div>
      </div>
    );
  }
}
const data = function (state) {
  return {
    categories: state.categories.categories,
    currentCategory: state.categories.currentCategory,
    cart: state.cart,
  };
};

const dispatch = (dispatch) => {
  return {
    changeCategory: (data) => dispatch(setCategory(data)),
    getCategories: () => dispatch(fetchCategory()),
  };
};

export default connect(data, dispatch)(Navbar);
