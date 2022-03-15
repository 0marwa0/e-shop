import React from "react";
import AttributeItem from "./AttributeItem";
class Attributes extends React.Component {
  state = {
    selectedItems: [],
    selected: "",
    attributes: this.props.savedAttributes
      ? this.props.savedAttributes
      : this.props.values,
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
    return (
      <div>
        {this.props.values?.map((item) => (
          <div className="Attribute-holder">
            <p>{item.name + " :"}</p>
            <div className="flex">
              {item?.items.map((value) => (
                <AttributeItem
                  type={item.type}
                  value={value.value}
                  name={item.name}
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

export default Attributes;
