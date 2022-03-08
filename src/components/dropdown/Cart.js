import React from "react";
class Cart extends React.Component {
  render() {
    return (
      <div>
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
          <div>VIEW BAG</div>
          <div>CHECK OUT</div>
        </div>
      </div>
    );
  }
}

export default Cart;
