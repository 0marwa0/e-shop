import React from "react";
import AttributeItem from "./AttributeItem";
import { connect } from "react-redux";
class Attributes extends React.Component {
  state = {
    selectedItems: [],
    selected: "",
    item: {},
  };

  selectedItem = (name, item) => {
    let selectedItem = this.state.selectedItems ? this.state.selectedItems : [];
    let newItems = selectedItem.filter(function (item) {
      return item.name !== name;
    });
    this.setState(
      () => ({
        selectedItems: [...newItems, { name, item }],
      }),
      () => {
        this.props.validItems(this.state.selectedItems);
      }
    );
  };

  render() {
    let id = this.props.product.id;
    let inCart = this.props.cart?.some((item) => item.id === id);
    let item = this.props.cart?.filter((item) => {
      return item.id === id;
    });
    item = item ? item[0] : null;

    let product = inCart ? item.attributes : this.props.product.attributes;
    console.log("in the cart", product);
    return (
      <div>
        {product?.map((item) => (
          <div className="Attribute-holder">
            <p>{item.name + " :"}</p>
            <div className="flex">
              {console.log(item, "the first one")}
              {item.items.map((value, i) => (
                <AttributeItem
                  index={i}
                  value={value.value}
                  item={item}
                  onSelect={this.selectedItem}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const state = (state) => {
  return {
    cart: state.cart.items,
  };
};
export default connect(state)(Attributes);
