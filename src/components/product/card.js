import React from "react";
import "./index.css";
import cartIcon from "../../assetes/Icons/cartIcon.svg";
import Hoc from "../Hoc";
import { getPrice } from "../../utlizeFun";
class index extends React.Component {
  render() {
    let { name, gallery, prices, id } = this.props.product;
    let price = getPrice(prices, this.props.selectedCurrency);
    return (
      <div className="card-holder">
        <div className="card-image">
          <img src={gallery[0]} alt="product" />
        </div>
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
        <p>{name}</p>
        <div>{price}</div>
      </div>
    );
  }
}
export default Hoc(index);
