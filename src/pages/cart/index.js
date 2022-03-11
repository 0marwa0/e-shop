import React from "react";
import "./index.css";
import { connect } from "react-redux";
import {
  addProduct,
  decrease,
  increase,
  removeProduct,
} from "../../store/cartSlice";
class Cart extends React.Component {
  render() {
    console.log(this.props.cart, "cart in the cartpapge");
    return (
      <>
        <h1 className="bold-text">Cart</h1>
        <div className="cart-page">
          {this.props.cart.map(
            ({ brand, name, gallery, attributes, count }) => (
              <div className="cart-page-item">
                <div className="item-cart-info">
                  <div className="bold-text">{brand}</div>
                  <div>{name}</div>
                  <div className="bold-text">$30,00</div>
                  {attributes.map((item) => (
                    <>
                      {item.name}{" "}
                      <div className="flex">
                        {item.items.map((value) => (
                          <div
                            className={
                              value.value === item.selected
                                ? "box-selected"
                                : "box-container"
                            }
                          >
                            {value.value}
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
                <div className="item-cart-control">
                  <div className="flex-col">
                    <div
                      className="box-container"
                      onClick={this.props.increase}
                    >
                      +
                    </div>
                    <div>{count}</div>
                    <div
                      className="box-container"
                      onClick={this.props.decrease}
                    >
                      -
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      hight: "200px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={gallery[0]} alt="item" width="100%" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.cart.items,
  };
};

const dispatch = (dispatch) => {
  return {
    addItem: (item) => dispatch(addProduct(item)),
    deleteItem: (id) => dispatch(removeProduct(id)),
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  };
};

export default connect(data, dispatch)(Cart);
