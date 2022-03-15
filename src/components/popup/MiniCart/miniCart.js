import React from "react";
import "./cart.css";
import Hoc from "../../Hoc";
import { connect } from "react-redux";
import MiniCartGallery from "./miniCartGallery";
import EmptyCart from "../../../assetes/Icons/empty_cart.gif";
const Attribute = (props) => (
  <div className="flex" style={{ width: "200px", overflow: "auto" }}>
    {props.items.map((item) =>
      item.attributes.map((item) => (
        <div className="product-size">{item.selected}</div>
      ))
    )}
  </div>
);
class Cart extends React.Component {
  render() {
    let items = this.props.cart;

    return (
      <>
        <div
          className="mini-cart"
          onClick={(e) => {
            e.stopPropagation();
            this.props.showDropdown();
          }}
        >
          <div className="mini-cart-title">
            My bag {items?.length || 0} item
          </div>
          {items ? (
            items.map(({ name, brand, gallery }) => (
              <div className="item-info-cart">
                <div>
                  <div>{brand}</div>
                  <div>{name}</div>
                  <div>$30,00</div>
                  <div className="flex">
                    <div>s</div>
                    <div>x</div>
                  </div>
                </div>

                <div>
                  <div className="mini-cart-img">
                    <img
                      src={gallery?.[0]}
                      height="100%"
                      width="100%"
                      alt="item"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="center">
              <img src={EmptyCart} alt="empty cart" />
            </div>
          )}
        </div>
        <span className="mini-cart-btns">
          {items ? (
            <span
              className="cart-btn cart-btn-view"
              onClick={(e) => {
                e.stopPropagation();
                this.props.closeModal();
                this.props.history("/cart");
              }}
            >
              VIEW BAG
            </span>
          ) : null}

          <span className="cart-btn cart-btn-check-out">CHECK OUT</span>
        </span>
      </>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.items,
  };
};
export default connect(data)(Hoc(Cart));
