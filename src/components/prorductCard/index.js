import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
class index extends React.Component {
  render() {
    let { name, gallery, prices, id } = this.props.product;
    let price = prices.filter(
      (price) => price["currency"]["symbol"] === this.props.selectedCurrency
    );
    price = price[0]["amount"] + " " + price[0]["currency"]["symbol"];
    return (
      <Link to={`/product:${id}`}>
        <div className="card-holder">
          <div className="card-image">
            <img src={gallery[0]} alt="product" />
          </div>
          <p>{name}</p>
          <div>{price}</div>
        </div>
      </Link>
    );
  }
}

export default index;
