import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import cartIcon from "../../assetes/Icons/cartIcon.svg";
import { connect } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import Hoc from "../../pages/products/Hoc";
class index extends React.Component {
  addItem = (item) => {};
  render() {
    let { name, gallery, prices, id } = this.props.product;
    let price = prices.filter(
      (price) => price["currency"]["symbol"] === this.props.selectedCurrency
    );
    price = price[0]["currency"]["symbol"] + " " + price[0]["amount"];
    let cart = this.props.cart;

    let inTheCart = cart ? cart.some((cartItem) => cartItem.id === id) : false;

    return (
      <div className="card-holder">
        <div className="card-image">
          <img src={gallery[0]} alt="product" />
        </div>{" "}
        {inTheCart ? (
          ""
        ) : (
          <div
            className="icon-cart-holder"
            onClick={() => {
              this.props.history(`/product/${id}`);
            }}
          >
            <div className="icon-cart">
              <img src={cartIcon} alt="0" height="22px" />
            </div>
          </div>
        )}
        <p>{name}</p>
        <div>{price}</div>
      </div>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.cart.items,
  };
};
// const dispatch = (dispatch) => {
//   return {
//     addProduct: (data) => dispatch(addProduct(data)),
//   };
// };
export default Hoc(connect(data)(index));
