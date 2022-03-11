import React from "react";

class Attributes extends React.Component {
  state = {
    selectedItem: [],
  };

  selectedItem = (name, item) => {
    let selectedItem = this.state.selectedItem ? this.state.selectedItem : [];
    let newItems = selectedItem.filter(function (obj) {
      return obj.name !== name;
    });
    this.setState(
      () => ({
        selectedItem: [...newItems, { name, item }],
      }),
      () => {
        this.props.validItems(this.state.selectedItem);
      }
    );
  };
  render() {
    let attributes = this.props.values;
    return (
      <div>
        {attributes
          ? attributes.map((item) => (
              <div className="Attribute-holder">
                <p>{item.name + " :"}</p>
                {item.name === "Color" ? (
                  <div className="flex">
                    {item.items.map((value) => (
                      <div
                        onClick={() =>
                          this.selectedItem(item.name, value.value)
                        }
                        style={{ backgroundColor: `${value.value}` }}
                        className="product-size"
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="flex">
                    {item.items.map((value) => (
                      <div
                        className="product-size"
                        onClick={() =>
                          this.selectedItem(item.name, value.value)
                        }
                      >
                        {value.value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default Attributes;
