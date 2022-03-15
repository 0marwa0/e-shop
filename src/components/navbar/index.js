import React from "react";
import Logo from "../../assetes/Icons/cart-logo.svg";
import DropDown from "../dropdown";
import { connect } from "react-redux";
import { setCategory, fetchCategory } from "../../store/categoriesSlice";
import Hoc from "../Hoc";
import "./index.css";
import "../../App.css";
import { getCart } from "../../store/cartSlice";
import MiniCart from "../popup/MiniCart";
import { closeModal } from "../../store/modalSlice";
class Navbar extends React.Component {
  state = {
    currentCategory: this.props.currentCategory.name,
  };
  componentDidMount() {
    this.props.getCategories();
    this.props.getCart();
  }
  updateCategory = (category) => {
    this.props.changeCategory(category);
    this.setState(() => ({
      currentCategory: category.name,
    }));
  };
  render() {
    let categories = this.props.categories || [];
    console.log(this.props.cart, "really cart state");
    return (
      <div className="navbar-holder" onClick={this.props.closeModal}>
        <span className="tabs">
          {categories.map((category, i) => (
            <span
              key={i}
              onClick={() => {
                this.props.history("/");
                this.updateCategory(category);
              }}
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
          <MiniCart />
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
    getCart: () => dispatch(getCart()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(data, dispatch)(Hoc(Navbar));
