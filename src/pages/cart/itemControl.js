import React from "react";
import MiniCartGallery from "../../components/popup/MiniCart/miniCartGallery";
import { ReactComponent as PlusIcon } from "../../assetes/Icons/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../assetes/Icons/minusIcon.svg";

class index extends React.Component {
  render() {
    let { count, gallery } = this.props.item;
    return (
      <div className="item-cart-control">
        <div className="flex-col">
          <div className="item-btn" onClick={this.props.increase}>
            <span>
              <PlusIcon
                style={{
                  height: "max-content",
                }}
                width="100%"
              />
            </span>
          </div>
          <div>{count}</div>
          <div className="item-btn" onClick={this.props.decrease}>
            <MinusIcon
              style={{
                height: "100%",
              }}
              width="100%"
            />
          </div>
        </div>
        <MiniCartGallery images={gallery} product={this.props.item} />
      </div>
    );
  }
}

export default index;
