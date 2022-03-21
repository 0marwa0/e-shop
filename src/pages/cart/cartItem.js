import React from "react";
import { getPrice } from "../../utlizeFun";

class index extends React.Component {
  render() {
    let { name, brand, attributes, prices } = this.props.item;
    let price =
      this.props.currency + " " + getPrice(prices, this.props.currency);
    return (
      <>
        <div className="item-cart-info">
          <div className="bold-text">{brand}</div>
          <div>{name}</div>
          <div className="bold-text">{price}</div>
          {attributes.map((item) => (
            <div className="attr-holder">
              <span> {item.name}</span>

              <div className="flex">
                {item.items.map((value) => (
                  <div
                    className={
                      value.value === item.selected
                        ? "box-selected"
                        : "box-container"
                    }
                    style={{
                      background: item.type === "swatch" ? value.value : "",
                    }}
                  >
                    {item.type === "text" ? value.value : ""}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default index;
