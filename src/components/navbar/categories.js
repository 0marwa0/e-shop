import React from "react";
import { connect } from "react-redux";
import { setCategory, fetchCategory } from "../../store/categoriesSlice";
import Hoc from "../Hoc";
import "./index.css";
import "../../App.css";
import { getCart } from "../../store/cartSlice";
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
    return categories.map((category, i) => (
      <span
        key={i}
        onClick={() => {
          this.props.history("/");
          this.updateCategory(category);
        }}
        className={
          this.props.currentCategory.name === category.name ? "activeTab" : ""
        }
      >
        {category.name}
      </span>
    ));
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
