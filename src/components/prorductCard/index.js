import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import cartIcon from "../../assetes/Icons/cartIcon.svg";
import { connect } from "react-redux";
import { addProduct } from "../../store/cartSlice";
class index extends React.Component {
  addItem = (item) => {
    let newCart = this.props.cart;
    this.props.addProduct(item);
    newCart = newCart.push(item);
  };
  render() {
    let { name, gallery, prices, id } = this.props.product;
    let price = prices.filter(
      (price) => price["currency"]["symbol"] === this.props.selectedCurrency
    );
    price = price[0]["currency"]["symbol"] + " " + price[0]["amount"];
    let cart = this.props.cart;

    let inTheCart = cart ? cart.some((cartItem) => cartItem.id === id) : false;

    return (
      // <Link to={`/product/${id}`} className="card-link">
      <div className="card-holder">
        <div className="card-image">
          <img src={gallery[0]} alt="product" />
        </div>{" "}
        {inTheCart ? (
          ""
        ) : (
          <div
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => {
              this.addItem(this.props.product);
            }}
          >
            <div className="icon-holder">
              <img src={cartIcon} alt="0" height="22px" />
            </div>
          </div>
        )}
        <p>{name}</p>
        <div>{price}</div>
      </div>
      // </Link>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.cart,
  };
};
const dispatch = (dispatch) => {
  return {
    addProduct: (data) => dispatch(addProduct(data)),
  };
};
export default connect(data, dispatch)(index);
