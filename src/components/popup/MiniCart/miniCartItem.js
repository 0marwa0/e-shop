import React from "react";
import CartAttribute from "./miniCartAttribute";
import { getPrice } from "../../../utlizeFun";
import { connect } from "react-redux";
import { increase, decrease, removeProduct } from "../../../store/cartSlice";
import { ReactComponent as PlusIcon } from "../../../assetes/Icons/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../../assetes/Icons/minusIcon.svg";
import TrashIcon from "../../../assetes/Icons/trash-icon.png";
import LazyLoading from "../../LazyLoading";
import "./cart.css";
class CartControl extends React.Component {
  render() {
    let { id, brand, count, name, attributes, gallery, prices } =
      this.props.data;
    let price = getPrice(prices, this.props.currentCurrency);

    return (
      <div className="item-info-cart">
        <div>
          <div>{brand}</div>
          <div>{name}</div>

          <div>{price}</div>
          <CartAttribute items={attributes} />
        </div>

        <div className="flex">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div
              className="item-btn-sm"
              onClick={() => this.props.onIncrease(id)}
            >
              <PlusIcon width="100%" style={{ height: "max-content" }} />
            </div>
            <div>{count}</div>
            <div
              className="item-btn-sm"
              onClick={() => this.props.decrease(id)}
            >
              <MinusIcon width="100%" style={{ height: "max-content" }} />
            </div>
          </div>

          <div className="mini-cart-img" style={{ position: "relative" }}>
            <LazyLoading src={gallery?.[0]} item={this.props.data} />
            <div className="trash-btn">
              <img
                src={TrashIcon}
                alt=""
                onClick={() => this.props.removeProduct(id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const state = (state) => {
  return { currentCurrency: state.currencies.selectedCurrency };
};
const dispatch = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(increase(id)),
    decrease: (id) => dispatch(decrease(id)),
    removeProduct: (id) => dispatch(removeProduct(id)),
  };
};
export default connect(state, dispatch)(CartControl);
