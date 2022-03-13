import React from "react";
import "./cart.css";
import Hoc from "../../Hoc";
import { connect } from "react-redux";
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
    console.log(items, "items");
    return (
      <div
        className="mini-cart"
        onClick={(e) => {
          e.stopPropagation();
          this.props.showDropdown();
        }}
      >
        <div className="mini-cart-title">My bag {items.length} item</div>
        {items.map(({ name, brand, gallery }) => (
          <div className="item-info-cart">
            <div>
              <div>{brand}</div>
              <div>{name}</div>
              <div>$30,00</div>
              <Attribute items={items} />
              {/* <div className="flex">
                <div>s</div>
                <div>x</div>
              </div> */}
            </div>
            <div>
              <div className="mini-cart-img">
                <img src={gallery[0]} height="100%" width="100%" alt="item" />
              </div>
            </div>
          </div>
        ))}

        <div className="flex">
          <div
            className="cart-btn cart-btn-view"
            onClick={() => {
              this.props.closeModal();
              this.props.history("/cart");
            }}
          >
            VIEW BAG
          </div>
          <div className="cart-btn cart-btn-check-out">CHECK OUT</div>
        </div>
      </div>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.cart.items,
  };
};
export default connect(data)(Hoc(Cart));
