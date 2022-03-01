import React from "react";
import "./index.css";
class index extends React.Component {
  state = {
    currentCurrency: "USD",
  };
  getProductPrice = (data, current) => {
    let price;

    return price;
  };
  render() {
    let { name, gallery, prices } = this.props.product;
    let price = prices.filter(
      (price) => price["currency"]["label"] === this.state.currentCurrency
    );
    price = price[0]["currency"]["symbol"] + price[0]["amount"];

    return (
      <div className="card-holder">
        <div
          style={{
            backgroundImage: `url(${gallery[0]})`,
            height: "100%",
            width: "100%",
          }}
          // ={gallery[0]} alt="product" width="100%" height="100%"
        ></div>
        <p>{name}</p>
        <div>{price}</div>
      </div>
    );
  }
}

export default index;
