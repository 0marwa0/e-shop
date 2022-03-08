import React from "react";
import "./index.css";
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1 className="bold-text">Cart</h1>
        <div className="cart-page">
          <div className="cart-page-item">
            <div className="item-cart-info">
              <div className="bold-text">brand</div>
              <div>name</div>
              <div className="bold-text">$30,00</div>
              <div className="flex">
                <div className="box-container">s</div>
                <div className="box-container">x</div>
              </div>
            </div>
            <div className="item-cart-control">
              <div className="flex-col">
                <div className="box-container">+</div>
                <div>2</div>
                <div className="box-container">-</div>
              </div>{" "}
              <div style={{ width: "200px", hight: "200px" }}>
                <img
                  src="https://images.unsplash.com/photo-1646550574194-2409555b1866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjY1NjUyNQ&ixlib=rb-1.2.1&q=80&w=1080"
                  alt="item"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
