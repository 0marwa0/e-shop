import React from "react";
import "./cart.css";
import Hoc from "../../pages/products/Hoc";
class Cart extends React.Component {
  render() {
    return (
      <div className="mini-cart">
        <h1>My bag 2 items</h1>
        <div className="item-info-cart">
          <div>brand</div>
          <div>name</div>
          <div>$30,00</div>
          <div className="flex">
            <div>s</div>
            <div>x</div>
          </div>
        </div>

        <div className="item-info-cart">
          <img src="" alt="item" />
          <div>
            <div>+</div>
            <div>2</div>
            <div>-</div>
          </div>
        </div>
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

export default Hoc(Cart);
